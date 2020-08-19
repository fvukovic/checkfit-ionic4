(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-ride/search-ride.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-ride/search-ride.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>search-ride</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=container4>\r\n    <div *ngIf=\"!isDriveAccepted\" >\r\n      \r\n      <p>Tražim slobodnog vozača...</p>\r\n      <ion-spinner style=\"width:150px\" color=\"tertiary\" class=\"ion-color ion-color-tertiary ios spinner-lines hydrated\"\r\n        role=\"progressbar\"></ion-spinner>\r\n    </div>\r\n    <div *ngIf=\"isDriveAccepted\" >\r\n        <h2>Vaše vozilo stiže!!</h2>\r\n\r\n        <p>Vaše vozilo je udaljeno:</p> \r\n        <p>{{kms}}</p> \r\n      </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/search-ride/search-ride-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/search-ride/search-ride-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SearchRidePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRidePageRoutingModule", function() { return SearchRidePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search_ride_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-ride.page */ "./src/app/pages/search-ride/search-ride.page.ts");




const routes = [
    {
        path: '',
        component: _search_ride_page__WEBPACK_IMPORTED_MODULE_3__["SearchRidePage"]
    }
];
let SearchRidePageRoutingModule = class SearchRidePageRoutingModule {
};
SearchRidePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchRidePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/search-ride/search-ride.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/search-ride/search-ride.module.ts ***!
  \*********************************************************/
/*! exports provided: SearchRidePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRidePageModule", function() { return SearchRidePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_ride_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-ride-routing.module */ "./src/app/pages/search-ride/search-ride-routing.module.ts");
/* harmony import */ var _search_ride_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-ride.page */ "./src/app/pages/search-ride/search-ride.page.ts");







let SearchRidePageModule = class SearchRidePageModule {
};
SearchRidePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_ride_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchRidePageRoutingModule"]
        ],
        declarations: [_search_ride_page__WEBPACK_IMPORTED_MODULE_6__["SearchRidePage"]]
    })
], SearchRidePageModule);



/***/ }),

/***/ "./src/app/pages/search-ride/search-ride.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/search-ride/search-ride.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container4 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoLXJpZGUvQzpcXG11cmFBcHBcXGNoZWNrZml0LWlvbmljNFxcbW9iaWxlX2FwcC9zcmNcXGFwcFxccGFnZXNcXHNlYXJjaC1yaWRlXFxzZWFyY2gtcmlkZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlYXJjaC1yaWRlL3NlYXJjaC1yaWRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvREFBQTtVQUFBLDRDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWFyY2gtcmlkZS9zZWFyY2gtcmlkZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyNCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG59IiwiLmNvbnRhaW5lcjQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/search-ride/search-ride.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/search-ride/search-ride.page.ts ***!
  \*******************************************************/
/*! exports provided: SearchRidePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRidePage", function() { return SearchRidePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");






let SearchRidePage = class SearchRidePage {
    constructor(socketService, route, events, storage) {
        // var handle = setInterval(data => {
        //   if (this.isDriveAccepted) {
        //     clearInterval(handle);
        //   } else {
        //   }
        // }, 5000);
        this.socketService = socketService;
        this.route = route;
        this.events = events;
        this.storage = storage;
        this.isDriveAccepted = false;
        events.subscribe("driveAccepted", message => {
            this.isDriveAccepted = true;
        });
        events.subscribe("informCustomer", message => {
            console.log(message);
            this.kms = message;
        });
        events.subscribe("driveIsFinished", message => {
            this.isDriveAccepted = false;
            this.kms = message;
        });
        this.requestDrive();
    }
    requestDrive() {
        const firstParam = this.route.snapshot.queryParamMap.get("data");
        let params = JSON.parse(firstParam);
        this.storage.get("phoneNumber").then(val => {
            this.socketService.send("/server-receiver", {
                type: "customer",
                messageType: "DRIVE_REQUEST",
                fromLat: params.fromLat,
                fromLong: params.fromLong,
                toLat: params.toLat,
                toLong: params.toLong,
                phoneNumber: val
            });
        });
    }
    ngAfterContentInit() { }
    ngOnInit() { }
};
SearchRidePage.ctorParameters = () => [
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
SearchRidePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-search-ride",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-ride.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-ride/search-ride.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-ride.page.scss */ "./src/app/pages/search-ride/search-ride.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
], SearchRidePage);



/***/ })

}]);
//# sourceMappingURL=13-es2015.js.map