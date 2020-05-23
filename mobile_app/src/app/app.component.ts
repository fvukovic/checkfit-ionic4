import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginPage } from './pages/login/login.page';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SocketService} from './services/socket.service';
import { StompState } from "@stomp/ng2-stompjs";
import { ModalController} from '@ionic/angular';
import { DriveRequestPage} from './pages/popups/drive-request/drive-request.page'
import {Storage} from '@ionic/storage'; 

const WEBSOCKET_URL = "ws://localhost:9092/socket";
const EXAMPLE_URL = "/topic/server-broadcaster";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit { 
  _this = this;
  messageHistory = [];
  state: string = "NOT CONNECTED";

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  socketServiceS: SocketService;
  greeting: any; 
  name: string;
  isUserLoggedIn = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router,
    private socketService : SocketService,
    private modalcontroller:ModalController,
    translate: TranslateService,
    private storage: Storage
  ) { 
    this.socketServiceS = socketService;
    this.router.navigateByUrl('customer-homepage');
    this.initializeApp();
    translate.setDefaultLang('en');
  }  

  initializeApp() { 
    this.storage.get('username').then((val) => { 
      if(val!=null){
        this.isUserLoggedIn = true;
      } 
      this.socketServiceS.initializeWebSocketConnection();
    });  


    // Subscribe to its stream (to listen on messages)

    setTimeout(() => 
    { 
      this.socketServiceS.stream().subscribe((message: any) => {
        this.messageHistory.unshift(message.body);
        console.log(message);  
        this._this.handleMessage(JSON.parse(message.body));
      });
  
      this.socketServiceS.state().subscribe((state: StompState) => {  
        this.state = StompState[state];
      });
    },
    3000);

    // Subscribe to its state (to know its connected or not)
 

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });  
  
  }

  handleMessage(message){  
    switch(message.messageType){
      case "DRIVE_REQUEST":{
        this.modalcontroller.create({component:DriveRequestPage, componentProps:{"message":message}}).then((modalElement)=>{
          console.log(message)
          modalElement.present();
        })
        break;
      }
      case "INFORM_DRIVE_CUSTOMER":{
           console.log(message)  
           break;
      }
      case "INFORM_DRIVE_DRIVER":{ 
        this.socketService.send("/server-receiver", {
          type: "driver",
          messageType: "INFORM_DRIVE_DRIVER",
          fromLat: "45.333",
          fromLong: "16.444",
          toLat: "45.333",
          toLong: "16.444"
        });
        break;
      }
    }
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
     }
  }

  logout(){
    this.isUserLoggedIn = false;
    location.reload();
    this.storage.set("username",null);
  }
}
