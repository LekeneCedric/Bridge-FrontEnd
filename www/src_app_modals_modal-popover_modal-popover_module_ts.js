"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_modal-popover_modal-popover_module_ts"],{

/***/ 24759:
/*!**********************************************************************!*\
  !*** ./src/app/modals/modal-popover/modal-popover-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPopoverPageRoutingModule": () => (/* binding */ ModalPopoverPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _modal_popover_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-popover.page */ 25780);




const routes = [
    {
        path: '',
        component: _modal_popover_page__WEBPACK_IMPORTED_MODULE_0__.ModalPopoverPage
    }
];
let ModalPopoverPageRoutingModule = class ModalPopoverPageRoutingModule {
};
ModalPopoverPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalPopoverPageRoutingModule);



/***/ }),

/***/ 24322:
/*!**************************************************************!*\
  !*** ./src/app/modals/modal-popover/modal-popover.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPopoverPageModule": () => (/* binding */ ModalPopoverPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _modal_popover_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-popover-routing.module */ 24759);
/* harmony import */ var _modal_popover_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-popover.page */ 25780);







let ModalPopoverPageModule = class ModalPopoverPageModule {
};
ModalPopoverPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modal_popover_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalPopoverPageRoutingModule
        ],
        declarations: [_modal_popover_page__WEBPACK_IMPORTED_MODULE_1__.ModalPopoverPage]
    })
], ModalPopoverPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modals_modal-popover_modal-popover_module_ts.js.map