import { async } from '@angular/core/testing';
import { Component, OnInit, AfterContentInit, ViewChild } from "@angular/core";
import { SocketService } from "../../services/socket.service";
import { ActivatedRoute } from "@angular/router";
import { Events } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { LocationService } from "../../services/location.service";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

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
  seconds:number = 20;
  myVar:any;
  constructor(
    public socketService: SocketService,
    private route: ActivatedRoute,
    public events: Events,
    private storage: Storage,
    private locationService: LocationService,
    private router: Router,
    private alertController: AlertController
  ) {
 
    events.subscribe("driveAccepted", message => {
      this.isDriveAccepted = true;
      clearInterval(this.myVar);
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

      let myVar = setInterval(() => {
        this.seconds -=1;
        if(this.seconds==0){
          clearInterval(myVar);
        this.presentAlert({
          cssClass: "myClass",
          header: "Obavijest", 
          message: '<div style="color:red" class="myClass"><p>Vaša vožnja je zaprimljena, prvi slobodni vozač će vas uskoro kontaktirati</p> </div>',
          buttons: ["OK"]
        })
        }
      }, 1000);

    });
  }

  async presentAlert(options) {
    // {
    //   cssClass: 'myClass',
    //   header: 'Alert',
    //   subHeader: 'Subtitle',
    //   message: '<div style="height: 100%"> This is an alert message. </div>',
    //   buttons: ['OK']
    // }
    const alert = await this.alertController.create(options);

    await alert.present();
  }
  ngAfterContentInit(): void {}

  ngOnInit() {}
}
