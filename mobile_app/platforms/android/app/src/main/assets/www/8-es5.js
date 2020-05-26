function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-homepage/driver-homepage.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-homepage/driver-homepage.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDriverHomepageDriverHomepagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>driver-homepage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/driver-homepage/driver-homepage-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/driver-homepage/driver-homepage-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: DriverHomepagePageRoutingModule */

  /***/
  function srcAppPagesDriverHomepageDriverHomepageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriverHomepagePageRoutingModule", function () {
      return DriverHomepagePageRoutingModule;
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


    var _driver_homepage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./driver-homepage.page */
    "./src/app/pages/driver-homepage/driver-homepage.page.ts");

    var routes = [{
      path: '',
      component: _driver_homepage_page__WEBPACK_IMPORTED_MODULE_3__["DriverHomepagePage"]
    }];

    var DriverHomepagePageRoutingModule = function DriverHomepagePageRoutingModule() {
      _classCallCheck(this, DriverHomepagePageRoutingModule);
    };

    DriverHomepagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DriverHomepagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/driver-homepage/driver-homepage.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/driver-homepage/driver-homepage.module.ts ***!
    \*****************************************************************/

  /*! exports provided: DriverHomepagePageModule */

  /***/
  function srcAppPagesDriverHomepageDriverHomepageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriverHomepagePageModule", function () {
      return DriverHomepagePageModule;
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
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _driver_homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./driver-homepage-routing.module */
    "./src/app/pages/driver-homepage/driver-homepage-routing.module.ts");
    /* harmony import */


    var _driver_homepage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./driver-homepage.page */
    "./src/app/pages/driver-homepage/driver-homepage.page.ts");

    var DriverHomepagePageModule = function DriverHomepagePageModule() {
      _classCallCheck(this, DriverHomepagePageModule);
    };

    DriverHomepagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _driver_homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__["DriverHomepagePageRoutingModule"]],
      declarations: [_driver_homepage_page__WEBPACK_IMPORTED_MODULE_6__["DriverHomepagePage"]]
    })], DriverHomepagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/driver-homepage/driver-homepage.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/driver-homepage/driver-homepage.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDriverHomepageDriverHomepagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlci1ob21lcGFnZS9kcml2ZXItaG9tZXBhZ2UucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/driver-homepage/driver-homepage.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/driver-homepage/driver-homepage.page.ts ***!
    \***************************************************************/

  /*! exports provided: DriverHomepagePage */

  /***/
  function srcAppPagesDriverHomepageDriverHomepagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriverHomepagePage", function () {
      return DriverHomepagePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DriverHomepagePage = /*#__PURE__*/function () {
      function DriverHomepagePage() {
        _classCallCheck(this, DriverHomepagePage);
      }

      _createClass(DriverHomepagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DriverHomepagePage;
    }();

    DriverHomepagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-driver-homepage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./driver-homepage.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-homepage/driver-homepage.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./driver-homepage.page.scss */
      "./src/app/pages/driver-homepage/driver-homepage.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DriverHomepagePage);
    /***/
  }
}]);
//# sourceMappingURL=8-es5.js.map