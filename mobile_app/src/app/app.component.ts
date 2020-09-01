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
import { AlertController } from '@ionic/angular';
 

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
        .preloadSimple("uniqueId1", "assets/mp3.mp3")
        .then(this.onSuccess, this.onError);
      this.socketService.initializeWebSocketConnection();
      this.storage.get("username").then(username => {
        if (username != null) {
          setInterval(() => {
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
    console.log(JSON.stringify(message))
    switch (message.messageType) {
      case "DRIVE_REQUEST": {
        setTimeout(() => {
          this.modalcontroller
          .create({
            component: DriveRequestPage,
            componentProps: { message: message }
          })
          .then(modalElement => {
            this.nativeAudio.play("uniqueId1");
            modalElement.present();
          });
        }, 0);
        
        break;
      }
      case "INFORM_DRIVE_CUSTOMER": {
        this.updateDistance(message);
        break;
      }
      case "INFORM_DRIVE_DRIVER": {
        // TODO removaj ovo
        this.socketService.send("/server-receiver", {
          type: "driver",
          messageType: "INFORM_DRIVE_DRIVER",
          toLat: "46.1231231",
          toLong: "16.312312",
          fromLat: message.fromLat,
          fromLong: message.fromLong
        });
        this.locationService.getUserPosition().then(
          val => {
            this.socketService.send("/server-receiver", {
              type: "driver",
              messageType: "INFORM_DRIVE_DRIVER",
              toLat: val["coords"].latitude,
              toLong: val["coords"].longitude,
              fromLat: message.fromLat,
              fromLong: message.fromLong
            });
          },
          err => console.error(err)
        );
        break;
      }
      case 'ACCEPT_DRIVE': {
        // TODO remove popup
        this.events.publish('driveAccepted', message);
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
        this.nativeAudio.play("uniqueId1");

        alert(
          "Dolazi nova Vožnja! \n \n" +
          "OD: " + this.fromAddress + "\n" +
          "DO: " + this.toAddress + "\n"  
        );
 
        break;
      }
      case "FINISH_DRIVE_CUSTOMER": {
        //TODO remove popup
        this.router.navigate(["/customer-homepage"]);
        alert("Vaše vozilo je na mjestu!");
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

        alert(
          "Vozač: " +
            message.driver +
            " je u nevolji!!! \n Lokacija: " +
            this.fromAddress
        );
        break;
      }
      case "DRIVER_INFO": {
        this.events.publish("driverInfo", message);
        break;
      }
      case "DRIVER_NOTIFICATION": {
        alert("Nova poruka: \n \n "+ message.driver);
      }
    }
  }

  async getAddressFromGeolocation(latitude, longitude) {
    await this.locationService.getReverseGeocode2(latitude, longitude);
  }

  async updateDistance(message) {
    let distance =
      (await this.locationService.getDistanceFromLatLonInKm(
        message.fromLat,
        message.fromLong,
        message.toLat,
        message.toLong
      )) + " km";
    this.events.publish("informCustomer", distance);
  }

  ngOnInit() {
    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
    }
  }

  logout() {
    this.isUserLoggedIn = false;
    this.storage.set("username", null);
    location.reload();
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
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
