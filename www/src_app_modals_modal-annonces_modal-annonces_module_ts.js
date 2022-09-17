"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_modal-annonces_modal-annonces_module_ts"],{

/***/ 834:
/*!************************************************************************!*\
  !*** ./src/app/modals/modal-annonces/modal-annonces-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalAnnoncesPageRoutingModule": () => (/* binding */ ModalAnnoncesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _modal_annonces_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-annonces.page */ 7087);




const routes = [
    {
        path: '',
        component: _modal_annonces_page__WEBPACK_IMPORTED_MODULE_0__.ModalAnnoncesPage
    }
];
let ModalAnnoncesPageRoutingModule = class ModalAnnoncesPageRoutingModule {
};
ModalAnnoncesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalAnnoncesPageRoutingModule);



/***/ }),

/***/ 5737:
/*!****************************************************************!*\
  !*** ./src/app/modals/modal-annonces/modal-annonces.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalAnnoncesPageModule": () => (/* binding */ ModalAnnoncesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modal_annonces_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-annonces-routing.module */ 834);
/* harmony import */ var _modal_annonces_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-annonces.page */ 7087);







let ModalAnnoncesPageModule = class ModalAnnoncesPageModule {
};
ModalAnnoncesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modal_annonces_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalAnnoncesPageRoutingModule
        ],
        declarations: [_modal_annonces_page__WEBPACK_IMPORTED_MODULE_1__.ModalAnnoncesPage]
    })
], ModalAnnoncesPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modals_modal-annonces_modal-annonces_module_ts.js.map