"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modals_modal-category_modal-category_page_ts"],{

/***/ 4098:
/*!**************************************************************!*\
  !*** ./src/app/modals/modal-category/modal-category.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalCategoryPage": () => (/* binding */ ModalCategoryPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modal_category_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-category.page.html?ngResource */ 5301);
/* harmony import */ var _modal_category_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-category.page.scss?ngResource */ 2080);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let ModalCategoryPage = class ModalCategoryPage {
  constructor(modalCtrl, actionSheetController) {
    this.modalCtrl = modalCtrl;
    this.actionSheetController = actionSheetController;
  }

  ngOnInit() {
    console.log('selected category');
    console.log(this.selectedCategory);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    console.log(this.selectedCategory);
    return this.modalCtrl.dismiss(this.selectedCategory, 'confirm');
  }

  monde_animaux_Sheet() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this.actionSheetController.create({
        buttons: [{
          icon: 'close-circle-outline',
          text: 'Annuler',
          role: 'destructive'
        }, {
          cssClass: _this.selectedCategory.indexOf('Nourriture pour animaux') != -1 ? 'selected' : 'noselected',
          icon: _this.selectedCategory.indexOf('Nourriture pour animaux') != -1 ? 'checkmark-circle-outline' : 'shirt-outline',
          text: 'Nourriture pour animaux',
          handler: () => {
            _this.selectedCategory.unshift('Nourriture pour animaux');
          }
        }, {
          cssClass: _this.selectedCategory.indexOf('Accessoires pour animaux') != -1 ? 'selected' : 'noselected',
          icon: _this.selectedCategory.indexOf('Accessoires pour animaux') != -1 ? 'checkmark-circle-outline' : 'shirt-outline',
          text: 'Accessoires pour animaux',
          handler: () => {
            _this.selectedCategory.unshift('Accessoires pour animaux');
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  jardin_bricolage_Sheet() {
    var _this2 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this2.actionSheetController.create({
        buttons: [{
          icon: 'close-circle-outline',
          text: 'Annuler',
          role: 'destructive'
        }, {
          cssClass: _this2.selectedCategory.indexOf('Machies & equipements jardin') != -1 ? 'selected' : 'noselected',
          icon: _this2.selectedCategory.indexOf('Machies & equipements jardin') != -1 ? 'checkmark-circle-outline' : 'leaf-outline',
          text: 'Machies & equipements jardin',
          handler: () => {
            _this2.selectedCategory.unshift('Machies & equipements jardin');
          }
        }, {
          cssClass: _this2.selectedCategory.indexOf('Mobilier jardin') != -1 ? 'selected' : 'noselected',
          icon: _this2.selectedCategory.indexOf('Mobilier jardin') != -1 ? 'checkmark-circle-outline' : 'leaf-outline',
          text: 'Mobilier jardin',
          handler: () => {
            _this2.selectedCategory.unshift('Mobilier jardin');
          }
        }, {
          cssClass: _this2.selectedCategory.indexOf('petit outillsage et accessoire jardin') != -1 ? 'selected' : 'noselected',
          icon: _this2.selectedCategory.indexOf('petit outillsage et accessoire jardin') != -1 ? 'checkmark-circle-outline' : 'leaf-outline',
          text: 'petit outillsage et accessoire jardin',
          handler: () => {
            _this2.selectedCategory.unshift('petit outillsage et accessoire jardin');
          }
        }, {
          cssClass: _this2.selectedCategory.indexOf('Plantes & jardin') != -1 ? 'selected' : 'noselected',
          icon: _this2.selectedCategory.indexOf('Plantes & jardin') != -1 ? 'checkmark-circle-outline' : 'leaf-outline',
          text: 'Plantes & jardin',
          handler: () => {
            _this2.selectedCategory.unshift('Plantes & jardin');
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  culture_sport_loisir_Sheet() {
    var _this3 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this3.actionSheetController.create({
        buttons: [{
          icon: 'close-circle-outline',
          text: 'Annuler',
          role: 'destructive'
        }, {
          cssClass: _this3.selectedCategory.indexOf('Livres,films & musiques') != -1 ? 'selected' : 'noselected',
          icon: _this3.selectedCategory.indexOf('Livres,films & musiques') != -1 ? 'checkmark-circle-outline' : 'bicycle-outline',
          text: 'Livres,films & musiques',
          handler: () => {
            _this3.selectedCategory.unshift('Livres,films & musiques');
          }
        }, {
          cssClass: _this3.selectedCategory.indexOf('jeux & jouets') != -1 ? 'selected' : 'noselected',
          icon: _this3.selectedCategory.indexOf('jeux & jouets') != -1 ? 'checkmark-circle-outline' : 'bicycle-outline',
          text: 'jeux & jouets',
          handler: () => {
            _this3.selectedCategory.unshift('jeux & jouets');
          }
        }, {
          cssClass: _this3.selectedCategory.indexOf('Jeux videos') != -1 ? 'selected' : 'noselected',
          icon: _this3.selectedCategory.indexOf('Jeux videos') != -1 ? 'checkmark-circle-outline' : 'bicycle-outline',
          text: 'Jeux videos',
          handler: () => {
            _this3.selectedCategory.unshift('Jeux videos');
          }
        }, {
          cssClass: _this3.selectedCategory.indexOf('Materiels & equipements sportifs') != -1 ? 'selected' : 'noselected',
          icon: _this3.selectedCategory.indexOf('Materiels & equipements sportifs') != -1 ? 'checkmark-circle-outline' : 'bicycle-outline',
          text: 'Materiels & equipements sportifs',
          handler: () => {
            _this3.selectedCategory.unshift('Materiels & equipements sportifs');
          }
        }, {
          cssClass: _this3.selectedCategory.indexOf('Autres accessoires sport') != -1 ? 'selected' : 'noselected',
          icon: _this3.selectedCategory.indexOf('Autres accessoires sport') != -1 ? 'checkmark-circle-outline' : 'bicycle-outline',
          text: 'Autres accessoires sport',
          handler: () => {
            _this3.selectedCategory.unshift('Autres accessoires sport');
          }
        }, {
          cssClass: _this3.selectedCategory.indexOf('Papeterie & fourniture de bureau') != -1 ? 'selected' : 'noselected',
          icon: _this3.selectedCategory.indexOf('Papeterie & fourniture de bureau') != -1 ? 'checkmark-circle-outline' : 'bicycle-outline',
          text: 'Papeterie & fourniture de bureau',
          handler: () => {
            _this3.selectedCategory.unshift('Papeterie & fourniture de bureau');
          }
        }, {
          cssClass: _this3.selectedCategory.indexOf('Loisirs creatifs') != -1 ? 'selected' : 'noselected',
          icon: _this3.selectedCategory.indexOf('Loisirs creatifs') != -1 ? 'checkmark-circle-outline' : 'bicycle-outline',
          text: 'Loisirs creatifs',
          handler: () => {
            _this3.selectedCategory.unshift('Loisirs creatifs');
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  electroniqueSheet() {
    var _this4 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this4.actionSheetController.create({
        buttons: [{
          icon: 'close-circle-outline',
          text: 'Annuler',
          role: 'destructive'
        }, {
          cssClass: _this4.selectedCategory.indexOf('Informatique') != -1 ? 'selected' : 'noselected',
          icon: _this4.selectedCategory.indexOf('Informatique') != -1 ? 'checkmark-circle-outline' : 'laptop-outline',
          text: 'Informatique',
          handler: () => {
            _this4.selectedCategory.unshift('Informatique');
          }
        }, {
          cssClass: _this4.selectedCategory.indexOf('TV,Hi-Fi,telephonie') != -1 ? 'selected' : 'noselected',
          icon: _this4.selectedCategory.indexOf('TV,Hi-Fi,telephonie') != -1 ? 'checkmark-circle-outline' : 'laptop-outline',
          text: 'TV,Hi-Fi,telephonie',
          handler: () => {
            _this4.selectedCategory.unshift('TV,Hi-Fi,telephonie');
          }
        }, {
          cssClass: _this4.selectedCategory.indexOf('cables,coques & accesoires') != -1 ? 'selected' : 'noselected',
          icon: _this4.selectedCategory.indexOf('cables,coques & accesoires') != -1 ? 'checkmark-circle-outline' : 'laptop-outline',
          text: 'cables,coques & accesoires',
          handler: () => {
            _this4.selectedCategory.unshift('cables,coques & accesoires');
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  maison_ammeublementSheet() {
    var _this5 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this5.actionSheetController.create({
        buttons: [{
          icon: 'close-circle-outline',
          text: 'Annuler',
          role: 'destructive'
        }, {
          cssClass: _this5.selectedCategory.indexOf('Meubles') != -1 ? 'selected' : 'noselected',
          icon: _this5.selectedCategory.indexOf('Meubles') != -1 ? 'checkmark-circle-outline' : 'bed-outline',
          text: 'Meubles',
          handler: () => {
            _this5.selectedCategory.unshift('Meubles');
          }
        }, {
          cssClass: _this5.selectedCategory.indexOf('Vaiselles & ustensiles cuisine') != -1 ? 'selected' : 'noselected',
          icon: _this5.selectedCategory.indexOf('Vaiselles & ustensiles cuisine') != -1 ? 'checkmark-circle-outline' : 'bed-outline',
          text: 'Vaiselles & ustensiles cuisine',
          handler: () => {
            _this5.selectedCategory.unshift('Vaiselles & ustensiles cuisine');
          }
        }, {
          cssClass: _this5.selectedCategory.indexOf('Decoration de la maison') != -1 ? 'selected' : 'noselected',
          icon: _this5.selectedCategory.indexOf('Decoration de la maison') != -1 ? 'checkmark-circle-outline' : 'bed-outline',
          text: 'Decoration de la maison',
          handler: () => {
            _this5.selectedCategory.unshift('Decoration de la maison');
          }
        }, {
          cssClass: _this5.selectedCategory.indexOf('Entretien de la maison') != -1 ? 'selected' : 'noselected',
          icon: _this5.selectedCategory.indexOf('Entretien de la maison') != -1 ? 'checkmark-circle-outline' : 'bed-outline',
          text: 'Entretien de la maison',
          handler: () => {
            _this5.selectedCategory.unshift('Entretien de la maison');
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  universbebeSheet() {
    var _this6 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this6.actionSheetController.create({
        buttons: [{
          icon: 'close-circle-outline',
          text: 'Annuler',
          role: 'destructive'
        }, {
          cssClass: _this6.selectedCategory.indexOf('Vetements bebe') != -1 ? 'selected' : 'noselected',
          icon: _this6.selectedCategory.indexOf('Vetements bebe') != -1 ? 'checkmark-circle-outline' : 'logo-reddit',
          text: 'Vetements bebe',
          handler: () => {
            _this6.selectedCategory.unshift('Vetements bebe');
          }
        }, {
          cssClass: _this6.selectedCategory.indexOf('Jouets pour bebe') != -1 ? 'selected' : 'noselected',
          icon: _this6.selectedCategory.indexOf('Jouets pour bebe') != -1 ? 'checkmark-circle-outline' : 'logo-reddit',
          text: 'Jouets pour bebe',
          handler: () => {
            _this6.selectedCategory.unshift('Jouets pour bebe');
          }
        }, {
          cssClass: _this6.selectedCategory.indexOf('Equipement de puericulture') != -1 ? 'selected' : 'noselected',
          icon: _this6.selectedCategory.indexOf('Equipement de puericulture') != -1 ? 'checkmark-circle-outline' : 'logo-reddit',
          text: 'Equipement de puericulture',
          handler: () => {
            _this6.selectedCategory.unshift('Equipement de puericulture');
          }
        }, {
          cssClass: _this6.selectedCategory.indexOf('Petits accessoires & consommables') != -1 ? 'selected' : 'noselected',
          icon: _this6.selectedCategory.indexOf('Petits accessoires & consommables') != -1 ? 'checkmark-circle-outline' : 'logo-reddit',
          text: 'Petits accessoires & consommables',
          handler: () => {
            _this6.selectedCategory.unshift('Petits accessoires & consommables');
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  electromenagerSheet() {
    var _this7 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this7.actionSheetController.create({
        buttons: [{
          icon: 'close-circle-outline',
          text: 'Annuler',
          role: 'destructive'
        }, {
          cssClass: _this7.selectedCategory.indexOf('petit electromenager') != -1 ? 'selected' : 'noselected',
          icon: _this7.selectedCategory.indexOf('petit electromenager') != -1 ? 'checkmark-circle-outline' : 'build-outline',
          text: 'petit electromenager',
          handler: () => {
            _this7.selectedCategory.unshift('petit electromenager');
          }
        }, {
          cssClass: _this7.selectedCategory.indexOf('gros electromenager') != -1 ? 'selected' : 'noselected',
          icon: _this7.selectedCategory.indexOf('gros electromenager') != -1 ? 'checkmark-circle-outline' : 'build-outline',
          text: 'gros electromenager',
          handler: () => {
            _this7.selectedCategory.unshift('gros electromenager');
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  modebeautySheet() {
    var _this8 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this8.actionSheetController.create({
        animated: true,
        buttons: [{
          icon: 'close-circle-outline',
          text: 'Annuler',
          role: 'destructive'
        }, {
          cssClass: _this8.selectedCategory.indexOf('Accessoires de mode') != -1 ? 'selected' : 'noselected',
          icon: _this8.selectedCategory.indexOf('Accessoires de mode') != -1 ? 'checkmark-circle-outline' : 'shirt-outline',
          text: 'Accessoires de mode',
          handler: () => {
            _this8.selectedCategory.unshift('Accessoires de mode');
          }
        }, {
          cssClass: _this8.selectedCategory.indexOf('Vetements') != -1 ? 'selected' : 'noselected',
          icon: _this8.selectedCategory.indexOf('Vetements') != -1 ? 'checkmark-circle-outline' : 'shirt-outline',
          text: 'Vetements',
          handler: () => {
            _this8.selectedCategory.unshift('Vetements');
          }
        }, {
          cssClass: _this8.selectedCategory.indexOf('Chaussures') != -1 ? 'selected' : 'noselected',
          icon: _this8.selectedCategory.indexOf('Chaussures') != -1 ? 'checkmark-circle-outline' : 'shirt-outline',
          text: 'Chaussures',
          handler: () => {
            _this8.selectedCategory.unshift('Chaussures');
          }
        }, {
          cssClass: _this8.selectedCategory.indexOf("Produits & accessoires d'hygiene") != -1 ? 'selected' : 'noselected',
          icon: _this8.selectedCategory.indexOf("Produits & accessoires d'hygiene") != -1 ? 'checkmark-circle-outline' : 'shirt-outline',
          text: "Produits & accessoires d'hygiene",
          handler: () => {
            _this8.selectedCategory.unshift("Produits & accessoires d'hygiene");
          }
        }, {
          cssClass: _this8.selectedCategory.indexOf('Maquillage') != -1 ? 'selected' : 'noselected',
          icon: _this8.selectedCategory.indexOf('Maquillage') != -1 ? 'checkmark-circle-outline' : 'shirt-outline',
          text: 'Maquillage',
          handler: () => {
            _this8.selectedCategory.unshift('Maquillage');
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

};

ModalCategoryPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ActionSheetController
}];

ModalCategoryPage.propDecorators = {
  selectedCategory: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }]
};
ModalCategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-modal-category',
  template: _modal_category_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_modal_category_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ModalCategoryPage);


/***/ }),

/***/ 2080:
/*!***************************************************************************!*\
  !*** ./src/app/modals/modal-category/modal-category.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1jYXRlZ29yeS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5301:
/*!***************************************************************************!*\
  !*** ./src/app/modals/modal-category/modal-category.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <ion-list class=\"ion-justify-content-between\">\n    <ion-item (click)=\"electromenagerSheet()\">\n      <ion-icon name=\"build-outline\" slot=\"start\"></ion-icon>\n      <ion-text>Electromenager</ion-text>\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"modebeautySheet()\">\n      <ion-icon name=\"shirt-outline\" slot=\"start\"></ion-icon>\n      <ion-text>Mode,beaute & accessoire</ion-text>\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"universbebeSheet()\">\n      <ion-icon name=\"logo-reddit\" slot=\"start\"></ion-icon>\n      <ion-text>Univers bebe</ion-text>\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"maison_ammeublementSheet()\">\n      <ion-icon name=\"bed-outline\" slot=\"start\"></ion-icon>\n      <ion-text>Maison & ameublement</ion-text>\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"electroniqueSheet()\">\n      <ion-icon name=\"laptop-outline\" slot=\"start\"></ion-icon>\n      <ion-text>High-tech & electronique</ion-text>\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"culture_sport_loisir_Sheet()\">\n      <ion-icon name=\"bicycle-outline\" slot=\"start\"></ion-icon>\n      <ion-text>Culture,sports & loisirs</ion-text>\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"jardin_bricolage_Sheet()\">\n      <ion-icon name=\"leaf-outline\" slot=\"start\"></ion-icon>\n      <ion-text>jardin & bricolage</ion-text>\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"monde_animaux_Sheet()\">\n      <ion-icon name=\"paw-outline\" slot=\"start\"></ion-icon>\n      <ion-text>Monde des animaux</ion-text>\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n  </ion-list>\n  <ion-button color=\"danger\" expand=\"block\" class=\"ion-margin-horizontal\"(click)='confirm()'>Valider</ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_modal-category_modal-category_page_ts.js.map