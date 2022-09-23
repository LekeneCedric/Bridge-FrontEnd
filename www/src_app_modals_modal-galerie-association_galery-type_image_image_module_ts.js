"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_modal-galerie-association_galery-type_image_image_module_ts"],{

/***/ 6340:
/*!********************************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/galery-type/image/image-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagePageRoutingModule": () => (/* binding */ ImagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _image_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.page */ 2238);




const routes = [
    {
        path: '',
        component: _image_page__WEBPACK_IMPORTED_MODULE_0__.ImagePage
    }
];
let ImagePageRoutingModule = class ImagePageRoutingModule {
};
ImagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ImagePageRoutingModule);



/***/ }),

/***/ 6772:
/*!************************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/galery-type/image/image.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagePageModule": () => (/* binding */ ImagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _image_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-routing.module */ 6340);
/* harmony import */ var _image_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image.page */ 2238);







let ImagePageModule = class ImagePageModule {
};
ImagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _image_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImagePageRoutingModule
        ],
        declarations: [_image_page__WEBPACK_IMPORTED_MODULE_1__.ImagePage]
    })
], ImagePageModule);



/***/ }),

/***/ 2238:
/*!**********************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/galery-type/image/image.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagePage": () => (/* binding */ ImagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _image_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.page.html?ngResource */ 8803);
/* harmony import */ var _image_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image.page.scss?ngResource */ 4558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/medias/medias.service */ 8549);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);








let ImagePage = class ImagePage {
    constructor(route, media, navCtrl) {
        this.route = route;
        this.media = media;
        this.navCtrl = navCtrl;
        this.media_id = null;
        this.currentMedia = null;
        this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.storage;
    }
    ngOnInit() {
        this.media_id = this.route.snapshot.params.id;
        this.media.getOneMedia(this.media_id).toPromise().then(data => {
            this.currentMedia = data;
        });
        console.log(this.media_id);
    }
    navBack() {
        this.navCtrl.back();
    }
};
ImagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_2__.MediasService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
ImagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-image',
        template: _image_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_image_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ImagePage);



/***/ }),

/***/ 4558:
/*!***********************************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/galery-type/image/image.page.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 8803:
/*!***********************************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/galery-type/image/image.page.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content style=\"--background:black\">\n  <ion-item lines=\"none\" style=\"--background:black\">\n    <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"light\" (click)=\"navBack()\"></ion-icon>\n    <ion-title *ngIf=\"currentMedia!=null\" color=\"light\">{{currentMedia.fileName}} </ion-title>\n  </ion-item>\n  <img *ngIf=\"currentMedia!=null\" [src]=\"storage+currentMedia.filePath\" style=\"width:100%;margin-top:50%\">\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modals_modal-galerie-association_galery-type_image_image_module_ts.js.map