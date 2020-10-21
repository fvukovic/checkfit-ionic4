import { Component, OnInit } from "@angular/core";
import { LocationService } from "../../services/location.service";
import { SocketService } from "../../services/socket.service";
import { Storage } from "@ionic/storage";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: "app-my-rides",
  templateUrl: "./my-rides.page.html",
  styleUrls: ["./my-rides.page.scss"]
})
export class MyRidesPage implements OnInit {
  isUserLoggedIn: boolean = false;
  invoiceList: any[];


  constructor(
    private locationService: LocationService,
    private socketService: SocketService,
    private storage: Storage,
    private http: HttpClient
  ) {
    this.storage.get("username").then(val => {
      if (val != null) {
        this.isUserLoggedIn = true;
      }
    });
  }

  ngOnInit() {
     this.storage.get("username").then(val => {
      if (val != null) {

    this.http
    .post("https://taxi-mura.herokuapp.com/api/drivesByUsername", {
      username: val,
    })
    .pipe(
        catchError((err: any) => {
          return Observable.throw(err || 'Internal Server error');
        })
      )
    .subscribe((data: any) => {
                this.invoiceList = data
                alert(JSON.stringify(data))

        //   Object.entries(data).forEach(([key, value]) => {
    //     // alert("JSON.stringify(value)" + value.fromLat + " - "+  value.fromLong)

    //     this.locationService.getReverseGeocode(value.fromLat, value.fromLong).then(
    //       from =>{
    //         this.locationService.getReverseGeocode(value.toLat, value.toLong).then(
    //           to =>{
    //             this.invoiceList.push({"fromAddress":
    //             from[0].thoroughfare +
    //             "," +
    //             from[0].subThoroughfare +
    //             "," +
    //             from[0].locality,"toAddress":
    //             to[0].thoroughfare +
    //             "," +
    //             to[0].subThoroughfare +
    //             "," +
    //             to[0].locality, "persons": value.persons, km:value.km, time:value.time.replace("T"," ").replace("Z", "") })
    //             console.log(JSON.stringify(this.invoiceList))
    //           }
    //         )
    //        }
    //     )
    //   });
    });
      }
    });
  }

  async getAddressFromGeolocation(latitude, longitude){
    return ;
  }

  async callSOS() {
    let currentLocation = await this.locationService.getUserPosition();
    console.log("DSAD");
    console.log(currentLocation);
    this.storage.get("username").then(username => {
      this.storage.get("username").then(phone => {
        this.socketService.send("/server-receiver", {
          type: "customer",
          messageType: "SOS",
          driver: username,
          phoneNumber: phone,
          fromLat: currentLocation["cords"]["latitude"],
          fromLong: currentLocation["cords"]["latitude"]
        });
      });
    });
  }
}
