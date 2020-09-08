import { Events } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { SocketService } from "../../services/socket.service";
import { LocationService } from "../../services/location.service";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Component({
  selector: "app-inactive-rides",
  templateUrl: "./inactive-rides.component.html",
  styleUrls: ["./inactive-rides.component.scss"]
})
export class InactiveRidesComponent implements OnInit {
  invoiceList: any[] = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private storage: Storage,
    private locationService: LocationService,
    private socketService: SocketService,
    public events: Events
  ) {
    events.subscribe("webDrives", message => { 
      // alert(JSON.stringify(message['drives']))
      Object.entries(message['drives']).forEach(([key, value]) => {   
        this.locationService
          .getReverseGeocode(value["fromLat"], value["fromLong"])
          .then(from => {
            this.locationService
              .getReverseGeocode(value["toLat"], value["toLong"])
              .then(to => {
                this.invoiceList.push({
                  fromLat:value["fromLat"],
                  fromLong:value["fromLong"],
                  toLat:value["toLat"],
                  toLong:value["toLong"],
                  fromAddress:
                    from[0].thoroughfare +
                    "," +
                    from[0].subThoroughfare +
                    "," +
                    from[0].locality,
                  toAddress:
                    to[0].thoroughfare +
                    "," +
                    to[0].subThoroughfare +
                    "," +
                    to[0].locality,
                  persons: value["persons"],
                  km: value["km"],
                  phoneNumber: value["phoneNumber"],
                  customer: value["customer"]
                }); 
              });
          });
      }); 
    }); 

    this.storage.get("username").then(val => {
      if (val != null) { 
        this.socketService.send("/server-receiver", {
          type: "driver",
          driver: val,
          messageType: "WEB_DRIVES",
          toLat: "46",
          toLong: "16"
        });
      }
    });
  }

  navigateToDrive(drive): void {
    this.storage.get("username").then(username => {
      this.socketService.send("/server-receiver", {
        type: "customer",
        messageType: "ACCEPT_DRIVE",
        customer: drive.customer,
        phoneNumber: drive.phoneNumber,
        fromLat: drive.fromLat,
        fromLong: drive.fromLong,
        toLat: drive.toLat,
        toLong: drive.toLong,
        driver: username
      });
    });
  }

  ngOnInit() {}
}
