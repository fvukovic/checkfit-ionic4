function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inactive-rides/inactive-rides.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inactive-rides/inactive-rides.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInactiveRidesInactiveRidesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"header-box\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Trenutni zahtjevi</ion-title>\n      <img src=\"../../../assets/img/taxiLogo.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngFor=\"let item of invoiceList; let i = index\" class=\"my-rides\">\n    <div class=\"details-ride\">\n      <span class=\"text\">Polazište:</span>\n      <span class=\"value\">{{item.fromAddress}}</span>\n    </div>\n\n    <div class=\"details-ride\">\n      <span class=\"text\">Odredište:</span>\n      <span class=\"value\">{{item.toAddress}} </span>\n    </div>\n\n    <div class=\"details-ride\">\n      <span class=\"text\">Udaljenost:</span>\n      <span class=\"value\">{{item.km}} km </span>\n    </div>\n\n    <div class=\"details-ride\">\n      <span class=\"text\">Osoba:</span>\n      <span class=\"value\">{{item.persons}} </span>\n    </div>\n\n     \n    <ion-radio-group (ionChange)=\"radioGroupChange($event, i)\"> \n      <ion-row>\n    <ion-col style=\"padding: 0; margin: 0;\">\n      <ion-item lines=\"none\">\n        <ion-label>3</ion-label>\n        <ion-radio value=\"3\"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col style=\"padding: 0; margin: 0;\">\n      <ion-item lines=\"none\">\n       <ion-label>5</ion-label>\n        <ion-radio value=\"5\"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col style=\"padding: 0; margin: 0;\">\n      <ion-item lines=\"none\">\n        <ion-label>10</ion-label>\n        <ion-radio value=\"10\"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col style=\"padding: 0; margin: 0;\">\n      <ion-item lines=\"none\">\n       <ion-label>15</ion-label>\n        <ion-radio value=\"15\"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col style=\"padding: 0; margin: 0;\">\n      <ion-item lines=\"none\">\n        <ion-label>20</ion-label>\n        <ion-radio value=\"20\"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col style=\"padding: 0; margin: 0;\">\n      <ion-item lines=\"none\">\n       <ion-label>25</ion-label>\n        <ion-radio value=\"25\"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col style=\"padding: 0; margin: 0;\">\n      <ion-item lines=\"none\">\n       <ion-label>30</ion-label>\n        <ion-radio value=\"30\"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col style=\"padding: 0; margin: 0;\">\n      <ion-item lines=\"none\">\n       <ion-label>45</ion-label>\n        <ion-radio value=\"45\"></ion-radio>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  </ion-radio-group>\n  \n    <button class=\"order-ride\"  [disabled]='timeSelected[i]==null' style=\"background-color: green;\" (click)=\"navigateToDrive(item, i)\">Prihvati vožnju</button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/inactive-rides/inactive-rides-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/inactive-rides/inactive-rides-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: InactiveRidesRoutingModule */

  /***/
  function srcAppPagesInactiveRidesInactiveRidesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InactiveRidesRoutingModule", function () {
      return InactiveRidesRoutingModule;
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


    var _inactive_rides_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inactive-rides.component */
    "./src/app/pages/inactive-rides/inactive-rides.component.ts");

    var routes = [{
      path: '',
      component: _inactive_rides_component__WEBPACK_IMPORTED_MODULE_3__["InactiveRidesComponent"]
    }];

    var InactiveRidesRoutingModule = function InactiveRidesRoutingModule() {
      _classCallCheck(this, InactiveRidesRoutingModule);
    };

    InactiveRidesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InactiveRidesRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/inactive-rides/inactive-rides.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/pages/inactive-rides/inactive-rides.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInactiveRidesInactiveRidesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-rides {\n  margin: 20px;\n  border-bottom: 2px solid #000;\n  padding: 15px 0 5px 0; }\n  .my-rides .details-ride {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin-bottom: 10px; }\n  .my-rides .details-ride .text {\n      font-weight: bold;\n      text-transform: uppercase;\n      font-size: 12px; }\n  .my-rides .details-ride .value {\n      text-align: right;\n      font-size: 12px; }\n  .header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px; }\n  img {\n  max-width: 50px; }\n  ion-title {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  text-transform: uppercase;\n  font-size: 20px; }\n  ion-menu-button {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  --background: #f4f0ec;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%; }\n  .order-ride {\n  width: 100%;\n  background: #393939;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-transform: uppercase;\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvaW5hY3RpdmUtcmlkZXMvaW5hY3RpdmUtcmlkZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHFCQUFxQixFQUFBO0VBSHpCO0lBT1Esb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLG1CQUFtQixFQUFBO0VBVjNCO01BY1ksaUJBQWlCO01BQ2pCLHlCQUF5QjtNQUN6QixlQUFlLEVBQUE7RUFoQjNCO01BbUJZLGlCQUFpQjtNQUNqQixlQUFlLEVBQUE7RUFJM0I7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTtFQUVqQjtFQUNJLGVBQWUsRUFBQTtFQUVuQjtFQUNJLDZDQUEwQztFQUMxQyxhQUFRO0VBQ1IseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTtFQUVuQjtFQUNJLDZDQUEwQztFQUMxQyxhQUFRO0VBQ1IscUJBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0ksV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmFjdGl2ZS1yaWRlcy9pbmFjdGl2ZS1yaWRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1yaWRlcyB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xuICAgIHBhZGRpbmc6IDE1cHggMCA1cHggMDtcbiAgICBcblxuICAgIC5kZXRhaWxzLXJpZGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIFxuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICAudmFsdWUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaGVhZGVyLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5pbWcge1xuICAgIG1heC13aWR0aDogNTBweDtcbn1cbmlvbi10aXRsZSB7XG4gICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xuICAgIC0tY29sb3I6ICMwMDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5pb24tbWVudS1idXR0b24ge1xuICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcbiAgICAtLWNvbG9yOiAjMDAwO1xuICAgIC0tYmFja2dyb3VuZDogI2Y0ZjBlYztcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ub3JkZXItcmlkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzM5MzkzOTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/inactive-rides/inactive-rides.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/inactive-rides/inactive-rides.component.ts ***!
    \******************************************************************/

  /*! exports provided: InactiveRidesComponent */

  /***/
  function srcAppPagesInactiveRidesInactiveRidesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InactiveRidesComponent", function () {
      return InactiveRidesComponent;
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

    var InactiveRidesComponent = /*#__PURE__*/function () {
      function InactiveRidesComponent(router, http, storage, locationService, socketService, events) {
        var _this = this;

        _classCallCheck(this, InactiveRidesComponent);

        this.router = router;
        this.http = http;
        this.storage = storage;
        this.locationService = locationService;
        this.socketService = socketService;
        this.events = events;
        this.invoiceList = [];
        this.timeSelected = [];
        events.subscribe("webDrives", function (message) {
          // alert(JSON.stringify(message['drives']))
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
                  phoneNumber: value["phoneNumber"],
                  customer: value["customer"],
                  time: null
                });
              });
            });

            _this.timeSelected.push(null);
          });
        });
        this.storage.get("username").then(function (val) {
          if (val != null) {
            _this.socketService.send("/server-receiver", {
              type: "driver",
              driver: val,
              messageType: "WEB_DRIVES",
              toLat: "46",
              toLong: "16"
            });
          }
        });
      }

      _createClass(InactiveRidesComponent, [{
        key: "navigateToDrive",
        value: function navigateToDrive(drive, i) {
          var _this2 = this;

          this.storage.get("username").then(function (username) {
            _this2.socketService.send("/server-receiver", {
              type: "customer",
              messageType: "ACCEPT_DRIVE",
              customer: drive.customer,
              phoneNumber: drive.phoneNumber,
              fromLat: drive.fromLat,
              fromLong: drive.fromLong,
              toLat: drive.toLat,
              toLong: drive.toLong,
              time: _this2.timeSelected[i],
              driver: username
            });
          });
        }
      }, {
        key: "radioGroupChange",
        value: function radioGroupChange(event, i) {
          this.timeSelected[i] = event.detail.value;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InactiveRidesComponent;
    }();

    InactiveRidesComponent.ctorParameters = function () {
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

    InactiveRidesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-inactive-rides",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inactive-rides.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inactive-rides/inactive-rides.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inactive-rides.component.scss */
      "./src/app/pages/inactive-rides/inactive-rides.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"], _services_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"]])], InactiveRidesComponent);
    /***/
  },

  /***/
  "./src/app/pages/inactive-rides/inactive-rides.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/inactive-rides/inactive-rides.module.ts ***!
    \***************************************************************/

  /*! exports provided: InactiveRidesModule */

  /***/
  function srcAppPagesInactiveRidesInactiveRidesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InactiveRidesModule", function () {
      return InactiveRidesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _inactive_rides_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./inactive-rides-routing.module */
    "./src/app/pages/inactive-rides/inactive-rides-routing.module.ts");
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


    var _inactive_rides_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inactive-rides.component */
    "./src/app/pages/inactive-rides/inactive-rides.component.ts");

    var InactiveRidesModule = function InactiveRidesModule() {
      _classCallCheck(this, InactiveRidesModule);
    };

    InactiveRidesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _inactive_rides_routing_module__WEBPACK_IMPORTED_MODULE_1__["InactiveRidesRoutingModule"]],
      declarations: [_inactive_rides_component__WEBPACK_IMPORTED_MODULE_6__["InactiveRidesComponent"]]
    })], InactiveRidesModule);
    /***/
  }
}]);
//# sourceMappingURL=12-es5.js.map