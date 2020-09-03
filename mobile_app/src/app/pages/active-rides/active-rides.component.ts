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
  selector: "app-active-rides",
  templateUrl: "./active-rides.component.html",
  styleUrls: ["./active-rides.component.scss"]
})
export class ActiveRidesComponent implements OnInit {
  invoiceList: any[] = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private storage: Storage,
    private locationService: LocationService,
    private socketService: SocketService,
    public events: Events
  ) {
    events.subscribe("activeDrives", message => { 
      Object.entries(message['drives']).forEach(([key, value]) => {  
        this.locationService
          .getReverseGeocode(value["fromLat"], value["fromLong"])
          .then(from => {
            this.locationService
              .getReverseGeocode(value["toLat"], value["toLong"])
              .then(to => {
                this.invoiceList.push({
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
                  km: value["km"]
                });
                console.log(JSON.stringify(this.invoiceList));
              });
          });
      }); 
    });
    this.storage.get("username").then(val => {
      if (val != null) {
        this.socketService.send("/server-receiver", {
          type: "driver",
          driver: val,
          messageType: "ACTIVE_DRIVES",
          toLat: "46",
          toLong: "16"
        });
      }
    });
  }

  navigateToDrive(drive): void {
    this.router.navigate(["/driver-homepage"], {
      queryParams: { data: JSON.stringify(drive), driveIsStarted: true }
    });
  }

  ngOnInit() {}
}
