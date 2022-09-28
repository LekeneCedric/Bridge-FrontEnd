"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_associations_associations_module_ts"],{

/***/ 49837:
/*!************************************************************************!*\
  !*** ./src/app/pages/home/associations/associations-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssociationsPageRoutingModule": () => (/* binding */ AssociationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _associations_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./associations.page */ 21374);




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

/***/ 36359:
/*!****************************************************************!*\
  !*** ./src/app/pages/home/associations/associations.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssociationsPageModule": () => (/* binding */ AssociationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _associations_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./associations-routing.module */ 49837);
/* harmony import */ var _associations_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./associations.page */ 21374);







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

/***/ 21374:
/*!**************************************************************!*\
  !*** ./src/app/pages/home/associations/associations.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssociationsPage": () => (/* binding */ AssociationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _associations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./associations.page.html?ngResource */ 99081);
/* harmony import */ var _associations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./associations.page.scss?ngResource */ 51340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 58027);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! javascript-time-ago/locale/fr */ 8996);
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! javascript-time-ago */ 20488);








let AssociationsPage = class AssociationsPage {
    constructor(manageDataService) {
        this.manageDataService = manageDataService;
        /*------------------------------------VARIABLES------------------------------------*/
        this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.storage;
        this.Annonces = null;
        this.Mouvements = null;
        this.Besoins = null;
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
        javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"].addDefaultLocale(javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_5__["default"]);
        this.manageDataService.getAnnonces().toPromise().then(data => {
            this.Annonces = data;
        });
        this.manageDataService.getMouvements().toPromise().then(data => {
            this.Mouvements = data;
        });
        this.manageDataService.getBesoins().toPromise().then(data => {
            this.Besoins = data;
        });
    }
    /*------------------------------------FUNCTIONS------------------------------------*/
    timeAgo(created_at) {
        const timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"]('fr-EU');
        const elapsedTime = timeAgo.format(new Date(Date.parse(created_at) - 60 * 1000));
        return elapsedTime;
    }
    segmentChanged(event) {
        this.selectedSegment = event.target.value;
    }
    doRefresh(event) {
        setTimeout(() => {
            this.ngOnInit();
            event.target.complete();
        }, 500);
    }
    like(id_annonce) {
        const data = {
            donateur_id: this.id,
            annonce_id: id_annonce
        };
        this.manageDataService.LikerAnnonce(data).toPromise().then((data) => {
            this.ngOnInit();
        });
    }
    dislike(id_annonce) {
        this.manageDataService.disLikerAnnonce(id_annonce).toPromise().then((data) => {
            this.ngOnInit();
        });
    }
};
AssociationsPage.ctorParameters = () => [
    { type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__.ManageDataService }
];
AssociationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-associations',
        template: _associations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_associations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AssociationsPage);



/***/ }),

/***/ 51340:
/*!***************************************************************************!*\
  !*** ./src/app/pages/home/associations/associations.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = ".logo .title {\n  margin-left: 2%;\n  text-align: left;\n  color: #eb445a;\n  font-family: \"Rubik Glitch\";\n  font-size: 2em;\n  margin-bottom: 2%;\n}\n\n.title {\n  padding: 0;\n  margin: 0;\n  font-size: 0.7em;\n}\n\nion-chip {\n  border-radius: 10px;\n}\n\nion-button[shape=circle] {\n  --border-radius: 50%;\n  width: 36px;\n  height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc29jaWF0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiYXNzb2NpYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICAgICYgLnRpdGxle1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjZWI0NDVhO1xuICAgIGZvbnQtZmFtaWx5OidSdWJpayBHbGl0Y2gnO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO31cbn1cblxuLnRpdGxle1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG59XG5pb24tY2hpcHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pb24tYnV0dG9uW3NoYXBlPWNpcmNsZV0ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMzZweDtcbn0iXX0= */";

/***/ }),

/***/ 99081:
/*!***************************************************************************!*\
  !*** ./src/app/pages/home/associations/associations.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-row style=\"width: 100%;\">\n    <ion-col class=\"logo\" size=\"10\">\n      <ion-text class=\"title\">BRIDGE</ion-text>\n      \n    </ion-col>\n    <ion-col>\n      <ion-col size=\"2\" style=\"text-align:center;margin-left:5%\"> \n        <ion-icon name=\"notifications\" size=\"large\" color=\"warning\"></ion-icon>\n        <ion-badge style=\"position:absolute;top:0;right:0\" color=\"danger\">2</ion-badge>\n      </ion-col>\n    </ion-col>\n  </ion-row>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" [value]=\"selectedSegment\" color=\"danger\">\n    <ion-segment-button value=\"annonces\">\n      <ion-label>Annonces</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"evenements\">\n      <ion-label>Evenements</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"besoins\">\n      <ion-label>Besoins</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content color=\"danger\"></ion-refresher-content>\n  </ion-refresher>\n    <ion-list *ngIf=\"selectedSegment=='annonces'\">\n      <ion-card *ngFor=\"let annonce of Annonces\">\n        <div [routerLink]=\"['/details-annonce',annonce.id]\" style=\"padding:0;margin:0;height:180px;width:100%;background-size:cover;background-position: center;\n        background-image: url({{annonce.media.length>0?storage+annonce.media[0].filePath:'../../../../assets/images/user.png'}})\">\n        </div>\n        <ion-row style=\"width:100%\" class=\"ion-margin-horizontal\">\n          <ion-col size=\"1\">\n            <ion-icon *ngIf=\"annonce.isLike==false\" (click)=\"like(annonce.id)\"  name=\"heart-outline\" size=\"large\" ></ion-icon>\n            <ion-icon *ngIf=\"annonce.isLike==true\" (click)=\"dislike(annonce.id)\"  name=\"heart\" color=\"danger\" size=\"large\" ></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-row style=\"width:100%\" class=\"ion-margin-horizontal\">\n              <ion-text style=\"margin-top:5px;font-weight: bold;color:black;font-size: 1.3em;\">{{annonce.nbLikes}} &ensp;&ensp; <strong style=\"font-weight:5em\">J'aime</strong></ion-text>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n       \n        <ion-row class=\"ion-margin-horizontal\" style=\"width:100%\" [routerLink]=\"['/details-annonce',annonce.id]\">\n          <ion-text style=\"font-weight:bold;color:black;font-size: 1.5em;\">{{annonce.title |lowercase |slice:0:30 }}{{annonce.title.length > 30 ? '&hellip;':'' }}</ion-text>\n        </ion-row>\n        <ion-item lines=\"none\" [routerLink]=\"['/details-annonce',annonce.id]\">\n          <ion-text style=\"color:rgb(0, 0, 0);font-size:1em\">\n          {{annonce.intitule| slice:0:200}}{{annonce.intitule.length > 200 ? '&hellip;':'' }}\n          </ion-text>\n        </ion-item>\n        <ion-row class=\"ion-margin-horizontal\" style=\"width:100%\" [routerLink]=\"['/details-annonce',annonce.id]\">\n          <ion-text>\n            Publie {{timeAgo(annonce.created_at)}}\n          </ion-text>\n        </ion-row>\n        <ion-item  [routerLink]=\"['/details-association',annonce.association.id]\" style=\"width:100%;\" lines=\"none\" class=\"ion-no-padding ion-no-margin\">\n          <ion-thumbnail class=\"ion-margin-start\" slot=\"start\" >\n            <img style=\"border-radius:10px\" [src]=\"annonce.association.media.length>0?storage+annonce.association.media[0].filePath:'../../../../assets/images/user.png'\" />\n          </ion-thumbnail>\n          <ion-col style=\"text-align: left\">\n            <ion-row >\n             <ion-text style=\"font-weight: bold;font-size: 1.1em;\">{{annonce.association.name | lowercase}}</ion-text>\n            </ion-row >\n            <ion-row style=\"margin-top:2%\">\n              <ion-text style=\"color:gray;font-size:0.8em\">{{annonce.association.type |slice:0:30}}{{annonce.association.type.length>30?'....':''}}</ion-text>\n            </ion-row >\n          </ion-col>\n        </ion-item>\n      </ion-card>\n      \n    </ion-list>\n  <ion-grid *ngIf=\"selectedSegment=='evenements'\">\n    <ion-card *ngFor=\"let event of Mouvements\" lines=\"none\" class=\"ion-padding-bottom\">\n      <div  [routerLink]=\"['/details-evenement',event.id]\" style=\"padding:0;position:relative;margin:0;height:180px;width:100%;background-size:cover;background-position: center;\n      background-image: url({{event.media.length>0?storage+event.media[0].filePath:'../../../../assets/images/user.png'}})\">\n    <ion-button style=\"position:absolute;float:right\" color=\"danger\">\n    <ion-icon name=\"walk-outline\"></ion-icon>\n    <ion-text color=\"light\" style=\"font-weight:bold;margin-top:7px\">{{event.nbparticipants}}&ensp;participants</ion-text>\n    </ion-button>  \n    </div>\n      <ion-row style=\"width:100%;margin-left:0\" class=\"ion-margin-horizontal\"  [routerLink]=\"['/details-evenement',event.id]\">\n        <ion-col size=\"12\">\n        <ion-row style=\"display:flex;\">\n          <ion-icon name=\"information-outline\" color=\"danger\" size=\"small\"></ion-icon>\n          <ion-text style=\"font-weight:bold;color:black;text-align: center;font-size: 1.2em;align-self: center;margin-left: 2%;\" class=\"ion-margin-horizontal\">{{event.intitule| lowercase | slice:0:30}}{{event.intitule > 30 ? '&hellip;':'' }}</ion-text>  \n        </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"width:100%;margin-left:0\" class=\"ion-margin-horizontal\"  [routerLink]=\"['/details-evenement',event.id]\">\n          <ion-col size=\"12\">\n          <ion-row style=\"display:flex;\">\n            <ion-icon name=\"today-outline\" size=\"small\" color=\"danger\"></ion-icon>\n            <ion-text style=\"color:rgb(0, 0, 0);font-size: 1.1em;align-self: center;margin-left: 2%;\"><strong>{{event.date_rencontre | date:'MMM d, y'}} &ensp;</strong> <strong>&ensp;|&ensp;</strong></ion-text>\n            <ion-text style=\"color:rgb(2, 2, 2);font-size:1.1em;align-self: center;\"> &ensp;de &ensp;<strong>{{event.heure_debut}}</strong> &ensp; a &ensp; <strong>{{event.heure_fin}}</strong></ion-text>\n          </ion-row>\n          </ion-col>\n        </ion-row>\n        <!------------------------->\n        <ion-row style=\"width:100%;margin-left:0;margin-top:0\" class=\"ion-margin-horizontal\" [routerLink]=\"['/details-evenement',event.id]\"> \n           <ion-col size=\"12\">\n            <ion-row style=\"display:flex;\">\n              <ion-icon name=\"location-outline\" size=\"small\" color=\"danger\"></ion-icon>\n              <ion-text style=\"color:rgb(0, 0, 0);font-size: 1.1em;align-self: center;margin-left: 2%;\">{{event.association.adresse}}</ion-text>\n            </ion-row>\n           </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-margin-horizontal\" style=\"width:100%\" [routerLink]=\"['/details-annonce',event.association.id]\">\n          <ion-text>\n            Publie {{timeAgo(event.created_at)}}\n          </ion-text>\n        </ion-row>\n          <ion-item style=\"width:100%;\" lines=\"none\"  [routerLink]=\"['/details-association',event.association.id]\">\n            <ion-thumbnail slot=\"start\" >\n              <img style=\"border-radius:10px\" [src]=\"event.association.media.length>0?storage+event.association.media[0].filePath:'../../../../assets/images/user.png'\" />\n            </ion-thumbnail>\n            <ion-col style=\"text-align: left\">\n              <ion-row>\n               <ion-text style=\"font-weight: bold\">{{event.association.name}}</ion-text>\n              </ion-row>\n              <ion-row style=\"margin-top:2%\">\n                <ion-text style=\"color:gray\"> {{event.association.type}}</ion-text>\n              </ion-row>\n            </ion-col>\n          </ion-item>\n    </ion-card>\n     </ion-grid>\n     <ion-grid *ngIf=\"selectedSegment=='besoins'\">\n       <ion-card *ngFor=\"let besoin of Besoins\" style=\"padding-bottom:0\" lines=\"none\" class=\"ion-padding-bottom\">\n        <ion-item style=\"width:100%;\" lines=\"none\"  [routerLink]=\"['/details-association',besoin.association.id]\">\n          <ion-thumbnail slot=\"start\" >\n            <img style=\"border-radius:10px\" [src]=\"besoin.association.media.length>0?storage+besoin.association.media[0].filePath:'../../../../assets/images/user.png'\" />\n          </ion-thumbnail>\n          <ion-col style=\"text-align: left\">\n            <ion-row>\n             <ion-text style=\"font-weight: bold\">{{besoin.association.name}}</ion-text>\n            </ion-row>\n            <ion-row style=\"margin-top:2%\">\n              <ion-text style=\"color:gray\"> {{besoin.association.type}}</ion-text>\n            </ion-row>\n          </ion-col>\n        </ion-item>\n        <!-- <ion-row class=\"ion-padding-horizontal \" *ngIf=\"besoin.quantite_actuelle>=besoin.quantite\">\n          <ion-text color=\"success\"> <strong>Besoin resolus</strong></ion-text>\n        </ion-row>\n        <ion-row class=\"ion-padding-horizontal \" *ngIf=\"besoin.quantite_actuelle<besoin.quantite\">\n          <ion-text color=\"danger\"> <strong>Besoin non resolus</strong></ion-text>\n        </ion-row> -->\n        <ion-row class=\"ion-margin-horizontal\" style=\"width:100%\">\n          <ion-text>\n            Publie {{timeAgo(besoin.created_at)}}\n          </ion-text>\n        </ion-row>\n        <ion-row class=\"ion-padding-horizontal ion-margin-bottom\">\n          <ion-text style=\"font-weight:bold\"><strong style=\"color:black\">Besoin : &ensp;</strong> {{besoin.title| lowercase|slice:0:30}}{{besoin.title.length>30?'...':''}} </ion-text>\n        </ion-row>\n        <ion-row class=\"ion-padding-horizontal ion-margin-top ion-margin-bottom\">\n           <ion-text style=\"font-weight:bold\"><strong style=\"color:black\">Description : &ensp;</strong> {{besoin.contenu|slice:0:150}}{{besoin.contenu.length>150?'...':''}}</ion-text>\n        </ion-row>\n        <ion-row class=\"ion-padding-horizontal\">\n        <ion-text><strong style=\"color:black\">Quantite : &ensp;</strong><strong style=\"color:#2dd36f\"*ngIf=\"besoin.quantite_actuelle>=besoin.quantite\">{{besoin.quantite_actuelle}}</strong>\n          <strong style=\"color:#ec566a\" *ngIf=\"besoin.quantite_actuelle<besoin.quantite\">{{besoin.quantite_actuelle}}</strong> &ensp; / &ensp; <strong>{{besoin.quantite}}</strong> </ion-text>\n        </ion-row>\n        <ion-item lines=\"none\" style=\"padding:0;margin:0\">\n          <ion-button shape=\"circle\" color=\"danger\" [routerLink]=\"['/creation-association-don',besoin.association.id,id,besoin.id]\" slot=\"end\">\n            <ion-icon size=\"large\" name=\"gift-outline\"></ion-icon>\n          </ion-button>\n        </ion-item>\n       </ion-card>\n     </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_associations_associations_module_ts.js.map