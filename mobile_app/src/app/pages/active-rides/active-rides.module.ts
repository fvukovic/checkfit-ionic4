import { ActiveRidesRoutingModule } from './active-rides-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveRidesComponent } from './active-rides.component';
 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveRidesRoutingModule
  ],
  declarations: [ActiveRidesComponent]
})
export class ActiveRidesModule {}
