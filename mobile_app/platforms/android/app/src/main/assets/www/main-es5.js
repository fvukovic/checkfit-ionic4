function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 17],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 18],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 19],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 20],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 21],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 22],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 23],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 24],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 25],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 26],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 27],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 28],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 29],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 30],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 31],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 32],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 33],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 34],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 35],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 36],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 37],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 38],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 39],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 40],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 41],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 42],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 43],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 44],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 45],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 46],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 47],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 48],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 49],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 50],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 51],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 52],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 53],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 54],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 55],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 56],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 57],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 58],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 59],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 60],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 61],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 62],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 63],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 64],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 65],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 66],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 67],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 68],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 69],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 70],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 71],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 72],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 73],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 74],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 75],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 76],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 77],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 78],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 79],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 80],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 81],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 82],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 83],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 84],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 85],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 86],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 87],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 88],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 89],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 90],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 91],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 92],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 93],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 94]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\"> \n      <ion-content>\n        <ion-list id=\"inbox-list\">\n              <!-- <ion-list-header>Mura Taxi</ion-list-header>  -->\n              <img src=\"../../../assets/img/taxiLogo.png\" class=\"menu-img\">\n\n              <div class=\"menu-list\">Izbornik</div> \n                  <ion-menu-toggle auto-hide=\"false\" >\n\n                  <ion-item *ngIf=\"!isUserLoggedIn\" class=\"list-item\">\n                      <ion-label routerLink=\"/customer-homepage\">{{ \"menu.customerHomePage\" | translate }}</ion-label>\n                  </ion-item>\n\n                  <ion-item *ngIf=\"isUserLoggedIn\" class=\"list-item\">\n                    <ion-label routerLink=\"/customer-homepage\">Početna</ion-label>\n                </ion-item> \n                  <ion-item *ngIf=\"isUserLoggedIn\" class=\"list-item\">\n                    <ion-label routerLink=\"/active-rides\">Aktivne vožnje</ion-label>\n                </ion-item> \n\n\n                  <ion-item *ngIf=\"!isUserLoggedIn\" class=\"list-item\">\n                      <ion-label routerLink=\"/about-us\">{{ \"menu.aboutUs\" | translate }}</ion-label>\n                  </ion-item> \n\n                  <ion-item *ngIf=\"isUserLoggedIn\" class=\"list-item\">\n                      <ion-label routerLink=\"/my-rides\">{{ \"menu.myRides\" | translate }}</ion-label>\n                  </ion-item> \n\n                  <ion-item class=\"list-item\">\n                      <ion-label (click)=\"openPhoneNumberPopup()\">{{ \"change.number\" | translate }}</ion-label>\n                  </ion-item> \n                  <ion-item class=\"list-item\">\n                    <button class=\"menu-close\" ion-button menuClose>{{ \"menu.closeMenu\" | translate }}</button>\n                </ion-item> \n                \n                \n                </ion-menu-toggle>\n            </ion-list>\n\n            <ion-list id=\"labels-list\">\n            <ion-label *ngIf=\"!isUserLoggedIn\" routerLink=\"/login\">{{ \"menu.login\" | translate }}</ion-label> \n            <ion-label *ngIf=\"isUserLoggedIn\"  (click)=\"logout()\">{{ \"menu.logout\" | translate }}</ion-label> \n\n        </ion-list>\n      <p class=\"text-moto\">Najmodernija i najkvalitetnija usluga prijevoza u gradu!</p>\n      </ion-content>\n      \n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popups/drive-request/drive-request.page.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popups/drive-request/drive-request.page.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPopupsDriveRequestDriveRequestPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"header-box\">\n      <ion-title>Novi zahtjev za vožnju!</ion-title>\n      <button class=\"sos\" *ngIf=\"isUserLoggedIn\" (click)=\"callSOS()\">SOS</button>\n      <img src=\"../../../assets/img/taxiLogo.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n<!-- \"{\"username\":null,\"type\":\"customer\",\"messageType\":\"DRIVE_REQUEST\",\"fromLat\":\"45.333\",\"fromLong\":\"16.444\",\"toLat\":\"45.333\",\"toLong\":\"16.444\"}\" -->\n<ion-content class=\"request-wrapper\">\n  <div class=\"img-wrapper\">\n    <img src=\"../../../assets/img/callTaxi1.png\" class=\"menu-img\">      \n    \n</div>\n <div class=\"drive-request\">\n    <div class=\"location-from\">\n        <span class=\"text\">Polazište:</span>\n        <span class=\"value\">{{fromAddress}}</span> \n    </div>\n\n    <div class=\"location-from\">\n        <span class=\"text\">Odredište:</span>\n        <span class=\"value\">{{toAddress}}</span>\n    </div>\n\n    <div class=\"location-from\">\n      <span class=\"text\">Broj putnika:</span>\n    <span class=\"value\">{{message.persons}}</span>\n    </div>\n    <div class=\"time-wrapper\">\n      <ion-label class=\"select-time\">Odaberi vrijeme:</ion-label>\n      <ion-select class=\"choose-time\" [(ngModel)]=\"selectedTime\" style=\"max-width: 100%; width: 100%; text-align: right;\">\n        <ion-select-option value=\"2\">2 min</ion-select-option> \n        <ion-select-option value=\"5\">5 min</ion-select-option> \n        <ion-select-option value=\"10\">10 min</ion-select-option> \n        <ion-select-option value=\"15\">15 min</ion-select-option> \n        <ion-select-option value=\"20\">20 min</ion-select-option> \n        <ion-select-option value=\"25\">25 min</ion-select-option> \n        <ion-select-option value=\"30\">30 min</ion-select-option> \n        <ion-select-option value=\"45\">45 min</ion-select-option> \n        <ion-select-option value=\"60\">60 min</ion-select-option> \n      </ion-select>\n    </div>\n    <div class=\"buttons\">\n      <button class=\"btn accept\" (click) = \"acceptRequst()\" > Prihvati</button>\n      <button class=\"btn reject\" (click) = \"closeModal()\"  > Odbij</button>\n    </div> \n \n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popups/phone-number/phone-number.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popups/phone-number/phone-number.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPopupsPhoneNumberPhoneNumberPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"header-box\">\n      <ion-title>Promjeni broj</ion-title>\n      <button class=\"sos\" *ngIf=\"isUserLoggedIn\" (click)=\"callSOS()\">SOS</button>\n      <img src=\"../../../assets/img/taxiLogo.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n  \n  <ion-content>\n    \n    <div class=\"wrapper\">\n      <div class=\"title\">Kako bi Vas mogli kontaktirati nakon što zaprimimo zahtjev za novu vožnju, molimo Vas da unesete broj mobitela!</div>\n      <div class=\"form-box\">\n         <div class=\"text\">Upišite broj:</div>\n        <ion-input [(ngModel)]=\"phoneNumber\" placeholder=\".....................\" class=\"area-number\"></ion-input> \n      </div>\n      <button class=\"save-number\" (click) = \"saveNumber()\">Spremi</button>\n      <div class=\"icon\">\n        <img src=\"../../../assets/img/taxiLogo.png\">\n        <div class=\"text\">Najmodernija i najkvalitetnija usluga prijevoza u gradu!</div>\n      </div>\n      \n    </div>\n    \n    \n    \n    \n\n   </ion-content>  \n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popups/street-picker/street-picker.page.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popups/street-picker/street-picker.page.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPopupsStreetPickerStreetPickerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-icon (click) = \"closeModal()\"  name=\"ios-arrow-back\"></ion-icon>\n    <ion-title>Unos adrese</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"header-box\">\n      <ion-icon (click) = \"closeModal()\"  name=\"ios-arrow-back\"></ion-icon>\n      <ion-title>Unos adrese</ion-title>\n      <img src=\"../../../assets/img/taxiLogo.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"add-locations\">\n    <div class=\"text\">Upiši željenu adresu:</div>\n    <ion-textarea [(ngModel)]=\"address\"></ion-textarea>\n    <button class=\"save-locations\" (click)=\"passAddress()\">Spremi</button>\n  </div>\n<div class=\"box\">\n  <img src=\"../../../assets/img/orderTaxi.jpg\" class=\"about-img\">\n  <p class=\"text-moto\">Najmodernija i najkvalitetnija usluga prijevoza u gradu!</p>\n</div>\n</ion-content> \n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      redirectTo: 'login/',
      pathMatch: 'full'
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() */
        12).then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'about-us',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() */
        8).then(__webpack_require__.bind(null,
        /*! ./pages/about-us/about-us.module */
        "./src/app/pages/about-us/about-us.module.ts")).then(function (m) {
          return m.AboutUsPageModule;
        });
      }
    }, {
      path: 'customer-homepage',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() */
        10).then(__webpack_require__.bind(null,
        /*! ./pages/customer-homepage/customer-homepage.module */
        "./src/app/pages/customer-homepage/customer-homepage.module.ts")).then(function (m) {
          return m.CustomerHomepagePageModule;
        });
      }
    }, {
      path: 'my-rides',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() */
        13).then(__webpack_require__.bind(null,
        /*! ./pages/my-rides/my-rides.module */
        "./src/app/pages/my-rides/my-rides.module.ts")).then(function (m) {
          return m.MyRidesPageModule;
        });
      }
    }, {
      path: 'street-picker',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/popups/street-picker/street-picker.module */
        "./src/app/pages/popups/street-picker/street-picker.module.ts")).then(function (m) {
          return m.StreetPickerPageModule;
        });
      }
    }, {
      path: 'search-ride',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() */
        14).then(__webpack_require__.bind(null,
        /*! ./pages/search-ride/search-ride.module */
        "./src/app/pages/search-ride/search-ride.module.ts")).then(function (m) {
          return m.SearchRidePageModule;
        });
      }
    }, {
      path: 'drive-request',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/popups/drive-request/drive-request.module */
        "./src/app/pages/popups/drive-request/drive-request.module.ts")).then(function (m) {
          return m.DriveRequestPageModule;
        });
      }
    }, {
      path: 'driver-homepage',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() */
        11).then(__webpack_require__.bind(null,
        /*! ./pages/driver-homepage/driver-homepage.module */
        "./src/app/pages/driver-homepage/driver-homepage.module.ts")).then(function (m) {
          return m.DriverHomepagePageModule;
        });
      }
    }, {
      path: 'phone-number',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/popups/phone-number/phone-number.module */
        "./src/app/pages/popups/phone-number/phone-number.module.ts")).then(function (m) {
          return m.PhoneNumberPageModule;
        });
      }
    }, {
      path: 'active-rides',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() */
        9).then(__webpack_require__.bind(null,
        /*! ./pages/active-rides/active-rides.module */
        "./src/app/pages/active-rides/active-rides.module.ts")).then(function (m) {
          return m.ActiveRidesModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".myClass .alert-wrapper {\n  max-width: 400px;\n}\n\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n  text-align: center;\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 10px;\n  --padding-bottom: 0;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: bold;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n  margin-bottom: 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.menu-img {\n  max-width: 50%;\n  margin-bottom: 20px;\n}\n\n.list-item {\n  border-bottom: 1px solid #000;\n  border-radius: 0 !important;\n  padding-top: 2px;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-style: italic;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n}\n\n#labels-list ion-label {\n  color: white;\n  background: #393939;\n  padding: 10px 30px;\n  font-size: 12px;\n  font-weight: bold;\n  font-style: italic;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n}\n\n.menu-list {\n  height: 40px;\n  border-bottom: 1px solid;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-style: italic;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n}\n\n.text-moto {\n  border-bottom: 1px solid;\n  padding-bottom: 15px;\n  line-height: 26px;\n  font-weight: bold;\n  font-style: italic;\n  font-size: 16px;\n  text-transform: uppercase;\n  padding: 0 30px 15px 30px;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  margin-top: 25px;\n}\n\nion-menu {\n  --min-width: 100%;\n}\n\n.menu-close {\n  padding: 0;\n  text-transform: uppercase;\n  background: transparent;\n  font-weight: bold;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n}\n\n#labels-list {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtBQ0FKOztBREdBO0VBQ0UsMkVBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7O0VBRUUsa0JBQUE7QUNBRjs7QURVQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FDUkY7O0FEV0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUNYRjs7QURjQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1hGOztBRGNBO0VBQ0Usc0RBQUE7QUNYRjs7QURjQTtFQUNFLCtCQUFBO0FDWEY7O0FEY0E7RUFDRSxjQUFBO0FDWEY7O0FEY0E7RUFDRSxpQkFBQTtBQ1hGOztBRGNBO0VBQ0Usc0JBQUE7QUNYRjs7QURjQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNYRjs7QURjQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNYRjs7QURjQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1hGOztBRGNBO0VBQ0UsK0JBQUE7QUNYRjs7QURjQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDWEY7O0FEY0E7RUFDRSxrQkFBQTtBQ1hGOztBRGNBOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUNYRjs7QURjQTtFQUNFLGtCQUFBO0FDWEY7O0FEY0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQ1pGOztBRGVBO0VBQ0UsaUNBQUE7QUNaRjs7QURjQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ1hGOztBRGFBO0VBQ0UsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ1ZGOztBRFlBO0VBQ0UsWUFBQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDVEo7O0FEV0E7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ1JGOztBRFdBO0VBQ0Usd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtBQ1JGOztBRFdBO0VBQ0UsaUJBQUE7QUNSRjs7QURVQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtBQ1BGOztBRFNBO0VBQ0UsZ0JBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teUNsYXNzIHtcbiAgLmFsZXJ0LXdyYXBwZXIge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbn1cbmlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMTBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QgeyBcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuIFxuXG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4gIGNvbG9yOiAjNzU3NTc1O1xuXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgXG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5tZW51LWltZyB7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmxpc3QtaXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XG59XG4jbGFiZWxzLWxpc3QgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICMzOTM5Mzk7XG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xufVxuLm1lbnUtbGlzdCB7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XG4gICBcbn1cbi50ZXh0LW1vdG8ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAwIDMwcHggMTVweCAzMHB4OyBcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG5pb24tbWVudSB7XG4gIC0tbWluLXdpZHRoOiAxMDAlO1xufVxuLm1lbnUtY2xvc2Uge1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcbn1cbiNsYWJlbHMtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59IiwiLm15Q2xhc3MgLmFsZXJ0LXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDEwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ubWVudS1pbWcge1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxpc3QtaXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbiNsYWJlbHMtbGlzdCBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5tZW51LWxpc3Qge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4udGV4dC1tb3RvIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMCAzMHB4IDE1cHggMzBweDtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG5pb24tbWVudSB7XG4gIC0tbWluLXdpZHRoOiAxMDAlO1xufVxuXG4ubWVudS1jbG9zZSB7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4jbGFiZWxzLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @stomp/ng2-stompjs */
    "./node_modules/@stomp/ng2-stompjs/fesm2015/stomp-ng2-stompjs.js");
    /* harmony import */


    var _pages_popups_drive_request_drive_request_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/popups/drive-request/drive-request.page */
    "./src/app/pages/popups/drive-request/drive-request.page.ts");
    /* harmony import */


    var _services_location_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/location.service */
    "./src/app/services/location.service.ts");
    /* harmony import */


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var _pages_popups_phone_number_phone_number_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/popups/phone-number/phone-number.page */
    "./src/app/pages/popups/phone-number/phone-number.page.ts");
    /* harmony import */


    var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/native-audio/ngx */
    "./node_modules/@ionic-native/native-audio/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, router, socketService, modalcontroller, translate, storage, locationService, events, nativeAudio, alertController) {
        var _this2 = this;

        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.socketService = socketService;
        this.modalcontroller = modalcontroller;
        this.storage = storage;
        this.locationService = locationService;
        this.events = events;
        this.nativeAudio = nativeAudio;
        this.alertController = alertController;
        this._this = this;
        this.messageHistory = [];
        this.state = "NOT CONNECTED";
        this.isUserLoggedIn = false; //socketService.getUniqueId();

        this.router.navigateByUrl("customer-homepage");
        this.initializeApp();
        translate.setDefaultLang("en");
        this.platform.ready().then(function () {
          _this2.nativeAudio.preloadSimple("uniqueId1", "assets/mp3.mp3").then(_this2.onSuccess, _this2.onError);

          _this2.socketService.initializeWebSocketConnection();

          _this2.storage.get("username").then(function (username) {
            if (username != null) {
              setInterval(function () {
                _this2.locationService.getUserPosition().then(function (val) {
                  _this2.socketService.send("/server-receiver", {
                    type: "driver",
                    driver: username,
                    messageType: "DRIVER_INFO",
                    toLat: val["coords"].latitude,
                    toLong: val["coords"].longitude
                  });
                }, function (err) {
                  return console.error(err);
                });
              }, 4000);
            }
          });

          setTimeout(function () {
            _this2.socketService.stream().subscribe(function (message) {
              _this2.messageHistory.unshift(message.body);

              console.log(message);

              _this2._this.handleMessage(JSON.parse(message.body));
            });

            _this2.socketService.state().subscribe(function (state) {
              _this2.state = _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_8__["StompState"][state];
            });
          }, 3000);
        });
      }

      _createClass(AppComponent, [{
        key: "onSuccess",
        value: function onSuccess(ee) {}
      }, {
        key: "onError",
        value: function onError(ee) {}
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this3 = this;

          this.storage.get("phoneNumber").then(function (val) {
            if (val == null) {
              _this3.openPhoneNumberPopup();
            }
          });
          this.storage.get("username").then(function (val) {
            if (val != null) {
              _this3.isUserLoggedIn = true;
            }
          }); // Subscribe to its stream (to listen on messages)
          // Subscribe to its state (to know its connected or not)

          this.platform.ready().then(function () {
            _this3.statusBar.styleDefault();

            _this3.splashScreen.hide();
          });
        }
      }, {
        key: "handleMessage",
        value: function handleMessage(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var streetLocation, streetLocation2;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log(JSON.stringify(message));
                    _context.t0 = message.messageType;
                    _context.next = _context.t0 === "DRIVE_REQUEST" ? 4 : _context.t0 === "INFORM_DRIVE_CUSTOMER" ? 6 : _context.t0 === "INFORM_DRIVE_DRIVER" ? 8 : _context.t0 === "ACCEPT_DRIVE" ? 10 : _context.t0 === "ACCEPT_DRIVE_DRIVER" ? 12 : _context.t0 === "REQUEST_INCOMING" ? 14 : _context.t0 === "FINISH_DRIVE_CUSTOMER" ? 26 : _context.t0 === "SOS" ? 29 : _context.t0 === 'DRIVER_INFO' ? 36 : _context.t0 === "DRIVER_NOTIFICATION" ? 38 : _context.t0 === "ACTIVE_DRIVES" ? 40 : 41;
                    break;

                  case 4:
                    setTimeout(function () {
                      _this4.modalcontroller.create({
                        component: _pages_popups_drive_request_drive_request_page__WEBPACK_IMPORTED_MODULE_9__["DriveRequestPage"],
                        componentProps: {
                          message: message
                        }
                      }).then(function (modalElement) {
                        _this4.nativeAudio.play("uniqueId1");

                        modalElement.present();
                      });
                    }, 0);
                    return _context.abrupt("break", 41);

                  case 6:
                    this.updateDistance(message);
                    return _context.abrupt("break", 41);

                  case 8:
                    // TODO removaj ovo
                    this.locationService.getUserPosition().then(function (val) {
                      _this4.socketService.send("/server-receiver", {
                        type: "driver",
                        messageType: "INFORM_DRIVE_DRIVER",
                        toLat: val["coords"].latitude,
                        toLong: val["coords"].longitude,
                        fromLat: message.fromLat,
                        fromLong: message.fromLong
                      });
                    }, function (err) {
                      return console.error(err);
                    });
                    return _context.abrupt("break", 41);

                  case 10:
                    // TODO remove popup
                    this.events.publish("driveAccepted", message);
                    return _context.abrupt("break", 41);

                  case 12:
                    this.router.navigate(["/driver-homepage"], {
                      queryParams: {
                        data: JSON.stringify(message),
                        driveIsStarted: true
                      }
                    });
                    return _context.abrupt("break", 41);

                  case 14:
                    _context.next = 16;
                    return this.locationService.getReverseGeocode(message.fromLat, message.fromLong);

                  case 16:
                    streetLocation = _context.sent;
                    this.fromAddress = streetLocation[0].thoroughfare + "," + streetLocation[0].subThoroughfare + "," + streetLocation[0].locality;
                    this.nativeAudio.play("uniqueId1");
                    _context.next = 21;
                    return this.locationService.getReverseGeocode(message.toLat, message.toLong);

                  case 21:
                    streetLocation2 = _context.sent;
                    this.toAddress = streetLocation2[0].thoroughfare + "," + streetLocation2[0].subThoroughfare + "," + streetLocation2[0].locality;
                    this.nativeAudio.play("uniqueId1");
                    this.presentAlert({
                      cssClass: "myClass",
                      header: "Obavijest",
                      message: 'Dolazi nova Vožnja!',
                      buttons: ["OK"]
                    });
                    return _context.abrupt("break", 41);

                  case 26:
                    //TODO remove popup
                    this.router.navigate(["/customer-homepage"]);
                    this.presentAlert({
                      cssClass: "myClass",
                      header: "Obavijest",
                      message: '<div style="height: 100%"> Vaše vozilo vas čeka na polazištu! </div>',
                      buttons: ["OK"]
                    });
                    return _context.abrupt("break", 41);

                  case 29:
                    _context.next = 31;
                    return this.locationService.getReverseGeocode(message.fromLat, message.fromLong);

                  case 31:
                    streetLocation = _context.sent;
                    this.fromAddress = streetLocation[0].thoroughfare + "," + streetLocation[0].subThoroughfare + "," + streetLocation[0].locality;
                    this.nativeAudio.play("uniqueId1");
                    this.presentAlert({
                      cssClass: "myClass",
                      header: "Obavijest",
                      message: '<div style="height: 100%"> Vozač: ' + message.driver + ' je u nevolji!!! \n Lokacija: ' + this.fromAddress + '</div>',
                      buttons: ["OK"]
                    });
                    return _context.abrupt("break", 41);

                  case 36:
                    this.events.publish("driverInfo", message);
                    return _context.abrupt("break", 41);

                  case 38:
                    this.presentAlert({
                      cssClass: "myClass",
                      header: "Obavijest",
                      message: '<div style="height: 100%">   ' + message.driver + '</div>',
                      buttons: ["OK"]
                    });
                    return _context.abrupt("break", 41);

                  case 40:
                    this.events.publish("activeDrives", message);

                  case 41:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getAddressFromGeolocation",
        value: function getAddressFromGeolocation(latitude, longitude) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.locationService.getReverseGeocode2(latitude, longitude);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "updateDistance",
        value: function updateDistance(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _this = this;
                    this.locationService.getDistanceFromLatLonInKm(message.fromLat, message.fromLong, message.toLat, message.toLong, function (response, status) {
                      console.log("TUUUUU");
                      console.log(message);

                      _this.events.publish("informCustomer", response.rows[0].elements[0].distance.text);
                    });

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var path = window.location.pathname.split("folder/")[1];

          if (path !== undefined) {}
        }
      }, {
        key: "logout",
        value: function logout() {
          this.isUserLoggedIn = false;
          this.storage.set("username", null);
          location.reload();
        }
      }, {
        key: "openPhoneNumberPopup",
        value: function openPhoneNumberPopup() {
          this.modalcontroller.create({
            component: _pages_popups_phone_number_phone_number_page__WEBPACK_IMPORTED_MODULE_12__["PhoneNumberPage"]
          }).then(function (modalElement) {
            modalElement.present();
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(options) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create(options);

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_socket_service__WEBPACK_IMPORTED_MODULE_11__["SocketService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: _services_location_service__WEBPACK_IMPORTED_MODULE_10__["LocationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"]
      }, {
        type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_13__["NativeAudio"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_socket_service__WEBPACK_IMPORTED_MODULE_11__["SocketService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _services_location_service__WEBPACK_IMPORTED_MODULE_10__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"], _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_13__["NativeAudio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: createTranslateLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _pages_popups_street_picker_street_picker_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/popups/street-picker/street-picker.module */
    "./src/app/pages/popups/street-picker/street-picker.module.ts");
    /* harmony import */


    var _pages_popups_drive_request_drive_request_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/popups/drive-request/drive-request.module */
    "./src/app/pages/popups/drive-request/drive-request.module.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/unique-device-id/ngx */
    "./node_modules/@ionic-native/unique-device-id/ngx/index.js");
    /* harmony import */


    var _pages_popups_phone_number_phone_number_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/popups/phone-number/phone-number.module */
    "./src/app/pages/popups/phone-number/phone-number.module.ts");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/native-audio/ngx */
    "./node_modules/@ionic-native/native-audio/ngx/index.js");

    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _pages_popups_street_picker_street_picker_module__WEBPACK_IMPORTED_MODULE_12__["StreetPickerPageModule"], _pages_popups_drive_request_drive_request_module__WEBPACK_IMPORTED_MODULE_13__["DriveRequestPageModule"], _pages_popups_phone_number_phone_number_module__WEBPACK_IMPORTED_MODULE_18__["PhoneNumberPageModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_14__["IonicStorageModule"].forRoot(), _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
        }
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__["Geolocation"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_16__["NativeGeocoder"], _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_17__["UniqueDeviceID"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_19__["AndroidPermissions"], _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_20__["NativeAudio"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/pages/popups/drive-request/drive-request-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/popups/drive-request/drive-request-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: DriveRequestPageRoutingModule */

  /***/
  function srcAppPagesPopupsDriveRequestDriveRequestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriveRequestPageRoutingModule", function () {
      return DriveRequestPageRoutingModule;
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


    var _drive_request_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./drive-request.page */
    "./src/app/pages/popups/drive-request/drive-request.page.ts");

    var routes = [{
      path: '',
      component: _drive_request_page__WEBPACK_IMPORTED_MODULE_3__["DriveRequestPage"]
    }];

    var DriveRequestPageRoutingModule = function DriveRequestPageRoutingModule() {
      _classCallCheck(this, DriveRequestPageRoutingModule);
    };

    DriveRequestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DriveRequestPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/popups/drive-request/drive-request.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/popups/drive-request/drive-request.module.ts ***!
    \********************************************************************/

  /*! exports provided: DriveRequestPageModule */

  /***/
  function srcAppPagesPopupsDriveRequestDriveRequestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriveRequestPageModule", function () {
      return DriveRequestPageModule;
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


    var _drive_request_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./drive-request-routing.module */
    "./src/app/pages/popups/drive-request/drive-request-routing.module.ts");
    /* harmony import */


    var _drive_request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./drive-request.page */
    "./src/app/pages/popups/drive-request/drive-request.page.ts");

    var DriveRequestPageModule = function DriveRequestPageModule(modalController) {
      _classCallCheck(this, DriveRequestPageModule);

      this.modalController = modalController;
    };

    DriveRequestPageModule.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    DriveRequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _drive_request_routing_module__WEBPACK_IMPORTED_MODULE_5__["DriveRequestPageRoutingModule"]],
      declarations: [_drive_request_page__WEBPACK_IMPORTED_MODULE_6__["DriveRequestPage"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], DriveRequestPageModule);
    /***/
  },

  /***/
  "./src/app/pages/popups/drive-request/drive-request.page.scss":
  /*!********************************************************************!*\
    !*** ./src/app/pages/popups/drive-request/drive-request.page.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPopupsDriveRequestDriveRequestPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".drive-request {\n  padding: 20px;\n}\n.drive-request .location-from {\n  margin: 15px 0;\n  border-bottom: 1px solid #000;\n  padding-bottom: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.drive-request .location-from .text {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n.drive-request .location-from .value {\n  text-align: right;\n  padding: 0 20px;\n}\n.drive-request .buttons {\n  margin: 20px 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.drive-request .buttons .btn {\n  padding: 20px 40px;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-weight: 18px;\n  border-radius: 5px;\n}\n.drive-request .buttons .accept {\n  background: #46e169;\n}\n.drive-request .buttons .reject {\n  background: #DC143C;\n  color: white;\n}\n.title {\n  padding: 20px;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.img-wrapper {\n  text-align: center;\n}\n.img-wrapper img {\n  max-width: 50%;\n  margin-top: 15px;\n}\nion-icon {\n  float: left;\n}\n.header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px;\n}\nimg {\n  max-width: 50px;\n}\nion-title {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  text-transform: uppercase;\n  font-size: 16px;\n}\nion-menu-button {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  --background: #f4f0ec;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.label {\n  color: #000;\n  padding: 0 !important;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.select-time {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.time-wrapper {\n  padding: 0 0 15px 0;\n  height: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-content: space-around;\n  border-bottom: 1px solid #000;\n}\n.time-wrapper .choose-time::part(icon) {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvcG9wdXBzL2RyaXZlLXJlcXVlc3QvZHJpdmUtcmVxdWVzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BvcHVwcy9kcml2ZS1yZXF1ZXN0L2RyaXZlLXJlcXVlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQ0k7RUFDSSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ1I7QURDUTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7QUNDWjtBRENRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDQ1o7QURHSTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0RSO0FESVE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRlo7QURLUTtFQUNJLG1CQUFBO0FDSFo7QURNUTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0paO0FEUUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDTEo7QURPQTtFQUNJLGtCQUFBO0FDSko7QURNSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0pSO0FET0E7RUFDSSxXQUFBO0FDSko7QURNQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0FDSEo7QURLQTtFQUNJLGVBQUE7QUNGSjtBRElBO0VBQ0ksNkNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDREo7QURHQTtFQUNJLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNFSjtBREFBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7QUNHSjtBRERJO0VBQ0ksYUFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9wdXBzL2RyaXZlLXJlcXVlc3QvZHJpdmUtcmVxdWVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJpdmUtcmVxdWVzdCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBcbiAgICAubG9jYXRpb24tZnJvbSB7XG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJ1dHRvbnMge1xuICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICA7XG5cbiAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMThweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweFxuICAgICAgICB9XG5cbiAgICAgICAgLmFjY2VwdCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDZlMTY5OyAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLnJlamVjdCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjREMxNDNDO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuLnRpdGxlIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmltZy13cmFwcGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxufVxuaW9uLWljb24ge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmhlYWRlci1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuaW1nIHtcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG59XG5pb24tdGl0bGUge1xuICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcbiAgICAtLWNvbG9yOiAjMDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XG4gICAgLS1jb2xvcjogIzAwMDtcbiAgICAtLWJhY2tncm91bmQ6ICNmNGYwZWM7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5sYWJlbCB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VsZWN0LXRpbWUge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGltZS13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwIDAgMTVweCAwO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG5cbiAgICAuY2hvb3NlLXRpbWU6OnBhcnQoaWNvbikge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbiIsIi5kcml2ZS1yZXF1ZXN0IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5kcml2ZS1yZXF1ZXN0IC5sb2NhdGlvbi1mcm9tIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmRyaXZlLXJlcXVlc3QgLmxvY2F0aW9uLWZyb20gLnRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5kcml2ZS1yZXF1ZXN0IC5sb2NhdGlvbi1mcm9tIC52YWx1ZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uZHJpdmUtcmVxdWVzdCAuYnV0dG9ucyB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZHJpdmUtcmVxdWVzdCAuYnV0dG9ucyAuYnRuIHtcbiAgcGFkZGluZzogMjBweCA0MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC13ZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5kcml2ZS1yZXF1ZXN0IC5idXR0b25zIC5hY2NlcHQge1xuICBiYWNrZ3JvdW5kOiAjNDZlMTY5O1xufVxuLmRyaXZlLXJlcXVlc3QgLmJ1dHRvbnMgLnJlamVjdCB7XG4gIGJhY2tncm91bmQ6ICNEQzE0M0M7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRpdGxlIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmltZy13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmltZy13cmFwcGVyIGltZyB7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaGVhZGVyLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogNTBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAtLWNvbG9yOiAjMDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLS1jb2xvcjogIzAwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmMGVjO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sYWJlbCB7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2VsZWN0LXRpbWUge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRpbWUtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDAgMCAxNXB4IDA7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xufVxuLnRpbWUtd3JhcHBlciAuY2hvb3NlLXRpbWU6OnBhcnQoaWNvbikge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/popups/drive-request/drive-request.page.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/popups/drive-request/drive-request.page.ts ***!
    \******************************************************************/

  /*! exports provided: DriveRequestPage */

  /***/
  function srcAppPagesPopupsDriveRequestDriveRequestPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriveRequestPage", function () {
      return DriveRequestPage;
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


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var _services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/location.service */
    "./src/app/services/location.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var DriveRequestPage = /*#__PURE__*/function () {
      function DriveRequestPage(modalControler, navParams, socketService, router, locationService, storage) {
        _classCallCheck(this, DriveRequestPage);

        this.modalControler = modalControler;
        this.navParams = navParams;
        this.socketService = socketService;
        this.router = router;
        this.locationService = locationService;
        this.storage = storage;
        this.message = this.navParams.get("message");
        this.populateAddresses();
      }

      _createClass(DriveRequestPage, [{
        key: "populateAddresses",
        value: function populateAddresses() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var fromAddress, toAddress;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.locationService.getReverseGeocode(this.message.fromLat, this.message.fromLong);

                  case 2:
                    fromAddress = _context5.sent;
                    this.fromAddress = fromAddress[0].thoroughfare + "," + fromAddress[0].subThoroughfare + "," + fromAddress[0].locality;
                    _context5.next = 6;
                    return this.locationService.getReverseGeocode(this.message.toLat, this.message.toLong);

                  case 6:
                    toAddress = _context5.sent;
                    this.toAddress = toAddress[0].thoroughfare + "," + toAddress[0].subThoroughfare + "," + toAddress[0].locality;

                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalControler.dismiss();
        }
      }, {
        key: "acceptRequst",
        value: function acceptRequst() {
          var _this5 = this;

          this.storage.get("username").then(function (username) {
            _this5.socketService.send("/server-receiver", {
              type: "customer",
              messageType: "ACCEPT_DRIVE",
              customer: _this5.message.username,
              phoneNumber: _this5.message.phoneNumber,
              fromLat: _this5.message.fromLat,
              fromLong: _this5.message.fromLong,
              toLat: _this5.message.toLat,
              toLong: _this5.message.toLong,
              time: _this5.selectedTime,
              driver: username
            });
          }); //this.router.navigate(["/driver-homepage"],  { queryParams: {data:JSON.stringify(this.message)} });

          this.closeModal();
          /**TODO dodaj alert za 5 sekunda ako voznja nije prihvacena
           */
        }
      }]);

      return DriveRequestPage;
    }();

    DriveRequestPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }];
    };

    DriveRequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-drive-request",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./drive-request.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popups/drive-request/drive-request.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./drive-request.page.scss */
      "./src/app/pages/popups/drive-request/drive-request.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])], DriveRequestPage);
    /***/
  },

  /***/
  "./src/app/pages/popups/phone-number/phone-number-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/popups/phone-number/phone-number-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: PhoneNumberPageRoutingModule */

  /***/
  function srcAppPagesPopupsPhoneNumberPhoneNumberRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneNumberPageRoutingModule", function () {
      return PhoneNumberPageRoutingModule;
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


    var _phone_number_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./phone-number.page */
    "./src/app/pages/popups/phone-number/phone-number.page.ts");

    var routes = [{
      path: '',
      component: _phone_number_page__WEBPACK_IMPORTED_MODULE_3__["PhoneNumberPage"]
    }];

    var PhoneNumberPageRoutingModule = function PhoneNumberPageRoutingModule() {
      _classCallCheck(this, PhoneNumberPageRoutingModule);
    };

    PhoneNumberPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PhoneNumberPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/popups/phone-number/phone-number.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/popups/phone-number/phone-number.module.ts ***!
    \******************************************************************/

  /*! exports provided: PhoneNumberPageModule */

  /***/
  function srcAppPagesPopupsPhoneNumberPhoneNumberModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneNumberPageModule", function () {
      return PhoneNumberPageModule;
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


    var _phone_number_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./phone-number-routing.module */
    "./src/app/pages/popups/phone-number/phone-number-routing.module.ts");
    /* harmony import */


    var _phone_number_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./phone-number.page */
    "./src/app/pages/popups/phone-number/phone-number.page.ts");

    var PhoneNumberPageModule = function PhoneNumberPageModule() {
      _classCallCheck(this, PhoneNumberPageModule);
    };

    PhoneNumberPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _phone_number_routing_module__WEBPACK_IMPORTED_MODULE_5__["PhoneNumberPageRoutingModule"]],
      declarations: [_phone_number_page__WEBPACK_IMPORTED_MODULE_6__["PhoneNumberPage"]]
    })], PhoneNumberPageModule);
    /***/
  },

  /***/
  "./src/app/pages/popups/phone-number/phone-number.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/popups/phone-number/phone-number.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPopupsPhoneNumberPhoneNumberPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px;\n}\n\nimg {\n  max-width: 50px;\n}\n\nion-title {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  text-transform: uppercase;\n}\n\nion-menu-button {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  --background: #f4f0ec;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n.wrapper {\n  margin: 20px;\n}\n\n.wrapper .title {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  color: #000;\n  border-bottom: 1px solid #000;\n  padding-bottom: 15px;\n  font-style: italic;\n  margin-top: 20px;\n}\n\n.wrapper .form-box {\n  margin-top: 40px;\n}\n\n.wrapper .form-box .text {\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 13px;\n  margin-bottom: 5px;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n}\n\n.wrapper .area-number {\n  border: 1px solid #393939;\n  width: 100%;\n  background: white;\n  box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.3);\n}\n\n.wrapper .save-number {\n  width: 100%;\n  background: #393939;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-transform: uppercase;\n  margin-top: 10px;\n  margin-bottom: 40px;\n}\n\n.wrapper .icon {\n  text-align: center;\n}\n\n.wrapper .icon img {\n  margin: 20px 0;\n  max-width: 60%;\n}\n\n.wrapper .icon .text {\n  font-size: 18px;\n  margin-bottom: 5px;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  border-bottom: 1px solid #000;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvcG9wdXBzL3Bob25lLW51bWJlci9waG9uZS1udW1iZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb3B1cHMvcGhvbmUtbnVtYmVyL3Bob25lLW51bWJlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBREFBO0VBQ0ksNkNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNHSjs7QUREQTtFQUNJLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtBQ0tKOztBREhJO0VBQ0ksNkNBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNLUjs7QURISTtFQUNJLGdCQUFBO0FDS1I7O0FESFE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7QUNLWjs7QURGSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0NBQUE7QUNJUjs7QURGSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNJUjs7QURGSTtFQUNJLGtCQUFBO0FDSVI7O0FERlE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQ0laOztBREZRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0FDSVoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3B1cHMvcGhvbmUtbnVtYmVyL3Bob25lLW51bWJlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5pbWcge1xuICAgIG1heC13aWR0aDogNTBweDtcbn1cbmlvbi10aXRsZSB7XG4gICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xuICAgIC0tY29sb3I6ICMwMDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmlvbi1tZW51LWJ1dHRvbiB7XG4gICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xuICAgIC0tY29sb3I6ICMwMDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjRmMGVjO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ud3JhcHBlciB7XG4gICAgbWFyZ2luOiAyMHB4O1xuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuICAgIC5mb3JtLWJveCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpOyBcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYXJlYS1udW1iZXIge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzkzOTM5O1xuICAgICAgICB3aWR0aDogMTAwJTsgICAgICAgIFxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogNnB4IDZweCAxOHB4IDBweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgfVxuICAgIC5zYXZlLW51bWJlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG4gICAgLmljb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAlO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTsgXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIi5oZWFkZXItYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiA1MHB4O1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC0tY29sb3I6ICMwMDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLS1jb2xvcjogIzAwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmMGVjO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuLndyYXBwZXIgLnRpdGxlIHtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ud3JhcHBlciAuZm9ybS1ib3gge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLndyYXBwZXIgLmZvcm0tYm94IC50ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG4ud3JhcHBlciAuYXJlYS1udW1iZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzkzOTM5O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDZweCA2cHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLndyYXBwZXIgLnNhdmUtbnVtYmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLndyYXBwZXIgLmljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud3JhcHBlciAuaWNvbiBpbWcge1xuICBtYXJnaW46IDIwcHggMDtcbiAgbWF4LXdpZHRoOiA2MCU7XG59XG4ud3JhcHBlciAuaWNvbiAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/popups/phone-number/phone-number.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/popups/phone-number/phone-number.page.ts ***!
    \****************************************************************/

  /*! exports provided: PhoneNumberPage */

  /***/
  function srcAppPagesPopupsPhoneNumberPhoneNumberPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneNumberPage", function () {
      return PhoneNumberPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var PhoneNumberPage = /*#__PURE__*/function () {
      function PhoneNumberPage(storage, modalControler) {
        var _this6 = this;

        _classCallCheck(this, PhoneNumberPage);

        this.storage = storage;
        this.modalControler = modalControler;
        this.storage.get("phoneNumber").then(function (val) {
          if (val != null) {
            _this6.phoneNumber = val;
          }
        });
      }

      _createClass(PhoneNumberPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "saveNumber",
        value: function saveNumber() {
          this.storage.set("phoneNumber", this.phoneNumber);
          this.modalControler.dismiss();
        }
      }]);

      return PhoneNumberPage;
    }();

    PhoneNumberPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    PhoneNumberPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-phone-number",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./phone-number.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popups/phone-number/phone-number.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./phone-number.page.scss */
      "./src/app/pages/popups/phone-number/phone-number.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], PhoneNumberPage);
    /***/
  },

  /***/
  "./src/app/pages/popups/street-picker/street-picker-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/popups/street-picker/street-picker-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: StreetPickerPageRoutingModule */

  /***/
  function srcAppPagesPopupsStreetPickerStreetPickerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StreetPickerPageRoutingModule", function () {
      return StreetPickerPageRoutingModule;
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


    var _street_picker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./street-picker.page */
    "./src/app/pages/popups/street-picker/street-picker.page.ts");

    var routes = [{
      path: '',
      component: _street_picker_page__WEBPACK_IMPORTED_MODULE_3__["StreetPickerPage"]
    }];

    var StreetPickerPageRoutingModule = function StreetPickerPageRoutingModule() {
      _classCallCheck(this, StreetPickerPageRoutingModule);
    };

    StreetPickerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StreetPickerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/popups/street-picker/street-picker.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/popups/street-picker/street-picker.module.ts ***!
    \********************************************************************/

  /*! exports provided: StreetPickerPageModule */

  /***/
  function srcAppPagesPopupsStreetPickerStreetPickerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StreetPickerPageModule", function () {
      return StreetPickerPageModule;
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


    var _street_picker_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./street-picker-routing.module */
    "./src/app/pages/popups/street-picker/street-picker-routing.module.ts");
    /* harmony import */


    var _street_picker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./street-picker.page */
    "./src/app/pages/popups/street-picker/street-picker.page.ts");

    var StreetPickerPageModule = /*#__PURE__*/function () {
      function StreetPickerPageModule(modalController) {
        _classCallCheck(this, StreetPickerPageModule);

        this.modalController = modalController;
      }

      _createClass(StreetPickerPageModule, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StreetPickerPageModule;
    }();

    StreetPickerPageModule.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    StreetPickerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _street_picker_routing_module__WEBPACK_IMPORTED_MODULE_5__["StreetPickerPageRoutingModule"]],
      declarations: [_street_picker_page__WEBPACK_IMPORTED_MODULE_6__["StreetPickerPage"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], StreetPickerPageModule);
    /***/
  },

  /***/
  "./src/app/pages/popups/street-picker/street-picker.page.scss":
  /*!********************************************************************!*\
    !*** ./src/app/pages/popups/street-picker/street-picker.page.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPopupsStreetPickerStreetPickerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".add-locations {\n  margin: 45px 15px;\n}\n.add-locations ion-textarea {\n  --background: #fff;\n  width: 100%;\n  padding: 0 10px;\n  height: 40px;\n  box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.3);\n  --border-radius: 0 !important;\n  color: #000;\n  font-size: 12px;\n  text-align: center;\n  height: 45px;\n  padding-top: 5px;\n  margin-bottom: 15px;\n  border: 1px solid #000;\n}\n.add-locations .save-locations {\n  background: #393939;\n  width: 100%;\n  padding: 0 10px;\n  height: 40px;\n  box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.3);\n  --border-radius: 0 !important;\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n  height: 45px;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n}\n.add-locations .text {\n  font-weight: bold;\n  text-transform: uppercase;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  margin-bottom: 10px;\n  font-size: 13px;\n}\n.box {\n  text-align: center;\n}\n.box .text-moto {\n  font-size: 18px;\n  margin-bottom: 5px;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  border-bottom: 1px solid #000;\n  padding-bottom: 15px;\n  text-transform: initial;\n}\n.box .about-img {\n  max-width: 80%;\n}\n.text-moto {\n  border-bottom: 1px solid;\n  padding-bottom: 15px;\n  line-height: 26px;\n  font-weight: bold;\n  font-style: italic;\n  font-size: 18px;\n  text-transform: uppercase;\n  padding: 0 30px 15px 30px;\n  text-align: center;\n  margin-top: 30px;\n}\nion-icon {\n  float: left;\n  margin-left: 15px;\n  margin-top: 0px;\n  font-size: 30px;\n}\nion-title {\n  margin-top: 3px;\n}\n.header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px;\n}\n.header-box ion-title {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  text-transform: uppercase;\n}\n.header-box ion-menu-button {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  --background: #f4f0ec;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.header-box img {\n  max-width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvcG9wdXBzL3N0cmVldC1waWNrZXIvc3RyZWV0LXBpY2tlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BvcHVwcy9zdHJlZXQtcGlja2VyL3N0cmVldC1waWNrZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDUjtBRENJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDUjtBRENJO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ1I7QURHQTtFQUNJLGtCQUFBO0FDQUo7QURFSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FDQVI7QURHSTtFQUNJLGNBQUE7QUNEUjtBRE1BO0VBQ0ksd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0hKO0FETUU7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0hOO0FES0U7RUFDSSxlQUFBO0FDRk47QURLRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0FDRko7QURJSTtFQUNJLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDRlI7QURJSTtFQUNJLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZSO0FESUk7RUFDSSxlQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3B1cHMvc3RyZWV0LXBpY2tlci9zdHJlZXQtcGlja2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtbG9jYXRpb25zIHtcbiAgICBtYXJnaW46IDQ1cHggMTVweDtcblxuICAgIGlvbi10ZXh0YXJlYSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjsgXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7IFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggMThweCAwcHggcmdiYSgwLDAsMCwwLjMpOyAgICBcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjMDAwOyAgICAgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgfVxuICAgIC5zYXZlLWxvY2F0aW9ucyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMzOTM5Mzk7IFxuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4OyBcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3gtc2hhZG93OiA2cHggNnB4IDE4cHggMHB4IHJnYmEoMCwwLDAsMC4zKTsgICAgXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogI2ZmZjsgICAgICAgIFxuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG4gICAgLnRleHQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuXG59XG4uYm94IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgLnRleHQtbW90byB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7IFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICAgIH1cbiAgICBcbiAgICAuYWJvdXQtaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgfVxufVxuXG5cbi50ZXh0LW1vdG8ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogMCAzMHB4IDE1cHggMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuXG4gIGlvbi1pY29uIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgaW9uLXRpdGxle1xuICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICB9XG5cbiAgLmhlYWRlci1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xuICAgICAgICAtLWNvbG9yOiAjMDAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgICBpb24tbWVudS1idXR0b24ge1xuICAgICAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XG4gICAgICAgIC0tY29sb3I6ICMwMDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2Y0ZjBlYztcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgfVxufSIsIi5hZGQtbG9jYXRpb25zIHtcbiAgbWFyZ2luOiA0NXB4IDE1cHg7XG59XG4uYWRkLWxvY2F0aW9ucyBpb24tdGV4dGFyZWEge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIC0tYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNDVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbn1cbi5hZGQtbG9jYXRpb25zIC5zYXZlLWxvY2F0aW9ucyB7XG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIC0tYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uYWRkLWxvY2F0aW9ucyAudGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmJveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib3ggLnRleHQtbW90byB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG59XG4uYm94IC5hYm91dC1pbWcge1xuICBtYXgtd2lkdGg6IDgwJTtcbn1cblxuLnRleHQtbW90byB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDAgMzBweCAxNXB4IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLWljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5oZWFkZXItYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5oZWFkZXItYm94IGlvbi10aXRsZSB7XG4gIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLS1jb2xvcjogIzAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5oZWFkZXItYm94IGlvbi1tZW51LWJ1dHRvbiB7XG4gIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLS1jb2xvcjogIzAwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmMGVjO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaGVhZGVyLWJveCBpbWcge1xuICBtYXgtd2lkdGg6IDUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/popups/street-picker/street-picker.page.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/popups/street-picker/street-picker.page.ts ***!
    \******************************************************************/

  /*! exports provided: StreetPickerPage */

  /***/
  function srcAppPagesPopupsStreetPickerStreetPickerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StreetPickerPage", function () {
      return StreetPickerPage;
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

    var StreetPickerPage = /*#__PURE__*/function () {
      function StreetPickerPage(navParams, modalControler) {
        _classCallCheck(this, StreetPickerPage);

        this.navParams = navParams;
        this.modalControler = modalControler;
      }

      _createClass(StreetPickerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalControler.dismiss();
        }
      }, {
        key: "passAddress",
        value: function passAddress() {
          var data = {
            picker: this.navParams.get("picker"),
            address: this.address
          };
          this.modalControler.dismiss(data);
        }
      }]);

      return StreetPickerPage;
    }();

    StreetPickerPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    StreetPickerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-street-picker',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./street-picker.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popups/street-picker/street-picker.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./street-picker.page.scss */
      "./src/app/pages/popups/street-picker/street-picker.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], StreetPickerPage);
    /***/
  },

  /***/
  "./src/app/services/location.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/location.service.ts ***!
    \**********************************************/

  /*! exports provided: LocationService */

  /***/
  function srcAppServicesLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationService", function () {
      return LocationService;
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


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");

    var LocationService = /*#__PURE__*/function () {
      function LocationService(geolocation, nativeGeocoder) {
        _classCallCheck(this, LocationService);

        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.optionsGeocode = {
          useLocale: true,
          maxResults: 5
        };
      }

      _createClass(LocationService, [{
        key: "getReverseGeocode",
        value: function getReverseGeocode(latitude, longitude) {
          return this.nativeGeocoder.reverseGeocode(latitude, longitude, this.optionsGeocode).catch(function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getForwardGeocode",
        value: function getForwardGeocode(address) {
          return this.nativeGeocoder.forwardGeocode(address, this.optionsGeocode).catch(function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getForwardGeocode2",
        value: function getForwardGeocode2(address) {
          var _this7 = this;

          return new Promise(function (resolve, reject) {
            _this7.options = {
              enableHighAccuracy: true,
              timeout: 10000
            };
            _this7.nativeGeocoder.forwardGeocode(address, _this7.optionsGeocode).then(function (result) {
              resolve(result[0]);
            }), function (err) {
              console.log("error : " + err.message);
              reject(err.message);
            };
          });
        }
      }, {
        key: "getReverseGeocode2",
        value: function getReverseGeocode2(latitude, longitude) {
          var _this8 = this;

          return new Promise(function (resolve, reject) {
            _this8.options = {
              enableHighAccuracy: true,
              timeout: 10000
            };
            _this8.nativeGeocoder.reverseGeocode(latitude, longitude, _this8.optionsGeocode).then(function (result) {
              resolve(result[0]);
            }), function (err) {
              console.log("error : " + err.message);
              reject(err.message);
            };
          });
        } //   this.locationService.getReverseGeocode(45.5,19).then((result: NativeGeocoderResult[]) => 
        //   { 
        //     result[0]
        //   });
        //   this.locationService.getForwardGeocode("Berlin, Germany").then((result: NativeGeocoderResult[]) =>
        //   {
        //     alert(JSON.stringify(result[0])) 
        //   }
        //  )

      }, {
        key: "getUserPosition",
        value: function getUserPosition() {
          var _this9 = this;

          return new Promise(function (resolve, reject) {
            _this9.options = {
              enableHighAccuracy: true,
              timeout: 10000
            };

            _this9.geolocation.getCurrentPosition(_this9.options).then(function (pos) {
              _this9.currentPos = pos;
              console.log(pos);
              var location = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
                time: new Date()
              };
              resolve(pos);
            }, function (err) {
              console.log("error : " + err.message);
              reject(err.message);
            });
          });
        }
      }, {
        key: "getPosition",
        value: function getPosition() {
          return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (resp) {
              resolve({
                lng: resp.coords.longitude,
                lat: resp.coords.latitude
              });
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getDistanceFromLatLonInKm",
        value: function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2, callback) {
          var service = new google.maps.DistanceMatrixService();
          var origin = new google.maps.LatLng(lat1, lon1);
          var destination = new google.maps.LatLng(lat2, lon2);
          service.getDistanceMatrix({
            origins: [origin],
            destinations: [destination],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
          }, callback);
        }
      }, {
        key: "deg2rad",
        value: function deg2rad(deg) {
          return deg * (Math.PI / 180);
        }
      }]);

      return LocationService;
    }();

    LocationService.ctorParameters = function () {
      return [{
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"]
      }];
    };

    LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"]])], LocationService);
    /***/
  },

  /***/
  "./src/app/services/socket.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/socket.service.ts ***!
    \********************************************/

  /*! exports provided: SocketService */

  /***/
  function srcAppServicesSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @stomp/ng2-stompjs */
    "./node_modules/@stomp/ng2-stompjs/fesm2015/stomp-ng2-stompjs.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var WEBSOCKET_URL = "ws://taxi-mura.herokuapp.com/socket"; // const WEBSOCKET_URL = "ws://localhost:8080/socket";

    var EXAMPLE_URL = "/topic/server-broadcaster";

    var SocketService = /*#__PURE__*/function () {
      function SocketService(storage) {
        _classCallCheck(this, SocketService);

        this.storage = storage;
        this._this = this;
      }

      _createClass(SocketService, [{
        key: "initializeWebSocketConnection",
        value: function initializeWebSocketConnection() {
          var _this10 = this;

          var userType = "customer";
          this.storage.get("username").then(function (val) {
            if (val != null) {
              userType = "driver";
            }

            var stompConfig = {
              url: WEBSOCKET_URL + "?123123",
              headers: {
                //TODO add
                username: val,
                type: userType,
                id: "123"
              },
              heartbeat_in: 0,
              heartbeat_out: 20000,
              reconnect_delay: 5000,
              debug: true
            }; // Create Stomp Service

            _this10.stompService = new _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_1__["StompService"](stompConfig); // Connect to a Stream

            _this10.messages = _this10.stompService.subscribe("/user" + EXAMPLE_URL);
          });
        }
      }, {
        key: "stream",
        value: function stream() {
          return this.messages;
        }
      }, {
        key: "send",
        value: function send(url, message) {
          return this.stompService.publish(url, JSON.stringify(message));
        }
      }, {
        key: "state",
        value: function state() {
          return this.stompService.state;
        }
      }]);

      return SocketService;
    }();

    SocketService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])], SocketService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/filip.vukovic/Development/checkfit-mobile/mobile_app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map