"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_details_details-evenements_details-evenements_module_ts"],{

/***/ 8774:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/details/details-evenements/details-evenements-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsEvenementsPageRoutingModule": () => (/* binding */ DetailsEvenementsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _details_evenements_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-evenements.page */ 5013);




const routes = [
    {
        path: '',
        component: _details_evenements_page__WEBPACK_IMPORTED_MODULE_0__.DetailsEvenementsPage
    }
];
let DetailsEvenementsPageRoutingModule = class DetailsEvenementsPageRoutingModule {
};
DetailsEvenementsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsEvenementsPageRoutingModule);



/***/ }),

/***/ 3077:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/details/details-evenements/details-evenements.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsEvenementsPageModule": () => (/* binding */ DetailsEvenementsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _details_evenements_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-evenements-routing.module */ 8774);
/* harmony import */ var _details_evenements_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-evenements.page */ 5013);







let DetailsEvenementsPageModule = class DetailsEvenementsPageModule {
};
DetailsEvenementsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _details_evenements_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsEvenementsPageRoutingModule
        ],
        declarations: [_details_evenements_page__WEBPACK_IMPORTED_MODULE_1__.DetailsEvenementsPage]
    })
], DetailsEvenementsPageModule);



/***/ }),

/***/ 5013:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/details/details-evenements/details-evenements.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsEvenementsPage": () => (/* binding */ DetailsEvenementsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _details_evenements_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-evenements.page.html?ngResource */ 445);
/* harmony import */ var _details_evenements_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-evenements.page.scss?ngResource */ 3502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let DetailsEvenementsPage = class DetailsEvenementsPage {
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
DetailsEvenementsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
DetailsEvenementsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-details-evenements',
        template: _details_evenements_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_details_evenements_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailsEvenementsPage);



/***/ }),

/***/ 3502:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/details/details-evenements/details-evenements.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLWV2ZW5lbWVudHMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 445:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/details/details-evenements/details-evenements.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-row slot=\"fixed\">\n    <ion-fab style=\"margin-top:5px\" horizontal=\"start\" (click)=\"navBack()\">\n      <ion-fab-button color=\"light\">\n          <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"danger\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    <ion-fab style=\"margin-top:5px\" horizontal=\"end\" (click)=\"navBack()\">\n      <ion-fab-button color=\"light\">\n        <ion-icon name=\"heart-outline\" size=\"large\" slot=\"end\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n    \n    </ion-row>\n    <ion-card style=\"width: 100%;padding:0;margin:0\">\n      <ion-img src=\"https://www.dreamhost.com/blog/wp-content/uploads/2019/06/afa314e6-1ae4-46c5-949e-c0a77f042e4f_DreamHost-howto-prod-descrips-full-750x500.jpeg\"></ion-img>\n     </ion-card>\n     <ion-grid style=\"width: 100%;padding:0;margin:0\">\n        <ion-item lines=\"none\" style=\"margin-top:10px\">\n          <ion-text style=\"font-weight: bold;font-size:1.3em\">Marche sportive pour collecte de fonds afin d'aider les enfants handicapes</ion-text>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-text style=\"color:gray;\"> publie il y'a 4 heures</ion-text>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-text style=\"color:gray;\" slot=\"start\">Debut</ion-text>\n          <ion-text style=\"color:gray;font-weight: bold;\" >Mardi 29/09/2002 15h30</ion-text>\n        </ion-item>\n        <ion-item lines=\"none\">\n            <ion-text style=\"color:gray;\" slot=\"start\">Fin</ion-text>\n          <ion-text style=\"color:gray;font-weight: bold;\" >Mercredi 30/09/2022 16h15</ion-text>\n        </ion-item>\n        <ion-item>\n          <img src=\"../../../../assets//images/location.png\" alt=\"\">\n          <ion-text style=\"color:gray;font-weight: bold;\" >Cameroun-yaounde-cite verte</ion-text>\n        </ion-item>\n          <ion-item lines=\"none\" style=\"margin:0;padding:0\">\n            <ion-col size=\"12\" style=\"margin:0;padding:0\">\n            <ion-text style=\"color:gray;margin-top:10px ;\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</ion-text>\n            </ion-col>\n          </ion-item>\n          \n          <ion-item style=\"width:100%;margin-top:15px\" lines=\"none\">\n            <ion-thumbnail slot=\"start\" >\n              <img style=\"border-radius:10px\" src=\"https://i.pinimg.com/564x/44/9e/5e/449e5e93c14f34fb7b90559e4f9908ab.jpg\" />\n            </ion-thumbnail>\n            <ion-col style=\"text-align: left\">\n              <ion-row>\n               <ion-text style=\"font-weight: bold\">Les Armandins </ion-text>\n              </ion-row>\n              <ion-row>\n                <ion-text style=\"color:gray\"> association carritative</ion-text>\n              </ion-row>\n            </ion-col>\n            <ion-icon name=\"chevron-forward-outline\" size=\"large\" slot=\"end\"></ion-icon>\n          </ion-item>\n     </ion-grid>\n     <div style=\"margin-bottom:10%\"></div>\n</ion-content>\n<ion-card style=\"padding:0;margin:0\">\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-chip color=\"warning\" style=\"padding: 20px;\">\n        <img src=\"../../../../assets/images/gift.png\">\n        <ion-text>Soutenir</ion-text>\n    </ion-chip>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"block\" color=\"success\"> Participer</ion-button>\n    </ion-col>\n    \n      \n  </ion-row>\n  \n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details_details-evenements_details-evenements_module_ts.js.map