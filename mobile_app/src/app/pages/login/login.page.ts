import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {StreetPickerPage} from '../popups/street-picker/street-picker.page';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage'; 
import {SocketService} from '../../services/socket.service';
import { AppComponent } from '../../app.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:String;
  password:String;

  constructor(private storage: Storage, private http: HttpClient,
    private router: Router, private appCompoent: AppComponent) {

  }

  ngOnInit() {
  }

  login() {
     JSON.stringify(this.http.post("http://localhost:8080/api/authenticate", {username:"admin", password: "admin"}))
    this.appCompoent.isUserLoggedIn = true; 
    this.storage.set("username", this.email);
    location.reload();
  }

}
