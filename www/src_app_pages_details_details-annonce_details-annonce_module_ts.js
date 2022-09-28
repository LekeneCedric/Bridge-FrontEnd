"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_details_details-annonce_details-annonce_module_ts"],{

/***/ 20351:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/details/details-annonce/details-annonce-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsAnnoncePageRoutingModule": () => (/* binding */ DetailsAnnoncePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _details_annonce_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-annonce.page */ 56042);




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

/***/ 10328:
/*!*************************************************************************!*\
  !*** ./src/app/pages/details/details-annonce/details-annonce.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsAnnoncePageModule": () => (/* binding */ DetailsAnnoncePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _details_annonce_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-annonce-routing.module */ 20351);
/* harmony import */ var _details_annonce_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-annonce.page */ 56042);







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

/***/ 56042:
/*!***********************************************************************!*\
  !*** ./src/app/pages/details/details-annonce/details-annonce.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsAnnoncePage": () => (/* binding */ DetailsAnnoncePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _details_annonce_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-annonce.page.html?ngResource */ 23993);
/* harmony import */ var _details_annonce_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-annonce.page.scss?ngResource */ 50434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 58027);
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! javascript-time-ago */ 20488);
/* harmony import */ var javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! javascript-time-ago/locale/fr */ 8996);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);










let DetailsAnnoncePage = class DetailsAnnoncePage {
    constructor(navCtrl, route, manageDataService) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.manageDataService = manageDataService;
        this.slideOpts = {
            initialSlide: 0,
            speed: 1000,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                stopOnLastSlide: false
            }
        };
        this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.storage;
        this.id = null;
        this.Annonce = null;
    }
    ngOnInit() {
        this.myId = JSON.parse(localStorage.getItem('mydata')).id;
        javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"].addDefaultLocale(javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_5__["default"]);
        this.id = this.route.snapshot.params['id'];
        this.AnnonceInfo();
        console.log(this.id);
        const tabBar = document.getElementById('app-tab-bar');
        if (tabBar !== null) {
            tabBar.style.display = 'none';
        }
    }
    /*-----------------------FUNCTIONS------------------*/
    timeAgo(created_at) {
        const timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"]('fr-EU');
        const elapsedTime = timeAgo.format(new Date(Date.parse(created_at) - 60 * 1000));
        return elapsedTime;
    }
    AnnonceInfo() {
        this.manageDataService.getOneAnnonce(this.IdRoute).toPromise().then(data => {
            this.Annonce = data;
            javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"].addDefaultLocale(javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_5__["default"]);
            const timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"]('fr-EU');
            this.elapsedTime = timeAgo.format(new Date(Date.parse(data.created_at)));
        });
    }
    like(id_annonce) {
        const data = {
            donateur_id: this.myId,
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
    get IdRoute() {
        return this.id;
    }
    navBack() {
        this.navCtrl.back();
    }
};
DetailsAnnoncePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__.ManageDataService }
];
DetailsAnnoncePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-details-annonce',
        template: _details_annonce_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_details_annonce_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailsAnnoncePage);



/***/ }),

/***/ 50434:
/*!************************************************************************************!*\
  !*** ./src/app/pages/details/details-annonce/details-annonce.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ".imgProduct {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMtYW5ub25jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0FBQUoiLCJmaWxlIjoiZGV0YWlscy1hbm5vbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmltZ1Byb2R1Y3R7XG4gICAgd2lkdGg6IDEwMCU7XG4gfSJdfQ== */";

/***/ }),

/***/ 23993:
/*!************************************************************************************!*\
  !*** ./src/app/pages/details/details-annonce/details-annonce.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-icon (click)=\"navBack()\" name=\"chevron-back-outline\" size=\"large\" color=\"danger\" slot=\"start\"></ion-icon>\n    <ion-title *ngIf=\"Annonce!=null\" style=\"font-size:1.8em;font-weight:bolder\">\n      {{Annonce.title}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div *ngIf=\"Annonce!=null\">\n        <ion-slides pager=\"true\" [options]=\"slideOpts\" *ngIf=\"Annonce!=null\">\n          <ion-slide *ngFor=\"let img of Annonce.media\" style=\"max-height:150px\">\n            <ion-img [routerLink]=\"['/image',img.id]\"\n            [src]=\"storage+img.filePath\"\n              class=\"imgProduct\"></ion-img>\n          </ion-slide>\n          <ion-slide *ngIf=\"Annonce.media.length<1\" style=\"background-image:url('../../../../assets/images/empty.webp')\">\n          </ion-slide>\n        </ion-slides>\n       <ion-grid style=\"width: 100%;padding:0;margin:0\">\n          <ion-item>\n            <ion-text style=\"color:#acacac;\"> publie&ensp;<strong >{{elapsedTime}}</strong> </ion-text>\n          </ion-item>\n            <ion-item lines=\"none\" style=\"margin:0;padding:0;margin-top:5%\">\n              <ion-col size=\"12\" style=\"margin:0;padding:0\">\n              <ion-text style=\"color:rgb(0, 0, 0);margin-top:10px ;\">{{Annonce.intitule}}</ion-text>\n              </ion-col>\n            </ion-item>\n            <ion-row style=\"width:100%\">\n              <ion-item lines=\"none\"  style=\"width: 100%;\" *ngIf=\"Annonce.isLike==false\">\n                  <ion-text slot=\"end\" style=\"margin-top:10px\">{{Annonce.nbLikes}}</ion-text>\n                  <ion-icon slot=\"end\" (click)=\"like(Annonce.id)\"  name=\"heart-outline\" size=\"large\" ></ion-icon>\n              </ion-item>\n               <ion-item lines=\"none\"  style=\"width: 100%;\" *ngIf=\"Annonce.isLike==true\">\n                  <ion-text slot=\"end\" style=\"margin-top:10px\">{{Annonce.nbLikes}}</ion-text>\n                  <ion-icon slot=\"end\" (click)=\"dislike(Annonce.id)\"  name=\"heart\" color=\"danger\" size=\"large\" ></ion-icon>\n              </ion-item>\n            </ion-row>\n            \n       </ion-grid>\n       <div style=\"margin-bottom:10%\"></div>\n    </div>\n   \n</ion-content>\n<ion-card style=\"padding:0;margin:0\">\n  <ion-row>\n    <ion-col size=\"2\" *ngIf=\"Annonce!=null\">\n      <ion-thumbnail>\n      <img style=\"border-radius:10px\" [src]=\"Annonce.association.media.length>0?storage+Annonce.association.media[0].filePath:'../../../../assets/images/community.png'\" />\n      </ion-thumbnail>\n    </ion-col>\n    <ion-col size=\"5\"class=\"ion-margin-top\" *ngIf=\"Annonce!=null\">\n            <ion-text style=\"font-weight: bold;color: black;font-size: 1.3em;\">{{Annonce.association.name}}</ion-text>\n    </ion-col>\n    <ion-col size=\"5\">\n      <ion-chip color=\"warning\" style=\"padding: 20px;\">\n        <img src=\"../../../../assets/images/gift.png\">\n        <ion-text>Soutenir</ion-text>\n    </ion-chip>\n    </ion-col>\n    \n      \n  </ion-row>\n  \n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details_details-annonce_details-annonce_module_ts.js.map