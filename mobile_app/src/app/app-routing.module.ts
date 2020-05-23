import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login/',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'customer-homepage',
    loadChildren: () => import('./pages/customer-homepage/customer-homepage.module').then( m => m.CustomerHomepagePageModule)
  },
  {
    path: 'my-rides',
    loadChildren: () => import('./pages/my-rides/my-rides.module').then( m => m.MyRidesPageModule)
  },
  {
    path: 'street-picker',
    loadChildren: () => import('./pages/popups/street-picker/street-picker.module').then( m => m.StreetPickerPageModule)
  },
  {
    path: 'search-ride',
    loadChildren: () => import('./pages/search-ride/search-ride.module').then( m => m.SearchRidePageModule)
  },
  {
    path: 'drive-request',
    loadChildren: () => import('./pages/popups/drive-request/drive-request.module').then( m => m.DriveRequestPageModule)
  },
  {
    path: 'driver-homepage',
    loadChildren: () => import('./pages/driver-homepage/driver-homepage.module').then( m => m.DriverHomepagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
