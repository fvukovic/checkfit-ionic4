import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';

import { StreetPickerPageRoutingModule } from './street-picker-routing.module';

import { StreetPickerPage } from './street-picker.page'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StreetPickerPageRoutingModule
  ],
  declarations: [StreetPickerPage]
})
export class StreetPickerPageModule implements OnInit {
  ngOnInit(): void { 
  }
  constructor(private modalController:ModalController){

  }
}
