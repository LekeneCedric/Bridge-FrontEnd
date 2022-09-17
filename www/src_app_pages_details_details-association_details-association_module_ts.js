"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_details_details-association_details-association_module_ts"],{

/***/ 7746:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/details-association-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsAssociationPageRoutingModule": () => (/* binding */ DetailsAssociationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _details_association_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-association.page */ 132);




const routes = [
    {
        path: '',
        component: _details_association_page__WEBPACK_IMPORTED_MODULE_0__.DetailsAssociationPage
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

/***/ 5241:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/details/details-association/details-association.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsAssociationPageModule": () => (/* binding */ DetailsAssociationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _details_association_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-association-routing.module */ 7746);
/* harmony import */ var _details_association_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-association.page */ 132);







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

/***/ 132:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/details/details-association/details-association.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsAssociationPage": () => (/* binding */ DetailsAssociationPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _details_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-association.page.html?ngResource */ 695);
/* harmony import */ var _details_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details-association.page.scss?ngResource */ 4287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_modals_modal_annonces_modal_annonces_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/modal-annonces/modal-annonces.page */ 7087);
/* harmony import */ var src_app_modals_modal_mouvements_modal_mouvements_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modals/modal-mouvements/modal-mouvements.page */ 3951);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 2340);











let DetailsAssociationPage = class DetailsAssociationPage {
  constructor(manageDataService, router, navCtrl, alertController, modalCtrl) {
    this.manageDataService = manageDataService;
    this.router = router;
    this.navCtrl = navCtrl;
    this.alertController = alertController;
    this.modalCtrl = modalCtrl;
    /*---------------------------VARIABLES----------------------------*/

    this.myId = null;
    this.idAssociation = null;
    this.Association = null;
    this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.storage;
  }

  ngOnInit() {
    this.myId = JSON.parse(localStorage.getItem('mydata')).id;
    this.idAssociation = this.router.snapshot.params['id'];
    let id = this.idAssociation;
    this.manageDataService.getOneAssociation(id).toPromise().then(data => {
      this.Association = data;
      console.log(data);
    });
  }
  /*---------------------------FUNCTIONS----------------------------*/


  get Id() {
    return this.myId;
  }

  navBack() {
    this.navCtrl.back();
  }

  openMouvementsModal() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: src_app_modals_modal_mouvements_modal_mouvements_page__WEBPACK_IMPORTED_MODULE_4__.ModalMouvementsPage,
        componentProps: {
          mouvements: _this.Association.mouvement
        },
        breakpoints: [0, 1],
        initialBreakpoint: 1,
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

  openAnnoncesModal() {
    var _this2 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: src_app_modals_modal_annonces_modal_annonces_page__WEBPACK_IMPORTED_MODULE_3__.ModalAnnoncesPage,
        componentProps: {
          annonces: _this2.Association.annonce
        },
        breakpoints: [0, 1],
        initialBreakpoint: 1,
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

};

DetailsAssociationPage.ctorParameters = () => [{
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_5__.ManageDataService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}];

DetailsAssociationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-details-association',
  template: _details_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_details_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DetailsAssociationPage);


/***/ }),

/***/ 4287:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/details-association.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = ".image {\n  min-width: 5rem;\n  min-height: 5rem;\n}\n.image img {\n  max-width: 5rem;\n  min-width: 5rem;\n}\n.iframe {\n  width: 100%;\n  height: 230px;\n}\nion-button[shape=circle] {\n  --border-radius: 50%;\n  width: 36px;\n  height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMtYXNzb2NpYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBRVI7QUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBRUo7QUFBQTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHSiIsImZpbGUiOiJkZXRhaWxzLWFzc29jaWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZXtcbiAgICBtaW4td2lkdGg6IDVyZW07ICAgIFxuICAgIG1pbi1oZWlnaHQ6IDVyZW07XG4gICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiA1cmVtOyAgICBcbiAgICAgICAgbWluLXdpZHRoOiA1cmVtO1xuICAgIH1cbn1cbi5pZnJhbWV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OjIzMHB4XG59XG5pb24tYnV0dG9uW3NoYXBlPWNpcmNsZV0ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMzZweDtcbn0iXX0= */";

/***/ }),

/***/ 695:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/details/details-association/details-association.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" *ngIf=\"Association!=null && Association.idDonateurs.includes(Id)==true\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button color=\"light\" routerLink=\"/creation-dons\">\n        <ion-icon name=\"calendar-outline\" size=\"large\" color=\"success\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"warning\" routerLink=\"/creation-demandes\">\n        <ion-icon name=\"megaphone-outline\" size=\"large\" color=\"light\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"light\" routerLink=\"/creation-demandes\">\n        <ion-icon name=\"person-add-outline\" size=\"large\" color=\"primary\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-item lines=\"none\">\n    <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"primary\" (click)=\"navBack()\"></ion-icon>\n    <ion-button shape=\"circle\"slot=\"end\" color=\"primary\" *ngIf=\"Association!=null && Association.idDonateurs.includes(Id)==true\">\n      <ion-icon size=\"large\" name=\"cog-sharp\"></ion-icon>\n    </ion-button>\n  </ion-item>\n\n  <ion-item style=\"width:100%;margin-bottom:2%\"lines=\"none\" *ngIf=\"Association!=null\">\n    <ion-thumbnail class=\"image\" slot=\"start\" >\n      <img  style=\"border-radius:10px\" [src]=\"Association.media.length>0?storage+Association.media[0].filePath:'../../../../assets/images/community.png'\" />\n    </ion-thumbnail>\n    <ion-col style=\"text-align: left;margin:0;padding:0\">\n      <ion-row>\n       <ion-text style=\"font-weight: bold\">{{Association.name}}</ion-text>\n      </ion-row>\n      <ion-row style=\"margin-top:2%;font-weight: bold;\">\n        <ion-text style=\"color:gray\">{{Association.type}}</ion-text>\n      </ion-row>\n      <ion-row style=\"margin-top:2%\">\n        <ion-text style=\"color:gray\">Creer depuis le {{Association.created_at|date:'dd/mm/yyyy'}}</ion-text>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-row *ngIf=\"Association!=null\" style=\"width:100%;display: flex;border-bottom: 1px dashed rgb(207, 207, 207);border-top: 1px dashed rgb(207, 207, 207)\" >\n    <ion-col style=\"text-align: center;margin-top:2%\"*ngIf=\"Association.attente.includes(Id)!=true && Association.idDonateurs.includes(Id)!=true\" >\n      <ion-text style=\"width:100%;height:100%;vertical-align: middle;\">Devenir un membre </ion-text>\n    </ion-col>\n    <ion-col style=\"text-align: center\">\n      <ion-button color=\"danger\" *ngIf=\"Association.attente.includes(Id)!=true && Association.idDonateurs.includes(Id)!=true\">\n        <ion-text>\n          Membre\n        </ion-text>\n      </ion-button>\n      <ion-text color=\"success\" *ngIf=\"Association.attente.includes(Id)==true\">\n         Demande d'adhesion envoye \n      </ion-text>\n      <ion-text color=\"primary\" *ngIf=\"Association.idDonateurs.includes(Id)==true\">\n        Vous etes membre de cette association\n     </ion-text>\n      \n    </ion-col>\n  </ion-row>\n  <!-- --------------- -->\n  <ion-row class=\"ion-margin-top\">\n      <ion-item lines=\"none\">\n        <ion-text style=\"font-weight:bold\"> Plus d'informations</ion-text>\n        <ion-icon name=\"caret-down\" color=\"primary\"></ion-icon>\n        <ion-icon name=\"chatbox-ellipses-outline\" slot=\"end\" color=\"light\"></ion-icon>\n      </ion-item>\n  </ion-row>\n  <ion-item lines=\"none\" style=\"margin-bottom:2.5%\" *ngIf=\"Association!=null\">\n    <ion-col size=\"6\" style=\"margin-top:0;padding-top:0\">\n     <ion-row><ion-text style=\"font-weight:bold\" color=\"primary\">Categorie</ion-text></ion-row>\n     <ion-row><ion-text style=\"color:rgb(0, 0, 0);margin-top:10px ;\">{{Association.category}}</ion-text></ion-row>\n    </ion-col>\n    <ion-col size=\"6\" style=\"margin-top:0;padding-top:0\">\n      <ion-row><ion-text style=\"font-weight:bold\" color=\"primary\">Type</ion-text></ion-row>\n      <ion-row><ion-text style=\"color:rgb(0, 0, 0);margin-top:10px ;\">{{Association.type}}</ion-text></ion-row>\n    </ion-col>\n    </ion-item>\n    <ion-item lines=\"none\" style=\"margin-bottom:2.5%\" *ngIf=\"Association!=null\">\n      <ion-col size=\"6\" style=\"margin-top:0;padding-top:0\">\n       <ion-row><ion-text style=\"font-weight:bold\" color=\"primary\">Pays</ion-text></ion-row>\n       <ion-row><ion-text style=\"color:rgb(0, 0, 0);margin-top:10px ;\">{{Association.pays}}</ion-text></ion-row>\n      </ion-col>\n      <ion-col size=\"6\" style=\"margin-top:0;padding-top:0\">\n        <ion-row><ion-text style=\"font-weight:bold\" color=\"primary\">Ville</ion-text></ion-row>\n        <ion-row><ion-text style=\"color:rgb(0, 0, 0);margin-top:10px ;\">{{Association.ville}}</ion-text></ion-row>\n      </ion-col>\n      </ion-item>\n      <ion-item lines=\"none\" style=\"margin-bottom:2.5%\" *ngIf=\"Association!=null\">\n        <ion-col size=\"6\" style=\"margin-top:0;padding-top:0\">\n         <ion-row><ion-text style=\"font-weight:bold\" color=\"primary\">Adresse</ion-text></ion-row>\n         <ion-row><ion-text style=\"color:rgb(0, 0, 0);margin-top:10px ;\">{{Association.adresse}}</ion-text></ion-row>\n        </ion-col>\n        <ion-col size=\"6\" style=\"margin-top:0;padding-top:0\">\n          <ion-row><ion-text style=\"font-weight:bold\" color=\"primary\">Contact principale</ion-text></ion-row>\n          <ion-row><ion-text style=\"color:rgb(0, 0, 0);margin-top:10px ;\">{{Association.contact}}</ion-text></ion-row>\n        </ion-col>\n        </ion-item>\n  <!-- ------------- -->\n  <ion-row class=\"ion-margin-top\">\n    <ion-item lines=\"none\">\n      <ion-text style=\"font-weight:bold\"> Description de l'association</ion-text>\n      <ion-icon name=\"caret-down\" color=\"primary\"></ion-icon>\n      <ion-icon name=\"chatbox-ellipses-outline\" slot=\"end\" color=\"light\"></ion-icon>\n    </ion-item>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\" class=\"ion-padding-horizontal\" style=\"text-align:left\">\n      <ion-text color=\"medium-shade\" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</ion-text>\n    </ion-col>\n  </ion-row>\n<!--  -->\n  <ion-row class=\"ion-margin-top\">\n    <ion-item lines=\"none\">\n      <ion-text style=\"font-weight:bold\">Nous contacter</ion-text>\n      <ion-icon name=\"call-outline\" color=\"primary\" class=\"ion-margin-horizontal\" ></ion-icon>\n      <ion-icon name=\"chatbox-ellipses-outline\" slot=\"end\" color=\"light\"></ion-icon>\n    </ion-item>\n  </ion-row>\n\n  <ion-row>\n    <ion-item lines=\"none\">\n        <ion-button shape=\"circle\" (click)=\"buttonClicked()\">\n          <ion-icon size=\"large\" name=\"call-sharp\"></ion-icon>\n        </ion-button>\n        <ion-button shape=\"circle\" (click)=\"buttonClicked()\" color=\"success\">\n          <ion-icon size=\"large\" name=\"logo-whatsapp\"></ion-icon>\n        </ion-button>\n        <ion-button shape=\"circle\" (click)=\"buttonClicked()\" color=\"success\">\n          <ion-icon size=\"large\" name=\"chatbox-ellipses-outline\"></ion-icon>\n        </ion-button>\n    </ion-item>\n  </ion-row>\n  <!-- GALERIES -->\n  <div *ngIf=\"Association!=null\">\n    <ion-item lines=\"none\">\n        <ion-text style=\"font-weight:bold\"> Galerie</ion-text>\n        <ion-icon name=\"images-outline\" color=\"primary\" class=\"ion-margin-horizontal\"></ion-icon>\n        <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n  <ion-row>\n    <ion-col size=\"12\" style=\"display:flex;justify-content: center;\">\n      <ion-thumbnail class=\"image\" *ngFor=\"let image of Association.media;let i = index\" style=\"margin:1%;\">\n        <img [src]=\"storage+Association.media[i].filePath\" />\n      </ion-thumbnail>\n    </ion-col>\n  </ion-row>\n</div>\n<!-- ----------- -->\n<ion-row class=\"ion-margin-top\">\n  <ion-item lines=\"none\">\n      <ion-text style=\"font-weight:bold\"> Activites</ion-text>\n      <ion-icon name=\"bar-chart-outline\" color=\"primary\" class=\"ion-margin-horizontal\"></ion-icon>\n      <ion-icon name=\"chatbox-ellipses-outline\" slot=\"end\" color=\"light\"></ion-icon>\n  </ion-item>\n</ion-row>\n<ion-item lines=\"none\" *ngIf=\"Association!=null\" (click)=\"openMouvementsModal()\">\n  <ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n  <ion-text slot=\"start\"><strong>{{Association.mouvement.length}}</strong> &ensp; Mouvements organises </ion-text>\n  <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n</ion-item>\n<ion-item lines=\"none\" *ngIf=\"Association!=null\" (click)=\"openAnnoncesModal()\">\n  <ion-icon name=\"megaphone-outline\" slot=\"start\"></ion-icon>\n  <ion-text slot=\"start\"><strong>{{Association.annonce.length}}</strong> &ensp; Annonces publies </ion-text>\n  <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n</ion-item>\n<ion-item lines=\"none\" *ngIf=\"Association!=null\">\n  <ion-icon name=\"people-outline\" slot=\"start\"></ion-icon>\n  <ion-text slot=\"start\"><strong>{{Association.membres.length}}</strong> &ensp; membres / administrateurs </ion-text>\n  <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n</ion-item>\n<ion-item lines=\"none\" *ngIf=\"Association!=null\">\n  <ion-icon name=\"gift-outline\" slot=\"start\"></ion-icon>\n  <ion-text slot=\"start\"><strong>{{Association.don.length}}</strong> &ensp; dons </ion-text>\n  <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n</ion-item>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details_details-association_details-association_module_ts.js.map