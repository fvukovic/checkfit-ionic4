import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {StreetPickerPage} from '../popups/street-picker/street-picker.page';
import { Router } from '@angular/router';

declare var google;
@Component({
  selector: 'app-customer-homepage',
  templateUrl: './customer-homepage.page.html',
  styleUrls: ['./customer-homepage.page.scss'],
})
export class CustomerHomepagePage implements OnInit,AfterContentInit {
   map; 
  @ViewChild("mapElement", { static: true }) mapElement;

  constructor(private modalcontroller:ModalController,private router: Router) { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
  }

  openStreetPicker(picker){
    //TODO handle from and to address
    if(picker == "from"){

    }else if("to"){

    }
    this.modalcontroller.create({component:StreetPickerPage}).then((modalElement)=>{
      console.log(modalElement)
      modalElement.present();
    })
  }

  orderTaxi(){
    let params = {
      "from": "adasd",
      "to":"12312"
    }
    this.router.navigate(['/search-ride'])
  }

}
