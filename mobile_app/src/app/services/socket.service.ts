import { StompService, StompConfig, StompState } from "@stomp/ng2-stompjs";
import { Message } from "@stomp/stompjs";
import { Observable, BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { UniqueDeviceID } from "@ionic-native/unique-device-id/ngx";

const WEBSOCKET_URL = "wss://taxi-mura.herokuapp.com/socket";
// const WEBSOCKET_URL = "ws://localhost:8080/socket";
const EXAMPLE_URL = "/topic/server-broadcaster";
@Injectable({
  providedIn: "root"
})
export class SocketService {
  private messages: Observable<Message>;
  private stompService: StompService;
  public uniqueID: any;
  _this = this;

  initializeWebSocketConnection() {
        var userType = "customer";
        this.storage.get("username").then(val => {
          if (val != null) {
            userType = "driver";
          }
          let stompConfig: StompConfig = {
            url: WEBSOCKET_URL + "?123123",
            headers: {
              //TODO add
              username: val,
              type: userType,
              id: "123"
            },

            heartbeat_in: 0,
            heartbeat_out: 20000,
            reconnect_delay: 5000,
            debug: true
          };
          // Create Stomp Service
          this.stompService = new StompService(stompConfig);

          // Connect to a Stream

          this.messages = this.stompService.subscribe("/user" + EXAMPLE_URL);
        });
  }

  constructor(private storage: Storage) {}

  public stream(): Observable<Message> {
    return this.messages;
  }

  public send(url: string, message: any) {
      try{
     this.stompService.publish(url, JSON.stringify(message))
      }catch(err){
          
      }
  }

  public state(): BehaviorSubject<StompState> {
    return this.stompService.state;
  }
}
