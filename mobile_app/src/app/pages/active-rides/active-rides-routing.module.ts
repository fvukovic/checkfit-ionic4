import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveRidesComponent } from './active-rides.component';

const routes: Routes = [
  {
    path: '',
    component: ActiveRidesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiveRidesRoutingModule {}
