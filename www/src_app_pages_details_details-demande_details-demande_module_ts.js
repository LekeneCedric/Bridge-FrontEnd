"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_details_details-demande_details-demande_module_ts"],{

/***/ 6680:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/details/details-demande/details-demande-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsDemandePageRoutingModule": () => (/* binding */ DetailsDemandePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _details_demande_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-demande.page */ 8526);




const routes = [
    {
        path: '',
        component: _details_demande_page__WEBPACK_IMPORTED_MODULE_0__.DetailsDemandePage
    }
];
let DetailsDemandePageRoutingModule = class DetailsDemandePageRoutingModule {
};
DetailsDemandePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsDemandePageRoutingModule);



/***/ }),

/***/ 1969:
/*!*************************************************************************!*\
  !*** ./src/app/pages/details/details-demande/details-demande.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsDemandePageModule": () => (/* binding */ DetailsDemandePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _details_demande_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-demande-routing.module */ 6680);
/* harmony import */ var _details_demande_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-demande.page */ 8526);







let DetailsDemandePageModule = class DetailsDemandePageModule {
};
DetailsDemandePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _details_demande_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsDemandePageRoutingModule
        ],
        declarations: [_details_demande_page__WEBPACK_IMPORTED_MODULE_1__.DetailsDemandePage]
    })
], DetailsDemandePageModule);



/***/ }),

/***/ 8526:
/*!***********************************************************************!*\
  !*** ./src/app/pages/details/details-demande/details-demande.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsDemandePage": () => (/* binding */ DetailsDemandePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _details_demande_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-demande.page.html?ngResource */ 1991);
/* harmony import */ var _details_demande_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-demande.page.scss?ngResource */ 5278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! javascript-time-ago */ 488);
/* harmony import */ var javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! javascript-time-ago/locale/fr */ 8996);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);










let DetailsDemandePage = class DetailsDemandePage {
    constructor(navCtrl, route, manageDataService) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.manageDataService = manageDataService;
        /*---------------------------VARIABLES------------------------------*/
        this.id = null;
        this.demande = null;
        this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.storage;
    }
    ngOnInit() {
        this.id = JSON.parse(localStorage.getItem('mydata')).id;
        this.hideTabBar();
        this.detail_id = this.route.snapshot.params.id;
        this.manageDataService.getOneDemande(this.detail_id).toPromise().then(data => {
            this.demande = data;
            console.log(data.donateur.media[0].filePath);
            javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"].addDefaultLocale(javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_5__["default"]);
            const timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"]('fr-EU');
            this.elapsedTime = timeAgo.format(new Date(Date.parse(data.created_at)));
        }).catch(error => {
            console.log(error);
        });
    }
    /*--------------------------FUNCTIONS-------------------------------*/
    get myid() {
        return this.id;
    }
    hideTabBar() {
        const tabBar = document.getElementById('app-tab-bar');
        if (tabBar !== null) {
            tabBar.style.display = 'none';
        }
    }
    navBack() {
        this.navCtrl.back();
    }
};
DetailsDemandePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__.ManageDataService }
];
DetailsDemandePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-details-demande',
        template: _details_demande_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_details_demande_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailsDemandePage);



/***/ }),

/***/ 5278:
/*!************************************************************************************!*\
  !*** ./src/app/pages/details/details-demande/details-demande.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Roboto Mono\", monospace;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMtZGVtYW5kZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtBQUNKIiwiZmlsZSI6ImRldGFpbHMtZGVtYW5kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7O1xufSJdfQ== */";

/***/ }),

/***/ 1991:
/*!************************************************************************************!*\
  !*** ./src/app/pages/details/details-demande/details-demande.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <ion-icon (click)=\"navBack()\" name=\"chevron-back-outline\" size=\"large\" color=\"danger\"></ion-icon>\n     <ion-grid *ngIf=\"this.demande!=null\">\n        <ion-item lines=\"none\">\n          <ion-text style=\"font-weight: bold;font-size:1.3em\">{{demande.title}}</ion-text>\n          <ion-icon name=\"heart-outline\" size=\"large\" slot=\"end\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\"> \n          <ion-text style=\"font-weight: bold\"> publie {{elapsedTime}}</ion-text>\n        </ion-item>\n        \n        <ion-item lines=\"none\">\n          <img src=\"../../../../assets/images/information.png\" alt=\"\">\n          <ion-title>Informations</ion-title>\n        </ion-item>\n        <ion-item lines=\"none\">\n        <ion-col size=\"8\">\n         <ion-row><ion-text>Categorie</ion-text></ion-row>\n         <ion-text style=\"color:gray;margin-top:10px ;\">{{demande.category}}</ion-text>\n        </ion-col>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-col size=\"7\">\n           <ion-row><ion-text>Lieu</ion-text></ion-row>\n           <ion-text style=\"color:gray;margin-top:10px\">{{demande.adresse}}</ion-text>\n          </ion-col>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-col size=\"5\">\n              <ion-row><ion-text>Disponibilite</ion-text></ion-row>\n             <ion-text style=\"color:gray;margin-top:10px ;\">Flexible</ion-text>\n            </ion-col>\n          </ion-item>\n          \n          <ion-item-divider></ion-item-divider>\n          <ion-item lines=\"none\">\n            <ion-col size=\"12\">\n             <ion-row><ion-text>Description</ion-text></ion-row>\n            <ion-text style=\"color:gray;margin-top:10px ;\">{{demande.contenu}}</ion-text>\n            </ion-col>\n          </ion-item>\n          <ion-item-divider></ion-item-divider>\n          <ion-item style=\"width:100%;\" lines=\"none\" [routerLink]=\"['/profil-donateur',myid]\">\n            <ion-thumbnail slot=\"start\" >\n              <img style=\"border-radius:10px\" [src]=\"storage+demande.donateur.media[0].filePath\" />\n            </ion-thumbnail>\n            <ion-col style=\"text-align: left\">\n              <ion-row>\n               <ion-text style=\"font-weight: bold\">{{demande.donateur.name}} {{demande.donateur.surname}}</ion-text>\n              </ion-row>\n              <ion-row>\n                <ion-text style=\"color:gray\"> donateur / assoication</ion-text>\n              </ion-row>\n            </ion-col>\n            <ion-icon name=\"chevron-forward-outline\" size=\"large\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item-divider></ion-item-divider>\n          <ion-item lines=\"none\">\n          <ion-text style=\"font-weight: bold\">Partager cette annonce</ion-text>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-icon name=\"logo-whatsapp\" color=\"success\"></ion-icon>\n            <ion-icon name=\"ellipsis-horizontal-outline\" color=\"dark\" style=\"margin-left:10px\"></ion-icon>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-text>Localisation</ion-text>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d63693.27239988237!2d11.5080475!3d3.8467449!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1661874465059!5m2!1sfr!2scm\" width=\"600\" height=\"250\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\n          </ion-item>\n     </ion-grid>\n     <div style=\"margin-bottom:10%\"></div>\n</ion-content>\n<ion-card style=\"padding:0;margin:0\" *ngIf=\"demande!=null\">\n  <ion-row>\n    <ion-col size=\"2\">\n      <ion-thumbnail>\n      <img style=\"border-radius:10px\" [src]=\"storage+demande.donateur.media[0].filePath\" />\n      </ion-thumbnail>\n    </ion-col>\n    <ion-col size=\"5\"class=\"ion-margin-top\">\n            <ion-text style=\"font-weight: bold\">{{demande.donateur.name}} {{demande.donateur.surname}}</ion-text>\n    </ion-col>\n    <ion-col size=\"5\">\n      <ion-button expand=\"block\" color=\"danger\" routerLink=\"/menu/dons\">Contacter</ion-button>\n    </ion-col>\n    \n      \n  </ion-row>\n  \n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details_details-demande_details-demande_module_ts.js.map