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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"header-box\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Mura Taxi</ion-title>\n      <button class=\"sos\" *ngIf=\"isUserLoggedIn\" (click)=\"callSOS()\">SOS</button>\n  </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"mapp\">\n  <style>\n    .map {\n      height: 47% !important;\n    }\n  </style>\n  \n    <div #mapElement class=\"map\"></div> \n    <div class=\"buttons\">\n      <ion-button class=\"call-customer\" *ngIf=\"isDriveStarted\" href=\"tel:{{phoneNumber}}\">Nazovi</ion-button>\n      <ion-button class=\"finish-drive\" *ngIf=\"isDriveStarted\" (click)=\"driverIsOnSpot()\" >Na adresi</ion-button>\n      <ion-button class=\"end-drive\" *ngIf=\"isDriveStarted\" (click)=\"endDrive()\">Završi</ion-button>  \n    </div>\n      <div class=\"drive-request\" *ngIf=\"isDriveStarted\">\n\n        <div class=\"location-from\">\n          <span class=\"text\">Polazište:</span>\n          <span class=\"value\">{{fromAddress}}</span> \n        </div>\n\n        <div class=\"location-from\">\n          <span class=\"text\">Odredište:</span>\n          <span class=\"value\">{{toAddress}}</span>\n        </div>\n      </div>\n\n\n</ion-content>";
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


    __webpack_exports__["default"] = ".map {\n  margin: 20px; }\n\n.buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-bottom: 1px solid #000;\n  padding-bottom: 15px;\n  margin: 20px; }\n\n.buttons .call-customer {\n    --background: #46e169;\n    color: #393939;\n    font-size: 13px;\n    width: 100px; }\n\n.buttons .finish-drive {\n    --background: #393939;\n    color: #46e169;\n    font-size: 13px;\n    width: 100px; }\n\n.buttons .end-drive {\n    --background: #9c9cac;\n    color: #fff;\n    font-size: 13px;\n    width: 100px; }\n\n.drive-request {\n  padding: 0 20px; }\n\n.drive-request .location-from {\n    padding-bottom: 15px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n\n.drive-request .location-from .text {\n      font-weight: bold;\n      text-transform: uppercase;\n      text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n      margin-bottom: 10px;\n      font-size: 13px; }\n\n.drive-request .location-from .value {\n      text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n      border: 1px solid #000;\n      box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.3);\n      height: 40px;\n      padding: 10px;\n      font-size: 13px; }\n\n.header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px; }\n\n.header-box ion-title {\n    text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n    --color: #000;\n    text-transform: uppercase; }\n\n.header-box ion-menu-button {\n    text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n    --color: #000;\n    --background: #f4f0ec;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%; }\n\n.header-box .sos {\n    background: #DC143C;\n    float: right;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    padding: 0;\n    margin: 0 20px 0 0;\n    color: white;\n    font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvZHJpdmVyLWhvbWVwYWdlL2RyaXZlci1ob21lcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLFlBQVksRUFBQTs7QUFMaEI7SUFRUSxxQkFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWSxFQUFBOztBQVhwQjtJQWNRLHFCQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZLEVBQUE7O0FBakJwQjtJQW9CUSxxQkFBYTtJQUNiLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWSxFQUFBOztBQUlwQjtFQUNJLGVBQWUsRUFBQTs7QUFEbkI7SUFJUSxvQkFBb0I7SUFDcEIsb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0IsRUFBQTs7QUFOOUI7TUFTWSxpQkFBaUI7TUFDakIseUJBQXlCO01BQ3pCLDZDQUEwQztNQUMxQyxtQkFBbUI7TUFDbkIsZUFBZSxFQUFBOztBQWIzQjtNQWdCWSw2Q0FBMEM7TUFDMUMsc0JBQXNCO01BQ3RCLCtDQUE0QztNQUM1QyxZQUFZO01BQ1osYUFBYTtNQUNiLGVBQWUsRUFBQTs7QUFLM0I7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFIakI7SUFNUSw2Q0FBMEM7SUFDMUMsYUFBUTtJQUNSLHlCQUF5QixFQUFBOztBQVJqQztJQVdRLDZDQUEwQztJQUMxQyxhQUFRO0lBQ1IscUJBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQixFQUFBOztBQWhCMUI7SUFtQlEsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlci1ob21lcGFnZS9kcml2ZXItaG9tZXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuLmJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBtYXJnaW46IDIwcHg7XG5cbiAgICAuY2FsbC1jdXN0b21lciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzQ2ZTE2OTtcbiAgICAgICAgY29sb3I6ICMzOTM5Mzk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgICAuZmluaXNoLWRyaXZlIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMzkzOTM5O1xuICAgICAgICBjb2xvcjogIzQ2ZTE2OTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICAgIC5lbmQtZHJpdmUge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM5YzljYWM7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG59XG5cbi5kcml2ZS1yZXF1ZXN0IHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgXG4gICAgLmxvY2F0aW9uLWZyb20ge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG4gICAgICAgIC52YWx1ZSB7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogNnB4IDZweCAxOHB4IDBweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaGVhZGVyLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBpb24tdGl0bGUge1xuICAgICAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XG4gICAgICAgIC0tY29sb3I6ICMwMDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICAgIGlvbi1tZW51LWJ1dHRvbiB7XG4gICAgICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcbiAgICAgICAgLS1jb2xvcjogIzAwMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZjRmMGVjO1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgIC5zb3Mge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjREMxNDNDO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwIDIwcHggMCAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cbiJdfQ== */";
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
        key: "addYourLocationButton",
        value: function addYourLocationButton(map, marker) {
          var controlDiv = document.createElement('div');
          var firstChild = document.createElement('button');
          firstChild.style.backgroundColor = '#fff';
          firstChild.style.border = 'none';
          firstChild.style.outline = 'none';
          firstChild.style.width = '28px';
          firstChild.style.height = '28px';
          firstChild.style.borderRadius = '2px';
          firstChild.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
          firstChild.style.cursor = 'pointer';
          firstChild.style["marginLEFT"] = '10px';
          firstChild.style.padding = '0';
          firstChild.title = 'Your Location';
          controlDiv.appendChild(firstChild);
          var secondChild = document.createElement('div');
          secondChild.style.margin = '5px';
          secondChild.style.width = '18px';
          secondChild.style.height = '18px';
          secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-2x.png)';
          secondChild.style.backgroundSize = '180px 18px';
          secondChild.style.backgroundPosition = '0 0';
          secondChild.style.backgroundRepeat = 'no-repeat';
          firstChild.appendChild(secondChild);
          google.maps.event.addListener(map, 'center_changed', function () {
            secondChild.style['background-position'] = '0 0';
          });
          firstChild.addEventListener('click', function () {
            var imgX = 0,
                animationInterval = setInterval(function () {
              imgX = -imgX - 18;
              secondChild.style['background-position'] = imgX + 'px 0';
            }, 500);

            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function (position) {
                var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                map.setCenter(latlng);
                clearInterval(animationInterval);
                secondChild.style['background-position'] = '-144px 0';
              });
            } else {
              clearInterval(animationInterval);
              secondChild.style['background-position'] = '0 0';
            }
          });
          controlDiv["index"] = 1;
          map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(controlDiv);
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
            var directionsDisplay, myMarker, directionsService;
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
                    myMarker = new google.maps.Marker({
                      map: this.map,
                      animation: google.maps.Animation.DROP,
                      position: new google.maps.LatLng(this.currentLocation.coords.latitude, this.currentLocation.coords.longitude)
                    });
                    this.addYourLocationButton(this.map, myMarker);
                    this.directionsDisplay.setMap(this.map);
                    directionsService = new google.maps.DirectionsService();
                    directionsDisplay.setMap(this.map);
                    directionsDisplay = new google.maps.DirectionsRenderer();
                    this.displayDirection(directionsService, directionsDisplay);

                  case 12:
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