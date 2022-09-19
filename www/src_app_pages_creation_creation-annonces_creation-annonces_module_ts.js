"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_creation_creation-annonces_creation-annonces_module_ts"],{

/***/ 7958:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-annonces/creation-annonces-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationAnnoncesPageRoutingModule": () => (/* binding */ CreationAnnoncesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _creation_annonces_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-annonces.page */ 9121);




const routes = [
    {
        path: '',
        component: _creation_annonces_page__WEBPACK_IMPORTED_MODULE_0__.CreationAnnoncesPage
    }
];
let CreationAnnoncesPageRoutingModule = class CreationAnnoncesPageRoutingModule {
};
CreationAnnoncesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreationAnnoncesPageRoutingModule);



/***/ }),

/***/ 761:
/*!******************************************************************************!*\
  !*** ./src/app/pages/creation/creation-annonces/creation-annonces.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationAnnoncesPageModule": () => (/* binding */ CreationAnnoncesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _creation_annonces_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-annonces-routing.module */ 7958);
/* harmony import */ var _creation_annonces_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-annonces.page */ 9121);







let CreationAnnoncesPageModule = class CreationAnnoncesPageModule {
};
CreationAnnoncesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _creation_annonces_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreationAnnoncesPageRoutingModule
        ],
        declarations: [_creation_annonces_page__WEBPACK_IMPORTED_MODULE_1__.CreationAnnoncesPage]
    })
], CreationAnnoncesPageModule);



/***/ }),

/***/ 9121:
/*!****************************************************************************!*\
  !*** ./src/app/pages/creation/creation-annonces/creation-annonces.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationAnnoncesPage": () => (/* binding */ CreationAnnoncesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _creation_annonces_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-annonces.page.html?ngResource */ 2141);
/* harmony import */ var _creation_annonces_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-annonces.page.scss?ngResource */ 3176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let CreationAnnoncesPage = class CreationAnnoncesPage {
    constructor() { }
    ngOnInit() {
    }
};
CreationAnnoncesPage.ctorParameters = () => [];
CreationAnnoncesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-creation-annonces',
        template: _creation_annonces_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_creation_annonces_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreationAnnoncesPage);



/***/ }),

/***/ 3176:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-annonces/creation-annonces.page.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGlvbi1hbm5vbmNlcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 2141:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-annonces/creation-annonces.page.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>creation-annonces</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_creation_creation-annonces_creation-annonces_module_ts.js.map