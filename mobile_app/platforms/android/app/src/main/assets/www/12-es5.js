function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"header-box\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Prijava vozača</ion-title>\n      <button class=\"sos\" *ngIf=\"isUserLoggedIn\" (click)=\"callSOS()\">SOS</button>\n      <img src=\"../../../assets/img/taxiLogo.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding class=\"animated fadeIn login auth-page\">\n  <div class=\"login-content\">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class=\"animated fadeInDown\">\n      <div class=\"logo\"></div>\n      <h2 ion-text class=\"title\">\n        <strong>Upišite tražene podatke</strong> \n      </h2>\n      <img src=\"../../../assets/img/login.png\" class=\"login-img\">\n    </div>\n\n    <!-- Login form -->\n    <form class=\"list-form\">\n\n      <div class=\"box-element\">\n          <span class=\"text\">Email:</span>\n          <span class=\"value\">\n            <input [(ngModel)]=\"email\" name=\"email\" type=\"email\" class=\"destination\"/>\n          </span>\n      </div>\n\n      <div class=\"box-element\">\n        <span class=\"text\">Lozinka:</span>\n        <span class=\"value\">\n          <input [(ngModel)]=\"password\" type=\"password\" name=\"password\" class=\"destination\"/>\n      </span>\n    </div>\n\n    </form>\n\n    <div>\n      <div class=\"box-element\">\n        <button class=\"login-btn\" tappable (click)=\"login()\">\n          Prijavi se  \n        </button>\n      </div>\n    </div>\n   </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px;\n}\n\nimg {\n  max-width: 50px;\n}\n\nion-title {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  text-transform: uppercase;\n}\n\nion-menu-button {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  --background: #f4f0ec;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n.title {\n  margin: 20px 10px;\n  font-size: 18px;\n  text-transform: uppercase;\n  border-bottom: 1px solid #000;\n  padding-bottom: 10px;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  text-align: center;\n  font-weight: bold;\n}\n\n.box-element {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: 10px 10px 5px 10px;\n}\n\n.box-element .text {\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 13px;\n  margin-bottom: 5px;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n}\n\n.box-element .value {\n  border: 1px solid #393939;\n  width: 100%;\n  background: white;\n  box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.3);\n}\n\n.box-element .destination {\n  margin: 0;\n  padding: 12px;\n  font-size: 12px;\n  width: 100%;\n}\n\n.login-btn {\n  width: 100%;\n  background: #393939;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-transform: uppercase;\n  margin-top: 10px;\n}\n\n.login-img {\n  max-width: 50%;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBREFBO0VBQ0ksNkNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNHSjs7QUREQTtFQUNJLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDS0o7O0FERkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSwwQkFBQTtBQ0tKOztBREhJO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDS1I7O0FERkk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLCtDQUFBO0FDSVI7O0FEREk7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDR1I7O0FERUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmltZyB7XG4gICAgbWF4LXdpZHRoOiA1MHB4O1xufVxuaW9uLXRpdGxlIHtcbiAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XG4gICAgLS1jb2xvcjogIzAwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XG4gICAgLS1jb2xvcjogIzAwMDtcbiAgICAtLWJhY2tncm91bmQ6ICNmNGYwZWM7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi50aXRsZSB7XG4gICAgbWFyZ2luOiAyMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJveC1lbGVtZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAxMHB4IDEwcHggNXB4IDEwcHg7XG5cbiAgICAudGV4dCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xuICAgIH1cblxuICAgIC52YWx1ZSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzOTM5Mzk7XG4gICAgICAgIHdpZHRoOiAxMDAlOyAgICAgICAgXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3gtc2hhZG93OiA2cHggNnB4IDE4cHggMHB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICB9XG5cbiAgICAuZGVzdGluYXRpb24ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7ICAgICAgICBcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbn1cblxuLmxvZ2luLWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzM5MzkzOTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmxvZ2luLWltZyB7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgb3BhY2l0eTogMC44O1xufSIsIi5oZWFkZXItYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiA1MHB4O1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC0tY29sb3I6ICMwMDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLS1jb2xvcjogIzAwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmMGVjO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbjogMjBweCAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYm94LWVsZW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDEwcHggMTBweCA1cHggMTBweDtcbn1cbi5ib3gtZWxlbWVudCAudGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLmJveC1lbGVtZW50IC52YWx1ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzOTM5Mzk7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4uYm94LWVsZW1lbnQgLmRlc3RpbmF0aW9uIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW4tYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubG9naW4taW1nIHtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIG9wYWNpdHk6IDAuODtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../app.component */
    "./src/app/app.component.ts");
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
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(storage, http, router, appCompoent, alertController) {
        _classCallCheck(this, LoginPage);

        this.storage = storage;
        this.http = http;
        this.router = router;
        this.appCompoent = appCompoent;
        this.alertController = alertController;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          this.http // .post("http://localhost:8080/api/authenticate", {
          .post("https://taxi-mura.herokuapp.com/api/authenticate", {
            username: this.email,
            password: this.password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            _this.presentAlert();

            return rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(err || "Internal Server error");
          })).subscribe(function (data) {
            _this.storage.set("username", _this.email);

            _this.storage.set("id_token", data["id_token"]);

            location.reload();
          });
          this.appCompoent.isUserLoggedIn = true;
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: "myClass",
                      header: "Obavijest",
                      message: '<div style="height: 100%"> Login je bio neuspješan. </div>',
                      buttons: ["OK"]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=12-es5.js.map