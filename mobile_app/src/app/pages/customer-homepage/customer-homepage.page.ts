import { Component, OnInit, AfterContentInit, ViewChild } from "@angular/core";
import { ModalController, Platform } from "@ionic/angular";
import { StreetPickerPage } from "../popups/street-picker/street-picker.page";
import { Router } from "@angular/router";
import { LocationService } from "../../services/location.service";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import {
  Geolocation,
  GeolocationOptions,
  Geoposition,
  PositionError
} from "@ionic-native/geolocation/ngx";
import { Storage } from "@ionic/storage";
import { SocketService } from "../../services/socket.service";

declare var google;
@Component({
  selector: "app-customer-homepage",
  templateUrl: "./customer-homepage.page.html",
  styleUrls: ["./customer-homepage.page.scss"]
})
export class CustomerHomepagePage implements OnInit, AfterContentInit {
  map;
  fromAddress: String;
  toAddress: String;
  currentLocation: any;
  numberOfPersons: String;
  isUserLoggedIn:boolean = false;
  @ViewChild("mapElement", { static: true }) mapElement;

  constructor(
    private modalcontroller: ModalController,
    private router: Router,
    private locationService: LocationService,
    private androidPermissions: AndroidPermissions,
    private platform: Platform,
    private geolocation: Geolocation,
    private storage: Storage,
    private socketService: SocketService
  ) {
    this.fromAddress = "Unesite adresu polaska!";
    this.toAddress = "Unesite adresu odredišta!";
  }

  ngOnInit() {
    this.storage.get("username").then(val => {
      if (val != null) {
        this.isUserLoggedIn = true;
      }
    });
  }

  ngAfterContentInit(): void {
    this.platform.ready().then(() => {
      let perms = [
        "android.permission.ACCESS_COARSE_LOCATION",
        "android.permission.ACCESS_FINE_LOCATION",
        "android.permission.ACCESS_BACKGROUND_LOCATION"
      ];

      this.androidPermissions
        .checkPermission(
          this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION
        )
        .then(result => {
          if (result.hasPermission == false) {
            location.reload();
          }
          navigator.geolocation.getCurrentPosition(resp => {
            this.initializeMap();
          });
        });
    });
  }

  async initializeMap() {
    this.currentLocation = await this.locationService.getUserPosition();
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: {
        lat: this.currentLocation.coords.latitude,
        lng: this.currentLocation.coords.longitude
      },
      zoom: 16
    });
    var streetLocation = await this.locationService.getReverseGeocode(
      this.currentLocation.coords.latitude,
      this.currentLocation.coords.longitude
    );
    this.fromAddress =
      streetLocation[0].thoroughfare +
      "," +
      streetLocation[0].subThoroughfare +
      "," +
      streetLocation[0].locality;
    this.toAddress =
      streetLocation[0].thoroughfare +
      "," +
      streetLocation[0].subThoroughfare +
      "," +
      streetLocation[0].locality;

    console.log(this.fromAddress);
    this.addMarker(this.map);
  }

  addMarker(map: any) {
    let marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: map.getCenter()
    });
  }

  async openStreetPicker(picker) {
    const modal = await this.modalcontroller.create({
      component: StreetPickerPage,
      componentProps: {
        picker: picker
      }
    });

    modal.onDidDismiss().then(response => {
      const data = response["data"];
      if (data["address"] == null) {
        return;
      }
      if (data["picker"] == "from") {
        this.fromAddress = data["address"];
      } else {
        this.toAddress = data["address"];
      }
    });

    return await modal.present();
  }

  setNumberOfPersons(numberOfPersons) {
    this.numberOfPersons = numberOfPersons;
  }

  async orderTaxi() {
    let fromAddress = await this.locationService.getForwardGeocode2(
      this.fromAddress 
    );
    let toAddress = await this.locationService.getForwardGeocode2(
      this.toAddress
    );
    let params = {
      fromLat: fromAddress["latitude"],
      fromLong: fromAddress["longitude"],
      toLat: toAddress["latitude"],
      toLong: toAddress["longitude"],
      persons: this.numberOfPersons
    };
 

    //   let params = {
    //   fromLat: "46.13123",
    //   fromLong: "16.123144",
    //   toLat: "46.13123",
    //   toLong: "16.123144",
    // };
    this.router.navigate(["/search-ride"], {
      queryParams: { data: JSON.stringify(params) }
    });
  }
     
  async callSOS(){
    let currentLocation = await this.locationService.getUserPosition();
    console.log("DSAD")
    console.log(currentLocation)
    this.storage.get("username").then(username => {
      this.storage.get("username").then(phone => {
      this.socketService.send("/server-receiver", {
        type: "customer",
        messageType: "SOS",
        driver: username,
        phoneNumber: phone,
        fromLat: currentLocation.coords.latitude,
        fromLong: currentLocation.coords.longitude,
      });
     });
    });
  } 
}
