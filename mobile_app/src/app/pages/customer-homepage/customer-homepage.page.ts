import { Component, OnInit, AfterContentInit, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { StreetPickerPage } from "../popups/street-picker/street-picker.page";
import { Router } from "@angular/router";
import { LocationService } from '../../services/location.service';
import { NativeGeocoderResult } from "@ionic-native/native-geocoder/ngx"; 

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
  currentLocation:any;
  numberOfPersons:String
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
    this.initializeMap();
  }

 async initializeMap(){
    this.currentLocation =  await this.locationService.getUserPosition();
     this.map = new google.maps.Map(this.mapElement.nativeElement, {
       center: { lat: this.currentLocation.coords.latitude, lng: this.currentLocation.coords.longitude },
       zoom: 16
     });
      var streetLocation = await this.locationService.getReverseGeocode(this.currentLocation.coords.latitude,this.currentLocation.coords.longitude)
      this.fromAddress = streetLocation[0].thoroughfare + "," + streetLocation[0].subThoroughfare + "," + streetLocation[0].locality
      this.toAddress = streetLocation[0].thoroughfare + "," + streetLocation[0].subThoroughfare + "," + streetLocation[0].locality

      console.log(this.fromAddress)
      this.addMarker(this.map)
    }

    addMarker(map:any){
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

  setNumberOfPersons(numberOfPersons){
    this.numberOfPersons = numberOfPersons;
  }

  async orderTaxi() {  
    let fromAddress = await this.locationService.getForwardGeocode2(this.fromAddress + ", Varaždin, Croatia"); 
    let toAddress = await this.locationService.getForwardGeocode2(this.toAddress + ", Varaždin, Croatia");  
    let params = {
      fromLat: fromAddress["latitude"],
      fromLong: fromAddress["longitude"],
      toLat:toAddress["latitude"],
      toLong:toAddress["longitude"],
      persons: this.numberOfPersons
    };

    //   let params = {
    //   fromLat: "46.13123",
    //   fromLong: "16.123144",
    //   toLat: "46.13123",
    //   toLong: "16.123144",
    // };
    this.router.navigate(["/search-ride"],  { queryParams: {data:JSON.stringify(params)} });
  }
}
