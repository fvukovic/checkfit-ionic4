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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"header-box\">\n      <ion-title>Novi zahtjev za vožnju!</ion-title>\n      <img src=\"../../../assets/img/taxiLogo.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=container>\n    <div *ngIf=\"!isDriveAccepted\" >\n\n      <div class=\"wrapper-request\">  \n        <ion-icon name=\"checkbox\"></ion-icon>\n        <p>Vaš zahtjev je uspješno poslan!</p>\n      </div>    \n\n      <div class=\"seacrhing-driver\">\n           <p>Tražim slobodnog vozača...</p>\n          <div *ngIf=\"seconds!=0\" class=\"seconds\">{{seconds}}</div>\n          <!-- <ion-spinner style=\"width:150px\" color=\"tertiary\" class=\"ion-color ion-color-tertiary ios spinner-lines hydrated\"\n        role=\"progressbar\"></ion-spinner> \n        <ion-spinner name=\"bubbles\"></ion-spinner> -->\n        <p class=\"details\">Detalji će uskoro biti vidljivi na ekranu:</p>\n      </div>\n\n      <div class=\"logo\">\n        <img src=\"../../../assets/img/taxiLogo.png\" class=\"menu-img\">      \n        <p class=\"rich-text\">Najmodernija i najkvalitetnija usluga prijevoza u gradu!</p>\n    </div>\n\n    </div>\n\n    <div *ngIf=\"isDriveAccepted\" >\n      <div class=\"accepted-ride\">\n        <img src=\"../../../assets/img/accepted-ride.png\" class=\"menu-img\">\n          <h2>Zahtjev je prihvaćen!</h2>\n          <p class=\"driver\">Vozač {{message.driverUser.login}} će Vas uskoro kontaktirati...</p>\n          <div class=\"distance\">\n          <span>Vaše vozilo je udaljeno:</span> \n          <p class=\"km\">{{kms}}</p>\n        </div>\n        <div class=\"distance\">\n          <span>Vozilo stiže za:</span> \n          <p class=\"km\">{{message.time}} min</p>\n        </div> \n        </div>\n      </div>\n\n  </div>\n\n</ion-content>";
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


    __webpack_exports__["default"] = ".container {\n  margin: 0px 20px 20px 20px;\n  padding: 20px; }\n  .container .wrapper-request {\n    border-bottom: 1px solid #000;\n    text-align: center;\n    font-size: 16px;\n    font-weight: bold;\n    margin-bottom: 0px; }\n  .container .wrapper-request ion-icon {\n      font-size: 42px;\n      color: #46e169;\n      float: left; }\n  .container .wrapper-request p {\n      padding-top: 13px;\n      padding-left: 20px;\n      margin: 20px 0;\n      text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4); }\n  .container .seacrhing-driver {\n    text-align: center;\n    text-transform: uppercase;\n    padding: 20px 0;\n    margin: 20px 0 0 0; }\n  .container .seacrhing-driver p {\n      padding: 0;\n      margin: 0 0 20px 0;\n      font-size: 26px;\n      font-weight: bold;\n      text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4); }\n  .container .seacrhing-driver .details {\n      font-size: 18px;\n      text-transform: initial;\n      margin: 30px 0 0px 0;\n      background: #46e169;\n      color: white;\n      border-radius: 5px;\n      padding: 20px;\n      font-weight: bold; }\n  .container .seacrhing-driver ion-spinner {\n      --color: #46e169;\n      font-size: 80px;\n      -webkit-transform: scale(2);\n              transform: scale(2); }\n  .container .logo {\n    text-align: center;\n    border-bottom: 1px solid #000;\n    margin-top: 30px; }\n  .container .logo .menu-img {\n      max-width: 40%; }\n  .container .logo p {\n      font-size: 12px;\n      font-weight: bold;\n      text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4); }\n  .container .accepted-ride {\n    text-align: center;\n    margin-bottom: 0px;\n    font-weight: bold; }\n  .container .accepted-ride h2 {\n      text-transform: uppercase;\n      border-bottom: 1px solid #000;\n      padding-bottom: 15px; }\n  .container .accepted-ride img {\n      max-width: 55%; }\n  .container .accepted-ride .distance {\n      color: #46e169;\n      background: #393939;\n      padding: 20px;\n      border-radius: 5px;\n      margin-bottom: 10px; }\n  .container .accepted-ride span {\n      text-transform: uppercase; }\n  .container .accepted-ride p {\n      margin: 0;\n      padding: 0; }\n  .container .accepted-ride .driver {\n      margin: 20px 0;\n      font-style: italic; }\n  .container .accepted-ride .km {\n      font-size: 30px; }\n  .header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px; }\n  img {\n  max-width: 50px; }\n  ion-title {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  text-transform: uppercase;\n  font-size: 16px; }\n  .seconds {\n  font-size: 24px;\n  font-weight: bold;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvc2VhcmNoLXJpZGUvc2VhcmNoLXJpZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQTBCO0VBQzFCLGFBQWEsRUFBQTtFQUZqQjtJQUtRLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtFQVQxQjtNQVlZLGVBQWU7TUFDZixjQUFjO01BQ2QsV0FBVyxFQUFBO0VBZHZCO01BaUJZLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsY0FBYztNQUNkLDZDQUEwQyxFQUFBO0VBcEJ0RDtJQXdCUSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0IsRUFBQTtFQTNCMUI7TUE4QlksVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLDZDQUEwQyxFQUFBO0VBbEN0RDtNQXFDWSxlQUFlO01BQ2YsdUJBQXVCO01BQ3ZCLG9CQUFvQjtNQUNwQixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsaUJBQWlCLEVBQUE7RUE1QzdCO01BZ0RZLGdCQUFRO01BQ1IsZUFBZTtNQUNmLDJCQUFtQjtjQUFuQixtQkFBbUIsRUFBQTtFQWxEL0I7SUF1RFEsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixnQkFBZ0IsRUFBQTtFQXpEeEI7TUE0RFksY0FBYyxFQUFBO0VBNUQxQjtNQWdFWSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLDZDQUEwQyxFQUFBO0VBbEV0RDtJQXVFUSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBO0VBekV6QjtNQTRFWSx5QkFBeUI7TUFDekIsNkJBQTZCO01BQzdCLG9CQUFvQixFQUFBO0VBOUVoQztNQWlGWSxjQUFjLEVBQUE7RUFqRjFCO01BcUZZLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLGtCQUFrQjtNQUNsQixtQkFBbUIsRUFBQTtFQXpGL0I7TUE0RlkseUJBQXlCLEVBQUE7RUE1RnJDO01BK0ZZLFNBQVM7TUFDVCxVQUFVLEVBQUE7RUFoR3RCO01BbUdZLGNBQWM7TUFDZCxrQkFBa0IsRUFBQTtFQXBHOUI7TUF1R1ksZUFBZSxFQUFBO0VBSzNCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7RUFFakI7RUFDSSxlQUFlLEVBQUE7RUFFbkI7RUFDSSw2Q0FBMEM7RUFDMUMsYUFBUTtFQUNSLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7RUFFbkI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDZDQUEwQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VhcmNoLXJpZGUvc2VhcmNoLXJpZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIC53cmFwcGVyLXJlcXVlc3Qge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICAgICAgY29sb3I6ICM0NmUxNjk7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxM3B4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNlYWNyaGluZy1kcml2ZXIgeyAgICAgICAgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgICAgICAgIFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcbiAgICAgICAgfVxuICAgICAgICAuZGV0YWlscyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwIDBweCAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ2ZTE2OTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1zcGlubmVyIHtcbiAgICAgICAgICAgIC0tY29sb3I6ICM0NmUxNjk7XG4gICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxvZ28ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwOyAgICBcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDsgICAgXG5cbiAgICAgICAgLm1lbnUtaW1nIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hY2NlcHRlZC1yaWRlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDU1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXN0YW5jZSB7XG4gICAgICAgICAgICBjb2xvcjogIzQ2ZTE2OTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzOTM5Mzk7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5kcml2ZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7O1xuICAgICAgICB9XG4gICAgICAgIC5rbSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG4uaGVhZGVyLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5pbWcge1xuICAgIG1heC13aWR0aDogNTBweDtcbn1cbmlvbi10aXRsZSB7XG4gICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xuICAgIC0tY29sb3I6ICMwMDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4uc2Vjb25kcyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcbn0iXX0= */";
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
      function SearchRidePage(socketService, route, events, storage, locationService, router, alertController) {
        var _this2 = this;

        _classCallCheck(this, SearchRidePage);

        this.socketService = socketService;
        this.route = route;
        this.events = events;
        this.storage = storage;
        this.locationService = locationService;
        this.router = router;
        this.alertController = alertController;
        this.isDriveAccepted = false;
        this.seconds = 20;
        events.subscribe("driveAccepted", function (message) {
          _this2.isDriveAccepted = true;
          clearInterval(_this2.myVar);
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

            var myVar = setInterval(function () {
              _this3.seconds -= 1;

              if (_this3.seconds == 0) {
                clearInterval(myVar);

                _this3.presentAlert({
                  cssClass: "myClass",
                  header: "Obavijest",
                  message: '<div style="color:red" class="myClass"><p>Vaša vožnja je zaprimljena, prvi slobodni vozač će Vas uskoro kontaktirati.</p> </div>',
                  buttons: ["U redu"]
                });
              }
            }, 1000);
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(options) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create(options);

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
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], SearchRidePage);
    /***/
  }
}]);
//# sourceMappingURL=15-es5.js.map