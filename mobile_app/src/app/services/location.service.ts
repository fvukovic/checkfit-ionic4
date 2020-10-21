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

declare var google;
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
  ) {
    this.nativeGeocoder
    .reverseGeocode(45.555, 16.666, this.optionsGeocode).then((result: NativeGeocoderResult[]) =>{
    });
  }

  getReverseGeocode(latitude, longitude) {
   return this.nativeGeocoder
      .reverseGeocode(parseFloat(latitude), parseFloat(longitude), this.optionsGeocode)
      .catch((error: any) => alert(error));
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
        timeout: 2000
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
      timeout: 3000
    };

    this.nativeGeocoder
    .reverseGeocode(parseFloat(latitude), parseFloat(longitude), this.optionsGeocode).then((result: NativeGeocoderResult[]) =>
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

  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2, callback) {

    var service = new google.maps.DistanceMatrixService;
    var origin = new google.maps.LatLng(lat1, lon1);
    var destination = new google.maps.LatLng(lat2, lon2);
    service.getDistanceMatrix({
      origins: [origin],
      destinations: [destination],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    }, callback);
  }

   deg2rad(deg) {
    return deg * (Math.PI / 180)
  }

}
