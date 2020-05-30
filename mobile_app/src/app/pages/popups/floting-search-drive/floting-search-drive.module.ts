import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlotingSearchDrivePageRoutingModule } from './floting-search-drive-routing.module';

import { FlotingSearchDrivePage } from './floting-search-drive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlotingSearchDrivePageRoutingModule
  ],
  declarations: [FlotingSearchDrivePage]
})
export class FlotingSearchDrivePageModule {}
