"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_modal-edit-profil_modal-edit-profil_module_ts"],{

/***/ 35852:
/*!******************************************************************************!*\
  !*** ./src/app/modals/modal-edit-profil/modal-edit-profil-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalEditProfilPageRoutingModule": () => (/* binding */ ModalEditProfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _modal_edit_profil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-edit-profil.page */ 70284);




const routes = [
    {
        path: '',
        component: _modal_edit_profil_page__WEBPACK_IMPORTED_MODULE_0__.ModalEditProfilPage
    }
];
let ModalEditProfilPageRoutingModule = class ModalEditProfilPageRoutingModule {
};
ModalEditProfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalEditProfilPageRoutingModule);



/***/ }),

/***/ 68371:
/*!**********************************************************************!*\
  !*** ./src/app/modals/modal-edit-profil/modal-edit-profil.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalEditProfilPageModule": () => (/* binding */ ModalEditProfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _modal_edit_profil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-edit-profil-routing.module */ 35852);
/* harmony import */ var _modal_edit_profil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-edit-profil.page */ 70284);







let ModalEditProfilPageModule = class ModalEditProfilPageModule {
};
ModalEditProfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modal_edit_profil_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalEditProfilPageRoutingModule
        ],
        declarations: [_modal_edit_profil_page__WEBPACK_IMPORTED_MODULE_1__.ModalEditProfilPage]
    })
], ModalEditProfilPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modals_modal-edit-profil_modal-edit-profil_module_ts.js.map