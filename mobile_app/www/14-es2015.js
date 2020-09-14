(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-rides/my-rides.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-rides/my-rides.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"header-box\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Moje vožnje</ion-title>\n      <img src=\"../../../assets/img/taxiLogo.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div *ngFor=\"let item of invoiceList\" class=\"my-rides\">\n  <div class=\"details-ride\">\n    <span class=\"text\">Polazište:</span>\n    <span class=\"value\">{{item.fromAddress}}</span>\n  </div>\n\n  <div class=\"details-ride\">\n    <span class=\"text\">Odredište:</span>\n    <span class=\"value\">{{item.toAddress}} </span>\n  </div>\n\n  <div class=\"details-ride\">\n    <span class=\"text\">Udaljenost:</span>\n    <span class=\"value\">{{item.km}} km </span>\n  </div>\n\n  <div class=\"details-ride\">\n      <span class=\"text\">Osoba:</span>\n      <span class=\"value\">{{item.persons}} </span>\n  </div>\n  <div class=\"details-ride\">\n    <span class=\"text\">Datum:</span>\n    <span class=\"value\">{{item.time}} </span>\n</div>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/my-rides/my-rides-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/my-rides/my-rides-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MyRidesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRidesPageRoutingModule", function() { return MyRidesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _my_rides_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-rides.page */ "./src/app/pages/my-rides/my-rides.page.ts");




const routes = [
    {
        path: '',
        component: _my_rides_page__WEBPACK_IMPORTED_MODULE_3__["MyRidesPage"]
    }
];
let MyRidesPageRoutingModule = class MyRidesPageRoutingModule {
};
MyRidesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyRidesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/my-rides/my-rides.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/my-rides/my-rides.module.ts ***!
  \***************************************************/
/*! exports provided: MyRidesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRidesPageModule", function() { return MyRidesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_rides_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-rides-routing.module */ "./src/app/pages/my-rides/my-rides-routing.module.ts");
/* harmony import */ var _my_rides_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-rides.page */ "./src/app/pages/my-rides/my-rides.page.ts");







let MyRidesPageModule = class MyRidesPageModule {
};
MyRidesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_rides_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyRidesPageRoutingModule"]
        ],
        declarations: [_my_rides_page__WEBPACK_IMPORTED_MODULE_6__["MyRidesPage"]]
    })
], MyRidesPageModule);



/***/ }),

/***/ "./src/app/pages/my-rides/my-rides.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/my-rides/my-rides.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-rides {\n  margin: 20px;\n  border-bottom: 2px solid #000;\n  padding: 15px 0 5px 0; }\n  .my-rides .details-ride {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin-bottom: 10px; }\n  .my-rides .details-ride .text {\n      font-weight: bold;\n      text-transform: uppercase;\n      font-size: 12px; }\n  .my-rides .details-ride .value {\n      text-align: right;\n      font-size: 12px; }\n  .header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px; }\n  img {\n  max-width: 50px; }\n  ion-title {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  text-transform: uppercase;\n  font-size: 20px; }\n  ion-menu-button {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  --background: #f4f0ec;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvbXktcmlkZXMvbXktcmlkZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixxQkFBcUIsRUFBQTtFQUh6QjtJQU9RLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixtQkFBbUIsRUFBQTtFQVYzQjtNQWNZLGlCQUFpQjtNQUNqQix5QkFBeUI7TUFDekIsZUFBZSxFQUFBO0VBaEIzQjtNQW1CWSxpQkFBaUI7TUFDakIsZUFBZSxFQUFBO0VBSTNCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7RUFFakI7RUFDSSxlQUFlLEVBQUE7RUFFbkI7RUFDSSw2Q0FBMEM7RUFDMUMsYUFBUTtFQUNSLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7RUFFbkI7RUFDSSw2Q0FBMEM7RUFDMUMsYUFBUTtFQUNSLHFCQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LXJpZGVzL215LXJpZGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1yaWRlcyB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xuICAgIHBhZGRpbmc6IDE1cHggMCA1cHggMDtcbiAgICBcblxuICAgIC5kZXRhaWxzLXJpZGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIFxuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICAudmFsdWUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaGVhZGVyLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5pbWcge1xuICAgIG1heC13aWR0aDogNTBweDtcbn1cbmlvbi10aXRsZSB7XG4gICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xuICAgIC0tY29sb3I6ICMwMDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5pb24tbWVudS1idXR0b24ge1xuICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcbiAgICAtLWNvbG9yOiAjMDAwO1xuICAgIC0tYmFja2dyb3VuZDogI2Y0ZjBlYztcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/my-rides/my-rides.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/my-rides/my-rides.page.ts ***!
  \*************************************************/
/*! exports provided: MyRidesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRidesPage", function() { return MyRidesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let MyRidesPage = class MyRidesPage {
    constructor(locationService, socketService, storage, http) {
        this.locationService = locationService;
        this.socketService = socketService;
        this.storage = storage;
        this.http = http;
        this.isUserLoggedIn = false;
        this.invoiceList = [];
        this.storage.get("username").then(val => {
            if (val != null) {
                this.isUserLoggedIn = true;
            }
        });
    }
    ngOnInit() {
        this.storage.get("username").then(val => {
            if (val != null) {
                this.http
                    .post("https://taxi-mura.herokuapp.com/api/drivesByUsername", {
                    username: val,
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((err) => {
                    return rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(err || 'Internal Server error');
                }))
                    .subscribe(data => {
                    Object.entries(data).forEach(([key, value]) => {
                        // alert("JSON.stringify(value)" + value.fromLat + " - "+  value.fromLong)
                        this.locationService.getReverseGeocode(value.fromLat, value.fromLong).then(from => {
                            this.locationService.getReverseGeocode(value.toLat, value.toLong).then(to => {
                                this.invoiceList.push({ "fromAddress": from[0].thoroughfare +
                                        "," +
                                        from[0].subThoroughfare +
                                        "," +
                                        from[0].locality, "toAddress": to[0].thoroughfare +
                                        "," +
                                        to[0].subThoroughfare +
                                        "," +
                                        to[0].locality, "persons": value.persons, km: value.km, time: value.time.replace("T", " ").replace("Z", "") });
                                console.log(JSON.stringify(this.invoiceList));
                            });
                        });
                    });
                });
            }
        });
    }
    getAddressFromGeolocation(latitude, longitude) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return;
        });
    }
    callSOS() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let currentLocation = yield this.locationService.getUserPosition();
            console.log("DSAD");
            console.log(currentLocation);
            this.storage.get("username").then(username => {
                this.storage.get("username").then(phone => {
                    this.socketService.send("/server-receiver", {
                        type: "customer",
                        messageType: "SOS",
                        driver: username,
                        phoneNumber: phone,
                        fromLat: currentLocation["cords"]["latitude"],
                        fromLong: currentLocation["cords"]["latitude"]
                    });
                });
            });
        });
    }
};
MyRidesPage.ctorParameters = () => [
    { type: _services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"] },
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
MyRidesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-my-rides",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-rides.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-rides/my-rides.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-rides.page.scss */ "./src/app/pages/my-rides/my-rides.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"],
        _services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
], MyRidesPage);



/***/ })

}]);
//# sourceMappingURL=14-es2015.js.map