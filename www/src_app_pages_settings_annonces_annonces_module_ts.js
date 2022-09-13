"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_settings_annonces_annonces_module_ts"],{

/***/ 2069:
/*!********************************************************************!*\
  !*** ./src/app/pages/settings/annonces/annonces-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnoncesPageRoutingModule": () => (/* binding */ AnnoncesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _annonces_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./annonces.page */ 9498);




const routes = [
    {
        path: '',
        component: _annonces_page__WEBPACK_IMPORTED_MODULE_0__.AnnoncesPage
    }
];
let AnnoncesPageRoutingModule = class AnnoncesPageRoutingModule {
};
AnnoncesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AnnoncesPageRoutingModule);



/***/ }),

/***/ 5475:
/*!************************************************************!*\
  !*** ./src/app/pages/settings/annonces/annonces.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnoncesPageModule": () => (/* binding */ AnnoncesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _annonces_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./annonces-routing.module */ 2069);
/* harmony import */ var _annonces_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./annonces.page */ 9498);







let AnnoncesPageModule = class AnnoncesPageModule {
};
AnnoncesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _annonces_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnnoncesPageRoutingModule
        ],
        declarations: [_annonces_page__WEBPACK_IMPORTED_MODULE_1__.AnnoncesPage]
    })
], AnnoncesPageModule);



/***/ }),

/***/ 9498:
/*!**********************************************************!*\
  !*** ./src/app/pages/settings/annonces/annonces.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnoncesPage": () => (/* binding */ AnnoncesPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _annonces_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./annonces.page.html?ngResource */ 1013);
/* harmony import */ var _annonces_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./annonces.page.scss?ngResource */ 8745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! javascript-time-ago */ 488);
/* harmony import */ var javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! javascript-time-ago/locale/fr */ 8996);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);











let AnnoncesPage = class AnnoncesPage {
  constructor(route, manageDataService, navController, toast, alertController) {
    this.route = route;
    this.manageDataService = manageDataService;
    this.navController = navController;
    this.toast = toast;
    this.alertController = alertController;
    /*--------------------------------VARIABLES--------------------------------*/

    this.id = null;
    this.userInfo = null;
    this.selectedSegment = 'dons';
    this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.storage;
  }

  ngOnInit() {
    javascript_time_ago__WEBPACK_IMPORTED_MODULE_5__["default"].addDefaultLocale(javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_6__["default"]);
    this.id = this.route.snapshot.params['id'];
    this.manageDataService.getDonateur(this.Id).toPromise().then(data => {
      console.log(data);
      this.userInfo = data;
    }).catch(err => {
      console.log(err);
    });
  }
  /*--------------------------------FUNCTIONS----------------------------------------------------*/


  deleteDon(don) {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'deconnexion-alert',
        header: `voulez vous supprime ${don.titre} ?`,
        buttons: [{
          text: 'annuler',
          role: 'cancel',
          handler: () => {}
        }, {
          text: 'oui',
          role: 'confirm',
          handler: () => {
            _this.manageDataService.deleteDon(don.id).toPromise().then( /*#__PURE__*/function () {
              var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
                const toast = _this.toast.create({
                  message: `annonce de don supprime avec success`,
                  icon: 'information-circle',
                  duration: 1000,
                  color: "danger"
                });

                (yield toast).present();
              });

              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }()).catch( /*#__PURE__*/function () {
              var _ref2 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
                const toast = _this.toast.create({
                  message: `Erreur lors de la supression du don`,
                  icon: 'information-circle',
                  duration: 1000,
                  color: "warning"
                });

                (yield toast).present();
              });

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }()).finally(() => {
              _this.ngOnInit();
            });
          }
        }]
      });
      yield alert.present();
    })();
  }

  navBack() {
    this.navController.back();
  }

  timeAgo(created_at) {
    const timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_5__["default"]('fr-EU');
    const elapsedTime = timeAgo.format(new Date(Date.parse(created_at) - 60 * 1000));
    return elapsedTime;
  }

  image(don) {
    let url = '';
    don.media.length > 0 ? url = `${this.storage + don.media[0].filePath}` : url = '../../../../../../assets/images/empty.webp';
    return url;
  }

  refresh() {
    this.ngOnInit();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.refresh();
      event.target.complete();
    }, 500);
  }

  get Id() {
    return this.id;
  }

  segmentChanged(event) {
    this.selectedSegment = event.target.value;
  }

};

AnnoncesPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__.ManageDataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}];

AnnoncesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-annonces',
  template: _annonces_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_annonces_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AnnoncesPage);


/***/ }),

/***/ 8745:
/*!***********************************************************************!*\
  !*** ./src/app/pages/settings/annonces/annonces.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbm5vbmNlcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1013:
/*!***********************************************************************!*\
  !*** ./src/app/pages/settings/annonces/annonces.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon slot=\"start\" name=\"chevron-back-outline\" size=\"large\" (click)=\"navBack()\"></ion-icon>\n    <ion-text style=\"font-size:1.2em;\"> Mes annnonces</ion-text>\n  </ion-toolbar>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" [value]=\"selectedSegment\" color=\"danger\">\n    <ion-segment-button value=\"dons\">\n      <ion-label>Dons</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"demandes\">\n      <ion-label>Demandes</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" class=\"red\">\n    <ion-refresher-content color=\"danger\"></ion-refresher-content>\n  </ion-refresher>\n  <div style=\"height:100%;overflow-y: scroll;\" *ngIf=\"userInfo!=null\">\n    <ion-list *ngIf=\"selectedSegment=='dons'\">\n      <ion-grid style=\"text-align:center\" *ngIf=\"userInfo.don.length<1\">\n        <img src=\"../../../../assets/images/no-results.png\" class=\"ion-margin-vertical\">\n        <ion-item lines=\"none\"style=\"text-align:center;width: 100%;\">\n          <ion-text style=\"color:rgb(64, 64, 64);width: 100%\" color=\"danger\">Aucun don disponible realise</ion-text>\n        </ion-item>\n       </ion-grid>\n     <ion-grid style=\"display: flex; flex-wrap:wrap;justify-content: space-between;\">\n            <div *ngFor=\"let don of userInfo.don\" style=\"width:50%\">\n              <ion-card  style=\"width:90%;position: relative;\" >\n                <div *ngIf=\"don.nombre_reserve>0\" style=\"position: absolute;top:45%; height: 10%;width: 50%;background-color:#ec566a\">\n                <ion-text style=\"font-weight:bold;position:absolute;color:white;text-align:center;margin-top:5%;margin-left: 5%;\">Reserve</ion-text>\n                </div>\n                <ion-fab style=\"position:absolute;top:3%;left:0\">\n                  <ion-fab-button color=\"warning\">\n                    <ion-icon name=\"pencil-outline\"></ion-icon>\n                  </ion-fab-button>\n                </ion-fab>\n                <ion-fab style=\"position:absolute;top:3%;right:0\">\n                  <ion-fab-button color=\"danger\" (click)=\"deleteDon(don)\">\n                    <ion-icon name=\"trash-outline\"></ion-icon>\n                  </ion-fab-button>\n                </ion-fab>\n                <div style=\"width:100%;height:150px;margin:0;padding:0;background-size:cover; opacity: {{don.nombre_reserve>0?0.5:1}};\n                background-image: url({{image(don)}});\">   \n                </div>\n                  <ion-row style=\"margin-top:2%\" [routerLink]=\"['/menu/dons/details',don.id]\">\n                    <ion-text style=\"font-weight: bolder;font-size:1.3em;margin-left:2%;width:100%;padding:2%\"color=\"dark\">\n                      {{don.titre | slice:0:20}}{{don.titre.length>20?'...':''}}</ion-text>\n                  </ion-row>\n                  <ion-text style=\"font-weight: bolder;font-size:1.3em;width:100%;margin-left:2%;padding:2%\"color=\"medium\" [routerLink]=\"['/menu/dons/details',don.id]\">\n                    {{don.adresse | slice:0:12}}{{don.adresse.length>12?'...':''}}</ion-text>\n                  <ion-row style=\"margin-top:10px;padding:0;width:100%;display: flex;\" [routerLink]=\"['/menu/dons/details',don.id]\">\n                    <ion-col size=\"2\" style=\"padding-right:0;text-align: right;\"><ion-icon name=\"timer-outline\" color=\"dark\"style=\"font-weight:bold\" size=\"medium\" style=\"padding-right:0\"></ion-icon></ion-col>\n                    <ion-col style=\"padding-left:0\"> <ion-text style=\"margin-left:8px;font-size:1.1em;font-weight: bolder; padding:0;width:100%;\" color=\"dark\">{{timeAgo(don.created_at) | slice:7}}</ion-text></ion-col> \n                </ion-row>\n                    \n              </ion-card>\n          </div>\n          </ion-grid>\n    </ion-list>\n    <ion-list *ngIf=\"selectedSegment=='demandes'\">\n      \n      <ion-grid style=\"display: flex; flex-wrap:wrap;justify-content: space-between;\">\n        <ion-card *ngFor=\"let demand of userInfo.demande\" style=\"width: 100%;\">\n          <ion-item style=\"width:100%;\">\n            <ion-text style=\"color:gray\" slot=\"start\">Besoin</ion-text>\n            <ion-text> {{demand.title}}</ion-text>\n          </ion-item>\n          <ion-item style=\"width:100%;\">\n            <ion-text style=\"color:gray\" slot=\"start\">Heure</ion-text>\n            <ion-text> {{demand.created_at | date:'medium'}}</ion-text>\n          </ion-item>\n          <ion-item style=\"width:100%;\">\n            <ion-text style=\"color:gray\" slot=\"start\">Adresse</ion-text>\n            <ion-text  style=\"vertical-align: middle;justify-self: center;\"> {{demand.adresse}} </ion-text>\n          </ion-item>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button expand=\"block\" color=\"danger\" [routerLink]=\"['/menu/demandes/details',demand.id]\">Consulter</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n      </ion-grid>\n    </ion-list>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings_annonces_annonces_module_ts.js.map