"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_modal-galerie-association_galery-type_galery-type_module_ts"],{

/***/ 68173:
/*!********************************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/galery-type/galery-type-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleryTypePageRoutingModule": () => (/* binding */ GaleryTypePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _galery_type_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./galery-type.page */ 10353);




const routes = [
    {
        path: '',
        component: _galery_type_page__WEBPACK_IMPORTED_MODULE_0__.GaleryTypePage
    },
    {
        path: 'image/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./image/image.module */ 46772)).then(m => m.ImagePageModule)
    }
];
let GaleryTypePageRoutingModule = class GaleryTypePageRoutingModule {
};
GaleryTypePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GaleryTypePageRoutingModule);



/***/ }),

/***/ 32517:
/*!************************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/galery-type/galery-type.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleryTypePageModule": () => (/* binding */ GaleryTypePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _galery_type_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./galery-type-routing.module */ 68173);
/* harmony import */ var _galery_type_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./galery-type.page */ 10353);







let GaleryTypePageModule = class GaleryTypePageModule {
};
GaleryTypePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _galery_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.GaleryTypePageRoutingModule
        ],
        declarations: [_galery_type_page__WEBPACK_IMPORTED_MODULE_1__.GaleryTypePage]
    })
], GaleryTypePageModule);



/***/ }),

/***/ 10353:
/*!**********************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/galery-type/galery-type.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleryTypePage": () => (/* binding */ GaleryTypePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _galery_type_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./galery-type.page.html?ngResource */ 35998);
/* harmony import */ var _galery_type_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./galery-type.page.scss?ngResource */ 58268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 58027);
/* harmony import */ var src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/medias/medias.service */ 28549);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);









let GaleryTypePage = class GaleryTypePage {
    constructor(route, manageDataService, mediaService, navCtrl) {
        this.route = route;
        this.manageDataService = manageDataService;
        this.mediaService = mediaService;
        this.navCtrl = navCtrl;
        /*----------------------------------VARIABLES------------------------------___*/
        this.category = '';
        this.association_id = null;
        this.AssociationImages = null;
        this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.storage;
    }
    ngOnInit() {
        this.category = this.route.snapshot.params.category;
        this.association_id = this.route.snapshot.params.id;
        this.manageDataService.getGalerieAssociation(this.association_id).toPromise().then((data) => {
            this.AssociationImages = data;
            console.log(data);
        });
    }
    /*----------------------------------FUNCTIONS---------------------------------*/
    navBack() {
        this.navCtrl.back();
    }
};
GaleryTypePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__.ManageDataService },
    { type: src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_3__.MediasService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
GaleryTypePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-galery-type',
        template: _galery_type_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_galery_type_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GaleryTypePage);



/***/ }),

/***/ 58268:
/*!***********************************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/galery-type/galery-type.page.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = ".image {\n  min-width: 10rem;\n  min-height: 10rem;\n}\n.image img {\n  max-width: 10rem;\n  min-width: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGVyeS10eXBlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUVSIiwiZmlsZSI6ImdhbGVyeS10eXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZXtcbiAgICBtaW4td2lkdGg6IDEwcmVtOyAgICBcbiAgICBtaW4taGVpZ2h0OiAxMHJlbTtcbiAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwcmVtOyAgICBcbiAgICAgICAgbWluLXdpZHRoOiAxMHJlbTtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 35998:
/*!***********************************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/galery-type/galery-type.page.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <ion-item lines=\"none\" >\n    <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"primary\" (click)=\"navBack()\"></ion-icon>\n    <ion-title>Galerie &ensp;<strong style=\"color:#3880ff\">{{category | uppercase}}</strong> </ion-title>\n  </ion-item>\n\n  <ion-row *ngIf=\"AssociationImages!=null&&category=='association'\">\n    <ion-col size=\"12\" style=\"display:flex;justify-items: flex-end;flex-wrap: wrap;\">\n      <ion-thumbnail  class=\"image\" *ngFor=\"let image of AssociationImages.Association\" style=\"margin:1%;\" [routerLink]=\"['image',image.id]\">\n        <img [src]=\"storage+image.filePath\"/>\n      </ion-thumbnail>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"AssociationImages!=null && category=='mouvements'\">\n    <ion-col size=\"12\" style=\"display:flex;justify-items: flex-end;flex-wrap: wrap;\">\n      <ion-thumbnail class=\"image\" *ngFor=\"let image of AssociationImages.Mouvements\" style=\"margin:1%;\" [routerLink]=\"['image',image.id]\">\n        <img [src]=\"storage+image.filePath\"/>\n      </ion-thumbnail>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"AssociationImages!=null && category=='annonces'\">\n    <ion-col size=\"12\" style=\"display:flex;justify-items: flex-end;flex-wrap: wrap;\">\n      <ion-thumbnail class=\"image\" *ngFor=\"let image of AssociationImages.Annonces\" style=\"margin:1%;\" [routerLink]=\"['image',image.id]\">\n        <img [src]=\"storage+image.filePath\"/>\n      </ion-thumbnail>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modals_modal-galerie-association_galery-type_galery-type_module_ts.js.map