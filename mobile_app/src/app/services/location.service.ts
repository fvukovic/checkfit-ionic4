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

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {
           resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }

  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    console.log("1111111")
    console.log(lat1+ " " + lon1 + " "+ lat2+ " "  + lon1)
    var R = 6371; // Radius of the earth in kilometers
    var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in KM
    console.log(d)
    console.log((Math.round(d * 100) / 100) + " km")
    return (Math.round(d * 100) / 100) + " km";
  }
  
   deg2rad(deg) {
    return deg * (Math.PI / 180)
  }

}
