import { Component, OnInit, AfterContentInit, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { StreetPickerPage } from "../popups/street-picker/street-picker.page";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { SocketService } from "../../services/socket.service";
import { AppComponent } from "../../app.component";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable,throwError } from 'rxjs'; 
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  email: String;
  password: String;

  constructor(
    private storage: Storage,
    private http: HttpClient,
    private router: Router,
    private appCompoent: AppComponent
  ) {}

  ngOnInit() {}

  login() {
    this.http
      // .post("http://localhost:8080/api/authenticate", {
      .post("https://taxi-mura.herokuapp.com/api/authenticate", {
        username: this.email,
        password: this.password
      })
      .pipe(
        catchError((err: any) => {
          alert("Login je bio neuspješan");
          return Observable.throw(err || 'Internal Server error');

        })
      )
      .subscribe(data => {
        this.storage.set("username", this.email); 
        this.storage.set("id_token", data["id_token"]);
        location.reload();
      });

    this.appCompoent.isUserLoggedIn = true;
  }
}
