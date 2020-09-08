function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/active-rides/active-rides.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/active-rides/active-rides.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesActiveRidesActiveRidesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <div class=\"header-box\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Aktivne vožnje</ion-title>\r\n      <img src=\"../../../assets/img/taxiLogo.png\">\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div *ngFor=\"let item of invoiceList\" class=\"my-rides\">\r\n    <div class=\"details-ride\">\r\n      <span class=\"text\">Polazište:</span>\r\n      <span class=\"value\">{{item.fromAddress}}</span>\r\n    </div>\r\n\r\n    <div class=\"details-ride\">\r\n      <span class=\"text\">Odredište:</span>\r\n      <span class=\"value\">{{item.toAddress}} </span>\r\n    </div>\r\n\r\n    <div class=\"details-ride\">\r\n      <span class=\"text\">Udaljenost:</span>\r\n      <span class=\"value\">{{item.km}} km </span>\r\n    </div>\r\n\r\n    <div class=\"details-ride\">\r\n      <span class=\"text\">Osoba:</span>\r\n      <span class=\"value\">{{item.persons}} </span>\r\n    </div>\r\n    <div class=\"details-ride\">\r\n      <span class=\"text\">Datum:</span>\r\n      <span class=\"value\">{{item.time}} </span>\r\n    </div>\r\n    <button class=\"order-ride\" (click)=\"navigateToDrive(item)\">Pregled</button>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/active-rides/active-rides-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/active-rides/active-rides-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ActiveRidesRoutingModule */

  /***/
  function srcAppPagesActiveRidesActiveRidesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActiveRidesRoutingModule", function () {
      return ActiveRidesRoutingModule;
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


    var _active_rides_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./active-rides.component */
    "./src/app/pages/active-rides/active-rides.component.ts");

    var routes = [{
      path: '',
      component: _active_rides_component__WEBPACK_IMPORTED_MODULE_3__["ActiveRidesComponent"]
    }];

    var ActiveRidesRoutingModule = function ActiveRidesRoutingModule() {
      _classCallCheck(this, ActiveRidesRoutingModule);
    };

    ActiveRidesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ActiveRidesRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/active-rides/active-rides.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/pages/active-rides/active-rides.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesActiveRidesActiveRidesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-rides {\n  margin: 20px;\n  border-bottom: 2px solid #000;\n  padding: 15px 0 5px 0;\n}\n.my-rides .details-ride {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 10px;\n}\n.my-rides .details-ride .text {\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.my-rides .details-ride .value {\n  text-align: right;\n  font-size: 12px;\n}\n.header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px;\n}\nimg {\n  max-width: 50px;\n}\nion-title {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  text-transform: uppercase;\n  font-size: 20px;\n}\nion-menu-button {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  --background: #f4f0ec;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.order-ride {\n  width: 100%;\n  background: #393939;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-transform: uppercase;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWN0aXZlLXJpZGVzL0M6XFxtdXJhQXBwXFxjaGVja2ZpdC1pb25pYzRcXG1vYmlsZV9hcHAvc3JjXFxhcHBcXHBhZ2VzXFxhY3RpdmUtcmlkZXNcXGFjdGl2ZS1yaWRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWN0aXZlLXJpZGVzL2FjdGl2ZS1yaWRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURFSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREdRO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNEWjtBREdRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDRFo7QURLQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0FDRko7QURJQTtFQUNJLGVBQUE7QUNESjtBREdBO0VBQ0ksNkNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDQUo7QURFQTtFQUNJLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWN0aXZlLXJpZGVzL2FjdGl2ZS1yaWRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1yaWRlcyB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcclxuICAgIHBhZGRpbmc6IDE1cHggMCA1cHggMDtcclxuICAgIFxyXG5cclxuICAgIC5kZXRhaWxzLXJpZGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudmFsdWUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uaGVhZGVyLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogNTBweDtcclxufVxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgLS1jb2xvcjogIzAwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcclxuICAgIC0tY29sb3I6ICMwMDA7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNGYwZWM7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm9yZGVyLXJpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59IiwiLm15LXJpZGVzIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcbiAgcGFkZGluZzogMTVweCAwIDVweCAwO1xufVxuLm15LXJpZGVzIC5kZXRhaWxzLXJpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubXktcmlkZXMgLmRldGFpbHMtcmlkZSAudGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubXktcmlkZXMgLmRldGFpbHMtcmlkZSAudmFsdWUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaGVhZGVyLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogNTBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAtLWNvbG9yOiAjMDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLS1jb2xvcjogIzAwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmMGVjO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5vcmRlci1yaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/active-rides/active-rides.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/active-rides/active-rides.component.ts ***!
    \**************************************************************/

  /*! exports provided: ActiveRidesComponent */

  /***/
  function srcAppPagesActiveRidesActiveRidesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActiveRidesComponent", function () {
      return ActiveRidesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var _services_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/location.service */
    "./src/app/services/location.service.ts");

    var ActiveRidesComponent = /*#__PURE__*/function () {
      function ActiveRidesComponent(router, http, storage, locationService, socketService, events) {
        var _this = this;

        _classCallCheck(this, ActiveRidesComponent);

        this.router = router;
        this.http = http;
        this.storage = storage;
        this.locationService = locationService;
        this.socketService = socketService;
        this.events = events;
        this.invoiceList = [];
        events.subscribe("activeDrives", function (message) {
          Object.entries(message['drives']).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];

            _this.locationService.getReverseGeocode(value["fromLat"], value["fromLong"]).then(function (from) {
              _this.locationService.getReverseGeocode(value["toLat"], value["toLong"]).then(function (to) {
                _this.invoiceList.push({
                  fromLat: value["fromLat"],
                  fromLong: value["fromLong"],
                  toLat: value["toLat"],
                  toLong: value["toLong"],
                  fromAddress: from[0].thoroughfare + "," + from[0].subThoroughfare + "," + from[0].locality,
                  toAddress: to[0].thoroughfare + "," + to[0].subThoroughfare + "," + to[0].locality,
                  persons: value["persons"],
                  km: value["km"],
                  phoneNumber: value["phoneNumber"]
                });
              });
            });
          });
        });
        this.storage.get("username").then(function (val) {
          if (val != null) {
            _this.socketService.send("/server-receiver", {
              type: "driver",
              driver: val,
              messageType: "ACTIVE_DRIVES",
              toLat: "46",
              toLong: "16"
            });
          }
        });
      }

      _createClass(ActiveRidesComponent, [{
        key: "navigateToDrive",
        value: function navigateToDrive(drive) {
          this.router.navigate(["/driver-homepage"], {
            queryParams: {
              data: JSON.stringify(drive),
              driveIsStarted: true
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ActiveRidesComponent;
    }();

    ActiveRidesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"]
      }, {
        type: _services_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"]
      }];
    };

    ActiveRidesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-active-rides",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./active-rides.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/active-rides/active-rides.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./active-rides.component.scss */
      "./src/app/pages/active-rides/active-rides.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"], _services_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"]])], ActiveRidesComponent);
    /***/
  },

  /***/
  "./src/app/pages/active-rides/active-rides.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/active-rides/active-rides.module.ts ***!
    \***********************************************************/

  /*! exports provided: ActiveRidesModule */

  /***/
  function srcAppPagesActiveRidesActiveRidesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActiveRidesModule", function () {
      return ActiveRidesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _active_rides_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./active-rides-routing.module */
    "./src/app/pages/active-rides/active-rides-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _active_rides_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./active-rides.component */
    "./src/app/pages/active-rides/active-rides.component.ts");

    var ActiveRidesModule = function ActiveRidesModule() {
      _classCallCheck(this, ActiveRidesModule);
    };

    ActiveRidesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _active_rides_routing_module__WEBPACK_IMPORTED_MODULE_1__["ActiveRidesRoutingModule"]],
      declarations: [_active_rides_component__WEBPACK_IMPORTED_MODULE_6__["ActiveRidesComponent"]]
    })], ActiveRidesModule);
    /***/
  }
}]);
//# sourceMappingURL=9-es5.js.map