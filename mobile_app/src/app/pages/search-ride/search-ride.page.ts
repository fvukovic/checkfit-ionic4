import { Component, OnInit, AfterContentInit, ViewChild } from "@angular/core";
import { SocketService } from "../../services/socket.service";
import { ActivatedRoute } from "@angular/router";
import { Events } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { LocationService } from "../../services/location.service";
import { NgAnalyzeModulesHost } from '@angular/compiler';

@Component({
  selector: "app-search-ride",
  templateUrl: "./search-ride.page.html",
  styleUrls: ["./search-ride.page.scss"]
})
export class SearchRidePage implements OnInit, AfterContentInit {
  map: any;
  lat: String;
  long: String;
  lat2: String;
  long2: String;
  isDriveAccepted: boolean = false;
  kms: String;
  message: any;

  constructor(
    public socketService: SocketService,
    private route: ActivatedRoute,
    public events: Events,
    private storage: Storage,
    private locationService: LocationService 
  ) {
 
    events.subscribe("driveAccepted", message => {
      this.isDriveAccepted = true;
      this.message = message;  
    });
    

    events.subscribe("informCustomer", message => {
      console.log(message);
      this.kms = message;
    });

    events.subscribe("driveIsFinished", message => {
      this.isDriveAccepted = false;
      this.kms = message;
    });
    this.requestDrive();
  }
  requestDrive() {
    const firstParam: string = this.route.snapshot.queryParamMap.get("data");
    let params = JSON.parse(firstParam);
    var _this = this;
    this.storage.get("phoneNumber").then(val => { 
        this.locationService.getDistanceFromLatLonInKm(
        params.fromLat,
        params.fromLong,
        params.toLat,
        params.toLong,
        function(response, status) {  
          _this.socketService.send("/server-receiver", {
            type: "customer",
            messageType: "REQUEST_INCOMING",
            fromLat: params.fromLat,
            fromLong: params.fromLong,
            toLat: params.toLat,
            toLong: params.toLong,
            persons: params.persons,
            phoneNumber: val,
            km:response.rows[0].elements[0].distance.value / 1000
          });
    
       setTimeout(data => {
        _this.socketService.send("/server-receiver", {
          type: "customer",
          messageType: "DRIVE_REQUEST",
          fromLat: params.fromLat,
          fromLong: params.fromLong,
          toLat: params.toLat,
          toLong: params.toLong,
          persons: params.persons,
          phoneNumber: val,
          km:response.rows[0].elements[0].distance.value / 1000
        });
        }, 4000);
        }
      ); 

    });
  }

  ngAfterContentInit(): void {}

  ngOnInit() {}
}
