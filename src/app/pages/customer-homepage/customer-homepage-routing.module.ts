import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerHomepagePage } from './customer-homepage.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerHomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerHomepagePageRoutingModule {}
