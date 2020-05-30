import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {StreetPickerPage} from '../popups/street-picker/street-picker.page';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage'; 
import {SocketService} from '../../services/socket.service';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string;
  password:string;

  constructor(private storage: Storage, private router: Router, private appCompoent: AppComponent) {

  }

  ngOnInit() {
  }

  login() {
    this.appCompoent.isUserLoggedIn = true; 
    this.storage.set("username", this.username); 
    location.reload();
  }

}
