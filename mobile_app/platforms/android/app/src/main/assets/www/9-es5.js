function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-homepage/customer-homepage.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-homepage/customer-homepage.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCustomerHomepageCustomerHomepagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>about-us</ion-title>\n  </ion-toolbar>\n</ion-header>\n  <ion-content class=\"mapp\"> \n    <style>\n      .map {\n        height: 80% !important;\n      } \n    </style>\n    <div #mapElement class=\"map\"></div> \n<ion-card (click)=\"openStreetPicker('from')\"> {{fromAddress}} </ion-card>\n<ion-card (click)=\"openStreetPicker('to')\"> {{toAddress}} </ion-card>\n<ion-button   href=\"tel:+4316800820\">>Call Customer</ion-button>\n\n<ion-radio-group> \n  1<ion-radio  (click)=\"setNumberOfPersons(1)\"></ion-radio>\n  2<ion-radio  (click)=\"setNumberOfPersons(2)\"></ion-radio>\n  3<ion-radio  (click)=\"setNumberOfPersons(3)\"></ion-radio>\n  4<ion-radio  (click)=\"setNumberOfPersons(4)\"></ion-radio>\n</ion-radio-group>\n<br/>\n  <ion-button (click)=\"orderTaxi()\">{{ \"customerHomepage.myRides\" | translate }}</ion-button>\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/customer-homepage/customer-homepage-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/customer-homepage/customer-homepage-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: CustomerHomepagePageRoutingModule */

  /***/
  function srcAppPagesCustomerHomepageCustomerHomepageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerHomepagePageRoutingModule", function () {
      return CustomerHomepagePageRoutingModule;
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


    var _customer_homepage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customer-homepage.page */
    "./src/app/pages/customer-homepage/customer-homepage.page.ts");

    var routes = [{
      path: '',
      component: _customer_homepage_page__WEBPACK_IMPORTED_MODULE_3__["CustomerHomepagePage"]
    }];

    var CustomerHomepagePageRoutingModule = function CustomerHomepagePageRoutingModule() {
      _classCallCheck(this, CustomerHomepagePageRoutingModule);
    };

    CustomerHomepagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CustomerHomepagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/customer-homepage/customer-homepage.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/customer-homepage/customer-homepage.module.ts ***!
    \*********************************************************************/

  /*! exports provided: CustomerHomepagePageModule */

  /***/
  function srcAppPagesCustomerHomepageCustomerHomepageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerHomepagePageModule", function () {
      return CustomerHomepagePageModule;
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


    var _customer_homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./customer-homepage-routing.module */
    "./src/app/pages/customer-homepage/customer-homepage-routing.module.ts");
    /* harmony import */


    var _customer_homepage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./customer-homepage.page */
    "./src/app/pages/customer-homepage/customer-homepage.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var CustomerHomepagePageModule = function CustomerHomepagePageModule() {
      _classCallCheck(this, CustomerHomepagePageModule);
    };

    CustomerHomepagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customer_homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerHomepagePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_customer_homepage_page__WEBPACK_IMPORTED_MODULE_6__["CustomerHomepagePage"]]
    })], CustomerHomepagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/customer-homepage/customer-homepage.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/customer-homepage/customer-homepage.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCustomerHomepageCustomerHomepagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVyLWhvbWVwYWdlL2N1c3RvbWVyLWhvbWVwYWdlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/customer-homepage/customer-homepage.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/customer-homepage/customer-homepage.page.ts ***!
    \*******************************************************************/

  /*! exports provided: CustomerHomepagePage */

  /***/
  function srcAppPagesCustomerHomepageCustomerHomepagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerHomepagePage", function () {
      return CustomerHomepagePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _popups_street_picker_street_picker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../popups/street-picker/street-picker.page */
    "./src/app/pages/popups/street-picker/street-picker.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/location.service */
    "./src/app/services/location.service.ts");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");

    var CustomerHomepagePage = /*#__PURE__*/function () {
      function CustomerHomepagePage(modalcontroller, router, locationService, androidPermissions, platform, geolocation) {
        _classCallCheck(this, CustomerHomepagePage);

        this.modalcontroller = modalcontroller;
        this.router = router;
        this.locationService = locationService;
        this.androidPermissions = androidPermissions;
        this.platform = platform;
        this.geolocation = geolocation;
        this.fromAddress = "Kliknite za unos addrese";
        this.toAddress = "Kliknite za unos addrese";
      }

      _createClass(CustomerHomepagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this = this;

          this.platform.ready().then(function () {
            var perms = ["android.permission.ACCESS_COARSE_LOCATION", "android.permission.ACCESS_FINE_LOCATION", "android.permission.ACCESS_BACKGROUND_LOCATION"];

            _this.androidPermissions.requestPermissions([_this.androidPermissions.PERMISSION.ACCESS_BACKGROUND_LOCATION, _this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION, _this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION]).then(function (result) {
              alert('Has permission?' + result.hasPermission), navigator.geolocation.getCurrentPosition(function (resp) {
                alert();

                _this.initializeMap();
              });
            });
          });
        }
      }, {
        key: "initializeMap",
        value: function initializeMap() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var streetLocation;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.locationService.getUserPosition();

                  case 2:
                    this.currentLocation = _context.sent;
                    this.map = new google.maps.Map(this.mapElement.nativeElement, {
                      center: {
                        lat: this.currentLocation.coords.latitude,
                        lng: this.currentLocation.coords.longitude
                      },
                      zoom: 16
                    });
                    _context.next = 6;
                    return this.locationService.getReverseGeocode(this.currentLocation.coords.latitude, this.currentLocation.coords.longitude);

                  case 6:
                    streetLocation = _context.sent;
                    this.fromAddress = streetLocation[0].thoroughfare + "," + streetLocation[0].subThoroughfare + "," + streetLocation[0].locality;
                    this.toAddress = streetLocation[0].thoroughfare + "," + streetLocation[0].subThoroughfare + "," + streetLocation[0].locality;
                    console.log(this.fromAddress);
                    this.addMarker(this.map);

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "addMarker",
        value: function addMarker(map) {
          var marker = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            position: map.getCenter()
          });
        }
      }, {
        key: "openStreetPicker",
        value: function openStreetPicker(picker) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalcontroller.create({
                      component: _popups_street_picker_street_picker_page__WEBPACK_IMPORTED_MODULE_3__["StreetPickerPage"],
                      componentProps: {
                        picker: picker
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (response) {
                      var data = response["data"];

                      if (data["address"] == null) {
                        return;
                      }

                      if (data["picker"] == "from") {
                        _this2.fromAddress = data["address"];
                      } else {
                        _this2.toAddress = data["address"];
                      }
                    });
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "setNumberOfPersons",
        value: function setNumberOfPersons(numberOfPersons) {
          this.numberOfPersons = numberOfPersons;
        }
      }, {
        key: "orderTaxi",
        value: function orderTaxi() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var fromAddress, toAddress, params;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.locationService.getForwardGeocode2(this.fromAddress + ", Varaždin, Croatia");

                  case 2:
                    fromAddress = _context3.sent;
                    _context3.next = 5;
                    return this.locationService.getForwardGeocode2(this.toAddress + ", Varaždin, Croatia");

                  case 5:
                    toAddress = _context3.sent;
                    params = {
                      fromLat: fromAddress["latitude"],
                      fromLong: fromAddress["longitude"],
                      toLat: toAddress["latitude"],
                      toLong: toAddress["longitude"],
                      persons: this.numberOfPersons
                    }; //   let params = {
                    //   fromLat: "46.13123",
                    //   fromLong: "16.123144",
                    //   toLat: "46.13123",
                    //   toLong: "16.123144",
                    // };

                    this.router.navigate(["/search-ride"], {
                      queryParams: {
                        data: JSON.stringify(params)
                      }
                    });

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return CustomerHomepagePage;
    }();

    CustomerHomepagePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"]
      }, {
        type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__["AndroidPermissions"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapElement", {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CustomerHomepagePage.prototype, "mapElement", void 0);
    CustomerHomepagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-customer-homepage",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customer-homepage.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-homepage/customer-homepage.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customer-homepage.page.scss */
      "./src/app/pages/customer-homepage/customer-homepage.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__["AndroidPermissions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]])], CustomerHomepagePage);
    /***/
  }
}]);
//# sourceMappingURL=9-es5.js.map