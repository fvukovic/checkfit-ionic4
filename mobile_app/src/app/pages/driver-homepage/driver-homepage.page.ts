import {
  Component,
  OnInit,
  AfterContentInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import { ModalController } from "@ionic/angular";
import { StreetPickerPage } from "../popups/street-picker/street-picker.page";
import { Router } from "@angular/router";
import { LocationService } from "../../services/location.service";
import { NativeGeocoderResult } from "@ionic-native/native-geocoder/ngx";
import { ActivatedRoute } from "@angular/router";
import { SocketService } from "../../services/socket.service";
import { Storage } from "@ionic/storage";

declare var google;
@Component({
  selector: "app-driver-homepage",
  templateUrl: "./driver-homepage.page.html",
  styleUrls: ["./driver-homepage.page.scss"]
})
export class DriverHomepagePage implements OnInit {
  map;
  toAddress: String;
  currentLocation: any;
  fromAddress: String;
  toddress: String;
  isDriveStarted: boolean;
  message: any;
  phoneNumber: String;
  isUserLoggedIn: boolean = false;

  @ViewChild("mapElement", { static: true }) mapElement: ElementRef;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

  constructor(
    private locationService: LocationService,
    private route: ActivatedRoute,
    private socketService: SocketService,
    private storage: Storage
  ) {
    this.storage.get("username").then(val => {
      if (val != null) {
        this.isUserLoggedIn = true;
      }
    });
    this.initializeMap();

    const firstParam: string = this.route.snapshot.queryParamMap.get("data");
    if (firstParam != null) {
      let message = JSON.parse(firstParam); 
      this.message = message;
      this.phoneNumber = message.phoneNumber;
      const driveIsStarted: string = this.route.snapshot.queryParamMap.get(
        "driveIsStarted"
      );

      if (driveIsStarted == "true") {
        //TODO makni ovo na kraju
        this.isDriveStarted = true;
      }

      this.directionsDisplay.setMap(this.map);
      //this.calculateAndDisplayRoute()
      this.populateAddress(this.message);
    }
  }
  ngAfterContentInit() {}

  calculateAndDisplayRoute() {
    const that = this;
    this.directionsService.route(
      {
        origin: this.fromAddress,
        destination: this.toAddress,
        travelMode: "DRIVING"
      },
      (response, status) => {
        if (status === "OK") {
          that.directionsDisplay.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }

  async populateAddress(message) {
    // alert(JSON.stringify(message))
    var fromAddress = await this.locationService.getReverseGeocode(
      message.fromLat,
      message.fromLong
    );
    this.fromAddress =
      fromAddress[0].thoroughfare +
      "," +
      fromAddress[0].subThoroughfare +
      "," +
      fromAddress[0].locality;

    var toAddress = await this.locationService.getReverseGeocode(
      message.toLat,
      message.toLong
    );
    this.toAddress =
      toAddress[0].thoroughfare +
      "," +
      toAddress[0].subThoroughfare +
      "," +
      toAddress[0].locality;
    this.calculateAndDisplayRoute();
  }

  async initializeMap() {
    this.currentLocation = await this.locationService.getUserPosition();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: {
        lat: this.currentLocation.coords.latitude,
        lng: this.currentLocation.coords.longitude
      },
      zoom: 16,
      styles:[
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#242f3e"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#746855"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#242f3e"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#263c3f"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#6b9a76"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#38414e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#212a37"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9ca5b3"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#746855"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#1f2835"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#f3d19c"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#2f3948"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#17263c"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#515c6d"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#17263c"
            }
          ]
        }
      ]
    });
    this.directionsDisplay.setMap(this.map);
    var directionsService = new google.maps.DirectionsService();
    directionsDisplay.setMap(this.map);
    var directionsDisplay = new google.maps.DirectionsRenderer();
    this.displayDirection(directionsService, directionsDisplay);
  }

  endDrive(){
    this.storage.get("username").then(username => {
      this.socketService.send("/server-receiver", {
        type: "customer",
        messageType: "FINISH_DRIVE",
        driver: username,
        customer: this.message.customer
      });
    });
    location.reload();
  }

  driverIsOnSpot() { 
    this.storage.get("username").then(username => {
      this.socketService.send("/server-receiver", {
        type: "customer",
        messageType: "ON_SPOT",
        driver: username,
        customer: this.message.customer
      });
    });
  }

  displayDirection(directionsService, directionsDisplay) {
    directionsService.route(
      {
        origin: new google.maps.LatLng(
          this.currentLocation.coords.latitude,
          this.currentLocation.coords.longitude
        ),
        destination: this.toAddress,
        travelMode: "DRIVING"
      },
      (response, status) => {
        if (status === "OK") {
          directionsDisplay.setDirections(response);
        }
      }
    );
  }
  ngOnInit() {}

  async callSOS() {
    this.currentLocation = await this.locationService.getUserPosition();
    console.log("DSAD");
    this.storage.get("username").then(username => {
      this.storage.get("username").then(phone => {
        this.socketService.send("/server-receiver", {
          type: "customer",
          messageType: "SOS",
          driver: username,
          phoneNumber: phone,
          fromLat: this.currentLocation.coords.latitude,
          fromLong: this.currentLocation.coords.longitude
        });
      });
    });
  }
}
