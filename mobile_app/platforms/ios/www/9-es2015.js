(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/active-rides/active-rides.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/active-rides/active-rides.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"header-box\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Aktivne vožnje</ion-title>\n      <img src=\"../../../assets/img/taxiLogo.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngFor=\"let item of invoiceList\" class=\"my-rides\">\n    <div class=\"details-ride\">\n      <span class=\"text\">Polazište:</span>\n      <span class=\"value\">{{item.fromAddress}}</span>\n    </div>\n\n    <div class=\"details-ride\">\n      <span class=\"text\">Odredište:</span>\n      <span class=\"value\">{{item.toAddress}} </span>\n    </div>\n\n    <div class=\"details-ride\">\n      <span class=\"text\">Udaljenost:</span>\n      <span class=\"value\">{{item.km}} km </span>\n    </div>\n\n    <div class=\"details-ride\">\n      <span class=\"text\">Osoba:</span>\n      <span class=\"value\">{{item.persons}} </span>\n    </div>\n    <button class=\"order-ride\" (click)=\"navigateToDrive(item)\">Pregled</button>\n  </div>\n</ion-content> ");

/***/ }),

/***/ "./src/app/pages/active-rides/active-rides-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/active-rides/active-rides-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ActiveRidesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveRidesRoutingModule", function() { return ActiveRidesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _active_rides_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./active-rides.component */ "./src/app/pages/active-rides/active-rides.component.ts");




const routes = [
    {
        path: '',
        component: _active_rides_component__WEBPACK_IMPORTED_MODULE_3__["ActiveRidesComponent"]
    }
];
let ActiveRidesRoutingModule = class ActiveRidesRoutingModule {
};
ActiveRidesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActiveRidesRoutingModule);



/***/ }),

/***/ "./src/app/pages/active-rides/active-rides.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/active-rides/active-rides.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-rides {\n  margin: 20px;\n  border-bottom: 2px solid #000;\n  padding: 15px 0 5px 0; }\n  .my-rides .details-ride {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin-bottom: 10px; }\n  .my-rides .details-ride .text {\n      font-weight: bold;\n      text-transform: uppercase;\n      font-size: 12px; }\n  .my-rides .details-ride .value {\n      text-align: right;\n      font-size: 12px; }\n  .header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px; }\n  img {\n  max-width: 50px; }\n  ion-title {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  text-transform: uppercase;\n  font-size: 20px; }\n  ion-menu-button {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  --background: #f4f0ec;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%; }\n  .order-ride {\n  width: 100%;\n  background: #393939;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-transform: uppercase;\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvYWN0aXZlLXJpZGVzL2FjdGl2ZS1yaWRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IscUJBQXFCLEVBQUE7RUFIekI7SUFPUSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsbUJBQW1CLEVBQUE7RUFWM0I7TUFjWSxpQkFBaUI7TUFDakIseUJBQXlCO01BQ3pCLGVBQWUsRUFBQTtFQWhCM0I7TUFtQlksaUJBQWlCO01BQ2pCLGVBQWUsRUFBQTtFQUkzQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsYUFBYSxFQUFBO0VBRWpCO0VBQ0ksZUFBZSxFQUFBO0VBRW5CO0VBQ0ksNkNBQTBDO0VBQzFDLGFBQVE7RUFDUix5QkFBeUI7RUFDekIsZUFBZSxFQUFBO0VBRW5CO0VBQ0ksNkNBQTBDO0VBQzFDLGFBQVE7RUFDUixxQkFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2ZS1yaWRlcy9hY3RpdmUtcmlkZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktcmlkZXMge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcbiAgICBwYWRkaW5nOiAxNXB4IDAgNXB4IDA7XG4gICAgXG5cbiAgICAuZGV0YWlscy1yaWRlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBcblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLmhlYWRlci1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuaW1nIHtcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG59XG5pb24tdGl0bGUge1xuICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcbiAgICAtLWNvbG9yOiAjMDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XG4gICAgLS1jb2xvcjogIzAwMDtcbiAgICAtLWJhY2tncm91bmQ6ICNmNGYwZWM7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm9yZGVyLXJpZGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICMzOTM5Mzk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/active-rides/active-rides.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/active-rides/active-rides.component.ts ***!
  \**************************************************************/
/*! exports provided: ActiveRidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveRidesComponent", function() { return ActiveRidesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");








let ActiveRidesComponent = class ActiveRidesComponent {
    constructor(router, http, storage, locationService, socketService, events) {
        this.router = router;
        this.http = http;
        this.storage = storage;
        this.locationService = locationService;
        this.socketService = socketService;
        this.events = events;
        this.invoiceList = [];
        events.subscribe("activeDrives", message => {
            Object.entries(message['drives']).forEach(([key, value]) => {
                this.locationService
                    .getReverseGeocode(value["fromLat"], value["fromLong"])
                    .then(from => {
                    this.locationService
                        .getReverseGeocode(value["toLat"], value["toLong"])
                        .then(to => {
                        this.invoiceList.push({
                            fromLat: value["fromLat"],
                            fromLong: value["fromLong"],
                            toLat: value["toLat"],
                            toLong: value["toLong"],
                            fromAddress: from[0].thoroughfare +
                                "," +
                                from[0].subThoroughfare +
                                "," +
                                from[0].locality,
                            toAddress: to[0].thoroughfare +
                                "," +
                                to[0].subThoroughfare +
                                "," +
                                to[0].locality,
                            persons: value["persons"],
                            km: value["km"],
                            phoneNumber: value["phoneNumber"],
                            customer: value['customer']
                        });
                    });
                });
            });
        });
        this.storage.get("username").then(val => {
            if (val != null) {
                this.socketService.send("/server-receiver", {
                    type: "driver",
                    driver: val,
                    messageType: "ACTIVE_DRIVES",
                    toLat: "46",
                    toLong: "16"
                });
            }
        });
    }
    navigateToDrive(drive) {
        this.router.navigate(["/driver-homepage"], {
            queryParams: { data: JSON.stringify(drive), driveIsStarted: true }
        });
    }
    ngOnInit() { }
};
ActiveRidesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"] },
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"] }
];
ActiveRidesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-active-rides",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./active-rides.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/active-rides/active-rides.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./active-rides.component.scss */ "./src/app/pages/active-rides/active-rides.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"],
        _services_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"]])
], ActiveRidesComponent);



/***/ }),

/***/ "./src/app/pages/active-rides/active-rides.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/active-rides/active-rides.module.ts ***!
  \***********************************************************/
/*! exports provided: ActiveRidesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveRidesModule", function() { return ActiveRidesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _active_rides_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./active-rides-routing.module */ "./src/app/pages/active-rides/active-rides-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _active_rides_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./active-rides.component */ "./src/app/pages/active-rides/active-rides.component.ts");







let ActiveRidesModule = class ActiveRidesModule {
};
ActiveRidesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _active_rides_routing_module__WEBPACK_IMPORTED_MODULE_1__["ActiveRidesRoutingModule"]
        ],
        declarations: [_active_rides_component__WEBPACK_IMPORTED_MODULE_6__["ActiveRidesComponent"]]
    })
], ActiveRidesModule);



/***/ })

}]);
//# sourceMappingURL=9-es2015.js.map