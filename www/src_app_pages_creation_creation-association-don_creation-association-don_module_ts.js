"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_creation_creation-association-don_creation-association-don_module_ts"],{

/***/ 78209:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-association-don/creation-association-don-routing.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationAssociationDonPageRoutingModule": () => (/* binding */ CreationAssociationDonPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _creation_association_don_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-association-don.page */ 88502);




const routes = [
    {
        path: '',
        component: _creation_association_don_page__WEBPACK_IMPORTED_MODULE_0__.CreationAssociationDonPage
    }
];
let CreationAssociationDonPageRoutingModule = class CreationAssociationDonPageRoutingModule {
};
CreationAssociationDonPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreationAssociationDonPageRoutingModule);



/***/ }),

/***/ 47537:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-association-don/creation-association-don.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationAssociationDonPageModule": () => (/* binding */ CreationAssociationDonPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _creation_association_don_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-association-don-routing.module */ 78209);
/* harmony import */ var _creation_association_don_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-association-don.page */ 88502);







let CreationAssociationDonPageModule = class CreationAssociationDonPageModule {
};
CreationAssociationDonPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _creation_association_don_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreationAssociationDonPageRoutingModule
        ],
        declarations: [_creation_association_don_page__WEBPACK_IMPORTED_MODULE_1__.CreationAssociationDonPage]
    })
], CreationAssociationDonPageModule);



/***/ }),

/***/ 88502:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-association-don/creation-association-don.page.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationAssociationDonPage": () => (/* binding */ CreationAssociationDonPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _creation_association_don_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-association-don.page.html?ngResource */ 93655);
/* harmony import */ var _creation_association_don_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creation-association-don.page.scss?ngResource */ 92193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_creation_creation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/creation/creation.service */ 79444);
/* harmony import */ var src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/medias/medias.service */ 28549);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/native-geocoder/ngx */ 79683);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 58027);















let CreationAssociationDonPage = class CreationAssociationDonPage {
  constructor(creationService, mediaService, navCtrl, actionSheetController, nativGeocoder, platform, loadingController, manageDataService, http, toast, router, route) {
    this.creationService = creationService;
    this.mediaService = mediaService;
    this.navCtrl = navCtrl;
    this.actionSheetController = actionSheetController;
    this.nativGeocoder = nativGeocoder;
    this.platform = platform;
    this.loadingController = loadingController;
    this.manageDataService = manageDataService;
    this.http = http;
    this.toast = toast;
    this.router = router;
    this.route = route;
    /*--------------------------------_VARIABLES--------------------------*/

    this.options = {
      useLocale: true,
      maxResults: 5
    };
    this.Besoin = null;
    this.GeocoderOption = {
      useLocale: true,
      maxResults: 5
    };
    this.myAdress = "";
    this.selectedState = '';
    this.selectedStateIcon = '';
    this.selectedTitle = '';
    this.selectedDescription = '';
    this.selectedImages = [];
    this.selectedLatitude = null;
    this.selectedLongitude = null;
    this.selectedCategory = '';
    this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.storage;
    this.selectedQuantity = 0; //Modals

    this.iscategoriesModalOpen = false;

    this.convertBlobToBase64 = blob => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.readAsDataURL(blob);
    });
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.association_id = _this.route.snapshot.params.id_association;
      _this.myId = _this.route.snapshot.params.id_donateur;
      _this.besoin_id = _this.route.snapshot.params.id_besoin;

      _this.manageDataService.getOneBesoin(_this.besoin_id).toPromise().then(data => {
        _this.Besoin = data;
      });

      _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_5__.Geolocation.watchPosition({
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 1000
      }, () => {
        console.log('watchPosition updated');
      });
      _this.myCoordinate = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_5__.Geolocation.getCurrentPosition();
    })();
  }

  setCategoriesModalOpen(isopen) {
    this.iscategoriesModalOpen = isopen;
  }
  /*--------------------------------__FUNCTIONS--------------------------------*/


  removeOnImagesList(i) {
    this.selectedImages.splice(i, 1);
  }

  getPicture() {
    var _this2 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_8__.Camera.getPhoto({
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_8__.CameraResultType.Uri,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_8__.CameraSource.Camera,
        quality: 100
      });

      if (image) {
        console.log(image);

        _this2.saveImage(image);
      }
    })();
  }

  saveImage(image) {
    var _this3 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const base64data = yield _this3.readAsBase64(image);
      console.log(base64data);
      const filename = new Date().getTime() + '.jpeg';
      const img = {
        path: filename,
        data: base64data
      };
      setTimeout(() => {
        _this3.selectedImages.unshift(img);
      }, 500);
    })();
  }

  readAsBase64(photo) {
    var _this4 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield fetch(photo.webPath);
      const blob = yield res.blob();
      return yield _this4.convertBlobToBase64(blob);
    })();
  }

  createDonation() {
    var _this5 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this5.loadingController.create({
        spinner: 'bubbles',
        message: 'creation dons....',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      yield loading.present();
      const uid = JSON.parse(localStorage.getItem('mydata')).id;
      const token = localStorage.getItem('token');
      const donation = {
        association_id: _this5.association_id,
        donateur_id: uid,
        besoin_id: _this5.besoin_id,
        titre: _this5.selectedTitle,
        category: _this5.selectedCategory,
        etat: _this5.selectedState,
        description: _this5.selectedDescription,
        longitude: _this5.myCoordinate.coords.longitude,
        latitude: _this5.myCoordinate.coords.latitude,
        adresse: _this5.myAdress,
        quantite: _this5.selectedQuantity,
        verifie: 0,
        valide: 0
      };

      _this5.creationService.createDonBesoinAssociation(donation).toPromise().then(data => {
        _this5.upload_image(data, loading);
      }).catch( /*#__PURE__*/function () {
        var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
          loading.dismiss(); //on affiche un message de success

          const toast = _this5.toast.create({
            message: `${err.message}`,
            icon: 'information-circle',
            duration: 1000,
            color: "danger"
          });

          (yield toast).present();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  upload_image(data, loading) {
    var _this6 = this;

    //creation don 
    const token = localStorage.getItem('token');
    let fd = {
      asso_don_id: data.Don.id,
      files: this.selectedImages
    };
    this.mediaService.uploadImageAssoBesoinDon(token, fd).then( /*#__PURE__*/function () {
      var _ref2 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        setTimeout( /*#__PURE__*/(0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          loading.dismiss();

          _this6.router.navigateByUrl('/menu/associations'); //on affiche un message de success


          const toast = _this6.toast.create({
            message: `don creer avec success`,
            icon: 'information-circle',
            duration: 1000,
            color: "success"
          });

          (yield toast).present();
        }));
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()).catch( /*#__PURE__*/function () {
      var _ref4 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        loading.dismiss(); //on affiche un message de success

        const toast = _this6.toast.create({
          message: `${err.message}`,
          icon: 'information-circle',
          duration: 1000,
          color: "danger"
        });

        (yield toast).present();
      });

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  }

  get validationDonation() {
    let res = false;
    this.selectedImages.length >= 1 && this.selectedTitle != '' && this.selectedDescription != '' && this.selectedQuantity > 0 && this.selectedState != '' && this.selectedCategory != '' ? res = true : null;
    return res;
  }

  navBack() {
    this.router.navigateByUrl('/menu/dons', {
      replaceUrl: true
    });
  }

  onFileChange(event) {
    console.log(event.target.files[0]);
    this.selectedImages.unshift(event.target.files[0]);
  }

  locationSheet() {
    var _this7 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this7.actionSheetController.create({
        buttons: [{
          text: 'Ma position',
          handler: () => {
            _this7.selectedLongitude = _this7.myCoordinate.coords.longitude, _this7.selectedLatitude = _this7.myCoordinate.coords.latitude, _this7.nativGeocoder.reverseGeocode(_this7.myCoordinate.coords.latitude, _this7.myCoordinate.coords.longitude, _this7.options).then( /*#__PURE__*/function () {
              var _ref5 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
                _this7.myAdress = JSON.stringify(result[0].countryName) + '' + JSON.stringify(result[0].administrativeArea) + '' + JSON.stringify(result[0].subAdministrativeArea) + '' + JSON.stringify(result[0].locality);

                const toast = _this7.toast.create({
                  message: `${JSON.stringify(result[0].countryName) + '' + JSON.stringify(result[0].administrativeArea) + '' + JSON.stringify(result[0].subAdministrativeArea) + '' + JSON.stringify(result[0].locality)}`,
                  icon: 'information-circle',
                  duration: 1000,
                  color: "success"
                });

                (yield toast).present();
                console.log(JSON.stringify(result));
              });

              return function (_x4) {
                return _ref5.apply(this, arguments);
              };
            }()).catch(error => console.log(error));

            _this7.setCategoriesModalOpen(false);
          }
        }, {
          text: 'open Map',
          handler: () => {
            _this7.selectedLongitude = null;
            _this7.selectedLatitude = null;

            _this7.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  monde_animaux_Sheet() {
    var _this8 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this8.actionSheetController.create({
        buttons: [{
          text: 'Nourriture pour animaux',
          handler: () => {
            _this8.selectedCategory = 'Nourriture pour animaux';

            _this8.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Accessoires pour animaux',
          handler: () => {
            _this8.selectedCategory = 'Accessoires pour animaux';

            _this8.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  jardin_bricolage_Sheet() {
    var _this9 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this9.actionSheetController.create({
        buttons: [{
          text: 'Machies & equipements jardin',
          handler: () => {
            _this9.selectedCategory = 'Machies & equipements jardin';

            _this9.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Mobilier jardin',
          handler: () => {
            _this9.selectedCategory = 'Mobilier jardin';

            _this9.setCategoriesModalOpen(false);
          }
        }, {
          text: 'petit outillsage et accessoire jardin',
          handler: () => {
            _this9.selectedCategory = 'petit outillsage et accessoire jardin';

            _this9.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Plantes & jardin',
          handler: () => {
            _this9.selectedCategory = 'Plantes & jardin';

            _this9.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  culture_sport_loisir_Sheet() {
    var _this10 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this10.actionSheetController.create({
        buttons: [{
          text: 'Livres,films & musiques',
          handler: () => {
            _this10.selectedCategory = 'Livres,films & musiques';

            _this10.setCategoriesModalOpen(false);
          }
        }, {
          text: 'jeux & jouets',
          handler: () => {
            _this10.selectedCategory = 'jeux & jouets';

            _this10.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Jeux videos',
          handler: () => {
            _this10.selectedCategory = 'Jeux videos';

            _this10.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Materiels & equipements sportifs',
          handler: () => {
            _this10.selectedCategory = 'Materiels & equipements sportifs';

            _this10.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Autres accessoires sport',
          handler: () => {
            _this10.selectedCategory = 'Autres accessoires sport';

            _this10.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Papeterie & fourniture de bureau',
          handler: () => {
            _this10.selectedCategory = 'Papeterie & fourniture de bureau';

            _this10.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Loisirs creatifs',
          handler: () => {
            _this10.selectedCategory = 'Loisirs creatifs';

            _this10.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  electroniqueSheet() {
    var _this11 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this11.actionSheetController.create({
        buttons: [{
          text: 'Informatique',
          handler: () => {
            _this11.selectedCategory = 'Informatique';

            _this11.setCategoriesModalOpen(false);
          }
        }, {
          text: 'TV,Hi-Fi,telephonie',
          handler: () => {
            _this11.selectedCategory = 'TV,Hi-Fi,telephonie';

            _this11.setCategoriesModalOpen(false);
          }
        }, {
          text: 'cables,coques & accesoires',
          handler: () => {
            _this11.selectedCategory = 'cables,coques & accesoires';

            _this11.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  maison_ammeublementSheet() {
    var _this12 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this12.actionSheetController.create({
        buttons: [{
          text: 'Meubles',
          handler: () => {
            _this12.selectedCategory = 'Meubles';

            _this12.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Vaiselles & ustensiles cuisine',
          handler: () => {
            _this12.selectedCategory = 'Vaiselles & ustensiles cuisine';

            _this12.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Decoration de la maison',
          handler: () => {
            _this12.selectedCategory = 'Decoration de la maison';

            _this12.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Entretien de la maison',
          handler: () => {
            _this12.selectedCategory = 'Entretien de la maison';

            _this12.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  universbebeSheet() {
    var _this13 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this13.actionSheetController.create({
        buttons: [{
          text: 'Vetements bebe',
          handler: () => {
            _this13.selectedCategory = 'Vetements bebe';

            _this13.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Jouets pour bebe',
          handler: () => {
            _this13.selectedCategory = 'Jouets pour bebe';

            _this13.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Equipement de puericulture',
          handler: () => {
            _this13.selectedCategory = 'Equipement de puericulture';

            _this13.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Petits accessoires & consommables',
          handler: () => {
            _this13.selectedCategory = 'Petits accessoires & consommables';

            _this13.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  electromenagerSheet() {
    var _this14 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this14.actionSheetController.create({
        buttons: [{
          text: 'petit electromenager',
          handler: () => {
            _this14.selectedCategory = 'petit electromenager';

            _this14.setCategoriesModalOpen(false);
          }
        }, {
          text: 'gros electromenager',
          handler: () => {
            _this14.selectedCategory = 'gros electromenager';

            _this14.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  modebeautySheet() {
    var _this15 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this15.actionSheetController.create({
        buttons: [{
          text: 'Vetements',
          handler: () => {
            _this15.selectedCategory = 'Vetements';

            _this15.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Accessoires de mode',
          handler: () => {
            _this15.selectedCategory = 'Accessoires de mode';

            _this15.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Chaussures',
          handler: () => {
            _this15.selectedCategory = 'Chaussures';

            _this15.setCategoriesModalOpen(false);
          }
        }, {
          text: "Produits & accessoires d'hygiene",
          handler: () => {
            _this15.selectedCategory = "Produits & accessoires d'hygiene";

            _this15.setCategoriesModalOpen(false);
          }
        }, {
          text: 'Maquillage',
          handler: () => {
            _this15.selectedCategory = 'Maquillage';

            _this15.setCategoriesModalOpen(false);
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  openEtatSheet() {
    var _this16 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this16.actionSheetController.create({
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
            _this16.selectedState = 'Neuf';
            _this16.selectedStateIcon = 'ribbon-outline';
          }
        }, {
          text: 'Bon etat',
          icon: 'checkmark-done-circle-outline',
          handler: () => {
            _this16.selectedState = 'Bon etat';
            _this16.selectedStateIcon = 'checkmark-done-circle-outline';
          }
        }, {
          text: 'Etat moyen',
          icon: 'checkmark-circle-outline',
          handler: () => {
            _this16.selectedState = 'Etat-moyen';
            _this16.selectedStateIcon = 'checkmark-circle-outline';
          }
        }, {
          text: 'A bricoler',
          icon: 'construct-outline',
          handler: () => {
            _this16.selectedState = 'A bricoler', _this16.selectedStateIcon = 'construct-outline';
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

};

CreationAssociationDonPage.ctorParameters = () => [{
  type: src_app_services_creation_creation_service__WEBPACK_IMPORTED_MODULE_3__.CreationService
}, {
  type: src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_4__.MediasService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController
}, {
  type: _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__.NativeGeocoder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
}, {
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_9__.ManageDataService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
}];

CreationAssociationDonPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-creation-association-don',
  template: _creation_association_don_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_creation_association_don_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CreationAssociationDonPage);


/***/ }),

/***/ 28549:
/*!***************************************************!*\
  !*** ./src/app/services/medias/medias.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediasService": () => (/* binding */ MediasService)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);





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

  uploadImageAssoBesoinDon(token, credential) {
    var _this3 = this;

    //  creation don en reponse a un besoin d'une association
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
            formData.append('asso_don_id', credential.asso_don_id);
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

  uploadImageAssociation(token, credential) {
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
            formData.append('association_id', credential.association_id);
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

  uploadImageMouvement(token, credential) {
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
            formData.append('mouvement_id', credential.mouvement_id);
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

  uploadImageAnnonce(token, credential) {
    var _this6 = this;

    console.log(credential.files);
    return new Promise((resolve, reject) => {
      try {
        var i = 0;
        var max = credential.files.length;
        credential.files.forEach( /*#__PURE__*/function () {
          var _ref6 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (file) {
            const res = yield fetch(file.data);
            const blob = yield res.blob();
            const formData = new FormData();
            formData.append('file', blob, file.path);
            formData.append('annonce_id', credential.annonce_id);
            setTimeout(() => {
              _this6.uploadData(formData, token).toPromise().then(data => {
                i += 1;
                console.log(`image ${i} uploaded successfully`);
                i >= max ? resolve('success') : null;
              });
            }, 3000);
          });

          return function (_x7) {
            return _ref6.apply(this, arguments);
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

/***/ 34830:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType),
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;

(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */

  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */

  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));

var CameraDirection;

(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));

var CameraResultType;

(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

/***/ }),

/***/ 4241:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 34830);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 71327)).then(m => new m.CameraWeb())
});



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

/***/ 92193:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-association-don/creation-association-don.page.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = ".input {\n  border: 0.5px solid rgb(206, 204, 204);\n  border-radius: 10px;\n}\n\n.camera {\n  padding: 8px;\n  border: 1px dashed gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0aW9uLWFzc29jaWF0aW9uLWRvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUFFSiIsImZpbGUiOiJjcmVhdGlvbi1hc3NvY2lhdGlvbi1kb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0e1xuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDIwNiwgMjA0LCAyMDQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uY2FtZXJhe1xuICAgIHBhZGRpbmc6OHB4O1xuICAgIGJvcmRlcjoxcHggZGFzaGVkIGdyYXkgXG59Il19 */";

/***/ }),

/***/ 93655:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-association-don/creation-association-don.page.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-icon (click)=\"navBack()\" name=\"chevron-back-outline\" size=\"large\" color=\"danger\"></ion-icon>\n      <ion-title>creation-dons-Besoin</ion-title>\n    </ion-row>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-modal [isOpen]=\"iscategoriesModalOpen\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Categories</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"setCategoriesModalOpen(false)\">Close</ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content class=\"ion-padding\">\n        <ion-list class=\"ion-justify-content-between\">\n          <ion-item (click)=\"electromenagerSheet()\">\n            <ion-icon name=\"build-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Electromenager</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"modebeautySheet()\">\n            <ion-icon name=\"shirt-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Mode,beaute & accessoire</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"universbebeSheet()\">\n            <ion-icon name=\"logdarko-reddit\" slot=\"start\"></ion-icon>\n            <ion-text>Univers bebe</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"maison_ammeublementSheet()\">\n            <ion-icon name=\"bed-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Maison & ameublement</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"electroniqueSheet()\">\n            <ion-icon name=\"laptop-outline\" slot=\"start\"></ion-icon>\n            <ion-text>High-tech & electronique</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"culture_sport_loisir_Sheet()\">\n            <ion-icon name=\"library-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Culture,sports & loisirs</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"jardin_bricolage_Sheet()\">\n            <ion-icon name=\"leaf-outline\" slot=\"start\"></ion-icon>\n            <ion-text>jardin & bricolage</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item (click)=\"monde_animaux_Sheet()\">\n            <ion-icon name=\"paw-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Monde des animaux</ion-text>\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n  <ion-card *ngIf=\"Besoin!=null\" style=\"padding-bottom:0\" lines=\"none\" class=\"ion-padding-bottom\">\n    <ion-item style=\"width:100%;\" lines=\"none\"  [routerLink]=\"['/details-association',Besoin.association.id]\">\n      <ion-thumbnail slot=\"start\" >\n        <img style=\"border-radius:10px\" [src]=\"Besoin.association.media.length>0?storage+Besoin.association.media[0].filePath:'../../../../assets/images/user.png'\" />\n      </ion-thumbnail>\n      <ion-col style=\"text-align: left\">\n        <ion-row>\n         <ion-text style=\"font-weight: bold\">{{Besoin.association.name}}</ion-text>\n        </ion-row>\n        <ion-row style=\"margin-top:2%\">\n          <ion-text style=\"color:gray\"> {{Besoin.association.type}}</ion-text>\n        </ion-row>\n      </ion-col>\n    </ion-item>\n    <ion-row class=\"ion-padding-horizontal ion-margin-bottom\" *ngIf=\"Besoin.quantite_actuelle>Besoin.quantite\">\n      <ion-text color=\"success\"> <strong>Besoin resolus</strong></ion-text>\n    </ion-row>\n    <ion-row class=\"ion-padding-horizontal ion-margin-bottom\" *ngIf=\"Besoin.quantite_actuelle<Besoin.quantite\">\n      <ion-text color=\"danger\"> <strong>Besoin non resolus</strong></ion-text>\n    </ion-row>\n    <ion-row class=\"ion-padding-horizontal ion-margin-bottom ion-margin-top\">\n      <ion-text style=\"font-weight:bold\"><strong style=\"color:black\">Besoin : &ensp;</strong> {{Besoin.title|slice:0:30}}{{Besoin.title.length>30?'...':''}} </ion-text>\n    </ion-row>\n    <ion-row class=\"ion-padding-horizontal\" style=\"margin-bottom:5px\">\n    <ion-text><strong style=\"color:black\">Quantite : &ensp;</strong><strong style=\"color:#ec566a\">{{Besoin.quantite_actuelle}}</strong> &ensp; / &ensp; <strong>{{Besoin.quantite}}</strong> </ion-text>\n    </ion-row>\n   </ion-card>\n<ion-item>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\"></ion-icon>\n  <ion-text>Type d'action : </ion-text><ion-text style=\"font-weight: bold\">Don Association</ion-text>\n</ion-item>\n<!--  -->\n<ion-item lines=\"none\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedImages.length<1\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedImages.length>=1\"></ion-icon>\n  <ion-row><ion-text>Image(s): </ion-text></ion-row>\n</ion-item>\n<ion-item lines=\"none\">\n  <ion-thumbnail slot=\"start\" *ngFor=\"let image of selectedImages;let i = index\" style=\"position:relative\">\n    <ion-fab-button color=\"danger\" style=\"position: absolute; top: 0; right: 0;\" size=\"small\" (click)=\"removeOnImagesList(i)\">\n      <ion-icon name=\"trash-outline\"></ion-icon>\n    </ion-fab-button>\n    <img [src]=\"image.data\" />\n  </ion-thumbnail>\n  \n  <div class=\"camera\" (click)=\"getPicture()\" *ngIf=\"selectedImages.length<5\">\n    <ion-icon name=\"camera-outline\" size=\"large\" color=\"medium\" ></ion-icon>\n  </div>\n</ion-item>\n<!-- <input type=\"file\" (change)=\"onFileChange($event)\"> -->\n<!--  -->\n<ion-item lines=\"none\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedTitle==''\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedTitle!=''\"></ion-icon>\n  <ion-row><ion-text>Titre de l'annonce: </ion-text></ion-row>\n</ion-item>\n<ion-item class=\"input ion-margin-horizontal\">\n  <ion-row><ion-input [(ngModel)]=\"selectedTitle\" type=\"text\" placeholder=\"Ex : Table,chaise,cahier... \" maxlength=\"45\"></ion-input></ion-row>\n</ion-item>\n<ion-row style=\"width: 100%;padding:0;margin:0\">\n  <ion-col size=\"6\"></ion-col>\n  <ion-col size=\"6\" style=\"text-align: left;\"><ion-text style=\"color:gray\" >30 caracteres max</ion-text></ion-col>\n</ion-row>\n  \n<!--  -->\n<ion-item lines=\"none\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedDescription==''\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedDescription!=''\"></ion-icon>\n  <ion-row><ion-text>Description : </ion-text></ion-row>\n</ion-item>\n<ion-item class=\"input ion-margin-horizontal\">\n  <ion-textarea [(ngModel)]=\"selectedDescription\" placeholder=\"Ex : ordinateur noir , ecran 17 pouces ......En fournisant un maximum de details vous augmenter les chances d'aider \"\n   maxlength=\"200\" rows=\"4\"></ion-textarea>\n</ion-item>\n<ion-row style=\"width: 100%;padding:0;margin:0\">\n  <ion-col size=\"6\"></ion-col>\n  <ion-col size=\"6\" style=\"text-align: left;\"><ion-text style=\"color:gray\" >200 caracteres max</ion-text></ion-col>\n  </ion-row>\n\n<!--  -->\n<ion-item lines=\"none\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedQuantity<1\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedQuantity>0\"></ion-icon>\n  <ion-row><ion-text>Entrez la quantite necessaire : </ion-text></ion-row>\n</ion-item>\n<ion-item class=\"input ion-margin-horizontal\">\n  <ion-input [(ngModel)]=\"selectedQuantity\" type=\"number\" maxlength=\"45\"></ion-input>\n</ion-item>\n<!--  -->\n<ion-item (click)=\"openEtatSheet()\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedState==''\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedState!=''\"></ion-icon>\n  <ion-row><ion-text>{{selectedState!=''?selectedState:'Etat objet'}} </ion-text></ion-row>\n  <ion-icon color=\"danger\" name=\"{{selectedStateIcon!='' ?selectedStateIcon:'' }}\"></ion-icon>\n  <ion-icon name=\"chevron-forward-outline\"  color=\"medium\" slot=\"end\"></ion-icon>\n</ion-item>\n<!--  -->\n<ion-item (click)=\"setCategoriesModalOpen(true)\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedCategory==''\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedCategory!=''\"></ion-icon>\n  <ion-text style=\"margin-left:10px\">{{selectedCategory!=''?selectedCategory:'Choose a Category'}}</ion-text>\n  <ion-icon name=\"chevron-forward-outline\"  color=\"medium\" slot=\"end\"></ion-icon>\n</ion-item>\n\n<!--  -->\n<ion-item lines=\"none\" (click)=\"locationSheet()\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedLatitude==null || selectedLongitude==null\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"selectedLatitude!=null || selectedLongitude!=null\"></ion-icon>\n  <ion-icon name=\"location\" color=\"danger\"></ion-icon>\n  <ion-text style=\"margin-left:10px\">{{myAdress}}</ion-text>\n  <ion-icon name=\"chevron-forward-outline\"  color=\"medium\" slot=\"end\"></ion-icon>\n</ion-item>\n<ion-item-divider></ion-item-divider>\n\n<ion-card-subtitle style=\"color:grey\" class=\"ion-margin\">\nVotre adresse restera confidentielle et ne sera jamais affiche publiquement , elle nous permet d'afficher un point aleatoire dans un rayoun de 600 m dee vous \n</ion-card-subtitle>\n</ion-content>\n<ion-card style=\"width:100%;margin:0\">\n<ion-button expand=\"block\" color=\"danger\" (click)=\"createDonation()\" class=\"ion-margin\"[disabled]=\"!validationDonation\" >Create donation</ion-button>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_creation_creation-association-don_creation-association-don_module_ts.js.map