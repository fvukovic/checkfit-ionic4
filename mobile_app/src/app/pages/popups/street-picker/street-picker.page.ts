import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { NavParams } from "@ionic/angular";


@Component({
  selector: 'app-street-picker',
  templateUrl: './street-picker.page.html',
  styleUrls: ['./street-picker.page.scss'],
})
export class StreetPickerPage implements OnInit {
  address:String

  constructor( public navParams: NavParams, private modalControler:ModalController) {
    
   }

  ngOnInit() {
  }
  closeModal(){ 
    this.modalControler.dismiss();
  }
  passAddress() {
    alert(this.navParams.get("picker"))
    let data = {
      picker: this.navParams.get("picker"),
      address:this.address
    }
    this.modalControler.dismiss(data);
  }
}
