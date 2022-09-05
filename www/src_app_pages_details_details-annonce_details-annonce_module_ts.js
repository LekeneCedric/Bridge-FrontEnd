"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_details_details-annonce_details-annonce_module_ts"],{

/***/ 351:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/details/details-annonce/details-annonce-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsAnnoncePageRoutingModule": () => (/* binding */ DetailsAnnoncePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _details_annonce_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-annonce.page */ 6042);




const routes = [
    {
        path: '',
        component: _details_annonce_page__WEBPACK_IMPORTED_MODULE_0__.DetailsAnnoncePage
    }
];
let DetailsAnnoncePageRoutingModule = class DetailsAnnoncePageRoutingModule {
};
DetailsAnnoncePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsAnnoncePageRoutingModule);



/***/ }),

/***/ 328:
/*!*************************************************************************!*\
  !*** ./src/app/pages/details/details-annonce/details-annonce.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsAnnoncePageModule": () => (/* binding */ DetailsAnnoncePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _details_annonce_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-annonce-routing.module */ 351);
/* harmony import */ var _details_annonce_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-annonce.page */ 6042);







let DetailsAnnoncePageModule = class DetailsAnnoncePageModule {
};
DetailsAnnoncePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _details_annonce_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsAnnoncePageRoutingModule
        ],
        declarations: [_details_annonce_page__WEBPACK_IMPORTED_MODULE_1__.DetailsAnnoncePage]
    })
], DetailsAnnoncePageModule);



/***/ }),

/***/ 6042:
/*!***********************************************************************!*\
  !*** ./src/app/pages/details/details-annonce/details-annonce.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsAnnoncePage": () => (/* binding */ DetailsAnnoncePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _details_annonce_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-annonce.page.html?ngResource */ 3993);
/* harmony import */ var _details_annonce_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-annonce.page.scss?ngResource */ 434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let DetailsAnnoncePage = class DetailsAnnoncePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        const tabBar = document.getElementById('app-tab-bar');
        if (tabBar !== null) {
            tabBar.style.display = 'none';
        }
    }
    navBack() {
        this.navCtrl.back();
    }
};
DetailsAnnoncePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
DetailsAnnoncePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-details-annonce',
        template: _details_annonce_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_details_annonce_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailsAnnoncePage);



/***/ }),

/***/ 434:
/*!************************************************************************************!*\
  !*** ./src/app/pages/details/details-annonce/details-annonce.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLWFubm9uY2UucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 3993:
/*!************************************************************************************!*\
  !*** ./src/app/pages/details/details-annonce/details-annonce.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-row slot=\"fixed\">\n    <ion-fab style=\"margin-top:5px\" horizontal=\"start\" (click)=\"navBack()\">\n      <ion-fab-button color=\"light\">\n          <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"danger\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    <ion-fab style=\"margin-top:5px\" horizontal=\"end\">\n      <ion-fab-button color=\"light\">\n        <ion-icon name=\"heart-outline\" size=\"large\" slot=\"end\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n    \n    </ion-row>\n    <ion-card style=\"width: 100%;padding:0;margin:0\">\n      <ion-img src=\"https://www.dreamhost.com/blog/wp-content/uploads/2019/06/afa314e6-1ae4-46c5-949e-c0a77f042e4f_DreamHost-howto-prod-descrips-full-750x500.jpeg\"></ion-img>\n     </ion-card>\n     <ion-grid style=\"width: 100%;padding:0;margin:0\">\n        <ion-item lines=\"none\" style=\"margin-top:10px\">\n          <ion-text style=\"font-weight: bold;font-size:1.3em\">L'orphelinat qui s'est transforme</ion-text>\n        </ion-item>\n        <ion-item>\n          <ion-text style=\"color:gray;\"> publie il y'a 4 heures</ion-text>\n        </ion-item>\n          <ion-item lines=\"none\" style=\"margin:0;padding:0\">\n            <ion-col size=\"12\" style=\"margin:0;padding:0\">\n            <ion-text style=\"color:gray;margin-top:10px ;\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</ion-text>\n            </ion-col>\n          </ion-item>\n          <ion-item style=\"width:100%;margin-top:15px\" lines=\"none\">\n            <ion-thumbnail slot=\"start\" >\n              <img style=\"border-radius:10px\" src=\"https://i.pinimg.com/564x/44/9e/5e/449e5e93c14f34fb7b90559e4f9908ab.jpg\" />\n            </ion-thumbnail>\n            <ion-col style=\"text-align: left\">\n              <ion-row>\n               <ion-text style=\"font-weight: bold\">Les Armandins </ion-text>\n              </ion-row>\n              <ion-row>\n                <ion-text style=\"color:gray\"> association carritative</ion-text>\n              </ion-row>\n            </ion-col>\n            <ion-icon name=\"chevron-forward-outline\" size=\"large\" slot=\"end\"></ion-icon>\n          </ion-item>\n     </ion-grid>\n     <div style=\"margin-bottom:10%\"></div>\n</ion-content>\n<ion-card style=\"padding:0;margin:0\">\n  <ion-row>\n    <ion-col size=\"2\">\n      <ion-thumbnail>\n      <img style=\"border-radius:10px\" src=\"https://i.pinimg.com/564x/44/9e/5e/449e5e93c14f34fb7b90559e4f9908ab.jpg\" />\n      </ion-thumbnail>\n    </ion-col>\n    <ion-col size=\"5\"class=\"ion-margin-top\">\n            <ion-text style=\"font-weight: bold\">Les Armandins </ion-text>\n    </ion-col>\n    <ion-col size=\"5\">\n      <ion-chip color=\"warning\" style=\"padding: 20px;\">\n        <img src=\"../../../../assets/images/gift.png\">\n        <ion-text>Soutenir</ion-text>\n    </ion-chip>\n    </ion-col>\n    \n      \n  </ion-row>\n  \n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details_details-annonce_details-annonce_module_ts.js.map