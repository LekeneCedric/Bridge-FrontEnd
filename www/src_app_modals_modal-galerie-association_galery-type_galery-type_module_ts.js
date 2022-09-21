"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_modal-galerie-association_galery-type_galery-type_module_ts"],{

/***/ 8173:
/*!********************************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/galery-type/galery-type-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleryTypePageRoutingModule": () => (/* binding */ GaleryTypePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _galery_type_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./galery-type.page */ 353);




const routes = [
    {
        path: '',
        component: _galery_type_page__WEBPACK_IMPORTED_MODULE_0__.GaleryTypePage
    },
    {
        path: 'image/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modals_modal-galerie-association_galery-type_image_image_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./image/image.module */ 6772)).then(m => m.ImagePageModule)
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

/***/ 2517:
/*!************************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/galery-type/galery-type.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleryTypePageModule": () => (/* binding */ GaleryTypePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _galery_type_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./galery-type-routing.module */ 8173);
/* harmony import */ var _galery_type_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./galery-type.page */ 353);
/* harmony import */ var _awesome_cordova_plugins_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/photo-viewer/ngx */ 9446);








let GaleryTypePageModule = class GaleryTypePageModule {
};
GaleryTypePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _galery_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.GaleryTypePageRoutingModule
        ],
        providers: [_awesome_cordova_plugins_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__.PhotoViewer],
        declarations: [_galery_type_page__WEBPACK_IMPORTED_MODULE_1__.GaleryTypePage]
    })
], GaleryTypePageModule);



/***/ }),

/***/ 353:
/*!**********************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/galery-type/galery-type.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleryTypePage": () => (/* binding */ GaleryTypePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _galery_type_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./galery-type.page.html?ngResource */ 5998);
/* harmony import */ var _galery_type_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./galery-type.page.scss?ngResource */ 4617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/medias/medias.service */ 8549);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _awesome_cordova_plugins_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/photo-viewer/ngx */ 9446);










let GaleryTypePage = class GaleryTypePage {
    constructor(route, manageDataService, mediaService, navCtrl, photoViewer) {
        this.route = route;
        this.manageDataService = manageDataService;
        this.mediaService = mediaService;
        this.navCtrl = navCtrl;
        this.photoViewer = photoViewer;
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
    viewImage(image) {
        this.photoViewer.show(`${this.storage + image.filePath}`);
    }
};
GaleryTypePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__.ManageDataService },
    { type: src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_3__.MediasService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _awesome_cordova_plugins_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__.PhotoViewer }
];
GaleryTypePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-galery-type',
        template: _galery_type_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_galery_type_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GaleryTypePage);



/***/ }),

/***/ 9446:
/*!**************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/photo-viewer/__ivy_ngcc__/ngx/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoViewer": () => (/* binding */ PhotoViewer)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 4624);





var PhotoViewer =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(PhotoViewer, _super);

  function PhotoViewer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PhotoViewer.prototype.show = function (url, title, options) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "show", {
      "sync": true
    }, arguments);
  };

  PhotoViewer.pluginName = "PhotoViewer";
  PhotoViewer.plugin = "com-sarriaroman-photoviewer";
  PhotoViewer.pluginRef = "PhotoViewer";
  PhotoViewer.repo = "https://github.com/sarriaroman/photoviewer";
  PhotoViewer.platforms = ["Android", "iOS"];

  PhotoViewer.ɵfac = /*@__PURE__*/function () {
    var ɵPhotoViewer_BaseFactory;
    return function PhotoViewer_Factory(t) {
      return (ɵPhotoViewer_BaseFactory || (ɵPhotoViewer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](PhotoViewer)))(t || PhotoViewer);
    };
  }();

  PhotoViewer.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: PhotoViewer,
    factory: function (t) {
      return PhotoViewer.ɵfac(t);
    }
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PhotoViewer, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null);
  })();

  return PhotoViewer;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);



/***/ }),

/***/ 4617:
/*!***********************************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/galery-type/galery-type.page.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = ".image {\n  min-width: 10rem;\n  min-height: 10rem;\n}\n.image img {\n  max-width: 10rem;\n  min-width: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGVyeS10eXBlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUVSIiwiZmlsZSI6ImdhbGVyeS10eXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZXtcbiAgICBtaW4td2lkdGg6IDEwcmVtOyAgICBcbiAgICBtaW4taGVpZ2h0OiAxMHJlbTtcbiAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwcmVtOyAgICBcbiAgICAgICAgbWluLXdpZHRoOiAxMHJlbTtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 5998:
/*!***********************************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/galery-type/galery-type.page.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <ion-item lines=\"none\">\n    <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"primary\" (click)=\"navBack()\"></ion-icon>\n    <ion-title>Galerie &ensp;<strong style=\"color:#3880ff\">{{category | uppercase}}</strong> </ion-title>\n  </ion-item>\n\n  <ion-row *ngIf=\"AssociationImages!=null&&category=='association'\">\n    <ion-col size=\"12\" style=\"display:flex;justify-items: flex-end;\">\n      <ion-thumbnail class=\"image\" *ngFor=\"let image of AssociationImages.Association\" style=\"margin:1%;\" (click)=\"viewImage(image)\">\n        <img [src]=\"storage+image.filePath\"  />\n      </ion-thumbnail>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"AssociationImages!=null && category=='mouvements'\">\n    <ion-col size=\"12\" style=\"display:flex\">\n      <ion-thumbnail class=\"image\" *ngFor=\"let image of AssociationImages.Mouvements[0]\" style=\"margin:1%;\" (click)=\"viewImage(image)\">\n        <img [src]=\"storage+image.filePath\" />\n      </ion-thumbnail>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"AssociationImages!=null && category=='annonces'\">\n    <ion-col size=\"12\" style=\"display:flex\">\n      <ion-thumbnail class=\"image\" *ngFor=\"let image of AssociationImages.Annonces[0]\" style=\"margin:1%;\" (click)=\"viewImage(image)\">\n        <img [src]=\"storage+image.filePath\" />\n      </ion-thumbnail>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modals_modal-galerie-association_galery-type_galery-type_module_ts.js.map