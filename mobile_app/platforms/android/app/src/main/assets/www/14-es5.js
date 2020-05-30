function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-ride/search-ride.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-ride/search-ride.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSearchRideSearchRidePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>search-ride</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=container4>\n    <div *ngIf=\"isDriveAccepted\" >\n      <p>Tražim slobodnog vozača...</p>\n      <ion-spinner style=\"width:150px\" color=\"tertiary\" class=\"ion-color ion-color-tertiary ios spinner-lines hydrated\"\n        role=\"progressbar\"></ion-spinner>\n    </div>\n    <p>Vaše vozilo je udaljeno:</p> \n    <div *ngIf=\"!isDriveAccepted\" >\n        <p>{{kms}}</p> \n      </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/search-ride/search-ride-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/search-ride/search-ride-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: SearchRidePageRoutingModule */

  /***/
  function srcAppPagesSearchRideSearchRideRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchRidePageRoutingModule", function () {
      return SearchRidePageRoutingModule;
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


    var _search_ride_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search-ride.page */
    "./src/app/pages/search-ride/search-ride.page.ts");

    var routes = [{
      path: '',
      component: _search_ride_page__WEBPACK_IMPORTED_MODULE_3__["SearchRidePage"]
    }];

    var SearchRidePageRoutingModule = function SearchRidePageRoutingModule() {
      _classCallCheck(this, SearchRidePageRoutingModule);
    };

    SearchRidePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SearchRidePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/search-ride/search-ride.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/search-ride/search-ride.module.ts ***!
    \*********************************************************/

  /*! exports provided: SearchRidePageModule */

  /***/
  function srcAppPagesSearchRideSearchRideModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchRidePageModule", function () {
      return SearchRidePageModule;
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


    var _search_ride_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-ride-routing.module */
    "./src/app/pages/search-ride/search-ride-routing.module.ts");
    /* harmony import */


    var _search_ride_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search-ride.page */
    "./src/app/pages/search-ride/search-ride.page.ts");

    var SearchRidePageModule = function SearchRidePageModule() {
      _classCallCheck(this, SearchRidePageModule);
    };

    SearchRidePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_ride_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchRidePageRoutingModule"]],
      declarations: [_search_ride_page__WEBPACK_IMPORTED_MODULE_6__["SearchRidePage"]]
    })], SearchRidePageModule);
    /***/
  },

  /***/
  "./src/app/pages/search-ride/search-ride.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/search-ride/search-ride.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSearchRideSearchRidePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container4 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvc2VhcmNoLXJpZGUvc2VhcmNoLXJpZGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWFyY2gtcmlkZS9zZWFyY2gtcmlkZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0RBQUE7VUFBQSw0Q0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VhcmNoLXJpZGUvc2VhcmNoLXJpZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcjQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG59IiwiLmNvbnRhaW5lcjQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/search-ride/search-ride.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/search-ride/search-ride.page.ts ***!
    \*******************************************************/

  /*! exports provided: SearchRidePage */

  /***/
  function srcAppPagesSearchRideSearchRidePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchRidePage", function () {
      return SearchRidePage;
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


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_sim_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/sim/ngx */
    "./node_modules/@ionic-native/sim/ngx/index.js");

    var SearchRidePage = /*#__PURE__*/function () {
      function SearchRidePage(socketService, route, events, sim) {
        var _this = this;

        _classCallCheck(this, SearchRidePage);

        this.socketService = socketService;
        this.route = route;
        this.events = events;
        this.sim = sim;
        events.subscribe('driveAccepted', function (message) {
          _this.isDriveAccepted = false;
        });
        this.isDriveAccepted = true;
        events.subscribe('informCustomer', function (message) {
          _this.kms = message;
        });
        this.sim.getSimInfo().then(function (info) {
          return console.log('Sim info: ', info);
        }, function (err) {
          return console.log('Unable to get sim info: ', err);
        });
        this.sim.hasReadPermission().then(function (info) {
          return console.log('Has permission: ', info);
        });
        socketService.send("/server-receiver", {
          type: "customer",
          messageType: "DRIVE_REQUEST",
          fromLat: "45.333",
          fromLong: "16.444",
          toLat: "45.333",
          toLong: "16.444"
        });
      }

      _createClass(SearchRidePage, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var firstParam = this.route.snapshot.queryParamMap.get('data');
          var params = JSON.parse(firstParam);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchRidePage;
    }();

    SearchRidePage.ctorParameters = function () {
      return [{
        type: _services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]
      }, {
        type: _ionic_native_sim_ngx__WEBPACK_IMPORTED_MODULE_5__["Sim"]
      }];
    };

    SearchRidePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-search-ride",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search-ride.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-ride/search-ride.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search-ride.page.scss */
      "./src/app/pages/search-ride/search-ride.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"], _ionic_native_sim_ngx__WEBPACK_IMPORTED_MODULE_5__["Sim"]])], SearchRidePage);
    /***/
  }
}]);
//# sourceMappingURL=14-es5.js.map