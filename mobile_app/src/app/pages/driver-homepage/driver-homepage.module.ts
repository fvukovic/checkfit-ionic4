import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverHomepagePageRoutingModule } from './driver-homepage-routing.module';

import { DriverHomepagePage } from './driver-homepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverHomepagePageRoutingModule
  ],
  declarations: [DriverHomepagePage]
})
export class DriverHomepagePageModule {}
