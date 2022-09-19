"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_creation_creation-besoins_creation-besoins_module_ts"],{

/***/ 9608:
/*!************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-besoins/creation-besoins-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationBesoinsPageRoutingModule": () => (/* binding */ CreationBesoinsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _creation_besoins_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-besoins.page */ 436);




const routes = [
    {
        path: '',
        component: _creation_besoins_page__WEBPACK_IMPORTED_MODULE_0__.CreationBesoinsPage
    }
];
let CreationBesoinsPageRoutingModule = class CreationBesoinsPageRoutingModule {
};
CreationBesoinsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreationBesoinsPageRoutingModule);



/***/ }),

/***/ 6460:
/*!****************************************************************************!*\
  !*** ./src/app/pages/creation/creation-besoins/creation-besoins.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationBesoinsPageModule": () => (/* binding */ CreationBesoinsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _creation_besoins_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-besoins-routing.module */ 9608);
/* harmony import */ var _creation_besoins_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-besoins.page */ 436);







let CreationBesoinsPageModule = class CreationBesoinsPageModule {
};
CreationBesoinsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _creation_besoins_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreationBesoinsPageRoutingModule
        ],
        declarations: [_creation_besoins_page__WEBPACK_IMPORTED_MODULE_1__.CreationBesoinsPage]
    })
], CreationBesoinsPageModule);



/***/ }),

/***/ 436:
/*!**************************************************************************!*\
  !*** ./src/app/pages/creation/creation-besoins/creation-besoins.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationBesoinsPage": () => (/* binding */ CreationBesoinsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _creation_besoins_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-besoins.page.html?ngResource */ 2448);
/* harmony import */ var _creation_besoins_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-besoins.page.scss?ngResource */ 4385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let CreationBesoinsPage = class CreationBesoinsPage {
    constructor() { }
    ngOnInit() {
    }
};
CreationBesoinsPage.ctorParameters = () => [];
CreationBesoinsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-creation-besoins',
        template: _creation_besoins_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_creation_besoins_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreationBesoinsPage);



/***/ }),

/***/ 4385:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-besoins/creation-besoins.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGlvbi1iZXNvaW5zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2448:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-besoins/creation-besoins.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>creation-besoins</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_creation_creation-besoins_creation-besoins_module_ts.js.map