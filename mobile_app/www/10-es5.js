function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10], {
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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"header-box\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title *ngIf=\"!isUserLoggedIn\">Nova vožnja</ion-title>\n      <img *ngIf=\"!isUserLoggedIn\" src=\"../../../assets/img/taxiLogo.png\">\n      <ion-title *ngIf=\"isUserLoggedIn\">Lokacije vozača</ion-title>\n      <button class=\"sos\" *ngIf=\"isUserLoggedIn\" (click)=\"callSOS()\">SOS</button>\n      \n    </div>\n  </ion-toolbar>\n</ion-header>\n  <ion-content class=\"mapp\"> \n    <div #mapElement     [ngStyle]=\"{'height': isUserLoggedIn ? '90%' : '35%', 'margin': '20px'}\"></div> \n    <div class=\"location-wrapper\" *ngIf=\"!isUserLoggedIn\">\n      <h3 class=\"title\">Upišite tražene podatke:</h3>\n      <div class=\"location-details\">\n          <span class=\"text\">Polazište:</span>\n          <span class=\"value\">\n            <ion-card class=\"destination\" (click)=\"openStreetPicker('from')\"> {{fromAddress}} </ion-card>\n          </span>\n      </div>\n      <div class=\"location-details\">\n        <span class=\"text\">Odredište:</span>\n        <span class=\"value\">\n          <ion-card class=\"destination\" (click)=\"openStreetPicker('to')\"> {{toAddress}} </ion-card>\n        </span>\n      </div>\n      <div class=\"location-details\">\n          <span class=\"text\">Putnici:</span>\n          <span class=\"value\">\n            <input class=\"passengers\" type=\"text\" placeholder=\"Upišite broj putnika!\" [(ngModel)]=\"numberOfPersons\" />\n          </span>\n      </div>\n      <div class=\"location-details\">\n        <button class=\"order-ride\" (click)=\"orderTaxi()\">{{ \"customerHomepage.myRides\" | translate }}</button>\n      </div>\n    </div>\n  </ion-content> ";
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


    __webpack_exports__["default"] = ".header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px;\n}\n\nimg {\n  max-width: 50px;\n}\n\nion-title {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  text-transform: uppercase;\n}\n\nion-menu-button {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  --background: #f4f0ec;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n.map {\n  height: 37% !important;\n  margin: 10px 10px 10px 10px;\n  border: 1px solid #c8c8c8;\n  box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.3);\n}\n\n.title {\n  margin: 20px 10px;\n  font-size: 14px;\n  text-transform: uppercase;\n  border-bottom: 1px solid #000;\n  padding-bottom: 10px;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  text-align: center;\n  font-weight: bold;\n}\n\n.sos {\n  background: #DC143C;\n  float: right;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  padding: 0;\n  margin: 0 20px 0 0;\n  color: white;\n  font-weight: bold;\n}\n\n.location-details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: 10px 10px 5px 10px;\n}\n\n.location-details .text {\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 13px;\n  margin-bottom: 5px;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n}\n\n.location-details .value {\n  border: 1px solid #393939;\n  width: 100%;\n  background: white;\n  box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.3);\n}\n\n.location-details .destination {\n  margin: 0;\n  padding: 12px;\n  font-size: 12px;\n}\n\n.location-details .passengers {\n  margin: 0;\n  padding: 10px;\n  border: 0;\n  text-align: left;\n  font-size: 12px;\n  height: 38px;\n  box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.3);\n  width: 100%;\n  font-size: 12px;\n}\n\n.location-details .order-ride {\n  width: 100%;\n  background: #393939;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-transform: uppercase;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvY3VzdG9tZXItaG9tZXBhZ2UvY3VzdG9tZXItaG9tZXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jdXN0b21lci1ob21lcGFnZS9jdXN0b21lci1ob21lcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBREFBO0VBQ0ksNkNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNHSjs7QUREQTtFQUNJLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7QUNLSjs7QURIQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ01KOztBREpBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ09KOztBREhBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMEJBQUE7QUNNSjs7QURKSTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ01SOztBREhJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQ0FBQTtBQ0tSOztBREZJO0VBQ0ksU0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDSVI7O0FERkk7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0lSOztBREZJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNJUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVyLWhvbWVwYWdlL2N1c3RvbWVyLWhvbWVwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmltZyB7XG4gICAgbWF4LXdpZHRoOiA1MHB4O1xufVxuaW9uLXRpdGxlIHtcbiAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XG4gICAgLS1jb2xvcjogIzAwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XG4gICAgLS1jb2xvcjogIzAwMDtcbiAgICAtLWJhY2tncm91bmQ6ICNmNGYwZWM7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5tYXAge1xuICAgIGhlaWdodDogMzclICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XG4gICAgYm94LXNoYWRvdzogNnB4IDZweCAxOHB4IDBweCByZ2JhKDAsMCwwLDAuMyk7XG59XG4udGl0bGUge1xuICAgIG1hcmdpbjogMjBweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc29zIHtcbiAgICBiYWNrZ3JvdW5kOiAjREMxNDNDO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwIDIwcHggMCAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG4ubG9jYXRpb24tZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDVweCAxMHB4O1xuXG4gICAgLnRleHQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcbiAgICB9XG5cbiAgICAudmFsdWUge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzkzOTM5O1xuICAgICAgICB3aWR0aDogMTAwJTsgICAgICAgIFxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogNnB4IDZweCAxOHB4IDBweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgfVxuXG4gICAgLmRlc3RpbmF0aW9uIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMnB4OyAgICAgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLnBhc3NlbmdlcnMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggMThweCAwcHggcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAub3JkZXItcmlkZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG59IiwiLmhlYWRlci1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDUwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLS1jb2xvcjogIzAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAtLWNvbG9yOiAjMDAwO1xuICAtLWJhY2tncm91bmQ6ICNmNGYwZWM7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm1hcCB7XG4gIGhlaWdodDogMzclICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODtcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbjogMjBweCAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc29zIHtcbiAgYmFja2dyb3VuZDogI0RDMTQzQztcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvY2F0aW9uLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDEwcHggMTBweCA1cHggMTBweDtcbn1cbi5sb2NhdGlvbi1kZXRhaWxzIC50ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG4ubG9jYXRpb24tZGV0YWlscyAudmFsdWUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzkzOTM5O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDZweCA2cHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLmxvY2F0aW9uLWRldGFpbHMgLmRlc3RpbmF0aW9uIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubG9jYXRpb24tZGV0YWlscyAucGFzc2VuZ2VycyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogMzhweDtcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubG9jYXRpb24tZGV0YWlscyAub3JkZXItcmlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */";
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
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/socket.service */
    "./src/app/services/socket.service.ts");

    var CustomerHomepagePage = /*#__PURE__*/function () {
      function CustomerHomepagePage(modalcontroller, router, locationService, androidPermissions, platform, geolocation, storage, socketService, events) {
        var _this = this;

        _classCallCheck(this, CustomerHomepagePage);

        this.modalcontroller = modalcontroller;
        this.router = router;
        this.locationService = locationService;
        this.androidPermissions = androidPermissions;
        this.platform = platform;
        this.geolocation = geolocation;
        this.storage = storage;
        this.socketService = socketService;
        this.events = events;
        this.isUserLoggedIn = false;
        this.markers = [];
        this.storage.get("username").then(function (val) {
          if (val != null) {
            _this.isUserLoggedIn = true;
          }
        });
        this.fromAddress = "Unesite adresu polaska!";
        this.toAddress = "Unesite adresu odredišta!";
      }

      _createClass(CustomerHomepagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this2 = this;

          this.events.subscribe("driverInfo", function (message) {
            _this2.setMapOnAll(null);

            Object.entries(JSON.parse(message["drivers"])).forEach(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  value = _ref2[1];

              var marker;

              if (value["free"] == true) {
                marker = new google.maps.Marker({
                  map: _this2.map,
                  animation: google.maps.Animation.BOUNCE,
                  icon: './assets/available-taxi.svg',
                  position: new google.maps.LatLng(value["latitude"], value["longitude"])
                });
              } else {
                marker = new google.maps.Marker({
                  map: _this2.map,
                  animation: google.maps.Animation.BOUNCE,
                  icon: './assets/not-available-taxi.svg',
                  position: new google.maps.LatLng(value["latitude"], value["longitude"])
                });
              }

              _this2.markers.push(marker);
            });
          });
          this.platform.ready().then(function () {
            var perms = ["android.permission.ACCESS_COARSE_LOCATION", "android.permission.ACCESS_FINE_LOCATION", "android.permission.ACCESS_BACKGROUND_LOCATION"];

            _this2.androidPermissions.checkPermission(_this2.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(function (result) {
              if (result.hasPermission == false) {
                location.reload();
              }

              navigator.geolocation.getCurrentPosition(function (resp) {
                _this2.initializeMap();
              });
            });
          });
        }
      }, {
        key: "setMapOnAll",
        value: function setMapOnAll(map) {
          for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
          }
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
            var _this3 = this;

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
                        _this3.fromAddress = data["address"];
                      } else {
                        _this3.toAddress = data["address"];
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
                    return this.locationService.getForwardGeocode2(this.fromAddress);

                  case 2:
                    fromAddress = _context3.sent;
                    _context3.next = 5;
                    return this.locationService.getForwardGeocode2(this.toAddress);

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
      }, {
        key: "callSOS",
        value: function callSOS() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var currentLocation;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.locationService.getUserPosition();

                  case 2:
                    currentLocation = _context4.sent;
                    console.log("DSAD");
                    console.log(currentLocation);
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

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
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
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
      }, {
        type: _services_socket_service__WEBPACK_IMPORTED_MODULE_9__["SocketService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__["AndroidPermissions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"], _services_socket_service__WEBPACK_IMPORTED_MODULE_9__["SocketService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])], CustomerHomepagePage);
    /***/
  }
}]);
//# sourceMappingURL=10-es5.js.map