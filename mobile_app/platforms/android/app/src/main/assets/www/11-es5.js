function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-homepage/driver-homepage.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-homepage/driver-homepage.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDriverHomepageDriverHomepagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <div class=\"header-box\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Mura Taxi</ion-title>\r\n      <button class=\"sos\" *ngIf=\"isUserLoggedIn\" (click)=\"callSOS()\">SOS</button>\r\n  </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"mapp\">\r\n  <style>\r\n    .map {\r\n      height: 47% !important;\r\n    }\r\n  </style>\r\n  \r\n    <div #mapElement class=\"map\"></div> \r\n    <div class=\"buttons\">\r\n      <ion-button class=\"call-customer\" *ngIf=\"isDriveStarted\" href=\"tel:{{phoneNumber}}\">Nazovi</ion-button>\r\n      <ion-button class=\"finish-drive\" *ngIf=\"isDriveStarted\" (click)=\"driverIsOnSpot()\" >Na adresi</ion-button>\r\n      <ion-button class=\"end-drive\" *ngIf=\"isDriveStarted\" (click)=\"endDrive()\">Završi</ion-button>  \r\n    </div>\r\n      <div class=\"drive-request\" *ngIf=\"isDriveStarted\">\r\n\r\n        <div class=\"location-from\">\r\n          <span class=\"text\">Polazište:</span>\r\n          <span class=\"value\">{{fromAddress}}</span> \r\n        </div>\r\n\r\n        <div class=\"location-from\">\r\n          <span class=\"text\">Odredište:</span>\r\n          <span class=\"value\">{{toAddress}}</span>\r\n        </div>\r\n      </div>\r\n\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/driver-homepage/driver-homepage-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/driver-homepage/driver-homepage-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: DriverHomepagePageRoutingModule */

  /***/
  function srcAppPagesDriverHomepageDriverHomepageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriverHomepagePageRoutingModule", function () {
      return DriverHomepagePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _driver_homepage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./driver-homepage.page */
    "./src/app/pages/driver-homepage/driver-homepage.page.ts");

    var routes = [{
      path: '',
      component: _driver_homepage_page__WEBPACK_IMPORTED_MODULE_3__["DriverHomepagePage"]
    }];

    var DriverHomepagePageRoutingModule = function DriverHomepagePageRoutingModule() {
      _classCallCheck(this, DriverHomepagePageRoutingModule);
    };

    DriverHomepagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DriverHomepagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/driver-homepage/driver-homepage.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/driver-homepage/driver-homepage.module.ts ***!
    \*****************************************************************/

  /*! exports provided: DriverHomepagePageModule */

  /***/
  function srcAppPagesDriverHomepageDriverHomepageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriverHomepagePageModule", function () {
      return DriverHomepagePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _driver_homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./driver-homepage-routing.module */
    "./src/app/pages/driver-homepage/driver-homepage-routing.module.ts");
    /* harmony import */


    var _driver_homepage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./driver-homepage.page */
    "./src/app/pages/driver-homepage/driver-homepage.page.ts");

    var DriverHomepagePageModule = function DriverHomepagePageModule() {
      _classCallCheck(this, DriverHomepagePageModule);
    };

    DriverHomepagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _driver_homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__["DriverHomepagePageRoutingModule"]],
      declarations: [_driver_homepage_page__WEBPACK_IMPORTED_MODULE_6__["DriverHomepagePage"]]
    })], DriverHomepagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/driver-homepage/driver-homepage.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/driver-homepage/driver-homepage.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDriverHomepageDriverHomepagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".map {\n  margin: 20px;\n}\n\n.buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-bottom: 1px solid #000;\n  padding-bottom: 15px;\n  margin: 20px;\n}\n\n.buttons .call-customer {\n  --background: #46e169;\n  color: #393939;\n  font-size: 13px;\n  width: 100px;\n}\n\n.buttons .finish-drive {\n  --background: #393939;\n  color: #46e169;\n  font-size: 13px;\n  width: 100px;\n}\n\n.buttons .end-drive {\n  --background: #9c9cac;\n  color: #fff;\n  font-size: 13px;\n  width: 100px;\n}\n\n.drive-request {\n  padding: 0 20px;\n}\n\n.drive-request .location-from {\n  padding-bottom: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.drive-request .location-from .text {\n  font-weight: bold;\n  text-transform: uppercase;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  margin-bottom: 10px;\n  font-size: 13px;\n}\n\n.drive-request .location-from .value {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  border: 1px solid #000;\n  box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.3);\n  height: 40px;\n  padding: 10px;\n  font-size: 13px;\n}\n\n.header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px;\n}\n\n.header-box ion-title {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  text-transform: uppercase;\n}\n\n.header-box ion-menu-button {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  --background: #f4f0ec;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n.header-box .sos {\n  background: #DC143C;\n  float: right;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  padding: 0;\n  margin: 0 20px 0 0;\n  color: white;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZHJpdmVyLWhvbWVwYWdlL0M6XFxtdXJhQXBwXFxjaGVja2ZpdC1pb25pYzRcXG1vYmlsZV9hcHAvc3JjXFxhcHBcXHBhZ2VzXFxkcml2ZXItaG9tZXBhZ2VcXGRyaXZlci1ob21lcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RyaXZlci1ob21lcGFnZS9kcml2ZXItaG9tZXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0VSOztBREFJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNFUjs7QURBSTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDRVI7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0k7RUFDSSxvQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NSOztBRENRO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ1o7O0FEQ1E7RUFDSSw2Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNDWjs7QURJQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0FDREo7O0FER0k7RUFDSSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0RSOztBREdJO0VBQ0ksNkNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRFI7O0FER0k7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kcml2ZXItaG9tZXBhZ2UvZHJpdmVyLWhvbWVwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbi5idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuXHJcbiAgICAuY2FsbC1jdXN0b21lciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNDZlMTY5O1xyXG4gICAgICAgIGNvbG9yOiAjMzkzOTM5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuZmluaXNoLWRyaXZlIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMzOTM5Mzk7XHJcbiAgICAgICAgY29sb3I6ICM0NmUxNjk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIC5lbmQtZHJpdmUge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzljOWNhYztcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZHJpdmUtcmVxdWVzdCB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBcclxuICAgIC5sb2NhdGlvbi1mcm9tIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudmFsdWUge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggMThweCAwcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZWFkZXItYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcclxuICAgICAgICAtLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICBpb24tbWVudS1idXR0b24ge1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcclxuICAgICAgICAtLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2Y0ZjBlYztcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgLnNvcyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0RDMTQzQztcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDAgMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLm1hcCB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIG1hcmdpbjogMjBweDtcbn1cbi5idXR0b25zIC5jYWxsLWN1c3RvbWVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNDZlMTY5O1xuICBjb2xvcjogIzM5MzkzOTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogMTAwcHg7XG59XG4uYnV0dG9ucyAuZmluaXNoLWRyaXZlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzkzOTM5O1xuICBjb2xvcjogIzQ2ZTE2OTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogMTAwcHg7XG59XG4uYnV0dG9ucyAuZW5kLWRyaXZlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOWM5Y2FjO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5kcml2ZS1yZXF1ZXN0IHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmRyaXZlLXJlcXVlc3QgLmxvY2F0aW9uLWZyb20ge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5kcml2ZS1yZXF1ZXN0IC5sb2NhdGlvbi1mcm9tIC50ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmRyaXZlLXJlcXVlc3QgLmxvY2F0aW9uLWZyb20gLnZhbHVlIHtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBib3gtc2hhZG93OiA2cHggNnB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5oZWFkZXItYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5oZWFkZXItYm94IGlvbi10aXRsZSB7XG4gIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLS1jb2xvcjogIzAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5oZWFkZXItYm94IGlvbi1tZW51LWJ1dHRvbiB7XG4gIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLS1jb2xvcjogIzAwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmMGVjO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaGVhZGVyLWJveCAuc29zIHtcbiAgYmFja2dyb3VuZDogI0RDMTQzQztcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/driver-homepage/driver-homepage.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/driver-homepage/driver-homepage.page.ts ***!
    \***************************************************************/

  /*! exports provided: DriverHomepagePage */

  /***/
  function srcAppPagesDriverHomepageDriverHomepagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriverHomepagePage", function () {
      return DriverHomepagePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/location.service */
    "./src/app/services/location.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var DriverHomepagePage = /*#__PURE__*/function () {
      function DriverHomepagePage(locationService, route, socketService, storage) {
        var _this = this;

        _classCallCheck(this, DriverHomepagePage);

        this.locationService = locationService;
        this.route = route;
        this.socketService = socketService;
        this.storage = storage;
        this.isUserLoggedIn = false;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.storage.get("username").then(function (val) {
          if (val != null) {
            _this.isUserLoggedIn = true;
          }
        });
        this.initializeMap();
        var firstParam = this.route.snapshot.queryParamMap.get("data");

        if (firstParam != null) {
          var message = JSON.parse(firstParam);
          this.message = message;
          this.phoneNumber = message.phoneNumber;
          var driveIsStarted = this.route.snapshot.queryParamMap.get("driveIsStarted");

          if (driveIsStarted == "true") {
            //TODO makni ovo na kraju
            this.isDriveStarted = true;
          }

          this.directionsDisplay.setMap(this.map); //this.calculateAndDisplayRoute()

          this.populateAddress(this.message);
        }
      }

      _createClass(DriverHomepagePage, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {}
      }, {
        key: "calculateAndDisplayRoute",
        value: function calculateAndDisplayRoute() {
          var that = this;
          this.directionsService.route({
            origin: this.fromAddress,
            destination: this.toAddress,
            travelMode: "DRIVING"
          }, function (response, status) {
            if (status === "OK") {
              that.directionsDisplay.setDirections(response);
            } else {
              window.alert("Directions request failed due to " + status);
            }
          });
        }
      }, {
        key: "populateAddress",
        value: function populateAddress(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var fromAddress, toAddress;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.locationService.getReverseGeocode(message.fromLat, message.fromLong);

                  case 2:
                    fromAddress = _context.sent;
                    this.fromAddress = fromAddress[0].thoroughfare + "," + fromAddress[0].subThoroughfare + "," + fromAddress[0].locality;
                    _context.next = 6;
                    return this.locationService.getReverseGeocode(message.toLat, message.toLong);

                  case 6:
                    toAddress = _context.sent;
                    this.toAddress = toAddress[0].thoroughfare + "," + toAddress[0].subThoroughfare + "," + toAddress[0].locality;
                    this.calculateAndDisplayRoute();

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "initializeMap",
        value: function initializeMap() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var directionsDisplay, directionsService;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.locationService.getUserPosition();

                  case 2:
                    this.currentLocation = _context2.sent;
                    directionsDisplay = new google.maps.DirectionsRenderer();
                    this.map = new google.maps.Map(this.mapElement.nativeElement, {
                      center: {
                        lat: this.currentLocation.coords.latitude,
                        lng: this.currentLocation.coords.longitude
                      },
                      zoom: 16,
                      styles: [{
                        "elementType": "geometry",
                        "stylers": [{
                          "color": "#242f3e"
                        }]
                      }, {
                        "elementType": "labels.text.fill",
                        "stylers": [{
                          "color": "#746855"
                        }]
                      }, {
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                          "color": "#242f3e"
                        }]
                      }, {
                        "featureType": "administrative.locality",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                          "color": "#d59563"
                        }]
                      }, {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                          "color": "#d59563"
                        }]
                      }, {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [{
                          "color": "#263c3f"
                        }]
                      }, {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                          "color": "#6b9a76"
                        }]
                      }, {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [{
                          "color": "#38414e"
                        }]
                      }, {
                        "featureType": "road",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                          "color": "#212a37"
                        }]
                      }, {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                          "color": "#9ca5b3"
                        }]
                      }, {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [{
                          "color": "#746855"
                        }]
                      }, {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                          "color": "#1f2835"
                        }]
                      }, {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                          "color": "#f3d19c"
                        }]
                      }, {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [{
                          "color": "#2f3948"
                        }]
                      }, {
                        "featureType": "transit.station",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                          "color": "#d59563"
                        }]
                      }, {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                          "color": "#17263c"
                        }]
                      }, {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                          "color": "#515c6d"
                        }]
                      }, {
                        "featureType": "water",
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                          "color": "#17263c"
                        }]
                      }]
                    });
                    this.directionsDisplay.setMap(this.map);
                    directionsService = new google.maps.DirectionsService();
                    directionsDisplay.setMap(this.map);
                    directionsDisplay = new google.maps.DirectionsRenderer();
                    this.displayDirection(directionsService, directionsDisplay);

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "endDrive",
        value: function endDrive() {
          var _this2 = this;

          this.storage.get("username").then(function (username) {
            _this2.socketService.send("/server-receiver", {
              type: "customer",
              messageType: "FINISH_DRIVE",
              driver: username,
              customer: _this2.message.customer
            });
          });
          location.reload();
        }
      }, {
        key: "driverIsOnSpot",
        value: function driverIsOnSpot() {
          var _this3 = this;

          this.storage.get("username").then(function (username) {
            _this3.socketService.send("/server-receiver", {
              type: "customer",
              messageType: "ON_SPOT",
              driver: username,
              customer: _this3.message.customer
            });
          });
        }
      }, {
        key: "displayDirection",
        value: function displayDirection(directionsService, directionsDisplay) {
          directionsService.route({
            origin: new google.maps.LatLng(this.currentLocation.coords.latitude, this.currentLocation.coords.longitude),
            destination: this.toAddress,
            travelMode: "DRIVING"
          }, function (response, status) {
            if (status === "OK") {
              directionsDisplay.setDirections(response);
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "callSOS",
        value: function callSOS() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.locationService.getUserPosition();

                  case 2:
                    this.currentLocation = _context3.sent;
                    console.log("DSAD");
                    this.storage.get("username").then(function (username) {
                      _this4.storage.get("username").then(function (phone) {
                        _this4.socketService.send("/server-receiver", {
                          type: "customer",
                          messageType: "SOS",
                          driver: username,
                          phoneNumber: phone,
                          fromLat: _this4.currentLocation.coords.latitude,
                          fromLong: _this4.currentLocation.coords.longitude
                        });
                      });
                    });

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return DriverHomepagePage;
    }();

    DriverHomepagePage.ctorParameters = function () {
      return [{
        type: _services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapElement", {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], DriverHomepagePage.prototype, "mapElement", void 0);
    DriverHomepagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-driver-homepage",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./driver-homepage.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-homepage/driver-homepage.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./driver-homepage.page.scss */
      "./src/app/pages/driver-homepage/driver-homepage.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])], DriverHomepagePage);
    /***/
  }
}]);
//# sourceMappingURL=11-es5.js.map