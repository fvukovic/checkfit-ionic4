(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-homepage/customer-homepage.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-homepage/customer-homepage.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>about-us</ion-title>\n  </ion-toolbar>\n</ion-header>\n  <ion-content class=\"mapp\"> \n    <style>\n      .map {\n        height: 80% !important;\n      } \n    </style>\n    <div #mapElement class=\"map\"></div> \n<ion-card (click)=\"openStreetPicker('from')\"> {{fromAddress}} </ion-card>\n<ion-card (click)=\"openStreetPicker('to')\"> {{toAddress}} </ion-card>\n<ion-radio-group>\n  1<ion-radio>1</ion-radio>\n  2<ion-radio>2</ion-radio>\n  3<ion-radio>3</ion-radio>\n  4<ion-radio>42</ion-radio>\n</ion-radio-group>\n<br/>\n  <ion-button (click)=\"orderTaxi()\">{{ \"customerHomepage.myRides\" | translate }}</ion-button>\n  </ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVyLWhvbWVwYWdlL2N1c3RvbWVyLWhvbWVwYWdlLnBhZ2Uuc2NzcyJ9 */");

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






let CustomerHomepagePage = class CustomerHomepagePage {
    constructor(modalcontroller, router, locationService) {
        this.modalcontroller = modalcontroller;
        this.router = router;
        this.locationService = locationService;
        this.fromAddress = "Kliknite za unos addrese";
        this.toAddress = "Kliknite za unos addrese";
    }
    ngOnInit() { }
    ngAfterContentInit() {
        this.initializeMap();
    }
    initializeMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.currentLocation = yield this.locationService.getUserPosition();
            this.map = new google.maps.Map(this.mapElement.nativeElement, {
                center: { lat: this.currentLocation.coords.latitude, lng: this.currentLocation.coords.longitude },
                zoom: 16
            });
            var streetLocation = yield this.locationService.getReverseGeocode(this.currentLocation.coords.latitude, this.currentLocation.coords.longitude);
            this.fromAddress = streetLocation[0].thoroughfare + "," + streetLocation[0].subThoroughfare + "," + streetLocation[0].locality;
            this.toAddress = streetLocation[0].thoroughfare + "," + streetLocation[0].subThoroughfare + "," + streetLocation[0].locality;
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
    orderTaxi() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.locationService.getReverseGeocode(45.5, 19).then((result) => {
                result[0];
            });
            let fromAddress = yield this.locationService.getForwardGeocode2(this.fromAddress + ", Varaždin, Croatia");
            let toAddress = yield this.locationService.getForwardGeocode2(this.toAddress + ", Varaždin, Croatia");
            let params = {
                fromLat: fromAddress["latitude"],
                fromLong: fromAddress["longitude"],
                toLat: toAddress["latitude"],
                toLong: toAddress["longitude"],
            };
            this.router.navigate(["/search-ride"], { queryParams: { data: JSON.stringify(params) } });
        });
    }
};
CustomerHomepagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"] }
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
        _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"]])
], CustomerHomepagePage);



/***/ })

}]);
//# sourceMappingURL=9-es2015.js.map