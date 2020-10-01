(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-homepage/customer-homepage.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-homepage/customer-homepage.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"header-box\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Naruči vožnju</ion-title>\n    <button class=\"sos\" *ngIf=\"isUserLoggedIn\" (click)=\"callSOS()\">SOS</button>\n  </div>\n  </ion-toolbar>\n</ion-header>\n  <ion-content class=\"mapp\"> \n    <style>\n      .map {\n        height: 60% !important;\n      } \n    </style>\n    <div #mapElement class=\"map\"></div> \n    <div class=\"location-from\">\n        <ion-card (click)=\"openStreetPicker('from')\"> {{fromAddress}} </ion-card>\n    </div>\n    <div class=\"location-to\">\n      <ion-card (click)=\"openStreetPicker('to')\"> {{toAddress}} </ion-card>\n    </div>\n    <div class=\"passengers\">\n        <div class=\"title\">Broj putnika:</div>\n        <input type=\"text\" class=\"passenger-number\" placeholder=\"Upišite broj putnika!\" [(ngModel)]=\"numberOfPersons\" />\n    </div>\n    <div class=\"btn-wrapper\">\n      <button class=\"order\" (click)=\"orderTaxi()\">{{ \"customerHomepage.myRides\" | translate }}</button>\n    </div>\n  \n  </ion-content> ");

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
/* harmony default export */ __webpack_exports__["default"] = (".location-from .sc-ion-card-md-h,\n.location-to .sc-ion-card-md-h {\n  box-shadow: none;\n  border-radius: 0;\n  padding: 15px 20px;\n  height: 45px;\n  text-align: center;\n  margin: 10px 10px;\n  color: #46e169;\n  background: #393939;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n\n.location-to .sc-ion-card-md-h {\n  margin-bottom: 0;\n}\n\n.btn-wrapper {\n  margin: 0 10px;\n}\n\n.order {\n  background: #46e169;\n  width: 100%;\n  height: 40px;\n  box-shadow: none !important;\n  border-radius: 0 !important;\n  color: #393939;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\nion-radio-group {\n  display: -webkit-box;\n  display: flex;\n}\n\nion-label {\n  margin-top: 2px;\n}\n\nion-radio {\n  border: 1px solid #46e169;\n  border-radius: 50%;\n  margin: 0px 5px;\n  --color-checked: #46e169;\n  width: 15px;\n  height: 15px;\n}\n\n.passengers {\n  padding: 0 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-content: space-around;\n  margin: 10px;\n  background: #393939;\n  color: #46e169;\n  height: 45px;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\n.passengers .passenger-number {\n  background: #393939;\n  border: 0;\n}\n\nion-menu-button {\n  --color: #393939;\n}\n\n.header-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: 10px 0;\n  padding: 0;\n}\n\n.header-box ion-title {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\n\n.header-box .sos {\n  background: #DC143C;\n  float: right;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  padding: 0;\n  margin: 0 20px 0 0;\n  color: white;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC52dWtvdmljL0RldmVsb3BtZW50L2NoZWNrZml0LW1vYmlsZS9tb2JpbGVfYXBwL3NyYy9hcHAvcGFnZXMvY3VzdG9tZXItaG9tZXBhZ2UvY3VzdG9tZXItaG9tZXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jdXN0b21lci1ob21lcGFnZS9jdXN0b21lci1ob21lcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNHSjs7QURBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ0dKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBREFBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNJSjs7QURGSTtFQUNJLG1CQUFBO0VBRUEsU0FBQTtBQ0dSOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNHSjs7QURESTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNHUjs7QURESTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVyLWhvbWVwYWdlL2N1c3RvbWVyLWhvbWVwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2NhdGlvbi1mcm9tIC5zYy1pb24tY2FyZC1tZC1oLFxuLmxvY2F0aW9uLXRvIC5zYy1pb24tY2FyZC1tZC1oIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gICAgY29sb3I6ICM0NmUxNjk7XG4gICAgYmFja2dyb3VuZDogIzM5MzkzOTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmxvY2F0aW9uLXRvIC5zYy1pb24tY2FyZC1tZC1oIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmJ0bi13cmFwcGVyIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbn1cbi5vcmRlciB7XG4gICAgYmFja2dyb3VuZDogIzQ2ZTE2OTsgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMzkzOTM5O1xuICAgIGZvbnQtc2l6ZTogMTJweDsgXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaW9uLXJhZGlvLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pb24tbGFiZWwge1xuICAgIG1hcmdpbi10b3A6IDJweDsgIFxufVxuXG5pb24tcmFkaW8ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NmUxNjk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMHB4IDVweDtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICM0NmUxNjk7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xufVxuLnBhc3NlbmdlcnMge1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICMzOTM5Mzk7XG4gICAgY29sb3I6ICM0NmUxNjk7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIFxuICAgIC5wYXNzZW5nZXItbnVtYmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzM5MzkzOTtcbjtcbiAgICAgICAgYm9yZGVyOiAwO1xuXG4gICAgfVxufVxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgICAtLWNvbG9yOiAjMzkzOTM5O1xufVxuLmhlYWRlci1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgIGlvbi10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuc29zIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0RDMTQzQztcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG4iLCIubG9jYXRpb24tZnJvbSAuc2MtaW9uLWNhcmQtbWQtaCxcbi5sb2NhdGlvbi10byAuc2MtaW9uLWNhcmQtbWQtaCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAxMHB4O1xuICBjb2xvcjogIzQ2ZTE2OTtcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubG9jYXRpb24tdG8gLnNjLWlvbi1jYXJkLW1kLWgge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uYnRuLXdyYXBwZXIge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLm9yZGVyIHtcbiAgYmFja2dyb3VuZDogIzQ2ZTE2OTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMzkzOTM5O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmlvbi1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2ZTE2OTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDBweCA1cHg7XG4gIC0tY29sb3ItY2hlY2tlZDogIzQ2ZTE2OTtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbn1cblxuLnBhc3NlbmdlcnMge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XG4gIGNvbG9yOiAjNDZlMTY5O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wYXNzZW5nZXJzIC5wYXNzZW5nZXItbnVtYmVyIHtcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiAjMzkzOTM5O1xufVxuXG4uaGVhZGVyLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uaGVhZGVyLWJveCBpb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5oZWFkZXItYm94IC5zb3Mge1xuICBiYWNrZ3JvdW5kOiAjREMxNDNDO1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDIwcHggMCAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

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
        this.fromAddress = "Unesite adresu polaska!";
        this.toAddress = "Unesite adresu odredišta!";
    }
    ngOnInit() {
        this.storage.get("username").then(val => {
            if (val != null) {
                this.isUserLoggedIn = true;
            }
        });
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