"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_settings_mes-favoris_mes-favoris_module_ts"],{

/***/ 72966:
/*!**************************************************************************!*\
  !*** ./src/app/pages/settings/mes-favoris/mes-favoris-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesFavorisPageRoutingModule": () => (/* binding */ MesFavorisPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _mes_favoris_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mes-favoris.page */ 68219);




const routes = [
    {
        path: '',
        component: _mes_favoris_page__WEBPACK_IMPORTED_MODULE_0__.MesFavorisPage
    }
];
let MesFavorisPageRoutingModule = class MesFavorisPageRoutingModule {
};
MesFavorisPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MesFavorisPageRoutingModule);



/***/ }),

/***/ 62039:
/*!******************************************************************!*\
  !*** ./src/app/pages/settings/mes-favoris/mes-favoris.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesFavorisPageModule": () => (/* binding */ MesFavorisPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _mes_favoris_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mes-favoris-routing.module */ 72966);
/* harmony import */ var _mes_favoris_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mes-favoris.page */ 68219);







let MesFavorisPageModule = class MesFavorisPageModule {
};
MesFavorisPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mes_favoris_routing_module__WEBPACK_IMPORTED_MODULE_0__.MesFavorisPageRoutingModule
        ],
        declarations: [_mes_favoris_page__WEBPACK_IMPORTED_MODULE_1__.MesFavorisPage]
    })
], MesFavorisPageModule);



/***/ }),

/***/ 68219:
/*!****************************************************************!*\
  !*** ./src/app/pages/settings/mes-favoris/mes-favoris.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesFavorisPage": () => (/* binding */ MesFavorisPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _mes_favoris_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mes-favoris.page.html?ngResource */ 65377);
/* harmony import */ var _mes_favoris_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mes-favoris.page.scss?ngResource */ 14166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 58027);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! javascript-time-ago/locale/fr */ 8996);
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! javascript-time-ago */ 20488);










let MesFavorisPage = class MesFavorisPage {
  constructor(manageDataService, navCtrl, alertController) {
    this.manageDataService = manageDataService;
    this.navCtrl = navCtrl;
    this.alertController = alertController;
    /*----------------------------------------VARIABLES--------------------------------*/

    this.AnnoncesFavoris = [];
    this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.storage;
  }

  ngOnInit() {
    javascript_time_ago__WEBPACK_IMPORTED_MODULE_5__["default"].addDefaultLocale(javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_6__["default"]);
    this.myId = JSON.parse(localStorage.getItem('mydata')).id;
    const tabBar = document.getElementById('app-tab-bar');

    if (tabBar !== null) {
      tabBar.style.display = 'none';
    }

    this.getAnnoncesFavoris();
  }
  /*---------------------------------------FUNCTIONS-------------------------------------*/


  timeAgo(created_at) {
    const timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_5__["default"]('fr-EU');
    const elapsedTime = timeAgo.format(new Date(Date.parse(created_at) - 60 * 1000));
    return elapsedTime;
  }

  getAnnoncesFavoris() {
    this.manageDataService.mesAnnoncesFavoris().toPromise().then(data => {
      this.AnnoncesFavoris = data;
    });
  }

  like(id_annonce) {
    const data = {
      donateur_id: this.myId,
      annonce_id: id_annonce
    };
    this.manageDataService.LikerAnnonce(data).toPromise().then(data => {
      this.ngOnInit();
    });
  }

  dislike(id_annonce) {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'vous vous engagez a retirer l\'annonce de vos favoris ? ',
        buttons: [{
          text: 'non',
          role: 'cancel',
          handler: () => {}
        }, {
          text: 'oui j\'ai compris',
          role: 'confirm',
          handler: () => {
            _this.manageDataService.disLikerAnnonce(id_annonce).toPromise().then(data => {
              _this.ngOnInit();
            });
          }
        }]
      });
      yield alert.present();
    })();
  }

  back() {
    this.navCtrl.back();
    const tabBar = document.getElementById('app-tab-bar');

    if (tabBar !== null) {
      tabBar.style.display = 'flex';
    }
  }

};

MesFavorisPage.ctorParameters = () => [{
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__.ManageDataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}];

MesFavorisPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-mes-favoris',
  template: _mes_favoris_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_mes_favoris_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MesFavorisPage);


/***/ }),

/***/ 14166:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/settings/mes-favoris/mes-favoris.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXMtZmF2b3Jpcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 65377:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/settings/mes-favoris/mes-favoris.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-icon name=\"chevron-back-outline\" slot=\"start\" size=\"large\" (click)=\"back()\" color=\"danger\"></ion-icon>\n    <ion-title>mes-favoris</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let annonce of AnnoncesFavoris\">\n    <div [routerLink]=\"['/details-annonce',annonce.annonce.id]\" style=\"padding:0;margin:0;height:180px;width:100%;background-size:cover;background-position: center;\n    background-image: url({{annonce.annonce.media.length>0?storage+annonce.annonce.media[0].filePath:'../../../../assets/images/user.png'}})\">\n    </div>\n    <ion-row style=\"width:100%\" class=\"ion-margin-horizontal\">\n      <ion-col size=\"1\">\n        <ion-icon (click)=\"dislike(annonce.annonce.id)\"  name=\"heart\" color=\"danger\" size=\"large\" ></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-row style=\"width:100%\" class=\"ion-margin-horizontal\">\n          <ion-text style=\"margin-top:5px;font-weight: bold;color:black;font-size: 1.3em;\">{{annonce.annonce.nbLikes}} &ensp;&ensp; <strong style=\"font-weight:5em\">J'aime</strong></ion-text>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n   \n    <ion-row class=\"ion-margin-horizontal\" style=\"width:100%\" [routerLink]=\"['/details-annonce',annonce.annonce.id]\">\n      <ion-text style=\"font-weight:bold;color:black;font-size: 1.5em;\">{{annonce.annonce.title |lowercase |slice:0:30 }}{{annonce.annonce.title.length > 30 ? '&hellip;':'' }}</ion-text>\n    </ion-row>\n    <ion-item lines=\"none\" [routerLink]=\"['/details-annonce',annonce.annonce.id]\">\n      <ion-text style=\"color:rgb(0, 0, 0);font-size:1em\">\n      {{annonce.annonce.intitule| slice:0:200}}{{annonce.annonce.intitule.length > 200 ? '&hellip;':'' }}\n      </ion-text>\n    </ion-item>\n    <ion-row class=\"ion-margin-horizontal\" style=\"width:100%\" [routerLink]=\"['/details-annonce.annonce',annonce.annonce.id]\">\n      <ion-text>\n        Publie {{timeAgo(annonce.annonce.created_at)}}\n      </ion-text>\n    </ion-row>\n    <ion-item  [routerLink]=\"['/details-association',annonce.annonce.association.id]\" style=\"width:100%;\" lines=\"none\" class=\"ion-no-padding ion-no-margin\">\n      <ion-thumbnail class=\"ion-margin-start\" slot=\"start\" >\n        <img style=\"border-radius:10px\" [src]=\"annonce.annonce.association.media.length>0?storage+annonce.annonce.association.media[0].filePath:'../../../../assets/images/user.png'\" />\n      </ion-thumbnail>\n      <ion-col style=\"text-align: left\">\n        <ion-row >\n         <ion-text style=\"font-weight: bold;font-size: 1.1em;\">{{annonce.annonce.association.name | lowercase}}</ion-text>\n        </ion-row >\n        <ion-row style=\"margin-top:2%\">\n          <ion-text style=\"color:gray;font-size:0.8em\">{{annonce.annonce.association.type |slice:0:30}}{{annonce.annonce.association.type.length>30?'....':''}}</ion-text>\n        </ion-row >\n      </ion-col>\n    </ion-item>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings_mes-favoris_mes-favoris_module_ts.js.map