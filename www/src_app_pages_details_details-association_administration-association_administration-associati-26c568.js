"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_details_details-association_administration-association_administration-associati-26c568"],{

/***/ 86732:
/*!******************************************************************************************!*\
  !*** ./src/app/modals/modal-add-member-association/modal-add-member-association.page.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalAddMemberAssociationPage": () => (/* binding */ ModalAddMemberAssociationPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _modal_add_member_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-add-member-association.page.html?ngResource */ 4156);
/* harmony import */ var _modal_add_member_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-add-member-association.page.scss?ngResource */ 4862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 58027);







let ModalAddMemberAssociationPage = class ModalAddMemberAssociationPage {
  constructor(manageDataService, toast, modalCtrl) {
    this.manageDataService = manageDataService;
    this.toast = toast;
    this.modalCtrl = modalCtrl;
    this.search = '';
  }

  ngOnInit() {
    this.getMemberList();
    this.getNonMembersList();
    setTimeout(() => {}, 2000);
  }
  /*--------------------------------FUNCTIONS-------------------------------*/


  cancel() {
    return this.modalCtrl.dismiss();
  }

  addMember(id) {
    var _this = this;

    this.manageDataService.becameAssociationMember(id, this.id_association).toPromise().then(data => {
      this.manageDataService.addAssociationMember(id, this.id_association).toPromise().then( /*#__PURE__*/function () {
        var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          const toast = yield _this.toast.create({
            message: 'ajoute aux membres',
            duration: 1000,
            icon: 'information-circle',
            color: 'primary'
          });

          _this.ngOnInit();

          yield toast.present();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    });
  }

  getMemberList() {
    this.manageDataService.getAssociationMembersList(this.id_association).toPromise().then(data => {
      this.members = data;
      console.log(data);
    });
  }

  getNonMembersList() {
    this.manageDataService.getNonAssociationMemberList(this.id_association).toPromise().then(data => {
      this.non_members = data;
      console.log(data);
    });
  }

};

ModalAddMemberAssociationPage.ctorParameters = () => [{
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__.ManageDataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];

ModalAddMemberAssociationPage.propDecorators = {
  id_association: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
ModalAddMemberAssociationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-modal-add-member-association',
  template: _modal_add_member_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_modal_add_member_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ModalAddMemberAssociationPage);


/***/ }),

/***/ 22528:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/administration-association/administration-association-routing.module.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministrationAssociationPageRoutingModule": () => (/* binding */ AdministrationAssociationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _administration_association_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administration-association.page */ 39040);




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

/***/ 32732:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/administration-association/administration-association.module.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministrationAssociationPageModule": () => (/* binding */ AdministrationAssociationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _administration_association_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administration-association-routing.module */ 22528);
/* harmony import */ var _administration_association_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administration-association.page */ 39040);







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

/***/ 39040:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/administration-association/administration-association.page.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministrationAssociationPage": () => (/* binding */ AdministrationAssociationPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _administration_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administration-association.page.html?ngResource */ 92968);
/* harmony import */ var _administration_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./administration-association.page.scss?ngResource */ 66820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_modals_modal_add_member_association_modal_add_member_association_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/modal-add-member-association/modal-add-member-association.page */ 86732);
/* harmony import */ var src_app_modals_modal_associations_membres_modal_associations_membres_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modals/modal-associations-membres/modal-associations-membres.page */ 62310);
/* harmony import */ var src_app_modals_modal_demandes_adhesion_association_modal_demandes_adhesion_association_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/modal-demandes-adhesion-association/modal-demandes-adhesion-association.page */ 2111);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 58027);











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
        component: src_app_modals_modal_demandes_adhesion_association_modal_demandes_adhesion_association_page__WEBPACK_IMPORTED_MODULE_5__.ModalDemandesAdhesionAssociationPage,
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

  openModalMembers() {
    var _this2 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: src_app_modals_modal_associations_membres_modal_associations_membres_page__WEBPACK_IMPORTED_MODULE_4__.ModalAssociationsMembresPage,
        componentProps: {
          id_association: _this2.idAssociation
        },
        breakpoints: [0, 1],
        initialBreakpoint: 0.4,
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

  openModalAddMembers() {
    var _this3 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalCtrl.create({
        component: src_app_modals_modal_add_member_association_modal_add_member_association_page__WEBPACK_IMPORTED_MODULE_3__.ModalAddMemberAssociationPage,
        componentProps: {
          id_association: _this3.idAssociation
        },
        breakpoints: [0, 1],
        initialBreakpoint: 0.3,
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
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}, {
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_6__.ManageDataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}];

AdministrationAssociationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-administration-association',
  template: _administration_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_administration_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdministrationAssociationPage);


/***/ }),

/***/ 4862:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modals/modal-add-member-association/modal-add-member-association.page.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1hZGQtbWVtYmVyLWFzc29jaWF0aW9uLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 66820:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/administration-association/administration-association.page.scss?ngResource ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbmlzdHJhdGlvbi1hc3NvY2lhdGlvbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4156:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modals/modal-add-member-association/modal-add-member-association.page.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-item lines=\"none\" class=\"search-item\">\n    <ion-icon name=\"search-outline\" size=\"large\" color=\"dark\"></ion-icon>\n    <ion-input placeholder=\"Recherche dans les messages\" [(ngModel)]=\"search\" ></ion-input>\n    <ion-chip style=\"padding:0\" *ngIf=\"search.length>0\">\n      <ion-icon name=\"close-outline\" style=\"margin-right:30%\" color=\"dark\"></ion-icon>\n    </ion-chip>\n  </ion-item>\n  <div *ngFor=\"let user of non_members\">\n    <ion-item  lines=\"none\" style=\"margin-bottom:0.5px dashed rgb(200, 200, 200)\"\n    *ngIf=\"user.name.toLowerCase().includes(search.toLowerCase()) || user.surname.toLowerCase().includes(search.toLowerCase()) ||\n    user.email.toLowerCase().includes(search.toLowerCase())|| search==''\">\n      <ion-icon (click)=\"cancel()\"  name=\"person-circle-outline\" slot=\"start\"  [routerLink]=\"['/profil-donateur',user.id]\"></ion-icon>\n      <ion-text (click)=\"cancel()\" [routerLink]=\"['/profil-donateur',user.id]\" slot=\"start\" style=\"font-weight:bold\">{{user.name}}&ensp;{{user.surname}}</ion-text>\n      <ion-chip slot=\"end\" color=\"success\" (click)=\"addMember(user.id)\" style=\"text-align:left;padding:0\" class=\"ion-justify-content-center\"> \n        <ion-icon name=\"person-add-outline\" style=\"margin-right:10px\"></ion-icon>\n      </ion-chip>\n    </ion-item>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 92968:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/administration-association/administration-association.page.html?ngResource ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <ion-item lines=\"none\" *ngIf=\"Association!=null\">\n    <ion-icon name=\"chevron-back-outline\" size=\"large\" slot=\"start\" color=\"danger\" (click)=\"navBack()\"></ion-icon>\n    <ion-text color=\"medium\"> Administration &ensp; <strong style=\"color:black\">{{Association.name | uppercase}}</strong></ion-text>\n  </ion-item>\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"danger\">\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button color=\"light\" [routerLink]=\"['/creation-mouvements',idAssociation]\">\n        <ion-icon name=\"calendar-outline\"  color=\"success\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"light\" [routerLink]=\"['/creation-annonces',idAssociation]\">\n        <ion-icon name=\"megaphone-outline\"  color=\"warning\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"light\" [routerLink]=\"['/creation-besoins',idAssociation]\">\n        <ion-icon name=\"thumbs-up-outline\"  color=\"danger\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"light\" (click)=\"openModalAddMembers()\" >\n        <ion-icon name=\"person-add-outline\"  color=\"danger\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n <!--  -->\n\n <ion-item lines=\"none\" (click)=\"openModalMembers()\">\n  <ion-icon name=\"person-outline\" slot=\"start\" color=\"danger\"></ion-icon>\n  <ion-text slot=\"start\">Nos Membres</ion-text>\n  <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n </ion-item>\n\n <ion-item lines=\"none\" (click)=\"openModalDemandesAdhesion()\">\n  <ion-icon name=\"receipt-outline\" slot=\"start\" color=\"danger\"></ion-icon>\n  <ion-text slot=\"start\">Demandes d'adhesion</ion-text>\n  <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n </ion-item>\n\n <ion-item lines=\"none\" (click)=\"openModalAddMembers()\">\n  <ion-icon name=\"person-add-outline\" slot=\"start\" color=\"danger\"></ion-icon>\n  <ion-text slot=\"start\">Ajouter membres</ion-text>\n  <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n </ion-item>\n \n \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details_details-association_administration-association_administration-associati-26c568.js.map