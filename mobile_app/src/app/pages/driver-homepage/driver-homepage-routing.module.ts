import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverHomepagePage } from './driver-homepage.page';

const routes: Routes = [
  {
    path: '',
    component: DriverHomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverHomepagePageRoutingModule {}
