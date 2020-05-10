import { StompService, StompConfig, StompState } from "@stomp/ng2-stompjs";
import { Message } from "@stomp/stompjs";
import { Observable, BehaviorSubject } from "rxjs";
import { Injectable } from '@angular/core';
const WEBSOCKET_URL = "ws://localhost:9092/socket";
const EXAMPLE_URL = "/topic/server-broadcaster";
@Injectable({
  providedIn: 'root'
})

export class SocketService {
 
  private messages: Observable<Message>;
  private stompService: StompService;


  initializeWebSocketConnection() {
    let stompConfig: StompConfig = {
      url: WEBSOCKET_URL,
      headers: {
        //TODO add 
        username: "customer",
        type: "customer"
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
  }
 



  constructor() {
    // Create Stomp Configuration
  
  }

  public stream(): Observable<Message> {
    return this.messages;
  }

  public send(url: string, message: any) {
    return this.stompService.publish(url, JSON.stringify(message));
  }

  public state(): BehaviorSubject<StompState> {
    return this.stompService.state;
  }
}
