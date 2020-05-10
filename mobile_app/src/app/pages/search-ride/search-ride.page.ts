import { Component, OnInit } from "@angular/core";
import { SocketService } from "../../services/socket.service";
@Component({
  selector: "app-search-ride",
  templateUrl: "./search-ride.page.html",
  styleUrls: ["./search-ride.page.scss"]
})
export class SearchRidePage implements OnInit {
  constructor(public socketService: SocketService) {
    socketService.send("/server-receiver", {
      type: "customer",
      messageType: "DRIVE_REQUEST",
      fromLat: "45.333",
      fromLong: "16.444",
      toLat: "45.333",
      toLong: "16.444"
    });
  }

  ngOnInit() {}
}
