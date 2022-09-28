"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_modal-salon_modal-salon_module_ts"],{

/***/ 36204:
/*!******************************************************************!*\
  !*** ./src/app/modals/modal-salon/modal-salon-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalSalonPageRoutingModule": () => (/* binding */ ModalSalonPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _modal_salon_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-salon.page */ 83378);




const routes = [
    {
        path: '',
        component: _modal_salon_page__WEBPACK_IMPORTED_MODULE_0__.ModalSalonPage
    }
];
let ModalSalonPageRoutingModule = class ModalSalonPageRoutingModule {
};
ModalSalonPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalSalonPageRoutingModule);



/***/ }),

/***/ 74009:
/*!**********************************************************!*\
  !*** ./src/app/modals/modal-salon/modal-salon.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalSalonPageModule": () => (/* binding */ ModalSalonPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _modal_salon_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-salon-routing.module */ 36204);
/* harmony import */ var _modal_salon_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-salon.page */ 83378);







let ModalSalonPageModule = class ModalSalonPageModule {
};
ModalSalonPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modal_salon_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalSalonPageRoutingModule
        ],
        declarations: [_modal_salon_page__WEBPACK_IMPORTED_MODULE_1__.ModalSalonPage]
    })
], ModalSalonPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modals_modal-salon_modal-salon_module_ts.js.map