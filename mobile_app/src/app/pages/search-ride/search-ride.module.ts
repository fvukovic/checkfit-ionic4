import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchRidePageRoutingModule } from './search-ride-routing.module';

import { SearchRidePage } from './search-ride.page';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:8988', options: {} };


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchRidePageRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  declarations: [SearchRidePage]
})
export class SearchRidePageModule {}
