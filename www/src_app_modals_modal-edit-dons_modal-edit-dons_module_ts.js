"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_modal-edit-dons_modal-edit-dons_module_ts"],{

/***/ 3257:
/*!**************************************************************************!*\
  !*** ./src/app/modals/modal-edit-dons/modal-edit-dons-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalEditDonsPageRoutingModule": () => (/* binding */ ModalEditDonsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _modal_edit_dons_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-edit-dons.page */ 387);




const routes = [
    {
        path: '',
        component: _modal_edit_dons_page__WEBPACK_IMPORTED_MODULE_0__.ModalEditDonsPage
    }
];
let ModalEditDonsPageRoutingModule = class ModalEditDonsPageRoutingModule {
};
ModalEditDonsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalEditDonsPageRoutingModule);



/***/ }),

/***/ 7504:
/*!******************************************************************!*\
  !*** ./src/app/modals/modal-edit-dons/modal-edit-dons.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalEditDonsPageModule": () => (/* binding */ ModalEditDonsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modal_edit_dons_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-edit-dons-routing.module */ 3257);
/* harmony import */ var _modal_edit_dons_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-edit-dons.page */ 387);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 9036);








let ModalEditDonsPageModule = class ModalEditDonsPageModule {
};
ModalEditDonsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _modal_edit_dons_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalEditDonsPageRoutingModule
        ],
        providers: [_ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeGeocoder],
        declarations: [_modal_edit_dons_page__WEBPACK_IMPORTED_MODULE_1__.ModalEditDonsPage]
    })
], ModalEditDonsPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modals_modal-edit-dons_modal-edit-dons_module_ts.js.map