import { Component, OnInit, AfterContentInit, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { StreetPickerPage } from "../popups/street-picker/street-picker.page";
import { Router } from "@angular/router";
import { LocationService } from "../../services/location.service";
import { NativeGeocoderResult } from "@ionic-native/native-geocoder/ngx";

declare var google;
@Component({
  selector: "app-driver-homepage",
  templateUrl: "./driver-homepage.page.html",
  styleUrls: ["./driver-homepage.page.scss"]
})
export class DriverHomepagePage implements OnInit {
  map;
  fromAddress: String;
  toAddress: String;
  currentLocation: any;
  @ViewChild("mapElement", { static: true }) mapElement;
  constructor(private locationService: LocationService) {
    this.initializeMap();
  }

  async initializeMap() {
    this.currentLocation = await this.locationService.getUserPosition();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: {
        lat: this.currentLocation.coords.latitude,
        lng: this.currentLocation.coords.longitude
      },
      zoom: 16
    });
    var directionsService = new google.maps.DirectionsService();
    directionsDisplay.setMap(this.map);
    var directionsDisplay = new google.maps.DirectionsRenderer();
    this.displayDirection(directionsService, directionsDisplay);
  }

  displayDirection(directionsService, directionsDisplay) {
    directionsService.route(
      {
        origin: new google.maps.LatLng(41.850033, -87.6500523),
        destination: new google.maps.LatLng(41.850033, -87.6500523),
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
}
