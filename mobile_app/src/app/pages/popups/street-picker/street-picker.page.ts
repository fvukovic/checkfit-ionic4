import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
@Component({
  selector: 'app-street-picker',
  templateUrl: './street-picker.page.html',
  styleUrls: ['./street-picker.page.scss'],
})
export class StreetPickerPage implements OnInit {

  constructor(private modalControler:ModalController) { }

  ngOnInit() {
  }
  closeModal(){ 
    this.modalControler.dismiss();
  }

}
