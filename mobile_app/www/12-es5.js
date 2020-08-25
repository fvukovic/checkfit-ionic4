function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-rides/my-rides.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-rides/my-rides.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMyRidesMyRidesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Moje vožnje</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div *ngFor=\"let item of invoiceList\" class=\"my-rides\">\n  <div class=\"details-ride\">\n    <span class=\"text\">Polazište:</span>\n    <span class=\"value\">{{item.fromAddress}}</span>\n  </div>\n\n  <div class=\"details-ride\">\n    <span class=\"text\">Odredište:</span>\n    <span class=\"value\">{{item.toAddress}} </span>\n  </div>\n\n  <div class=\"details-ride\">\n    <span class=\"text\">Udaljenost:</span>\n    <span class=\"value\">{{item.km}} km </span>\n  </div>\n\n  <div class=\"details-ride\">\n      <span class=\"text\">Osoba:</span>\n      <span class=\"value\">{{item.persons}} </span>\n    </div>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/my-rides/my-rides-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/my-rides/my-rides-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: MyRidesPageRoutingModule */

  /***/
  function srcAppPagesMyRidesMyRidesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyRidesPageRoutingModule", function () {
      return MyRidesPageRoutingModule;
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


    var _my_rides_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-rides.page */
    "./src/app/pages/my-rides/my-rides.page.ts");

    var routes = [{
      path: '',
      component: _my_rides_page__WEBPACK_IMPORTED_MODULE_3__["MyRidesPage"]
    }];

    var MyRidesPageRoutingModule = function MyRidesPageRoutingModule() {
      _classCallCheck(this, MyRidesPageRoutingModule);
    };

    MyRidesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyRidesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/my-rides/my-rides.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/my-rides/my-rides.module.ts ***!
    \***************************************************/

  /*! exports provided: MyRidesPageModule */

  /***/
  function srcAppPagesMyRidesMyRidesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyRidesPageModule", function () {
      return MyRidesPageModule;
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


    var _my_rides_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-rides-routing.module */
    "./src/app/pages/my-rides/my-rides-routing.module.ts");
    /* harmony import */


    var _my_rides_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-rides.page */
    "./src/app/pages/my-rides/my-rides.page.ts");

    var MyRidesPageModule = function MyRidesPageModule() {
      _classCallCheck(this, MyRidesPageModule);
    };

    MyRidesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_rides_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyRidesPageRoutingModule"]],
      declarations: [_my_rides_page__WEBPACK_IMPORTED_MODULE_6__["MyRidesPage"]]
    })], MyRidesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/my-rides/my-rides.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/my-rides/my-rides.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMyRidesMyRidesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-rides {\n  margin: 20px;\n  border-bottom: 1px solid #000;\n  border-top: 1px solid #000;\n  padding: 15px 0 5px 0;\n}\n.my-rides .details-ride {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 10px;\n}\n.my-rides .details-ride .text {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvbXktcmlkZXMvbXktcmlkZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9teS1yaWRlcy9teS1yaWRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURFSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREdRO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQ0RaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXktcmlkZXMvbXktcmlkZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LXJpZGVzIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG4gICAgcGFkZGluZzogMTVweCAwIDVweCAwO1xuICAgIFxuXG4gICAgLmRldGFpbHMtcmlkZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgXG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5teS1yaWRlcyB7XG4gIG1hcmdpbjogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nOiAxNXB4IDAgNXB4IDA7XG59XG4ubXktcmlkZXMgLmRldGFpbHMtcmlkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5teS1yaWRlcyAuZGV0YWlscy1yaWRlIC50ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/my-rides/my-rides.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/my-rides/my-rides.page.ts ***!
    \*************************************************/

  /*! exports provided: MyRidesPage */

  /***/
  function srcAppPagesMyRidesMyRidesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyRidesPage", function () {
      return MyRidesPage;
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


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MyRidesPage = /*#__PURE__*/function () {
      function MyRidesPage(locationService, socketService, storage, http) {
        var _this = this;

        _classCallCheck(this, MyRidesPage);

        this.locationService = locationService;
        this.socketService = socketService;
        this.storage = storage;
        this.http = http;
        this.isUserLoggedIn = false;
        this.invoiceList = [];
        this.storage.get("username").then(function (val) {
          if (val != null) {
            _this.isUserLoggedIn = true;
          }
        });
      }

      _createClass(MyRidesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.storage.get("id_token").then(function (val) {
            if (val != null) {
              _this2.http.post("https://taxi-mura.herokuapp.com/api/drivesByUsername", {
                username: "admin"
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
                alert("Login je bio neuspješan");
                return rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(err || 'Internal Server error');
              })).subscribe(function (data) {
                Object.entries(data).forEach(function (_ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                      key = _ref2[0],
                      value = _ref2[1];

                  // alert("JSON.stringify(value)" + value.fromLat + " - "+  value.fromLong)
                  _this2.locationService.getReverseGeocode(value.fromLat, value.fromLong).then(function (from) {
                    _this2.locationService.getReverseGeocode(value.toLat, value.toLong).then(function (to) {
                      _this2.invoiceList.push({
                        "fromAddress": from[0].thoroughfare + "," + from[0].subThoroughfare + "," + from[0].locality,
                        "toAddress": to[0].thoroughfare + "," + to[0].subThoroughfare + "," + to[0].locality,
                        "persons": value.persons,
                        km: value.km
                      });

                      console.log(JSON.stringify(_this2.invoiceList));
                    });
                  });
                });
              });
            }
          });
        }
      }, {
        key: "getAddressFromGeolocation",
        value: function getAddressFromGeolocation(latitude, longitude) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return");

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "callSOS",
        value: function callSOS() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var currentLocation;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.locationService.getUserPosition();

                  case 2:
                    currentLocation = _context2.sent;
                    console.log("DSAD");
                    console.log(currentLocation);
                    this.storage.get("username").then(function (username) {
                      _this3.storage.get("username").then(function (phone) {
                        _this3.socketService.send("/server-receiver", {
                          type: "customer",
                          messageType: "SOS",
                          driver: username,
                          phoneNumber: phone,
                          fromLat: currentLocation["cords"]["latitude"],
                          fromLong: currentLocation["cords"]["latitude"]
                        });
                      });
                    });

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return MyRidesPage;
    }();

    MyRidesPage.ctorParameters = function () {
      return [{
        type: _services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"]
      }, {
        type: _services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }];
    };

    MyRidesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-my-rides",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-rides.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-rides/my-rides.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-rides.page.scss */
      "./src/app/pages/my-rides/my-rides.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"], _services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])], MyRidesPage);
    /***/
  }
}]);
//# sourceMappingURL=12-es5.js.map