import { Component, OnInit, AfterContentInit, ViewChild } from "@angular/core";
import { SocketService } from "../../services/socket.service";
import { ActivatedRoute } from "@angular/router";
import { Events } from "@ionic/angular";
import { Sim } from "@ionic-native/sim/ngx";

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
    private sim: Sim
  ) { 
    events.subscribe("driveAccepted", message => {
      this.isDriveAccepted = true;
    });
 

    events.subscribe("informCustomer", message => {
      console.log(message)
      this.kms = message;
    });

    this.sim.getSimInfo().then(
      info => console.log("Sim info: ", info),
      err => console.log("Unable to get sim info: ", err)
    );
    const firstParam: string = this.route.snapshot.queryParamMap.get("data");
    let params = JSON.parse(firstParam);
    socketService.send("/server-receiver", {
      type: "customer",
      messageType: "DRIVE_REQUEST",
      fromLat: params.fromLat,
      fromLong: params.fromLong,
      toLat: params.toLat,
      toLong: params.toLong
    });
  }

  ngAfterContentInit(): void {}

  ngOnInit() {}
}
