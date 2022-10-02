"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_details_details-association_details-association_module_ts"],{

/***/ 88456:
/*!**********************************************************************************!*\
  !*** ./src/app/modals/modal-association-member/modal-association-member.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalAssociationMemberPage": () => (/* binding */ ModalAssociationMemberPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _modal_association_member_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-association-member.page.html?ngResource */ 76539);
/* harmony import */ var _modal_association_member_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-association-member.page.scss?ngResource */ 31242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 58027);






let ModalAssociationMemberPage = class ModalAssociationMemberPage {
    constructor(manageDataService, modalCtrl) {
        this.manageDataService = manageDataService;
        this.modalCtrl = modalCtrl;
        /*------------------------------VARIABLES------------------*/
        this.search = '';
        this.members = [];
    }
    ngOnInit() {
        this.manageDataService.getAssociationMembersList(this.id_association).toPromise().then((data) => {
            this.members = data;
            console.log(data);
        });
    }
    /*------------------------------FUNCTIONS------------------*/
    cancel() {
        return this.modalCtrl.dismiss();
    }
};
ModalAssociationMemberPage.ctorParameters = () => [
    { type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__.ManageDataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
ModalAssociationMemberPage.propDecorators = {
    id_association: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ModalAssociationMemberPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-modal-association-member',
        template: _modal_association_member_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modal_association_member_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalAssociationMemberPage);



/***/ }),

/***/ 17746:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/details-association-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsAssociationPageRoutingModule": () => (/* binding */ DetailsAssociationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _details_association_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-association.page */ 30132);




const routes = [
    {
        path: '',
        component: _details_association_page__WEBPACK_IMPORTED_MODULE_0__.DetailsAssociationPage
    },
    {
        path: 'administration-association/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_details_details-association_administration-association_administration-associati-26c568")]).then(__webpack_require__.bind(__webpack_require__, /*! ./administration-association/administration-association.module */ 32732)).then(m => m.AdministrationAssociationPageModule)
    },
    {
        path: 'besoins-association/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_javascript-time-ago_locale_fr_json_js-node_modules_javascript-time-ago_m-f2b7d5"), __webpack_require__.e("src_app_pages_details_details-association_besoins-association_besoins-association_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./besoins-association/besoins-association.module */ 80678)).then(m => m.BesoinsAssociationPageModule)
    }
];
let DetailsAssociationPageRoutingModule = class DetailsAssociationPageRoutingModule {
};
DetailsAssociationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsAssociationPageRoutingModule);



/***/ }),

/***/ 35241:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/details/details-association/details-association.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsAssociationPageModule": () => (/* binding */ DetailsAssociationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _details_association_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-association-routing.module */ 17746);
/* harmony import */ var _details_association_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-association.page */ 30132);







let DetailsAssociationPageModule = class DetailsAssociationPageModule {
};
DetailsAssociationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _details_association_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsAssociationPageRoutingModule
        ],
        declarations: [_details_association_page__WEBPACK_IMPORTED_MODULE_1__.DetailsAssociationPage]
    })
], DetailsAssociationPageModule);



/***/ }),

/***/ 30132:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/details/details-association/details-association.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsAssociationPage": () => (/* binding */ DetailsAssociationPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _details_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-association.page.html?ngResource */ 50695);
/* harmony import */ var _details_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details-association.page.scss?ngResource */ 24287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 28221);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_modals_modal_annonces_modal_annonces_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modals/modal-annonces/modal-annonces.page */ 97087);
/* harmony import */ var src_app_modals_modal_association_member_modal_association_member_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/modal-association-member/modal-association-member.page */ 88456);
/* harmony import */ var src_app_modals_modal_mouvements_modal_mouvements_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/modal-mouvements/modal-mouvements.page */ 53951);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 58027);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 92340);













let DetailsAssociationPage = class DetailsAssociationPage {
  constructor(manageDataService, router, navCtrl, alertController, modalCtrl, toast, callNumb) {
    this.manageDataService = manageDataService;
    this.router = router;
    this.navCtrl = navCtrl;
    this.alertController = alertController;
    this.modalCtrl = modalCtrl;
    this.toast = toast;
    this.callNumb = callNumb;
    /*---------------------------VARIABLES----------------------------*/

    this.myId = null;
    this.idAssociation = null;
    this.Association = null;
    this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.storage;
  }

  ngOnInit() {
    this.myId = JSON.parse(localStorage.getItem('mydata')).id;
    this.idAssociation = this.router.snapshot.params['id'];
    let id = this.idAssociation;
    this.manageDataService.getOneAssociation(id).toPromise().then(data => {
      this.Association = data;
      console.log(data);
    }).finally(() => {
      this.whatsappPhone = this.Association.contact;
      this.whatsappLink = `https://wa.me/${this.whatsappPhone}?text=Hello%20World`;
    });
  }
  /*---------------------------FUNCTIONS----------------------------*/


  callNumber(number) {
    this.callNumb.callNumber(`${number}`, true);
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 500);
  }

  openModalMembers() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: src_app_modals_modal_association_member_modal_association_member_page__WEBPACK_IMPORTED_MODULE_5__.ModalAssociationMemberPage,
        componentProps: {
          id_association: _this.idAssociation
        },
        breakpoints: [0, 1],
        initialBreakpoint: 0.6,
        animated: true,
        handle: false
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();
    })();
  }

  rejectDemand(id_association) {
    var _this2 = this;

    this.manageDataService.rejectAssociationMember(this.myId, id_association).toPromise().then( /*#__PURE__*/function () {
      var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this2.ngOnInit();

        const toast = _this2.toast.create({
          message: `demande rejete`,
          icon: 'information-circle',
          duration: 2000,
          color: "danger"
        });

        (yield toast).present();
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).catch(() => {
      this.ngOnInit();
    });
  }

  sendDemand(id_association) {
    var _this3 = this;

    this.manageDataService.becameAssociationMember(this.myId, id_association).toPromise().then( /*#__PURE__*/function () {
      var _ref2 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this3.ngOnInit();

        const toast = _this3.toast.create({
          message: `demande envoye`,
          icon: 'information-circle',
          duration: 2000,
          color: "success"
        });

        (yield toast).present();
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()).catch( /*#__PURE__*/(0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.ngOnInit();
    }));
  }

  get Id() {
    return this.myId;
  }

  navBack() {
    this.navCtrl.back();
  }

  openMouvementsModal() {
    var _this4 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalCtrl.create({
        component: src_app_modals_modal_mouvements_modal_mouvements_page__WEBPACK_IMPORTED_MODULE_6__.ModalMouvementsPage,
        componentProps: {
          association_id: _this4.Association.id
        },
        breakpoints: [0, 1],
        initialBreakpoint: 0.6,
        animated: true,
        handle: false
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role === 'confirm') {}
    })();
  }

  openAnnoncesModal() {
    var _this5 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this5.modalCtrl.create({
        component: src_app_modals_modal_annonces_modal_annonces_page__WEBPACK_IMPORTED_MODULE_4__.ModalAnnoncesPage,
        componentProps: {
          association_id: _this5.Association.id
        },
        breakpoints: [0, 1],
        initialBreakpoint: 0.6,
        animated: true,
        handle: false
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role === 'confirm') {}
    })();
  }

};

DetailsAssociationPage.ctorParameters = () => [{
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_7__.ManageDataService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
}, {
  type: _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__.CallNumber
}];

DetailsAssociationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-details-association',
  template: _details_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_details_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DetailsAssociationPage);


/***/ }),

/***/ 31242:
/*!***********************************************************************************************!*\
  !*** ./src/app/modals/modal-association-member/modal-association-member.page.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1hc3NvY2lhdGlvbi1tZW1iZXIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 24287:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/details-association.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = ".image {\n  min-width: 5rem;\n  min-height: 5rem;\n}\n.image img {\n  max-width: 5rem;\n  min-width: 5rem;\n}\n.iframe {\n  width: 100%;\n  height: 230px;\n}\nion-button[shape=circle] {\n  --border-radius: 50%;\n  width: 36px;\n  height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMtYXNzb2NpYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBRVI7QUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBRUo7QUFBQTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHSiIsImZpbGUiOiJkZXRhaWxzLWFzc29jaWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZXtcbiAgICBtaW4td2lkdGg6IDVyZW07ICAgIFxuICAgIG1pbi1oZWlnaHQ6IDVyZW07XG4gICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiA1cmVtOyAgICBcbiAgICAgICAgbWluLXdpZHRoOiA1cmVtO1xuICAgIH1cbn1cbi5pZnJhbWV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OjIzMHB4XG59XG5pb24tYnV0dG9uW3NoYXBlPWNpcmNsZV0ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMzZweDtcbn0iXX0= */";

/***/ }),

/***/ 76539:
/*!***********************************************************************************************!*\
  !*** ./src/app/modals/modal-association-member/modal-association-member.page.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <div style=\"margin-top:5%\"></div>\n  <ion-item lines=\"none\" class=\"search-item\">\n    <ion-icon name=\"search-outline\" size=\"large\" color=\"dark\"></ion-icon>\n    <ion-input placeholder=\"Recherchez par nom | email\" [(ngModel)]=\"search\" ></ion-input>\n    <ion-chip style=\"padding:0\" *ngIf=\"search.length>0\" (click)=\"search=''\">\n      <ion-icon name=\"close-outline\" style=\"margin-right:30%\" color=\"dark\"></ion-icon>\n    </ion-chip>\n  </ion-item>\n  <div *ngFor=\"let user of members\" style=\"margin-top:2%\">\n    <ion-item  lines=\"none\" style=\"margin-bottom:0.5px dashed rgb(200, 200, 200)\"\n    *ngIf=\"user.donateur.name.toLowerCase().includes(search.toLowerCase()) || user.donateur.surname.toLowerCase().includes(search.toLowerCase()) ||\n    user.donateur.email.toLowerCase().includes(search.toLowerCase())|| search==''\">\n      <ion-icon (click)=\"cancel()\"  name=\"person-circle-outline\" size=\"large\" slot=\"start\"  [routerLink]=\"['/profil-donateur',user.id]\"></ion-icon>\n      <ion-text (click)=\"cancel()\"  [routerLink]=\"['/profil-donateur',user.donateur.id]\" slot=\"start\" style=\"font-weight:bold\">{{user.donateur.name}}&ensp;{{user.donateur.surname}}</ion-text>\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 50695:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/details-association.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n \n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content color=\"danger\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-item lines=\"none\">\n    <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"danger\" (click)=\"navBack()\"></ion-icon>\n    <ion-button [routerLink]=\"['administration-association',Association.id]\" shape=\"circle\"slot=\"end\" color=\"danger\" *ngIf=\"Association!=null && Association.idDonateurs.includes(Id)==true\">\n      <ion-icon size=\"large\" name=\"cog-sharp\"></ion-icon>\n    </ion-button>\n  </ion-item>\n\n  <ion-item style=\"width:100%;margin-bottom:2%\"lines=\"none\" *ngIf=\"Association!=null\">\n    <ion-thumbnail class=\"image\" slot=\"start\" >\n      <img  style=\"border-radius:10px\" [src]=\"Association.media.length>0?storage+Association.media[0].filePath:'../../../../assets/images/community.png'\" />\n    </ion-thumbnail>\n    <ion-col style=\"text-align: left;margin:0;padding:0\">\n      <ion-row>\n       <ion-text style=\"font-weight: bold\">{{Association.name}}</ion-text>\n      </ion-row>\n      <ion-row style=\"margin-top:2%;font-weight: bold;\">\n        <ion-text style=\"color:gray\">{{Association.type}}</ion-text>\n      </ion-row>\n      <ion-row style=\"margin-top:2%\">\n        <ion-text style=\"color:gray\">Creer depuis le <strong>{{Association.created_at|date:'dd/mm/yyyy'}}</strong></ion-text>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-row *ngIf=\"Association!=null\" style=\"width:100%;display: flex;border-bottom: 1px dashed rgb(207, 207, 207);border-top: 1px dashed rgb(207, 207, 207)\" >\n    <ion-col style=\"text-align: center;margin-top:2%\"*ngIf=\"Association.attenteId.includes(Id)!=true && Association.idDonateurs.includes(Id)!=true\" >\n      <ion-text style=\"width:100%;height:100%;vertical-align: middle;\">Devenir un membre </ion-text>\n    </ion-col>\n    <ion-col style=\"text-align: center\">\n      <ion-button color=\"danger\" (click)=\"sendDemand(Association.id)\" *ngIf=\"Association.attenteId.includes(Id)!=true && Association.idDonateurs.includes(Id)!=true\">\n        <ion-text>\n          Membre\n        </ion-text>\n      </ion-button>\n      <ion-text color=\"success\" *ngIf=\"Association.attenteId.includes(Id)==true\">\n         Demande d'adhesion envoye \n      </ion-text>\n      <ion-button color=\"danger\" (click)=\"rejectDemand(Association.id)\" *ngIf=\"Association.attenteId.includes(Id)==true\">\n        <ion-text>\n          Annuler\n        </ion-text>\n      </ion-button>\n      <ion-text color=\"danger\" *ngIf=\"Association.idDonateurs.includes(Id)==true\">\n        Vous etes membre de cette association\n     </ion-text>\n      \n    </ion-col>\n  </ion-row>\n  <!-- --------------- -->\n  <ion-row class=\"ion-margin-top\">\n      <ion-item lines=\"none\">\n        <ion-text style=\"font-weight:bold\"> Plus d'informations</ion-text>\n        <ion-icon name=\"caret-down\" color=\"danger\"></ion-icon>\n        <ion-icon name=\"chatbox-ellipses-outline\" slot=\"end\" color=\"light\"></ion-icon>\n      </ion-item>\n  </ion-row>\n  <ion-item lines=\"none\" style=\"margin-bottom:2.5%\" *ngIf=\"Association!=null\">\n    <ion-col size=\"6\" style=\"margin-top:0;padding-top:0\">\n     <ion-row><ion-text style=\"font-weight:bold\" color=\"danger\">Categorie</ion-text></ion-row>\n     <ion-row><ion-text style=\"color:rgb(0, 0, 0);margin-top:10px ;\">{{Association.category}}</ion-text></ion-row>\n    </ion-col>\n    <ion-col size=\"6\" style=\"margin-top:0;padding-top:0\">\n      <ion-row><ion-text style=\"font-weight:bold\" color=\"danger\">Type</ion-text></ion-row>\n      <ion-row><ion-text style=\"color:rgb(0, 0, 0);margin-top:10px ;\">{{Association.type}}</ion-text></ion-row>\n    </ion-col>\n    </ion-item>\n    <ion-item lines=\"none\" style=\"margin-bottom:2.5%\" *ngIf=\"Association!=null\">\n      <ion-col size=\"6\" style=\"margin-top:0;padding-top:0\">\n       <ion-row><ion-text style=\"font-weight:bold\" color=\"danger\">Pays</ion-text></ion-row>\n       <ion-row><ion-text style=\"color:rgb(0, 0, 0);margin-top:10px ;\">{{Association.pays}}</ion-text></ion-row>\n      </ion-col>\n      <ion-col size=\"6\" style=\"margin-top:0;padding-top:0\">\n        <ion-row><ion-text style=\"font-weight:bold\" color=\"danger\">Ville</ion-text></ion-row>\n        <ion-row><ion-text style=\"color:rgb(0, 0, 0);margin-top:10px ;\">{{Association.ville}}</ion-text></ion-row>\n      </ion-col>\n      </ion-item>\n      <ion-item lines=\"none\" style=\"margin-bottom:2.5%\" *ngIf=\"Association!=null\">\n        <ion-col size=\"6\" style=\"margin-top:0;padding-top:0\">\n         <ion-row><ion-text style=\"font-weight:bold\" color=\"danger\">Adresse</ion-text></ion-row>\n         <ion-row><ion-text style=\"color:rgb(0, 0, 0);margin-top:10px ;\">{{Association.adresse}}</ion-text></ion-row>\n        </ion-col>\n        <ion-col size=\"6\" style=\"margin-top:0;padding-top:0\">\n          <ion-row><ion-text style=\"font-weight:bold\" color=\"danger\">Contact principale</ion-text></ion-row>\n          <ion-row><ion-text style=\"color:rgb(0, 0, 0);margin-top:10px ;\">{{Association.contact}}</ion-text></ion-row>\n        </ion-col>\n        </ion-item>\n  <!-- ------------- -->\n  <ion-row class=\"ion-margin-top\">\n    <ion-item lines=\"none\">\n      <ion-text style=\"font-weight:bold\"> Description de l'association</ion-text>\n      <ion-icon name=\"caret-down\" color=\"danger\"></ion-icon>\n      <ion-icon name=\"chatbox-ellipses-outline\" slot=\"end\" color=\"light\"></ion-icon>\n    </ion-item>\n  </ion-row>\n  <ion-row *ngIf=\"Association!=null\">\n    <ion-col size=\"12\" class=\"ion-padding-horizontal\" style=\"text-align:left\">\n      <ion-text color=\"medium-shade\">{{Association.description}}</ion-text>\n    </ion-col>\n  </ion-row>\n<!--  -->\n  <ion-row class=\"ion-margin-top\">\n    <ion-item lines=\"none\">\n      <ion-text style=\"font-weight:bold\">Nous contacter</ion-text>\n      <ion-icon name=\"call-outline\" color=\"danger\" class=\"ion-margin-horizontal\" ></ion-icon>\n      <ion-icon name=\"chatbox-ellipses-outline\" slot=\"end\" color=\"light\"></ion-icon>\n    </ion-item>\n  </ion-row>\n\n  <ion-row>\n    <ion-item lines=\"none\">\n        <ion-button shape=\"circle\" (click)=\"callNumber(Association.contact)\">\n          <ion-icon size=\"large\" name=\"call-outline\"></ion-icon>\n        </ion-button>\n        <ion-button shape=\"circle\" color=\"success\" [href]=\"whatsappLink\">\n          <ion-icon size=\"large\" name=\"logo-whatsapp\"></ion-icon>\n        </ion-button>\n        <ion-button shape=\"circle\" color=\"primary\">\n          <ion-icon size=\"large\" name=\"chatbox-ellipses-outline\"></ion-icon>\n        </ion-button>\n    </ion-item>\n  </ion-row>\n  <!-- GALERIES -->\n  <div *ngIf=\"Association!=null\">\n    <ion-item lines=\"none\" [routerLink]=\"['/modal-galerie-association',this.Association.id]\">\n        <ion-text style=\"font-weight:bold\"> Galerie</ion-text>\n        <ion-icon name=\"images-outline\" color=\"danger\" class=\"ion-margin-horizontal\"></ion-icon>\n        <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n  <ion-row>\n    <ion-col size=\"12\" style=\"display:flex\">\n      <ion-thumbnail class=\"image\" *ngFor=\"let image of Association.media;let i = index\" style=\"margin:1%;\">\n        <img [src]=\"storage+Association.media[i].filePath\" />\n      </ion-thumbnail>\n    </ion-col>\n  </ion-row>\n</div>\n<!-- ----------- -->\n<ion-row class=\"ion-margin-top\">\n  <ion-item lines=\"none\">\n      <ion-text style=\"font-weight:bold\"> Activites</ion-text>\n      <ion-icon name=\"bar-chart-outline\" color=\"danger\" class=\"ion-margin-horizontal\"></ion-icon>\n      <ion-icon name=\"chatbox-ellipses-outline\" slot=\"end\" color=\"light\"></ion-icon>\n  </ion-item>\n</ion-row>\n<ion-item lines=\"none\" *ngIf=\"Association!=null\" (click)=\"openMouvementsModal()\">\n  <ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n  <ion-text slot=\"start\"><strong>{{Association.mouvement.length}}</strong> &ensp; Mouvements organises </ion-text>\n  <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n</ion-item>\n<ion-item lines=\"none\" *ngIf=\"Association!=null\" (click)=\"openAnnoncesModal()\">\n  <ion-icon name=\"megaphone-outline\" slot=\"start\"></ion-icon>\n  <ion-text slot=\"start\"><strong>{{Association.annonce.length}}</strong> &ensp; Annonces publies </ion-text>\n  <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n</ion-item>\n<ion-item lines=\"none\" *ngIf=\"Association!=null\" (click)=\"openModalMembers()\">\n  <ion-icon name=\"people-outline\" slot=\"start\"></ion-icon>\n  <ion-text slot=\"start\"><strong>{{Association.membres.length}}</strong> &ensp; membres </ion-text>\n  <ion-icon name=\"chevron-forward-outline\" slot=\"end\" ></ion-icon>\n</ion-item>\n<ion-item lines=\"none\" *ngIf=\"Association!=null\" [routerLink]=\"['besoins-association',idAssociation]\">\n  <ion-icon name=\"thumbs-up-outline\" slot=\"start\"></ion-icon>\n  <ion-text slot=\"start\"><strong>{{Association.besoin.length}}</strong> &ensp; Besoins de l'association </ion-text>\n  <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n</ion-item>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details_details-association_details-association_module_ts.js.map