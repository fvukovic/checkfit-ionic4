import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerHomepagePageRoutingModule } from './customer-homepage-routing.module';

import { CustomerHomepagePage } from './customer-homepage.page';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    CustomerHomepagePageRoutingModule,
    TranslateModule
  ],
  declarations: [CustomerHomepagePage]
})
export class CustomerHomepagePageModule {}
