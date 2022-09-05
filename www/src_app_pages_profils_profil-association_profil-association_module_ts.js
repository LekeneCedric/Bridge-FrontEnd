"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profils_profil-association_profil-association_module_ts"],{

/***/ 4075:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/profils/profil-association/profil-association-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilAssociationPageRoutingModule": () => (/* binding */ ProfilAssociationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _profil_association_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profil-association.page */ 7561);




const routes = [
    {
        path: '',
        component: _profil_association_page__WEBPACK_IMPORTED_MODULE_0__.ProfilAssociationPage
    }
];
let ProfilAssociationPageRoutingModule = class ProfilAssociationPageRoutingModule {
};
ProfilAssociationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilAssociationPageRoutingModule);



/***/ }),

/***/ 1524:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/profils/profil-association/profil-association.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilAssociationPageModule": () => (/* binding */ ProfilAssociationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profil_association_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profil-association-routing.module */ 4075);
/* harmony import */ var _profil_association_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profil-association.page */ 7561);







let ProfilAssociationPageModule = class ProfilAssociationPageModule {
};
ProfilAssociationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profil_association_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilAssociationPageRoutingModule
        ],
        declarations: [_profil_association_page__WEBPACK_IMPORTED_MODULE_1__.ProfilAssociationPage]
    })
], ProfilAssociationPageModule);



/***/ }),

/***/ 7561:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profils/profil-association/profil-association.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilAssociationPage": () => (/* binding */ ProfilAssociationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profil_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profil-association.page.html?ngResource */ 9535);
/* harmony import */ var _profil_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profil-association.page.scss?ngResource */ 9128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ProfilAssociationPage = class ProfilAssociationPage {
    constructor() { }
    ngOnInit() {
    }
};
ProfilAssociationPage.ctorParameters = () => [];
ProfilAssociationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-profil-association',
        template: _profil_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profil_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilAssociationPage);



/***/ }),

/***/ 9128:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/profils/profil-association/profil-association.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWwtYXNzb2NpYXRpb24ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 9535:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/profils/profil-association/profil-association.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>profil-association</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profils_profil-association_profil-association_module_ts.js.map