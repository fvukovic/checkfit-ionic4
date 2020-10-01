import { CustomerHomepagePage } from './pages/customer-homepage/customer-homepage.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { AboutUsPage } from './pages/about-us/about-us.page';
import { DriveRequestPage } from './pages/popups/drive-request/drive-request.page';
import { MyRidesPage } from './pages/my-rides/my-rides.page';
import { StreetPickerPage } from './pages/popups/street-picker/street-picker.page';
import { SearchRidePage } from './pages/search-ride/search-ride.page';
import { DriverHomepagePage } from './pages/driver-homepage/driver-homepage.page';
import { PhoneNumberPage } from './pages/popups/phone-number/phone-number.page';
import { ActiveRidesComponent } from './pages/active-rides/active-rides.component';
import { InactiveRidesComponent } from './pages/inactive-rides/inactive-rides.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login/',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'about-us',
    component: AboutUsPage
  },
  {
    path: 'customer-homepage',
   component: CustomerHomepagePage
  },
  {
    path: 'my-rides',
    component: MyRidesPage,
  },
  {
    path: 'street-picker',
    component: StreetPickerPage
  },
  {
    path: 'search-ride',
    component: SearchRidePage
  },
  {
    path: 'drive-request',
    component: DriveRequestPage
  },
  {
    path: 'driver-homepage',
    component: DriverHomepagePage
  },
  {
    path: 'phone-number',
    component: PhoneNumberPage
  },
  {
    path: 'active-rides',
    component: ActiveRidesComponent
  },
  {
    path: 'inactive-rides',
    component: InactiveRidesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
