(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-homepage/driver-homepage.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-homepage/driver-homepage.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Driver homepage</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"mapp\">\r\n  <style>\r\n    .map {\r\n      height: 80% !important;\r\n    }\r\n  </style>\r\n  <div #mapElement class=\"map\"></div> \r\n<ion-button *ngIf=\"isDriveStarted\" href=\"tel:{{phoneNumber}}\">>Call Customer</ion-button>\r\n  <ion-button *ngIf=\"isDriveStarted\" (click)=\"endDrive()\" >End Drive</ion-button>\r\n  <br />\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlci1ob21lcGFnZS9kcml2ZXItaG9tZXBhZ2UucGFnZS5zY3NzIn0= */");

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





let DriverHomepagePage = class DriverHomepagePage {
    constructor(locationService, route, socketService) {
        this.locationService = locationService;
        this.route = route;
        this.socketService = socketService;
        const firstParam = this.route.snapshot.queryParamMap.get("data");
        let message = JSON.parse(firstParam);
        this.message = message;
        this.phoneNumber = message.phoneNumber;
        alert(this.phoneNumber);
        const driveIsStarted = this.route.snapshot.queryParamMap.get("driveIsStarted");
        if (driveIsStarted == "true") {
            //TODO makni ovo na kraju
            //this.populateAddress(message)
            this.isDriveStarted = true;
        }
        this.initializeMap();
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
            var toAddress = yield this.locationService.getReverseGeocode(message.fromLat, message.fromLong);
            this.toAddress =
                toAddress[0].thoroughfare +
                    "," +
                    toAddress[0].subThoroughfare +
                    "," +
                    toAddress[0].locality;
        });
    }
    initializeMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.currentLocation = yield this.locationService.getUserPosition();
            var directionsDisplay = new google.maps.DirectionsRenderer();
            this.map = new google.maps.Map(this.mapElement.nativeElement, {
                center: {
                    lat: this.currentLocation.coords.latitude,
                    lng: this.currentLocation.coords.longitude
                },
                zoom: 16
            });
            var directionsService = new google.maps.DirectionsService();
            directionsDisplay.setMap(this.map);
            var directionsDisplay = new google.maps.DirectionsRenderer();
            this.displayDirection(directionsService, directionsDisplay);
        });
    }
    endDrive() {
        this.socketService.send("/server-receiver", {
            type: "customer",
            messageType: "FINISH_DRIVE",
            customer: this.message.driver
        });
    }
    displayDirection(directionsService, directionsDisplay) {
        directionsService.route({
            origin: new google.maps.LatLng(41.850033, -87.6500523),
            destination: new google.maps.LatLng(41.850033, -87.6500523),
            travelMode: "DRIVING"
        }, (response, status) => {
            if (status === "OK") {
                directionsDisplay.setDirections(response);
            }
        });
    }
    ngOnInit() { }
};
DriverHomepagePage.ctorParameters = () => [
    { type: _services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapElement", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DriverHomepagePage.prototype, "mapElement", void 0);
DriverHomepagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-driver-homepage",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./driver-homepage.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-homepage/driver-homepage.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./driver-homepage.page.scss */ "./src/app/pages/driver-homepage/driver-homepage.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]])
], DriverHomepagePage);



/***/ })

}]);
//# sourceMappingURL=10-es2015.js.map