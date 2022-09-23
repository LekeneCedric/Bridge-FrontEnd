"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_messages_receptions_receptions_module_ts"],{

/***/ 5761:
/*!************************************************************************!*\
  !*** ./src/app/pages/messages/receptions/receptions-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionsPageRoutingModule": () => (/* binding */ ReceptionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _receptions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receptions.page */ 2358);




const routes = [
    {
        path: '',
        component: _receptions_page__WEBPACK_IMPORTED_MODULE_0__.ReceptionsPage
    }
];
let ReceptionsPageRoutingModule = class ReceptionsPageRoutingModule {
};
ReceptionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReceptionsPageRoutingModule);



/***/ }),

/***/ 6929:
/*!****************************************************************!*\
  !*** ./src/app/pages/messages/receptions/receptions.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionsPageModule": () => (/* binding */ ReceptionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _receptions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receptions-routing.module */ 5761);
/* harmony import */ var _receptions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receptions.page */ 2358);







let ReceptionsPageModule = class ReceptionsPageModule {
};
ReceptionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _receptions_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReceptionsPageRoutingModule
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA],
        declarations: [_receptions_page__WEBPACK_IMPORTED_MODULE_1__.ReceptionsPage]
    })
], ReceptionsPageModule);



/***/ }),

/***/ 2358:
/*!**************************************************************!*\
  !*** ./src/app/pages/messages/receptions/receptions.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionsPage": () => (/* binding */ ReceptionsPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _receptions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receptions.page.html?ngResource */ 6944);
/* harmony import */ var _receptions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./receptions.page.scss?ngResource */ 1092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_modals_modal_salon_modal_salon_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/modal-salon/modal-salon.page */ 3378);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 2340);









let ReceptionsPage = class ReceptionsPage {
  constructor(manageDataService, modalCtrl) {
    this.manageDataService = manageDataService;
    this.modalCtrl = modalCtrl;
    this.myId = null;
    this.selectedSegment = 'attente';
    this.salonsDemandes = [];
    this.salonsDons = [];
    this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.storage;
    this.seeDonContacte = false;
    this.seeDonReserve = false;
    this.seeDonFinalise = false;
    this.mesdonsFinalise = [];
    this.mesdonsReserves = [];
    this.mesdonsContactes = [];
    this.DonsContactes = [];
    this.DonsReserves = [];
    this.DonsFinalises = [];
    this.mesDemandesContactes = [];
    this.mesDemandeResolus = [];
    this.DemandesContactes = [];
    this.DemandeResolus = [];
    this.filterDonAttente = [];
    this.filterDonReserve = [];
    this.filterDonFinalise = [];
    this.filterSalonDonAttente = [];
    this.filterSalonDonReserve = [];
    this.filterSalonDonFinalise = [];
    this.filterDemandeAttente = [];
    this.filterDemandeResolu = [];
  }

  ngOnInit() {
    this.filterDonAttente = [];
    this.filterDonFinalise = [];
    this.filterDonReserve = [];
    this.filterSalonDonAttente = [];
    this.filterSalonDonFinalise = [];
    this.filterSalonDonReserve = [];
    this.mesdonsContactes = [];
    this.mesdonsReserves = [];
    this.mesdonsFinalise = [];
    this.DonsContactes = [];
    this.DonsReserves = [];
    this.DonsFinalises = [];
    this.mesDemandesContactes = [];
    this.mesDemandeResolus = [];
    this.DemandesContactes = [];
    this.DemandeResolus = [];
    this.salonsDons = [];
    this.salonsDemandes = [];
    this.myId = JSON.parse(localStorage.getItem('mydata')).id;
    this.getSalonsDons();
    this.getSalonsDemandes();
    this.category = 'mesdons';
  }

  changeCategory(cat) {
    this.category = cat;
    this.filtration();
  }
  /*----------------------------------------FUNCTIONS----------------------------*/


  openModalMesdonsAttentes(salon) {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: src_app_modals_modal_salon_modal_salon_page__WEBPACK_IMPORTED_MODULE_3__.ModalSalonPage,
        componentProps: {
          selectedRoom: salon,
          allRoom: _this.mesdonsContactes
        },
        mode: 'md',
        breakpoints: [0, 1],
        initialBreakpoint: 0.35,
        animated: true,
        handle: true
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role === 'confirm') {}
    })();
  }

  openModalMesdonsReserves(salon) {
    var _this2 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: src_app_modals_modal_salon_modal_salon_page__WEBPACK_IMPORTED_MODULE_3__.ModalSalonPage,
        componentProps: {
          selectedRoom: salon,
          allRoom: _this2.mesdonsReserves
        },
        mode: 'md',
        breakpoints: [0, 1],
        initialBreakpoint: 0.35,
        animated: true,
        handle: true
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role === 'confirm') {}
    })();
  }

  openModalMesdonsFinalises(salon) {
    var _this3 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalCtrl.create({
        component: src_app_modals_modal_salon_modal_salon_page__WEBPACK_IMPORTED_MODULE_3__.ModalSalonPage,
        componentProps: {
          selectedRoom: salon,
          allRoom: _this3.mesdonsFinalise
        },
        mode: 'md',
        breakpoints: [0, 1],
        initialBreakpoint: 0.35,
        animated: true,
        handle: true
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role === 'confirm') {}
    })();
  }

  filtration() {
    this.selectedSegment = 'attente';
    this.filterDonAttente = [];
    this.filterDonFinalise = [];
    this.filterDonReserve = [];
    this.filterDemandeAttente = [];
    this.filterDemandeResolu = [];

    if (this.category == 'mesdons') {
      let temp1 = [];
      console.log(this.mesdonsContactes.length);
      this.mesdonsContactes.forEach(don => {
        if (temp1.includes(don.id_don)) {} else {
          temp1.push(don.id_don);
          this.manageDataService.getOneDon(don.id_don).toPromise().then(data => {
            this.filterDonAttente.push({
              id_don: don.id_don,
              id_donateur: don.id_donateur,
              id_receiver: don.id_receiver,
              titre: data.titre,
              media: data.media,
              adresse: data.adresse
            });
          });
        }
      });
      let temp2 = [];
      this.mesdonsReserves.forEach(don => {
        if (temp2.includes(don.id_don)) {} else {
          temp2.push(don.id_don);
          this.manageDataService.getOneDon(don.id_don).toPromise().then(data => {
            this.filterDonReserve.push({
              id_don: don.id_don,
              id_donateur: don.id_donateur,
              id_receiver: don.id_receiver,
              titre: data.titre,
              media: data.media,
              adresse: data.adresse
            });
          });
        }
      });
      let temp3 = [];
      this.mesdonsFinalise.forEach(don => {
        if (temp3.includes(don.id_don)) {} else {
          temp3.push(don.id_don);
          this.manageDataService.getOneDon(don.id_don).toPromise().then(data => {
            this.filterDonFinalise.push({
              id_don: don.id_don,
              id_donateur: don.id_donateur,
              id_receiver: don.id_receiver,
              titre: data.titre,
              media: data.media,
              adresse: data.adresse
            });
          });
        }
      });
    } else if (this.category == 'donsdesires') {
      let temp1 = [];
      this.DonsContactes.forEach(don => {
        if (temp1.includes(don.id_don)) {
          console.log('oui');
        } else {
          console.log('');
          temp1.push(don.id_don);
          this.manageDataService.getOneDon(don.id_don).toPromise().then(data => {
            this.filterDonAttente.push({
              id_don: don.id_don,
              id_donateur: don.id_donateur,
              id_receiver: don.id_receiver,
              titre: data.titre,
              media: data.media,
              adresse: data.adresse
            });
          });
        }
      });
      let temp2 = [];
      this.DonsReserves.forEach(don => {
        if (temp2.includes(don.id_don)) {} else {
          temp2.push(don.id_don);
          this.manageDataService.getOneDon(don.id_don).toPromise().then(data => {
            this.filterDonReserve.push({
              id_don: don.id_don,
              id_donateur: don.id_donateur,
              id_receiver: don.id_receiver,
              titre: data.titre,
              media: data.media,
              adresse: data.adresse
            });
          });
        }
      });
      let temp3 = [];
      this.DonsFinalises.forEach(don => {
        if (temp3.includes(don.id_don)) {} else {
          temp3.push(don.id_don);
          this.manageDataService.getOneDon(don.id_don).toPromise().then(data => {
            this.filterDonFinalise.push({
              id_don: don.id_don,
              id_donateur: don.id_donateur,
              id_receiver: don.id_receiver,
              titre: data.titre,
              media: data.media,
              adresse: data.adresse
            });
          });
        }
      });
    } else if (this.category == 'mesdemandes') {
      let temp1 = [];
      this.mesDemandesContactes.forEach(demande => {
        if (temp1.includes(demande.id_demande)) {} else {
          temp1.push(demande.id_demande);
          this.manageDataService.getOneDemande(demande.id_demande).toPromise().then(data => {
            console.log(data.id_donateur, data.id_receiver);
            this.filterDemandeAttente.push({
              id_createur: demande.id_donateur,
              id_demande: demande.id_demande,
              id_donateur: demande.id_donateur,
              id_receiver: demande.id_receiver,
              id_don: null,
              media: [],
              titre: data.title,
              adresse: data.adresse
            });
          });
        }
      });
      let temp2 = [];
      this.mesDemandeResolus.forEach(demande => {
        if (temp2.includes(demande.id_demande)) {} else {
          temp2.push(demande.id_demande);
          this.manageDataService.getOneDemande(demande.id_demande).toPromise().then(data => {
            this.filterDemandeResolu.push({
              id_createur: demande.id_donateur,
              id_demande: demande.id_demande,
              id_donateur: demande.id_donateur,
              id_receiver: demande.id_receiver,
              id_don: null,
              media: [],
              titre: data.title,
              adresse: data.adresse
            });
          });
        }
      });
    } else if (this.category == 'demandesrepondus') {
      let temp1 = [];
      this.DemandesContactes.forEach(demande => {
        if (temp1.includes(demande.id_demande)) {} else {
          temp1.push(demande.id_demande);
          this.manageDataService.getOneDemande(demande.id_demande).toPromise().then(data => {
            this.filterDemandeAttente.push({
              id_createur: demande.id_donateur,
              id_demande: demande.id_demande,
              id_donateur: demande.id_donateur,
              id_receiver: demande.id_receiver,
              id_don: null,
              media: [],
              titre: data.title,
              adresse: data.adresse
            });
          });
        }
      });
      let temp2 = [];
      this.DemandeResolus.forEach(demande => {
        if (temp2.includes(demande.id_demande)) {} else {
          temp2.push(demande.id_demande);
          this.manageDataService.getOneDemande(demande.id_demande).toPromise().then(data => {
            this.filterDemandeResolu.push({
              id_createur: demande.id_donateur,
              id_demande: demande.id_demande,
              id_donateur: demande.id_donateur,
              id_receiver: demande.id_receiver,
              id_don: null,
              media: [],
              titre: data.title,
              adresse: data.adresse
            });
          });
        }
      });
    }
  }

  showDonContacte() {
    this.seeDonContacte = !this.seeDonContacte;
  }

  showDonReserve() {
    this.seeDonReserve = !this.seeDonReserve;
  }

  showDonFinalise() {
    this.seeDonFinalise = !this.seeDonFinalise;
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 500);
  }

  get id() {
    return this.myId;
  }

  segmentChanged(event) {
    this.selectedSegment = event.target.value;
  }

  getSalonsDons() {
    this.manageDataService.getSalonsDons(this.id).toPromise().then(data => {
      data.forEach(data => {
        this.manageDataService.getOneDon(data.id_don).toPromise().then(don => {
          if (data.reserver > 0 && don.disponible < 1) {
            data.id_donateur == this.id ? this.mesdonsReserves.push({
              id_createur: data.id_donateur,
              id_don: data.id_don,
              id_donateur: data.id_donateur,
              id_receiver: data.id_receiver,
              id_demande: null,
              data: {
                media: don.media,
                titre: don.titre,
                adresse: don.adresse
              }
            }) : this.DonsReserves.push({
              id_createur: data.id_donateur,
              id_don: data.id_don,
              id_donateur: data.id_donateur,
              id_receiver: data.id_receiver,
              id_demande: null,
              data: {
                media: don.media,
                titre: don.titre,
                adresse: don.adresse
              }
            });
          } else if (data.disponible > 0 && data.reserver > 0) {
            data.id_donateur == this.id ? this.mesdonsFinalise.push({
              id_createur: data.id_donateur,
              id_don: data.id_don,
              id_donateur: data.id_donateur,
              id_receiver: data.id_receiver,
              id_demande: null,
              data: {
                media: don.media,
                titre: don.titre,
                adresse: don.adresse
              }
            }) : this.DonsFinalises.push({
              id_createur: data.id_donateur,
              id_don: data.id_don,
              id_donateur: data.id_donateur,
              id_receiver: data.id_receiver,
              id_demande: null,
              data: {
                media: don.media,
                titre: don.titre,
                adresse: don.adresse
              }
            });
          } else {
            data.id_donateur == this.id ? this.mesdonsContactes.push({
              id_createur: data.id_donateur,
              id_don: data.id_don,
              id_donateur: data.id_donateur,
              id_receiver: data.id_receiver,
              id_demande: null,
              data: {
                media: don.media,
                titre: don.titre,
                adresse: don.adresse
              }
            }) : this.DonsContactes.push({
              id_createur: data.id_donateur,
              id_don: data.id_don,
              id_donateur: data.id_donateur,
              id_receiver: data.id_receiver,
              id_demande: null,
              data: {
                media: don.media,
                titre: don.titre,
                adresse: don.adresse
              }
            });
          }
        });
      });
    }).finally(() => {
      setTimeout(() => {
        this.filtration();
      }, 1000);
    });
  }

  getSalonsDemandes() {
    this.manageDataService.getSalonsDemandes(this.id).toPromise().then(data => {
      data.forEach(data => {
        this.manageDataService.getOneDemande(data.id_demande).toPromise().then(demande => {
          if (data.resolu == 0) {
            data.id_donateur == this.id ? this.DemandesContactes.push({
              id_createur: data.id_donateur,
              id_demande: data.id_demande,
              id_donateur: data.id_donateur,
              id_receiver: data.id_receiver,
              id_don: null,
              data: {
                media: [],
                titre: demande.title,
                adresse: demande.adresse
              }
            }) : this.mesDemandesContactes.push({
              id_createur: data.id_donateur,
              id_demande: data.id_demande,
              id_donateur: data.id_donateur,
              id_receiver: data.id_receiver,
              id_don: null,
              data: {
                media: [],
                titre: demande.title,
                adresse: demande.adresse
              }
            });
          } else if (data.resolu > 0) {
            data.id_donateur == this.id ? this.DemandeResolus.push({
              id_createur: data.id_donateur,
              id_demande: data.id_demande,
              id_donateur: data.id_donateur,
              id_receiver: data.id_receiver,
              id_don: null,
              data: {
                media: [],
                titre: demande.title,
                adresse: demande.adresse
              }
            }) : this.mesDemandeResolus.push({
              id_createur: data.id_donateur,
              id_demande: data.id_demande,
              id_donateur: data.id_donateur,
              id_receiver: data.id_receiver,
              id_don: null,
              data: {
                media: [],
                titre: demande.title,
                adresse: demande.adresse
              }
            });
          }
        });
      });
    });
  }

};

ReceptionsPage.ctorParameters = () => [{
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_4__.ManageDataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}];

ReceptionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-receptions',
  template: _receptions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_receptions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ReceptionsPage);


/***/ }),

/***/ 1092:
/*!***************************************************************************!*\
  !*** ./src/app/pages/messages/receptions/receptions.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNlcHRpb25zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6944:
/*!***************************************************************************!*\
  !*** ./src/app/pages/messages/receptions/receptions.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n \n  <ion-segment scrollable style=\"margin-bottom:0;padding-bottom:0\">\n    <ion-row>\n      <ion-col >\n        <ion-icon name=\"funnel\" style=\"margin-top:8%\" size=\"large\" color=\"danger\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-chip id=\"category_select\" color=\"danger\">\n          <ion-text>{{category}}</ion-text>\n          <ion-icon name=\"chevron-down-outline\"></ion-icon>\n        </ion-chip>\n      </ion-col>\n      \n     \n    </ion-row>\n    \n    <ion-popover trigger=\"category_select\" [dismissOnSelect]=\"true\">\n      <ng-template>\n        <ion-content>\n          <ion-list>\n            <ion-item [button]=\"false\" [detail]=\"false\" id=\"dons_list\" disabled><ion-text style=\"font-weight:bold\">Dons</ion-text></ion-item>\n              <ion-item [button]=\"true\" [detail]=\"false\" (click)=\"changeCategory('mesdons')\" lines=\"none\"><ion-text>Mes Dons</ion-text></ion-item>\n              <ion-item [button]=\"true\" [detail]=\"false\" (click)=\"changeCategory('donsdesires')\"><ion-text>Dons Desires</ion-text></ion-item>\n            <ion-item [button]=\"true\" [detail]=\"false\" id=\"demandes_list\" lines=\"none\" disabled><ion-text style=\"font-weight:bold\">Demandes</ion-text></ion-item>\n              <ion-item [button]=\"true\" [detail]=\"false\" (click)=\"changeCategory('mesdemandes')\"><ion-text>Mes demandes</ion-text></ion-item>\n              <ion-item [button]=\"true\" [detail]=\"false\" (click)=\"changeCategory('demandesrepondus')\"><ion-text>Demandes contactes</ion-text></ion-item>\n\n          </ion-list>\n        </ion-content>\n      </ng-template>\n    </ion-popover>\n   \n  </ion-segment>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" class=\"red\">\n    <ion-refresher-content color=\"danger\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" [value]=\"selectedSegment\" color=\"danger\" *ngIf=\"category=='mesdons' || category=='donsdesires'\">\n    <ion-segment-button value=\"attente\">\n      <ion-label>En Attente (<strong>{{filterDonAttente.length}}</strong>)</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"reserve\">\n      <ion-label>Reserve (<strong>{{filterDonReserve.length}}</strong>)</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"finalise\">\n      <ion-label>Finalises (<strong>{{filterDonFinalise.length}}</strong>)</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" [value]=\"selectedSegment\" color=\"danger\" *ngIf=\"category=='mesdemandes' || category=='demandesrepondus'\">\n    <ion-segment-button value=\"attente\">\n      <ion-label>En Attente (<strong>{{filterDemandeAttente.length}}</strong>)</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"resolus\">\n      <ion-label>Resolus (<strong>{{filterDemandeResolu.length}}</strong>)</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n\n  <ion-list *ngIf=\" selectedSegment=='attente'&& filterDemandeAttente.length>0 && category=='mesdemandes'\">\n    <div *ngFor=\"let demande of filterDemandeAttente\" lines=\"none\">\n      <ion-item lines=\"none\" [routerLink]=\"['/salon',demande.id_receiver,demande.id_donateur,demande.id_demande,0]\">\n        <ion-thumbnail slot=\"start\">\n          <img src='../../../../assets/images/ask.png' style=\"border-radius:10px\">\n        </ion-thumbnail>\n        <ion-col>\n          <ion-row style=\"width:100%\">\n          <ion-text style=\"font-weight:bold\">\n            {{demande.titre}}\n          </ion-text>\n          </ion-row>\n          <ion-row style=\"margin-top:10px\">\n            <ion-text color=\"medium\">\n             {{demande.adresse}} \n            </ion-text>\n          </ion-row>\n        </ion-col>\n        <ion-icon name=\"chevron-forward-outline\" size=\"large\" slot=\"end\" color=\"dark\"></ion-icon>\n      </ion-item>\n    </div>\n  </ion-list>\n\n  <ion-list *ngIf=\" selectedSegment=='resolus'&& filterDemandeResolu.length>0 && category=='mesdemandes'\">\n    <div *ngFor=\"let demande of filterDemandeResolu\" lines=\"none\">\n      <ion-item lines=\"none\" [routerLink]=\"['/salon',demande.id_receiver,demande.id_donateur,demande.id_demande,0]\">\n        <ion-thumbnail slot=\"start\">\n          <img src='../../../../assets/images/ask.png' style=\"border-radius:10px\">\n        </ion-thumbnail>\n        <ion-col>\n          <ion-row style=\"width:100%\">\n          <ion-text style=\"font-weight:bold\">\n            {{demande.titre}}\n          </ion-text>\n          </ion-row>\n          <ion-row style=\"margin-top:10px\">\n            <ion-text color=\"medium\">\n             {{demande.adresse}} \n            </ion-text>\n          </ion-row>\n        </ion-col>\n        <ion-icon name=\"chevron-forward-outline\" size=\"large\" slot=\"end\" color=\"dark\"></ion-icon>\n      </ion-item>\n    </div>\n  </ion-list>\n  <ion-list *ngIf=\" selectedSegment=='attente'&& filterDemandeAttente.length>0 && category=='demandesrepondus'\">\n    <div *ngFor=\"let demande of filterDemandeAttente\" lines=\"none\">\n      <ion-item lines=\"none\" [routerLink]=\"['/salon',demande.id_receiver,demande.id_donateur,demande.id_demande,0]\">\n        <ion-thumbnail slot=\"start\">\n          <img src='../../../../assets/images/ask.png' style=\"border-radius:10px\">\n        </ion-thumbnail>\n        <ion-col>\n          <ion-row style=\"width:100%\">\n          <ion-text style=\"font-weight:bold\">\n            {{demande.titre}}\n          </ion-text>\n          </ion-row>\n          <ion-row style=\"margin-top:10px\">\n            <ion-text color=\"medium\">\n             {{demande.adresse}} \n            </ion-text>\n          </ion-row>\n        </ion-col>\n        <ion-icon name=\"chevron-forward-outline\" size=\"large\" slot=\"end\" color=\"dark\"></ion-icon>\n      </ion-item>\n    </div>\n  </ion-list>\n  <ion-list *ngIf=\" selectedSegment=='resolus'&& filterDemandeResolu.length>0 && category=='demandesrepondus'\">\n    <div *ngFor=\"let demande of filterDemandeResolu\" lines=\"none\">\n      <ion-item lines=\"none\" [routerLink]=\"['/salon',demande.id_receiver,demande.id_donateur,demande.id_demande,0]\">\n        <ion-thumbnail slot=\"start\">\n          <img src='../../../../assets/images/ask.png' style=\"border-radius:10px\">\n        </ion-thumbnail>\n        <ion-col>\n          <ion-row style=\"width:100%\">\n          <ion-text style=\"font-weight:bold\">\n            {{demande.titre}}\n          </ion-text>\n          </ion-row>\n          <ion-row style=\"margin-top:10px\">\n            <ion-text color=\"medium\">\n             {{demande.adresse}} \n            </ion-text>\n          </ion-row>\n        </ion-col>\n        <ion-icon name=\"chevron-forward-outline\" size=\"large\" slot=\"end\" color=\"dark\"></ion-icon>\n      </ion-item>\n    </div>\n  </ion-list>\n\n  <ion-list *ngIf=\" selectedSegment=='attente'&& filterDonAttente.length>0 && category=='donsdesires'\">\n    <div *ngFor=\"let salon of filterDonAttente\" lines=\"none\">\n      <ion-item lines=\"none\" [routerLink]=\"['/salon',salon.id_donateur,salon.id_receiver,0,salon.id_don]\">\n        <ion-thumbnail slot=\"start\">\n          <img [src]=\"salon.media.length>0?storage+salon.media[0].filePath:'assets/images/user.png'\" style=\"border-radius:10px\">\n        </ion-thumbnail>\n        <ion-col>\n          <ion-row style=\"width:100%\">\n          <ion-text style=\"font-weight:bold\">\n            {{salon.titre}}\n          </ion-text>\n          </ion-row>\n          <ion-row style=\"margin-top:10px\">\n            <ion-text color=\"medium\">\n             {{salon.adresse}} \n            </ion-text>\n          </ion-row>\n        </ion-col>\n      </ion-item>\n    </div>\n  </ion-list>\n  <ion-list *ngIf=\" selectedSegment=='reserve'&& filterDonReserve.length>0 && category=='donsdesires'\">\n    <div *ngFor=\"let salon of filterDonReserve\" lines=\"none\">\n      <ion-item lines=\"none\" [routerLink]=\"['/salon',salon.id_donateur,salon.id_receiver,0,salon.id_don]\">\n        <ion-thumbnail slot=\"start\">\n          <img [src]=\"salon.media.length>0?storage+salon.media[0].filePath:'assets/images/user.png'\" style=\"border-radius:10px\">\n        </ion-thumbnail>\n        <ion-col>\n          <ion-row style=\"width:100%\">\n          <ion-text style=\"font-weight:bold\">\n            {{salon.titre}}\n          </ion-text>\n          </ion-row>\n          <ion-row style=\"margin-top:10px\">\n            <ion-text color=\"medium\">\n             {{salon.adresse}} \n            </ion-text>\n          </ion-row>\n        </ion-col>\n        <ion-icon name=\"chevron-forward-outline\" size=\"large\" slot=\"end\" color=\"dark\"></ion-icon>\n      </ion-item>\n    </div>\n  </ion-list>\n  <ion-list *ngIf=\" selectedSegment=='finalise'&& filterDonFinalise.length>0 && category=='donsdesires'\">\n    <div *ngFor=\"let salon of filterDonFinalise\" lines=\"none\">\n      <ion-item lines=\"none\" [routerLink]=\"['/salon',salon.id_donateur,salon.id_receiver,0,salon.id_don]\">\n        <ion-thumbnail slot=\"start\"style=\"opacity:0.5\">\n          <ion-img [src]=\"salon.media.length>0?storage+salon.media[0].filePath:'assets/images/user.png'\" style=\"border-radius:10px\">\n            \n          </ion-img>\n        </ion-thumbnail>\n        <ion-col>\n          <ion-row style=\"width:100%\">\n          <ion-text style=\"font-weight:bold\">\n            {{salon.titre}}\n          </ion-text>\n          </ion-row>\n          <ion-row style=\"margin-top:10px\">\n            <ion-text color=\"medium\">\n             {{salon.adresse}} \n            </ion-text>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-row>\n            <img src=\"assets/images/archive.png\"  alt=\"\">\n          </ion-row>\n        </ion-col>\n      </ion-item>\n    </div>\n  </ion-list>\n\n\n\n  <ion-list *ngIf=\" selectedSegment=='attente'&& filterDonAttente.length>0 && category=='mesdons'\">\n    <div *ngFor=\"let salon of filterDonAttente\" lines=\"none\">\n      <ion-item lines=\"none\" (click)=\"openModalMesdonsAttentes(salon)\">\n        <ion-thumbnail slot=\"start\">\n          <img [src]=\"salon.media.length>0?storage+salon.media[0].filePath:'assets/images/user.png'\" style=\"border-radius:10px\">\n        </ion-thumbnail>\n        <ion-col>\n          <ion-row style=\"width:100%\">\n          <ion-text style=\"font-weight:bold\">\n            {{salon.titre}}\n          </ion-text>\n          </ion-row>\n          <ion-row style=\"margin-top:10px\">\n            <ion-text color=\"medium\">\n             {{salon.adresse}} \n            </ion-text>\n          </ion-row>\n        </ion-col>\n        <ion-icon name=\"chevron-forward-outline\" size=\"large\" slot=\"end\" color=\"dark\"></ion-icon>\n      </ion-item>\n    </div>\n  \n  </ion-list>\n  <ion-list *ngIf=\" selectedSegment=='reserve'&& filterDonReserve.length>0 && category=='mesdons'\">\n    <div *ngFor=\"let salon of filterDonReserve\" lines=\"none\" (click)=\"openModalMesdonsReserves(salon)\">\n      <ion-item lines=\"none\">\n        <ion-thumbnail slot=\"start\" >\n          <img [src]=\"salon.media.length>0?storage+salon.media[0].filePath:'assets/images/user.png'\" style=\"border-radius:10px\">\n        </ion-thumbnail>\n        <ion-col>\n          <ion-row style=\"width:100%\">\n          <ion-text style=\"font-weight:bold\">\n            {{salon.titre}}\n          </ion-text>\n          </ion-row>\n          <ion-row style=\"margin-top:10px\">\n            <ion-text color=\"medium\">\n             {{salon.adresse}} \n            </ion-text>\n          </ion-row>\n        </ion-col>\n        <ion-icon name=\"chevron-forward-outline\" size=\"large\" slot=\"end\" color=\"dark\"></ion-icon>\n      </ion-item>\n    </div>\n  \n  </ion-list>\n  <ion-list *ngIf=\" selectedSegment=='finalise'&& filterDonFinalise.length>0 && category=='mesdons'\">\n    <div *ngFor=\"let salon of filterDonFinalise\" lines=\"none\" >\n      <ion-item lines=\"none\">\n        <ion-thumbnail slot=\"start\" style=\"opacity:0.5\">\n          <img  [src]=\"salon.media.length>0?storage+salon.media[0].filePath:'assets/images/user.png'\" style=\"border-radius:10px\">\n        </ion-thumbnail>\n        <ion-col>\n          <ion-row style=\"width:100%\">\n          <ion-text style=\"font-weight:bold\">\n            {{salon.titre}}\n          </ion-text>\n          </ion-row>\n          <ion-row style=\"margin-top:10px\">\n            <ion-text color=\"medium\">\n             {{salon.adresse}} \n            </ion-text>\n          </ion-row>\n        </ion-col>\n      </ion-item>\n    </div>\n  \n  </ion-list>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  <ion-list  *ngIf=\"selectedSegment=='dons'\">\n\n    <ion-item lines=\"none\">\n      <ion-title slot=\"start\">Dons contactes ({{mesdonsContactes.length}})</ion-title>\n      <ion-icon *ngIf=\"!seeDonContacte\" (click)=\"showDonContacte()\" slot=\"end\" name=\"chevron-forward-outline\" size=\"large\"></ion-icon>\n      <ion-icon *ngIf=\"seeDonContacte\" (click)=\"showDonContacte()\" name=\"chevron-down-outline\" slot=\"end\" size=\"large\"></ion-icon>\n    </ion-item>\n    <div *ngIf=\"seeDonContacte\">\n      <div *ngFor=\"let salon of mesdonsContactes\" lines=\"none\" [routerLink]=\"['/salon',salon.id_donateur,salon.id_receiver,salon.id_demande==null?0:salon.id_demande,salon.id_don]\">\n        <ion-item *ngIf=\"salon.id_createur==id\" lines=\"none\">\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"salon.data.media.length>0?storage+salon.data.media[0].filePath:'assets/images/user.png'\" style=\"border-radius:10px\">\n          </ion-thumbnail>\n          <ion-col>\n            <ion-row style=\"width:100%\">\n            <ion-text style=\"font-weight:bold\">\n              {{salon.data.titre}}\n            </ion-text>\n            </ion-row>\n            <ion-row style=\"margin-top:10px\">\n              <ion-text color=\"medium\">\n               {{salon.data.adresse}} \n              </ion-text>\n            </ion-row>\n          </ion-col>\n        </ion-item>\n      </div>\n    </div>\n    \n    \n    <ion-item lines=\"none\">\n      <ion-title slot=\"start\">Dons reserves ({{mesdonsReserves.length}})</ion-title>\n      <ion-icon *ngIf=\"!seeDonReserve\" (click)=\"showDonReserve()\" slot=\"end\" name=\"chevron-forward-outline\" size=\"large\"></ion-icon>\n      <ion-icon *ngIf=\"seeDonReserve\" (click)=\"showDonReserve()\" name=\"chevron-down-outline\" slot=\"end\" size=\"large\"></ion-icon>\n    </ion-item>\n    <div *ngIf=\"seeDonReserve\">\n      <div *ngFor=\"let salon of mesdonsReserves\" lines=\"none\" [routerLink]=\"['/salon',salon.id_donateur,salon.id_receiver,salon.id_demande==null?0:salon.id_demande,salon.id_don]\">\n        <ion-item *ngIf=\"salon.id_createur==id\" lines=\"none\">\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"salon.data.media.length>0?storage+salon.data.media[0].filePath:'assets/images/user.png'\" style=\"border-radius:10px\">\n          </ion-thumbnail>\n          <ion-col>\n            <ion-row style=\"width:100%\">\n            <ion-text style=\"font-weight:bold\">\n              {{salon.data.titre}}\n            </ion-text>\n            </ion-row>\n            <ion-row style=\"margin-top:10px\">\n              <ion-text color=\"medium\">\n               {{salon.data.adresse}} \n              </ion-text>\n            </ion-row>\n          </ion-col>\n        </ion-item>\n      </div>\n    </div>\n\n    <ion-item lines=\"none\">\n      <ion-title slot=\"start\">Dons finalises ({{mesdonsFinalise.length}})</ion-title>\n      <ion-icon *ngIf=\"!seeDonFinalise\" (click)=\"showDonFinalise()\" slot=\"end\" name=\"chevron-forward-outline\" size=\"large\"></ion-icon>\n      <ion-icon *ngIf=\"seeDonFinalise\" (click)=\"showDonFinalise()\" name=\"chevron-down-outline\" slot=\"end\" size=\"large\"></ion-icon>\n    </ion-item>\n    <div *ngIf=\"seeDonFinalise\">\n      <div *ngFor=\"let salon of mesdonsFinalise\" lines=\"none\" [routerLink]=\"['/salon',salon.id_donateur,salon.id_receiver,salon.id_demande==null?0:salon.id_demande,salon.id_don]\">\n        <ion-item *ngIf=\"salon.id_createur==id\" lines=\"none\">\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"salon.data.media.length>0?storage+salon.data.media[0].filePath:'assets/images/user.png'\" style=\"border-radius:10px\">\n          </ion-thumbnail>\n          <ion-col>\n            <ion-row style=\"width:100%\">\n            <ion-text style=\"font-weight:bold\">\n              {{salon.data.titre}}\n            </ion-text>\n            </ion-row>\n            <ion-row style=\"margin-top:10px\">\n              <ion-text color=\"medium\">\n               {{salon.data.adresse}} \n              </ion-text>\n            </ion-row>\n          </ion-col>\n        </ion-item>\n      </div>\n    </div>\n    \n    \n    <!-- <ion-title>Dons convoites </ion-title>\n    <div *ngFor=\"let salon of salonsDons\" lines=\"none\" [routerLink]=\"['/salon',salon.id_donateur,salon.id_receiver,salon.id_demande==null?0:salon.id_demande,salon.id_don]\">\n      <ion-item *ngIf=\"salon.id_createur!=id\" lines=\"none\">\n        <ion-thumbnail slot=\"start\">\n          <img [src]=\"salon.data.media.length>0?storage+salon.data.media[0].filePath:'assets/images/user.png'\" style=\"border-radius:10px\">\n        </ion-thumbnail>\n        <ion-col>\n          <ion-row style=\"width:100%\">\n          <ion-text style=\"font-weight:bold\">\n            {{salon.data.titre}}\n          </ion-text>\n          </ion-row>\n          <ion-row style=\"margin-top:10px\">\n            <ion-text color=\"medium\">\n             {{salon.data.adresse}} \n            </ion-text>\n          </ion-row>\n        </ion-col>\n      </ion-item>\n    </div> -->\n    \n  </ion-list>\n  <ion-list *ngIf=\"selectedSegment=='demandes'\">\n    <ion-title>Mes demandes de receptions</ion-title>\n    <div *ngFor=\"let salon of salonsDemandes\" lines=\"none\" [routerLink]=\"['/salon',salon.id_donateur,salon.id_receiver,salon.id_demande==null?0:salon.id_demande,salon.id_don!=null?salon.id_don:0]\">\n      <ion-item *ngIf=\"salon.id_createur!=id\"> \n        <ion-thumbnail slot=\"start\">\n          <img [src]=\"salon.data.media.length>0?storage+salon.data.media[0].filePath:'../../../../assets/images/ask.png'\" style=\"border-radius:10px\">\n        </ion-thumbnail>\n        <ion-col>\n          <img  alt=\"\">\n          <ion-row style=\"width:100%\">\n          <ion-text style=\"font-weight:bold\">\n            {{salon.data.titre}}\n          </ion-text>\n          </ion-row>\n          <ion-row style=\"margin-top:10px\">\n            <ion-text color=\"medium\">\n             {{salon.data.adresse}} \n            </ion-text>\n          </ion-row>\n        </ion-col>\n      </ion-item>\n    </div>\n    <ion-title>Mes reponses de receptions</ion-title>\n    <div *ngFor=\"let salon of salonsDemandes\" lines=\"none\" [routerLink]=\"['/salon',salon.id_donateur,salon.id_receiver,salon.id_demande==null?0:salon.id_demande,salon.id_don!=null?salon.id_don:0]\">\n      <ion-item *ngIf=\"salon.id_createur==id\"> \n        <ion-thumbnail slot=\"start\">\n          <img [src]=\"salon.data.media.length>0?storage+salon.data.media[0].filePath:'../../../../assets/images/ask.png'\" style=\"border-radius:10px\">\n        </ion-thumbnail>\n        <ion-col>\n          <img  alt=\"\">\n          <ion-row style=\"width:100%\">\n          <ion-text style=\"font-weight:bold\">\n            {{salon.data.titre}}\n          </ion-text>\n          </ion-row>\n          <ion-row style=\"margin-top:10px\">\n            <ion-text color=\"medium\">\n             {{salon.data.adresse}} \n            </ion-text>\n          </ion-row>\n        </ion-col>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-header class=\"ion-no-border\" style=\"background:#ec566a\">\n  <ion-row style=\"width: 100%;\">\n    <ion-col class=\"logo\" size=\"8\" style=\"margin-top:10px\">\n      <ion-title class=\"title\" color=\"light\" style=\"font-weight:bold\">BRIDGE</ion-title>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-row style=\"width: 100%;\">\n      <ion-col style=\"text-align: right\" size=\"6\">\n        <ion-icon name=\"notifications\" size=\"large\" color=\"light\"></ion-icon>\n      </ion-col>\n      <ion-col style=\"text-align: right\" size=\"6\">\n        <ion-icon name=\"person-circle-outline\" size=\"large\" color=\"light\" [routerLink]=\"['/profil-donateur',id]\"></ion-icon>\n      </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content>\n  <ion-grid  style=\"height:100px;width:100%;background:#ec566a;position:relative\">\n  </ion-grid>\n  <ion-list style=\"position:absolute;width:100%;top:0;background: transparent;\">\n    <ion-card style=\"width:95%\" class=\"ion-padding-vertical\">\n    <ion-row style=\"width:100%\" class=\"ion-padding-horizontal\">\n     <ion-col size=\"9\" >\n      <ion-row style=\"text-align:center;width:100%\"><ion-text style=\"font-weight:bold;color:black\">Total balance</ion-text></ion-row>\n      <ion-row style=\"text-align:center;width:100%;margin-top:1em\"><ion-text style=\"font-weight:bolder;font-size:2em;color:black\">$ 2,562.50</ion-text></ion-row>\n     </ion-col>\n     <ion-col size=\"3\">\n      <ion-button style=\"border-radius:10px\" size=\"large\">\n        <ion-icon name=\"add-outline\" size=\"large\"></ion-icon>\n      </ion-button>\n     </ion-col>\n    </ion-row>\n    <ion-row style=\"margin:0;padding:0\">\n      <ion-item-divider class=\"ion-margin-horizontal\"></ion-item-divider>\n    </ion-row>\n    <ion-item lines=\"none\">\n    <ion-col>\n      <ion-row>\n        <ion-button style=\"border-radius:10px\" size=\"large\" color=\"danger\">\n          <ion-icon name=\"arrow-down-outline\" size=\"large\"></ion-icon>\n        </ion-button>\n      </ion-row>\n      <ion-row><ion-text style=\"margin-top:10px;font-weight: bold;\">Withdraw</ion-text></ion-row>\n    </ion-col>\n    <ion-col>\n      <ion-row>\n        <ion-button style=\"border-radius:10px\" size=\"large\" color=\"success\">\n          <ion-icon name=\"card-outline\" size=\"large\"></ion-icon>\n        </ion-button>\n      </ion-row>\n      <ion-row style=\"width:100%;text-align:center;font-weight: bold;margin-left:15%\">\n        <ion-text style=\"margin-top:10px;text-align: center;\">send</ion-text>\n      </ion-row>\n    </ion-col>\n    <ion-col>\n      <ion-row>\n        <ion-button style=\"border-radius:10px\" size=\"large\" color=\"warning\">\n          <ion-icon name=\"cash-outline\" size=\"large\" color=\"light\"></ion-icon>\n        </ion-button>\n      </ion-row>\n      <ion-row><ion-text style=\"margin-top:10px;font-weight: bold;\">Exchange</ion-text></ion-row>\n    </ion-col>\n    \n    </ion-item>\n    </ion-card>\n    <ion-row style=\"width:100%\">\n    <ion-col size=\"6\"> \n     <ion-card class=\"ion-padding\">\n      <ion-row>\n        <ion-text style=\"font-weight:bold;color:gray\">income</ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text color=\"success\" style=\"font-weight:bold;font-size:2em;margin-top:12px\">$ 552.95</ion-text>\n      </ion-row>\n     </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card class=\"ion-padding\">\n        <ion-row>\n          <ion-text style=\"font-weight:bold;color:gray\">Express</ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-text color=\"danger\" style=\"font-weight:bold;font-size:2em;margin-top:12px\">$ 86.45</ion-text>\n        </ion-row>\n       </ion-card>\n    </ion-col>\n    </ion-row>\n    <ion-row style=\"width:100%\">\n      <ion-col size=\"6\"> \n       <ion-card class=\"ion-padding\">\n        <ion-row>\n          <ion-text style=\"font-weight:bold;color:gray\">income</ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-text color=\"success\" style=\"font-weight:bold;font-size:2em;margin-top:12px\">$ 552.95</ion-text>\n        </ion-row>\n       </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"ion-padding\">\n          <ion-row>\n            <ion-text style=\"font-weight:bold;color:gray\">Express</ion-text>\n          </ion-row>\n          <ion-row>\n            <ion-text color=\"danger\" style=\"font-weight:bold;font-size:2em;margin-top:12px\">$ 86.45</ion-text>\n          </ion-row>\n         </ion-card>\n      </ion-col>\n      </ion-row>\n      <ion-row style=\"width:100%\">\n        <ion-col size=\"6\"> \n         <ion-card class=\"ion-padding\">\n          <ion-row>\n            <ion-text style=\"font-weight:bold;color:gray\">income</ion-text>\n          </ion-row>\n          <ion-row>\n            <ion-text color=\"success\" style=\"font-weight:bold;font-size:2em;margin-top:12px\">$ 552.95</ion-text>\n          </ion-row>\n         </ion-card>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-card class=\"ion-padding\">\n            <ion-row>\n              <ion-text style=\"font-weight:bold;color:gray\">Express</ion-text>\n            </ion-row>\n            <ion-row>\n              <ion-text color=\"danger\" style=\"font-weight:bold;font-size:2em;margin-top:12px\">$ 86.45</ion-text>\n            </ion-row>\n           </ion-card>\n        </ion-col>\n        </ion-row>\n\n    <ion-item lines=\"none\">\n      <ion-text slot=\"start\" style=\"font-weight:bold;font-size:1.2em;\">Transactions</ion-text>\n      <ion-text slot=\"end\" color=\"medium\"> view all </ion-text>\n    </ion-item>\n    <ion-card class=\"ion-no-border\">\n    <ion-item lines=\"none\" class=\"ion-margin-horizontal\" style=\"margin:0;padding:0\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../../../assets/images/apple.png\" alt=\"\">\n      </ion-thumbnail>\n      <ion-col>\n        <ion-row><ion-text style=\"font-weight:bold;color:black\">Apple</ion-text></ion-row>\n        <ion-row><ion-text color=\"medium\">Shopping</ion-text></ion-row>\n      </ion-col>\n      <ion-text color=\"danger\"style=\"font-weight:bold\" slot=\"end\"> - $ 150</ion-text>\n    </ion-item>\n  </ion-card>\n  <ion-card class=\"ion-no-border\">\n    <ion-item lines=\"none\" class=\"ion-margin-horizontal\" style=\"margin:0;padding:0\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../../../assets/images/amazon-pay.png\" alt=\"\">\n      </ion-thumbnail>\n      <ion-col>\n        <ion-row><ion-text style=\"font-weight:bold;color:black\">Amazon</ion-text></ion-row>\n        <ion-row><ion-text color=\"medium\">Shopping</ion-text></ion-row>\n      </ion-col>\n      <ion-text color=\"danger\" style=\"font-weight:bold\" slot=\"end\"> - $ 150</ion-text>\n    </ion-item>\n  </ion-card>\n  <ion-item lines=\"none\">\n    <ion-text slot=\"start\" style=\"font-weight:bold;font-size:1.2em;\">My cards</ion-text>\n    <ion-text slot=\"end\" color=\"medium\"> view all </ion-text>\n  </ion-item>\n  </ion-list>\n  \n</ion-content> -->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_messages_receptions_receptions_module_ts.js.map