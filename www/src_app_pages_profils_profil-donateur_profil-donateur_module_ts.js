"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profils_profil-donateur_profil-donateur_module_ts"],{

/***/ 9794:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/profils/profil-donateur/profil-donateur-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilDonateurPageRoutingModule": () => (/* binding */ ProfilDonateurPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _profil_donateur_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profil-donateur.page */ 8271);




const routes = [
    {
        path: '',
        component: _profil_donateur_page__WEBPACK_IMPORTED_MODULE_0__.ProfilDonateurPage
    }
];
let ProfilDonateurPageRoutingModule = class ProfilDonateurPageRoutingModule {
};
ProfilDonateurPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilDonateurPageRoutingModule);



/***/ }),

/***/ 8813:
/*!*************************************************************************!*\
  !*** ./src/app/pages/profils/profil-donateur/profil-donateur.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilDonateurPageModule": () => (/* binding */ ProfilDonateurPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profil_donateur_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profil-donateur-routing.module */ 9794);
/* harmony import */ var _profil_donateur_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profil-donateur.page */ 8271);







let ProfilDonateurPageModule = class ProfilDonateurPageModule {
};
ProfilDonateurPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profil_donateur_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilDonateurPageRoutingModule
        ],
        declarations: [_profil_donateur_page__WEBPACK_IMPORTED_MODULE_1__.ProfilDonateurPage]
    })
], ProfilDonateurPageModule);



/***/ }),

/***/ 8271:
/*!***********************************************************************!*\
  !*** ./src/app/pages/profils/profil-donateur/profil-donateur.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilDonateurPage": () => (/* binding */ ProfilDonateurPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profil_donateur_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profil-donateur.page.html?ngResource */ 9755);
/* harmony import */ var _profil_donateur_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profil-donateur.page.scss?ngResource */ 8605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! javascript-time-ago */ 488);
/* harmony import */ var javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! javascript-time-ago/locale/fr */ 8996);
/* harmony import */ var src_app_modals_modal_edit_profil_modal_edit_profil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/modal-edit-profil/modal-edit-profil.page */ 284);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 2340);












let ProfilDonateurPage = class ProfilDonateurPage {
  constructor(navCtrl, route, manageDataService, modalCtrl) {
    this.navCtrl = navCtrl;
    this.route = route;
    this.manageDataService = manageDataService;
    this.modalCtrl = modalCtrl;
    /*------------------------------VARIABLES---------------------*/

    this.myId = null;
    this.selectedSegment = 'dons';
    this.userInfo = null;
    this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.storage;
  }

  ngOnInit() {
    javascript_time_ago__WEBPACK_IMPORTED_MODULE_6__["default"].addDefaultLocale(javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_7__["default"]);
    this.myId = JSON.parse(localStorage.getItem('mydata')).id;
    this.user_id = this.route.snapshot.params.id;
    this.manageDataService.getDonateur(this.user_id).toPromise().then(data => {
      console.log(data);
      this.userInfo = data;
    }).catch(err => {
      console.log(err);
    });
  }
  /*------------------------------FUNCTIONS---------------------*/


  timeAgo(created_at) {
    const timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_6__["default"]('fr-EU');
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

  edit() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: src_app_modals_modal_edit_profil_modal_edit_profil_page__WEBPACK_IMPORTED_MODULE_3__.ModalEditProfilPage,
        componentProps: {
          user: _this.userInfo
        },
        breakpoints: [0, 1],
        initialBreakpoint: 0.8,
        animated: true,
        handle: true
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role === 'confirm') {
        setTimeout(() => {
          console.log('exit');

          _this.refresh();
        }, 200);
      }
    })();
  }

  segmentChanged(event) {
    this.selectedSegment = event.target.value;
  }

  navBack() {
    this.navCtrl.back();
  }

};

ProfilDonateurPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
}, {
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_4__.ManageDataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}];

ProfilDonateurPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-profil-donateur',
  template: _profil_donateur_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_profil_donateur_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ProfilDonateurPage);


/***/ }),

/***/ 8605:
/*!************************************************************************************!*\
  !*** ./src/app/pages/profils/profil-donateur/profil-donateur.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ".profil {\n  min-width: 5rem;\n  min-height: 5rem;\n}\n.profil img {\n  max-width: 5rem;\n  min-width: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbC1kb25hdGV1ci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFFUiIsImZpbGUiOiJwcm9maWwtZG9uYXRldXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbHtcbiAgICBtaW4td2lkdGg6IDVyZW07ICAgIFxuICAgIG1pbi1oZWlnaHQ6IDVyZW07XG4gICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiA1cmVtOyAgICBcbiAgICAgICAgbWluLXdpZHRoOiA1cmVtO1xuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 9755:
/*!************************************************************************************!*\
  !*** ./src/app/pages/profils/profil-donateur/profil-donateur.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-popover trigger=\"profilOption\" [dismissOnSelect]=\"true\" *ngIf=\"userInfo!=null\">\n  <ng-template>\n    <ion-content>\n      <ion-list>\n        <ion-item [button]=\"true\" [detail]=\"false\" *ngIf=\"myId==userInfo.id\" lines=\"none\" (click)=\"edit()\">\n          <ion-text color=\"dark\">Modifier</ion-text>\n          <ion-icon name=\"pencil-outline\" slot=\"end\" color=\"warning\"></ion-icon>\n        </ion-item>\n        <ion-item [button]=\"true\" [detail]=\"false\"  *ngIf=\"myId!=userInfo.id\" lines=\"none\">\n          <ion-text color=\"danger\">signaler</ion-text>\n          <ion-icon name=\"receipt-outline\" slot=\"end\" color=\"danger\"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ng-template>\n</ion-popover>\n  <ion-toolbar>\n    <ion-row style=\"width:100%\" >\n      <ion-item style=\"width:100%\" lines=\"none\">\n        <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"danger\" slot=\"start\"(click)=\"navBack()\"></ion-icon>\n        <ion-icon id=\"profilOption\" name=\"ellipsis-vertical\" size=\"large\" color=\"danger\" slot=\"end\"></ion-icon>\n      </ion-item> \n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" class=\"red\">\n    <ion-refresher-content color=\"danger\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid *ngIf=\"userInfo!=null\">\n  <ion-item style=\"width:100%;\" lines=\"none\">\n    <ion-thumbnail class=\"ion-margin-start\" slot=\"start\" class=\"profil\">\n      <img style=\"border-radius:10px\" src=\"{{userInfo.media.length>0 ? storage+userInfo.media[userInfo.media.length-1].filePath:'assets/images/user.png'}}\" />\n    </ion-thumbnail>\n    <ion-col style=\"text-align: left\">\n      <ion-row>\n       <ion-text style=\"font-weight: bold;font-size:large\">{{userInfo.name}} {{userInfo.surname}}</ion-text>\n      </ion-row>\n      <ion-row style=\"margin-top:10px\">\n        <ion-text style=\"color:gray\">Membre depuis <strong>{{userInfo.created_at|date:'YYYY,MMMM'}}</strong></ion-text>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item style=\"width:100%;margin:0;padding:0\" lines=\"none\">\n    <ion-icon name=\"gift\" size=\"large\" style=\"margin-right:15px\" color=\"danger\"></ion-icon>\n  <ion-text style=\"font-weight:bold\">{{userInfo.dons}}</ion-text>\n  <ion-text style=\"margin-left:5px\">dons</ion-text>\n  <ion-text style=\"font-weight:bold;margin-left:5px\">, 0</ion-text>\n  <ion-text style=\"margin-left:5px\">receptions</ion-text>\n  </ion-item>\n  <ion-item style=\"width:100%;margin:0;padding:0\" lines=\"none\">\n    <ion-icon name=\"hand-right\" size=\"large\" style=\"margin-right:15px\" color=\"danger\"></ion-icon>\n    <ion-text style=\"font-weight:bold\">{{userInfo.nbdemandes}}</ion-text>\n    <ion-text style=\"margin-left:5px\">demandes</ion-text>\n  </ion-item>\n  <ion-item style=\"width:100%;margin:0;padding:0\" lines=\"none\">\n    <ion-icon name=\"people\" size=\"large\" style=\"margin-right:15px\" color=\"danger\"></ion-icon>\n    <ion-text style=\"margin-left:5px\">appartient a</ion-text>\n    <ion-text style=\"font-weight:bold;margin-left:5px\">{{userInfo.nbassociations}}</ion-text>\n    <ion-text style=\"margin-left:5px\">associations</ion-text>\n  </ion-item>\n  <ion-item-divider></ion-item-divider>\n  <ion-item lines=\"none\">\n    <ion-text style=\"font-weight:bold;color: gray;\">Activites</ion-text>\n  </ion-item>\n  <ion-item style=\"width:100%;margin:0\" lines=\"none\">\n    <ion-icon name=\"calendar-number-outline\" size=\"large\" style=\"margin-right:15px\" color=\"danger\"></ion-icon>\n    <ion-text style=\"font-weight:bold\">{{userInfo.nbmouvements}}</ion-text>\n    <ion-text style=\"margin-left:5px\">evenements participes</ion-text>\n  </ion-item>\n  <ion-item-divider></ion-item-divider>\n  <ion-item lines=\"none\">\n    <ion-text style=\"font-weight:bold;color: gray;\">Niveau</ion-text>\n  </ion-item>\n  <ion-row>\n    <ion-col size=\"3\" style=\"text-align:center;align-items: center;\">\n        <ion-img style=\"border-radius:10px\" style=\"width:60%;margin-left: 10px;\" src=\"../../../../assets/images/stars.png\"></ion-img>\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-row>\n        <ion-text style=\"font-weight: bold;font-size:medium\">{{userInfo.statut}}</ion-text>\n       </ion-row>\n       <ion-row style=\"margin-top:10px\">\n         <ion-text style=\"color:gray\">Niveau {{userInfo.niveau}}</ion-text>\n       </ion-row>\n    </ion-col>\n  </ion-row>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" [value]=\"selectedSegment\" color=\"danger\">\n    <ion-segment-button value=\"dons\">\n      <ion-label>Dons</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"demandes\">\n      <ion-label>Demandes</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  \n  <div style=\"height:250px;overflow-y: scroll;\" >\n    <ion-list *ngIf=\"selectedSegment=='dons'\">\n      <ion-grid style=\"text-align:center\" *ngIf=\"userInfo.don.length<1\">\n        <img src=\"../../../../assets/images/no-results.png\" class=\"ion-margin-vertical\">\n        <ion-item lines=\"none\"style=\"text-align:center;width: 100%;\">\n          <ion-text style=\"color:rgb(64, 64, 64);width: 100%\" color=\"danger\">Aucun don disponible realise</ion-text>\n        </ion-item>\n       </ion-grid>\n     <ion-grid style=\"display: flex; flex-wrap:wrap;justify-content: space-between;\">\n            <div *ngFor=\"let don of userInfo.don\" style=\"width:50%\">\n              <ion-card  [routerLink]=\"['/menu/dons/details',don.id]\"style=\"width:90%;position: relative;\" >\n                <div *ngIf=\"don.nombre_reserve>0\" style=\"position: absolute;top:45%; height: 10%;width: 50%;background-color:#ec566a\">\n                <ion-text style=\"font-weight:bold;position:absolute;color:white;text-align:center;margin-top:5%;margin-left: 5%;\">Reserve</ion-text>\n                </div>\n                <div style=\"width:100%;height:150px;margin:0;padding:0;background-size:cover; opacity: {{don.nombre_reserve>0?0.5:1}};\n                background-image: url({{image(don)}});\">   \n                </div>\n                  <ion-row style=\"margin-top:2%\">\n                    <ion-text style=\"font-weight: bolder;font-size:1.3em;margin-left:2%;width:100%;padding:2%\"color=\"dark\">\n                      {{don.titre | slice:0:20}}{{don.titre.length>20?'...':''}}</ion-text>\n                  </ion-row>\n                  <ion-text style=\"font-weight: bolder;font-size:1.3em;width:100%;margin-left:2%;padding:2%\"color=\"medium\">\n                    {{don.adresse | slice:0:12}}{{don.adresse.length>12?'...':''}}</ion-text>\n                  <ion-row style=\"margin-top:10px;padding:0;width:100%;display: flex;\">\n                    <ion-col size=\"2\" style=\"padding-right:0;text-align: right;\"><ion-icon name=\"timer-outline\" color=\"dark\"style=\"font-weight:bold\" size=\"medium\" style=\"padding-right:0\"></ion-icon></ion-col>\n                    <ion-col style=\"padding-left:0\"> <ion-text style=\"margin-left:8px;font-size:1.1em;font-weight: bolder; padding:0;width:100%;\" color=\"dark\">{{timeAgo(don.created_at) | slice:7}}</ion-text></ion-col> \n                </ion-row>\n                    \n              </ion-card>\n          </div>\n          </ion-grid>\n    </ion-list>\n    <ion-list *ngIf=\"selectedSegment=='demandes'\">\n      \n      <ion-grid style=\"display: flex; flex-wrap:wrap;justify-content: space-between;\">\n        <ion-card *ngFor=\"let demand of userInfo.demande\" style=\"width: 100%;\">\n          <ion-item style=\"width:100%;\">\n            <ion-text style=\"color:gray\" slot=\"start\">Besoin</ion-text>\n            <ion-text> {{demand.title}}</ion-text>\n          </ion-item>\n          <ion-item style=\"width:100%;\">\n            <ion-text style=\"color:gray\" slot=\"start\">Heure</ion-text>\n            <ion-text> {{demand.created_at | date:'medium'}}</ion-text>\n          </ion-item>\n          <ion-item style=\"width:100%;\">\n            <ion-text style=\"color:gray\" slot=\"start\">Adresse</ion-text>\n            <ion-text  style=\"vertical-align: middle;justify-self: center;\"> {{demand.adresse}} </ion-text>\n          </ion-item>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button expand=\"block\" color=\"danger\" [routerLink]=\"['/menu/demandes/details',demand.id]\">Consulter</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n      </ion-grid>\n    </ion-list>\n  </div>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profils_profil-donateur_profil-donateur_module_ts.js.map