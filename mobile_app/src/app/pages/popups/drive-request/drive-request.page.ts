import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams} from '@ionic/angular';
import { SocketService } from "../../../services/socket.service";

@Component({
  selector: 'app-drive-request',
  templateUrl: './drive-request.page.html',
  styleUrls: ['./drive-request.page.scss'],
})
export class DriveRequestPage implements OnInit {
message:any 
  constructor(private modalControler:ModalController, public navParams : NavParams, private socketService: SocketService) { 
    this.message = this.navParams.get('message');
   }
 
  ngOnInit() {
  }
  closeModal(){ 
    this.modalControler.dismiss();
  }

  acceptRequst(){ 
    this.socketService.send("/server-receiver", {
      type: "customer",
      messageType: "ACCEPT_DRIVE",
      fromLat: "45.333",
      fromLong: "16.444",
      toLat: "45.333",
      toLong: "16.444",
      customer:this.message.username
    });
    /**TODO otvori novi popup i tamo stavi buttone: 1. na lokaciji sam
      kad klikne na lokaciji sam, pokazi mu button nazovi i izadi 
    */
 
  }

}
