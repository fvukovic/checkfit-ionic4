(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-homepage/customer-homepage.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-homepage/customer-homepage.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"header-box\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Nova vožnja</ion-title>\n      <button class=\"sos\" *ngIf=\"isUserLoggedIn\" (click)=\"callSOS()\">SOS</button>\n      <img src=\"http://murataxi.com/images/resources/taxiLogo.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n  <ion-content class=\"mapp\"> \n    <div #mapElement class=\"map\"></div> \n    <div class=\"location-wrapper\">\n      <h3 class=\"title\">Upišite tražene podatke:</h3>\n      <div class=\"location-details\">\n          <span class=\"text\">Polazište:</span>\n          <span class=\"value\">\n            <ion-card class=\"destination\" (click)=\"openStreetPicker('from')\"> {{fromAddress}} </ion-card>\n          </span>\n      </div>\n      <div class=\"location-details\">\n        <span class=\"text\">Odredište:</span>\n        <span class=\"value\">\n          <ion-card class=\"destination\" (click)=\"openStreetPicker('to')\"> {{toAddress}} </ion-card>\n        </span>\n      </div>\n      <div class=\"location-details\">\n          <span class=\"text\">Putnici:</span>\n          <span class=\"value\">\n            <input class=\"passengers\" type=\"text\" placeholder=\"Upišite broj putnika!\" [(ngModel)]=\"numberOfPersons\" />\n          </span>\n      </div>\n      <div class=\"location-details\">\n        <button class=\"order-ride\" (click)=\"orderTaxi()\">{{ \"customerHomepage.myRides\" | translate }}</button>\n      </div>\n    </div>\n  </ion-content> ");

/***/ }),

/***/ "./src/app/pages/customer-homepage/customer-homepage-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/customer-homepage/customer-homepage-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomerHomepagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerHomepagePageRoutingModule", function() { return CustomerHomepagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _customer_homepage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-homepage.page */ "./src/app/pages/customer-homepage/customer-homepage.page.ts");




const routes = [
    {
        path: '',
        component: _customer_homepage_page__WEBPACK_IMPORTED_MODULE_3__["CustomerHomepagePage"]
    }
];
let CustomerHomepagePageRoutingModule = class CustomerHomepagePageRoutingModule {
};
CustomerHomepagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomerHomepagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/customer-homepage/customer-homepage.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/customer-homepage/customer-homepage.module.ts ***!
  \*********************************************************************/
/*! exports provided: CustomerHomepagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerHomepagePageModule", function() { return CustomerHomepagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _customer_homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-homepage-routing.module */ "./src/app/pages/customer-homepage/customer-homepage-routing.module.ts");
/* harmony import */ var _customer_homepage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-homepage.page */ "./src/app/pages/customer-homepage/customer-homepage.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let CustomerHomepagePageModule = class CustomerHomepagePageModule {
};
CustomerHomepagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _customer_homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerHomepagePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_customer_homepage_page__WEBPACK_IMPORTED_MODULE_6__["CustomerHomepagePage"]]
    })
], CustomerHomepagePageModule);



/***/ }),

/***/ "./src/app/pages/customer-homepage/customer-homepage.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/customer-homepage/customer-homepage.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px;\n}\n\nimg {\n  max-width: 50px;\n}\n\nion-title {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  text-transform: uppercase;\n}\n\nion-menu-button {\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  --color: #000;\n  --background: #f4f0ec;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n.map {\n  height: 37% !important;\n  margin: 10px 10px 10px 10px;\n  border: 1px solid #c8c8c8;\n  box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.3);\n}\n\n.title {\n  margin: 20px 10px;\n  font-size: 14px;\n  text-transform: uppercase;\n  border-bottom: 1px solid #000;\n  padding-bottom: 10px;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n  text-align: center;\n  font-weight: bold;\n}\n\n.location-details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: 10px 10px 5px 10px;\n}\n\n.location-details .text {\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 13px;\n  margin-bottom: 5px;\n  text-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.4);\n}\n\n.location-details .value {\n  border: 1px solid #393939;\n  width: 100%;\n  background: white;\n  box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.3);\n}\n\n.location-details .destination {\n  margin: 0;\n  padding: 12px;\n  font-size: 12px;\n}\n\n.location-details .passengers {\n  margin: 0;\n  padding: 10px;\n  border: 0;\n  text-align: left;\n  font-size: 12px;\n  height: 38px;\n  box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.3);\n  width: 100%;\n  font-size: 12px;\n}\n\n.location-details .order-ride {\n  width: 100%;\n  background: #393939;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-transform: uppercase;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvY3VzdG9tZXItaG9tZXBhZ2UvY3VzdG9tZXItaG9tZXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jdXN0b21lci1ob21lcGFnZS9jdXN0b21lci1ob21lcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBREFBO0VBQ0ksNkNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNHSjs7QUREQTtFQUNJLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7QUNLSjs7QURIQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ01KOztBREpBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMEJBQUE7QUNPSjs7QURMSTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ09SOztBREpJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQ0FBQTtBQ01SOztBREhJO0VBQ0ksU0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDS1I7O0FESEk7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0tSOztBREhJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNLUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVyLWhvbWVwYWdlL2N1c3RvbWVyLWhvbWVwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmltZyB7XG4gICAgbWF4LXdpZHRoOiA1MHB4O1xufVxuaW9uLXRpdGxlIHtcbiAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XG4gICAgLS1jb2xvcjogIzAwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgICB0ZXh0LXNoYWRvdzogMGVtIDBlbSAwLjNlbSByZ2JhKDAsMCwwLDAuNCk7XG4gICAgLS1jb2xvcjogIzAwMDtcbiAgICAtLWJhY2tncm91bmQ6ICNmNGYwZWM7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5tYXAge1xuICAgIGhlaWdodDogMzclICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XG4gICAgYm94LXNoYWRvdzogNnB4IDZweCAxOHB4IDBweCByZ2JhKDAsMCwwLDAuMyk7XG59XG4udGl0bGUge1xuICAgIG1hcmdpbjogMjBweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubG9jYXRpb24tZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDVweCAxMHB4O1xuXG4gICAgLnRleHQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwwLDAsMC40KTtcbiAgICB9XG5cbiAgICAudmFsdWUge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzkzOTM5O1xuICAgICAgICB3aWR0aDogMTAwJTsgICAgICAgIFxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogNnB4IDZweCAxOHB4IDBweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgfVxuXG4gICAgLmRlc3RpbmF0aW9uIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMnB4OyAgICAgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLnBhc3NlbmdlcnMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggMThweCAwcHggcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAub3JkZXItcmlkZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG59IiwiLmhlYWRlci1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDUwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLS1jb2xvcjogIzAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAtLWNvbG9yOiAjMDAwO1xuICAtLWJhY2tncm91bmQ6ICNmNGYwZWM7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm1hcCB7XG4gIGhlaWdodDogMzclICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODtcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbjogMjBweCAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgdGV4dC1zaGFkb3c6IDBlbSAwZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9jYXRpb24tZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMTBweCAxMHB4IDVweCAxMHB4O1xufVxuLmxvY2F0aW9uLWRldGFpbHMgLnRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHRleHQtc2hhZG93OiAwZW0gMGVtIDAuM2VtIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbi5sb2NhdGlvbi1kZXRhaWxzIC52YWx1ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzOTM5Mzk7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4ubG9jYXRpb24tZGV0YWlscyAuZGVzdGluYXRpb24ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5sb2NhdGlvbi1kZXRhaWxzIC5wYXNzZW5nZXJzIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBib3gtc2hhZG93OiA2cHggNnB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5sb2NhdGlvbi1kZXRhaWxzIC5vcmRlci1yaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/customer-homepage/customer-homepage.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/customer-homepage/customer-homepage.page.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerHomepagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerHomepagePage", function() { return CustomerHomepagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popups_street_picker_street_picker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popups/street-picker/street-picker.page */ "./src/app/pages/popups/street-picker/street-picker.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");











let CustomerHomepagePage = class CustomerHomepagePage {
    constructor(modalcontroller, router, locationService, androidPermissions, platform, geolocation, storage, socketService, events) {
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
        this.storage.get("username").then(val => {
            if (val != null) {
                this.isUserLoggedIn = true;
                this.router.navigate(["/driver-homepage"]);
            }
        });
        this.fromAddress = "Unesite adresu polaska!";
        this.toAddress = "Unesite adresu odredišta!";
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        this.events.subscribe("driverInfo", message => {
            this.setMapOnAll(null);
            Object.entries(JSON.parse(message["drivers"])).forEach(([key, value]) => {
                let marker = new google.maps.Marker({
                    map: this.map,
                    animation: google.maps.Animation.BOUNCE,
                    icon: './assets/619006.svg',
                    position: new google.maps.LatLng(value["latitude"], value["longitude"])
                });
                this.markers.push(marker);
            });
        });
        this.platform.ready().then(() => {
            let perms = [
                "android.permission.ACCESS_COARSE_LOCATION",
                "android.permission.ACCESS_FINE_LOCATION",
                "android.permission.ACCESS_BACKGROUND_LOCATION"
            ];
            this.androidPermissions
                .checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
                .then(result => {
                if (result.hasPermission == false) {
                    location.reload();
                }
                navigator.geolocation.getCurrentPosition(resp => {
                    this.initializeMap();
                });
            });
        });
    }
    setMapOnAll(map) {
        for (let i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    }
    initializeMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.currentLocation = yield this.locationService.getUserPosition();
            this.map = new google.maps.Map(this.mapElement.nativeElement, {
                center: {
                    lat: this.currentLocation.coords.latitude,
                    lng: this.currentLocation.coords.longitude
                },
                zoom: 16
            });
            var streetLocation = yield this.locationService.getReverseGeocode(this.currentLocation.coords.latitude, this.currentLocation.coords.longitude);
            this.fromAddress =
                streetLocation[0].thoroughfare +
                    "," +
                    streetLocation[0].subThoroughfare +
                    "," +
                    streetLocation[0].locality;
            this.toAddress =
                streetLocation[0].thoroughfare +
                    "," +
                    streetLocation[0].subThoroughfare +
                    "," +
                    streetLocation[0].locality;
            console.log(this.fromAddress);
            this.addMarker(this.map);
        });
    }
    addMarker(map) {
        let marker = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            position: map.getCenter()
        });
    }
    openStreetPicker(picker) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalcontroller.create({
                component: _popups_street_picker_street_picker_page__WEBPACK_IMPORTED_MODULE_3__["StreetPickerPage"],
                componentProps: {
                    picker: picker
                }
            });
            modal.onDidDismiss().then(response => {
                const data = response["data"];
                if (data["address"] == null) {
                    return;
                }
                if (data["picker"] == "from") {
                    this.fromAddress = data["address"];
                }
                else {
                    this.toAddress = data["address"];
                }
            });
            return yield modal.present();
        });
    }
    setNumberOfPersons(numberOfPersons) {
        this.numberOfPersons = numberOfPersons;
    }
    orderTaxi() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let fromAddress = yield this.locationService.getForwardGeocode2(this.fromAddress);
            let toAddress = yield this.locationService.getForwardGeocode2(this.toAddress);
            let params = {
                fromLat: fromAddress["latitude"],
                fromLong: fromAddress["longitude"],
                toLat: toAddress["latitude"],
                toLong: toAddress["longitude"],
                persons: this.numberOfPersons
            };
            //   let params = {
            //   fromLat: "46.13123",
            //   fromLong: "16.123144",
            //   toLat: "46.13123",
            //   toLong: "16.123144",
            // };
            this.router.navigate(["/search-ride"], {
                queryParams: { data: JSON.stringify(params) }
            });
        });
    }
    callSOS() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let currentLocation = yield this.locationService.getUserPosition();
            console.log("DSAD");
            console.log(currentLocation);
            this.storage.get("username").then(username => {
                this.storage.get("username").then(phone => {
                    this.socketService.send("/server-receiver", {
                        type: "customer",
                        messageType: "SOS",
                        driver: username,
                        phoneNumber: phone,
                        fromLat: this.currentLocation.coords.latitude,
                        fromLong: this.currentLocation.coords.longitude
                    });
                });
            });
        });
    }
};
CustomerHomepagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__["AndroidPermissions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_9__["SocketService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapElement", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CustomerHomepagePage.prototype, "mapElement", void 0);
CustomerHomepagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-customer-homepage",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-homepage.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-homepage/customer-homepage.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-homepage.page.scss */ "./src/app/pages/customer-homepage/customer-homepage.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__["AndroidPermissions"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
        _services_socket_service__WEBPACK_IMPORTED_MODULE_9__["SocketService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
], CustomerHomepagePage);



/***/ })

}]);
//# sourceMappingURL=9-es2015.js.map