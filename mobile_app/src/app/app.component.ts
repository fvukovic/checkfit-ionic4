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
import { Variable } from '@angular/compiler/src/render3/r3_ast';

const WEBSOCKET_URL = "ws://localhost:9092/socket";
const EXAMPLE_URL = "/topic/server-broadcaster";

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
  fromAddress:String;
  task: Variable;

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
  ) {
    //socketService.getUniqueId();
    this.router.navigateByUrl("customer-homepage");
    this.initializeApp();
    translate.setDefaultLang("en");
    this.platform.ready().then(() => {
    this.socketService.initializeWebSocketConnection();

    setInterval(() => { 
    }, 300);

 
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
    switch (message.messageType) {
      case "DRIVE_REQUEST": {
        this.modalcontroller
          .create({
            component: DriveRequestPage,
            componentProps: { message: message }
          })
          .then(modalElement => {
            console.log(message);
            modalElement.present();
          });
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
      case "ACCEPT_DRIVE": {
        //TODO remove popup
        this.events.publish("driveAccepted", message);
        break;
      }
      case "ACCEPT_DRIVE_DRIVER": {
        this.router.navigate(["/driver-homepage"], {
          queryParams: { data: JSON.stringify(message), driveIsStarted: true }
        });
        break;
      }
      case "FINISH_DRIVE_CUSTOMER": {
        //TODO remove popup
        this.router.navigate(["/customer-homepage"]);
        alert("Vaše vozilo je na mjestu!");
        break;
      }
      case "SOS":{
 
        var streetLocation = await this.locationService.getReverseGeocode(
          message.fromLat,
          message.fromLong,
        );
        this.fromAddress =
          streetLocation[0].thoroughfare +
          "," +
          streetLocation[0].subThoroughfare +
          "," +
          streetLocation[0].locality;



        alert("Vozač: " + message.driver + " je u nevolji!!! \n Lokacija: " + this.fromAddress)
      }
    }
  }

  async getAddressFromGeolocation(latitude, longitude){ 
   await this.locationService.getReverseGeocode2(
      latitude, longitude
  );
  }

  async updateDistance(message) {
    let distance = await this.locationService.getDistanceFromLatLonInKm(
      message.fromLat,
      message.fromLong,
      message.toLat,
      message.toLong
    );
    this.events.publish("informCustomer", distance);
  }

  ngOnInit() {
    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
    }
  }

  logout() {
    this.isUserLoggedIn = false;
    location.reload();
    this.storage.set("username", null);
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

}