"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_demandes_demandes_module_ts"],{

/***/ 71798:
/*!****************************************************************!*\
  !*** ./src/app/pages/home/demandes/demandes-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemandesPageRoutingModule": () => (/* binding */ DemandesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _demandes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demandes.page */ 51779);




const routes = [
    {
        path: '',
        component: _demandes_page__WEBPACK_IMPORTED_MODULE_0__.DemandesPage
    },
    {
        path: 'details/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_javascript-time-ago_locale_fr_json_js-node_modules_javascript-time-ago_m-f2b7d5"), __webpack_require__.e("src_app_pages_details_details-demande_details-demande_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../details/details-demande/details-demande.module */ 31969)).then(m => m.DetailsDemandePageModule)
    }
];
let DemandesPageRoutingModule = class DemandesPageRoutingModule {
};
DemandesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DemandesPageRoutingModule);



/***/ }),

/***/ 40472:
/*!********************************************************!*\
  !*** ./src/app/pages/home/demandes/demandes.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemandesPageModule": () => (/* binding */ DemandesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _demandes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demandes-routing.module */ 71798);
/* harmony import */ var _demandes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demandes.page */ 51779);







let DemandesPageModule = class DemandesPageModule {
};
DemandesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _demandes_routing_module__WEBPACK_IMPORTED_MODULE_0__.DemandesPageRoutingModule
        ],
        declarations: [_demandes_page__WEBPACK_IMPORTED_MODULE_1__.DemandesPage]
    })
], DemandesPageModule);



/***/ }),

/***/ 51779:
/*!******************************************************!*\
  !*** ./src/app/pages/home/demandes/demandes.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemandesPage": () => (/* binding */ DemandesPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _demandes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demandes.page.html?ngResource */ 86499);
/* harmony import */ var _demandes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demandes.page.scss?ngResource */ 94611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_modals_modal_category_modal_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/modal-category/modal-category.page */ 44098);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 58027);








let DemandesPage = class DemandesPage {
  constructor(manageDataService, modalCtrl) {
    this.manageDataService = manageDataService;
    this.modalCtrl = modalCtrl;
    /*------------------------------VARIABLES------------------------------*/

    this.loadingDemandes = true;
    this.is_null_Demande = false;
    this.myData = {};
    this.myid = null;
    this.demandes = [];
    this.demandesContainer = [];
    this.storage = 'http://127.0.0.1:8000/storage/';
    this.selectedCategory = [];
    this.notifications = [];
  }

  ngOnInit() {
    this.notifications = [];
    this.demandes = [];
    this.getDemande();
    this.getMyNotifications();
    setInterval(() => {
      if (this.loadingDemandes == false && this.demandes.length < 1) {
        this.is_null_Demande = true;
      } else {
        this.is_null_Demande = false;
      }
    }, 100);
    setTimeout(() => {
      if (this.is_null_Demande) {
        this.demandes.length < 1 ? this.loadingDemandes == true : this.loadingDemandes = false;
      } else if (!this.is_null_Demande) {
        this.demandes.length < 1 ? this.loadingDemandes == true : this.loadingDemandes = false;
      } else {
        this.loadingDemandes = false;
      }
    }, 100);
    setTimeout(() => {
      this.demandes.length < 1 ? this.is_null_Demande = true : this.is_null_Demande = false;
      this.loadingDemandes = false;
    }, 10000);
    this.loadingDemandes = true;
    this.is_null_Demande = false;
    this.myData = JSON.parse(localStorage.getItem('mydata'));
    this.myid = JSON.parse(localStorage.getItem('mydata')).id;
    setInterval(() => {
      const tabBar = document.getElementById('app-tab-bar');
      tabBar.style.display = 'flex';
    }, 100);
  }
  /*------------------------------FUNCTIONS------------------------------*/


  get id() {
    return this.myid;
  }

  refreshFilter() {
    this.demandes = this.demandesContainer;
    this.selectedCategory = [];
  }

  getMyNotifications() {
    this.manageDataService.getNotificationDonateur(this.myid).toPromise().then(data => {
      console.log(data);
      data.forEach(notif => {
        notif.vu == 0 ? this.notifications.push(notif) : null;
      });
    });
  }

  openModal() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: src_app_modals_modal_category_modal_category_page__WEBPACK_IMPORTED_MODULE_3__.ModalCategoryPage,
        componentProps: {
          selectedCategory: _this.selectedCategory
        },
        breakpoints: [0, 0.65],
        initialBreakpoint: 0.65,
        animated: true,
        handle: true
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role === 'confirm') {
        _this.selectedCategory = data;
        _this.demandes = _this.demandesContainer;
        _this.selectedCategory.length > 0 ? _this.demandes = _this.demandes.filter(demande => {
          return _this.selectedCategory.includes(demande.category);
        }) : null;
      }
    })();
  }

  refresh() {
    this.refreshFilter();
    setTimeout(() => {
      this.ngOnInit();
    }, 500);
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 500);
  }

  getDemande() {
    return this.manageDataService.getDemandes().toPromise().then(data => {
      this.demandes = data;
      this.demandesContainer = data;
      console.log(data);
    }).catch(err => {});
  }

};

DemandesPage.ctorParameters = () => [{
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_4__.ManageDataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}];

DemandesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-demandes',
  template: _demandes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_demandes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DemandesPage);


/***/ }),

/***/ 94611:
/*!*******************************************************************!*\
  !*** ./src/app/pages/home/demandes/demandes.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".logo .title {\n  margin-left: 2%;\n  text-align: left;\n  color: #eb445a;\n  font-family: \"Rubik Glitch\";\n  font-size: 2em;\n  margin-bottom: 2%;\n}\n\n.title {\n  padding: 0;\n  margin: 0;\n  font-size: 0.7em;\n}\n\nion-chip {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbWFuZGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSiIsImZpbGUiOiJkZW1hbmRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcbiAgICAmIC50aXRsZXtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogI2ViNDQ1YTtcbiAgICBmb250LWZhbWlseTonUnViaWsgR2xpdGNoJztcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTt9XG59XG5cbi50aXRsZXtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDAuN2VtO1xufVxuaW9uLWNoaXB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 86499:
/*!*******************************************************************!*\
  !*** ./src/app/pages/home/demandes/demandes.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-row style=\"width: 100%;\">\n    <ion-col class=\"logo\" size=\"10\">\n      <ion-text class=\"title\">BRIDGE</ion-text>\n      \n    </ion-col>\n    <ion-col>\n      <ion-col size=\"2\" style=\"text-align:center;margin-left:5%\" [routerLink]=\"['/notifications',id]\"> \n        <ion-icon name=\"notifications\" size=\"large\" color=\"warning\"></ion-icon>\n      </ion-col>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-segment scrollable>\n       <ion-chip class=\"chip\" color=\"danger\" style=\"padding:0;border-radius: 20%;\">\n        <ion-icon name=\"options-outline\" color = 'danger' size=\"large\" style=\"margin-right:5px\"></ion-icon>\n       </ion-chip>\n       <ion-chip class=\"chip\" (click)=\"openModal()\">\n       <ion-text>Category</ion-text>\n       <ion-badge style=\"position:absolute;top:0;right:0\" color=\"danger\" *ngIf=\"notifications.length>0\">{{notifications.length}}</ion-badge>\n       <ion-icon name=\"chevron-down-outline\"></ion-icon>\n       </ion-chip>\n       <ion-chip class=\"chip\" color=\"success\" (click)=\"refreshFilter()\" style=\"padding:0;border-radius:100%\" >\n        <ion-icon name=\"refresh-outline\" color=\"success\" size=\"large\" ></ion-icon>\n        </ion-chip>\n      </ion-segment>\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content color=\"danger\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-list *ngIf=\"loadingDemandes == true\">\n    <ion-card *ngFor=\"let i of [1,1,1,1,1,1]\"> \n    <ion-item >\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\" slot=\"start\"></ion-skeleton-text>\n      <ion-skeleton-text [animated]=\"true\" style=\"width: 70%;\"></ion-skeleton-text>\n    </ion-item>\n    <ion-item>\n      <ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\" slot=\"start\"></ion-skeleton-text>\n      <ion-skeleton-text [animated]=\"true\" style=\"width: 70%;\"></ion-skeleton-text>\n    </ion-item>\n  </ion-card>\n  </ion-list>\n \n  <ion-grid style=\"text-align:center;margin-top:15%\" *ngIf=\"is_null_Demande\">\n    <img src=\"../../../../assets/images/emptydemande.png\" class=\"ion-margin-vertical\">\n    <ion-item lines=\"none\"style=\"text-align:center;width: 100%;\" class=\"ion-margin-vertical\">\n      <ion-text style=\"color:rgb(64, 64, 64);width: 100%\">Aucune demande disponible dans cette categorie</ion-text>\n    </ion-item>\n    <ion-button (click)=\"refresh()\" expand=\"block\" class=\"ion-margin-horizontal\" color=\"danger\" class=\"ion-margin-vertical\" style=\"font-weight:bold;margin-left: 20%;margin-right:20%\">reessayer</ion-button>\n  </ion-grid>\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"danger\">\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button color=\"danger\" routerLink=\"/creation-dons\">\n        <ion-icon name=\"gift-outline\" size=\"large\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"light\" routerLink=\"/creation-demandes\">\n        <ion-icon name=\"hand-left-outline\" size=\"large\" color=\"danger\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-row *ngIf=\"!is_null_Demande\">\n    <div *ngFor=\"let demand of demandes\" style=\"width: 95%\">\n      <ion-card style=\"width: 100%;\" [routerLink]=\"['details',demand.id]\">\n        <ion-row style=\"width: 100%;margin-top:5%\">\n          <ion-thumbnail class=\"ion-margin-start\">\n            <img style=\"border-radius:10px;margin-right:5%\" [src]=\"demand.donateur.media.length>0?storage+demand.donateur.media[0].filePath:'assets/images/user.png'\" />\n          </ion-thumbnail>\n          <ion-col style=\"text-align: left;margin-left:5%\">\n            <ion-row>\n             <ion-text style=\"font-weight: bold\">{{demand.donateur.name}}  {{demand.donateur.surname | slice:0:8 }}</ion-text>\n            </ion-row>\n            <ion-row>\n              <ion-text style=\"color:gray\"> donateur/necessiteux</ion-text>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n         \n        <ion-item style=\"width:100%;\">\n          <ion-text style=\"color:gray\" slot=\"start\">Besoin:</ion-text>\n          <ion-text> {{demand.title}}</ion-text>\n        </ion-item>\n        <ion-item style=\"width:100%;\">\n          <ion-text style=\"color:gray\" slot=\"start\">Date:</ion-text>\n          <ion-text> {{demand.created_at | date:'medium'}}</ion-text>\n        </ion-item>\n        <ion-item style=\"width:100%;\">\n          <ion-text style=\"color:gray\" slot=\"start\">Adresse:</ion-text>\n          <ion-text  style=\"vertical-align: middle;justify-self: center;\"> {{demand.adresse}} </ion-text>\n        </ion-item>\n    </ion-card> \n    </div>\n   \n  </ion-row>\n  </ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_demandes_demandes_module_ts.js.map