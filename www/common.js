"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 7087:
/*!**************************************************************!*\
  !*** ./src/app/modals/modal-annonces/modal-annonces.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalAnnoncesPage": () => (/* binding */ ModalAnnoncesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modal_annonces_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-annonces.page.html?ngResource */ 5868);
/* harmony import */ var _modal_annonces_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-annonces.page.scss?ngResource */ 7852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);







let ModalAnnoncesPage = class ModalAnnoncesPage {
    constructor(manageDataService, modalCtrl) {
        this.manageDataService = manageDataService;
        this.modalCtrl = modalCtrl;
        this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.storage;
    }
    ngOnInit() {
        this.manageDataService.getAnnoncesAssociation(this.association_id).toPromise().then((data) => {
            this.Annonces = data;
        });
        console.log(this.Annonces);
    }
    confirm() {
        return this.modalCtrl.dismiss(null, 'confirm');
    }
};
ModalAnnoncesPage.ctorParameters = () => [
    { type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__.ManageDataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
ModalAnnoncesPage.propDecorators = {
    association_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
ModalAnnoncesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-modal-annonces',
        template: _modal_annonces_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modal_annonces_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalAnnoncesPage);



/***/ }),

/***/ 2111:
/*!********************************************************************************************************!*\
  !*** ./src/app/modals/modal-demandes-adhesion-association/modal-demandes-adhesion-association.page.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalDemandesAdhesionAssociationPage": () => (/* binding */ ModalDemandesAdhesionAssociationPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modal_demandes_adhesion_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-demandes-adhesion-association.page.html?ngResource */ 1839);
/* harmony import */ var _modal_demandes_adhesion_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-demandes-adhesion-association.page.scss?ngResource */ 4786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);







let ModalDemandesAdhesionAssociationPage = class ModalDemandesAdhesionAssociationPage {
  constructor(manageDataService, modalCtrl, toast) {
    this.manageDataService = manageDataService;
    this.modalCtrl = modalCtrl;
    this.toast = toast;
    this.Association = null;
  }

  ngOnInit() {
    this.manageDataService.getOneAssociation(this.id_association).toPromise().then(data => {
      this.Association = data;
    }).catch(() => {
      this.cancel();
    });
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  rejectDemand(id_donateur) {
    var _this = this;

    this.manageDataService.rejectAssociationMember(id_donateur, this.id_association).toPromise().then( /*#__PURE__*/function () {
      var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        const toast = _this.toast.create({
          message: `demande rejete`,
          icon: 'information-circle',
          duration: 1000,
          color: "danger"
        });

        _this.ngOnInit();

        (yield toast).present();
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  acceptDemand(id_donateur) {
    var _this2 = this;

    this.manageDataService.addAssociationMember(id_donateur, this.id_association).toPromise().then( /*#__PURE__*/function () {
      var _ref2 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        const toast = _this2.toast.create({
          message: `demande accpte`,
          icon: 'information-circle',
          duration: 1000,
          color: "success"
        });

        _this2.ngOnInit();

        (yield toast).present();
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

};

ModalDemandesAdhesionAssociationPage.ctorParameters = () => [{
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__.ManageDataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
}];

ModalDemandesAdhesionAssociationPage.propDecorators = {
  id_association: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
ModalDemandesAdhesionAssociationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-modal-demandes-adhesion-association',
  template: _modal_demandes_adhesion_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_modal_demandes_adhesion_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ModalDemandesAdhesionAssociationPage);


/***/ }),

/***/ 192:
/*!******************************************************!*\
  !*** ./src/app/modals/modal-etat/modal-etat.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalEtatPage": () => (/* binding */ ModalEtatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modal_etat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-etat.page.html?ngResource */ 7099);
/* harmony import */ var _modal_etat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-etat.page.scss?ngResource */ 7587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let ModalEtatPage = class ModalEtatPage {
    constructor(modalCtrl, actionSheetController) {
        this.modalCtrl = modalCtrl;
        this.actionSheetController = actionSheetController;
        this.selectedState = [];
    }
    ngOnInit() {
        const etats = this.selectedEtat;
        this.selectedState = etats;
    }
    cancel() {
        return this.modalCtrl.dismiss();
    }
    confirm() {
        return this.modalCtrl.dismiss(this.selectedState, 'confirm');
    }
    choose_neuf() {
        this.selectedState.includes('Neuf') ? this.selectedState = this.selectedState.filter((value) => {
            return value != 'Neuf';
        }) : this.selectedState.push('Neuf');
    }
    choose_bon_etat() {
        this.selectedState.includes('Bon etat') ? this.selectedState = this.selectedState.filter((value) => {
            return value != 'Bon etat';
        }) : this.selectedState.push('Bon etat');
    }
    choose_etat_moyen() {
        this.selectedState.includes('Etat-moyen') ? this.selectedState = this.selectedState.filter((value) => {
            return value != 'Etat-moyen';
        }) : this.selectedState.push('Etat-moyen');
    }
    choose_a_bricoler() {
        this.selectedState.includes('A bricoler') ? this.selectedState = this.selectedState.filter((value) => {
            return value != 'A bricoler';
        }) : this.selectedState.push('A bricoler');
    }
};
ModalEtatPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ActionSheetController }
];
ModalEtatPage.propDecorators = {
    selectedEtat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ModalEtatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-modal-etat',
        template: _modal_etat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modal_etat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalEtatPage);



/***/ }),

/***/ 3951:
/*!******************************************************************!*\
  !*** ./src/app/modals/modal-mouvements/modal-mouvements.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalMouvementsPage": () => (/* binding */ ModalMouvementsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modal_mouvements_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-mouvements.page.html?ngResource */ 5952);
/* harmony import */ var _modal_mouvements_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-mouvements.page.scss?ngResource */ 9654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);







let ModalMouvementsPage = class ModalMouvementsPage {
    constructor(manageDataService, modalCtrl) {
        this.manageDataService = manageDataService;
        this.modalCtrl = modalCtrl;
        this.Mouvements = null;
        this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.storage;
    }
    ngOnInit() {
        this.manageDataService.getMouvementsAssociation(this.association_id).toPromise().then((data) => {
            this.Mouvements = data;
        });
    }
    confirm() {
        return this.modalCtrl.dismiss(null, 'confirm');
    }
};
ModalMouvementsPage.ctorParameters = () => [
    { type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__.ManageDataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
ModalMouvementsPage.propDecorators = {
    association_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
ModalMouvementsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-modal-mouvements',
        template: _modal_mouvements_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modal_mouvements_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalMouvementsPage);



/***/ }),

/***/ 5780:
/*!************************************************************!*\
  !*** ./src/app/modals/modal-popover/modal-popover.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPopoverPage": () => (/* binding */ ModalPopoverPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modal_popover_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-popover.page.html?ngResource */ 8683);
/* harmony import */ var _modal_popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-popover.page.scss?ngResource */ 6607);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);








let ModalPopoverPage = class ModalPopoverPage {
  constructor(http, popover, alertController, toast, manageDataService) {
    this.http = http;
    this.popover = popover;
    this.alertController = alertController;
    this.toast = toast;
    this.manageDataService = manageDataService;
  }

  ngOnInit() {}

  deleteMessage() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'deconnexion-alert',
        header: 'supprimer ce message ?',
        buttons: [{
          text: 'annuler',
          role: 'cancel',
          cssClass: 'color:gray',
          handler: () => {}
        }, {
          text: 'supprimer',
          role: 'confirm',
          handler: () => {
            _this.manageDataService.deleteMessage(_this.delMessageId).toPromise().then( /*#__PURE__*/function () {
              var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
                const toast = _this.toast.create({
                  message: `message supprime avec success`,
                  icon: 'information-circle',
                  duration: 500,
                  color: "danger"
                });

                (yield toast).present();

                _this.cancel();
              });

              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }()).catch( /*#__PURE__*/function () {
              var _ref2 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
                const toast = _this.toast.create({
                  message: `erreur survenue ....`,
                  icon: 'information-circle',
                  duration: 500,
                  color: "warning"
                });

                _this.ngOnInit();

                (yield toast).present();
              });

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());
          }
        }]
      });
      yield alert.present();
    })();
  }

  cancel() {
    return this.popover.dismiss(null, 'confirm');
  }

};

ModalPopoverPage.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}, {
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__.ManageDataService
}];

ModalPopoverPage.propDecorators = {
  delMessageId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }]
};
ModalPopoverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-modal-popover',
  template: _modal_popover_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_modal_popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ModalPopoverPage);


/***/ }),

/***/ 3378:
/*!********************************************************!*\
  !*** ./src/app/modals/modal-salon/modal-salon.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalSalonPage": () => (/* binding */ ModalSalonPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modal_salon_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-salon.page.html?ngResource */ 6520);
/* harmony import */ var _modal_salon_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-salon.page.scss?ngResource */ 2415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);






let ModalSalonPage = class ModalSalonPage {
    constructor(manageDataService, modalCtrl) {
        this.manageDataService = manageDataService;
        this.modalCtrl = modalCtrl;
        this.rooms = [];
        this.load = true;
        this.temp_room = [];
        this.search = '';
    }
    ngOnInit() {
        this.allRoom.forEach(room => {
            this.manageDataService.getLastMessage(room.id_donateur, room.id_receiver, room.id_don).toPromise().then(data => {
                this.temp_room.push({
                    message: data.contenu,
                    date: data.created_at
                });
            }).catch(err => {
                console.log(err);
            });
        });
        this.allRoom.forEach(room => {
            this.manageDataService.getDonateur(room.id_receiver).toPromise().then(data => {
                this.rooms.push({
                    id_donateur: room.id_donateur,
                    id_receiver: room.id_receiver,
                    id_don: room.id_don,
                    reic_img: data.media.lenght > 0 ? data.media[data.media.length - 1] : 'assets/images/user.png',
                    reic_name: data.name,
                    reic_contact: data.contact
                });
            });
        });
        setTimeout(() => {
            this.load = false;
        }, 500);
    }
    cancel() {
        return this.modalCtrl.dismiss(null, 'cancel');
    }
};
ModalSalonPage.ctorParameters = () => [
    { type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__.ManageDataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
ModalSalonPage.propDecorators = {
    selectedRoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    allRoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ModalSalonPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-modal-salon',
        template: _modal_salon_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modal_salon_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalSalonPage);



/***/ }),

/***/ 9444:
/*!*******************************************************!*\
  !*** ./src/app/services/creation/creation.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationService": () => (/* binding */ CreationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);




let CreationService = class CreationService {
    constructor(http) {
        this.http = http;
    }
    createDon(credential, token) {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/dons';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        return this.http.post(api, credential, { headers: headers });
    }
    createDemande(credential, token) {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/demandes';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        return this.http.post(api, credential, { headers: headers });
    }
    createAssociation(credential, token) {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/associations';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        return this.http.post(api, credential, { headers: headers });
    }
};
CreationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
CreationService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CreationService);



/***/ }),

/***/ 2483:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4975dbd0.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_1a99aeb7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-1a99aeb7.js */ 4895);
/* harmony import */ var _haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-683b3b3c.js */ 634);
/* harmony import */ var _index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-3f1a7d95.js */ 2172);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;

  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }

    const target = document.elementFromPoint(x, y);

    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }

    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };

  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;

    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }

    const buttonToModify = currentTouchedButton;
    (0,_index_1a99aeb7_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };

  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }

    const buttonToModify = currentTouchedButton;
    (0,_index_1a99aeb7_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */

    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }

    currentTouchedButton = undefined;
  };

  return (0,_index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};



/***/ }),

/***/ 7481:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-e8b767a8.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isRTL)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = hostEl => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }

  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};



/***/ }),

/***/ 9013:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-5ad6825d.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];

const startFocusVisible = rootEl => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = rootEl ? rootEl.shadowRoot : document;
  const root = rootEl ? rootEl : document.body;

  const setFocus = elements => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };

  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };

  const onKeydown = ev => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);

    if (!keyboardMode) {
      setFocus([]);
    }
  };

  const onFocusin = ev => {
    if (keyboardMode && ev.composedPath) {
      const toFocus = ev.composedPath().filter(el => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }

        return false;
      });
      setFocus(toFocus);
    }
  };

  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };

  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);

  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };

  return {
    destroy,
    setFocus
  };
};



/***/ }),

/***/ 2668:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-ce4f806c.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CoreDelegate),
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-4d272360.js */ 9158);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const attachComponent = /*#__PURE__*/function () {
  var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (delegate, container, component, cssClasses, componentProps, inline) {
    var _a;

    if (delegate) {
      return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }

    if (!inline && typeof component !== 'string' && !(component instanceof HTMLElement)) {
      throw new Error('framework delegate is missing');
    }

    const el = typeof component === 'string' ? (_a = container.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(component) : component;

    if (cssClasses) {
      cssClasses.forEach(c => el.classList.add(c));
    }

    if (componentProps) {
      Object.assign(el, componentProps);
    }

    container.appendChild(el);
    yield new Promise(resolve => (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
    return el;
  });

  return function attachComponent(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }

    element.remove();
  }

  return Promise.resolve();
};

const CoreDelegate = () => {
  let BaseComponent;
  let Reference;

  const attachViewToDom = /*#__PURE__*/function () {
    var _ref2 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parentElement, userComponent, userComponentProps = {}, cssClasses = []) {
      var _a, _b;

      BaseComponent = parentElement;
      /**
       * If passing in a component via the `component` props
       * we need to append it inside of our overlay component.
       */

      if (userComponent) {
        /**
         * If passing in the tag name, create
         * the element otherwise just get a reference
         * to the component.
         */
        const el = typeof userComponent === 'string' ? (_a = BaseComponent.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(userComponent) : userComponent;
        /**
         * Add any css classes passed in
         * via the cssClasses prop on the overlay.
         */

        cssClasses.forEach(c => el.classList.add(c));
        /**
         * Add any props passed in
         * via the componentProps prop on the overlay.
         */

        Object.assign(el, userComponentProps);
        /**
         * Finally, append the component
         * inside of the overlay component.
         */

        BaseComponent.appendChild(el);
        yield new Promise(resolve => (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      } else if (BaseComponent.children.length > 0) {
        // If there is no component, then we need to create a new parent
        // element to apply the css classes to.
        const el = (_b = BaseComponent.ownerDocument) === null || _b === void 0 ? void 0 : _b.createElement('div');
        cssClasses.forEach(c => el.classList.add(c)); // Move each child from the original template to the new parent element.

        el.append(...BaseComponent.children); // Append the new parent element to the original parent element.

        BaseComponent.appendChild(el);
      }
      /**
       * Get the root of the app and
       * add the overlay there.
       */


      const app = document.querySelector('ion-app') || document.body;
      /**
       * Create a placeholder comment so that
       * we can return this component to where
       * it was previously.
       */

      Reference = document.createComment('ionic teleport');
      BaseComponent.parentNode.insertBefore(Reference, BaseComponent);
      app.appendChild(BaseComponent);
      return BaseComponent;
    });

    return function attachViewToDom(_x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }();

  const removeViewFromDom = () => {
    /**
     * Return component to where it was previously in the DOM.
     */
    if (BaseComponent && Reference) {
      Reference.parentNode.insertBefore(BaseComponent, Reference);
      Reference.remove();
    }

    return Promise.resolve();
  };

  return {
    attachViewToDom,
    removeViewFromDom
  };
};



/***/ }),

/***/ 634:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-683b3b3c.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const HapticEngine = {
  getEngine() {
    var _a;

    const win = window;
    return win.TapticEngine || ((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.isPluginAvailable('Haptics')) && win.Capacitor.Plugins.Haptics;
  },

  available() {
    return !!this.getEngine();
  },

  isCordova() {
    return !!window.TapticEngine;
  },

  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },

  impact(options) {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({
      style
    });
  },

  notification(options) {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({
      style
    });
  },

  selection() {
    this.impact({
      style: 'light'
    });
  },

  selectionStart() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },

  selectionChanged() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },

  selectionEnd() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }

};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */

const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */


const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */


const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */


const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */


const hapticImpact = options => {
  HapticEngine.impact(options);
};



/***/ }),

/***/ 2286:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-33ffec25.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ win)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * When accessing the window, it is important
 * to account for SSR applications where the
 * window is not available. Code that accesses
 * window when it is not available will crash.
 * Even checking if `window === undefined` will cause
 * apps to crash in SSR.
 *
 * Use win below to access an SSR-safe version
 * of the window.
 *
 * Example 1:
 * Before:
 * if (window.innerWidth > 768) { ... }
 *
 * After:
 * import { win } from 'path/to/this/file';
 * if (win?.innerWidth > 768) { ... }
 *
 * Note: Code inside of this if-block will
 * not run in an SSR environment.
 */
const win = typeof window !== 'undefined' ? window : undefined;


/***/ }),

/***/ 7288:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3413f7be.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ ION_CONTENT_ELEMENT_SELECTOR),
/* harmony export */   "a": () => (/* binding */ findIonContent),
/* harmony export */   "b": () => (/* binding */ ION_CONTENT_CLASS_SELECTOR),
/* harmony export */   "c": () => (/* binding */ scrollByPoint),
/* harmony export */   "d": () => (/* binding */ disableContentScrollY),
/* harmony export */   "f": () => (/* binding */ findClosestIonContent),
/* harmony export */   "g": () => (/* binding */ getScrollElement),
/* harmony export */   "i": () => (/* binding */ isIonContent),
/* harmony export */   "p": () => (/* binding */ printIonContentErrorMsg),
/* harmony export */   "r": () => (/* binding */ resetContentScrollY),
/* harmony export */   "s": () => (/* binding */ scrollToTop)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-4d272360.js */ 9158);
/* harmony import */ var _index_c4b11676_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-c4b11676.js */ 9273);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const ION_CONTENT_TAG_NAME = 'ION-CONTENT';
const ION_CONTENT_ELEMENT_SELECTOR = 'ion-content';
const ION_CONTENT_CLASS_SELECTOR = '.ion-content-scroll-host';
/**
 * Selector used for implementations reliant on `<ion-content>` for scroll event changes.
 *
 * Developers should use the `.ion-content-scroll-host` selector to target the element emitting
 * scroll events. With virtual scroll implementations this will be the host element for
 * the scroll viewport.
 */

const ION_CONTENT_SELECTOR = `${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`;

const isIonContent = el => el && el.tagName === ION_CONTENT_TAG_NAME;
/**
 * Waits for the element host fully initialize before
 * returning the inner scroll element.
 *
 * For `ion-content` the scroll target will be the result
 * of the `getScrollElement` function.
 *
 * For custom implementations it will be the element host
 * or a selector within the host, if supplied through `scrollTarget`.
 */


const getScrollElement = /*#__PURE__*/function () {
  var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
    if (isIonContent(el)) {
      yield new Promise(resolve => (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      return el.getScrollElement();
    }

    return el;
  });

  return function getScrollElement(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Queries the element matching the selector for IonContent.
 * See ION_CONTENT_SELECTOR for the selector used.
 */


const findIonContent = el => {
  /**
   * First we try to query the custom scroll host selector in cases where
   * the implementation is using an outer `ion-content` with an inner custom
   * scroll container.
   */
  const customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);

  if (customContentHost) {
    return customContentHost;
  }

  return el.querySelector(ION_CONTENT_SELECTOR);
};
/**
 * Queries the closest element matching the selector for IonContent.
 */


const findClosestIonContent = el => {
  return el.closest(ION_CONTENT_SELECTOR);
};
/**
 * Scrolls to the top of the element. If an `ion-content` is found, it will scroll
 * using the public API `scrollToTop` with a duration.
 */


const scrollToTop = (el, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollToTop(durationMs);
  }

  return Promise.resolve(el.scrollTo({
    top: 0,
    left: 0,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Scrolls by a specified X/Y distance in the component. If an `ion-content` is found, it will scroll
 * using the public API `scrollByPoint` with a duration.
 */


const scrollByPoint = (el, x, y, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollByPoint(x, y, durationMs);
  }

  return Promise.resolve(el.scrollBy({
    top: y,
    left: x,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within either the `ion-content` selector or the `.ion-content-scroll-host` class.
 */


const printIonContentErrorMsg = el => {
  return (0,_index_c4b11676_js__WEBPACK_IMPORTED_MODULE_2__.a)(el, ION_CONTENT_ELEMENT_SELECTOR);
};
/**
 * Several components in Ionic need to prevent scrolling
 * during a gesture (card modal, range, item sliding, etc).
 * Use this utility to account for ion-content and custom content hosts.
 */


const disableContentScrollY = contentEl => {
  if (isIonContent(contentEl)) {
    const ionContent = contentEl;
    const initialScrollY = ionContent.scrollY;
    ionContent.scrollY = false;
    /**
     * This should be passed into resetContentScrollY
     * so that we can revert ion-content's scrollY to the
     * correct state. For example, if scrollY = false
     * initially, we do not want to enable scrolling
     * when we call resetContentScrollY.
     */

    return initialScrollY;
  } else {
    contentEl.style.setProperty('overflow', 'hidden');
    return true;
  }
};

const resetContentScrollY = (contentEl, initialScrollY) => {
  if (isIonContent(contentEl)) {
    contentEl.scrollY = initialScrollY;
  } else {
    contentEl.style.removeProperty('overflow');
  }
};



/***/ }),

/***/ 2312:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-45ecc7ca.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ arrowBackSharp),
/* harmony export */   "b": () => (/* binding */ closeCircle),
/* harmony export */   "c": () => (/* binding */ chevronBack),
/* harmony export */   "d": () => (/* binding */ closeSharp),
/* harmony export */   "e": () => (/* binding */ searchSharp),
/* harmony export */   "f": () => (/* binding */ checkmarkOutline),
/* harmony export */   "g": () => (/* binding */ ellipseOutline),
/* harmony export */   "h": () => (/* binding */ caretBackSharp),
/* harmony export */   "i": () => (/* binding */ arrowDown),
/* harmony export */   "j": () => (/* binding */ reorderThreeOutline),
/* harmony export */   "k": () => (/* binding */ reorderTwoSharp),
/* harmony export */   "l": () => (/* binding */ chevronDown),
/* harmony export */   "m": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "n": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "o": () => (/* binding */ chevronForward),
/* harmony export */   "p": () => (/* binding */ caretUpSharp),
/* harmony export */   "q": () => (/* binding */ caretDownSharp),
/* harmony export */   "r": () => (/* binding */ removeOutline),
/* harmony export */   "s": () => (/* binding */ searchOutline),
/* harmony export */   "t": () => (/* binding */ close),
/* harmony export */   "u": () => (/* binding */ menuOutline),
/* harmony export */   "v": () => (/* binding */ menuSharp)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/* Ionicons v6.0.2, ES Modules */
const arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
const checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const close = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>";
const closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>";
const closeSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>";
const ellipseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
const menuOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const menuSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>";
const removeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderThreeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderTwoSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>";
const searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const searchSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";


/***/ }),

/***/ 6524:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-4d5544a0.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEYBOARD_DID_CLOSE": () => (/* binding */ KEYBOARD_DID_CLOSE),
/* harmony export */   "KEYBOARD_DID_OPEN": () => (/* binding */ KEYBOARD_DID_OPEN),
/* harmony export */   "copyVisualViewport": () => (/* binding */ copyVisualViewport),
/* harmony export */   "keyboardDidClose": () => (/* binding */ keyboardDidClose),
/* harmony export */   "keyboardDidOpen": () => (/* binding */ keyboardDidOpen),
/* harmony export */   "keyboardDidResize": () => (/* binding */ keyboardDidResize),
/* harmony export */   "resetKeyboardAssist": () => (/* binding */ resetKeyboardAssist),
/* harmony export */   "setKeyboardClose": () => (/* binding */ setKeyboardClose),
/* harmony export */   "setKeyboardOpen": () => (/* binding */ setKeyboardOpen),
/* harmony export */   "startKeyboardAssist": () => (/* binding */ startKeyboardAssist),
/* harmony export */   "trackViewportChanges": () => (/* binding */ trackViewportChanges)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const KEYBOARD_DID_OPEN = 'ionKeyboardDidShow';
const KEYBOARD_DID_CLOSE = 'ionKeyboardDidHide';
const KEYBOARD_THRESHOLD = 150;
let previousVisualViewport = {};
let currentVisualViewport = {};
let keyboardOpen = false;
/**
 * This is only used for tests
 */

const resetKeyboardAssist = () => {
  previousVisualViewport = {};
  currentVisualViewport = {};
  keyboardOpen = false;
};

const startKeyboardAssist = win => {
  startNativeListeners(win);

  if (!win.visualViewport) {
    return;
  }

  currentVisualViewport = copyVisualViewport(win.visualViewport);

  win.visualViewport.onresize = () => {
    trackViewportChanges(win);

    if (keyboardDidOpen() || keyboardDidResize(win)) {
      setKeyboardOpen(win);
    } else if (keyboardDidClose(win)) {
      setKeyboardClose(win);
    }
  };
};
/**
 * Listen for events fired by native keyboard plugin
 * in Capacitor/Cordova so devs only need to listen
 * in one place.
 */


const startNativeListeners = win => {
  win.addEventListener('keyboardDidShow', ev => setKeyboardOpen(win, ev));
  win.addEventListener('keyboardDidHide', () => setKeyboardClose(win));
};

const setKeyboardOpen = (win, ev) => {
  fireKeyboardOpenEvent(win, ev);
  keyboardOpen = true;
};

const setKeyboardClose = win => {
  fireKeyboardCloseEvent(win);
  keyboardOpen = false;
};
/**
 * Returns `true` if the `keyboardOpen` flag is not
 * set, the previous visual viewport width equal the current
 * visual viewport width, and if the scaled difference
 * of the previous visual viewport height minus the current
 * visual viewport height is greater than KEYBOARD_THRESHOLD
 *
 * We need to be able to accommodate users who have zooming
 * enabled in their browser (or have zoomed in manually) which
 * is why we take into account the current visual viewport's
 * scale value.
 */


const keyboardDidOpen = () => {
  const scaledHeightDifference = (previousVisualViewport.height - currentVisualViewport.height) * currentVisualViewport.scale;
  return !keyboardOpen && previousVisualViewport.width === currentVisualViewport.width && scaledHeightDifference > KEYBOARD_THRESHOLD;
};
/**
 * Returns `true` if the keyboard is open,
 * but the keyboard did not close
 */


const keyboardDidResize = win => {
  return keyboardOpen && !keyboardDidClose(win);
};
/**
 * Determine if the keyboard was closed
 * Returns `true` if the `keyboardOpen` flag is set and
 * the current visual viewport height equals the
 * layout viewport height.
 */


const keyboardDidClose = win => {
  return keyboardOpen && currentVisualViewport.height === win.innerHeight;
};
/**
 * Dispatch a keyboard open event
 */


const fireKeyboardOpenEvent = (win, nativeEv) => {
  const keyboardHeight = nativeEv ? nativeEv.keyboardHeight : win.innerHeight - currentVisualViewport.height;
  const ev = new CustomEvent(KEYBOARD_DID_OPEN, {
    detail: {
      keyboardHeight
    }
  });
  win.dispatchEvent(ev);
};
/**
 * Dispatch a keyboard close event
 */


const fireKeyboardCloseEvent = win => {
  const ev = new CustomEvent(KEYBOARD_DID_CLOSE);
  win.dispatchEvent(ev);
};
/**
 * Given a window object, create a copy of
 * the current visual and layout viewport states
 * while also preserving the previous visual and
 * layout viewport states
 */


const trackViewportChanges = win => {
  previousVisualViewport = Object.assign({}, currentVisualViewport);
  currentVisualViewport = copyVisualViewport(win.visualViewport);
};
/**
 * Creates a deep copy of the visual viewport
 * at a given state
 */


const copyVisualViewport = visualViewport => {
  return {
    width: Math.round(visualViewport.width),
    height: Math.round(visualViewport.height),
    offsetTop: visualViewport.offsetTop,
    offsetLeft: visualViewport.offsetLeft,
    pageTop: visualViewport.pageTop,
    pageLeft: visualViewport.pageLeft,
    scale: visualViewport.scale
  };
};



/***/ }),

/***/ 3963:
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-controller-73af62b2.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createKeyboardController)
/* harmony export */ });
/* harmony import */ var _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-33ffec25.js */ 2286);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * Creates a controller that tracks and reacts to opening or closing the keyboard.
 *
 * @internal
 * @param keyboardChangeCallback A function to call when the keyboard opens or closes.
 */

const createKeyboardController = keyboardChangeCallback => {
  let keyboardWillShowHandler;
  let keyboardWillHideHandler;
  let keyboardVisible;

  const init = () => {
    keyboardWillShowHandler = () => {
      keyboardVisible = true;
      if (keyboardChangeCallback) keyboardChangeCallback(true);
    };

    keyboardWillHideHandler = () => {
      keyboardVisible = false;
      if (keyboardChangeCallback) keyboardChangeCallback(false);
    };

    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillHide', keyboardWillHideHandler);
  };

  const destroy = () => {
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillHide', keyboardWillHideHandler);
    keyboardWillShowHandler = keyboardWillHideHandler = undefined;
  };

  const isKeyboardVisible = () => keyboardVisible;

  init();
  return {
    init,
    destroy,
    isKeyboardVisible
  };
};



/***/ }),

/***/ 3844:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-5d6b6fe7.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const spinners = {
  bubbles: {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${dur * index / total - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(angle)}px`,
          left: `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circles: {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${dur * step - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(angle)}px`,
          left: `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circular: {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  crescent: {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  dots: {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          left: `${9 - 9 * index}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  lines: {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 14,
        y2: 26,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  }
};
const SPINNERS = spinners;


/***/ }),

/***/ 1812:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/swipe-back-fa30a130.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSwipeBackGesture": () => (/* binding */ createSwipeBackGesture)
/* harmony export */ });
/* harmony import */ var _helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-4d272360.js */ 9158);
/* harmony import */ var _dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dir-e8b767a8.js */ 7481);
/* harmony import */ var _index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-3f1a7d95.js */ 2172);
/* harmony import */ var _gesture_controller_17e82006_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gesture-controller-17e82006.js */ 607);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
  const win = el.ownerDocument.defaultView;
  const rtl = (0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
  /**
   * Determine if a gesture is near the edge
   * of the screen. If true, then the swipe
   * to go back gesture should proceed.
   */

  const isAtEdge = detail => {
    const threshold = 50;
    const {
      startX
    } = detail;

    if (rtl) {
      return startX >= win.innerWidth - threshold;
    }

    return startX <= threshold;
  };

  const getDeltaX = detail => {
    return rtl ? -detail.deltaX : detail.deltaX;
  };

  const getVelocityX = detail => {
    return rtl ? -detail.velocityX : detail.velocityX;
  };

  const canStart = detail => {
    return isAtEdge(detail) && canStartHandler();
  };

  const onMove = detail => {
    // set the transition animation's progress
    const delta = getDeltaX(detail);
    const stepValue = delta / win.innerWidth;
    onMoveHandler(stepValue);
  };

  const onEnd = detail => {
    // the swipe back gesture has ended
    const delta = getDeltaX(detail);
    const width = win.innerWidth;
    const stepValue = delta / width;
    const velocity = getVelocityX(detail);
    const z = width / 2.0;
    const shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
    const missing = shouldComplete ? 1 - stepValue : stepValue;
    const missingDistance = missing * width;
    let realDur = 0;

    if (missingDistance > 5) {
      const dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 540);
    }
    /**
     * TODO: stepValue can sometimes return negative values
     * or values greater than 1 which should not be possible.
     * Need to investigate more to find where the issue is.
     */


    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_0__.l)(0, stepValue, 0.9999), realDur);
  };

  return (0,_index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'goback-swipe',
    gesturePriority: 40,
    threshold: 10,
    canStart,
    onStart: onStartHandler,
    onMove,
    onEnd
  });
};



/***/ }),

/***/ 7852:
/*!***************************************************************************!*\
  !*** ./src/app/modals/modal-annonces/modal-annonces.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1hbm5vbmNlcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4786:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modals/modal-demandes-adhesion-association/modal-demandes-adhesion-association.page.scss?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1kZW1hbmRlcy1hZGhlc2lvbi1hc3NvY2lhdGlvbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 7587:
/*!*******************************************************************!*\
  !*** ./src/app/modals/modal-etat/modal-etat.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1ldGF0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 9654:
/*!*******************************************************************************!*\
  !*** ./src/app/modals/modal-mouvements/modal-mouvements.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1tb3V2ZW1lbnRzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6607:
/*!*************************************************************************!*\
  !*** ./src/app/modals/modal-popover/modal-popover.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1wb3BvdmVyLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2415:
/*!*********************************************************************!*\
  !*** ./src/app/modals/modal-salon/modal-salon.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1zYWxvbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5868:
/*!***************************************************************************!*\
  !*** ./src/app/modals/modal-annonces/modal-annonces.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <ion-card *ngFor=\"let annonce of Annonces\" class=\"ion-padding-bottom\" (click)=\"confirm()\">\n    <div [routerLink]=\"['/details-annonce',annonce.id]\" style=\"padding:0;margin:0;height:180px;width:100%;background-size:cover;background-position: center;\n    background-image: url({{annonce.media.length>0?storage+annonce.media[0].filePath:'../../../../assets/images/user.png'}})\">\n    </div>\n    <ion-item  (click)=\"confirm()\" [routerLink]=\"['/details-association',annonce.association.id]\" style=\"width:100%;\" lines=\"none\" class=\"ion-no-padding ion-no-margin\">\n      <ion-thumbnail class=\"ion-margin-start\" slot=\"start\" >\n        <img style=\"border-radius:10px\" [src]=\"annonce.association.media.length>0?storage+annonce.association.media[0].filePath:'../../../../assets/images/user.png'\" />\n      </ion-thumbnail>\n      <ion-col style=\"text-align: left\">\n        <ion-row >\n         <ion-text style=\"font-weight: bold;font-size: 1.1em;\">{{annonce.association.name}}</ion-text>\n        </ion-row >\n        <ion-row style=\"margin-top:2%\">\n          <ion-text style=\"color:gray\">{{annonce.association.type}}</ion-text>\n        </ion-row >\n      </ion-col>\n    </ion-item>\n    <ion-item style=\"width:100%;padding:0;margin:0\" lines=\"none\"  (click)=\"confirm()\" [routerLink]=\"['/details-annonce',annonce.id]\">\n      <ion-text style=\"font-weight:bold;text-align: center;font-size: 1em;\">{{annonce.title | slice:0:30}}{{annonce.title.length > 30 ? '&hellip;':'' }}</ion-text>\n    </ion-item>\n    <ion-item lines=\"none\" (click)=\"confirm()\" [routerLink]=\"['/details-annonce',annonce.id]\">\n      <ion-text style=\"color:gray;font-size:0.8em\">\n      {{annonce.intitule| slice:0:200}}{{annonce.intitule.length > 200 ? '&hellip;':'' }}\n      </ion-text>\n    </ion-item>\n  </ion-card>\n</ion-content>\n";

/***/ }),

/***/ 1839:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modals/modal-demandes-adhesion-association/modal-demandes-adhesion-association.page.html?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\n    <ion-icon name=\"exit-outline\"color=\"danger\" size=\"large\" (click)=\"cancel()\"></ion-icon>\n    <ion-grid *ngIf=\"Association!=null\">\n    <ion-list>\n      <ion-item *ngIf=\"Association.attentes.length<1\" lines=\"none\">\n        <ion-icon name=\"happy-outline\" size=\"large\" slot=\"start\"></ion-icon>\n        <ion-text>Aucune demande actuellement</ion-text>\n      </ion-item>\n    <ion-item *ngFor=\"let user of Association.attentes\" lines=\"none\" style=\"margin-bottom:0.5px dashed rgb(200, 200, 200)\">\n      <ion-icon (click)=\"cancel()\" [routerLink]=\"['/profil-donateur',user.id]\" name=\"person-circle-outline\" slot=\"start\"></ion-icon>\n      <ion-text (click)=\"cancel()\" [routerLink]=\"['/profil-donateur',user.id]\" slot=\"start\" style=\"font-weight:bold\">{{user.name}}</ion-text>\n      <ion-chip (click)=\"acceptDemand(user.id)\" slot=\"end\" color=\"success\" style=\"text-align:left;padding:0\" class=\"ion-justify-content-center\"> \n        <ion-icon name=\"checkmark-outline\" style=\"margin-right:10px\"></ion-icon>\n      </ion-chip>\n      <ion-chip (click)=\"rejectDemand(user.id)\" slot=\"end\" color=\"danger\" style=\"text-align:left;padding:0\" class=\"ion-justify-content-center\"> \n        <ion-icon name=\"close-outline\" style=\"margin-right:10px\"></ion-icon>\n      </ion-chip>\n    </ion-item>\n    </ion-list>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 7099:
/*!*******************************************************************!*\
  !*** ./src/app/modals/modal-etat/modal-etat.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <ion-list class=\"ion-justify-content-between\">\n    <ion-item (click)=\"choose_neuf()\">\n      <ion-icon name=\"ribbon-outline\" slot=\"start\"></ion-icon>\n      <ion-text>Comme neuf</ion-text>\n      <ion-icon *ngIf=\"!selectedState.includes('Neuf')\" name=\"ellipse-outline\" slot=\"end\" size=\"large\" ></ion-icon>\n      <ion-icon *ngIf=\"selectedState.includes('Neuf')\" name=\"checkmark-circle\" slot=\"end\" size=\"large\" color=\"danger\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"choose_bon_etat()\">\n      <ion-icon name=\"checkmark-done-circle-outline\" slot=\"start\"></ion-icon>\n      <ion-text>Bon etat</ion-text>\n      <ion-icon *ngIf=\"!selectedState.includes('Bon etat')\" name=\"ellipse-outline\" slot=\"end\" size=\"large\"></ion-icon>\n      <ion-icon *ngIf=\"selectedState.includes('Bon etat')\"name=\"checkmark-circle\" slot=\"end\" size=\"large\" color=\"danger\"></ion-icon>\n\n    </ion-item>\n    <ion-item (click)=\"choose_etat_moyen()\">\n      <ion-icon name=\"checkmark-circle-outline\" slot=\"start\"></ion-icon>\n      <ion-text>Etat moyen</ion-text>\n      <ion-icon *ngIf=\"!selectedState.includes('Etat-moyen')\" name=\"ellipse-outline\" slot=\"end\" size=\"large\"></ion-icon>\n      <ion-icon *ngIf=\"selectedState.includes('Etat-moyen')\"name=\"checkmark-circle\" slot=\"end\" size=\"large\" color=\"danger\"></ion-icon>\n\n    </ion-item>\n    <ion-item (click)=\"choose_a_bricoler()\">\n      <ion-icon name=\"bed-outline\" slot=\"start\"></ion-icon>\n      <ion-text>A bricoler</ion-text>\n      <ion-icon *ngIf=\"!selectedState.includes('A bricoler')\" name=\"ellipse-outline\" slot=\"end\" size=\"large\"></ion-icon>\n      <ion-icon *ngIf=\"selectedState.includes('A bricoler')\"name=\"checkmark-circle\" slot=\"end\" size=\"large\" color=\"danger\"></ion-icon>\n\n    </ion-item>\n  </ion-list>\n  <ion-button color=\"danger\" expand=\"block\" class=\"ion-margin-horizontal\"(click)='confirm()'>Valider</ion-button>\n</ion-content>\n";

/***/ }),

/***/ 5952:
/*!*******************************************************************************!*\
  !*** ./src/app/modals/modal-mouvements/modal-mouvements.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <ion-card *ngFor=\"let event of Mouvements\" lines=\"none\" class=\"ion-padding-bottom\">\n    <div  [routerLink]=\"['/details-evenement',event.id]\" style=\"padding:0;margin:0;height:180px;width:100%;background-size:cover;background-position: center;\n    background-image: url({{event.media.length>0?storage+event.media[0].filePath:'../../../../assets/images/user.png'}})\">\n    </div>\n    <ion-item style=\"width:100%;\" lines=\"none\" (click)=\"confirm()\" [routerLink]=\"['/details-association',event.association.id]\">\n      <ion-thumbnail slot=\"start\" >\n        <img style=\"border-radius:10px\" [src]=\"event.association.media.length>0?storage+event.association.media[0].filePath:'../../../../assets/images/user.png'\" />\n      </ion-thumbnail>\n      <ion-col style=\"text-align: left\">\n        <ion-row>\n         <ion-text style=\"font-weight: bold\">{{event.association.name}}</ion-text>\n        </ion-row>\n        <ion-row style=\"margin-top:2%\">\n          <ion-text style=\"color:gray\"> {{event.association.type}}</ion-text>\n        </ion-row>\n      </ion-col>\n    </ion-item>\n    <ion-row style=\"width:100%;margin-left:0\" class=\"ion-margin-horizontal\" (click)=\"confirm()\" [routerLink]=\"['/details-evenement',event.id]\">\n      <ion-col size=\"12\">\n      <ion-row style=\"display:flex;\">\n        <ion-icon name=\"information-outline\" color=\"primary\" size=\"small\"></ion-icon>\n        <ion-text style=\"font-weight:bold;color:black;text-align: center;font-size: 1.2em;align-self: center;margin-left: 2%;\" class=\"ion-margin-horizontal\">{{event.intitule | slice:0:30}}{{event.intitule > 30 ? '&hellip;':'' }}</ion-text>  \n      </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"width:100%;margin-left:0\" class=\"ion-margin-horizontal\" (click)=\"confirm()\" [routerLink]=\"['/details-evenement',event.id]\">\n        <ion-col size=\"12\">\n        <ion-row style=\"display:flex;\">\n          <ion-icon name=\"today-outline\" size=\"small\" color=\"primary\"></ion-icon>\n          <ion-text style=\"color:gray;font-size: 1.1em;align-self: center;margin-left: 2%;\"><strong>{{event.date_rencontre | date:'MMM d, y'}} &ensp;</strong> <strong>&ensp;|&ensp;</strong></ion-text>\n          <ion-text style=\"color:gray;font-size:1.1em;align-self: center;\"> &ensp;de &ensp;<strong>{{event.heure_debut}}</strong> &ensp; a &ensp; <strong>{{event.heure_fin}}</strong></ion-text>\n        </ion-row>\n        </ion-col>\n      </ion-row>\n      <!------------------------->\n      <ion-row style=\"width:100%;margin-left:0;margin-top:0\" class=\"ion-margin-horizontal\" (click)=\"confirm()\" [routerLink]=\"['/details-evenement',event.id]\"> \n         <ion-col size=\"12\">\n          <ion-row style=\"display:flex;\">\n            <ion-icon name=\"location-outline\" size=\"small\" color=\"primary\"></ion-icon>\n            <ion-text style=\"color:gray;font-size: 1.1em;align-self: center;margin-left: 2%;\">{{event.association.adresse}}</ion-text>\n          </ion-row>\n         </ion-col>\n      </ion-row>\n      <!-- <ion-row style=\"width:100%\">\n        <ion-col size=\"7\"></ion-col>\n        <ion-col size =\"5\">\n          <ion-button color=\"primary\" (click)=\"confirm()\" [routerLink]=\"['/details-evenement',event.id]\">\n            <ion-text>consulter</ion-text>\n          </ion-button>\n        </ion-col>\n        </ion-row> -->\n  </ion-card>\n</ion-content>\n";

/***/ }),

/***/ 8683:
/*!*************************************************************************!*\
  !*** ./src/app/modals/modal-popover/modal-popover.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <ion-item [button]=\"true\" [detail]=\"false\" lines=\"none\" (click)=\"deleteMessage()\">\n    <ion-text slot=\"start\">Supprime</ion-text>\n    <ion-icon name=\"trash-outline\" size=\"large\" color=\"danger\" slot=\"end\"></ion-icon>\n  </ion-item>\n</ion-content>\n";

/***/ }),

/***/ 6520:
/*!*********************************************************************!*\
  !*** ./src/app/modals/modal-salon/modal-salon.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-item lines=\"none\" class=\"search-item\">\n    <ion-icon name=\"search-outline\" size=\"large\" color=\"dark\"></ion-icon>\n    <ion-input placeholder=\"Recherche dans les messages\" [(ngModel)]=\"search\" ></ion-input>\n    <ion-chip style=\"padding:0\" *ngIf=\"search.length>1\" (click)=\"search=''\">\n      <ion-icon name=\"close-outline\" style=\"margin-right:30%\" color=\"dark\"></ion-icon>\n    </ion-chip>\n  </ion-item>\n</ion-header>\n<ion-content>\n<ion-list  *ngIf=\"load==false\">\n  <div *ngFor=\"let room of rooms;let i = index\">\n    <ion-item lines=\"none\" *ngIf=\"room.id_don==selectedRoom.id_don && room.reic_name.toLowerCase().includes(search) || search=='' \"\n    [routerLink]=\"['/salon',room.id_donateur,room.id_receiver,0,room.id_don]\" (click)=\"cancel()\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"room.reic_img\" style=\"border-radius:10px\">\n      </ion-thumbnail>\n      <ion-col size=\"12\">\n        <ion-row style=\"width:100%\">\n        <ion-text style=\"font-weight:bold;width:50%;text-align:left\">\n         {{room.reic_name}}\n        </ion-text>\n        <ion-text style=\"text-align:right;width:50%;color:gray\">\n         {{temp_room[i].date | date:'h:mm'}}\n        </ion-text>\n        </ion-row>\n        <ion-row style=\"margin-top:10px\">\n          <ion-text color=\"medium\">\n          {{temp_room[i].message}}\n          </ion-text>\n        </ion-row>\n      </ion-col>\n      <ion-col>\n\n      </ion-col>\n    </ion-item>\n  </div>\n  \n</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=common.js.map