import { Component, OnInit, AfterContentInit, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { StreetPickerPage } from "../popups/street-picker/street-picker.page";
import { Router } from "@angular/router";
import { LocationService } from '../../services/location.service';
import {
  NativeGeocoder,
  NativeGeocoderResult,
  NativeGeocoderOptions
} from "@ionic-native/native-geocoder/ngx";
import { from } from 'rxjs';

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
  @ViewChild("mapElement", { static: true }) mapElement;

  constructor(
    private modalcontroller: ModalController,
    private router: Router,
    private locationService: LocationService
  ) {
    this.fromAddress = "Kliknite za unos addrese";
    this.toAddress = "Kliknite za unos addrese";
  }

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }

  async openStreetPicker(picker) {
    let kk = await this.locationService.getForwardGeocode2("Vinkovacka 14, Varaždin, Croatia") 
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

  async orderTaxi() {
    this.locationService.getReverseGeocode(45.5,19).then((result: NativeGeocoderResult[]) => 
    { 
      result[0]
    });
    let fromAddress = await this.locationService.getForwardGeocode2(this.fromAddress + ", Varaždin, Croatia"); 
    let toAddress = await this.locationService.getForwardGeocode2(this.toAddress + ", Varaždin, Croatia");  
    let params = {
      fromLat: fromAddress["latitude"],
      fromLong: fromAddress["longitude"],
      toLat:toAddress["latitude"],
      toLong:toAddress["longitude"],
    };

    this.router.navigate(["/search-ride"],  { queryParams: {data:JSON.stringify(params)} });
  }
}
