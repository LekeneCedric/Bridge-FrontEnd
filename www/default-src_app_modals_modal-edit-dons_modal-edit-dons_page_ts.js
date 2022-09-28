"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modals_modal-edit-dons_modal-edit-dons_page_ts"],{

/***/ 20387:
/*!****************************************************************!*\
  !*** ./src/app/modals/modal-edit-dons/modal-edit-dons.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalEditDonsPage": () => (/* binding */ ModalEditDonsPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _modal_edit_dons_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-edit-dons.page.html?ngResource */ 58670);
/* harmony import */ var _modal_edit_dons_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-edit-dons.page.scss?ngResource */ 12910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 29036);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 58027);









let ModalEditDonsPage = class ModalEditDonsPage {
  constructor(actionSheetController, toast, nativeGeocoder, loadingController, manageDataService, modalController) {
    this.actionSheetController = actionSheetController;
    this.toast = toast;
    this.nativeGeocoder = nativeGeocoder;
    this.loadingController = loadingController;
    this.manageDataService = manageDataService;
    this.modalController = modalController;
    this.GeocoderOption = {
      useLocale: true,
      maxResults: 5
    };
    this.myAdress = '';
    this.selectedDisponibility = '';
    this.selectedState = '';
    this.selectedStateIcon = '';
    this.selectedTitle = '';
    this.selectedDescription = '';
    this.selectedImages = [];
    this.selectedLatitude = null;
    this.selectedLongitude = null;
    this.selectedCategory = '';
    this.iscategoriesModalOpen = false;
  }

  confirm() {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.getCoordinate();
    this.myAdress = this.don.adresse;
    this.selectedDisponibility = this.don.disponibilite;
    this.selectedState = this.don.etat;
    this.selectedTitle = this.don.titre;
    this.selectedDescription = this.don.description;
    this.selectedCategory = this.don.category;
    this.selectedLatitude = this.don.latitude;
    this.selectedLongitude = this.don.longitude;
  }

  getCoordinate() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.myCoordinate = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__.Geolocation.getCurrentPosition();
      _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__.Geolocation.watchPosition({
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 1000
      }, () => {
        console.log('watchPosition updated');
      });
    })();
  }

  setCategoriesModalOpen(isopen) {
    this.iscategoriesModalOpen = isopen;
  }

  createDonation() {
    var _this2 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingController.create({
        spinner: 'bubbles',
        message: `modification ${_this2.don.titre}`,
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      yield loading.present();
      const uid = JSON.parse(localStorage.getItem('mydata')).id;
      const token = localStorage.getItem('token');
      const donation = {
        donateur_id: uid,
        disponibilite: _this2.selectedDisponibility,
        contenu: _this2.selectedDescription,
        titre: _this2.selectedTitle,
        category: _this2.selectedCategory,
        etat: _this2.selectedState,
        description: _this2.selectedDescription,
        longitude: 11,
        latitude: 3,
        adresse: 'this.myAdress'
      };

      _this2.manageDataService.updateDon(_this2.don.id, donation).toPromise().then( /*#__PURE__*/function () {
        var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          loading.dismiss();

          const toast = _this2.toast.create({
            message: `supression de ${_this2.don.titre} reussie`,
            icon: 'information-circle',
            duration: 1000,
            color: "success"
          });

          (yield toast).present();
          setTimeout(() => {
            return _this2.modalController.dismiss(null, 'confirm');
          }, 1000);
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

  locationSheet() {
    var _this3 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this3.actionSheetController.create({
        buttons: [{
          text: 'Ma position',
          handler: () => {
            _this3.selectedLongitude = _this3.myCoordinate.coords.longitude;
            _this3.selectedLatitude = _this3.myCoordinate.coords.latitude;

            _this3.nativeGeocoder.reverseGeocode(_this3.selectedLatitude, _this3.selectedLongitude, _this3.GeocoderOption).then(result => {
              _this3.MyGeocoder = result[0];
              _this3.myAdress = _this3.MyGeocoder.subLocality + "." + _this3.MyGeocoder.locality + "." + _this3.MyGeocoder.administrativeArea + "." + _this3.MyGeocoder.countryName;
              console.log(JSON.stringify(result[0]));
            }).catch( /*#__PURE__*/function () {
              var _ref3 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
                const toast = _this3.toast.create({
                  message: `${err}`,
                  icon: 'information-circle',
                  duration: 1000,
                  color: "danger"
                });

                (yield toast).present();
                console.log('Error in reverse geocode');
              });

              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }());

            _this3.setCategoriesModalOpen(false);
          }
        }, {
          text: 'open Map',
          handler: () => {
            _this3.selectedLongitude = null;
            _this3.selectedLatitude = null;

            _this3.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  monde_animaux_Sheet() {
    var _this4 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this4.actionSheetController.create({
        buttons: [{
          text: 'Nourriture pour animaux',
          handler: () => {
            _this4.selectedCategory = 'Nourriture pour animaux';

            _this4.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Accessoires pour animaux',
          handler: () => {
            _this4.selectedCategory = 'Accessoires pour animaux';

            _this4.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  jardin_bricolage_Sheet() {
    var _this5 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this5.actionSheetController.create({
        buttons: [{
          text: 'Machies & equipements jardin',
          handler: () => {
            _this5.selectedCategory = 'Machies & equipements jardin';

            _this5.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Mobilier jardin',
          handler: () => {
            _this5.selectedCategory = 'Mobilier jardin';

            _this5.setCategoriesModalOpen(false);
          }
        }, {
          text: 'petit outillsage et accessoire jardin',
          handler: () => {
            _this5.selectedCategory = 'petit outillsage et accessoire jardin';

            _this5.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Plantes & jardin',
          handler: () => {
            _this5.selectedCategory = 'Plantes & jardin';

            _this5.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  culture_sport_loisir_Sheet() {
    var _this6 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this6.actionSheetController.create({
        buttons: [{
          text: 'Livres,films & musiques',
          handler: () => {
            _this6.selectedCategory = 'Livres,films & musiques';

            _this6.setCategoriesModalOpen(false);
          }
        }, {
          text: 'jeux & jouets',
          handler: () => {
            _this6.selectedCategory = 'jeux & jouets';

            _this6.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Jeux videos',
          handler: () => {
            _this6.selectedCategory = 'Jeux videos';

            _this6.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Materiels & equipements sportifs',
          handler: () => {
            _this6.selectedCategory = 'Materiels & equipements sportifs';

            _this6.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Autres accessoires sport',
          handler: () => {
            _this6.selectedCategory = 'Autres accessoires sport';

            _this6.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Papeterie & fourniture de bureau',
          handler: () => {
            _this6.selectedCategory = 'Papeterie & fourniture de bureau';

            _this6.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Loisirs creatifs',
          handler: () => {
            _this6.selectedCategory = 'Loisirs creatifs';

            _this6.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  electroniqueSheet() {
    var _this7 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this7.actionSheetController.create({
        buttons: [{
          text: 'Informatique',
          handler: () => {
            _this7.selectedCategory = 'Informatique';

            _this7.setCategoriesModalOpen(false);
          }
        }, {
          text: 'TV,Hi-Fi,telephonie',
          handler: () => {
            _this7.selectedCategory = 'TV,Hi-Fi,telephonie';

            _this7.setCategoriesModalOpen(false);
          }
        }, {
          text: 'cables,coques & accesoires',
          handler: () => {
            _this7.selectedCategory = 'cables,coques & accesoires';

            _this7.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  maison_ammeublementSheet() {
    var _this8 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this8.actionSheetController.create({
        buttons: [{
          text: 'Meubles',
          handler: () => {
            _this8.selectedCategory = 'Meubles';

            _this8.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Vaiselles & ustensiles cuisine',
          handler: () => {
            _this8.selectedCategory = 'Vaiselles & ustensiles cuisine';

            _this8.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Decoration de la maison',
          handler: () => {
            _this8.selectedCategory = 'Decoration de la maison';

            _this8.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Entretien de la maison',
          handler: () => {
            _this8.selectedCategory = 'Entretien de la maison';

            _this8.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  universbebeSheet() {
    var _this9 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this9.actionSheetController.create({
        buttons: [{
          text: 'Vetements bebe',
          handler: () => {
            _this9.selectedCategory = 'Vetements bebe';

            _this9.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Jouets pour bebe',
          handler: () => {
            _this9.selectedCategory = 'Jouets pour bebe';

            _this9.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Equipement de puericulture',
          handler: () => {
            _this9.selectedCategory = 'Equipement de puericulture';

            _this9.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Petits accessoires & consommables',
          handler: () => {
            _this9.selectedCategory = 'Petits accessoires & consommables';

            _this9.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  electromenagerSheet() {
    var _this10 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this10.actionSheetController.create({
        buttons: [{
          text: 'petit electromenager',
          handler: () => {
            _this10.selectedCategory = 'petit electromenager';

            _this10.setCategoriesModalOpen(false);
          }
        }, {
          text: 'gros electromenager',
          handler: () => {
            _this10.selectedCategory = 'gros electromenager';

            _this10.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  modebeautySheet() {
    var _this11 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this11.actionSheetController.create({
        buttons: [{
          text: 'Vetements',
          handler: () => {
            _this11.selectedCategory = 'Vetements';

            _this11.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Accessoires de mode',
          handler: () => {
            _this11.selectedCategory = 'Accessoires de mode';

            _this11.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Chaussures',
          handler: () => {
            _this11.selectedCategory = 'Chaussures';

            _this11.setCategoriesModalOpen(false);
          }
        }, {
          text: "Produits & accessoires d'hygiene",
          handler: () => {
            _this11.selectedCategory = "Produits & accessoires d'hygiene";

            _this11.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Maquillage',
          handler: () => {
            _this11.selectedCategory = 'Maquillage';

            _this11.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  openDisponibiliteSheet() {
    var _this12 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this12.actionSheetController.create({
        header: 'Disponibilites',
        buttons: [{
          text: 'Cancel',
          role: 'destructive',
          icon: 'close-circle-outline',
          handler: () => {
            console.log('exit');
          }
        }, {
          text: 'La journee en semaine',
          icon: 'sunny-outline',
          handler: () => {
            _this12.selectedDisponibility = 'Journee en semaine';
          }
        }, {
          text: 'La journee en soiree',
          icon: 'cloudy-night-outline',
          handler: () => {
            _this12.selectedDisponibility = 'Journee en soiree';
          }
        }, {
          text: 'Le Week-end',
          icon: 'umbrella-outline',
          handler: () => {
            _this12.selectedDisponibility = 'Week-end';
          }
        }, {
          text: 'Je suis flexible',
          icon: 'help-outline',
          handler: () => {
            _this12.selectedDisponibility = 'Flexible';
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  openEtatSheet() {
    var _this13 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this13.actionSheetController.create({
        header: 'Etat',
        buttons: [{
          text: 'Cancel',
          role: 'destructive',
          icon: 'close-circle-outline',
          handler: () => {
            console.log('exit');
          }
        }, {
          text: 'Comme neuf',
          icon: 'ribbon-outline',
          handler: () => {
            _this13.selectedState = 'Neuf';
            _this13.selectedStateIcon = 'ribbon-outline';
          }
        }, {
          text: 'Bon etat',
          icon: 'checkmark-done-circle-outline',
          handler: () => {
            _this13.selectedState = 'Bon etat';
            _this13.selectedStateIcon = 'checkmark-done-circle-outline';
          }
        }, {
          text: 'Etat moyen',
          icon: 'checkmark-circle-outline',
          handler: () => {
            _this13.selectedState = 'Etat-moyen';
            _this13.selectedStateIcon = 'checkmark-circle-outline';
          }
        }, {
          text: 'A bricoler',
          icon: 'construct-outline',
          handler: () => {
            _this13.selectedState = 'A bricoler', _this13.selectedStateIcon = 'construct-outline';
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

};

ModalEditDonsPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}, {
  type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_5__.ManageDataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}];

ModalEditDonsPage.propDecorators = {
  don: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }]
};
ModalEditDonsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-modal-edit-dons',
  template: _modal_edit_dons_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_modal_edit_dons_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ModalEditDonsPage);


/***/ }),

/***/ 40591:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7621:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geolocation": () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 40591);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 58391)).then(m => new m.GeolocationWeb())
});



/***/ }),

/***/ 12910:
/*!*****************************************************************************!*\
  !*** ./src/app/modals/modal-edit-dons/modal-edit-dons.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1lZGl0LWRvbnMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 58670:
/*!*****************************************************************************!*\
  !*** ./src/app/modals/modal-edit-dons/modal-edit-dons.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <ion-modal [isOpen]=\"iscategoriesModalOpen\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Categories</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"setCategoriesModalOpen(false)\">Close</ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content class=\"ion-padding\">\n        <ion-list class=\"ion-justify-content-between\">\n          <ion-item (click)=\"electromenagerSheet()\">\n            <ion-icon name=\"build-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Electromenager</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"modebeautySheet()\">\n            <ion-icon name=\"shirt-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Mode,beaute & accessoire</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"universbebeSheet()\">\n            <ion-icon name=\"logo-reddit\" slot=\"start\"></ion-icon>\n            <ion-text>Univers bebe</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"maison_ammeublementSheet()\">\n            <ion-icon name=\"bed-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Maison & ameublement</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"electroniqueSheet()\">\n            <ion-icon name=\"laptop-outline\" slot=\"start\"></ion-icon>\n            <ion-text>High-tech & electronique</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"culture_sport_loisir_Sheet()\">\n            <ion-icon name=\"library-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Culture,sports & loisirs</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"jardin_bricolage_Sheet()\">\n            <ion-icon name=\"leaf-outline\" slot=\"start\"></ion-icon>\n            <ion-text>jardin & bricolage</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"monde_animaux_Sheet()\">\n            <ion-icon name=\"paw-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Monde des animaux</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n<ion-item>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\"></ion-icon>\n  <ion-text>Type d'annonce : </ion-text><ion-text style=\"font-weight: bold\">Don</ion-text>\n</ion-item>\n<!--  -->\n<!-- <ion-item lines=\"none\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedImages.length<1\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedImages.length>=1\"></ion-icon>\n  <ion-row><ion-text>Image(s): </ion-text></ion-row>\n</ion-item>\n<ion-item lines=\"none\">\n  <ion-thumbnail slot=\"start\" *ngFor=\"let image of selectedImages;let i = index\" style=\"position:relative\">\n    <ion-fab-button color=\"danger\" style=\"position: absolute; top: 0; right: 0;\" size=\"small\" (click)=\"removeOnImagesList(i)\">\n      <ion-icon name=\"trash-outline\"></ion-icon>\n    </ion-fab-button>\n    <img [src]=\"image.data\" />\n  </ion-thumbnail>\n  \n  <div class=\"camera\" (click)=\"getPicture()\" *ngIf=\"selectedImages.length<5\">\n    <ion-icon name=\"camera-outline\" size=\"large\" color=\"medium\" ></ion-icon>\n  </div>\n</ion-item> -->\n<!-- <input type=\"file\" (change)=\"onFileChange($event)\"> -->\n<!--  -->\n<ion-item lines=\"none\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedTitle==''\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedTitle!=''\"></ion-icon>\n  <ion-row><ion-text>Titre de l'annonce: </ion-text></ion-row>\n</ion-item>\n<ion-item class=\"input ion-margin-horizontal\">\n  <ion-row><ion-input [(ngModel)]=\"selectedTitle\" type=\"text\" placeholder=\"Ex : Table,chaise,cahier... \" maxlength=\"45\"></ion-input></ion-row>\n</ion-item>\n<ion-row style=\"width: 100%;padding:0;margin:0\">\n  <ion-col size=\"6\"></ion-col>\n  <ion-col size=\"6\" style=\"text-align: left;\"><ion-text style=\"color:gray\" >30 caracteres max</ion-text></ion-col>\n</ion-row>\n  \n<!--  -->\n<ion-item lines=\"none\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedDescription==''\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedDescription!=''\"></ion-icon>\n  <ion-row><ion-text>Description : </ion-text></ion-row>\n</ion-item>\n<ion-item class=\"input ion-margin-horizontal\">\n  <ion-textarea [(ngModel)]=\"selectedDescription\" placeholder=\"Ex : ordinateur noir , ecran 17 pouces ......En fournisant un maximum de details vous augmenter les chances d'aider \"\n   maxlength=\"200\" rows=\"4\"></ion-textarea>\n</ion-item>\n<ion-row style=\"width: 100%;padding:0;margin:0\">\n  <ion-col size=\"6\"></ion-col>\n  <ion-col size=\"6\" style=\"text-align: left;\"><ion-text style=\"color:gray\" >200 caracteres max</ion-text></ion-col>\n  </ion-row>\n<!--  -->\n<ion-item (click)=\"openDisponibiliteSheet()\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedDisponibility==''\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedDisponibility!=''\"></ion-icon>\n  <ion-row><ion-text>{{selectedDisponibility!=''?selectedDisponibility:'Disponibilite'}} </ion-text></ion-row>\n  <ion-icon name=\"chevron-forward-outline\"  color=\"medium\" slot=\"end\"></ion-icon>\n</ion-item>\n<!--  -->\n<ion-item (click)=\"openEtatSheet()\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedState==''\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedState!=''\"></ion-icon>\n  <ion-row><ion-text>{{selectedState!=''?selectedState:'Etat objet'}} </ion-text></ion-row>\n  <ion-icon color=\"danger\" name=\"{{selectedStateIcon!='' ?selectedStateIcon:'' }}\"></ion-icon>\n  <ion-icon name=\"chevron-forward-outline\"  color=\"medium\" slot=\"end\"></ion-icon>\n</ion-item>\n<!--  -->\n<ion-item (click)=\"setCategoriesModalOpen(true)\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedCategory==''\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedCategory!=''\"></ion-icon>\n  <ion-text style=\"margin-left:10px\">{{selectedCategory!=''?selectedCategory:'Choose a Category'}}</ion-text>\n  <ion-icon name=\"chevron-forward-outline\"  color=\"medium\" slot=\"end\"></ion-icon>\n</ion-item>\n<!--  -->\n<ion-item lines=\"none\" (click)=\"locationSheet()\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedLatitude==null || selectedLongitude==null\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedLatitude!=null || selectedLongitude!=null\"></ion-icon>\n  <ion-icon name=\"location\" color=\"danger\"></ion-icon>\n  <ion-text style=\"margin-left:10px\">{{myAdress}}</ion-text>\n  <ion-icon name=\"chevron-forward-outline\"  color=\"medium\" slot=\"end\"></ion-icon>\n</ion-item>\n<ion-item-divider></ion-item-divider>\n\n<ion-card-subtitle style=\"color:grey\" class=\"ion-margin\">\nVotre adresse restera confidentielle et ne sera jamais affiche publiquement , elle nous permet d'afficher un point aleatoire dans un rayoun de 600 m dee vous \n</ion-card-subtitle>\n</ion-content>\n<ion-card style=\"width:100%;margin:0\">\n<ion-button expand=\"block\" color=\"danger\" (click)=\"createDonation()\" class=\"ion-margin\">Modifier don </ion-button>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_modal-edit-dons_modal-edit-dons_page_ts.js.map