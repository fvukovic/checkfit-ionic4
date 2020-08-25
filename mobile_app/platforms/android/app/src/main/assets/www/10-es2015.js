(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-homepage/driver-homepage.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-homepage/driver-homepage.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"header-box\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Mura Taxi</ion-title>\n      <button class=\"sos\" *ngIf=\"isUserLoggedIn\" (click)=\"callSOS()\">SOS</button>\n  </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"mapp\">\n  <style>\n    .map {\n      height: 80% !important;\n    }\n  </style>\n  \n    <div #mapElement class=\"map\"></div> \n    <div class=\"buttons\">\n      <ion-button class=\"call-customer\" *ngIf=\"isDriveStarted\" href=\"tel:{{phoneNumber}}\">Nazovi korisnika</ion-button>\n      <ion-button class=\"finish-drive\" *ngIf=\"isDriveStarted\" (click)=\"endDrive()\" >Završi vožnju</ion-button>\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/driver-homepage/driver-homepage-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/driver-homepage/driver-homepage-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DriverHomepagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverHomepagePageRoutingModule", function() { return DriverHomepagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _driver_homepage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver-homepage.page */ "./src/app/pages/driver-homepage/driver-homepage.page.ts");




const routes = [
    {
        path: '',
        component: _driver_homepage_page__WEBPACK_IMPORTED_MODULE_3__["DriverHomepagePage"]
    }
];
let DriverHomepagePageRoutingModule = class DriverHomepagePageRoutingModule {
};
DriverHomepagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DriverHomepagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/driver-homepage/driver-homepage.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/driver-homepage/driver-homepage.module.ts ***!
  \*****************************************************************/
/*! exports provided: DriverHomepagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverHomepagePageModule", function() { return DriverHomepagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _driver_homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./driver-homepage-routing.module */ "./src/app/pages/driver-homepage/driver-homepage-routing.module.ts");
/* harmony import */ var _driver_homepage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./driver-homepage.page */ "./src/app/pages/driver-homepage/driver-homepage.page.ts");







let DriverHomepagePageModule = class DriverHomepagePageModule {
};
DriverHomepagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _driver_homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__["DriverHomepagePageRoutingModule"]
        ],
        declarations: [_driver_homepage_page__WEBPACK_IMPORTED_MODULE_6__["DriverHomepagePage"]]
    })
], DriverHomepagePageModule);



/***/ }),

/***/ "./src/app/pages/driver-homepage/driver-homepage.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/driver-homepage/driver-homepage.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  margin: 20px;\n}\n\n.buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-top: 20px;\n  border-bottom: 1px solid #000;\n  padding-bottom: 15px;\n  margin: 20px;\n}\n\n.buttons .call-customer {\n  --background: #46e169;\n  color: #393939;\n  font-size: 13px;\n}\n\n.buttons .finish-drive {\n  --background: #393939;\n  color: #46e169;\n  font-size: 13px;\n}\n\n.header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: 10px 0;\n  padding: 0;\n}\n\n.header-box ion-title {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\n\n.header-box .sos {\n  background: #DC143C;\n  float: right;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  padding: 0;\n  margin: 0 20px 0 0;\n  color: white;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvZHJpdmVyLWhvbWVwYWdlL2RyaXZlci1ob21lcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RyaXZlci1ob21lcGFnZS9kcml2ZXItaG9tZXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRVI7O0FEQUk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRVI7O0FEQ0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDRUo7O0FEQUk7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDRVI7O0FEQUk7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kcml2ZXItaG9tZXBhZ2UvZHJpdmVyLWhvbWVwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICAgIG1hcmdpbjogMjBweDtcbn1cbi5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuXG4gICAgLmNhbGwtY3VzdG9tZXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM0NmUxNjk7XG4gICAgICAgIGNvbG9yOiAjMzkzOTM5O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICAgIC5maW5pc2gtZHJpdmUge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICMzOTM5Mzk7XG4gICAgICAgIGNvbG9yOiAjNDZlMTY5O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxufVxuLmhlYWRlci1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgIGlvbi10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuc29zIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0RDMTQzQztcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbiIsIi5tYXAge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIG1hcmdpbjogMjBweDtcbn1cbi5idXR0b25zIC5jYWxsLWN1c3RvbWVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNDZlMTY5O1xuICBjb2xvcjogIzM5MzkzOTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmJ1dHRvbnMgLmZpbmlzaC1kcml2ZSB7XG4gIC0tYmFja2dyb3VuZDogIzM5MzkzOTtcbiAgY29sb3I6ICM0NmUxNjk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmhlYWRlci1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMTBweCAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmhlYWRlci1ib3ggaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVhZGVyLWJveCAuc29zIHtcbiAgYmFja2dyb3VuZDogI0RDMTQzQztcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/driver-homepage/driver-homepage.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/driver-homepage/driver-homepage.page.ts ***!
  \***************************************************************/
/*! exports provided: DriverHomepagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverHomepagePage", function() { return DriverHomepagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");






let DriverHomepagePage = class DriverHomepagePage {
    constructor(locationService, route, socketService, storage) {
        this.locationService = locationService;
        this.route = route;
        this.socketService = socketService;
        this.storage = storage;
        this.isUserLoggedIn = false;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.storage.get("username").then(val => {
            if (val != null) {
                this.isUserLoggedIn = true;
            }
        });
        const firstParam = this.route.snapshot.queryParamMap.get("data");
        let message = JSON.parse(firstParam);
        this.message = message;
        this.phoneNumber = message.phoneNumber;
        const driveIsStarted = this.route.snapshot.queryParamMap.get("driveIsStarted");
        // if (driveIsStarted == "true") {
        //   //TODO makni ovo na kraju
        this.isDriveStarted = true;
        // }
        this.initializeMap();
        this.directionsDisplay.setMap(this.map);
        //this.calculateAndDisplayRoute()
        this.populateAddress(this.message);
    }
    ngAfterContentInit() { }
    calculateAndDisplayRoute() {
        const that = this;
        this.directionsService.route({
            origin: this.fromAddress,
            destination: this.toAddress,
            travelMode: "DRIVING"
        }, (response, status) => {
            if (status === "OK") {
                that.directionsDisplay.setDirections(response);
            }
            else {
                window.alert("Directions request failed due to " + status);
            }
        });
    }
    populateAddress(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var fromAddress = yield this.locationService.getReverseGeocode(message.fromLat, message.fromLong);
            this.fromAddress =
                fromAddress[0].thoroughfare +
                    "," +
                    fromAddress[0].subThoroughfare +
                    "," +
                    fromAddress[0].locality;
            var toAddress = yield this.locationService.getReverseGeocode(message.toLat, message.toLong);
            this.toAddress =
                toAddress[0].thoroughfare +
                    "," +
                    toAddress[0].subThoroughfare +
                    "," +
                    toAddress[0].locality;
            this.calculateAndDisplayRoute();
        });
    }
    initializeMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.currentLocation = yield this.locationService.getUserPosition();
            var directionsDisplay = new google.maps.DirectionsRenderer();
            this.map = new google.maps.Map(this.mapElement.nativeElement, {
                zoom: 7,
                center: {
                    lat: this.currentLocation.coords.latitude,
                    lng: this.currentLocation.coords.longitude
                }
            });
            this.directionsDisplay.setMap(this.map);
            var directionsService = new google.maps.DirectionsService();
            directionsDisplay.setMap(this.map);
            var directionsDisplay = new google.maps.DirectionsRenderer();
            this.displayDirection(directionsService, directionsDisplay);
        });
    }
    endDrive() {
        this.storage.get("username").then(username => {
            this.socketService.send("/server-receiver", {
                type: "customer",
                messageType: "FINISH_DRIVE",
                driver: username
            });
        });
        location.reload();
    }
    displayDirection(directionsService, directionsDisplay) {
        directionsService.route({
            origin: new google.maps.LatLng(this.currentLocation.coords.latitude, this.currentLocation.coords.longitude),
            destination: this.toAddress,
            travelMode: "DRIVING"
        }, (response, status) => {
            if (status === "OK") {
                directionsDisplay.setDirections(response);
            }
        });
    }
    ngOnInit() { }
    callSOS() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.currentLocation = yield this.locationService.getUserPosition();
            console.log("DSAD");
            this.storage.get("username").then(username => {
                this.storage.get("username").then(phone => {
                    this.socketService.send("/server-receiver", {
                        type: "customer",
                        messageType: "SOS",
                        driver: username,
                        phoneNumber: phone,
                        fromLat: this.currentLocation.coords.latitude,
                        fromLong: this.currentLocation.coords.longitude
                    });
                });
            });
        });
    }
};
DriverHomepagePage.ctorParameters = () => [
    { type: _services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapElement", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DriverHomepagePage.prototype, "mapElement", void 0);
DriverHomepagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-driver-homepage",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./driver-homepage.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-homepage/driver-homepage.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./driver-homepage.page.scss */ "./src/app/pages/driver-homepage/driver-homepage.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
], DriverHomepagePage);



/***/ })

}]);
//# sourceMappingURL=10-es2015.js.map