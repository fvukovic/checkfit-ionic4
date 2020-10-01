import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-phone-number",
  templateUrl: "./phone-number.page.html",
  styleUrls: ["./phone-number.page.scss"]
})
export class PhoneNumberPage implements OnInit {
  phoneNumber: String;
  constructor(
    private storage: Storage,
    private modalControler: ModalController
  ) {
    this.storage.get("phoneNumber").then(val => {
      if (val != null) {
        this.phoneNumber = val;
      }
    });
  }

  ngOnInit() {}

  saveNumber() {
    this.storage.set("phoneNumber", this.phoneNumber);
    this.modalControler.dismiss();
  }
}
