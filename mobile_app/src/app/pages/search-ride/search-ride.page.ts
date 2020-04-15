import { Component, OnInit } from '@angular/core';
import {SocketService} from '../../services/socket.service'
@Component({
  selector: 'app-search-ride',
  templateUrl: './search-ride.page.html',
  styleUrls: ['./search-ride.page.scss'],
})
export class SearchRidePage implements OnInit {

  constructor(public socketService:SocketService) { }

  ngOnInit() {
    this.socketService.sendMessage("hehehe");
  }

}
