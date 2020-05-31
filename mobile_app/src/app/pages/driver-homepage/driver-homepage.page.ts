import { Component, OnInit, AfterContentInit, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { StreetPickerPage } from "../popups/street-picker/street-picker.page";
import { Router } from "@angular/router";
import { LocationService } from "../../services/location.service";
import { NativeGeocoderResult } from "@ionic-native/native-geocoder/ngx";
import { ActivatedRoute } from "@angular/router";
import { SocketService } from "../../services/socket.service";



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
  @ViewChild("mapElement", { static: true }) mapElement;
  constructor(private locationService: LocationService, private route: ActivatedRoute, private socketService: SocketService) {
    const firstParam: string = this.route.snapshot.queryParamMap.get("data");
    let message = JSON.parse(firstParam);
    this.message = message;
    const driveIsStarted: string = this.route.snapshot.queryParamMap.get("driveIsStarted");
    if(driveIsStarted=="true"){
      //this.populateAddress(message)
      this.isDriveStarted=true;
    }

    this.initializeMap();
  }

  async populateAddress(message){
    var fromAddress = await this.locationService.getReverseGeocode(message.fromLat, message.fromLong); 
    this.fromAddress = fromAddress[0].thoroughfare + "," + fromAddress[0].subThoroughfare + "," + fromAddress[0].locality
    var toAddress = await this.locationService.getReverseGeocode(message.fromLat, message.fromLong);
    this.toAddress = toAddress[0].thoroughfare + "," + toAddress[0].subThoroughfare + "," + toAddress[0].locality
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

  endDrive(){
    this.socketService.send("/server-receiver", {
      type: "customer",
      messageType: "FINISH_DRIVE",
      customer: this.message.driver
    });
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
