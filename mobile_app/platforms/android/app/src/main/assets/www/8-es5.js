function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutUsAboutUsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <div class=\"header-box\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>O nama</ion-title>\n      <button class=\"sos\" *ngIf=\"isUserLoggedIn\" (click)=\"callSOS()\">SOS</button>\n    </div>\n    </ion-toolbar>\n  </ion-header> \n<ion-content>\n    <img src=\"http://murataxi.com/images/resources/taxiLogo.png\" class=\"about-img\">\n\n    <p class=\"about-text\">Mura TAXI usluge, jednostavno društvo s ograničenom odgovornošću za prijevoz i druge usluge, osnovano u studenom 2019 godine. \n      Poslujemo u dva grada, Murskom Središću i Čakovcu te trenutno brojimo 4 zaposlenika.\n       Opremljeni smo najnovijim vozilima te pružamo najmodernije usluge prijevoza. </p>\n      <p class=\"order-text\">NARUČI SVOJU VOŽNJU ODMAH!</p>\n      <p class=\"order-text\">POTPUNO BESPLATNO!</p>\n<!-- <p>{{ \"HOME.title\" | translate }}</p> -->\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/about-us/about-us-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/about-us/about-us-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: AboutUsPageRoutingModule */

  /***/
  function srcAppPagesAboutUsAboutUsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsPageRoutingModule", function () {
      return AboutUsPageRoutingModule;
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


    var _about_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about-us.page */
    "./src/app/pages/about-us/about-us.page.ts");

    var routes = [{
      path: '',
      component: _about_us_page__WEBPACK_IMPORTED_MODULE_3__["AboutUsPage"]
    }];

    var AboutUsPageRoutingModule = function AboutUsPageRoutingModule() {
      _classCallCheck(this, AboutUsPageRoutingModule);
    };

    AboutUsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AboutUsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/about-us/about-us.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/about-us/about-us.module.ts ***!
    \***************************************************/

  /*! exports provided: AboutUsPageModule */

  /***/
  function srcAppPagesAboutUsAboutUsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function () {
      return AboutUsPageModule;
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


    var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about-us-routing.module */
    "./src/app/pages/about-us/about-us-routing.module.ts");
    /* harmony import */


    var _about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about-us.page */
    "./src/app/pages/about-us/about-us.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var AboutUsPageModule = function AboutUsPageModule() {
      _classCallCheck(this, AboutUsPageModule);
    };

    AboutUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutUsPageRoutingModule"]],
      declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]]
    })], AboutUsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/about-us/about-us.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/about-us/about-us.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAboutUsAboutUsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#fff;\n  text-align: center;\n}\nion-content .about-img {\n  max-width: 60%;\n  margin-top: 20px;\n}\nion-content .about-text,\nion-content .order-text {\n  margin: 30px 40px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #000;\n}\nion-content .order-text {\n  font-weight: bold;\n}\n.header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: 10px 0;\n  padding: 0;\n}\n.header-box ion-title {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\n.header-box .sos {\n  background: #DC143C;\n  float: right;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  padding: 0;\n  margin: 0 20px 0 0;\n  color: white;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hYm91dC11cy9hYm91dC11cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0NSO0FERUk7O0VBRUksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDQVI7QURHSTtFQUNJLGlCQUFBO0FDRFI7QURJQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNESjtBREdJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0RSO0FER0k7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC11cy9hYm91dC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgIC5hYm91dC1pbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDYwJTsgXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLmFib3V0LXRleHQsXG4gICAgLm9yZGVyLXRleHQge1xuICAgICAgICBtYXJnaW46IDMwcHggNDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICAgIH1cbiAgICBcbiAgICAub3JkZXItdGV4dCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cbi5oZWFkZXItYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICBpb24tdGl0bGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLnNvcyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNEQzE0M0M7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDAgMjBweCAwIDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuYWJvdXQtaW1nIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5pb24tY29udGVudCAuYWJvdXQtdGV4dCxcbmlvbi1jb250ZW50IC5vcmRlci10ZXh0IHtcbiAgbWFyZ2luOiAzMHB4IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbn1cbmlvbi1jb250ZW50IC5vcmRlci10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oZWFkZXItYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDEwcHggMDtcbiAgcGFkZGluZzogMDtcbn1cbi5oZWFkZXItYm94IGlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlYWRlci1ib3ggLnNvcyB7XG4gIGJhY2tncm91bmQ6ICNEQzE0M0M7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMjBweCAwIDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/about-us/about-us.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/about-us/about-us.page.ts ***!
    \*************************************************/

  /*! exports provided: AboutUsPage */

  /***/
  function srcAppPagesAboutUsAboutUsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsPage", function () {
      return AboutUsPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/location.service */
    "./src/app/services/location.service.ts");

    var AboutUsPage = /*#__PURE__*/function () {
      function AboutUsPage(locationService, storage, socketService) {
        var _this = this;

        _classCallCheck(this, AboutUsPage);

        this.locationService = locationService;
        this.storage = storage;
        this.socketService = socketService;
        this.isUserLoggedIn = false;
        this.storage.get("username").then(function (val) {
          if (val != null) {
            _this.isUserLoggedIn = true;
          }
        });
      }

      _createClass(AboutUsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "callSOS",
        value: function callSOS() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.locationService.getUserPosition();

                  case 2:
                    this.currentLocation = _context.sent;
                    this.storage.get("username").then(function (username) {
                      _this2.storage.get("username").then(function (phone) {
                        _this2.socketService.send("/server-receiver", {
                          type: "customer",
                          messageType: "SOS",
                          driver: username,
                          phoneNumber: phone,
                          fromLat: _this2.currentLocation.coords.latitude,
                          fromLong: _this2.currentLocation.coords.longitude
                        });
                      });
                    });

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AboutUsPage;
    }();

    AboutUsPage.ctorParameters = function () {
      return [{
        type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
      }];
    };

    AboutUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-us.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-us.page.scss */
      "./src/app/pages/about-us/about-us.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]])], AboutUsPage);
    /***/
  }
}]);
//# sourceMappingURL=8-es5.js.map