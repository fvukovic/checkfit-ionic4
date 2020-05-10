import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginPage } from './pages/login/login.page';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {WebSocketAPI} from './WebSocketAPI'
import {SocketService} from './services/socket.service';
import { StompState } from "@stomp/ng2-stompjs";
import {ModalController} from '@ionic/angular';
import {DriveRequestPage} from './pages/popups/drive-request/drive-request.page'


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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router,
    private socketService : SocketService,
    private modalcontroller:ModalController,
    translate: TranslateService 
  ) { 
    this.socketServiceS = socketService;
    this.router.navigateByUrl('customer-homepage');
    this.initializeApp();
    translate.setDefaultLang('en');

  }  

  initializeApp() {  
    this.socketServiceS.initializeWebSocketConnection();

    // Subscribe to its stream (to listen on messages)
    this.socketServiceS.stream().subscribe((message: any) => {
      this.messageHistory.unshift(message.body);
      console.log(message); 
      this._this.handleMessage(JSON.parse(message.body));
    });

    setTimeout(() => 
{ 

},
5000);

    // Subscribe to its state (to know its connected or not)
    this.socketServiceS.state().subscribe((state: StompState) => { 
      this.state = StompState[state];
    });

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
      }
    }
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
     }
  }
}
