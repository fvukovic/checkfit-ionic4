(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-ride/search-ride.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-ride/search-ride.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"header-box\">\n      <ion-title>Novi zahtjev za vožnju!</ion-title>\n      <img src=\"../../../assets/img/taxiLogo.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=container>\n    <div *ngIf=\"!isDriveAccepted\" >\n\n      <div class=\"wrapper-request\">  \n        <ion-icon name=\"checkbox\"></ion-icon>\n        <p>Vaš zahtjev je uspješno poslan!</p>\n      </div>    \n\n      <div class=\"seacrhing-driver\">\n           <p>Tražim slobodnog vozača...</p>\n          <!-- <ion-spinner style=\"width:150px\" color=\"tertiary\" class=\"ion-color ion-color-tertiary ios spinner-lines hydrated\"\n        role=\"progressbar\"></ion-spinner>  -->\n        <ion-spinner name=\"bubbles\"></ion-spinner>\n        <p class=\"details\">Detalji će uskoro biti vidljivi na ekranu:</p>\n      </div>\n\n      <div class=\"logo\">\n        <img src=\"../../../assets/img/taxiLogo.png\" class=\"menu-img\">      \n        <p class=\"rich-text\">Najmodernija i najkvalitetnija usluga prijevoza u gradu!</p>\n    </div>\n\n    </div>\n\n    <div *ngIf=\"isDriveAccepted\" >\n      <div class=\"accepted-ride\">\n        <img src=\"../../../assets/img/accepted-ride.png\" class=\"menu-img\">\n          <h2>Zahtjev je prihvaćen!</h2>\n          <p class=\"driver\">Vozač {{message.driverUser.login}} će Vas uskoro kontaktirati...</p>\n          <div class=\"distance\">\n          <span>Vaše vozilo je udaljeno:</span> \n          <p class=\"km\">{{kms}}</p>\n        </div>\n        <div class=\"distance\">\n          <span>Vozilo stiže za:</span> \n          <p class=\"km\">{{message.time}} min</p>\n        </div> \n        </div>\n      </div>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/search-ride/search-ride-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/search-ride/search-ride-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SearchRidePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRidePageRoutingModule", function() { return SearchRidePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search_ride_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-ride.page */ "./src/app/pages/search-ride/search-ride.page.ts");




const routes = [
    {
        path: '',
        component: _search_ride_page__WEBPACK_IMPORTED_MODULE_3__["SearchRidePage"]
    }
];
let SearchRidePageRoutingModule = class SearchRidePageRoutingModule {
};
SearchRidePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchRidePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/search-ride/search-ride.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/search-ride/search-ride.module.ts ***!
  \*********************************************************/
/*! exports provided: SearchRidePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRidePageModule", function() { return SearchRidePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_ride_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-ride-routing.module */ "./src/app/pages/search-ride/search-ride-routing.module.ts");
/* harmony import */ var _search_ride_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-ride.page */ "./src/app/pages/search-ride/search-ride.page.ts");







let SearchRidePageModule = class SearchRidePageModule {
};
SearchRidePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_ride_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchRidePageRoutingModule"]
        ],
        declarations: [_search_ride_page__WEBPACK_IMPORTED_MODULE_6__["SearchRidePage"]]
    })
], SearchRidePageModule);



/***/ }),

/***/ "./src/app/pages/search-ride/search-ride.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/search-ride/search-ride.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin: 0px 20px 20px 20px;\n  padding: 20px;\n}\n.container .wrapper-request {\n  border-bottom: 1px solid #000;\n  text-align: center;\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n.container .wrapper-request ion-icon {\n  font-size: 42px;\n  color: #46e169;\n  float: left;\n}\n.container .wrapper-request p {\n  padding-top: 13px;\n  padding-left: 20px;\n  margin: 20px 0;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n}\n.container .seacrhing-driver {\n  text-align: center;\n  text-transform: uppercase;\n  padding: 20px 0;\n  margin: 20px 0 0 0;\n}\n.container .seacrhing-driver p {\n  padding: 0;\n  margin: 0 0 20px 0;\n  font-size: 26px;\n  font-weight: bold;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n}\n.container .seacrhing-driver .details {\n  font-size: 18px;\n  text-transform: initial;\n  margin: 30px 0 0px 0;\n  background: #46e169;\n  color: white;\n  border-radius: 5px;\n  padding: 20px;\n  font-weight: bold;\n}\n.container .seacrhing-driver ion-spinner {\n  --color: #46e169;\n  font-size: 80px;\n  -webkit-transform: scale(2);\n          transform: scale(2);\n}\n.container .logo {\n  text-align: center;\n  border-bottom: 1px solid #000;\n  margin-top: 30px;\n}\n.container .logo .menu-img {\n  max-width: 40%;\n}\n.container .logo p {\n  font-size: 12px;\n  font-weight: bold;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n}\n.container .accepted-ride {\n  text-align: center;\n  margin-bottom: 0px;\n  font-weight: bold;\n}\n.container .accepted-ride h2 {\n  text-transform: uppercase;\n  border-bottom: 1px solid #000;\n  padding-bottom: 15px;\n}\n.container .accepted-ride img {\n  max-width: 55%;\n}\n.container .accepted-ride .distance {\n  color: #46e169;\n  background: #393939;\n  padding: 20px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\n.container .accepted-ride span {\n  text-transform: uppercase;\n}\n.container .accepted-ride p {\n  margin: 0;\n  padding: 0;\n}\n.container .accepted-ride .driver {\n  margin: 20px 0;\n  font-style: italic;\n}\n.container .accepted-ride .km {\n  font-size: 30px;\n}\n.header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px;\n}\nimg {\n  max-width: 50px;\n}\nion-title {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  text-transform: uppercase;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvc2VhcmNoLXJpZGUvc2VhcmNoLXJpZGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWFyY2gtcmlkZS9zZWFyY2gtcmlkZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLGFBQUE7QUNDSjtBRENJO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ1I7QURDUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NaO0FEQ1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDZDQUFBO0FDQ1o7QURFSTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREVRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7QUNBWjtBREVRO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0FaO0FER1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0FDRFo7QURLSTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0hSO0FES1E7RUFDSSxjQUFBO0FDSFo7QURNUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0FDSlo7QURRSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ05SO0FEUVE7RUFDSSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUNOWjtBRFFRO0VBQ0ksY0FBQTtBQ05aO0FEU1E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1BaO0FEU1E7RUFDSSx5QkFBQTtBQ1BaO0FEU1E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ1BaO0FEU1E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNQWjtBRFNRO0VBQ0ksZUFBQTtBQ1BaO0FEWUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsYUFBQTtBQ1RKO0FEV0E7RUFDSSxlQUFBO0FDUko7QURVQTtFQUNJLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VhcmNoLXJpZGUvc2VhcmNoLXJpZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIC53cmFwcGVyLXJlcXVlc3Qge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICAgICAgY29sb3I6ICM0NmUxNjk7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxM3B4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNlYWNyaGluZy1kcml2ZXIgeyAgICAgICAgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgICAgICAgIFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcbiAgICAgICAgfVxuICAgICAgICAuZGV0YWlscyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwIDBweCAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ2ZTE2OTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1zcGlubmVyIHtcbiAgICAgICAgICAgIC0tY29sb3I6ICM0NmUxNjk7XG4gICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxvZ28ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwOyAgICBcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDsgICAgXG5cbiAgICAgICAgLm1lbnUtaW1nIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hY2NlcHRlZC1yaWRlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDU1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXN0YW5jZSB7XG4gICAgICAgICAgICBjb2xvcjogIzQ2ZTE2OTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzOTM5Mzk7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5kcml2ZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7O1xuICAgICAgICB9XG4gICAgICAgIC5rbSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG4uaGVhZGVyLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5pbWcge1xuICAgIG1heC13aWR0aDogNTBweDtcbn1cbmlvbi10aXRsZSB7XG4gICAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLDAsMCwwLjQpO1xuICAgIC0tY29sb3I6ICMwMDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG59IiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMHB4IDIwcHggMjBweCAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmNvbnRhaW5lciAud3JhcHBlci1yZXF1ZXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmNvbnRhaW5lciAud3JhcHBlci1yZXF1ZXN0IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBjb2xvcjogIzQ2ZTE2OTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uY29udGFpbmVyIC53cmFwcGVyLXJlcXVlc3QgcCB7XG4gIHBhZGRpbmctdG9wOiAxM3B4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbjogMjBweCAwO1xuICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG4uY29udGFpbmVyIC5zZWFjcmhpbmctZHJpdmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1hcmdpbjogMjBweCAwIDAgMDtcbn1cbi5jb250YWluZXIgLnNlYWNyaGluZy1kcml2ZXIgcCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAwIDIwcHggMDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLmNvbnRhaW5lciAuc2VhY3JoaW5nLWRyaXZlciAuZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gIG1hcmdpbjogMzBweCAwIDBweCAwO1xuICBiYWNrZ3JvdW5kOiAjNDZlMTY5O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5zZWFjcmhpbmctZHJpdmVyIGlvbi1zcGlubmVyIHtcbiAgLS1jb2xvcjogIzQ2ZTE2OTtcbiAgZm9udC1zaXplOiA4MHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xufVxuLmNvbnRhaW5lciAubG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uY29udGFpbmVyIC5sb2dvIC5tZW51LWltZyB7XG4gIG1heC13aWR0aDogNDAlO1xufVxuLmNvbnRhaW5lciAubG9nbyBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLmNvbnRhaW5lciAuYWNjZXB0ZWQtcmlkZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmFjY2VwdGVkLXJpZGUgaDIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4uY29udGFpbmVyIC5hY2NlcHRlZC1yaWRlIGltZyB7XG4gIG1heC13aWR0aDogNTUlO1xufVxuLmNvbnRhaW5lciAuYWNjZXB0ZWQtcmlkZSAuZGlzdGFuY2Uge1xuICBjb2xvcjogIzQ2ZTE2OTtcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuYWNjZXB0ZWQtcmlkZSBzcGFuIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5jb250YWluZXIgLmFjY2VwdGVkLXJpZGUgcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5jb250YWluZXIgLmFjY2VwdGVkLXJpZGUgLmRyaXZlciB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uY29udGFpbmVyIC5hY2NlcHRlZC1yaWRlIC5rbSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmhlYWRlci1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDUwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLS1jb2xvcjogIzAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/search-ride/search-ride.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/search-ride/search-ride.page.ts ***!
  \*******************************************************/
/*! exports provided: SearchRidePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRidePage", function() { return SearchRidePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");







let SearchRidePage = class SearchRidePage {
    constructor(socketService, route, events, storage, locationService) {
        this.socketService = socketService;
        this.route = route;
        this.events = events;
        this.storage = storage;
        this.locationService = locationService;
        this.isDriveAccepted = false;
        events.subscribe("driveAccepted", message => {
            this.isDriveAccepted = true;
            this.message = message;
        });
        events.subscribe("informCustomer", message => {
            console.log(message);
            this.kms = message;
        });
        events.subscribe("driveIsFinished", message => {
            this.isDriveAccepted = false;
            this.kms = message;
        });
        this.requestDrive();
    }
    requestDrive() {
        const firstParam = this.route.snapshot.queryParamMap.get("data");
        let params = JSON.parse(firstParam);
        var _this = this;
        this.storage.get("phoneNumber").then(val => {
            this.locationService.getDistanceFromLatLonInKm(params.fromLat, params.fromLong, params.toLat, params.toLong, function (response, status) {
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
                setTimeout(data => {
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
    ngAfterContentInit() { }
    ngOnInit() { }
};
SearchRidePage.ctorParameters = () => [
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"] }
];
SearchRidePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-search-ride",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-ride.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-ride/search-ride.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-ride.page.scss */ "./src/app/pages/search-ride/search-ride.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"]])
], SearchRidePage);



/***/ })

}]);
//# sourceMappingURL=14-es2015.js.map