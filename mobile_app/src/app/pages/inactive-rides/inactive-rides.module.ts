import { InactiveRidesRoutingModule } from './inactive-rides-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InactiveRidesComponent } from './inactive-rides.component';
 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InactiveRidesRoutingModule
  ],
  declarations: [InactiveRidesComponent]
})
export class InactiveRidesModule {}
