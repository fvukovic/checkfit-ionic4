function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14], {
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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"header-box\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Moje vožnje</ion-title>\n      <img src=\"../../../assets/img/taxiLogo.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div *ngFor=\"let item of invoiceList\" class=\"my-rides\">\n  <div class=\"details-ride\">\n    <span class=\"text\">Polazište:</span>\n    <span class=\"value\">{{item.fromAddress}}</span>\n  </div>\n\n  <div class=\"details-ride\">\n    <span class=\"text\">Odredište:</span>\n    <span class=\"value\">{{item.toAddress}} </span>\n  </div>\n\n  <div class=\"details-ride\">\n    <span class=\"text\">Udaljenost:</span>\n    <span class=\"value\">{{item.km}} km </span>\n  </div>\n\n  <div class=\"details-ride\">\n      <span class=\"text\">Osoba:</span>\n      <span class=\"value\">{{item.persons}} </span>\n  </div>\n  <div class=\"details-ride\">\n    <span class=\"text\">Datum:</span>\n    <span class=\"value\">{{item.time}} </span>\n</div>\n</div>\n</ion-content>\n";
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


    __webpack_exports__["default"] = ".my-rides {\n  margin: 20px;\n  border-bottom: 2px solid #000;\n  padding: 15px 0 5px 0;\n}\n.my-rides .details-ride {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 10px;\n}\n.my-rides .details-ride .text {\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.my-rides .details-ride .value {\n  text-align: right;\n  font-size: 12px;\n}\n.header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px;\n}\nimg {\n  max-width: 50px;\n}\nion-title {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  text-transform: uppercase;\n  font-size: 20px;\n}\nion-menu-button {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  --background: #f4f0ec;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvbXktcmlkZXMvbXktcmlkZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9teS1yaWRlcy9teS1yaWRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQ0NKO0FERUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLG1CQUFBO0FDQVI7QURHUTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDRFo7QURHUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0RaO0FES0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsYUFBQTtBQ0ZKO0FESUE7RUFDSSxlQUFBO0FDREo7QURHQTtFQUNJLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FERUE7RUFDSSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LXJpZGVzL215LXJpZGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1yaWRlcyB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xuICAgIHBhZGRpbmc6IDE1cHggMCA1cHggMDtcbiAgICBcblxuICAgIC5kZXRhaWxzLXJpZGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIFxuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICAudmFsdWUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaGVhZGVyLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5pbWcge1xuICAgIG1heC13aWR0aDogNTBweDtcbn1cbmlvbi10aXRsZSB7XG4gICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xuICAgIC0tY29sb3I6ICMwMDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5pb24tbWVudS1idXR0b24ge1xuICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcbiAgICAtLWNvbG9yOiAjMDAwO1xuICAgIC0tYmFja2dyb3VuZDogI2Y0ZjBlYztcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufSIsIi5teS1yaWRlcyB7XG4gIG1hcmdpbjogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XG4gIHBhZGRpbmc6IDE1cHggMCA1cHggMDtcbn1cbi5teS1yaWRlcyAuZGV0YWlscy1yaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm15LXJpZGVzIC5kZXRhaWxzLXJpZGUgLnRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm15LXJpZGVzIC5kZXRhaWxzLXJpZGUgLnZhbHVlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmhlYWRlci1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDUwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLS1jb2xvcjogIzAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC0tY29sb3I6ICMwMDA7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjBlYztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */";
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

          this.storage.get("username").then(function (val) {
            if (val != null) {
              _this2.http.post("https://taxi-mura.herokuapp.com/api/drivesByUsername", {
                username: val
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
                return rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(err || 'Internal Server error');
              })).subscribe(function (data) {
                alert(JSON.stringify(data));
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
                        km: value.km,
                        time: value.time.replace("T", " ").replace("Z", "")
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
//# sourceMappingURL=14-es5.js.map