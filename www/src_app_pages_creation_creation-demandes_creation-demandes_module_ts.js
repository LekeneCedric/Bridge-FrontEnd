"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_creation_creation-demandes_creation-demandes_module_ts"],{

/***/ 4310:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-demandes/creation-demandes-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationDemandesPageRoutingModule": () => (/* binding */ CreationDemandesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _creation_demandes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-demandes.page */ 8562);




const routes = [
    {
        path: '',
        component: _creation_demandes_page__WEBPACK_IMPORTED_MODULE_0__.CreationDemandesPage
    }
];
let CreationDemandesPageRoutingModule = class CreationDemandesPageRoutingModule {
};
CreationDemandesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreationDemandesPageRoutingModule);



/***/ }),

/***/ 8619:
/*!******************************************************************************!*\
  !*** ./src/app/pages/creation/creation-demandes/creation-demandes.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationDemandesPageModule": () => (/* binding */ CreationDemandesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _creation_demandes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-demandes-routing.module */ 4310);
/* harmony import */ var _creation_demandes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-demandes.page */ 8562);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 9036);








let CreationDemandesPageModule = class CreationDemandesPageModule {
};
CreationDemandesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _creation_demandes_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreationDemandesPageRoutingModule
        ],
        providers: [_ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeGeocoder],
        declarations: [_creation_demandes_page__WEBPACK_IMPORTED_MODULE_1__.CreationDemandesPage]
    })
], CreationDemandesPageModule);



/***/ }),

/***/ 8562:
/*!****************************************************************************!*\
  !*** ./src/app/pages/creation/creation-demandes/creation-demandes.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationDemandesPage": () => (/* binding */ CreationDemandesPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _creation_demandes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-demandes.page.html?ngResource */ 8911);
/* harmony import */ var _creation_demandes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creation-demandes.page.scss?ngResource */ 7871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 9036);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_creation_creation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/creation/creation.service */ 9444);
/* harmony import */ var src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/medias/medias.service */ 8549);
/* harmony import */ var src_app_services_photo_photo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/photo/photo.service */ 88);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);












let CreationDemandesPage = class CreationDemandesPage {
  constructor(creationService, mediaService, navCtrl, actionSheetController, photoService, nativGeocoder, loadingController, toast, router) {
    this.creationService = creationService;
    this.mediaService = mediaService;
    this.navCtrl = navCtrl;
    this.actionSheetController = actionSheetController;
    this.photoService = photoService;
    this.nativGeocoder = nativGeocoder;
    this.loadingController = loadingController;
    this.toast = toast;
    this.router = router;
    this.GeocoderOption = {
      useLocale: true,
      maxResults: 5
    };
    this.myAdress = "";
    this.selectedStateIcon = '';
    this.selectedTitle = '';
    this.selectedDescription = '';
    this.selectedImages = [];
    this.selectedLatitude = 7;
    this.selectedLongitude = 11;
    this.selectedCategory = ''; //Modals

    this.iscategoriesModalOpen = false;
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__.Geolocation.watchPosition({
        enableHighAccuracy: true,
        timeout: 3000,
        maximumAge: 1000
      }, () => {
        console.log('watchPosition updated');
      });
      const mycoordinate = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__.Geolocation.getCurrentPosition();
      _this.myCoordinate = mycoordinate;
    })();
  }

  setCategoriesModalOpen(isopen) {
    this.iscategoriesModalOpen = isopen;
  }
  /**--------------------------------FUNCTIONS--------------------------------------------*/


  createDonation() {
    var _this2 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingController.create({
        spinner: 'lines-small',
        message: 'Patientez....',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      yield loading.present();
      const uid = JSON.parse(localStorage.getItem('mydata')).id;
      const token = localStorage.getItem('token');
      const demande = {
        donateur_id: uid,
        contenu: _this2.selectedDescription,
        title: _this2.selectedTitle,
        category: _this2.selectedCategory,
        adresse: 'cameroun,yaounde',
        longitude: _this2.selectedLongitude,
        latitude: _this2.selectedLatitude
      };

      _this2.creationService.createDemande(demande, token).toPromise().then( /*#__PURE__*/function () {
        var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          loading.dismiss();

          _this2.router.navigateByUrl('/menu/demandes').then(() => {
            window.location.reload();
          });

          const toast = _this2.toast.create({
            message: 'demande publie',
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
    this.selectedTitle != '' && this.selectedDescription != '' && this.selectedCategory != '' && this.selectedLongitude != null && this.selectedLatitude != null ? res = true : null;
    return res;
  }

  navBack() {
    this.navCtrl.back();
  }

  locationSheet() {
    var _this3 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this3.actionSheetController.create({
        buttons: [{
          text: 'Ma position',
          icon: 'body-outline',
          handler: () => {
            _this3.selectedLongitude = _this3.myCoordinate.coords.longitude;
            _this3.selectedLatitude = _this3.myCoordinate.coords.latitude;

            _this3.nativGeocoder.reverseGeocode(_this3.selectedLatitude, _this3.selectedLongitude, _this3.GeocoderOption).then(result => {
              _this3.MyGeocoder = result[0];
              _this3.myAdress = _this3.MyGeocoder.subLocality + "," + _this3.MyGeocoder.locality + "," + _this3.MyGeocoder.administrativeArea + "," + _this3.MyGeocoder.postalCode + "," + _this3.MyGeocoder.countryName;
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
          icon: 'location-outline',
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
          icon: 'paw-outline',
          text: 'Nourriture pour animaux',
          handler: () => {
            _this4.selectedCategory = 'Nourriture pour animaux';

            _this4.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'paw-outline',
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
          icon: 'leaf-outline',
          text: 'Machines & equipements jardin',
          handler: () => {
            _this5.selectedCategory = 'Machines & equipements jardin';

            _this5.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'leaf-outline',
          text: 'Mobilier jardin',
          handler: () => {
            _this5.selectedCategory = 'Mobilier jardin';

            _this5.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'leaf-outline',
          text: 'petit outillsage et accessoire jardin',
          handler: () => {
            _this5.selectedCategory = 'petit outillsage et accessoire jardin';

            _this5.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'leaf-outline',
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
          icon: 'library-outline',
          text: 'Livres,films & musiques',
          handler: () => {
            _this6.selectedCategory = 'Livres,films & musiques';

            _this6.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'library-outline',
          text: 'jeux & jouets',
          handler: () => {
            _this6.selectedCategory = 'jeux & jouets';

            _this6.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'library-outline',
          text: 'Jeux videos',
          handler: () => {
            _this6.selectedCategory = 'Jeux videos';

            _this6.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'library-outline',
          text: 'Materiels & equipements sportifs',
          handler: () => {
            _this6.selectedCategory = 'Materiels & equipements sportifs';

            _this6.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'library-outline',
          text: 'Autres accessoires sport',
          handler: () => {
            _this6.selectedCategory = 'Autres accessoires sport';

            _this6.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'library-outline',
          text: 'Papeterie & fourniture de bureau',
          handler: () => {
            _this6.selectedCategory = 'Papeterie & fourniture de bureau';

            _this6.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'library-outline',
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
          icon: 'laptop-outline',
          text: 'Informatique',
          handler: () => {
            _this7.selectedCategory = 'Informatique';

            _this7.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'laptop-outline',
          text: 'TV,Hi-Fi,telephonie',
          handler: () => {
            _this7.selectedCategory = 'TV,Hi-Fi,telephonie';

            _this7.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'laptop-outline',
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
          icon: 'bed-outline',
          text: 'Meubles',
          handler: () => {
            _this8.selectedCategory = 'Meubles';

            _this8.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'bed-outline',
          text: 'Vaiselles & ustensiles cuisine',
          handler: () => {
            _this8.selectedCategory = 'Vaiselles & ustensiles cuisine';

            _this8.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'bed-outline',
          text: 'Decoration de la maison',
          handler: () => {
            _this8.selectedCategory = 'Decoration de la maison';

            _this8.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'bed-outline',
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
          icon: 'logo-reddit',
          text: 'Vetements bebe',
          handler: () => {
            _this9.selectedCategory = 'Vetements bebe';

            _this9.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'logo-reddit',
          text: 'Jouets pour bebe',
          handler: () => {
            _this9.selectedCategory = 'Jouets pour bebe';

            _this9.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'logo-reddit',
          text: 'Equipement de puericulture',
          handler: () => {
            _this9.selectedCategory = 'Equipement de puericulture';

            _this9.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'logo-reddit',
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
          icon: 'build-outline',
          text: 'petit electromenager',
          handler: () => {
            _this10.selectedCategory = 'petit electromenager';

            _this10.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'build-outline',
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
          icon: 'shirt-outline',
          text: 'Vetements',
          handler: () => {
            _this11.selectedCategory = 'Vetements';

            _this11.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'shirt-outline',
          text: 'Accessoires de mode',
          handler: () => {
            _this11.selectedCategory = 'Accessoires de mode';

            _this11.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'shirt-outline',
          text: 'Chaussures',
          handler: () => {
            _this11.selectedCategory = 'Chaussures';

            _this11.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'shirt-outline',
          text: "Produits & accessoires d'hygiene",
          handler: () => {
            _this11.selectedCategory = "Produits & accessoires d'hygiene";

            _this11.setCategoriesModalOpen(false);
          }
        }, {
          icon: 'shirt-outline',
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

};

CreationDemandesPage.ctorParameters = () => [{
  type: src_app_services_creation_creation_service__WEBPACK_IMPORTED_MODULE_4__.CreationService
}, {
  type: src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_5__.MediasService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController
}, {
  type: src_app_services_photo_photo_service__WEBPACK_IMPORTED_MODULE_6__.PhotoService
}, {
  type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}];

CreationDemandesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-creation-demandes',
  template: _creation_demandes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_creation_demandes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CreationDemandesPage);


/***/ }),

/***/ 8549:
/*!***************************************************!*\
  !*** ./src/app/services/medias/medias.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediasService": () => (/* binding */ MediasService)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);





let MediasService = class MediasService {
  constructor(http) {
    this.http = http;
  }

  getOneMedia(id) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Accept': 'application/json, text/plain, */*',
      'X-Requested-With': 'XMLHttpRequest'
    });
    const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiURL + `/medias/${id}`;
    return this.http.get(api, {
      headers: headers
    });
  }

  uploadImageProfil(token, credential) {
    var _this = this;

    console.log(credential.files);
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        const res = yield fetch(credential.files.data);
        const blob = yield res.blob();
        const formData = new FormData();
        formData.append('file', blob, credential.files.path);
        formData.append('donateur_id', credential.donateur_id);

        _this.uploadData(formData, token).toPromise().then(data => {
          resolve('success');
        });
      });

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  uploadImageDon(token, credential) {
    var _this2 = this;

    console.log(credential.files);
    return new Promise((resolve, reject) => {
      try {
        var i = 0;
        var max = credential.files.length;
        credential.files.forEach( /*#__PURE__*/function () {
          var _ref2 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (file) {
            const res = yield fetch(file.data);
            const blob = yield res.blob();
            const formData = new FormData();
            formData.append('file', blob, file.path);
            formData.append('don_id', credential.don_id);
            setTimeout(() => {
              _this2.uploadData(formData, token).toPromise().then(data => {
                i += 1;
                console.log(`image ${i} uploaded successfully`);
                i >= max ? resolve('success') : null;
              });
            }, 3000);
          });

          return function (_x3) {
            return _ref2.apply(this, arguments);
          };
        }());
      } catch (err) {
        reject(err);
      }
    });
  }

  uploadImageAssociation(token, credential) {
    var _this3 = this;

    console.log(credential.files);
    return new Promise((resolve, reject) => {
      try {
        var i = 0;
        var max = credential.files.length;
        credential.files.forEach( /*#__PURE__*/function () {
          var _ref3 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (file) {
            const res = yield fetch(file.data);
            const blob = yield res.blob();
            const formData = new FormData();
            formData.append('file', blob, file.path);
            formData.append('association_id', credential.association_id);
            setTimeout(() => {
              _this3.uploadData(formData, token).toPromise().then(data => {
                i += 1;
                console.log(`image ${i} uploaded successfully`);
                i >= max ? resolve('success') : null;
              });
            }, 3000);
          });

          return function (_x4) {
            return _ref3.apply(this, arguments);
          };
        }());
      } catch (err) {
        reject(err);
      }
    });
  }

  uploadImageMouvement(token, credential) {
    var _this4 = this;

    console.log(credential.files);
    return new Promise((resolve, reject) => {
      try {
        var i = 0;
        var max = credential.files.length;
        credential.files.forEach( /*#__PURE__*/function () {
          var _ref4 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (file) {
            const res = yield fetch(file.data);
            const blob = yield res.blob();
            const formData = new FormData();
            formData.append('file', blob, file.path);
            formData.append('mouvement_id', credential.mouvement_id);
            setTimeout(() => {
              _this4.uploadData(formData, token).toPromise().then(data => {
                i += 1;
                console.log(`image ${i} uploaded successfully`);
                i >= max ? resolve('success') : null;
              });
            }, 3000);
          });

          return function (_x5) {
            return _ref4.apply(this, arguments);
          };
        }());
      } catch (err) {
        reject(err);
      }
    });
  }

  uploadImageAnnonce(token, credential) {
    var _this5 = this;

    console.log(credential.files);
    return new Promise((resolve, reject) => {
      try {
        var i = 0;
        var max = credential.files.length;
        credential.files.forEach( /*#__PURE__*/function () {
          var _ref5 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (file) {
            const res = yield fetch(file.data);
            const blob = yield res.blob();
            const formData = new FormData();
            formData.append('file', blob, file.path);
            formData.append('annonce_id', credential.annonce_id);
            setTimeout(() => {
              _this5.uploadData(formData, token).toPromise().then(data => {
                i += 1;
                console.log(`image ${i} uploaded successfully`);
                i >= max ? resolve('success') : null;
              });
            }, 3000);
          });

          return function (_x6) {
            return _ref5.apply(this, arguments);
          };
        }());
      } catch (err) {
        reject(err);
      }
    });
  }

  uploadData(formData, token) {
    const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiURL + '/medias';
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(api, formData);
  }

};

MediasService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}];

MediasService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], MediasService);


/***/ }),

/***/ 88:
/*!*************************************************!*\
  !*** ./src/app/services/photo/photo.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoService": () => (/* binding */ PhotoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let PhotoService = class PhotoService {
    constructor() { }
};
PhotoService.ctorParameters = () => [];
PhotoService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], PhotoService);



/***/ }),

/***/ 591:
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
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 591);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 8391)).then(m => new m.GeolocationWeb())
});



/***/ }),

/***/ 7871:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-demandes/creation-demandes.page.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = ".input {\n  border: 0.5px solid rgb(206, 204, 204);\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0aW9uLWRlbWFuZGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHNDQUFBO0VBQ0EsbUJBQUE7QUFBSiIsImZpbGUiOiJjcmVhdGlvbi1kZW1hbmRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pbnB1dHtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigyMDYsIDIwNCwgMjA0KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 8911:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-demandes/creation-demandes.page.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-icon (click)=\"navBack()\" name=\"chevron-back-outline\" size=\"large\" color=\"danger\"></ion-icon>\n      <ion-title>creation-demande</ion-title>\n    </ion-row>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-modal [isOpen]=\"iscategoriesModalOpen\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Categories</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"setCategoriesModalOpen(false)\">Close</ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content class=\"ion-padding\">\n        <ion-list class=\"ion-justify-content-between\">\n          <ion-item (click)=\"electromenagerSheet()\">\n            <ion-icon name=\"build-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Electromenager</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"modebeautySheet()\">\n            <ion-icon name=\"shirt-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Mode,beaute & accessoire</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"universbebeSheet()\">\n            <ion-icon name=\"logo-reddit\" slot=\"start\"></ion-icon>\n            <ion-text>Univers bebe</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"maison_ammeublementSheet()\">\n            <ion-icon name=\"bed-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Maison & ameublement</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"electroniqueSheet()\">\n            <ion-icon name=\"laptop-outline\" slot=\"start\"></ion-icon>\n            <ion-text>High-tech & electronique</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"culture_sport_loisir_Sheet()\">\n            <ion-icon name=\"library-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Culture,sports & loisirs</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"jardin_bricolage_Sheet()\">\n            <ion-icon name=\"leaf-outline\" slot=\"start\"></ion-icon>\n            <ion-text>jardin & bricolage</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"monde_animaux_Sheet()\">\n            <ion-icon name=\"paw-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Monde des animaux</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n<ion-item>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\"></ion-icon>\n  <ion-row><ion-text>Type d'annonce : </ion-text><ion-text style=\"font-weight: bold\">Demande</ion-text></ion-row>\n</ion-item>\n<!--  -->\n<!--  -->\n<ion-item lines=\"none\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedTitle==''\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedTitle!=''\"></ion-icon>\n  <ion-row><ion-text>Titre de la demande: </ion-text></ion-row>\n</ion-item>\n<ion-item class=\"input ion-margin-horizontal\"><ion-input [(ngModel)]=\"selectedTitle\" type=\"text\" placeholder=\"Ex : Table,chaise,cahier... \" maxlength=\"45\"></ion-input>\n</ion-item>\n<ion-row style=\"width: 100%;padding:0;margin:0\">\n  <ion-col size=\"6\"></ion-col>\n  <ion-col size=\"6\" style=\"text-align: left;\"><ion-text style=\"color:gray\" >30 caracteres max</ion-text></ion-col>\n</ion-row>\n  \n<!--  -->\n<ion-item lines=\"none\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedDescription==''\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedDescription!=''\"></ion-icon>\n  <ion-row><ion-text>Description : </ion-text></ion-row>\n</ion-item>\n<ion-item class=\"input ion-margin-horizontal\">\n  <ion-textarea [(ngModel)]=\"selectedDescription\" placeholder=\"Ex : ordinateur noir , ecran 17 pouces ......En fournisant un maximum de details vous augmenter les chances d'aider \"\n   maxlength=\"191\" rows=\"5\"></ion-textarea>\n</ion-item>\n<ion-row style=\"width: 100%;padding:0;margin:0\">\n  <ion-col size=\"6\"></ion-col>\n  <ion-col size=\"6\" style=\"text-align: left;\"><ion-text style=\"color:gray\" >191 caracteres max</ion-text></ion-col>\n  </ion-row>\n<!--  -->\n<ion-item (click)=\"setCategoriesModalOpen(true)\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedCategory==''\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedCategory!=''\"></ion-icon>\n  <ion-text style=\"margin-left:10px\">{{selectedCategory!=''?selectedCategory:'Choose a Category'}}</ion-text>\n  <ion-icon name=\"chevron-forward-outline\"  color=\"medium\" slot=\"end\"></ion-icon>\n</ion-item>\n<!--  -->\n<ion-item lines=\"none\" (click)=\"locationSheet()\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedLatitude==null || selectedLongitude==null\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedLatitude!=null || selectedLongitude!=null\"></ion-icon>\n  <ion-icon name=\"location\" color=\"danger\"></ion-icon>\n  <ion-text style=\"margin-left:10px\">{{myAdress!=''?myAdress:'Adresse' }}</ion-text>\n  <ion-icon name=\"chevron-forward-outline\"  color=\"medium\" slot=\"end\"></ion-icon>\n</ion-item>\n<ion-item-divider></ion-item-divider>\n\n<ion-card-subtitle style=\"color:grey\" class=\"ion-margin\">\nVotre adresse restera confidentielle et ne sera jamais affiche publiquement , elle nous permet d'afficher un point aleatoire dans un rayoun de 600 m dee vous \n</ion-card-subtitle>\n</ion-content>\n<ion-card style=\"width:100%;margin:0\">\n<ion-button expand=\"block\" color=\"danger\" (click)=\"createDonation()\" class=\"ion-margin\"[disabled]=\"!validationDemande\" >Publier Demande</ion-button>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_creation_creation-demandes_creation-demandes_module_ts.js.map