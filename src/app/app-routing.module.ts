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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
