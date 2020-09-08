(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-homepage/driver-homepage.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-homepage/driver-homepage.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"header-box\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Mura Taxi</ion-title>\n      <button class=\"sos\" *ngIf=\"isUserLoggedIn\" (click)=\"callSOS()\">SOS</button>\n  </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"mapp\">\n  <style>\n    .map {\n      height: 47% !important;\n    }\n  </style>\n  \n    <div #mapElement class=\"map\"></div> \n    <div class=\"buttons\">\n      <ion-button class=\"call-customer\" *ngIf=\"isDriveStarted\" href=\"tel:{{phoneNumber}}\">Nazovi</ion-button>\n      <ion-button class=\"finish-drive\" *ngIf=\"isDriveStarted\" (click)=\"driverIsOnSpot()\" >Na adresi</ion-button>\n      <ion-button class=\"end-drive\" *ngIf=\"isDriveStarted\" (click)=\"endDrive()\">Završi</ion-button>  \n    </div>\n      <div class=\"drive-request\" *ngIf=\"isDriveStarted\">\n\n        <div class=\"location-from\">\n          <span class=\"text\">Polazište:</span>\n          <span class=\"value\">{{fromAddress}}</span> \n        </div>\n\n        <div class=\"location-from\">\n          <span class=\"text\">Odredište:</span>\n          <span class=\"value\">{{toAddress}}</span>\n        </div>\n      </div>\n\n\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  margin: 20px;\n}\n\n.buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-bottom: 1px solid #000;\n  padding-bottom: 15px;\n  margin: 20px;\n}\n\n.buttons .call-customer {\n  --background: #46e169;\n  color: #393939;\n  font-size: 13px;\n  width: 100px;\n}\n\n.buttons .finish-drive {\n  --background: #393939;\n  color: #46e169;\n  font-size: 13px;\n  width: 100px;\n}\n\n.buttons .end-drive {\n  --background: #9c9cac;\n  color: #fff;\n  font-size: 13px;\n  width: 100px;\n}\n\n.drive-request {\n  padding: 0 20px;\n}\n\n.drive-request .location-from {\n  padding-bottom: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.drive-request .location-from .text {\n  font-weight: bold;\n  text-transform: uppercase;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  margin-bottom: 10px;\n  font-size: 13px;\n}\n\n.drive-request .location-from .value {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  border: 1px solid #000;\n  box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.3);\n  height: 40px;\n  padding: 10px;\n  font-size: 13px;\n}\n\n.header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px;\n}\n\n.header-box ion-title {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  text-transform: uppercase;\n}\n\n.header-box ion-menu-button {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  --background: #f4f0ec;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n.header-box .sos {\n  background: #DC143C;\n  float: right;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  padding: 0;\n  margin: 0 20px 0 0;\n  color: white;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvZHJpdmVyLWhvbWVwYWdlL2RyaXZlci1ob21lcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RyaXZlci1ob21lcGFnZS9kcml2ZXItaG9tZXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0VSOztBREFJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNFUjs7QURBSTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDRVI7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0k7RUFDSSxvQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NSOztBRENRO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ1o7O0FEQ1E7RUFDSSw2Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNDWjs7QURJQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0FDREo7O0FER0k7RUFDSSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0RSOztBREdJO0VBQ0ksNkNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRFI7O0FER0k7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kcml2ZXItaG9tZXBhZ2UvZHJpdmVyLWhvbWVwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICAgIG1hcmdpbjogMjBweDtcbn1cbi5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuXG4gICAgLmNhbGwtY3VzdG9tZXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM0NmUxNjk7XG4gICAgICAgIGNvbG9yOiAjMzkzOTM5O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gICAgLmZpbmlzaC1kcml2ZSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzM5MzkzOTtcbiAgICAgICAgY29sb3I6ICM0NmUxNjk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgICAuZW5kLWRyaXZlIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjOWM5Y2FjO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxufVxuXG4uZHJpdmUtcmVxdWVzdCB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIFxuICAgIC5sb2NhdGlvbi1mcm9tIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgfVxuICAgICAgICAudmFsdWUge1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggMThweCAwcHggcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmhlYWRlci1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xuICAgICAgICAtLWNvbG9yOiAjMDAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgICBpb24tbWVudS1idXR0b24ge1xuICAgICAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XG4gICAgICAgIC0tY29sb3I6ICMwMDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2Y0ZjBlYztcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgICAuc29zIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0RDMTQzQztcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG4iLCIubWFwIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luOiAyMHB4O1xufVxuLmJ1dHRvbnMgLmNhbGwtY3VzdG9tZXIge1xuICAtLWJhY2tncm91bmQ6ICM0NmUxNjk7XG4gIGNvbG9yOiAjMzkzOTM5O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5idXR0b25zIC5maW5pc2gtZHJpdmUge1xuICAtLWJhY2tncm91bmQ6ICMzOTM5Mzk7XG4gIGNvbG9yOiAjNDZlMTY5O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5idXR0b25zIC5lbmQtZHJpdmUge1xuICAtLWJhY2tncm91bmQ6ICM5YzljYWM7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmRyaXZlLXJlcXVlc3Qge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uZHJpdmUtcmVxdWVzdCAubG9jYXRpb24tZnJvbSB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmRyaXZlLXJlcXVlc3QgLmxvY2F0aW9uLWZyb20gLnRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uZHJpdmUtcmVxdWVzdCAubG9jYXRpb24tZnJvbSAudmFsdWUge1xuICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGJveC1zaGFkb3c6IDZweCA2cHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmhlYWRlci1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmhlYWRlci1ib3ggaW9uLXRpdGxlIHtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAtLWNvbG9yOiAjMDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmhlYWRlci1ib3ggaW9uLW1lbnUtYnV0dG9uIHtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAtLWNvbG9yOiAjMDAwO1xuICAtLWJhY2tncm91bmQ6ICNmNGYwZWM7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5oZWFkZXItYm94IC5zb3Mge1xuICBiYWNrZ3JvdW5kOiAjREMxNDNDO1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDIwcHggMCAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

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
        this.initializeMap();
        const firstParam = this.route.snapshot.queryParamMap.get("data");
        if (firstParam != null) {
            let message = JSON.parse(firstParam);
            this.message = message;
            this.phoneNumber = message.phoneNumber;
            const driveIsStarted = this.route.snapshot.queryParamMap.get("driveIsStarted");
            if (driveIsStarted == "true") {
                //TODO makni ovo na kraju
                this.isDriveStarted = true;
            }
            this.directionsDisplay.setMap(this.map);
            //this.calculateAndDisplayRoute()
            this.populateAddress(this.message);
        }
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
            // alert(JSON.stringify(message))
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
                center: {
                    lat: this.currentLocation.coords.latitude,
                    lng: this.currentLocation.coords.longitude
                },
                zoom: 16,
                styles: [
                    {
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#242f3e"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#746855"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#242f3e"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.locality",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#d59563"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#d59563"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#263c3f"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#6b9a76"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#38414e"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#212a37"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9ca5b3"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#746855"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#1f2835"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#f3d19c"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#2f3948"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#d59563"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#17263c"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#515c6d"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#17263c"
                            }
                        ]
                    }
                ]
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
                driver: username,
                customer: this.message.customer
            });
        });
        location.reload();
    }
    driverIsOnSpot() {
        this.storage.get("username").then(username => {
            this.socketService.send("/server-receiver", {
                type: "customer",
                messageType: "ON_SPOT",
                driver: username,
                customer: this.message.customer
            });
        });
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
//# sourceMappingURL=11-es2015.js.map