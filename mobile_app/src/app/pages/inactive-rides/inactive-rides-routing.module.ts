import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InactiveRidesComponent } from './inactive-rides.component';

const routes: Routes = [
  {
    path: '',
    component: InactiveRidesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InactiveRidesRoutingModule {}
