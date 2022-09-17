"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_associations_associations_module_ts"],{

/***/ 9837:
/*!************************************************************************!*\
  !*** ./src/app/pages/home/associations/associations-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssociationsPageRoutingModule": () => (/* binding */ AssociationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _associations_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./associations.page */ 1374);




const routes = [
    {
        path: '',
        component: _associations_page__WEBPACK_IMPORTED_MODULE_0__.AssociationsPage
    }
];
let AssociationsPageRoutingModule = class AssociationsPageRoutingModule {
};
AssociationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AssociationsPageRoutingModule);



/***/ }),

/***/ 6359:
/*!****************************************************************!*\
  !*** ./src/app/pages/home/associations/associations.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssociationsPageModule": () => (/* binding */ AssociationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _associations_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./associations-routing.module */ 9837);
/* harmony import */ var _associations_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./associations.page */ 1374);







let AssociationsPageModule = class AssociationsPageModule {
};
AssociationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _associations_routing_module__WEBPACK_IMPORTED_MODULE_0__.AssociationsPageRoutingModule
        ],
        declarations: [_associations_page__WEBPACK_IMPORTED_MODULE_1__.AssociationsPage]
    })
], AssociationsPageModule);



/***/ }),

/***/ 1374:
/*!**************************************************************!*\
  !*** ./src/app/pages/home/associations/associations.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssociationsPage": () => (/* binding */ AssociationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _associations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./associations.page.html?ngResource */ 9081);
/* harmony import */ var _associations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./associations.page.scss?ngResource */ 1340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);






let AssociationsPage = class AssociationsPage {
    constructor(manageDataService) {
        this.manageDataService = manageDataService;
        /*------------------------------------VARIABLES------------------------------------*/
        this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.storage;
        this.Annonces = null;
        this.Mouvements = null;
        this.id = null;
        this.selectedSegment = 'annonces';
        this.testtext = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        this.id = JSON.parse(localStorage.getItem('mydata')).id;
        setInterval(() => {
            const tabBar = document.getElementById('app-tab-bar');
            tabBar.style.display = 'flex';
        }, 100);
    }
    ngOnInit() {
        this.manageDataService.getAnnonces().toPromise().then(data => {
            this.Annonces = data;
        });
        this.manageDataService.getMouvements().toPromise().then(data => {
            this.Mouvements = data;
        });
    }
    /*------------------------------------FUNCTIONS------------------------------------*/
    segmentChanged(event) {
        this.selectedSegment = event.target.value;
    }
};
AssociationsPage.ctorParameters = () => [
    { type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__.ManageDataService }
];
AssociationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-associations',
        template: _associations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_associations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AssociationsPage);



/***/ }),

/***/ 1340:
/*!***************************************************************************!*\
  !*** ./src/app/pages/home/associations/associations.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = ".logo .title {\n  margin-left: 2%;\n  text-align: left;\n  color: #eb445a;\n  font-family: \"Rubik Glitch\";\n  font-size: 2em;\n  margin-bottom: 2%;\n}\n\n.title {\n  padding: 0;\n  margin: 0;\n  font-size: 0.7em;\n}\n\nion-chip {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc29jaWF0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoiYXNzb2NpYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICAgICYgLnRpdGxle1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjZWI0NDVhO1xuICAgIGZvbnQtZmFtaWx5OidSdWJpayBHbGl0Y2gnO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO31cbn1cblxuLnRpdGxle1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG59XG5pb24tY2hpcHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuIl19 */";

/***/ }),

/***/ 9081:
/*!***************************************************************************!*\
  !*** ./src/app/pages/home/associations/associations.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-row style=\"width: 100%;\">\n    <ion-col class=\"logo\" size=\"10\">\n      <ion-text class=\"title\">BRIDGE</ion-text>\n      \n    </ion-col>\n    <ion-col>\n      <ion-col size=\"2\" style=\"text-align:center;margin-left:5%\"> \n        <ion-icon name=\"notifications\" size=\"large\" color=\"warning\"></ion-icon>\n        <ion-badge style=\"position:absolute;top:0;right:0\" color=\"danger\">2</ion-badge>\n      </ion-col>\n    </ion-col>\n    <!-- <ion-col>\n      <ion-row style=\"width:100%\">\n        <ion-col size=\"3\" [routerLink]=\"['/profil-donateur',id]\" style=\"text-align:left;height: 100%;\">\n          <ion-icon name=\"person-circle-outline\" size=\"large\" color=\"danger\" ></ion-icon>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text style=\"color:gray;font-weight: bold;position:absolute;top:30%;\">{{myData.name | slice:0:15}}&ensp;{{myData.surname | slice:0:10}}</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col> -->\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-segment  scrollable>\n       <ion-chip>\n        <ion-icon name=\"options-outline\" size=\"large\"></ion-icon>\n        <ion-text>Filter</ion-text>\n       </ion-chip>\n       <ion-chip>\n       <ion-text>Category</ion-text>\n       <ion-icon name=\"chevron-down-outline\"></ion-icon>\n       </ion-chip>\n      </ion-segment>\n    </ion-col>\n  </ion-row>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" [value]=\"selectedSegment\" color=\"danger\">\n    <ion-segment-button value=\"annonces\">\n      <ion-label>Annonces</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"evenements\">\n      <ion-label>Evenements</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"demandes\">\n      <ion-label>Demandes</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content>\n    <ion-list *ngIf=\"selectedSegment=='annonces'\">\n      <ion-card *ngFor=\"let annonce of Annonces\" [routerLink]=\"['detailsAnnonce',1]\">\n        <ion-img [src]=\"annonce.media.length>0?storage+annonce.media[0].filePath:'../../../../assets/images/user.png'\"></ion-img>\n        <ion-item style=\"width:100%;\" lines=\"none\" class=\"ion-no-padding ion-no-margin\">\n          <ion-thumbnail class=\"ion-margin-start\" slot=\"start\" >\n            <img style=\"border-radius:10px\" [src]=\"annonce.association.media.length>0?storage+annonce.association.media[0].filePath:'../../../../assets/images/user.png'\" />\n          </ion-thumbnail>\n          <ion-col style=\"text-align: left\">\n            <ion-row >\n             <ion-text style=\"font-weight: bold\">{{annonce.association.name}}</ion-text>\n            </ion-row >\n            <ion-row style=\"margin-top:2%\">\n              <ion-text style=\"color:gray\">{{annonce.association.type}}</ion-text>\n            </ion-row>\n          </ion-col>\n        </ion-item>\n        <ion-item style=\"width:100%\" lines=\"none\">\n          <ion-text style=\"font-weight:bold;text-align: center;\">{{annonce.title | slice:0:30}}{{annonce.title.length > 30 ? '&hellip;':'' }}</ion-text>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-text style=\"color:gray\">\n          {{annonce.intitule| slice:0:200}}{{annonce.intitule.length > 200 ? '&hellip;':'' }}\n          </ion-text>\n        </ion-item>\n        <ion-item lines=\"none\" style=\"width:100%;margin-top: 15px;margin-bottom:15px\">\n          <ion-icon name=\"heart-outline\" size=\"large\"></ion-icon>\n          <ion-chip slot=\"end\" color=\"warning\" style=\"padding: 20px;\">\n              <img src=\"../../../../assets/images/gift.png\">\n              <ion-text >Soutenir</ion-text>\n          </ion-chip>\n        </ion-item>\n      </ion-card>\n    </ion-list>\n  <ion-grid *ngIf=\"selectedSegment=='evenements'\">\n    <ion-card *ngFor=\"let event of Mouvements\" lines=\"none\" [routerLink]=\"['detailsEvenement',1]\">\n      <ion-img [src]=\"event.media.length>0?storage+event.media[0].filePath:'../../../../assets/images/user.png'\"></ion-img>\n      <ion-item style=\"width:100%;\" lines=\"none\">\n        <ion-thumbnail slot=\"start\" >\n          <img style=\"border-radius:10px\" [src]=\"event.association.media.length>0?storage+event.association.media[0].filePath:'../../../../assets/images/user.png'\" />\n        </ion-thumbnail>\n        <ion-col style=\"text-align: left\">\n          <ion-row>\n           <ion-text style=\"font-weight: bold\">{{event.association.name}}</ion-text>\n          </ion-row>\n          <ion-row style=\"margin-top:2%\">\n            <ion-text style=\"color:gray\"> {{event.association.type}}</ion-text>\n          </ion-row>\n        </ion-col>\n      </ion-item>\n      <ion-item style=\"width:100%\" lines=\"none\">\n        <ion-text style=\"font-weight:bold;text-align: center;\">{{event.intitule | slice:0:30}}{{event.intitule > 30 ? '&hellip;':'' }}</ion-text>\n      </ion-item>\n      <ion-item style=\"width:100%;\" lines=\"none\">\n        <ion-icon name=\"today-outline\" size=\"large\" slot=\"start\"></ion-icon>\n        <ion-text style=\"color:gray\">{{event.date_rencontre}} | </ion-text>\n        <ion-text style=\"color:gray\"> &ensp;{{event.heure_debut}} - {{event.heure_fin}}</ion-text>\n      </ion-item>\n      <ion-item style=\"width:100%;\" lines=\"none\"> \n        <img src=\"../../../../assets/images/location.png\" slot=\"start\">\n        <ion-text style=\"color:gray\">yaounde , bastos , marche central</ion-text>\n      </ion-item>\n      <ion-item lines=\"none\" style=\"margin-top:10px\">\n        <ion-text style=\"color:gray\">\n        {{event.description| slice:0:200}}{{event.description.length > 200 ? '&hellip;':'' }}\n        </ion-text>\n      </ion-item>\n      <ion-item lines=\"none\" style=\"width:100%;margin-top: 15px;margin-bottom:15px\">\n        <ion-button expand=\"block\" color=\"success\"> Participer</ion-button>\n        <ion-chip slot=\"end\" color=\"warning\" style=\"padding: 20px;\">\n            <img src=\"../../../../assets/images/gift.png\">\n            <ion-text>Soutenir</ion-text>\n        </ion-chip>\n      </ion-item>\n    </ion-card>\n     </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_associations_associations_module_ts.js.map