"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_messages_salon_salon_module_ts"],{

/***/ 758:
/*!**************************************************************!*\
  !*** ./src/app/pages/messages/salon/salon-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalonPageRoutingModule": () => (/* binding */ SalonPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _salon_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salon.page */ 9898);




const routes = [
    {
        path: '',
        component: _salon_page__WEBPACK_IMPORTED_MODULE_0__.SalonPage
    }
];
let SalonPageRoutingModule = class SalonPageRoutingModule {
};
SalonPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SalonPageRoutingModule);



/***/ }),

/***/ 4392:
/*!******************************************************!*\
  !*** ./src/app/pages/messages/salon/salon.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalonPageModule": () => (/* binding */ SalonPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _salon_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salon-routing.module */ 758);
/* harmony import */ var _salon_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salon.page */ 9898);







let SalonPageModule = class SalonPageModule {
};
SalonPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _salon_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalonPageRoutingModule
        ],
        declarations: [_salon_page__WEBPACK_IMPORTED_MODULE_1__.SalonPage]
    })
], SalonPageModule);



/***/ }),

/***/ 9898:
/*!****************************************************!*\
  !*** ./src/app/pages/messages/salon/salon.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalonPage": () => (/* binding */ SalonPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _salon_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salon.page.html?ngResource */ 3730);
/* harmony import */ var _salon_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salon.page.scss?ngResource */ 8669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_modals_modal_popover_modal_popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/modal-popover/modal-popover.page */ 5780);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 8221);











let SalonPage = class SalonPage {
  constructor(route, manageDataService, popoverController, router, toast, alertController, callNumb) {
    this.route = route;
    this.manageDataService = manageDataService;
    this.popoverController = popoverController;
    this.router = router;
    this.toast = toast;
    this.alertController = alertController;
    this.callNumb = callNumb;
    this.isReserv = false;
    this.id_donateur = null;
    this.id_reicv = null;
    this.id_demande = null;
    this.id_don = null;
    this.don = null;
    this.demande = null;
    this.donateur = null;
    this.receiver = null;
    this.convers = [];
    this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.storage;
    this.myId = null;
    this.new_message = "";
    this.nbreserv = null;
    this.createur = null;
    this.delMessageId = 0;
  }

  ngOnInit() {
    this.convers = [];
    this.myId = JSON.parse(localStorage.getItem('mydata')).id;
    this.id_donateur = this.route.snapshot.params['id_donateur'];
    this.id_reicv = this.route.snapshot.params['id_receiver'];
    this.id_demande = this.route.snapshot.params['id_demande'];
    this.id_don = this.route.snapshot.params['id_don'];
    this.id_don != 0 ? this.isdon = true : this.isdon = false;
    this.getDonateur();
    this.getReceiver();
    this.getnbreservations();
    this.isdon ? this.getDon() : this.getDemande();
    this.isdon ? this.getConversDons() : this.getConversDemande();
    setTimeout(() => {
      this.manageDataService.isReserv(this.id_don, this.id_reicv).toPromise().then(data => {
        console.log(data.message);
        data.message == 'oui' ? this.isReserv = true : this.isReserv = false;
      });
    }, 500);
    setTimeout(() => {
      this.whatsappPhone = this.id == this.donat_id ? this.donateur.contact : this.receiver.contact;
      this.whatsappLink = `https://wa.me/${this.whatsappPhone}?text=Hello%20World`;
    }, 600);
  }
  /*-------------------------------------------VARIABLES------------------------------------*/


  callNumber(number) {
    this.callNumb.callNumber(`${number}`, true);
  }

  presentPopover(e) {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: src_app_modals_modal_popover_modal_popover_page__WEBPACK_IMPORTED_MODULE_3__.ModalPopoverPage,
        componentProps: {
          delMessageId: _this.delMessageId
        },
        event: e
      });
      yield popover.present();
      const {
        data,
        role
      } = yield popover.onWillDismiss();

      if (role === 'confirm') {
        console.log('restart');

        _this.ngOnInit();
      }
    })();
  }
  /*-------------------------------------------FUNCTIONS-------------------------------------------*/


  demanderesolu() {
    var _this2 = this;

    this.manageDataService.finishDemande(this.demand_id, {
      resolu: 1
    }).toPromise().then( /*#__PURE__*/function () {
      var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        const toast = _this2.toast.create({
          message: `Demande archive avec succes`,
          icon: 'information-circle',
          duration: 500,
          color: "success"
        });

        _this2.ngOnInit();

        (yield toast).present();
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).catch( /*#__PURE__*/(0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = _this2.toast.create({
        message: `erreur / reessayez `,
        icon: 'information-circle',
        duration: 500,
        color: "warning"
      });

      _this2.ngOnInit();

      (yield toast).present();
    }));
  }

  receptionnerDon() {
    var _this3 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        cssClass: 'deconnexion-alert',
        header: 'Validez vous reellement la reception de ce don ? cette operation peux s\'averrer irreversible',
        buttons: [{
          text: 'annuler',
          role: 'cancel',
          cssClass: 'color:gray',
          handler: () => {}
        }, {
          text: 'Valider',
          role: 'confirm',
          handler: () => {
            _this3.manageDataService.receptionner(_this3.id_don).toPromise().then( /*#__PURE__*/function () {
              var _ref3 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
                const toast = _this3.toast.create({
                  message: `reception valide`,
                  icon: 'information-circle',
                  duration: 500,
                  color: "danger"
                });

                _this3.ngOnInit();

                (yield toast).present();
              });

              return function (_x2) {
                return _ref3.apply(this, arguments);
              };
            }()).catch( /*#__PURE__*/function () {
              var _ref4 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
                const toast = _this3.toast.create({
                  message: `erreur survenue ....`,
                  icon: 'information-circle',
                  duration: 500,
                  color: "warning"
                });

                _this3.ngOnInit();

                (yield toast).present();
              });

              return function (_x3) {
                return _ref4.apply(this, arguments);
              };
            }());
          }
        }]
      });
      yield alert.present();
    })();
  }

  MessageId(id) {
    this.delMessageId = id;
  }

  reserveDon() {
    var _this4 = this;

    let don_id = this.don_id;
    let donateur_id = this.id_reicv;
    this.manageDataService.reserverDon(don_id, donateur_id).toPromise().then( /*#__PURE__*/function () {
      var _ref5 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        const toast = _this4.toast.create({
          message: `Don reserve avec success`,
          icon: 'information-circle',
          duration: 1000,
          color: "success"
        });

        (yield toast).present();
      });

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }()).finally(() => {
      this.ngOnInit();
    });
  }

  annulerReservation() {
    var _this5 = this;

    let don_id = this.don_id;
    let donateur_id = this.id_reicv;
    this.manageDataService.annulerReservation(don_id, donateur_id).toPromise().then( /*#__PURE__*/function () {
      var _ref6 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        const toast = _this5.toast.create({
          message: `Reservation annule`,
          icon: 'information-circle',
          duration: 1000,
          color: "warning"
        });

        (yield toast).present();
      });

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }()).finally(() => {
      this.ngOnInit();
    });
  }

  back() {
    this.router.back();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 500);
  }

  test(e) {
    console.log('suppression du message' + `${e.id}`);
  }

  deleteMessage() {
    var _this6 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this6.alertController.create({
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
            _this6.manageDataService.deleteMessage(_this6.delMessageId).toPromise().then( /*#__PURE__*/function () {
              var _ref7 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
                const toast = _this6.toast.create({
                  message: `message supprime avec success`,
                  icon: 'information-circle',
                  duration: 500,
                  color: "danger"
                });

                _this6.ngOnInit();

                (yield toast).present();
              });

              return function (_x6) {
                return _ref7.apply(this, arguments);
              };
            }()).catch( /*#__PURE__*/function () {
              var _ref8 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
                const toast = _this6.toast.create({
                  message: `erreur survenue ....`,
                  icon: 'information-circle',
                  duration: 500,
                  color: "warning"
                });

                _this6.ngOnInit();

                (yield toast).present();
              });

              return function (_x7) {
                return _ref8.apply(this, arguments);
              };
            }());
          }
        }]
      });
      yield alert.present();
    })();
  }

  get id() {
    return this.myId;
  }

  get donat_id() {
    return this.id_donateur;
  }

  get reic_id() {
    return this.id_reicv;
  }

  get demand_id() {
    return this.id_demande;
  }

  get don_id() {
    return this.id_don;
  }

  get conversation() {
    return this.convers;
  }

  getreserverDon() {
    this.manageDataService.reserverDon(this.don_id, this.donat_id).toPromise().then(data => {
      this.ngOnInit();
    }).catch(err => {
      console.log(err);
    });
  }

  getnbreservations() {
    this.manageDataService.nbreservations(this.don_id).toPromise().then(data => {
      this.nbreserv = data.nombre;
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }

  addMessage() {
    this.isdon ? this.manageDataService.addMessageDon(this.don_id, this.donat_id, this.reic_id, this.new_message, 0, this.id, this.id == this.donat_id ? this.reic_id : this.donat_id).toPromise().then(res => {
      const message = {
        id: res.id,
        donateur_id: Number(res.donateur_id),
        receiver_id: Number(res.receiver_id),
        sender: res.sender,
        receiver: res.receiver,
        contenu: res.contenu,
        created_at: res.created_at
      };
      this.convers.push(message);
      console.log(message);
      this.new_message = "";
    }).catch(err => {}) : this.manageDataService.addMessageDemande(this.demand_id, this.donat_id, this.reic_id, this.new_message, 0, this.id, this.id == this.donat_id ? this.reic_id : this.donat_id).toPromise().then(res => {
      const message = {
        id: res.id,
        donateur_id: Number(res.donateur_id),
        receiver_id: Number(res.receiver_id),
        sender: res.sender,
        receiver: res.receiver,
        contenu: res.contenu,
        created_at: res.created_at
      };
      this.convers.push(message);
      console.log(message);
      this.new_message = "";
    }).catch(err => {});
  }

  getConversDons() {
    this.manageDataService.getConversationsDon(this.donat_id, this.reic_id, this.don_id).toPromise().then(data => {
      this.createur = data.createur_don_id;
      data.data1.forEach(conv => {
        this.convers.push({
          id: conv.id,
          donateur_id: conv.donateur_id,
          receiver_id: conv.receiver_id,
          contenu: conv.contenu,
          sender: conv.sender,
          receiver: conv.receiver,
          created_at: conv.created_at
        });
      });
      data.data2.forEach(conv => {
        this.convers.push({
          id: conv.id,
          donateur_id: conv.donateur_id,
          receiver_id: conv.receiver_id,
          contenu: conv.contenu,
          sender: conv.sender,
          receiver: conv.receiver,
          created_at: conv.created_at
        });
      });
      this.convers.sort((a, b) => a.created_at.localeCompare(b.created_at));
    });
  }

  getConversDemande() {
    this.manageDataService.getConversationsDemande(this.donat_id, this.reic_id, this.demand_id).toPromise().then(data => {
      this.createur = data.createur_demande_id;
      data.data1.forEach(conv => {
        this.convers.push({
          id: conv.id,
          donateur_id: conv.donateur_id,
          receiver_id: conv.receiver_id,
          contenu: conv.contenu,
          sender: conv.sender,
          receiver: conv.receiver,
          created_at: conv.created_at
        });
      });
      data.data2.forEach(conv => {
        this.convers.push({
          id: conv.id,
          donateur_id: conv.donateur_id,
          receiver_id: conv.receiver_id,
          contenu: conv.contenu,
          sender: conv.sender,
          receiver: conv.receiver,
          created_at: conv.created_at
        });
      });
      this.convers.sort((a, b) => a.created_at.localeCompare(b.created_at));
    });
  }

  getDemande() {
    this.manageDataService.getOneDemande(this.demand_id).toPromise().then(data => {
      this.demande = data;
    }).catch(err => {});
  }

  getDonateur() {
    this.manageDataService.getDonateur(this.donat_id).toPromise().then(data => {
      this.donateur = data;
    }).catch(err => {
      console.log(err);
    });
  }

  getReceiver() {
    this.manageDataService.getDonateur(this.reic_id).toPromise().then(data => {
      this.receiver = data;
    }).catch(err => {
      console.log(err);
    });
  }

  getDon() {
    this.manageDataService.getOneDon(this.don_id).toPromise().then(data => {
      this.don = data;
    }).catch(err => {
      console.log(err);
    });
  }

};

SalonPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_4__.ManageDataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__.CallNumber
}];

SalonPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-salon',
  template: _salon_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_salon_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SalonPage);


/***/ }),

/***/ 8669:
/*!*****************************************************************!*\
  !*** ./src/app/pages/messages/salon/salon.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".my-card {\n  width: 80%;\n  float: right;\n  display: flex;\n  flex-wrap: wrap;\n}\n.my-card .date-message {\n  color: rgb(170, 169, 169);\n  width: 100%;\n  float: right;\n  text-align: right;\n  font-weight: bold;\n  margin-top: 5px;\n}\n.my-card .my-message-card {\n  background-color: #ec566a;\n  border: 0.5px solid rgb(195, 195, 195);\n  width: 100%;\n  margin-top: 5%;\n  float: right;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n.my-card .my-message-card .content {\n  font-weight: bold;\n  color: white;\n}\n.her-card {\n  width: 80%;\n  float: left;\n  display: flex;\n  flex-wrap: wrap;\n}\n.her-card .date-message {\n  color: rgb(170, 169, 169);\n  width: 100%;\n  text-align: left;\n  font-weight: bold;\n  margin-top: 5px;\n}\n.her-card .her-message-card {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  background-color: #e3e3e3;\n  border: 0.5px solid rgb(195, 195, 195);\n  width: 100%;\n  margin-top: 5%;\n  float: left;\n}\n.her-card .her-message-card .content {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbG9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFGSjtBQUdJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRFI7QUFHSTtFQUNJLHlCQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7QUFEUjtBQUVRO0VBQ0ksaUJBQUE7RUFBaUIsWUFBQTtBQUM3QjtBQUlBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQURKO0FBRUk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUFSO0FBRUk7RUFDSSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQVI7QUFDUTtFQUNJLGlCQUFBO0FBQ1oiLCJmaWxlIjoic2Fsb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLm15LWNhcmR7XG4gICAgd2lkdGg6ODAlO1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgICYgLmRhdGUtbWVzc2FnZXtcbiAgICAgICAgY29sb3I6cmdiKDE3MCwgMTY5LCAxNjkpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbi10b3A6NXB4XG4gICAgfVxuICAgICYgLm15LW1lc3NhZ2UtY2FyZHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZWM1NjZhIDtcbiAgICAgICAgYm9yZGVyOjAuNXB4IHNvbGlkIHJnYigxOTUsIDE5NSwgMTk1KTtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDo1JTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjhweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICAgICAgICAmIC5jb250ZW50e1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtjb2xvcjp3aGl0ZVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cbi5oZXItY2FyZHtcbiAgICB3aWR0aDo4MCU7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAmIC5kYXRlLW1lc3NhZ2V7XG4gICAgICAgIGNvbG9yOnJnYigxNzAsIDE2OSwgMTY5KTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW4tdG9wOjVweFxuICAgIH1cbiAgICAmIC5oZXItbWVzc2FnZS1jYXJke1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjhweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZTNlM2UzIDtcbiAgICAgICAgYm9yZGVyOjAuNXB4IHNvbGlkIHJnYigxOTUsIDE5NSwgMTk1KTtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDo1JTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICYgLmNvbnRlbnR7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 3730:
/*!*****************************************************************!*\
  !*** ./src/app/pages/messages/salon/salon.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-item>\n    <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"dark\" (click)=\"back()\"></ion-icon>\n    <ion-item *ngIf=\"isdon && don!=null \" style=\"width:100%\" [routerLink]=\"['/menu/dons/details',don.id]\">\n      <ion-thumbnail>\n        <img style=\"border-radius:10px;opacity: {{don.nombre_reserve>0?0.5:1}};\" [src]=\"don.media.length>0?storage+don.media[0].filePath:'assets/images/user.png'\" alt=\"\">\n      </ion-thumbnail>\n      <ion-col size=\"9\">\n        <ion-row>\n          <ion-text style=\"font-weight:bold;margin-left:5%\">{{don.titre|slice:0:12}}</ion-text>\n        </ion-row>\n        <ion-row style=\"margin-top:10px;width:100%\">\n          <ion-text style=\"width:100%;font-weight:bold;margin-left:5%\" [color]=\"don.nombre_reserve==0?'success':'danger'\">\n             {{don.nombre_reserve==0?\"Don Disponible\":isReserv?id==donat_id?\"lui est Reserver\":\"vous est Reserver\":\"Don Reserver\"}}\n          </ion-text>\n        </ion-row>\n      </ion-col>\n    </ion-item>\n    <ion-item *ngIf=\"!isdon && demande!=null \" style=\"width:100%\">\n      <ion-thumbnail >\n        <img style=\"border-radius:10px\" src=\"../../../../assets/images/ask.png\" alt=\"\">\n      </ion-thumbnail>\n      <ion-col size=\"9\">\n        <ion-row style=\"overflow-x:scroll\">\n          <ion-text style=\"font-weight:bold;margin-left:5%\">{{demande.title|slice:0:12}}</ion-text>\n        </ion-row>\n        <ion-row style=\"margin-top:10px;width:100%\">\n          <ion-text style=\"width:100%;font-weight:bold;margin-left:5%;color:gray\">{{demande.resolu==0?\"En cours\":\"Resolu\"}}</ion-text>\n        </ion-row>\n      </ion-col>\n    </ion-item>\n    <ion-icon name=\"ellipsis-vertical-outline\" size=\"large\" color=\"dark\" slot=\"end\"></ion-icon>\n  </ion-item>\n  \n  <ion-item lines=\"none\" *ngIf=\"donateur!=null && receiver!=null\"  >\n    <ion-thumbnail [routerLink]=\"['/profil-donateur',id!=donat_id?donateur.id:receiver.id]\">\n      <img style=\"border-radius:10px\" *ngIf=\"id!=donat_id\" [src]=\"donateur.media.length>0?storage+donateur.media[0].filePath:'assets/images/user.png'\" >\n      <img style=\"border-radius:10px\" *ngIf=\"id==donat_id\" [src]=\"receiver.media.length>0?storage+receiver.media[0].filePath:'assets/images/user.png'\" >\n    </ion-thumbnail>\n    <ion-col [routerLink]=\"['/profil-donateur',id!=donat_id?donateur.id:receiver.id]\">\n      <ion-row>\n        <ion-text *ngIf=\"id!=donat_id\" style=\"font-weight:bold;margin-left:5%\">{{donateur.surname|slice:0:12}} {{donateur.name | uppercase | slice:0:1}}.</ion-text>\n        <ion-text *ngIf=\"id==donat_id\" style=\"font-weight:bold;margin-left:5%\">{{receiver.surname|slice:0:12}} {{receiver.name | uppercase | slice:0:1}}.</ion-text>\n      </ion-row>\n      <ion-row style=\"margin-top:10px\">\n        <ion-text *ngIf=\"id!=donat_id\" style=\"font-weight:bold;margin-left:5%;color:gray\">{{donateur.pays}},{{donateur.ville}}</ion-text>\n        <ion-text *ngIf=\"id==donat_id\" style=\"font-weight:bold;margin-left:5%;color:gray\">{{receiver.pays}},{{receiver.ville}}</ion-text>\n      </ion-row>\n    </ion-col>\n    <ion-icon name=\"call\" size=\"large\" color=\"success\" slot=\"end\" (click)=\"callNumber(id!=donat_id?receiver.contact:donateur.contact)\"></ion-icon>\n    <ion-fab-button color=\"success\" [href]=\"whatsappLink\" slot=\"end\">\n      <ion-icon name=\"logo-whatsapp\"></ion-icon>\n    </ion-fab-button>\n  </ion-item>\n  <ion-row style=\" padding:0;width:100%;border-bottom:0.5px solid rgb(190, 190, 190)\" *ngIf=\"id==createur\" class=\"ion-padding-vertical\">\n    <ion-col size=\"{{isdon&&isReserv?12:6}}\" style=\"text-align:center\" *ngIf=\"isdon && isReserv\">\n      <ion-button color=\"warning\" (click)=\"annulerReservation()\">\n        <ion-text>Annuler</ion-text>\n        <ion-icon name=\"close-outline\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"{{isdon&&!isReserv?12:6}}\" style=\"text-align:center\" *ngIf=\"isdon && !isReserv&&don.nombre_reserve<1\">\n      <ion-button color=\"danger\" (click)=\"reserveDon()\">\n        <ion-text>Reserver</ion-text>\n        <ion-icon name=\"receipt-outline\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\" padding:0;width:100%;border-bottom:0.5px solid rgb(190, 190, 190)\" *ngIf=\"id!=createur\" class=\"ion-padding-vertical\">\n    <ion-col size=\"{{isdon&&isReserv?12:6}}\" style=\"text-align:center\" *ngIf=\"isdon && isReserv&&don.disponible<1\">\n      <ion-button color=\"success\" (click)=\"receptionnerDon()\">\n        <ion-text>Valider la reception</ion-text>\n        <ion-icon name=\"thumbs-up-outline\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"{{isdon&&isReserv?12:6}}\" style=\"text-align:center\" *ngIf=\"isdon && isReserv&&don.disponible>0\">\n      <ion-button color=\"success\" (click)=\"receptionnerDon()\" disabled>\n        <ion-text>Vous avez recu ce don</ion-text>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"!isdon && demande!=null \">\n    <ion-col size=\"{{!isdon?12:6}}\" style=\"text-align:center\" *ngIf=\"!isdon && id==createur &&demande.resolu<1\">\n      <ion-button color=\"success\" (click)=\"demanderesolu()\">\n        <ion-text>Ce donateur a resoud mon besoin</ion-text>\n        <ion-icon name=\"checkmark-done-outline\" size=\"large\"></ion-icon>\n\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"{{!isdon?12:6}}\" style=\"text-align:center\" *ngIf=\"!isdon && demande.resolu>0\">\n      <ion-button color=\"danger\"  fill=\"outline\" disabled>\n        <ion-text>Demande archive</ion-text>\n        <ion-icon name=\"checkmark-done-outline\" size=\"large\"></ion-icon>\n\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content style=\"margin:0;padding:0;border:0\">\n        \n  <ion-popover trigger=\"actionMessage\" [dismissOnSelect]=\"true\">\n    <ng-template>\n      <ion-content>\n        <ion-list>\n          <ion-item [button]=\"true\" [detail]=\"false\" lines=\"none\" (click)=\"presentPopover($event)\">\n            <ion-text slot=\"start\">Supprime</ion-text>\n            <ion-icon name=\"trash-outline\" size=\"large\" color=\"danger\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ng-template>\n  </ion-popover>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" class=\"red\">\n    <ion-refresher-content color=\"danger\"></ion-refresher-content>\n  </ion-refresher>\n  \n  <!-- USER -------- -->\n  <ion-grid class=\"ion-padding\">\n \n <!-- Content -->\n <ion-list *ngIf=\"donateur!=null && receiver!=null\">\n  <div style=\"border:0.5px solid rgb(195, 195, 195);width:90%\" class=\"ion-padding\">\n  <ion-row><ion-text style=\"font-weight:bold\">A propos de {{id!=donat_id?donateur.name:receiver.name}}</ion-text></ion-row>\n  <ion-row style=\"width:100%;\">\n    <ion-text style=\"width:100%;\" *ngIf=\"id!=donat_id\">Membre depuis le <strong>{{donateur.created_at |date:'MMM d, y'}}</strong></ion-text>\n    <ion-text style=\"width:100%;\" *ngIf=\"id==donat_id\">Membre depuis le <strong>{{receiver.created_at |date:'MMM d, y'}}</strong></ion-text>\n  </ion-row>\n  <ion-row class=\"ion-margin-top\">\n      <img src=\"../../../../assets/images/donation.png\" style=\"margin-right:15px\" alt=\"\" >\n      <ion-text style=\"font-weight:bold\">{{id!=donat_id?donateur.dons:receiver.dons}}</ion-text>\n      <ion-text style=\"margin-left:5px\">dons</ion-text>\n      <ion-text style=\"font-weight:bold;margin-left:5px\">, 0</ion-text>\n      <ion-text style=\"margin-left:5px\">receptions</ion-text>\n      \n  </ion-row>\n  \n  <ion-row>\n      <img src=\"../../../../assets/images/demande.png\" style=\"margin-right:15px\" alt=\"\" >\n      <ion-text style=\"font-weight:bold\">{{id!=donat_id?donateur.nbdemandes:receiver.nbdemandes}}</ion-text>\n      <ion-text style=\"margin-left:5px\">demandes</ion-text>\n  </ion-row>\n  </div>\n  <div style=\"border:0.5px solid rgb(195, 195, 195);width:90%;margin-top:5%\" class=\"ion-padding\">\n    <ion-row>\n      <img src=\"../../../../assets/images/law.png\" style=\"margin-right:15px\" alt=\"\" >\n      <ion-text style=\"font-weight:bold\">Charte de bonne conduite</ion-text>\n  </ion-row>\n  <ion-row style=\"width:100%;padding:0;margin:0\">\n    <ul class=\"list\" style=\"margin:0\">\n      <li class=\"item\" style=\"font-weight:bold\">toujours nous signaler Bridge</li>\n      apres avoir recuperer le don , je signale ici que le don a ete reserve\n    </ul>\n    <ul class=\"list\" style=\"margin:0\">\n      <li class=\"item\" style=\"font-weight:bold\">je respecte les autres Bridgers</li>\n      je discute avec politesse et courtoisie\n    </ul>\n    <ul class=\"list\"  style=\"margin:0\">\n      <li class=\"item\" style=\"font-weight:bold\">je tiens mes engagements</li>\n      je prend rendez-vous uniquement si je suis sur(e) de pouvoir l'honorer\n    </ul>\n    <ul class=\"list\"  style=\"margin:0\">\n      <li class=\"item\" style=\"font-weight:bold\">je suis a l'heure</li>\n      je previens en cas de retard ou d'empechement\n    </ul>\n  </ion-row>\n  </div>\n  <div *ngIf=\"don!=null\">\n    <div style=\"width:100%;\" *ngFor=\"let message of conversation\">\n      <div  class=\"my-card\" *ngIf=\"message.sender==id\">\n          <div class=\"ion-padding my-message-card\"  (click)=\"MessageId(message.id);presentPopover($event)\">\n            <ion-row>\n              <ion-text class=\"content\" >{{message.contenu}}</ion-text>\n            </ion-row>\n            </div>\n          <ion-text class=\"date-message\">{{message.created_at | date:'hh:mm - dd MMM'}}</ion-text>\n      </div> \n\n\n      <div class=\"her-card\" *ngIf=\"message.sender!=id\">\n        <div class=\"ion-padding her-message-card\">\n          <ion-row>\n            <ion-text class=\"content\">{{message.contenu}}</ion-text>\n          </ion-row>\n          </div>\n        <ion-text class=\"date-message\">{{message.created_at | date:'hh:mm - dd MMM'}}</ion-text>\n    </div> \n    </div>\n  </div>\n  <div *ngIf=\"don==null\">\n    <div style=\"width:100%;\" *ngFor=\"let message of conversation\">\n      <div  class=\"my-card\" *ngIf=\"message.sender==id\">\n          <div class=\"ion-padding my-message-card\"  (click)=\"MessageId(message.id);presentPopover($event)\">\n            <ion-row>\n              <ion-text class=\"content\" >{{message.contenu}}</ion-text>\n            </ion-row>\n            </div>\n          <ion-text class=\"date-message\">{{message.created_at | date:'hh:mm - dd MMM'}}</ion-text>\n      </div> \n      <div class=\"her-card\" *ngIf=\"message.sender!=id\">\n        <div class=\"ion-padding her-message-card\">\n          <ion-row>\n            <ion-text class=\"content\">{{message.contenu}}</ion-text>\n          </ion-row>\n          </div>\n        <ion-text class=\"date-message\">{{message.created_at | date:'hh:mm - dd MMM'}}</ion-text>\n    </div> \n    </div>\n  </div>\n </ion-list>\n</ion-grid>\n</ion-content>\n<ion-footer style=\"border-top:1px solid rgb(208, 208, 208);border:0;\">\n  <ion-item>\n    <ion-icon name=\"add-outline\" slot=\"start\" size=\"large\" color=\"danger\"></ion-icon>\n    \n    <ion-textarea maxRows=\"4\" [(ngModel)]=\"new_message\"  placeholder=\"Votre message\" style=\"margin:0\"></ion-textarea>\n    \n    <ion-icon  *ngIf=\"new_message.length>1\" name=\"paper-plane-outline\" size=\"large\" slot=\"end\" color=\"danger\" (click)=\"addMessage()\" ></ion-icon>\n      \n  </ion-item>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_messages_salon_salon_module_ts.js.map