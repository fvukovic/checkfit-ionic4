import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { NavParams } from "@ionic/angular";
import { SocketService } from "../../../services/socket.service";
import { LocationService } from "../../../services/location.service";
import { Router } from "@angular/router";


@Component({
  selector: "app-drive-request",
  templateUrl: "./drive-request.page.html",
  styleUrls: ["./drive-request.page.scss"]
})
export class DriveRequestPage implements OnInit {
  message: any;
  fromAddress:String;
  toAddress:String;
  constructor(
    private modalControler: ModalController,
    public navParams: NavParams,
    private socketService: SocketService,
    private router: Router,
    private locationService: LocationService
  ) {
    this.message = this.navParams.get("message");
    this.populateAddresses();
  }

  async populateAddresses(){
    var fromAddress = await this.locationService.getReverseGeocode(this.message.fromLat, this.message.fromLong); 
    this.fromAddress = fromAddress[0].thoroughfare + "," + fromAddress[0].subThoroughfare + "," + fromAddress[0].locality
    var toAddress = await this.locationService.getReverseGeocode(this.message.fromLat, this.message.fromLong);
    this.toAddress = toAddress[0].thoroughfare + "," + toAddress[0].subThoroughfare + "," + toAddress[0].locality
  }

  ngOnInit(){
  }
  
  closeModal() {
    this.modalControler.dismiss();
  }

  acceptRequst() {
    this.socketService.send("/server-receiver", {
      type: "customer",
      messageType: "ACCEPT_DRIVE",
      customer: this.message.username,
      phoneNumber: this.message.phoneNumber,
      fromLat: this.message.fromLat,
      fromLong: this.message.fromLong,
      toLat: this.message.toLat,
      toLong: this.message.toLong,
    });
    //this.router.navigate(["/driver-homepage"],  { queryParams: {data:JSON.stringify(this.message)} }); 
    this.closeModal();
    /**TODO dodaj alert za 5 sekunda ako voznja nije prihvacena
    */
  }
}
