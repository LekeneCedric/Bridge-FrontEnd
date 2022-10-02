"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_creation_creation-association_creation-association_module_ts"],{

/***/ 64755:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-association/creation-association-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationAssociationPageRoutingModule": () => (/* binding */ CreationAssociationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _creation_association_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-association.page */ 32442);




const routes = [
    {
        path: '',
        component: _creation_association_page__WEBPACK_IMPORTED_MODULE_0__.CreationAssociationPage
    }
];
let CreationAssociationPageRoutingModule = class CreationAssociationPageRoutingModule {
};
CreationAssociationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreationAssociationPageRoutingModule);



/***/ }),

/***/ 14643:
/*!************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-association/creation-association.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationAssociationPageModule": () => (/* binding */ CreationAssociationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _creation_association_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-association-routing.module */ 64755);
/* harmony import */ var _creation_association_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-association.page */ 32442);
/* harmony import */ var _awesome_cordova_plugins_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/image-picker/ngx */ 92153);








let CreationAssociationPageModule = class CreationAssociationPageModule {
};
CreationAssociationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _creation_association_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreationAssociationPageRoutingModule
        ],
        declarations: [_creation_association_page__WEBPACK_IMPORTED_MODULE_1__.CreationAssociationPage],
        providers: [_awesome_cordova_plugins_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__.ImagePicker]
    })
], CreationAssociationPageModule);



/***/ }),

/***/ 32442:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/creation/creation-association/creation-association.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationAssociationPage": () => (/* binding */ CreationAssociationPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _creation_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-association.page.html?ngResource */ 16841);
/* harmony import */ var _creation_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creation-association.page.scss?ngResource */ 82905);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/native-geocoder/ngx */ 79683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_creation_creation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/creation/creation.service */ 79444);
/* harmony import */ var src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/medias/medias.service */ 28549);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var _awesome_cordova_plugins_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/image-picker/ngx */ 92153);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 58027);
















let CreationAssociationPage = class CreationAssociationPage {
  constructor(route, router, http, actionSheetController, toast, fb, nativeGeocoder, createService, mediaService, loadingController, imagePicker, manageDataService) {
    this.route = route;
    this.router = router;
    this.http = http;
    this.actionSheetController = actionSheetController;
    this.toast = toast;
    this.fb = fb;
    this.nativeGeocoder = nativeGeocoder;
    this.createService = createService;
    this.mediaService = mediaService;
    this.loadingController = loadingController;
    this.imagePicker = imagePicker;
    this.manageDataService = manageDataService;
    /*--------------------------_VARIABLES------------------------ */

    this.options = {
      useLocale: true,
      maxResults: 5
    };
    this.GeocoderOption = {
      useLocale: true,
      maxResults: 5
    };
    this.typesAssociation = ['Association déclarée', 'Association agréée', 'Association reconnue d\’utilité publique', 'Association culturelle', 'Association etrangere'];
    this.categoriesAssociation = ['culture/Arts', 'Sports', 'Action sociale', 'Loisirs', 'Humanitaire', 'sante', 'Education', 'Environnement', 'Autres'];
    this.pays = [];
    this.pays_temp = [];
    this.ville = [];
    this.ville_temp = [];
    this.typeAssociation = '';
    this.categoryAssociation = '';
    this.associationName = ''; //name

    this.associationCreatorName = ''; //nom_responsable

    this.contactAssociation = ''; //contact

    this.codeContactAssociation = ''; //codeContact

    this.paysAssociation = ''; //pays

    this.villeAssociation = ''; //ville

    this.adresseAssociation = ''; //adresse

    this.numeroContribuable = ''; //numeroContribuable

    this.longitudeAssociation = null; //longitude

    this.latitudeAssociation = null; //latitude

    this.password_input_type = 'password';
    this.password_confirm_input_type = 'password';
    this.selectedImages = [];

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
    this.credential = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(7)]],
      type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
      category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
      contact: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("^((\\+91-?)|0)?[0-9]{9}$")]],
      adresse: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
      password_confirmation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
      nom_responsable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(7)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(50)]]
    });
    this.http.get('assets/country_dial_info.json').toPromise().then(res => {
      this.pays = res;
      this.pays_temp = this.pays;
      console.log(this.pays);
    }).finally(() => {
      this.http.get('assets/country_city.json').toPromise().then(res => {
        this.ville = res;
        console.log(this.ville);
      });
    });
    this.geolocation();
  }

  geolocation() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__.Geolocation.watchPosition({
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 1000
      }, () => {
        console.log('watchPosition updated');
      });
      _this.myCoordinate = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__.Geolocation.getCurrentPosition();
    })();
  }

  navBack() {
    this.router.back();
  }
  /*--------------------------FUCNTIONS--------------------------*/


  createAssociation() {
    var _this2 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingController.create({
        spinner: 'bubbles',
        message: 'creation dons....',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      yield loading.present();
      const data = {
        name: _this2.name.value,
        type: _this2.type.value,
        category: _this2.category.value,
        pays: _this2.paysAssociation,
        ville: _this2.villeAssociation,
        contact: _this2.codeContactAssociation + _this2.contact.value,
        adresse: _this2.adresseAssociation,
        password: _this2.password.value,
        password_confirmation: _this2.password_confirmation.value,
        nom_responsable: _this2.nom_responsable.value,
        longitude: _this2.longitudeAssociation,
        latitude: _this2.latitudeAssociation,
        description: _this2.description.value
      };

      _this2.createService.createAssociation(data, localStorage.getItem('token')).toPromise().then(data => {
        console.log(data);
        let id = JSON.parse(localStorage.getItem('mydata')).id;

        _this2.manageDataService.becameAssociationMember(id, data.Association.id).toPromise().then(dat => {
          console.log(dat);

          _this2.manageDataService.addAssociationMember(id, data.Association.id).toPromise().then(data => {
            console.log(data);
          });
        });

        _this2.upload_image(data, loading);
      }).catch( /*#__PURE__*/function () {
        var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
          loading.dismiss(); //on affiche un message de success

          const toast = _this2.toast.create({
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
    var _this3 = this;

    //creation don 
    const token = localStorage.getItem('token');
    let fd = {
      association_id: data.Association.id,
      files: this.selectedImages
    };
    this.mediaService.uploadImageAssociation(token, fd).then( /*#__PURE__*/function () {
      var _ref2 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        setTimeout( /*#__PURE__*/(0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          loading.dismiss();

          _this3.navBack(); //on affiche un message de success


          const toast = _this3.toast.create({
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

        const toast = _this3.toast.create({
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

  removeOnImagesList(i) {
    this.selectedImages.splice(i, 1);
  }

  getPicture() {
    var _this4 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Uri,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Camera,
        quality: 100
      });

      if (image) {
        console.log(image);

        _this4.saveImage(image);
      }
    })();
  }

  saveImage(image) {
    var _this5 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const base64data = yield _this5.readAsBase64(image);
      console.log(base64data);
      const filename = new Date().getTime() + '.jpeg';
      const img = {
        path: filename,
        data: base64data
      };
      setTimeout(() => {
        _this5.selectedImages.unshift(img);
      }, 500);
    })();
  }

  readAsBase64(photo) {
    var _this6 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield fetch(photo.webPath);
      const blob = yield res.blob();
      return yield _this6.convertBlobToBase64(blob);
    })();
  }

  get name() {
    return this.credential.get('name');
  }

  get type() {
    return this.credential.get('type');
  }

  get category() {
    return this.credential.get('category');
  }

  get contact() {
    return this.credential.get('contact');
  }

  get adresse() {
    return this.credential.get('adresse');
  }

  get nom_responsable() {
    return this.credential.get('nom_responsable');
  }

  get password() {
    return this.credential.get('password');
  }

  get password_confirmation() {
    return this.credential.get('password_confirmation');
  }

  get description() {
    return this.credential.get('description');
  }

  test() {
    const data = {
      name: this.name.value,
      type: this.type.value,
      category: this.category.value,
      pays: this.paysAssociation,
      ville: this.villeAssociation,
      contact: this.codeContactAssociation + this.contact.value,
      adresse: this.adresseAssociation,
      password: this.password.value,
      passwordConfirmation: this.password_confirmation.value,
      nom_responsable: this.nom_responsable.value,
      longitude: this.longitudeAssociation,
      latitude: this.latitudeAssociation
    };
    console.log(data);
  }

  passwordMatching() {
    const password = this.password.value;
    const passwordConf = this.password_confirmation.value;
    return  true ? password == passwordConf : 0;
  }

  changePassInputType() {
    this.password_input_type == 'password' ? this.password_input_type = 'text' : this.password_input_type = "password";
  }

  changePassConfirmInputType() {
    this.password_confirm_input_type == 'password' ? this.password_confirm_input_type = 'text' : this.password_confirm_input_type = "password";
  }

  locationSheet() {
    var _this7 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this7.actionSheetController.create({
        buttons: [{
          text: 'Ma position',
          handler: () => {
            _this7.longitudeAssociation = _this7.myCoordinate.coords.longitude, _this7.latitudeAssociation = _this7.myCoordinate.coords.latitude, _this7.nativeGeocoder.reverseGeocode(_this7.myCoordinate.coords.latitude, _this7.myCoordinate.coords.longitude, _this7.options).then( /*#__PURE__*/function () {
              var _ref5 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
                _this7.adresseAssociation = JSON.stringify(result[0].countryName) + '' + JSON.stringify(result[0].administrativeArea) + '' + JSON.stringify(result[0].subAdministrativeArea) + '' + JSON.stringify(result[0].locality);

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
          }
        }, {
          text: 'open Map',
          handler: () => {
            _this7.longitudeAssociation = null;
            _this7.latitudeAssociation = null;
          }
        }]
      });
      yield actionsheet.present();
    })();
  }

  filterPays(event) {
    this.pays = this.pays_temp;
    let keyword = event.target.value;

    if (!keyword) {
      return false;
    }

    this.pays = this.pays.filter(value => {
      return value.name === keyword;
    });
    this.codeContactAssociation = this.pays[0].dial_code;
    this.filterVille(keyword);
  }

  filterVille(country) {
    this.ville_temp = this.ville[`${country}`];
    console.log(this.ville_temp);
  }

};

CreationAssociationPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
}, {
  type: _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeGeocoder
}, {
  type: src_app_services_creation_creation_service__WEBPACK_IMPORTED_MODULE_5__.CreationService
}, {
  type: src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_6__.MediasService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
}, {
  type: _awesome_cordova_plugins_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__.ImagePicker
}, {
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_9__.ManageDataService
}];

CreationAssociationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: 'app-creation-association',
  template: _creation_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_creation_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CreationAssociationPage);


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

/***/ 92153:
/*!**************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/image-picker/__ivy_ngcc__/ngx/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagePicker": () => (/* binding */ ImagePicker),
/* harmony export */   "OutputType": () => (/* binding */ OutputType)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 84624);




var OutputType;

(function (OutputType) {
  OutputType[OutputType["FILE_URL"] = 0] = "FILE_URL";
  OutputType[OutputType["DATA_URL"] = 1] = "DATA_URL";
})(OutputType || (OutputType = {}));

var ImagePicker =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ImagePicker, _super);

  function ImagePicker() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ImagePicker.prototype.getPictures = function (options) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getPictures", {
      "callbackOrder": "reverse"
    }, arguments);
  };

  ImagePicker.prototype.hasReadPermission = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hasReadPermission", {
      "platforms": ["Android"]
    }, arguments);
  };

  ImagePicker.prototype.requestReadPermission = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "requestReadPermission", {
      "platforms": ["Android"]
    }, arguments);
  };

  ImagePicker.pluginName = "ImagePicker";
  ImagePicker.plugin = "cordova-plugin-telerik-imagepicker";
  ImagePicker.pluginRef = "window.imagePicker";
  ImagePicker.repo = "https://github.com/Telerik-Verified-Plugins/ImagePicker";
  ImagePicker.install = "ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION=\"your usage message\"";
  ImagePicker.installVariables = ["PHOTO_LIBRARY_USAGE_DESCRIPTION"];
  ImagePicker.platforms = ["Android", "iOS"];

  ImagePicker.ɵfac = /*@__PURE__*/function () {
    var ɵImagePicker_BaseFactory;
    return function ImagePicker_Factory(t) {
      return (ɵImagePicker_BaseFactory || (ɵImagePicker_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ImagePicker)))(t || ImagePicker);
    };
  }();

  ImagePicker.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ImagePicker,
    factory: function (t) {
      return ImagePicker.ɵfac(t);
    }
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ImagePicker, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null);
  })();

  return ImagePicker;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);



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

/***/ 82905:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-association/creation-association.page.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = ".input {\n  border: 0.5px solid rgb(206, 204, 204);\n  border-radius: 10px;\n}\n\n.camera {\n  padding: 8px;\n  border: 1px dashed gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0aW9uLWFzc29jaWF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQUNKIiwiZmlsZSI6ImNyZWF0aW9uLWFzc29jaWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dHtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigyMDYsIDIwNCwgMjA0KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY2FtZXJhe1xuICAgIHBhZGRpbmc6OHB4O1xuICAgIGJvcmRlcjoxcHggZGFzaGVkIGdyYXkgXG59Il19 */";

/***/ }),

/***/ 16841:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-association/creation-association.page.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"primary\" slot=\"start\" (click)=\"navBack()\"></ion-icon>\n    <ion-title>creation-association</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item>\n    <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"primary\" size=\"large\"></ion-icon>\n    <ion-text>Creation : </ion-text><ion-text style=\"font-weight: bold\">Association</ion-text>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedImages.length<1\"></ion-icon>\n    <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"primary\" size=\"large\" *ngIf=\"selectedImages.length>=1\"></ion-icon>\n    <ion-row><ion-text>Image(s): </ion-text></ion-row>\n  </ion-item>\n  <ion-row style=\"width:100%\" class=\"ion-margin-horizontal\"> \n    <ion-text color=\"medium\">la premiere image constituera celle du profil de l'association et les autres ferons partis de la gallerie de votre association</ion-text>\n  </ion-row>\n  \n  <ion-item lines=\"none\">\n    <ion-thumbnail slot=\"start\" *ngFor=\"let image of selectedImages;let i = index\" style=\"position:relative\">\n      <ion-fab-button color=\"primary\" style=\"position: absolute; top: 0; right: 0;\" size=\"small\" (click)=\"removeOnImagesList(i)\">\n        <ion-icon name=\"trash-outline\"></ion-icon>\n      </ion-fab-button>\n      <img [src]=\"image.data\" />\n    </ion-thumbnail>\n    \n    <div class=\"camera\" (click)=\"getPicture()\" *ngIf=\"selectedImages.length<5\">\n      <ion-icon name=\"camera-outline\" size=\"large\" color=\"medium\" ></ion-icon>\n    </div>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <!-- <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"selectedImages.length<1\"></ion-icon>\n    <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"primary\" size=\"large\" *ngIf=\"selectedImages.length>=1\"></ion-icon> -->\n    <ion-row><ion-text>Joindre document(s) association: </ion-text></ion-row>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <!-- <ion-thumbnail slot=\"start\" *ngFor=\"let image of selectedImages;let i = index\" style=\"position:relative\">\n      <ion-fab-button color=\"primary\" style=\"position: absolute; top: 0; right: 0;\" size=\"small\" (click)=\"removeOnImagesList(i)\">\n        <ion-icon name=\"trash-outline\"></ion-icon>\n      </ion-fab-button>\n      <img [src]=\"image.data\" />\n    </ion-thumbnail> -->\n    <div class=\"camera\" >\n      <ion-icon name=\"document-attach-outline\" size=\"large\" color=\"medium\" ></ion-icon>\n    </div>\n  </ion-item>\n  <!--  -->\n  <ion-row *ngIf=\"pays!=null\">\n    <ion-col size=\"12\">\n      <ion-item class=\"input ion-form-group\">\n        <ion-select interface=\"action-sheet\" placeholder=\"Selectionnez votre pays\" (ionChange)=\"filterPays($event)\" [(ngModel)]=\"paysAssociation\">\n          <ion-select-option [value]=\"country.name\" *ngFor=\"let country of pays_temp\" > {{country.flag}}{{country.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <!-- ------------------- -->\n  \n  <ion-row *ngIf=\"pays!=null\">\n    <ion-col size=\"12\">\n      <ion-item class=\"input\">\n        <ion-select interface=\"action-sheet\" placeholder=\"Selectionnez votre ville\" [(ngModel)]=\"villeAssociation\">\n          <ion-select-option *ngFor=\"let city of ville_temp\" [value]=\"city\">{{city}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <!-- ---------------------- -->\n  \n  <form [formGroup]=\"credential\">\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item class=\"input\">\n        <ion-input formControlName=\"name\" type=\"text\"  placeholder=\"Nom de l'association\" maxlength=\"45\"></ion-input>\n        <ion-note slot=\"error\" *ngIf=\"(name.dirty||name.touched)&& name.errors\">min 7 characteres</ion-note>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n \n  <!-- ------------------- -->\n <ion-row>\n  <ion-col size=\"12\">\n    <ion-item class=\"input\">\n      <ion-input formControlName=\"nom_responsable\" type=\"text\" placeholder=\"Nom responsable association\" maxlength=\"45\"></ion-input>\n      <ion-note slot=\"error\" *ngIf=\"(nom_responsable.dirty||nom_responsable.touched)&& nom_responsable.errors\">min 7 characteres</ion-note>\n    </ion-item>\n  </ion-col>\n </ion-row>\n \n  <!-- ------------ -->\n  \n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item class=\"input\">\n        <ion-select interface=\"action-sheet\" placeholder=\"Selectionnez le type de l'association\" formControlName=\"type\">\n          <ion-select-option *ngFor=\"let type of typesAssociation\" [value]=\"type\">{{type}}</ion-select-option>\n        </ion-select>\n        <ion-note slot=\"error\" *ngIf=\"(type.dirty||type.touched)&& type.errors\">selectionner le type de votre association</ion-note>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <!-- ------------------------ -->\n  \n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item class=\"input\">\n        <ion-select interface=\"action-sheet\" placeholder=\"Secteur d'activite\" formControlName=\"category\">\n          <ion-select-option *ngFor=\"let categorie of categoriesAssociation\" [value]=\"categorie\">{{categorie}}</ion-select-option>\n          <ion-note slot=\"error\" *ngIf=\"(category.dirty||category.touched)&& category.errors\">selectionnez une categorie </ion-note>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <!-- ------------------------ -->\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item class=\"input\">\n        <ion-textarea formControlName=\"description\"  placeholder=\"Aide : Donnez une description complete de votre association , son objectifs afin de pouvoir convaincre les potentiels donateurs ou membres a adherer a votre projet \"\n           maxlength=\"300\" rows=\"4\"></ion-textarea>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item class=\"input\">\n        <ion-text style=\"font-weight:bold\" slot=\"start\">\n          {{codeContactAssociation}}\n        </ion-text>\n        <ion-input placeholder=\"Votre contact\" type=\"number\" formControlName=\"contact\"></ion-input>\n        <ion-note slot=\"error\" *ngIf=\"(contact.dirty||contact.touched)&& contact.errors\">contact invalide</ion-note>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n<!-- ---------------------- -->\n\n<ion-row>\n  <ion-col size=\"12\">\n    <ion-item class=\"input\">\n      <ion-input [type]=\"password_confirm_input_type\" placeholder=\"Code Secret\" formControlName=\"password\"></ion-input>\n      <ion-icon name=\"eye-off-outline\" *ngIf=\"password_confirm_input_type=='password'\" (click)=\"changePassConfirmInputType()\"></ion-icon>\n    <ion-icon name=\"eye-outline\" *ngIf=\"password_confirm_input_type=='text'\" (click)=\"changePassConfirmInputType()\"></ion-icon>\n      <!-- <ion-note slot=\"error\" *ngIf=\"(confirmPassword.dirty||confirmPassword.touched)&& confirmPassword.errors\">invalid confirmPassword</ion-note> -->\n    </ion-item>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col size=\"12\">\n    <ion-item class=\"input\">\n      <ion-input [type]=\"password_confirm_input_type\" placeholder=\"Confirmez Code secret\" formControlName=\"password_confirmation\"></ion-input>\n      <ion-icon name=\"eye-off-outline\" *ngIf=\"password_confirm_input_type=='password'\" (click)=\"changePassConfirmInputType()\"></ion-icon>\n    <ion-icon name=\"eye-outline\" *ngIf=\"password_confirm_input_type=='text'\" (click)=\"changePassConfirmInputType()\"></ion-icon>\n      <!-- <ion-note slot=\"error\" *ngIf=\"(confirmPassword.dirty||confirmPassword.touched)&& confirmPassword.errors\">invalid confirmPassword</ion-note> -->\n    </ion-item>\n  </ion-col>\n</ion-row>\n<!-- ------------ -->\n<ion-item lines=\"none\" (click)=\"locationSheet()\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"latitudeAssociation==null || longitudeAssociation==null\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"primary\" size=\"large\" *ngIf=\"latitudeAssociation!=null || longitudeAssociation!=null\"></ion-icon>\n  <ion-icon name=\"location\" color=\"primary\"></ion-icon>\n  <ion-text style=\"margin-left:10px\">{{adresseAssociation}}</ion-text>\n  <ion-icon name=\"chevron-forward-outline\"  color=\"medium\" slot=\"end\"></ion-icon>\n</ion-item>\n<!-- ------------ -->\n</form>\n</ion-content>\n<ion-footer>\n  <ion-card-subtitle style=\"color:grey\" class=\"ion-margin\">\n    Une fois le processus de creation termine , l'association ne sera valide qu'apres un controle des documents faits par les administrateurs de la plateforme.Ce processud de verification peux prendre 1 semaine apres quoi votre association sera disponible suir la plateforme\n    </ion-card-subtitle>\n    <ion-card style=\"width:100%;margin:0\">\n    <ion-button expand=\"block\" color=\"primary\" (click)=\"createAssociation()\"  class=\"ion-margin\" >Creer Association </ion-button>\n    </ion-card>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_creation_creation-association_creation-association_module_ts.js.map