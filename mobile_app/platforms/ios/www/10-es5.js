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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"header-box\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title *ngIf=\"!isUserLoggedIn\">Nova vožnja</ion-title>\n      <img *ngIf=\"!isUserLoggedIn\" src=\"../../../assets/img/taxiLogo.png\">\n      <ion-title *ngIf=\"isUserLoggedIn\">Lokacije vozača</ion-title>\n      <button class=\"sos\" *ngIf=\"isUserLoggedIn\" (click)=\"callSOS()\">SOS</button>\n      \n    </div>\n  </ion-toolbar>\n</ion-header>\n  <ion-content class=\"mapp\"> \n    <div #mapElement     [ngStyle]=\"{'height': isUserLoggedIn ? '90%' : '35%', 'margin': '20px'}\">\n    </div> \n    \n    <div class=\"location-wrapper\" *ngIf=\"!isUserLoggedIn\">\n      <h3 class=\"title\">Upišite tražene podatke:</h3>\n      <div class=\"location-details\">\n          <span class=\"text\">Polazište:</span>\n          \n          <ion-searchbar class=\"autocomplete-inp\" [(ngModel)]=\"fromAddress\" (ionChange)=\"searchChanged()\" ></ion-searchbar>\n          <ion-list style=\"margin: 0; padding: 0;\">\n            <ion-item (click)=\"selectOption(result.description)\" *ngFor=\"let result of searchResult\">\n                {{result.description}}\n            </ion-item>\n          </ion-list>\n          \n          <!-- <span class=\"value\">\n            <ion-card class=\"destination\" (click)=\"openStreetPicker('from')\"> {{fromAddress}} </ion-card>\n          </span> -->\n      </div>\n      <div class=\"location-details\">\n        <span class=\"text\">Odredište:</span>\n        <ion-searchbar class=\"autocomplete-inp\" [(ngModel)]=\"toAddress\" (ionChange)=\"searchChanged2()\" ></ion-searchbar>\n        <ion-list style=\"margin: 0; padding: 0;\">\n          <ion-item (click)=\"selectOption2(result.description)\" *ngFor=\"let result of searchResult2\">\n              {{result.description}}\n          </ion-item>\n        </ion-list>\n        <!-- <span class=\"value\">\n          <ion-card class=\"destination\" (click)=\"openStreetPicker('to')\"> {{toAddress}} </ion-card>\n        </span> -->\n      </div>\n      <div class=\"location-details\">\n          <span class=\"text\">Putnici:</span>\n          <!-- <span class=\"value\">\n            <input class=\"passengers\" type=\"text\" placeholder=\"Upišite broj putnika!\" [(ngModel)]=\"numberOfPersons\" />\n          </span> -->\n          <ion-radio-group (ionChange)=\"radioGroupChange($event)\"> \n            <ion-row>\n              <ion-col style=\"padding: 0; margin: 0;\">\n            <ion-item lines=\"none\">\n              <ion-label>1</ion-label>\n              <ion-radio value=\"1\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col style=\"padding: 0; margin: 0;\">\n            <ion-item lines=\"none\">\n             <ion-label>2</ion-label>\n              <ion-radio value=\"2\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col style=\"padding: 0; margin: 0;\">\n            <ion-item lines=\"none\">\n              <ion-label>3</ion-label>\n              <ion-radio value=\"3\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col style=\"padding: 0; margin: 0;\">\n            <ion-item lines=\"none\">\n             <ion-label>4</ion-label>\n              <ion-radio value=\"4\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        </ion-radio-group>\n      </div>\n      <div class=\"location-details\">\n        <button class=\"order-ride\" (click)=\"orderTaxi()\">{{ \"customerHomepage.myRides\" | translate }}</button>\n      </div>\n    </div>\n  </ion-content> ";
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


    __webpack_exports__["default"] = ".header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px; }\n\nimg {\n  max-width: 50px; }\n\nion-list {\n  background-color: #fff; }\n\nion-title {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  text-transform: uppercase; }\n\nion-menu-button {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  --background: #f4f0ec;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%; }\n\n.map {\n  height: 37% !important;\n  margin: 10px 10px 10px 10px;\n  border: 1px solid #c8c8c8;\n  box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.3); }\n\n.title {\n  margin: 20px 10px;\n  font-size: 14px;\n  text-transform: uppercase;\n  border-bottom: 1px solid #000;\n  padding-bottom: 10px;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  text-align: center;\n  font-weight: bold; }\n\n.sos {\n  background: #DC143C;\n  float: right;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  padding: 0;\n  margin: 0 20px 0 0;\n  color: white;\n  font-weight: bold; }\n\n.location-details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: 10px 10px 5px 10px; }\n\n.location-details .text {\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: 13px;\n    margin-bottom: 5px;\n    text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4); }\n\n.location-details .value {\n    border: 1px solid #393939;\n    width: 100%;\n    background: white;\n    box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.3); }\n\n.location-details .destination {\n    margin: 0;\n    padding: 12px;\n    font-size: 12px; }\n\n.location-details .passengers {\n    margin: 0;\n    padding: 10px;\n    border: 0;\n    text-align: left;\n    font-size: 12px;\n    height: 38px;\n    box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.3);\n    width: 100%;\n    font-size: 12px; }\n\n.location-details .order-ride {\n    width: 100%;\n    background: #393939;\n    color: white;\n    text-align: center;\n    padding: 12px;\n    text-transform: uppercase;\n    margin-top: 10px; }\n\n.location-details ion-row {\n    box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.3); }\n\n.location-details ion-radio-group {\n    height: 30px; }\n\n.location-details ion-col {\n    background: transparent !important;\n    border-top: 1px solid #000;\n    border-bottom: 1px solid #000;\n    display: -webkit-box;\n    display: flex;\n    justify-content: space-around; }\n\n.location-details ion-col:first-child {\n      border-left: 1px solid #000; }\n\n.location-details ion-col:last-child {\n      border-right: 1px solid #000; }\n\n.location-details ion-col ion-item {\n      --min-height: 30px;\n      margin: 0 !important;\n      padding: 0 !important; }\n\n.location-details ion-col ion-label {\n      margin: 0 5px 0 0;\n      padding: 0;\n      text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4); }\n\n.location-details ion-col ion-radio {\n      --color-checked:#393939;\n      --color:#393939;\n      width: 20px;\n      height: 20px;\n      opacity: 0.9; }\n\n.location-details .autocomplete-inp {\n    border: 1px solid #000;\n    margin: 0;\n    padding: 0;\n    box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.3);\n    border-radius: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvY3VzdG9tZXItaG9tZXBhZ2UvY3VzdG9tZXItaG9tZXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLDZDQUEwQztFQUMxQyxhQUFRO0VBQ1IseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksNkNBQTBDO0VBQzFDLGFBQVE7RUFDUixxQkFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsK0NBQTRDLEVBQUE7O0FBRWhEO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQiw2Q0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsMEJBQTBCLEVBQUE7O0FBSDlCO0lBTVEsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDZDQUEwQyxFQUFBOztBQVZsRDtJQWNRLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLCtDQUE0QyxFQUFBOztBQWpCcEQ7SUFxQlEsU0FBUztJQUNULGFBQWE7SUFDYixlQUFlLEVBQUE7O0FBdkJ2QjtJQTBCUSxTQUFTO0lBQ1QsYUFBYTtJQUNiLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWiwrQ0FBNEM7SUFDNUMsV0FBVztJQUNYLGVBQWUsRUFBQTs7QUFsQ3ZCO0lBcUNRLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGdCQUFnQixFQUFBOztBQTNDeEI7SUE4Q1EsK0NBQTRDLEVBQUE7O0FBOUNwRDtJQWlEUSxZQUFZLEVBQUE7O0FBakRwQjtJQW9EUSxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixvQkFBYTtJQUFiLGFBQWE7SUFDYiw2QkFBNkIsRUFBQTs7QUF4RHJDO01BNkRZLDJCQUEyQixFQUFBOztBQTdEdkM7TUFpRVksNEJBQTRCLEVBQUE7O0FBakV4QztNQXFFWSxrQkFBYTtNQUNiLG9CQUFvQjtNQUNwQixxQkFBcUIsRUFBQTs7QUF2RWpDO01BMEVZLGlCQUFpQjtNQUNqQixVQUFVO01BQ1YsNkNBQTBDLEVBQUE7O0FBNUV0RDtNQStFWSx1QkFBZ0I7TUFDaEIsZUFBUTtNQUNSLFdBQVc7TUFDWCxZQUFZO01BQ1osWUFBWSxFQUFBOztBQW5GeEI7SUF1RlEsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsK0NBQTRDO0lBQzVDLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdG9tZXItaG9tZXBhZ2UvY3VzdG9tZXItaG9tZXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuaW1nIHtcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG59XG5pb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuaW9uLXRpdGxlIHtcbiAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XG4gICAgLS1jb2xvcjogIzAwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XG4gICAgLS1jb2xvcjogIzAwMDtcbiAgICAtLWJhY2tncm91bmQ6ICNmNGYwZWM7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5tYXAge1xuICAgIGhlaWdodDogMzclICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XG4gICAgYm94LXNoYWRvdzogNnB4IDZweCAxOHB4IDBweCByZ2JhKDAsMCwwLDAuMyk7XG59XG4udGl0bGUge1xuICAgIG1hcmdpbjogMjBweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc29zIHtcbiAgICBiYWNrZ3JvdW5kOiAjREMxNDNDO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwIDIwcHggMCAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG4ubG9jYXRpb24tZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDVweCAxMHB4O1xuXG4gICAgLnRleHQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcbiAgICB9XG5cbiAgICAudmFsdWUge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzkzOTM5O1xuICAgICAgICB3aWR0aDogMTAwJTsgICAgICAgIFxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogNnB4IDZweCAxOHB4IDBweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgfVxuXG4gICAgLmRlc3RpbmF0aW9uIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMnB4OyAgICAgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLnBhc3NlbmdlcnMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggMThweCAwcHggcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAub3JkZXItcmlkZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggMThweCAwcHggcmdiYSgwLDAsMCwwLjMpO1xuICAgIH1cbiAgICBpb24tcmFkaW8tZ3JvdXAgeyAgICAgICAgXG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgaW9uLWNvbCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7ICAgICAgIFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7ICAgICAgICBcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7ICAgIFxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIC0tbWluLWhlaWdodDogMzBweDsgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDVweCAwIDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwOyAgICAgXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7ICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaW9uLXJhZGlvIHtcbiAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDojMzkzOTM5O1xuICAgICAgICAgICAgLS1jb2xvcjojMzkzOTM5O1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmF1dG9jb21wbGV0ZS1pbnAge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggMThweCAwcHggcmdiYSgwLDAsMCwwLjMpOyAgICAgICAgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDsgICAgICAgIFxuICAgIH1cbn1cbiJdfQ== */";
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
      function CustomerHomepagePage(modalcontroller, router, locationService, androidPermissions, platform, geolocation, storage, socketService, events, ngZone) {
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
        this.ngZone = ngZone;
        this.isUserLoggedIn = false;
        this.markers = [];
        this.flag = false;
        this.googleAutocomplete = new google.maps.places.AutocompleteService();
        this.searchResult = new Array();
        this.flag2 = false;
        this.searchResult2 = new Array();
        this.storage.get("username").then(function (val) {
          if (val != null) {
            _this.isUserLoggedIn = true;
          }
        });
        this.fromAddress = "Unesite adresu polaska!";
        this.toAddress = "Unesite adresu odredišta!";
      }

      _createClass(CustomerHomepagePage, [{
        key: "searchChanged",
        value: function searchChanged() {
          var _this2 = this;

          var myLatLng = new google.maps.LatLng({
            lat: this.currentLocation.coords.latitude,
            lng: this.currentLocation.coords.longitude
          });
          if (!this.fromAddress.trim().length) return;

          if (this.flag) {
            this.googleAutocomplete.getPlacePredictions({
              input: this.fromAddress,
              location: myLatLng,
              radius: 40
            }, function (predictions) {
              _this2.ngZone.run(function () {
                _this2.searchResult = predictions;
              });
            });
          }

          this.flag = true;
        }
      }, {
        key: "selectOption",
        value: function selectOption(destination) {
          this.flag = false;
          this.fromAddress = destination;
          this.searchResult = null;
        }
      }, {
        key: "searchChanged2",
        value: function searchChanged2() {
          var _this3 = this;

          var myLatLng = new google.maps.LatLng({
            lat: this.currentLocation.coords.latitude,
            lng: this.currentLocation.coords.longitude
          });
          if (!this.toAddress.trim().length) return;

          if (this.flag2) {
            this.googleAutocomplete.getPlacePredictions({
              input: this.toAddress,
              location: myLatLng,
              radius: 40
            }, function (predictions) {
              _this3.ngZone.run(function () {
                _this3.searchResult2 = predictions;
              });
            });
          }

          this.flag2 = true;
        }
      }, {
        key: "selectOption2",
        value: function selectOption2(destination) {
          this.flag2 = false;
          this.toAddress = destination;
          this.searchResult2 = null;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this4 = this;

          this.events.subscribe("driverInfo", function (message) {
            _this4.setMapOnAll(null);

            Object.entries(JSON.parse(message["drivers"])).forEach(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  value = _ref2[1];

              var marker;

              if (value["free"] == true) {
                marker = new google.maps.Marker({
                  map: _this4.map,
                  animation: google.maps.Animation.BOUNCE,
                  icon: "./assets/available-taxi.svg",
                  position: new google.maps.LatLng(value["latitude"], value["longitude"])
                });
              } else {
                marker = new google.maps.Marker({
                  map: _this4.map,
                  animation: google.maps.Animation.BOUNCE,
                  icon: "./assets/not-available-taxi.svg",
                  position: new google.maps.LatLng(value["latitude"], value["longitude"])
                });
              }

              _this4.markers.push(marker);
            });
          });
          this.platform.ready().then(function () {
            var perms = ["android.permission.ACCESS_COARSE_LOCATION", "android.permission.ACCESS_FINE_LOCATION", "android.permission.ACCESS_BACKGROUND_LOCATION"];

            _this4.androidPermissions.checkPermission(_this4.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(function (result) {
              if (result.hasPermission == false) {
                location.reload();
              }

              navigator.geolocation.getCurrentPosition(function (resp) {
                _this4.initializeMap();
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
            var myMarker, streetLocation;
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
                        elementType: "geometry",
                        stylers: [{
                          color: "#242f3e"
                        }]
                      }, {
                        elementType: "labels.text.fill",
                        stylers: [{
                          color: "#746855"
                        }]
                      }, {
                        elementType: "labels.text.stroke",
                        stylers: [{
                          color: "#242f3e"
                        }]
                      }, {
                        featureType: "administrative.locality",
                        elementType: "labels.text.fill",
                        stylers: [{
                          color: "#d59563"
                        }]
                      }, {
                        featureType: "poi",
                        elementType: "labels.text.fill",
                        stylers: [{
                          color: "#d59563"
                        }]
                      }, {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{
                          color: "#263c3f"
                        }]
                      }, {
                        featureType: "poi.park",
                        elementType: "labels.text.fill",
                        stylers: [{
                          color: "#6b9a76"
                        }]
                      }, {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [{
                          color: "#38414e"
                        }]
                      }, {
                        featureType: "road",
                        elementType: "geometry.stroke",
                        stylers: [{
                          color: "#212a37"
                        }]
                      }, {
                        featureType: "road",
                        elementType: "labels.text.fill",
                        stylers: [{
                          color: "#9ca5b3"
                        }]
                      }, {
                        featureType: "road.highway",
                        elementType: "geometry",
                        stylers: [{
                          color: "#746855"
                        }]
                      }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                          color: "#1f2835"
                        }]
                      }, {
                        featureType: "road.highway",
                        elementType: "labels.text.fill",
                        stylers: [{
                          color: "#f3d19c"
                        }]
                      }, {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                          color: "#2f3948"
                        }]
                      }, {
                        featureType: "transit.station",
                        elementType: "labels.text.fill",
                        stylers: [{
                          color: "#d59563"
                        }]
                      }, {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                          color: "#17263c"
                        }]
                      }, {
                        featureType: "water",
                        elementType: "labels.text.fill",
                        stylers: [{
                          color: "#515c6d"
                        }]
                      }, {
                        featureType: "water",
                        elementType: "labels.text.stroke",
                        stylers: [{
                          color: "#17263c"
                        }]
                      }]
                    });
                    myMarker = new google.maps.Marker({
                      map: this.map,
                      animation: google.maps.Animation.DROP,
                      position: new google.maps.LatLng(this.currentLocation.coords.latitude, this.currentLocation.coords.longitude)
                    });
                    this.addYourLocationButton(this.map, myMarker);
                    _context.next = 8;
                    return this.locationService.getReverseGeocode(this.currentLocation.coords.latitude, this.currentLocation.coords.longitude);

                  case 8:
                    streetLocation = _context.sent;
                    this.fromAddress = streetLocation[0].thoroughfare + "," + streetLocation[0].subThoroughfare + "," + streetLocation[0].locality;
                    this.toAddress = streetLocation[0].thoroughfare + "," + streetLocation[0].subThoroughfare + "," + streetLocation[0].locality;
                    console.log(this.fromAddress);
                    this.addMarker(this.map);

                  case 13:
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
            var _this5 = this;

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
                        _this5.fromAddress = data["address"];
                      } else {
                        _this5.toAddress = data["address"];
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
        key: "radioGroupChange",
        value: function radioGroupChange(event) {
          console.log("radioGroupChange", event.detail);
          this.numberOfPersons = event.detail.value;
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
        key: "callSOS",
        value: function callSOS() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this6 = this;

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
                      _this6.storage.get("username").then(function (phone) {
                        _this6.socketService.send("/server-receiver", {
                          type: "customer",
                          messageType: "SOS",
                          driver: username,
                          phoneNumber: phone,
                          fromLat: _this6.currentLocation.coords.latitude,
                          fromLong: _this6.currentLocation.coords.longitude
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
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__["AndroidPermissions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"], _services_socket_service__WEBPACK_IMPORTED_MODULE_9__["SocketService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], CustomerHomepagePage);
    /***/
  }
}]);
//# sourceMappingURL=10-es5.js.map