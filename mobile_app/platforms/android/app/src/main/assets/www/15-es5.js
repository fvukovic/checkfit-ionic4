function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15], {
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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <div class=\"header-box\">\r\n      <ion-title>Novi zahtjev za vožnju!</ion-title>\r\n      <img src=\"../../../assets/img/taxiLogo.png\">\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=container>\r\n    <div *ngIf=\"!isDriveAccepted\" >\r\n\r\n      <div class=\"wrapper-request\">  \r\n        <ion-icon name=\"checkbox\"></ion-icon>\r\n        <p>Vaš zahtjev je uspješno poslan!</p>\r\n      </div>    \r\n\r\n      <div class=\"seacrhing-driver\">\r\n           <p>Tražim slobodnog vozača...</p>\r\n          <!-- <ion-spinner style=\"width:150px\" color=\"tertiary\" class=\"ion-color ion-color-tertiary ios spinner-lines hydrated\"\r\n        role=\"progressbar\"></ion-spinner>  -->\r\n        <ion-spinner name=\"bubbles\"></ion-spinner>\r\n        <p class=\"details\">Detalji će uskoro biti vidljivi na ekranu:</p>\r\n      </div>\r\n\r\n      <div class=\"logo\">\r\n        <img src=\"../../../assets/img/taxiLogo.png\" class=\"menu-img\">      \r\n        <p class=\"rich-text\">Najmodernija i najkvalitetnija usluga prijevoza u gradu!</p>\r\n    </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"isDriveAccepted\" >\r\n      <div class=\"accepted-ride\">\r\n        <img src=\"../../../assets/img/accepted-ride.png\" class=\"menu-img\">\r\n          <h2>Zahtjev je prihvaćen!</h2>\r\n          <p class=\"driver\">Vozač {{message.driverUser.login}} će Vas uskoro kontaktirati...</p>\r\n          <div class=\"distance\">\r\n          <span>Vaše vozilo je udaljeno:</span> \r\n          <p class=\"km\">{{kms}}</p>\r\n        </div>\r\n        <div class=\"distance\">\r\n          <span>Vozilo stiže za:</span> \r\n          <p class=\"km\">{{message.time}} min</p>\r\n        </div> \r\n        </div>\r\n      </div>\r\n\r\n  </div>\r\n\r\n</ion-content>";
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


    __webpack_exports__["default"] = ".container {\n  margin: 0px 20px 20px 20px;\n  padding: 20px;\n}\n.container .wrapper-request {\n  border-bottom: 1px solid #000;\n  text-align: center;\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n.container .wrapper-request ion-icon {\n  font-size: 42px;\n  color: #46e169;\n  float: left;\n}\n.container .wrapper-request p {\n  padding-top: 13px;\n  padding-left: 20px;\n  margin: 20px 0;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n}\n.container .seacrhing-driver {\n  text-align: center;\n  text-transform: uppercase;\n  padding: 20px 0;\n  margin: 20px 0 0 0;\n}\n.container .seacrhing-driver p {\n  padding: 0;\n  margin: 0 0 20px 0;\n  font-size: 26px;\n  font-weight: bold;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n}\n.container .seacrhing-driver .details {\n  font-size: 18px;\n  text-transform: initial;\n  margin: 30px 0 0px 0;\n  background: #46e169;\n  color: white;\n  border-radius: 5px;\n  padding: 20px;\n  font-weight: bold;\n}\n.container .seacrhing-driver ion-spinner {\n  --color: #46e169;\n  font-size: 80px;\n  -webkit-transform: scale(2);\n          transform: scale(2);\n}\n.container .logo {\n  text-align: center;\n  border-bottom: 1px solid #000;\n  margin-top: 30px;\n}\n.container .logo .menu-img {\n  max-width: 40%;\n}\n.container .logo p {\n  font-size: 12px;\n  font-weight: bold;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n}\n.container .accepted-ride {\n  text-align: center;\n  margin-bottom: 0px;\n  font-weight: bold;\n}\n.container .accepted-ride h2 {\n  text-transform: uppercase;\n  border-bottom: 1px solid #000;\n  padding-bottom: 15px;\n}\n.container .accepted-ride img {\n  max-width: 55%;\n}\n.container .accepted-ride .distance {\n  color: #46e169;\n  background: #393939;\n  padding: 20px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\n.container .accepted-ride span {\n  text-transform: uppercase;\n}\n.container .accepted-ride p {\n  margin: 0;\n  padding: 0;\n}\n.container .accepted-ride .driver {\n  margin: 20px 0;\n  font-style: italic;\n}\n.container .accepted-ride .km {\n  font-size: 30px;\n}\n.header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px;\n}\nimg {\n  max-width: 50px;\n}\nion-title {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  text-transform: uppercase;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoLXJpZGUvQzpcXG11cmFBcHBcXGNoZWNrZml0LWlvbmljNFxcbW9iaWxlX2FwcC9zcmNcXGFwcFxccGFnZXNcXHNlYXJjaC1yaWRlXFxzZWFyY2gtcmlkZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlYXJjaC1yaWRlL3NlYXJjaC1yaWRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0k7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDUjtBRENRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ1o7QURDUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkNBQUE7QUNDWjtBREVJO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FSO0FERVE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtBQ0FaO0FERVE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDQVo7QURHUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUNEWjtBREtJO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDSFI7QURLUTtFQUNJLGNBQUE7QUNIWjtBRE1RO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7QUNKWjtBRFFJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDTlI7QURRUTtFQUNJLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQ05aO0FEUVE7RUFDSSxjQUFBO0FDTlo7QURTUTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDUFo7QURTUTtFQUNJLHlCQUFBO0FDUFo7QURTUTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDUFo7QURTUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ1BaO0FEU1E7RUFDSSxlQUFBO0FDUFo7QURZQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0FDVEo7QURXQTtFQUNJLGVBQUE7QUNSSjtBRFVBO0VBQ0ksNkNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWFyY2gtcmlkZS9zZWFyY2gtcmlkZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAud3JhcHBlci1yZXF1ZXN0IHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDZlMTY5O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlYWNyaGluZy1kcml2ZXIgeyAgICAgICAgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICAgICAgICBcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDAgMHB4IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0NmUxNjk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1zcGlubmVyIHtcclxuICAgICAgICAgICAgLS1jb2xvcjogIzQ2ZTE2OTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwOyAgICBcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4OyAgICBcclxuXHJcbiAgICAgICAgLm1lbnUtaW1nIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWNjZXB0ZWQtcmlkZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTUlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRpc3RhbmNlIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0NmUxNjk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzOTM5Mzk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kcml2ZXIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljOztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmttIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5oZWFkZXItYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICAtLWNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufSIsIi5jb250YWluZXIge1xuICBtYXJnaW46IDBweCAyMHB4IDIwcHggMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5jb250YWluZXIgLndyYXBwZXItcmVxdWVzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5jb250YWluZXIgLndyYXBwZXItcmVxdWVzdCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgY29sb3I6ICM0NmUxNjk7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmNvbnRhaW5lciAud3JhcHBlci1yZXF1ZXN0IHAge1xuICBwYWRkaW5nLXRvcDogMTNweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW46IDIwcHggMDtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLmNvbnRhaW5lciAuc2VhY3JoaW5nLWRyaXZlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtYXJnaW46IDIwcHggMCAwIDA7XG59XG4uY29udGFpbmVyIC5zZWFjcmhpbmctZHJpdmVyIHAge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbi5jb250YWluZXIgLnNlYWNyaGluZy1kcml2ZXIgLmRldGFpbHMge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICBtYXJnaW46IDMwcHggMCAwcHggMDtcbiAgYmFja2dyb3VuZDogIzQ2ZTE2OTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuc2VhY3JoaW5nLWRyaXZlciBpb24tc3Bpbm5lciB7XG4gIC0tY29sb3I6ICM0NmUxNjk7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbn1cbi5jb250YWluZXIgLmxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmNvbnRhaW5lciAubG9nbyAubWVudS1pbWcge1xuICBtYXgtd2lkdGg6IDQwJTtcbn1cbi5jb250YWluZXIgLmxvZ28gcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbi5jb250YWluZXIgLmFjY2VwdGVkLXJpZGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5hY2NlcHRlZC1yaWRlIGgyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLmNvbnRhaW5lciAuYWNjZXB0ZWQtcmlkZSBpbWcge1xuICBtYXgtd2lkdGg6IDU1JTtcbn1cbi5jb250YWluZXIgLmFjY2VwdGVkLXJpZGUgLmRpc3RhbmNlIHtcbiAgY29sb3I6ICM0NmUxNjk7XG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgLmFjY2VwdGVkLXJpZGUgc3BhbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uY29udGFpbmVyIC5hY2NlcHRlZC1yaWRlIHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uY29udGFpbmVyIC5hY2NlcHRlZC1yaWRlIC5kcml2ZXIge1xuICBtYXJnaW46IDIwcHggMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmNvbnRhaW5lciAuYWNjZXB0ZWQtcmlkZSAua20ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5oZWFkZXItYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiA1MHB4O1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC0tY29sb3I6ICMwMDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */";
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/location.service */
    "./src/app/services/location.service.ts");

    var SearchRidePage = /*#__PURE__*/function () {
      function SearchRidePage(socketService, route, events, storage, locationService) {
        var _this2 = this;

        _classCallCheck(this, SearchRidePage);

        this.socketService = socketService;
        this.route = route;
        this.events = events;
        this.storage = storage;
        this.locationService = locationService;
        this.isDriveAccepted = false;
        events.subscribe("driveAccepted", function (message) {
          _this2.isDriveAccepted = true;
          _this2.message = message;
        });
        events.subscribe("informCustomer", function (message) {
          console.log(message);
          _this2.kms = message;
        });
        events.subscribe("driveIsFinished", function (message) {
          _this2.isDriveAccepted = false;
          _this2.kms = message;
        });
        this.requestDrive();
      }

      _createClass(SearchRidePage, [{
        key: "requestDrive",
        value: function requestDrive() {
          var _this3 = this;

          var firstParam = this.route.snapshot.queryParamMap.get("data");
          var params = JSON.parse(firstParam);

          var _this = this;

          this.storage.get("phoneNumber").then(function (val) {
            _this3.locationService.getDistanceFromLatLonInKm(params.fromLat, params.fromLong, params.toLat, params.toLong, function (response, status) {
              _this.socketService.send("/server-receiver", {
                type: "customer",
                messageType: "REQUEST_INCOMING",
                fromLat: params.fromLat,
                fromLong: params.fromLong,
                toLat: params.toLat,
                toLong: params.toLong,
                persons: params.persons,
                phoneNumber: val,
                km: response.rows[0].elements[0].distance.value / 1000
              });

              setTimeout(function (data) {
                _this.socketService.send("/server-receiver", {
                  type: "customer",
                  messageType: "DRIVE_REQUEST",
                  fromLat: params.fromLat,
                  fromLong: params.fromLong,
                  toLat: params.toLat,
                  toLong: params.toLong,
                  persons: params.persons,
                  phoneNumber: val,
                  km: response.rows[0].elements[0].distance.value / 1000
                });
              }, 4000);
            });
          });
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {}
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
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"]])], SearchRidePage);
    /***/
  }
}]);
//# sourceMappingURL=15-es5.js.map