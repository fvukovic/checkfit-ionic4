import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { SocketService } from "../../services/socket.service";
import { ActivatedRoute } from '@angular/router';

declare var google;
@Component({
  selector: "app-search-ride",
  templateUrl: "./search-ride.page.html",
  styleUrls: ["./search-ride.page.scss"]
})
export class SearchRidePage implements OnInit, AfterContentInit {  
  map:any;

  @ViewChild("mapElement", { static: true }) mapElement;
  constructor(public socketService: SocketService,    private route: ActivatedRoute
    ) {
    socketService.send("/server-receiver", {
      type: "customer",
      messageType: "DRIVE_REQUEST",
      fromLat: "45.333",
      fromLong: "16.444",
      toLat: "45.333",
      toLong: "16.444"
    });
  }

  ngAfterContentInit(): void {
    const firstParam: string = this.route.snapshot.queryParamMap.get('data');
    let params = JSON.parse(firstParam);
    alert(params["fromLat"])
    this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: params["fromLat"], lng: params["fromLong"]},
          zoom: 8
        });
  }

  ngOnInit() {}
}
