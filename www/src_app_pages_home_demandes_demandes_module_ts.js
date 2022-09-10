"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_demandes_demandes_module_ts"],{

/***/ 1798:
/*!****************************************************************!*\
  !*** ./src/app/pages/home/demandes/demandes-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemandesPageRoutingModule": () => (/* binding */ DemandesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _demandes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demandes.page */ 1779);




const routes = [
    {
        path: '',
        component: _demandes_page__WEBPACK_IMPORTED_MODULE_0__.DemandesPage
    },
    {
        path: 'details/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_javascript-time-ago_locale_fr_json_js-node_modules_javascript-time-ago_m-f2b7d5"), __webpack_require__.e("src_app_pages_details_details-demande_details-demande_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../details/details-demande/details-demande.module */ 1969)).then(m => m.DetailsDemandePageModule)
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

/***/ 4314:
/*!********************************************************!*\
  !*** ./src/app/pages/home/demandes/demandes.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemandesPageModule": () => (/* binding */ DemandesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _demandes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demandes-routing.module */ 1798);
/* harmony import */ var _demandes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demandes.page */ 1779);







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

/***/ 1779:
/*!******************************************************!*\
  !*** ./src/app/pages/home/demandes/demandes.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemandesPage": () => (/* binding */ DemandesPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _demandes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demandes.page.html?ngResource */ 6499);
/* harmony import */ var _demandes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demandes.page.scss?ngResource */ 4611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_modals_modal_category_modal_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/modal-category/modal-category.page */ 4098);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);








let DemandesPage = class DemandesPage {
  constructor(manageDataService, modalCtrl) {
    this.manageDataService = manageDataService;
    this.modalCtrl = modalCtrl;
    /*------------------------------VARIABLES------------------------------*/

    this.myData = {};
    this.myid = null;
    this.demandes = [];
    this.storage = 'http://127.0.0.1:8000/storage/';
    this.selectedCategory = [];
  }

  ngOnInit() {
    this.myData = JSON.parse(localStorage.getItem('mydata'));
    this.myid = JSON.parse(localStorage.getItem('mydata')).id;
    setInterval(() => {
      const tabBar = document.getElementById('app-tab-bar');
      tabBar.style.display = 'flex';
    }, 100);
    this.getDemande();
  }
  /*------------------------------FUNCTIONS------------------------------*/


  get id() {
    return this.myid;
  }

  refreshFilter() {
    this.selectedCategory = [];
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
      }
    })();
  }

  refresh() {
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

/***/ 4611:
/*!*******************************************************************!*\
  !*** ./src/app/pages/home/demandes/demandes.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".logo .title {\n  margin-left: 2%;\n  text-align: left;\n  color: #eb445a;\n  font-family: \"Rubik Glitch\";\n  font-size: 2em;\n  margin-bottom: 2%;\n}\n\n.title {\n  padding: 0;\n  margin: 0;\n  font-size: 0.7em;\n}\n\nion-chip {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbWFuZGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSiIsImZpbGUiOiJkZW1hbmRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcbiAgICAmIC50aXRsZXtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogI2ViNDQ1YTtcbiAgICBmb250LWZhbWlseTonUnViaWsgR2xpdGNoJztcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTt9XG59XG5cbi50aXRsZXtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDAuN2VtO1xufVxuaW9uLWNoaXB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 6499:
/*!*******************************************************************!*\
  !*** ./src/app/pages/home/demandes/demandes.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-row style=\"width: 100%;\">\n    <ion-col class=\"logo\" size=\"7\">\n      <ion-title class=\"title\">BRIDGE</ion-title>\n    </ion-col>\n    <ion-col style=\"margin-left:5%\" >\n        <ion-col size=\"3\" style=\"text-align:center\" style=\"position:relative\">\n          \n          <ion-icon name=\"notifications\" size=\"large\" color=\"warning\"></ion-icon>\n          <ion-badge style=\"position:absolute;top:0;right:0\" color=\"danger\">2</ion-badge>\n        </ion-col>\n        <ion-col size=\"4\" [routerLink]=\"['/profil-donateur',id]\" style=\"text-align:right;margin-left:16px\">\n          <ion-icon name=\"person-circle-outline\" size=\"large\" color=\"danger\" ></ion-icon>\n        </ion-col>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-segment scrollable>\n       <ion-chip class=\"chip\" color=\"danger\" style=\"padding:0;border-radius: 20%;\">\n        <ion-icon name=\"options-outline\" color = 'danger' size=\"large\" style=\"margin-right:5px\"></ion-icon>\n       </ion-chip>\n       <ion-chip class=\"chip\" (click)=\"openModal()\">\n       <ion-text>Category</ion-text>\n       <ion-badge color=\"danger\" style=\"margin-left:2px;border-radius: 100%;\">{{selectedCategory.length}}</ion-badge>\n       <ion-icon name=\"chevron-down-outline\"></ion-icon>\n       </ion-chip>\n       <ion-chip class=\"chip\" color=\"success\" (click)=\"refreshFilter()\" style=\"padding:0;border-radius:100%\" >\n        <ion-icon name=\"refresh-outline\" color=\"success\" size=\"large\" ></ion-icon>\n        </ion-chip>\n      </ion-segment>\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content color=\"danger\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid style=\"text-align:center;margin-top:15%\" *ngIf=\"demandes.length<1\">\n    <img src=\"../../../../assets/images/emptydemande.png\" class=\"ion-margin-vertical\">\n    <ion-item lines=\"none\"style=\"text-align:center;width: 100%;\" class=\"ion-margin-vertical\">\n      <ion-text style=\"color:rgb(64, 64, 64)\">Aucune demande disponible dans cette categorie</ion-text>\n    </ion-item>\n    <ion-button (click)=\"refresh()\" expand=\"block\" class=\"ion-margin-horizontal\" color=\"danger\" class=\"ion-margin-vertical\" style=\"font-weight:bold;margin-left: 20%;margin-right:20%\">reessayer</ion-button>\n  </ion-grid>\n  <ion-row>\n    <div *ngFor=\"let demand of demandes\" style=\"width: 95%\">\n      <ion-card *ngIf=\"selectedCategory.indexOf(demand.category)!=-1 || selectedCategory.length<1 \" style=\"width: 100%;\" [routerLink]=\"['details',demand.id]\">\n        <ion-row style=\"width: 100%;margin-top:5%\">\n          <ion-thumbnail class=\"ion-margin-start\">\n            <img style=\"border-radius:10px;margin-right:5%\" [src]=\"demand.donateur.media.length>0?storage+demand.donateur.media[0].filePath:'assets/images/user.png'\" />\n          </ion-thumbnail>\n          <ion-col style=\"text-align: left;margin-left:5%\">\n            <ion-row>\n             <ion-text style=\"font-weight: bold\">{{demand.donateur.name}}  {{demand.donateur.surname | slice:0:8 }}</ion-text>\n            </ion-row>\n            <ion-row>\n              <ion-text style=\"color:gray\"> donateur/necessiteux</ion-text>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n         \n        <ion-item style=\"width:100%;\">\n          <ion-text style=\"color:gray\" slot=\"start\">Besoin:</ion-text>\n          <ion-text> {{demand.title}}</ion-text>\n        </ion-item>\n        <ion-item style=\"width:100%;\">\n          <ion-text style=\"color:gray\" slot=\"start\">Date:</ion-text>\n          <ion-text> {{demand.created_at | date:'medium'}}</ion-text>\n        </ion-item>\n        <ion-item style=\"width:100%;\">\n          <ion-text style=\"color:gray\" slot=\"start\">Adresse:</ion-text>\n          <ion-text  style=\"vertical-align: middle;justify-self: center;\"> {{demand.adresse}} </ion-text>\n        </ion-item>\n    </ion-card> \n    </div>\n   \n  </ion-row>\n  </ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_demandes_demandes_module_ts.js.map