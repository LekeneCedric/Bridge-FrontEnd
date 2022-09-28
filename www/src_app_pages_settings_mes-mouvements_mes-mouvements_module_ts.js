"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_settings_mes-mouvements_mes-mouvements_module_ts"],{

/***/ 35437:
/*!********************************************************************************!*\
  !*** ./src/app/pages/settings/mes-mouvements/mes-mouvements-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesMouvementsPageRoutingModule": () => (/* binding */ MesMouvementsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _mes_mouvements_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mes-mouvements.page */ 52801);




const routes = [
    {
        path: '',
        component: _mes_mouvements_page__WEBPACK_IMPORTED_MODULE_0__.MesMouvementsPage
    }
];
let MesMouvementsPageRoutingModule = class MesMouvementsPageRoutingModule {
};
MesMouvementsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MesMouvementsPageRoutingModule);



/***/ }),

/***/ 15312:
/*!************************************************************************!*\
  !*** ./src/app/pages/settings/mes-mouvements/mes-mouvements.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesMouvementsPageModule": () => (/* binding */ MesMouvementsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _mes_mouvements_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mes-mouvements-routing.module */ 35437);
/* harmony import */ var _mes_mouvements_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mes-mouvements.page */ 52801);







let MesMouvementsPageModule = class MesMouvementsPageModule {
};
MesMouvementsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mes_mouvements_routing_module__WEBPACK_IMPORTED_MODULE_0__.MesMouvementsPageRoutingModule
        ],
        declarations: [_mes_mouvements_page__WEBPACK_IMPORTED_MODULE_1__.MesMouvementsPage]
    })
], MesMouvementsPageModule);



/***/ }),

/***/ 52801:
/*!**********************************************************************!*\
  !*** ./src/app/pages/settings/mes-mouvements/mes-mouvements.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesMouvementsPage": () => (/* binding */ MesMouvementsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _mes_mouvements_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mes-mouvements.page.html?ngResource */ 56471);
/* harmony import */ var _mes_mouvements_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mes-mouvements.page.scss?ngResource */ 81236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 58027);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);








let MesMouvementsPage = class MesMouvementsPage {
    constructor(route, manageDataService, navCtrl) {
        this.route = route;
        this.manageDataService = manageDataService;
        this.navCtrl = navCtrl;
        /*------------------------------------_VARIABLES------------------------------*/
        this.MesMouvements = [];
        this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.storage;
    }
    ngOnInit() {
        const tabBar = document.getElementById('app-tab-bar');
        if (tabBar !== null) {
            tabBar.style.display = 'none';
        }
        this.getMesMouvements();
    }
    /*------------------------------FUNCTIONS------------------------------------*/
    getMesMouvements() {
        this.manageDataService.getMesMouvements().toPromise().then((data) => {
            this.MesMouvements = data;
        });
    }
    back() {
        this.navCtrl.back();
        const tabBar = document.getElementById('app-tab-bar');
        if (tabBar !== null) {
            tabBar.style.display = 'flex';
        }
    }
};
MesMouvementsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__.ManageDataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
MesMouvementsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-mes-mouvements',
        template: _mes_mouvements_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mes_mouvements_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MesMouvementsPage);



/***/ }),

/***/ 81236:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/settings/mes-mouvements/mes-mouvements.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXMtbW91dmVtZW50cy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 56471:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/settings/mes-mouvements/mes-mouvements.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-icon name=\"chevron-back-outline\" slot=\"start\" size=\"large\" (click)=\"back()\" color=\"danger\"></ion-icon>\n    <ion-title>mes-mouvements</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n  <ion-card *ngFor=\"let event of MesMouvements\" lines=\"none\" class=\"ion-padding-bottom\">\n    <div  [routerLink]=\"['/details-evenement',event.mouvement.id]\" style=\"padding:0;position:relative;margin:0;height:180px;width:100%;background-size:cover;background-position: center;\n    background-image: url({{event.mouvement.media.length>0?storage+event.mouvement.media[0].filePath:'../../../../assets/images/user.png'}})\">\n  <ion-button style=\"position:absolute;float:right\">\n  <ion-icon name=\"walk-outline\"></ion-icon>\n  <ion-text color=\"light\" style=\"font-weight:bold;margin-top:7px\">{{event.mouvement.nbparticipants}}&ensp;participants</ion-text>\n  </ion-button>  \n  </div>\n    <ion-item style=\"width:100%;\" lines=\"none\"  [routerLink]=\"['/details-association',event.mouvement.association.id]\">\n      <ion-thumbnail slot=\"start\" >\n        <img style=\"border-radius:10px\" [src]=\"event.mouvement.association.media.length>0?storage+event.mouvement.association.media[0].filePath:'../../../../assets/images/user.png'\" />\n      </ion-thumbnail>\n      <ion-col style=\"text-align: left\">\n        <ion-row>\n         <ion-text style=\"font-weight: bold\">{{event.mouvement.association.name}}</ion-text>\n        </ion-row>\n        <ion-row style=\"margin-top:2%\">\n          <ion-text style=\"color:gray\"> {{event.mouvement.association.type}}</ion-text>\n        </ion-row>\n      </ion-col>\n    </ion-item>\n    <ion-row style=\"width:100%;margin-left:0\" class=\"ion-margin-horizontal\"  [routerLink]=\"['/details-evenement',event.mouvement.id]\">\n      <ion-col size=\"12\">\n      <ion-row style=\"display:flex;\">\n        <ion-icon name=\"information-outline\" color=\"danger\" size=\"small\"></ion-icon>\n        <ion-text style=\"font-weight:bold;color:black;text-align: center;font-size: 1.2em;align-self: center;margin-left: 2%;\" class=\"ion-margin-horizontal\">{{event.mouvement.intitule | slice:0:30}}{{event.mouvement.intitule > 30 ? '&hellip;':'' }}</ion-text>  \n      </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"width:100%;margin-left:0\" class=\"ion-margin-horizontal\"  [routerLink]=\"['/details-evenement',event.mouvement.id]\">\n        <ion-col size=\"12\">\n        <ion-row style=\"display:flex;\">\n          <ion-icon name=\"today-outline\" size=\"small\" color=\"danger\"></ion-icon>\n          <ion-text style=\"color:gray;font-size: 1.1em;align-self: center;margin-left: 2%;\"><strong>{{event.mouvement.date_rencontre | date:'MMM d, y'}} &ensp;</strong> <strong>&ensp;|&ensp;</strong></ion-text>\n          <ion-text style=\"color:gray;font-size:1.1em;align-self: center;\"> &ensp;de &ensp;<strong>{{event.mouvement.heure_debut}}</strong> &ensp; a &ensp; <strong>{{event.mouvement.heure_fin}}</strong></ion-text>\n        </ion-row>\n        </ion-col>\n      </ion-row>\n      <!------------------------->\n      <ion-row style=\"width:100%;margin-left:0;margin-top:0\" class=\"ion-margin-horizontal\" [routerLink]=\"['/details-evenement',event.mouvement.id]\"> \n         <ion-col size=\"12\">\n          <ion-row style=\"display:flex;\">\n            <ion-icon name=\"location-outline\" size=\"small\" color=\"danger\"></ion-icon>\n            <ion-text style=\"color:gray;font-size: 1.1em;align-self: center;margin-left: 2%;\">{{event.mouvement.association.adresse}}</ion-text>\n          </ion-row>\n         </ion-col>\n      </ion-row>\n      <!-- <ion-row style=\"width:100%\">\n        <ion-col size=\"7\"></ion-col>\n        <ion-col size =\"5\">\n          <ion-button color=\"danger\"  [routerLink]=\"['/details-evenement',event.mouvement.id]\">\n            <ion-text>consulter</ion-text>\n          </ion-button>\n        </ion-col>\n        </ion-row> -->\n  </ion-card>\n</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings_mes-mouvements_mes-mouvements_module_ts.js.map