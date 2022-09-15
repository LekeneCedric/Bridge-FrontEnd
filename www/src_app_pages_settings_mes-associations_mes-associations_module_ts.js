"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_settings_mes-associations_mes-associations_module_ts"],{

/***/ 9268:
/*!************************************************************************************!*\
  !*** ./src/app/pages/settings/mes-associations/mes-associations-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesAssociationsPageRoutingModule": () => (/* binding */ MesAssociationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _mes_associations_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mes-associations.page */ 265);




const routes = [
    {
        path: '',
        component: _mes_associations_page__WEBPACK_IMPORTED_MODULE_0__.MesAssociationsPage
    }
];
let MesAssociationsPageRoutingModule = class MesAssociationsPageRoutingModule {
};
MesAssociationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MesAssociationsPageRoutingModule);



/***/ }),

/***/ 5530:
/*!****************************************************************************!*\
  !*** ./src/app/pages/settings/mes-associations/mes-associations.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesAssociationsPageModule": () => (/* binding */ MesAssociationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mes_associations_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mes-associations-routing.module */ 9268);
/* harmony import */ var _mes_associations_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mes-associations.page */ 265);







let MesAssociationsPageModule = class MesAssociationsPageModule {
};
MesAssociationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mes_associations_routing_module__WEBPACK_IMPORTED_MODULE_0__.MesAssociationsPageRoutingModule
        ],
        declarations: [_mes_associations_page__WEBPACK_IMPORTED_MODULE_1__.MesAssociationsPage]
    })
], MesAssociationsPageModule);



/***/ }),

/***/ 265:
/*!**************************************************************************!*\
  !*** ./src/app/pages/settings/mes-associations/mes-associations.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesAssociationsPage": () => (/* binding */ MesAssociationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mes_associations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mes-associations.page.html?ngResource */ 4132);
/* harmony import */ var _mes_associations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mes-associations.page.scss?ngResource */ 9712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let MesAssociationsPage = class MesAssociationsPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        const tabBar = document.getElementById('app-tab-bar');
        if (tabBar !== null) {
            tabBar.style.display = 'none';
        }
    }
    navBack() {
        this.router.navigateByUrl('/menu/settings', { replaceUrl: true });
        const tabBar = document.getElementById('app-tab-bar');
        if (tabBar !== null) {
            tabBar.style.display = 'flex';
        }
    }
};
MesAssociationsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
MesAssociationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-mes-associations',
        template: _mes_associations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mes_associations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MesAssociationsPage);



/***/ }),

/***/ 9712:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/settings/mes-associations/mes-associations.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXMtYXNzb2NpYXRpb25zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4132:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/settings/mes-associations/mes-associations.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-icon name=\"chevron-back-outline\" slot=\"start\" size=\"large\" color=\"danger\" (click)=\"navBack()\"></ion-icon>\n    <ion-title>Mes Associations</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/creation-association\">\n    <ion-fab-button color=\"danger\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings_mes-associations_mes-associations_module_ts.js.map