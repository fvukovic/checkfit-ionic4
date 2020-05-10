import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchRidePageRoutingModule } from './search-ride-routing.module';

import { SearchRidePage } from './search-ride.page';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

 


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchRidePageRoutingModule
  ],
  declarations: [SearchRidePage]
})
export class SearchRidePageModule {}
