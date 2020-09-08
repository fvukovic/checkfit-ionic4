import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NativeGeocoderResult } from "@ionic-native/native-geocoder/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { ModalController, Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { TranslateService } from "@ngx-translate/core";
import { StompState } from "@stomp/ng2-stompjs";
import { DriveRequestPage } from "./pages/popups/drive-request/drive-request.page";
import { LocationService } from "./services/location.service";
import { SocketService } from "./services/socket.service";
import { Events } from "@ionic/angular";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { PhoneNumberPage } from "./pages/popups/phone-number/phone-number.page";
import { Variable } from "@angular/compiler/src/render3/r3_ast";
import { NativeAudio } from "@ionic-native/native-audio/ngx";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent implements OnInit {
  _this = this;
  messageHistory = [];
  state: string = "NOT CONNECTED";

  greeting: any;
  name: string;
  isUserLoggedIn = false;
  fromAddress: String;
  toAddress: String;
  task: Variable;
  interval;
  modal: any;
  inactiveDrives: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private socketService: SocketService,
    private modalcontroller: ModalController,
    translate: TranslateService,
    private storage: Storage,
    private locationService: LocationService,
    public events: Events,
    private nativeAudio: NativeAudio,
    private alertController: AlertController
  ) {
  
    //socketService.getUniqueId();
    this.router.navigateByUrl("customer-homepage");
    this.initializeApp();
    translate.setDefaultLang("en");
    this.platform.ready().then(() => {
      this.nativeAudio
        .preloadSimple("uniqueId1", "assets/zvuk1.mpeg")
        .then(this.onSuccess, this.onError);
        this.nativeAudio
        .preloadSimple("uniqueId2", "assets/zvuk2.mpeg")
        .then(this.onSuccess, this.onError);
      this.socketService.initializeWebSocketConnection();
      this.storage.get("username").then(username => {
        if (username != null) {  
        
          setInterval(() => {
            this.socketService.send("/server-receiver", {
              type: "driver",
              driver: username,
              messageType: "WEB_DRIVES2",
              toLat: "46",
              toLong: "16"
            });


            this.locationService.getUserPosition().then(
              val => {
                this.socketService.send("/server-receiver", {
                  type: "driver",
                  driver: username,
                  messageType: "DRIVER_INFO",
                  toLat: val["coords"].latitude,
                  toLong: val["coords"].longitude
                });
              },
              err => console.error(err)
            );
          }, 4000);
        }else{
          this.presentAlert({
            cssClass: "myClass",
            header: "Obavijest", 
            message:
              '<div style="color:red" class="myClass"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Molimo uključite <br/>'
              + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; lokaciju <br/> '
              +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i <br/>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; podatkovni<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; promet</p> </div>',
            buttons: ["OK"]
          }); 
        }
      });

      setTimeout(() => {
        this.socketService.stream().subscribe((message: any) => {
          this.messageHistory.unshift(message.body);
          console.log(message);
          this._this.handleMessage(JSON.parse(message.body));
        });

        this.socketService.state().subscribe((state: StompState) => {
          this.state = StompState[state];
        });
      }, 3000);
    });
  }
  onSuccess(ee) {}

  onError(ee) {}

  initializeApp() {
    this.storage.get("phoneNumber").then(val => {
      if (val == null) {
        this.openPhoneNumberPopup();
      }
    });
    this.storage.get("username").then(val => {
      if (val != null) {
        this.isUserLoggedIn = true;
      }
    });

    // Subscribe to its stream (to listen on messages)

    // Subscribe to its state (to know its connected or not)

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async handleMessage(message) { 
    // if(message.messageType!= "DRIVER_INFO"){
    //   alert(JSON.stringify(message))
    // }
    switch (message.messageType) {
      case "DRIVE_REQUEST": {
         setTimeout(() => {
          this.modal =  this.modalcontroller
            .create({
              component: DriveRequestPage,
              componentProps: { message: message }
            })
            .then(modalElement => {
              this.nativeAudio.play("uniqueId1");
              modalElement.present();
              // this.modal.dismis()
            });
        }, 0);

        break;
      }
      case "INFORM_DRIVE_CUSTOMER": {
        this.updateDistance(message);
        break;
      }
      case "INFORM_DRIVE_DRIVER": {
        this.locationService.getUserPosition().then(
          val => {
            this.socketService.send("/server-receiver", {
              type: "driver",
              messageType: "INFORM_DRIVE_DRIVER",
              toLat: val["coords"].latitude,
              toLong: val["coords"].longitude,
              fromLat: message.fromLat,
              fromLong: message.fromLong,
              customer:message.customer
            });
          },
          err => console.error(err)
        ); 
        break;
      }
      case "ACCEPT_DRIVE": {
        // TODO remove popup
        this.events.publish("driveAccepted", message);
        break;
      }
      case "ACCEPT_DRIVE_DRIVER": {
        this.router.navigate(["/driver-homepage"], {
          queryParams: { data: JSON.stringify(message), driveIsStarted: true }
        });
        break;
      }
      case "REQUEST_INCOMING": {
        // this.presentAlert();
        var streetLocation = await this.locationService.getReverseGeocode(
          message.fromLat,
          message.fromLong
        );
        this.fromAddress =
          streetLocation[0].thoroughfare +
          "," +
          streetLocation[0].subThoroughfare +
          "," +
          streetLocation[0].locality;
        this.nativeAudio.play("uniqueId1");

        var streetLocation2 = await this.locationService.getReverseGeocode(
          message.toLat,
          message.toLong
        );
        this.toAddress =
          streetLocation2[0].thoroughfare +
          "," +
          streetLocation2[0].subThoroughfare +
          "," +
          streetLocation2[0].locality;
        this.nativeAudio.play("uniqueId2");

        this.presentAlert({
          cssClass: "myClass",
          header: "Obavijest", 
          message:
            'Dolazi nova Vožnja!',
          buttons: ["OK"]
        });
 

        break;
      }
      case "FINISH_DRIVE_CUSTOMER": {
        //TODO remove popup
        this.router.navigate(["/customer-homepage"]);
        this.nativeAudio.play("uniqueId1");
        this.presentAlert({
          cssClass: "myClass",
          header: "Obavijest", 
          message:
            '<div style="height: 100%"> Vaše vozilo vas čeka na polazištu! </div>',
          buttons: ["OK"]
        });   
        break;
      }
      case "SOS": {
        var streetLocation = await this.locationService.getReverseGeocode(
          message.fromLat,
          message.fromLong
        );
        this.fromAddress =
          streetLocation[0].thoroughfare +
          "," +
          streetLocation[0].subThoroughfare +
          "," +
          streetLocation[0].locality;
        this.nativeAudio.play("uniqueId1");

        this.presentAlert({
          cssClass: "myClass",
          header: "Obavijest", 
          message:
            '<div style="height: 100%"> Vozač: ' +
            message.driver +
            ' je u nevolji!!! \n Lokacija: ' +
            this.fromAddress + '</div>',
          buttons: ["OK"]
        });
        break;
      }
      case 'DRIVER_INFO': {
        console.log(JSON.stringify(message))
        this.events.publish("driverInfo", message);
        break;
      }
      case "DRIVER_NOTIFICATION": {
        this.nativeAudio.play("uniqueId1");
        this.presentAlert({
          cssClass: "myClass",
          header: "Obavijest", 
          message:
            '<div style="height: 100%">   ' +
            message.driver + '</div>',
          buttons: ["OK"]
        }); 
        break;
      }
      case "ACTIVE_DRIVES":{
        this.events.publish("activeDrives", message);
        break;
      }
      case "WEB_DRIVES":{
        this.events.publish("webDrives", message);
        break;
      }
      case "WEB_DRIVES2":{
        this.inactiveDrives = message['drives'].length;
        break;
      }
      case "REMOVE_REQUEST": {
        this.modalcontroller.dismiss();
        this.presentAlert({
          cssClass: "myClass",
          header: "Obavijest", 
          message:
            '<div style="height: 100%"> Vožnja je prihvaćena od strane drugog vozača!   </div>',
          buttons: ["OK"]
        });
      }
    }
  }

  async getAddressFromGeolocation(latitude, longitude) {
    await this.locationService.getReverseGeocode2(latitude, longitude);
  }

  async updateDistance(message) {
    var _this = this;
    this.locationService.getDistanceFromLatLonInKm(
      message.fromLat,
      message.fromLong,
      message.toLat,
      message.toLong,
      function(response, status) {
        console.log("TUUUUU");
        console.log(message);
        _this.events.publish(
          "informCustomer",
          response.rows[0].elements[0].distance.text
        );
      }
    );
  }

  ngOnInit() {
    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
    }
  }

  logout() {
    this.storage.set("username", null);
    this.isUserLoggedIn = false;
    setTimeout(() => {
      location.reload();
    }, 2000);
  }

  openPhoneNumberPopup() {
    this.modalcontroller
      .create({
        component: PhoneNumberPage
      })
      .then(modalElement => {
        modalElement.present();
      });
  }
  async presentAlert(options) {
    // {
    //   cssClass: 'myClass',
    //   header: 'Alert',
    //   subHeader: 'Subtitle',
    //   message: '<div style="height: 100%"> This is an alert message. </div>',
    //   buttons: ['OK']
    // }
    const alert = await this.alertController.create(options);

    await alert.present();
  }
}
