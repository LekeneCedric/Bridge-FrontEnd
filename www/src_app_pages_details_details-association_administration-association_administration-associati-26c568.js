"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_details_details-association_administration-association_administration-associati-26c568"],{

/***/ 2528:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/administration-association/administration-association-routing.module.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministrationAssociationPageRoutingModule": () => (/* binding */ AdministrationAssociationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _administration_association_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administration-association.page */ 9040);




const routes = [
    {
        path: '',
        component: _administration_association_page__WEBPACK_IMPORTED_MODULE_0__.AdministrationAssociationPage
    }
];
let AdministrationAssociationPageRoutingModule = class AdministrationAssociationPageRoutingModule {
};
AdministrationAssociationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdministrationAssociationPageRoutingModule);



/***/ }),

/***/ 2732:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/administration-association/administration-association.module.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministrationAssociationPageModule": () => (/* binding */ AdministrationAssociationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _administration_association_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administration-association-routing.module */ 2528);
/* harmony import */ var _administration_association_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administration-association.page */ 9040);







let AdministrationAssociationPageModule = class AdministrationAssociationPageModule {
};
AdministrationAssociationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _administration_association_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdministrationAssociationPageRoutingModule
        ],
        declarations: [_administration_association_page__WEBPACK_IMPORTED_MODULE_1__.AdministrationAssociationPage]
    })
], AdministrationAssociationPageModule);



/***/ }),

/***/ 9040:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/administration-association/administration-association.page.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministrationAssociationPage": () => (/* binding */ AdministrationAssociationPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _administration_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administration-association.page.html?ngResource */ 2968);
/* harmony import */ var _administration_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./administration-association.page.scss?ngResource */ 6820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_modals_modal_demandes_adhesion_association_modal_demandes_adhesion_association_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/modal-demandes-adhesion-association/modal-demandes-adhesion-association.page */ 2111);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);









let AdministrationAssociationPage = class AdministrationAssociationPage {
  constructor(route, navCtrl, manageDataService, modalCtrl) {
    this.route = route;
    this.navCtrl = navCtrl;
    this.manageDataService = manageDataService;
    this.modalCtrl = modalCtrl;
    this.Association = null;
    this.idAssociation = null;
  }

  ngOnInit() {
    this.idAssociation = this.route.snapshot.params['id'];
    this.manageDataService.getOneAssociation(this.idAssociation).toPromise().then(data => {
      this.Association = data;
    }).catch(() => {});
  }

  navBack() {
    this.navCtrl.back();
  }

  openModalDemandesAdhesion() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: src_app_modals_modal_demandes_adhesion_association_modal_demandes_adhesion_association_page__WEBPACK_IMPORTED_MODULE_3__.ModalDemandesAdhesionAssociationPage,
        componentProps: {
          id_association: _this.idAssociation
        },
        breakpoints: [0, 1],
        initialBreakpoint: _this.Association.attentes.length < 1 ? 0.2 : 0.3,
        animated: true,
        handle: true
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();
    })();
  }

};

AdministrationAssociationPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_4__.ManageDataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}];

AdministrationAssociationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-administration-association',
  template: _administration_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_administration_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdministrationAssociationPage);


/***/ }),

/***/ 6820:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/administration-association/administration-association.page.scss?ngResource ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbmlzdHJhdGlvbi1hc3NvY2lhdGlvbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 2968:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/administration-association/administration-association.page.html?ngResource ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <ion-item lines=\"none\">\n    <ion-icon name=\"chevron-back-outline\" size=\"large\" slot=\"start\" color=\"primary\" (click)=\"navBack()\"></ion-icon>\n  </ion-item>\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button color=\"light\" [routerLink]=\"['/creation-mouvements',idAssociation]\">\n        <ion-icon name=\"calendar-outline\"  color=\"success\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"warning\" [routerLink]=\"['/creation-annonces',idAssociation]\">\n        <ion-icon name=\"megaphone-outline\"  color=\"light\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"light\" [routerLink]=\"['/creation-besoins',idAssociation]\">\n        <ion-icon name=\"thumbs-up-outline\"  color=\"primary\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"light\" >\n        <ion-icon name=\"person-add-outline\"  color=\"primary\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n <!--  -->\n <ion-item lines=\"none\" (click)=\"openModalDemandesAdhesion()\">\n  <ion-icon name=\"receipt-outline\" slot=\"start\" color=\"primary\"></ion-icon>\n  <ion-text slot=\"start\">Demandes d'adhesion</ion-text>\n  <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n </ion-item>\n\n <ion-item lines=\"none\">\n  <ion-icon name=\"person-add-outline\" slot=\"start\" color=\"success\"></ion-icon>\n  <ion-text slot=\"start\">Ajouter membres</ion-text>\n  <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n </ion-item>\n \n \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details_details-association_administration-association_administration-associati-26c568.js.map