import { Injectable } from "@angular/core";
import {
  Geolocation,
  GeolocationOptions,
  Geoposition,
  PositionError
} from "@ionic-native/geolocation/ngx";
import {
  NativeGeocoder,
  NativeGeocoderResult,
  NativeGeocoderOptions
} from "@ionic-native/native-geocoder/ngx";

@Injectable({
  providedIn: "root"
})
export class LocationService {
  options: GeolocationOptions;
  currentPos: Geoposition;
  optionsGeocode: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder
  ) {}

  getReverseGeocode(latitude, longitude) {
   return this.nativeGeocoder
      .reverseGeocode(latitude, longitude, this.optionsGeocode)
      .catch((error: any) => console.log(error));
  }
  getForwardGeocode(address) {
   return this.nativeGeocoder
      .forwardGeocode(address, this.optionsGeocode)
      .catch((error: any) => console.log(error));
  }

   getForwardGeocode2(address) {
    return new Promise((resolve, reject) => {
      this.options = {
        enableHighAccuracy: true,
        timeout: 10000
      };
  
      this.nativeGeocoder
      .forwardGeocode(address, this.optionsGeocode).then((result: NativeGeocoderResult[]) =>
      {
        resolve(result[0]);  
      }),
        (err: PositionError) => {
          console.log("error : " + err.message);
          reject(err.message);
        } 
     });
  }


  getReverseGeocode2(latitude, longitude) {
  return new Promise((resolve, reject) => {
    this.options = {
      enableHighAccuracy: true,
      timeout: 10000
    };

    this.nativeGeocoder
    .reverseGeocode(latitude, longitude, this.optionsGeocode).then((result: NativeGeocoderResult[]) =>
    {
      resolve(result[0]);  
    }),
      (err: PositionError) => {
        console.log("error : " + err.message);
        reject(err.message);
      } 
   });
  }

//   this.locationService.getReverseGeocode(45.5,19).then((result: NativeGeocoderResult[]) => 
//   { 
//     result[0]
//   });
//   this.locationService.getForwardGeocode("Berlin, Germany").then((result: NativeGeocoderResult[]) =>
//   {
//     alert(JSON.stringify(result[0])) 
//   }
//  )

  getUserPosition() {
    return new Promise((resolve, reject) => {
      this.options = {
        enableHighAccuracy: true,
        timeout: 10000
      };

      this.geolocation.getCurrentPosition(this.options).then(
        (pos: Geoposition) => {
          this.currentPos = pos;
          console.log(pos);
          const location = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            time: new Date()
          };
          console.log("loc", location);
          resolve(pos);
        },
        (err: PositionError) => {
          console.log("error : " + err.message);
          reject(err.message);
        }
      );
    });
  }
}
