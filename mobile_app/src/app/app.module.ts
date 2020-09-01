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
import {StreetPickerPageModule} from './pages/popups/street-picker/street-picker.module';
import {DriveRequestPageModule} from './pages/popups/drive-request/drive-request.module'
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from "@ionic-native/native-geocoder/ngx"; 
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { PhoneNumberPageModule } from "./pages/popups/phone-number/phone-number.module";
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    StreetPickerPageModule,
    DriveRequestPageModule,
    PhoneNumberPageModule,
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
