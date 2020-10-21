import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { NavParams } from "@ionic/angular";
import { SocketService } from "../../../services/socket.service";
import { LocationService } from "../../../services/location.service";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { NativeAudio } from "@ionic-native/native-audio/ngx";

@Component({
  selector: "app-drive-request",
  templateUrl: "./drive-request.page.html",
  styleUrls: ["./drive-request.page.scss"]
})
export class DriveRequestPage implements OnInit {
  message: any;
  fromAddress: String;
  toAddress: String;
  selectedTime: number;
  constructor(
    private modalControler: ModalController,
    public navParams: NavParams,
    private socketService: SocketService,
    private router: Router,
    private locationService: LocationService,
    private storage: Storage,
    private nativeAudio: NativeAudio,
  ) {
    this.message = this.navParams.get("message");
    this.populateAddresses();
  }

  async populateAddresses() {
    var fromAddress = await this.locationService.getReverseGeocode(
      this.message.fromLat,
      this.message.fromLong
    );
    this.fromAddress =
      fromAddress[0].thoroughfare +
      "," +
      fromAddress[0].subThoroughfare +
      "," +
      fromAddress[0].locality;
    var toAddress = await this.locationService.getReverseGeocode(
      this.message.toLat,
      this.message.toLong
    );
    this.toAddress =
      toAddress[0].thoroughfare +
      "," +
      toAddress[0].subThoroughfare +
      "," +
      toAddress[0].locality;
  }

  ngOnInit() {}

  closeModal() {
    this.nativeAudio.stop("uniqueId1");
    this.modalControler.dismiss();
  }

  acceptRequst() {
    this.nativeAudio.stop("uniqueId1");
    this.storage.get("username").then(username => {
     this.socketService.send("/server-receiver", {
      type: "customer",
      messageType: "ACCEPT_DRIVE",
      customer: this.message.username,
      phoneNumber: this.message.phoneNumber,
      fromLat: this.message.fromLat,
      fromLong: this.message.fromLong,
      toLat: this.message.toLat,
      toLong: this.message.toLong,
      time: this.selectedTime,
      driver: username
    });
  });
    //this.router.navigate(["/driver-homepage"],  { queryParams: {data:JSON.stringify(this.message)} });
    this.closeModal();
    /**TODO dodaj alert za 5 sekunda ako voznja nije prihvacena
     */
  }

  radioGroupChange(event) {
    console.log("radioGroupChange",event.detail);
    this.selectedTime = event.detail.value;
    }
}
