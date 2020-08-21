import { Component, OnInit } from '@angular/core';
import { LocationService } from "../../services/location.service";
import { SocketService } from "../../services/socket.service";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-my-rides',
  templateUrl: './my-rides.page.html',
  styleUrls: ['./my-rides.page.scss'],
})
export class MyRidesPage implements OnInit {

  constructor(
    private locationService: LocationService, 
    private socketService: SocketService,
    private storage: Storage
  ) {}

  ngOnInit() {
  }

  async callSOS(){
    let currentLocation = await this.locationService.getUserPosition();
    console.log("DSAD")
    console.log(currentLocation)
    this.storage.get("username").then(username => {
      this.storage.get("username").then(phone => {
      this.socketService.send("/server-receiver", {
        type: "customer",
        messageType: "SOS",
        driver: username,
        phoneNumber: phone,
        fromLat: currentLocation.coords.latitude,
        fromLong: currentLocation.coords.longitude,
      });
     });
    });
  }

}
