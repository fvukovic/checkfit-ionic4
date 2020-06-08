import { Component, OnInit, AfterContentInit, ViewChild } from "@angular/core";
import { SocketService } from "../../services/socket.service";
import { ActivatedRoute } from "@angular/router";
import { Events } from "@ionic/angular";
import { Storage } from "@ionic/storage";

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

  constructor(
    public socketService: SocketService,
    private route: ActivatedRoute,
    public events: Events,
    private storage: Storage
  ) {
    
    // var handle = setInterval(data => {
    //   if (this.isDriveAccepted) {
    //     clearInterval(handle);
    //   } else {
    //   }
    // }, 5000);

    events.subscribe("driveAccepted", message => {
      this.isDriveAccepted = true;
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
    this.storage.get("phoneNumber").then(val => {
      this.socketService.send("/server-receiver", {
        type: "customer",
        messageType: "DRIVE_REQUEST",
        fromLat: params.fromLat,
        fromLong: params.fromLong,
        toLat: params.toLat,
        toLong: params.toLong,
        phoneNumber: val
      });
    });
  }

  ngAfterContentInit(): void {}

  ngOnInit() {}
}
