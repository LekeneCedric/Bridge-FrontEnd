"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_settings_settings_module_ts"],{

/***/ 2760:
/*!***********************************************************!*\
  !*** ./src/app/pages/settings/settings-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 1902);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 7850:
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 2760);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 1902);







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
    })
], SettingsPageModule);



/***/ }),

/***/ 1902:
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 6364);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);







let SettingsPage = class SettingsPage {
    constructor(route, manageDataService) {
        this.route = route;
        this.manageDataService = manageDataService;
        /*------------------------------VARIABLES------------------------------*/
        this.id = null;
        this.mesInfo = null;
        this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.storage;
    }
    ngOnInit() {
        setTimeout(() => {
            this.manageDataService.getDonateur(this.id).toPromise()
                .then(data => {
                this.mesInfo = data;
            }).catch(err => {
            });
        }, 500);
        this.id = this.route.snapshot.params['id'];
    }
    /*------------------------------FUNCTIONS------------------------------*/
    get Id() { return this.id; }
    get MesInfo() { return this.mesInfo; }
    get Storage() { return this.storage; }
};
SettingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__.ManageDataService }
];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-settings',
        template: _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsPage);



/***/ }),

/***/ 8027:
/*!*************************************************************!*\
  !*** ./src/app/services/manage-data/manage-data.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageDataService": () => (/* binding */ ManageDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);




let ManageDataService = class ManageDataService {
    constructor(http) {
        this.http = http;
    }
    getDons() {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/dons';
        return this.http.get(api);
    }
    getOneDon(id) {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/dons/' + `${id}`;
        return this.http.get(api);
    }
    getDonSimilaires(id, category) {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/dons/' + `${id}/` + `${category}`;
        return this.http.get(api);
    }
    /*-------------------------DEMANDES---------------------------*/
    getDemandes() {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/demandes';
        return this.http.get(api);
    }
    getOneDemande(id) {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/demandes' + `/${id}`;
        return this.http.get(api);
    }
    /*-------------------------DONATEUR-----------------------------*/
    getDonateur(id) {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/donateurs' + `/${id}`;
        return this.http.get(api);
    }
};
ManageDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ManageDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ManageDataService);



/***/ }),

/***/ 297:
/*!**************************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 6364:
/*!**************************************************************!*\
  !*** ./src/app/pages/settings/settings.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <ion-grid *ngIf=\"MesInfo!=null\">\n    <ion-item style=\"width:100%;\"lines=\"none\" \n    [routerLink]=\"['/profil-donateur',Id]\">\n      <ion-thumbnail slot=\"start\" >\n        <img style=\"border-radius:10px\" [src]=\"Storage+MesInfo.media[0].filePath\" />\n      </ion-thumbnail>\n      <ion-col style=\"text-align: left\">\n        <ion-row>\n         <ion-text style=\"font-weight: bold\">{{MesInfo.name}} {{MesInfo.surname}}</ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-text style=\"color:gray\"> Consulter profil public</ion-text>\n        </ion-row>\n      </ion-col>\n      <ion-icon name=\"chevron-forward-outline\" size=\"large\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"ion-margin-horizontal ion-margin-vertical\" style=\"border-bottom: 1px solid rgb(212, 212, 212);padding-bottom:5%\">\n      <ion-col size=\"3\" class=\"ion-text-center\">\n        <ion-row style=\"width:100%\"><ion-text style=\"width:100%;color:rgb(0, 0, 0);font-weight: 800\">Dons</ion-text></ion-row>\n        <ion-row style=\"width:100%\"><ion-text color='danger' style=\"width:100%;margin-top:5px;font-weight: bolder\">{{MesInfo.dons}}</ion-text></ion-row>\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-text-center\">\n        <ion-row style=\"width:100%\"><ion-text style=\"width:100%;color:rgb(0, 0, 0);font-weight: 800\">Receptions</ion-text></ion-row>\n        <ion-row style=\"width:100%\"><ion-text color='danger' style=\"width:100%;margin-top:5px;font-weight: bolder\">0</ion-text></ion-row>\n      </ion-col>\n      <ion-col size=\"5\" class=\"ion-text-center\">\n        <ion-row style=\"width:100%\"><ion-text style=\"width:100%;color:rgb(0, 0, 0);font-weight: 800\">Associations</ion-text></ion-row>\n        <ion-row style=\"width:100%\"><ion-text color='danger' style=\"width:100%;margin-top:5px;font-weight: bolder\">{{MesInfo.nbassociations}}</ion-text></ion-row>\n      </ion-col>\n    </ion-item>\n    \n      \n    <ion-grid>\n      <ion-text color=\"danger\" style=\"margin-left:4%;font-weight: bold\">infos personelles</ion-text>\n      <ion-item lines=\"none\" style=\"padding-bottom:1%;border-bottom: 1px solid gray;\">\n        <ion-text slot=\"start\" >Mes annonces</ion-text>\n        <ion-icon name=\"megaphone-outline\" size=\"large\" slot=\"end\" color=\"danger\"></ion-icon>\n      </ion-item> \n      <ion-item lines=\"none\" style=\"padding-bottom:1%;border-bottom: 1px solid gray;\">\n        <ion-text slot=\"start\" >Mon niveau</ion-text>\n        <ion-icon name=\"trophy-outline\" size=\"large\" slot=\"end\"   color=\"danger\"></ion-icon>\n      </ion-item> \n    </ion-grid>\n    <ion-grid class=\"ion-margin-top\">\n      <ion-text  color=\"danger\" style=\"margin-left:4%;font-weight: bold\">activites</ion-text>\n      <ion-item lines=\"none\" style=\"padding-bottom:1%;border-bottom: 1px solid gray;\">\n        <ion-text slot=\"start\" >Mes favoris</ion-text>\n        <ion-icon name=\"heart-outline\" size=\"large\" slot=\"end\"  color=\"danger\"></ion-icon>\n      </ion-item> \n      <ion-item lines=\"none\" style=\"padding-bottom:1%;border-bottom: 1px solid gray;\">\n        <ion-text slot=\"start\" >Evenements participes</ion-text>\n        <ion-icon name=\"walk-outline\" size=\"large\" slot=\"end\"  color=\"danger\"></ion-icon>\n      </ion-item> \n    </ion-grid>\n\n    <ion-grid class=\"ion-margin-top\">\n      <ion-text  color=\"danger\" style=\"margin-left:4%;font-weight: bold\">support</ion-text>\n      <ion-item lines=\"none\" style=\"padding-bottom:1%;border-bottom: 1px solid gray;\">\n        <ion-text slot=\"start\">Aide,FAQ et conditions</ion-text>\n        <ion-icon name=\"book-outline\" size=\"large\" slot=\"end\"  color=\"danger\"></ion-icon>\n      </ion-item> \n    </ion-grid>\n\n\n  </ion-grid>\n \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings_settings_module_ts.js.map