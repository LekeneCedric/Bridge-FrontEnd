"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_modal-etat_modal-etat_module_ts"],{

/***/ 5860:
/*!****************************************************************!*\
  !*** ./src/app/modals/modal-etat/modal-etat-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalEtatPageRoutingModule": () => (/* binding */ ModalEtatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _modal_etat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-etat.page */ 20192);




const routes = [
    {
        path: '',
        component: _modal_etat_page__WEBPACK_IMPORTED_MODULE_0__.ModalEtatPage
    }
];
let ModalEtatPageRoutingModule = class ModalEtatPageRoutingModule {
};
ModalEtatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalEtatPageRoutingModule);



/***/ }),

/***/ 32713:
/*!********************************************************!*\
  !*** ./src/app/modals/modal-etat/modal-etat.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalEtatPageModule": () => (/* binding */ ModalEtatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _modal_etat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-etat-routing.module */ 5860);
/* harmony import */ var _modal_etat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-etat.page */ 20192);







let ModalEtatPageModule = class ModalEtatPageModule {
};
ModalEtatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modal_etat_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalEtatPageRoutingModule
        ],
        declarations: [_modal_etat_page__WEBPACK_IMPORTED_MODULE_1__.ModalEtatPage]
    })
], ModalEtatPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modals_modal-etat_modal-etat_module_ts.js.map