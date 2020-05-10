import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule,ModalController } from '@ionic/angular';

import { DriveRequestPageRoutingModule } from './drive-request-routing.module';

import { DriveRequestPage } from './drive-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriveRequestPageRoutingModule
  ],
  declarations: [DriveRequestPage]
})
export class DriveRequestPageModule {
  
  constructor(private modalController:ModalController){

  }


  
}
