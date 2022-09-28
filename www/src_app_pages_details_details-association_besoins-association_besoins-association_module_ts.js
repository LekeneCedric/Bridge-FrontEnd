"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_details_details-association_besoins-association_besoins-association_module_ts"],{

/***/ 67297:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/besoins-association/besoins-association-routing.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BesoinsAssociationPageRoutingModule": () => (/* binding */ BesoinsAssociationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _besoins_association_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./besoins-association.page */ 49625);




const routes = [
    {
        path: '',
        component: _besoins_association_page__WEBPACK_IMPORTED_MODULE_0__.BesoinsAssociationPage
    }
];
let BesoinsAssociationPageRoutingModule = class BesoinsAssociationPageRoutingModule {
};
BesoinsAssociationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BesoinsAssociationPageRoutingModule);



/***/ }),

/***/ 80678:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/besoins-association/besoins-association.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BesoinsAssociationPageModule": () => (/* binding */ BesoinsAssociationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _besoins_association_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./besoins-association-routing.module */ 67297);
/* harmony import */ var _besoins_association_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./besoins-association.page */ 49625);







let BesoinsAssociationPageModule = class BesoinsAssociationPageModule {
};
BesoinsAssociationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _besoins_association_routing_module__WEBPACK_IMPORTED_MODULE_0__.BesoinsAssociationPageRoutingModule
        ],
        declarations: [_besoins_association_page__WEBPACK_IMPORTED_MODULE_1__.BesoinsAssociationPage]
    })
], BesoinsAssociationPageModule);



/***/ }),

/***/ 49625:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/besoins-association/besoins-association.page.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BesoinsAssociationPage": () => (/* binding */ BesoinsAssociationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _besoins_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./besoins-association.page.html?ngResource */ 23359);
/* harmony import */ var _besoins_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./besoins-association.page.scss?ngResource */ 14721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 58027);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! javascript-time-ago/locale/fr */ 8996);
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! javascript-time-ago */ 20488);










let BesoinsAssociationPage = class BesoinsAssociationPage {
    constructor(route, manageDataService, navCtl) {
        this.route = route;
        this.manageDataService = manageDataService;
        this.navCtl = navCtl;
        /*____________________________________VARIABLES______________________________________________*/
        this.BesoinsResolus = [];
        this.BesoinsNonResolus = [];
        this.id_association = null;
        this.selectedSegment = 'non_resolus';
        this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.storage;
    }
    ngOnInit() {
        javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"].addDefaultLocale(javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_5__["default"]);
        this.id_association = this.route.snapshot.params.id;
        this.manageDataService.getBesoinsResolusAssociation(this.id_association).toPromise().then(data => {
            data.length > 0 ? this.BesoinsResolus = data : null;
        });
        this.manageDataService.getBesoinsNonResolusAssociation(this.id_association).toPromise().then(data => {
            data.length > 0 ? this.BesoinsNonResolus = data : null;
        });
    }
    /*___________________________________FUNCTIONS___________________________________________*/
    timeAgo(created_at) {
        const timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"]('fr-EU');
        const elapsedTime = timeAgo.format(new Date(Date.parse(created_at) - 60 * 1000));
        return elapsedTime;
    }
    navBack() {
        this.navCtl.back();
    }
    segmentChanged(event) {
        this.selectedSegment = event.target.value;
    }
};
BesoinsAssociationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__.ManageDataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController }
];
BesoinsAssociationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-besoins-association',
        template: _besoins_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_besoins_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BesoinsAssociationPage);



/***/ }),

/***/ 14721:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/besoins-association/besoins-association.page.scss?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZXNvaW5zLWFzc29jaWF0aW9uLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 23359:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/besoins-association/besoins-association.page.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-icon name=\"chevron-back\" size=\"large\" slot=\"start\" color=\"danger\" (click)=\"navBack()\"></ion-icon>\n    <ion-title>besoins-association</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" [value]=\"selectedSegment\" color=\"danger\">\n    <ion-segment-button value=\"non_resolus\">\n      <ion-label color=\"danger\">Non Resolus</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"resolus\">\n      <ion-label>Resolus</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  \n  <!-- Besoins Non resolus  -->\n  <ion-list *ngIf=\"selectedSegment=='non_resolus'\">\n    <ion-card *ngFor=\"let besoin of BesoinsNonResolus\" style=\"padding-bottom:0\" lines=\"none\" class=\"ion-padding-bottom\">\n     <ion-item style=\"width:100%;\" lines=\"none\"  [routerLink]=\"['/details-association',besoin.association.id]\">\n       <ion-thumbnail slot=\"start\" >\n         <img style=\"border-radius:10px\" [src]=\"besoin.association.media.length>0?storage+besoin.association.media[0].filePath:'../../../../assets/images/user.png'\" />\n       </ion-thumbnail>\n       <ion-col style=\"text-align: left\">\n         <ion-row>\n          <ion-text style=\"font-weight: bold\">{{besoin.association.name}}</ion-text>\n         </ion-row>\n         <ion-row style=\"margin-top:2%\">\n           <ion-text style=\"color:gray\"> {{besoin.association.type}}</ion-text>\n         </ion-row>\n       </ion-col>\n     </ion-item>\n     <!-- <ion-row class=\"ion-padding-horizontal \" *ngIf=\"besoin.quantite_actuelle>=besoin.quantite\">\n       <ion-text color=\"success\"> <strong>Besoin resolus</strong></ion-text>\n     </ion-row>\n     <ion-row class=\"ion-padding-horizontal \" *ngIf=\"besoin.quantite_actuelle<besoin.quantite\">\n       <ion-text color=\"danger\"> <strong>Besoin non resolus</strong></ion-text>\n     </ion-row> -->\n     <ion-row class=\"ion-margin-horizontal\" style=\"width:100%\">\n       <ion-text>\n         Publie {{timeAgo(besoin.created_at)}}\n       </ion-text>\n     </ion-row>\n     <ion-row class=\"ion-padding-horizontal ion-margin-bottom\">\n       <ion-text style=\"font-weight:bold\"><strong style=\"color:black\">Besoin : &ensp;</strong> {{besoin.title| lowercase|slice:0:30}}{{besoin.title.length>30?'...':''}} </ion-text>\n     </ion-row>\n     <ion-row class=\"ion-padding-horizontal ion-margin-top ion-margin-bottom\">\n        <ion-text style=\"font-weight:bold\"><strong style=\"color:black\">Description : &ensp;</strong> {{besoin.contenu|slice:0:150}}{{besoin.contenu.length>150?'...':''}}</ion-text>\n     </ion-row>\n     <ion-row class=\"ion-padding-horizontal\">\n     <ion-text><strong style=\"color:black\">Quantite : &ensp;</strong><strong style=\"color:#2dd36f\"*ngIf=\"besoin.quantite_actuelle>=besoin.quantite\">{{besoin.quantite_actuelle}}</strong>\n       <strong style=\"color:#ec566a\" *ngIf=\"besoin.quantite_actuelle<besoin.quantite\">{{besoin.quantite_actuelle}}</strong> &ensp; / &ensp; <strong>{{besoin.quantite}}</strong> </ion-text>\n     </ion-row>\n    </ion-card>\n  </ion-list>\n\n  <!-- Besoins Resolus  -->\n\n  <ion-list *ngIf=\"selectedSegment=='resolus'\">\n    <ion-card *ngFor=\"let besoin of BesoinsResolus\" style=\"padding-bottom:0\" lines=\"none\" class=\"ion-padding-bottom\">\n     <ion-item style=\"width:100%;\" lines=\"none\"  [routerLink]=\"['/details-association',besoin.association.id]\">\n       <ion-thumbnail slot=\"start\" >\n         <img style=\"border-radius:10px\" [src]=\"besoin.association.media.length>0?storage+besoin.association.media[0].filePath:'../../../../assets/images/user.png'\" />\n       </ion-thumbnail>\n       <ion-col style=\"text-align: left\">\n         <ion-row>\n          <ion-text style=\"font-weight: bold\">{{besoin.association.name}}</ion-text>\n         </ion-row>\n         <ion-row style=\"margin-top:2%\">\n           <ion-text style=\"color:gray\"> {{besoin.association.type}}</ion-text>\n         </ion-row>\n       </ion-col>\n     </ion-item>\n     <!-- <ion-row class=\"ion-padding-horizontal \" *ngIf=\"besoin.quantite_actuelle>=besoin.quantite\">\n       <ion-text color=\"success\"> <strong>Besoin resolus</strong></ion-text>\n     </ion-row>\n     <ion-row class=\"ion-padding-horizontal \" *ngIf=\"besoin.quantite_actuelle<besoin.quantite\">\n       <ion-text color=\"danger\"> <strong>Besoin non resolus</strong></ion-text>\n     </ion-row> -->\n     <ion-row class=\"ion-margin-horizontal\" style=\"width:100%\">\n       <ion-text>\n         Publie {{timeAgo(besoin.created_at)}}\n       </ion-text>\n     </ion-row>\n     <ion-row class=\"ion-padding-horizontal ion-margin-bottom\">\n       <ion-text style=\"font-weight:bold\"><strong style=\"color:black\">Besoin : &ensp;</strong> {{besoin.title| lowercase|slice:0:30}}{{besoin.title.length>30?'...':''}} </ion-text>\n     </ion-row>\n     <ion-row class=\"ion-padding-horizontal ion-margin-top ion-margin-bottom\">\n        <ion-text style=\"font-weight:bold\"><strong style=\"color:black\">Description : &ensp;</strong> {{besoin.contenu|slice:0:150}}{{besoin.contenu.length>150?'...':''}}</ion-text>\n     </ion-row>\n     <ion-row class=\"ion-padding-horizontal\">\n     <ion-text><strong style=\"color:black\">Quantite : &ensp;</strong><strong style=\"color:#2dd36f\"*ngIf=\"besoin.quantite_actuelle>=besoin.quantite\">{{besoin.quantite_actuelle}}</strong>\n       <strong style=\"color:#ec566a\" *ngIf=\"besoin.quantite_actuelle<besoin.quantite\">{{besoin.quantite_actuelle}}</strong> &ensp; / &ensp; <strong>{{besoin.quantite}}</strong> </ion-text>\n     </ion-row>\n    </ion-card>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details_details-association_besoins-association_besoins-association_module_ts.js.map