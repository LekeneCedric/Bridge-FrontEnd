"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_settings_mes-associations_mes-associations_module_ts"],{

/***/ 9268:
/*!************************************************************************************!*\
  !*** ./src/app/pages/settings/mes-associations/mes-associations-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesAssociationsPageRoutingModule": () => (/* binding */ MesAssociationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _mes_associations_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mes-associations.page */ 265);




const routes = [
    {
        path: '',
        component: _mes_associations_page__WEBPACK_IMPORTED_MODULE_0__.MesAssociationsPage
    }
];
let MesAssociationsPageRoutingModule = class MesAssociationsPageRoutingModule {
};
MesAssociationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MesAssociationsPageRoutingModule);



/***/ }),

/***/ 5530:
/*!****************************************************************************!*\
  !*** ./src/app/pages/settings/mes-associations/mes-associations.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesAssociationsPageModule": () => (/* binding */ MesAssociationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mes_associations_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mes-associations-routing.module */ 9268);
/* harmony import */ var _mes_associations_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mes-associations.page */ 265);







let MesAssociationsPageModule = class MesAssociationsPageModule {
};
MesAssociationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mes_associations_routing_module__WEBPACK_IMPORTED_MODULE_0__.MesAssociationsPageRoutingModule
        ],
        declarations: [_mes_associations_page__WEBPACK_IMPORTED_MODULE_1__.MesAssociationsPage]
    })
], MesAssociationsPageModule);



/***/ }),

/***/ 265:
/*!**************************************************************************!*\
  !*** ./src/app/pages/settings/mes-associations/mes-associations.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesAssociationsPage": () => (/* binding */ MesAssociationsPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mes_associations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mes-associations.page.html?ngResource */ 4132);
/* harmony import */ var _mes_associations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mes-associations.page.scss?ngResource */ 9712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);









let MesAssociationsPage = class MesAssociationsPage {
  constructor(router, manageDataService, toast) {
    this.router = router;
    this.manageDataService = manageDataService;
    this.toast = toast;
    /*---------------------------VARIABLES-------------------------------*/

    this.myId = null;
    this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.storage;
    this.associations = [];
  }

  ngOnInit() {
    this.myId = JSON.parse(localStorage.getItem('mydata')).id;
    this.manageDataService.getAssociations().toPromise().then(data => {
      this.associations = data;
      console.log(data);
    });
    const tabBar = document.getElementById('app-tab-bar');

    if (tabBar !== null) {
      tabBar.style.display = 'none';
    }
  }
  /*----------------------------FUNCTIONS-----------------------------*/


  iAmMember() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = _this.toast.create({
        message: `vous etes deja membre de cette association`,
        icon: 'information-circle',
        duration: 2000,
        color: "primary"
      });

      (yield toast).present();
    })();
  }

  sendDemand(id_association) {
    var _this2 = this;

    this.manageDataService.becameAssociationMember(this.myId, id_association).toPromise().then( /*#__PURE__*/function () {
      var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this2.ngOnInit();

        const toast = _this2.toast.create({
          message: `demande envoye`,
          icon: 'information-circle',
          duration: 2000,
          color: "success"
        });

        (yield toast).present();
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).catch( /*#__PURE__*/(0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.ngOnInit();
    }));
  }

  rejectDemand(id_association) {
    var _this3 = this;

    this.manageDataService.rejectAssociationMember(this.myId, id_association).toPromise().then( /*#__PURE__*/function () {
      var _ref3 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this3.ngOnInit();

        const toast = _this3.toast.create({
          message: `demande rejete`,
          icon: 'information-circle',
          duration: 2000,
          color: "danger"
        });

        (yield toast).present();
      });

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }()).catch(() => {
      this.ngOnInit();
    });
  }

  get Id() {
    return this.myId;
  }

  navBack() {
    this.router.navigateByUrl('/menu/settings', {
      replaceUrl: true
    });
    const tabBar = document.getElementById('app-tab-bar');

    if (tabBar !== null) {
      tabBar.style.display = 'flex';
    }
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 500);
  }

};

MesAssociationsPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__.ManageDataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}];

MesAssociationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-mes-associations',
  template: _mes_associations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_mes_associations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MesAssociationsPage);


/***/ }),

/***/ 9712:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/settings/mes-associations/mes-associations.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXMtYXNzb2NpYXRpb25zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4132:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/settings/mes-associations/mes-associations.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-icon name=\"chevron-back-outline\" slot=\"start\" size=\"large\" color=\"primary\" (click)=\"navBack()\"></ion-icon>\n    <ion-title>Mes Associations</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-top\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" class=\"red\">\n    <ion-refresher-content color=\"danger\"></ion-refresher-content>\n  </ion-refresher>\n  <div *ngFor=\"let item of associations\">\n  <ion-item style=\"width:100%;margin-bottom:2%\"lines=\"none\">\n    <ion-thumbnail slot=\"start\" [routerLink]=\"['/details-association',item.id]\">\n      <img style=\"border-radius:10px\" [src]=\"item.media.length>0?storage+item.media[0].filePath:'../../../../assets/images/community.png'\" />\n    </ion-thumbnail>\n    <ion-col style=\"text-align: left;margin:0;padding:0\" [routerLink]=\"['/details-association',item.id]\">\n      <ion-row style=\"display:flex\">\n       <ion-text style=\"font-weight: bold\">{{item.name}}</ion-text>\n       \n      </ion-row>\n      <ion-row style=\"margin-top:2%;font-weight: bold;\">\n        <ion-text style=\"color:gray\">{{item.type}}</ion-text>\n      </ion-row>\n      <ion-row style=\"margin-top:2%\">\n        <ion-text style=\"color:gray\">Creer depuis le {{item.created_at|date:'dd/mm/yyyy'}}</ion-text>\n      </ion-row>\n    </ion-col>\n      <ion-chip (click)=\"rejectDemand(item.id)\" *ngIf=\"item.attenteId.includes(Id)\" color=\"success\" style=\"text-align:left;padding:0\" class=\"ion-justify-content-center\"> \n        <ion-icon name=\"pulse-outline\" style=\"margin-right:10px\" >\n        </ion-icon>\n      </ion-chip>\n        <ion-chip (click)=\"iAmMember()\" color=\"primary\" style=\"text-align:left;padding:0\" class=\"ion-justify-content-center\" *ngIf=\"item.idDonateurs.includes(Id)\"> \n          <ion-icon name=\"people-outline\" style=\"margin-right:10px\" >\n          </ion-icon>\n        </ion-chip>\n          <ion-chip color=\"success\" (click)=\"sendDemand(item.id)\" style=\"text-align:left;padding:0\" class=\"ion-justify-content-center\" *ngIf=\"!item.idDonateurs.includes(Id)&&!item.attenteId.includes(Id)\"> \n            <ion-icon name=\"person-add-outline\" style=\"margin-right:10px\" >\n            </ion-icon>\n          </ion-chip>\n  </ion-item>\n</div>\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/creation-association\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings_mes-associations_mes-associations_module_ts.js.map