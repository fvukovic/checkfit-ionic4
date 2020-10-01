import { Component, OnInit } from '@angular/core'; 
import { Storage } from "@ionic/storage";
import { SocketService } from "../../services/socket.service";
import { LocationService } from 'src/app/services/location.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  isUserLoggedIn: boolean = false;
  currentLocation: any;

  constructor( 
    private locationService: LocationService, 
    private storage: Storage,
    private socketService: SocketService
  ) { 
    this.storage.get("username").then(val => {
      if (val != null) {
        this.isUserLoggedIn = true;
      }
    });
  } 
  ngOnInit() {
  }
  async callSOS(){
    this.currentLocation = await this.locationService.getUserPosition();
    
    this.storage.get("username").then(username => {
      this.storage.get("username").then(phone => {
      this.socketService.send("/server-receiver", {
        type: "customer",
        messageType: "SOS",
        driver: username,
        phoneNumber: phone,
        fromLat: this.currentLocation.coords.latitude,
        fromLong: this.currentLocation.coords.longitude,
      });
     });
    });
  }

  
}
