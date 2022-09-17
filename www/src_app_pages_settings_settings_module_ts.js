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
    },
    {
        path: 'annonces/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-node_modules_javascript-time-ago_locale_fr_json_js-node_modules_javascript-time-ago_m-f2b7d5"), __webpack_require__.e("default-src_app_modals_modal-edit-dons_modal-edit-dons_page_ts"), __webpack_require__.e("src_app_pages_settings_annonces_annonces_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./annonces/annonces.module */ 5475)).then(m => m.AnnoncesPageModule)
    },
    {
        path: 'mes-associations/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_mes-associations_mes-associations_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mes-associations/mes-associations.module */ 5530)).then(m => m.MesAssociationsPageModule)
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
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 869);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1228);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 2340);










let SettingsPage = class SettingsPage {
  constructor(route, manageDataService, alertController, authService, modalCtrl) {
    this.route = route;
    this.manageDataService = manageDataService;
    this.alertController = alertController;
    this.authService = authService;
    this.modalCtrl = modalCtrl;
    /*------------------------------VARIABLES------------------------------*/

    this.id = null;
    this.mesInfo = null;
    this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.storage;
  }

  ngOnInit() {
    setTimeout(() => {
      this.manageDataService.getDonateur(this.id).toPromise().then(data => {
        this.mesInfo = data;
      }).catch(err => {});
    }, 500);
    this.id = JSON.parse(localStorage.getItem('mydata')).id;
  }
  /*------------------------------FUNCTIONS------------------------------*/


  removeTabs() {
    const tabBar = document.getElementById('app-tab-bar');

    if (tabBar !== null) {
      tabBar.style.display = 'none';
    }
  }

  deconnexion() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'deconnexion-alert',
        header: 'se deconnecter ?',
        buttons: [{
          text: 'annuler',
          role: 'cancel',
          handler: () => {}
        }, {
          text: 'oui',
          role: 'confirm',
          handler: () => {
            _this.authService.logout();
          }
        }]
      });
      yield alert.present();
    })();
  }

  get Id() {
    return this.id;
  }

  get MesInfo() {
    return this.mesInfo;
  }

  get Storage() {
    return this.storage;
  }

};

SettingsPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}, {
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_4__.ManageDataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}];

SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-settings',
  template: _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SettingsPage);


/***/ }),

/***/ 297:
/*!**************************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 869:
/*!**************************************************************!*\
  !*** ./src/app/pages/settings/settings.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <ion-grid *ngIf=\"MesInfo!=null\">\n    <ion-item style=\"width:100%;\"lines=\"none\" \n    [routerLink]=\"['/profil-donateur',Id]\">\n      <ion-thumbnail slot=\"start\" >\n        <img style=\"border-radius:10px\" [src]=\"MesInfo.media.length>0?Storage+MesInfo.media[0].filePath:'../../../../assets/images/user.png'\" />\n      </ion-thumbnail>\n      <ion-col style=\"text-align: left\">\n        <ion-row>\n         <ion-text style=\"font-weight: bold\">{{MesInfo.name}} {{MesInfo.surname}}</ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-text style=\"color:gray\"> Consulter profil public</ion-text>\n        </ion-row>\n      </ion-col>\n      <ion-icon color=\"medium\" name=\"chevron-forward-outline\" size=\"large\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"ion-margin-horizontal ion-margin-vertical\" style=\"border-bottom: 1px solid rgb(212, 212, 212);padding-bottom:5%\">\n      <ion-col size=\"3\" class=\"ion-text-center\">\n        <ion-row style=\"width:100%\"><ion-text color=\"medium\" style=\"width:100%;font-weight: 800\">Dons</ion-text></ion-row>\n        <ion-row style=\"width:100%\"><ion-text color='danger' style=\"width:100%;margin-top:5px;font-weight: bolder\">{{MesInfo.dons}}</ion-text></ion-row>\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-text-center\">\n        <ion-row style=\"width:100%\"><ion-text color=\"medium\" style=\"width:100%;font-weight: 800\">Receptions</ion-text></ion-row>\n        <ion-row style=\"width:100%\"><ion-text color='danger' style=\"width:100%;margin-top:5px;font-weight: bolder\">0</ion-text></ion-row>\n      </ion-col>\n      <ion-col size=\"5\" class=\"ion-text-center\">\n        <ion-row style=\"width:100%\"><ion-text color=\"medium\" style=\"width:100%;font-weight: 800\">Associations</ion-text></ion-row>\n        <ion-row style=\"width:100%\"><ion-text color='danger' style=\"width:100%;margin-top:5px;font-weight: bolder\">{{MesInfo.nbassociations}}</ion-text></ion-row>\n      </ion-col>\n    </ion-item>\n    \n      \n    <ion-grid>\n      <ion-text color=\"medium\" style=\"margin-left:4%;font-weight: bold\">infos personelles</ion-text>\n      <ion-item lines=\"none\" style=\"padding-bottom:1%;border-bottom: 1px solid rgb(195, 195, 195);\" [routerLink]=\"['annonces',Id]\">\n        <ion-text slot=\"start\" >Mes annonces</ion-text>\n        <ion-icon name=\"megaphone-outline\" size=\"large\" slot=\"end\" color=\"danger\"></ion-icon>\n      </ion-item> \n      <ion-item lines=\"none\" style=\"padding-bottom:1%;border-bottom: 1px solid rgb(195, 195, 195);\">\n        <ion-text slot=\"start\" >Mon niveau</ion-text>\n        <ion-icon name=\"trophy-outline\" size=\"large\" slot=\"end\"   color=\"danger\"></ion-icon>\n      </ion-item> \n    </ion-grid>\n    <ion-grid class=\"ion-margin-top\">\n      <ion-text color=\"medium\" style=\"margin-left:4%;font-weight: bold\">Associations</ion-text>\n      <ion-item lines=\"none\" style=\"padding-bottom:1%;border-bottom: 1px solid rgb(195, 195, 195);\"(click)=\"removeTabs()\" [routerLink]=\"['mes-associations',Id]\">\n        <ion-text slot=\"start\" >Mes Associations</ion-text>\n        <ion-icon name=\"body-outline\" size=\"large\" slot=\"end\" color=\"primary\"></ion-icon>\n      </ion-item> \n    </ion-grid>\n    <ion-grid class=\"ion-margin-top\">\n      <ion-text  color=\"medium\" style=\"margin-left:4%;font-weight: bold\">activites</ion-text>\n      <ion-item lines=\"none\" style=\"padding-bottom:1%;border-bottom: 1px solid rgb(195, 195, 195);\">\n        <ion-text slot=\"start\" >Mes favoris</ion-text>\n        <ion-icon name=\"heart-outline\" size=\"large\" slot=\"end\"  color=\"danger\"></ion-icon>\n      </ion-item> \n      <ion-item lines=\"none\" style=\"padding-bottom:1%;border-bottom: 1px solid rgb(195, 195, 195);\">\n        <ion-text slot=\"start\" >Evenements participes</ion-text>\n        <ion-icon name=\"walk-outline\" size=\"large\" slot=\"end\"  color=\"danger\"></ion-icon>\n      </ion-item> \n    </ion-grid>\n\n    <ion-grid class=\"ion-margin-top\">\n      <ion-text  color=\"medium\" style=\"margin-left:4%;font-weight: bold\">support</ion-text>\n      <ion-item lines=\"none\" style=\"padding-bottom:1%;border-bottom: 1px solid rgb(195, 195, 195);\">\n        <ion-text slot=\"start\">Aide,FAQ et conditions</ion-text>\n        <ion-icon name=\"book-outline\" size=\"large\" slot=\"end\"  color=\"danger\"></ion-icon>\n      </ion-item> \n    </ion-grid>\n    <ion-grid class=\"ion-margin-top\">\n      <ion-text  color=\"medium\" style=\"margin-left:4%;font-weight: bold\">Compte</ion-text>\n      <ion-item lines=\"none\" style=\"padding-bottom:1%;border-bottom: 1px solid rgb(195, 195, 195);\" (click)=\"deconnexion()\">\n        <ion-text slot=\"start\">deconnexion</ion-text>\n        <ion-icon name=\"exit-outline\" size=\"large\" slot=\"end\"  color=\"danger\"></ion-icon>\n      </ion-item> \n    </ion-grid>\n\n\n  </ion-grid>\n \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings_settings_module_ts.js.map