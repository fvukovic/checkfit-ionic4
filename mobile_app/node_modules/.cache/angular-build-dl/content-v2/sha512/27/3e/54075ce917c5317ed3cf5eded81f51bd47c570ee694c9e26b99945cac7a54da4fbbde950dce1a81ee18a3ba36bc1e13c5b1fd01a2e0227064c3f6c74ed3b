(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inactive-rides/inactive-rides.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inactive-rides/inactive-rides.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <div class=\"header-box\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Trenutni zahtjevi</ion-title>\r\n      <img src=\"../../../assets/img/taxiLogo.png\">\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div *ngFor=\"let item of invoiceList\" class=\"my-rides\">\r\n    <div class=\"details-ride\">\r\n      <span class=\"text\">Polazište:</span>\r\n      <span class=\"value\">{{item.fromAddress}}</span>\r\n    </div>\r\n\r\n    <div class=\"details-ride\">\r\n      <span class=\"text\">Odredište:</span>\r\n      <span class=\"value\">{{item.toAddress}} </span>\r\n    </div>\r\n\r\n    <div class=\"details-ride\">\r\n      <span class=\"text\">Udaljenost:</span>\r\n      <span class=\"value\">{{item.km}} km </span>\r\n    </div>\r\n\r\n    <div class=\"details-ride\">\r\n      <span class=\"text\">Osoba:</span>\r\n      <span class=\"value\">{{item.persons}} </span>\r\n    </div>\r\n    <div class=\"details-ride\">\r\n      <span class=\"text\">Datum:</span>\r\n      <span class=\"value\">{{item.time}} </span>\r\n    </div>\r\n    <button class=\"order-ride\" style=\"background-color: green;\" (click)=\"navigateToDrive(item)\">Prihvati vožnju</button>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/inactive-rides/inactive-rides-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/inactive-rides/inactive-rides-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: InactiveRidesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InactiveRidesRoutingModule", function() { return InactiveRidesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inactive_rides_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inactive-rides.component */ "./src/app/pages/inactive-rides/inactive-rides.component.ts");




const routes = [
    {
        path: '',
        component: _inactive_rides_component__WEBPACK_IMPORTED_MODULE_3__["InactiveRidesComponent"]
    }
];
let InactiveRidesRoutingModule = class InactiveRidesRoutingModule {
};
InactiveRidesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InactiveRidesRoutingModule);



/***/ }),

/***/ "./src/app/pages/inactive-rides/inactive-rides.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/inactive-rides/inactive-rides.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-rides {\n  margin: 20px;\n  border-bottom: 2px solid #000;\n  padding: 15px 0 5px 0;\n}\n.my-rides .details-ride {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 10px;\n}\n.my-rides .details-ride .text {\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.my-rides .details-ride .value {\n  text-align: right;\n  font-size: 12px;\n}\n.header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px;\n}\nimg {\n  max-width: 50px;\n}\nion-title {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  text-transform: uppercase;\n  font-size: 20px;\n}\nion-menu-button {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  --background: #f4f0ec;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.order-ride {\n  width: 100%;\n  background: #393939;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-transform: uppercase;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5hY3RpdmUtcmlkZXMvQzpcXG11cmFBcHBcXGNoZWNrZml0LWlvbmljNFxcbW9iaWxlX2FwcC9zcmNcXGFwcFxccGFnZXNcXGluYWN0aXZlLXJpZGVzXFxpbmFjdGl2ZS1yaWRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW5hY3RpdmUtcmlkZXMvaW5hY3RpdmUtcmlkZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQ0NKO0FERUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLG1CQUFBO0FDQVI7QURHUTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDRFo7QURHUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0RaO0FES0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsYUFBQTtBQ0ZKO0FESUE7RUFDSSxlQUFBO0FDREo7QURHQTtFQUNJLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FERUE7RUFDSSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luYWN0aXZlLXJpZGVzL2luYWN0aXZlLXJpZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LXJpZGVzIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xyXG4gICAgcGFkZGluZzogMTVweCAwIDVweCAwO1xyXG4gICAgXHJcblxyXG4gICAgLmRldGFpbHMtcmlkZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52YWx1ZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5oZWFkZXItYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICAtLWNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5pb24tbWVudS1idXR0b24ge1xyXG4gICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgLS1jb2xvcjogIzAwMDtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y0ZjBlYztcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ub3JkZXItcmlkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMzOTM5Mzk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iLCIubXktcmlkZXMge1xuICBtYXJnaW46IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nOiAxNXB4IDAgNXB4IDA7XG59XG4ubXktcmlkZXMgLmRldGFpbHMtcmlkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5teS1yaWRlcyAuZGV0YWlscy1yaWRlIC50ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5teS1yaWRlcyAuZGV0YWlscy1yaWRlIC52YWx1ZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5oZWFkZXItYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiA1MHB4O1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC0tY29sb3I6ICMwMDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAtLWNvbG9yOiAjMDAwO1xuICAtLWJhY2tncm91bmQ6ICNmNGYwZWM7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm9yZGVyLXJpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/inactive-rides/inactive-rides.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/inactive-rides/inactive-rides.component.ts ***!
  \******************************************************************/
/*! exports provided: InactiveRidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InactiveRidesComponent", function() { return InactiveRidesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");








let InactiveRidesComponent = class InactiveRidesComponent {
    constructor(router, http, storage, locationService, socketService, events) {
        this.router = router;
        this.http = http;
        this.storage = storage;
        this.locationService = locationService;
        this.socketService = socketService;
        this.events = events;
        this.invoiceList = [];
        events.subscribe("webDrives", message => {
            // alert(JSON.stringify(message['drives']))
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
                            customer: value["customer"]
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
                    messageType: "WEB_DRIVES",
                    toLat: "46",
                    toLong: "16"
                });
            }
        });
    }
    navigateToDrive(drive) {
        this.storage.get("username").then(username => {
            this.socketService.send("/server-receiver", {
                type: "customer",
                messageType: "ACCEPT_DRIVE",
                customer: drive.customer,
                phoneNumber: drive.phoneNumber,
                fromLat: drive.fromLat,
                fromLong: drive.fromLong,
                toLat: drive.toLat,
                toLong: drive.toLong,
                driver: username
            });
        });
    }
    ngOnInit() { }
};
InactiveRidesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"] },
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"] }
];
InactiveRidesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-inactive-rides",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inactive-rides.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inactive-rides/inactive-rides.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inactive-rides.component.scss */ "./src/app/pages/inactive-rides/inactive-rides.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"],
        _services_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"]])
], InactiveRidesComponent);



/***/ }),

/***/ "./src/app/pages/inactive-rides/inactive-rides.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/inactive-rides/inactive-rides.module.ts ***!
  \***************************************************************/
/*! exports provided: InactiveRidesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InactiveRidesModule", function() { return InactiveRidesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _inactive_rides_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inactive-rides-routing.module */ "./src/app/pages/inactive-rides/inactive-rides-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inactive_rides_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inactive-rides.component */ "./src/app/pages/inactive-rides/inactive-rides.component.ts");







let InactiveRidesModule = class InactiveRidesModule {
};
InactiveRidesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _inactive_rides_routing_module__WEBPACK_IMPORTED_MODULE_1__["InactiveRidesRoutingModule"]
        ],
        declarations: [_inactive_rides_component__WEBPACK_IMPORTED_MODULE_6__["InactiveRidesComponent"]]
    })
], InactiveRidesModule);



/***/ })

}]);
//# sourceMappingURL=12-es2015.js.map