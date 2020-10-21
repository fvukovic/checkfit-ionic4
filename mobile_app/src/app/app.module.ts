import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { LoginPage } from './pages/login/login.page';
import { CustomerHomepagePage } from './pages/customer-homepage/customer-homepage.page';
import { FormsModule } from '@angular/forms';
import { AboutUsPage } from './pages/about-us/about-us.page';
import { DriveRequestPage} from './pages/popups/drive-request/drive-request.page';
import { MyRidesPage } from './pages/my-rides/my-rides.page';
import { StreetPickerPage } from './pages/popups/street-picker/street-picker.page';
import { SearchRidePage } from './pages/search-ride/search-ride.page';
import { DriverHomepagePage } from './pages/driver-homepage/driver-homepage.page';
import { PhoneNumberPage } from './pages/popups/phone-number/phone-number.page';
import { ActiveRidesComponent } from './pages/active-rides/active-rides.component';
import { InactiveRidesComponent } from './pages/inactive-rides/inactive-rides.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent,
    LoginPage,
     CustomerHomepagePage,
     MyRidesPage, InactiveRidesComponent,
      AboutUsPage , StreetPickerPage,
      SearchRidePage, DriveRequestPage,
      DriverHomepagePage, PhoneNumberPage,
      ActiveRidesComponent, InactiveRidesComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeGeocoder,
    UniqueDeviceID,
    AndroidPermissions,
    NativeAudio
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
