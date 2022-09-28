"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_creation_creation-besoins_creation-besoins_module_ts"],{

/***/ 89608:
/*!************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-besoins/creation-besoins-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationBesoinsPageRoutingModule": () => (/* binding */ CreationBesoinsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _creation_besoins_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-besoins.page */ 40436);




const routes = [
    {
        path: '',
        component: _creation_besoins_page__WEBPACK_IMPORTED_MODULE_0__.CreationBesoinsPage
    }
];
let CreationBesoinsPageRoutingModule = class CreationBesoinsPageRoutingModule {
};
CreationBesoinsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreationBesoinsPageRoutingModule);



/***/ }),

/***/ 76460:
/*!****************************************************************************!*\
  !*** ./src/app/pages/creation/creation-besoins/creation-besoins.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationBesoinsPageModule": () => (/* binding */ CreationBesoinsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _creation_besoins_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-besoins-routing.module */ 89608);
/* harmony import */ var _creation_besoins_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-besoins.page */ 40436);







let CreationBesoinsPageModule = class CreationBesoinsPageModule {
};
CreationBesoinsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _creation_besoins_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreationBesoinsPageRoutingModule
        ],
        declarations: [_creation_besoins_page__WEBPACK_IMPORTED_MODULE_1__.CreationBesoinsPage]
    })
], CreationBesoinsPageModule);



/***/ }),

/***/ 40436:
/*!**************************************************************************!*\
  !*** ./src/app/pages/creation/creation-besoins/creation-besoins.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationBesoinsPage": () => (/* binding */ CreationBesoinsPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _creation_besoins_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-besoins.page.html?ngResource */ 92448);
/* harmony import */ var _creation_besoins_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creation-besoins.page.scss?ngResource */ 54385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_creation_creation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/creation/creation.service */ 79444);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 58027);









let CreationBesoinsPage = class CreationBesoinsPage {
  constructor(creationService, manageDataService, navCtrl, actionSheetController, route, loadingController, toast, router) {
    this.creationService = creationService;
    this.manageDataService = manageDataService;
    this.navCtrl = navCtrl;
    this.actionSheetController = actionSheetController;
    this.route = route;
    this.loadingController = loadingController;
    this.toast = toast;
    this.router = router;
    /*-----------------------------VARIABLES------------------------------------------------*/

    this.Association = null;
    this.association_id = null;
    this.selectedStateIcon = '';
    this.selectedTitle = '';
    this.selectedDescription = '';
    this.selectedImages = [];
    this.selectedCategory = '';
    this.selectedQuantity = 0;
    this.iscategoriesModalOpen = false;
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.association_id = _this.route.snapshot.params.id_association;
      console.log(_this.association_id);

      _this.manageDataService.getOneAssociation(_this.association_id).toPromise().then(data => {
        _this.Association = data;
      });
    })();
  }

  setCategoriesModalOpen(isopen) {
    this.iscategoriesModalOpen = isopen;
  }
  /**--------------------------------FUNCTIONS--------------------------------------------*/


  createBesoin() {
    var _this2 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingController.create({
        spinner: 'lines-small',
        message: 'Patientez....',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      yield loading.present();
      const besoin = {
        association_id: _this2.association_id,
        contenu: _this2.selectedDescription,
        title: _this2.selectedTitle,
        category: _this2.selectedCategory,
        attente: 1,
        resolu: 0,
        quantite: _this2.selectedQuantity,
        quantite_actuelle: 0
      };

      _this2.creationService.createBesoin(besoin).toPromise().then( /*#__PURE__*/function () {
        var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          loading.dismiss();

          _this2.router.navigateByUrl('/menu/associations').then(() => {
            _this2.ngOnInit();
          });

          const toast = _this2.toast.create({
            message: 'besoin publie',
            icon: 'checkmark-done-outline',
            duration: 500,
            color: "danger"
          });

          (yield toast).present();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()).catch( /*#__PURE__*/function () {
        var _ref2 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
          loading.dismiss(); //on affiche un message de success

          const toast = _this2.toast.create({
            message: `${err.message}`,
            icon: 'information-circle',
            duration: 1000,
            color: "danger"
          });

          (yield toast).present();
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

  get validationDemande() {
    let res = false;
    this.selectedTitle != '' && this.selectedDescription != '' && this.selectedCategory != '' ? res = true : null;
    return res;
  }

  navBack() {
    this.navCtrl.back();
  }

  monde_animaux_Sheet() {
    var _this3 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this3.actionSheetController.create({
        buttons: [{
          icon: 'paw-outline',
          text: 'Nourriture pour animaux',
          handler: () => {
            _this3.selectedCategory = 'Nourriture pour animaux';

            _this3.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'paw-outline',
          text: 'Accessoires pour animaux',
          handler: () => {
            _this3.selectedCategory = 'Accessoires pour animaux';

            _this3.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  jardin_bricolage_Sheet() {
    var _this4 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this4.actionSheetController.create({
        buttons: [{
          icon: 'leaf-outline',
          text: 'Machines & equipements jardin',
          handler: () => {
            _this4.selectedCategory = 'Machines & equipements jardin';

            _this4.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'leaf-outline',
          text: 'Mobilier jardin',
          handler: () => {
            _this4.selectedCategory = 'Mobilier jardin';

            _this4.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'leaf-outline',
          text: 'petit outillsage et accessoire jardin',
          handler: () => {
            _this4.selectedCategory = 'petit outillsage et accessoire jardin';

            _this4.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'leaf-outline',
          text: 'Plantes & jardin',
          handler: () => {
            _this4.selectedCategory = 'Plantes & jardin';

            _this4.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  culture_sport_loisir_Sheet() {
    var _this5 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this5.actionSheetController.create({
        buttons: [{
          icon: 'library-outline',
          text: 'Livres,films & musiques',
          handler: () => {
            _this5.selectedCategory = 'Livres,films & musiques';

            _this5.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'library-outline',
          text: 'jeux & jouets',
          handler: () => {
            _this5.selectedCategory = 'jeux & jouets';

            _this5.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'library-outline',
          text: 'Jeux videos',
          handler: () => {
            _this5.selectedCategory = 'Jeux videos';

            _this5.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'library-outline',
          text: 'Materiels & equipements sportifs',
          handler: () => {
            _this5.selectedCategory = 'Materiels & equipements sportifs';

            _this5.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'library-outline',
          text: 'Autres accessoires sport',
          handler: () => {
            _this5.selectedCategory = 'Autres accessoires sport';

            _this5.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'library-outline',
          text: 'Papeterie & fourniture de bureau',
          handler: () => {
            _this5.selectedCategory = 'Papeterie & fourniture de bureau';

            _this5.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'library-outline',
          text: 'Loisirs creatifs',
          handler: () => {
            _this5.selectedCategory = 'Loisirs creatifs';

            _this5.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  electroniqueSheet() {
    var _this6 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this6.actionSheetController.create({
        buttons: [{
          icon: 'laptop-outline',
          text: 'Informatique',
          handler: () => {
            _this6.selectedCategory = 'Informatique';

            _this6.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'laptop-outline',
          text: 'TV,Hi-Fi,telephonie',
          handler: () => {
            _this6.selectedCategory = 'TV,Hi-Fi,telephonie';

            _this6.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'laptop-outline',
          text: 'cables,coques & accesoires',
          handler: () => {
            _this6.selectedCategory = 'cables,coques & accesoires';

            _this6.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  maison_ammeublementSheet() {
    var _this7 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this7.actionSheetController.create({
        buttons: [{
          icon: 'bed-outline',
          text: 'Meubles',
          handler: () => {
            _this7.selectedCategory = 'Meubles';

            _this7.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'bed-outline',
          text: 'Vaiselles & ustensiles cuisine',
          handler: () => {
            _this7.selectedCategory = 'Vaiselles & ustensiles cuisine';

            _this7.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'bed-outline',
          text: 'Decoration de la maison',
          handler: () => {
            _this7.selectedCategory = 'Decoration de la maison';

            _this7.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'bed-outline',
          text: 'Entretien de la maison',
          handler: () => {
            _this7.selectedCategory = 'Entretien de la maison';

            _this7.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  universbebeSheet() {
    var _this8 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this8.actionSheetController.create({
        buttons: [{
          icon: 'logo-reddit',
          text: 'Vetements bebe',
          handler: () => {
            _this8.selectedCategory = 'Vetements bebe';

            _this8.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'logo-reddit',
          text: 'Jouets pour bebe',
          handler: () => {
            _this8.selectedCategory = 'Jouets pour bebe';

            _this8.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'logo-reddit',
          text: 'Equipement de puericulture',
          handler: () => {
            _this8.selectedCategory = 'Equipement de puericulture';

            _this8.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'logo-reddit',
          text: 'Petits accessoires & consommables',
          handler: () => {
            _this8.selectedCategory = 'Petits accessoires & consommables';

            _this8.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  electromenagerSheet() {
    var _this9 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this9.actionSheetController.create({
        buttons: [{
          icon: 'build-outline',
          text: 'petit electromenager',
          handler: () => {
            _this9.selectedCategory = 'petit electromenager';

            _this9.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'build-outline',
          text: 'gros electromenager',
          handler: () => {
            _this9.selectedCategory = 'gros electromenager';

            _this9.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  modebeautySheet() {
    var _this10 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this10.actionSheetController.create({
        buttons: [{
          icon: 'shirt-outline',
          text: 'Vetements',
          handler: () => {
            _this10.selectedCategory = 'Vetements';

            _this10.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'shirt-outline',
          text: 'Accessoires de mode',
          handler: () => {
            _this10.selectedCategory = 'Accessoires de mode';

            _this10.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'shirt-outline',
          text: 'Chaussures',
          handler: () => {
            _this10.selectedCategory = 'Chaussures';

            _this10.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'shirt-outline',
          text: "Produits & accessoires d'hygiene",
          handler: () => {
            _this10.selectedCategory = "Produits & accessoires d'hygiene";

            _this10.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'shirt-outline',
          text: 'Maquillage',
          handler: () => {
            _this10.selectedCategory = 'Maquillage';

            _this10.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

};

CreationBesoinsPage.ctorParameters = () => [{
  type: src_app_services_creation_creation_service__WEBPACK_IMPORTED_MODULE_3__.CreationService
}, {
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_4__.ManageDataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}];

CreationBesoinsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-creation-besoins',
  template: _creation_besoins_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_creation_besoins_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CreationBesoinsPage);


/***/ }),

/***/ 54385:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-besoins/creation-besoins.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ".input {\n  border: 0.5px solid rgb(206, 204, 204);\n  border-radius: 10px;\n}\n\n.prototype strong {\n  color: #ec566a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0aW9uLWJlc29pbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVJO0VBQ0ksY0FBQTtBQUNSIiwiZmlsZSI6ImNyZWF0aW9uLWJlc29pbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0e1xuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDIwNiwgMjA0LCAyMDQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucHJvdG90eXBle1xuICAgICYgc3Ryb25ne1xuICAgICAgICBjb2xvcjojZWM1NjZhO1xuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 92448:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-besoins/creation-besoins.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-icon (click)=\"navBack()\" name=\"chevron-back-outline\" size=\"large\" color=\"danger\"></ion-icon>\n      <ion-title>creation-Besoin-association</ion-title>\n    </ion-row>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-modal [isOpen]=\"iscategoriesModalOpen\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Categories</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"setCategoriesModalOpen(false)\">Close</ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content class=\"ion-padding\">\n        <ion-list class=\"ion-justify-content-between\">\n          <ion-item (click)=\"electromenagerSheet()\">\n            <ion-icon name=\"build-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Electromenager</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"modebeautySheet()\">\n            <ion-icon name=\"shirt-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Mode,beaute & accessoire</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"universbebeSheet()\">\n            <ion-icon name=\"logo-reddit\" slot=\"start\"></ion-icon>\n            <ion-text>Univers bebe</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"maison_ammeublementSheet()\">\n            <ion-icon name=\"bed-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Maison & ameublement</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"electroniqueSheet()\">\n            <ion-icon name=\"laptop-outline\" slot=\"start\"></ion-icon>\n            <ion-text>High-tech & electronique</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"culture_sport_loisir_Sheet()\">\n            <ion-icon name=\"library-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Culture,sports & loisirs</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"jardin_bricolage_Sheet()\">\n            <ion-icon name=\"leaf-outline\" slot=\"start\"></ion-icon>\n            <ion-text>jardin & bricolage</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"monde_animaux_Sheet()\">\n            <ion-icon name=\"paw-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Monde des animaux</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n<ion-item>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\"></ion-icon>\n  <ion-row><ion-text>Type d'annonce : </ion-text><ion-text style=\"font-weight: bold\">Demande</ion-text></ion-row>\n</ion-item>\n<!--  -->\n<!--  -->\n<ion-item lines=\"none\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedTitle==''\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedTitle!=''\"></ion-icon>\n  <ion-row><ion-text>Titre de la demande: </ion-text></ion-row>\n</ion-item>\n<ion-item class=\"input ion-margin-horizontal\"><ion-input [(ngModel)]=\"selectedTitle\" type=\"text\" placeholder=\"Ex : Table,chaise,cahier... \" maxlength=\"45\"></ion-input>\n</ion-item>\n<ion-row style=\"width: 100%;padding:0;margin:0\">\n  <ion-col size=\"6\"></ion-col>\n  <ion-col size=\"6\" style=\"text-align: left;\"><ion-text style=\"color:gray\" >30 caracteres max</ion-text></ion-col>\n</ion-row>\n  \n<!--  -->\n<ion-item lines=\"none\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedDescription==''\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedDescription!=''\"></ion-icon>\n  <ion-row><ion-text>Description : </ion-text></ion-row>\n</ion-item>\n<ion-item class=\"input ion-margin-horizontal\">\n  <ion-textarea [(ngModel)]=\"selectedDescription\" placeholder=\"Ex : ordinateur noir , ecran 17 pouces ......En fournisant un maximum de details vous augmenter les chances d'aider \"\n   maxlength=\"191\" rows=\"5\"></ion-textarea>\n</ion-item>\n<ion-row style=\"width: 100%;padding:0;margin:0\">\n  <ion-col size=\"6\"></ion-col>\n  <ion-col size=\"6\" style=\"text-align: left;\"><ion-text style=\"color:gray\" >191 caracteres max</ion-text></ion-col>\n</ion-row>\n<!--  -->\n<ion-item (click)=\"setCategoriesModalOpen(true)\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedCategory==''\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedCategory!=''\"></ion-icon>\n  <ion-text style=\"margin-left:10px\">{{selectedCategory!=''?selectedCategory:'Choose a Category'}}</ion-text>\n  <ion-icon name=\"chevron-forward-outline\"  color=\"medium\" slot=\"end\"></ion-icon>\n</ion-item>\n<ion-item lines=\"none\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedQuantity<1\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedQuantity>0\"></ion-icon>\n  <ion-row><ion-text>Entrez la quantite necessaire : </ion-text></ion-row>\n</ion-item>\n<ion-item class=\"input ion-margin-horizontal\">\n  <ion-input [(ngModel)]=\"selectedQuantity\" type=\"number\" maxlength=\"45\"></ion-input>\n</ion-item>\n<ion-row style=\"width:100%\" class=\"ion-padding-horizontal ion-margin-top\" *ngIf=\"Association!=null\">\n  <ion-text>\n    <i class=\"prototype\">\n      L'association <strong>{{Association.name}}</strong> est dans le besoin de \n      <strong style=\"font-weight:bold\">{{selectedQuantity}} &ensp;</strong>  \n       <strong style=\"font-weight:bold\">{{selectedTitle.length<1?'...':selectedTitle}}</strong>\n       pour pouvoir \n       <strong style=\"font-weight:bold\">{{selectedDescription.length<1?'...':selectedDescription}}</strong>\n    </i>\n    \n  </ion-text>\n</ion-row>\n</ion-content>\n<ion-footer>\n<ion-card style=\"width:100%;margin:0\">\n  <ion-button expand=\"block\" color=\"danger\" (click)=\"createBesoin()\" class=\"ion-margin\"[disabled]=\"!validationDemande\" >Publier Bessoin</ion-button>\n</ion-card>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_creation_creation-besoins_creation-besoins_module_ts.js.map