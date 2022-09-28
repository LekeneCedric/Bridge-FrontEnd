"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_creation_creation-mouvements_creation-mouvements_module_ts"],{

/***/ 50205:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-mouvements/creation-mouvements-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationMouvementsPageRoutingModule": () => (/* binding */ CreationMouvementsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _creation_mouvements_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-mouvements.page */ 31587);




const routes = [
    {
        path: '',
        component: _creation_mouvements_page__WEBPACK_IMPORTED_MODULE_0__.CreationMouvementsPage
    }
];
let CreationMouvementsPageRoutingModule = class CreationMouvementsPageRoutingModule {
};
CreationMouvementsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreationMouvementsPageRoutingModule);



/***/ }),

/***/ 34541:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/creation/creation-mouvements/creation-mouvements.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationMouvementsPageModule": () => (/* binding */ CreationMouvementsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _creation_mouvements_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-mouvements-routing.module */ 50205);
/* harmony import */ var _creation_mouvements_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-mouvements.page */ 31587);







let CreationMouvementsPageModule = class CreationMouvementsPageModule {
};
CreationMouvementsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _creation_mouvements_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreationMouvementsPageRoutingModule
        ],
        declarations: [_creation_mouvements_page__WEBPACK_IMPORTED_MODULE_1__.CreationMouvementsPage]
    })
], CreationMouvementsPageModule);



/***/ }),

/***/ 31587:
/*!********************************************************************************!*\
  !*** ./src/app/pages/creation/creation-mouvements/creation-mouvements.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationMouvementsPage": () => (/* binding */ CreationMouvementsPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _creation_mouvements_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-mouvements.page.html?ngResource */ 17904);
/* harmony import */ var _creation_mouvements_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creation-mouvements.page.scss?ngResource */ 20943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 58027);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/medias/medias.service */ 28549);










let CreationMouvementsPage = class CreationMouvementsPage {
  constructor(navCtrl, manageDataService, route, loadingController, mediaService, toast, router) {
    this.navCtrl = navCtrl;
    this.manageDataService = manageDataService;
    this.route = route;
    this.loadingController = loadingController;
    this.mediaService = mediaService;
    this.toast = toast;
    this.router = router;
    /*---------------------------------VARIABLES--------------------------*/

    this.Association = null;
    this.seletedCategory = null;
    this.selectedIntitule = null;
    this.DateDebut = null;
    this.DateFin = null;
    this.description = null;
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
    let id = this.route.snapshot.params['id_association'];
    this.manageDataService.getOneAssociation(id).toPromise().then(data => {
      console.log(data);
      this.Association = data;
    });
  }
  /*---------------------------------FUNCTIONS--------------------------*/


  get validation() {
    let res = false;

    if (this.selectedImages.length > 0 && this.selectedIntitule != null && this.description != null && this.seletedCategory != null && this.DateDebut != null && this.DateFin != null) {
      if (this.selectedIntitule != '' && this.description != '') {
        res = true;
      }
    } else {
      res = false;
    }

    return res;
  }

  createMouvement() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let dateDebut = new Date(_this.DateDebut);
      let datefin = new Date(_this.DateFin);
      const loading = yield _this.loadingController.create({
        spinner: 'bubbles',
        message: 'creation Mouvement....',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      yield loading.present();
      const data = {
        association_id: _this.Association.id,
        category: _this.seletedCategory,
        intitule: _this.selectedIntitule,
        date_rencontre: `${dateDebut.getFullYear()}-${dateDebut.getMonth() + 1}-${_this.DateDebut.toString().slice(8, 10)}`,
        heure_debut: `${dateDebut.getHours()}:${dateDebut.getMinutes()}`,
        heure_fin: `${datefin.getHours()}:${datefin.getMinutes()}`,
        latitude: 11,
        longitude: 7,
        description: _this.description
      };

      _this.manageDataService.addMouvement(data).toPromise().then(data => {
        console.log(data);

        _this.upload_image(data, loading);
      }).catch( /*#__PURE__*/function () {
        var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
          const toast = _this.toast.create({
            message: `${err.message}`,
            icon: 'information-circle',
            duration: 2000,
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
    var _this2 = this;

    //creation don 
    const token = localStorage.getItem('token');
    let fd = {
      mouvement_id: data.mouvement.id,
      files: this.selectedImages
    };
    this.mediaService.uploadImageMouvement(token, fd).then( /*#__PURE__*/function () {
      var _ref2 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        setTimeout( /*#__PURE__*/(0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          loading.dismiss();

          _this2.router.navigateByUrl('/menu/associations'); //on affiche un message de success


          const toast = _this2.toast.create({
            message: `Evenement creer avec success`,
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

        const toast = _this2.toast.create({
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
    var _this3 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto({
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.Uri,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Camera,
        quality: 100
      });

      if (image) {
        console.log(image);

        _this3.saveImage(image);
      }
    })();
  }

  saveImage(image) {
    var _this4 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const base64data = yield _this4.readAsBase64(image);
      console.log(base64data);
      const filename = new Date().getTime() + '.jpeg';
      const img = {
        path: filename,
        data: base64data
      };
      setTimeout(() => {
        _this4.selectedImages.unshift(img);
      }, 500);
    })();
  }

  readAsBase64(photo) {
    var _this5 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield fetch(photo.webPath);
      const blob = yield res.blob();
      return yield _this5.convertBlobToBase64(blob);
    })();
  }

  navBack() {
    this.navCtrl.back();
  }

  test() {
    console.log(new Date(this.DateDebut).getFullYear());
  }

};

CreationMouvementsPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__.ManageDataService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_5__.MediasService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}];

CreationMouvementsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-creation-mouvements',
  template: _creation_mouvements_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_creation_mouvements_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CreationMouvementsPage);


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

/***/ 20943:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-mouvements/creation-mouvements.page.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = ".input {\n  border: 0.5px solid rgb(206, 204, 204);\n  border-radius: 5px;\n}\n\n.camera {\n  padding: 8px;\n  border: 1px dashed gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0aW9uLW1vdXZlbWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FBRUoiLCJmaWxlIjoiY3JlYXRpb24tbW91dmVtZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXR7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMjA2LCAyMDQsIDIwNCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNhbWVyYXtcbiAgICBwYWRkaW5nOjhweDtcbiAgICBib3JkZXI6MXB4IGRhc2hlZCBncmF5IFxufSJdfQ== */";

/***/ }),

/***/ 17904:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-mouvements/creation-mouvements.page.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-toolbar>\n    <ion-icon slot=\"start\" name=\"chevron-back-outline\" size=\"large\" color=\"primary\" (click)=\"navBack()\"></ion-icon>\n    <ion-text slot=\"start\" style=\"margin-left:10px\" *ngIf=\"Association!=null\">Mouvement <strong>{{Association.name | slice:0:17}}{{Association.name.length>17?'...':''}}</strong> </ion-text>\n  </ion-toolbar>\n  <ion-grid style=\"padding-left:16px;padding-right:16px;padding-bottom:16px;padding-top:0\">\n\n    <ion-col size=\"12\" style=\"margin:0;padding:0\">\n      <ion-row style=\"margin:0;padding:0\">\n        <ion-icon name=\"ellipse-outline\" size=\"large\" color=\"primary\" *ngIf=\"selectedImages.length<1\"></ion-icon>\n        <ion-icon name=\"checkmark-circle\" size=\"large\" color=\"primary\" *ngIf=\"selectedImages.length>0\"></ion-icon>\n        <ion-title style=\"font-weight:bold\">Images</ion-title>\n      </ion-row>\n      <ion-row style=\"margin-top:2%;padding:0\">\n        <ion-item lines=\"none\">\n          <ion-thumbnail slot=\"start\" *ngFor=\"let image of selectedImages;let i = index\" style=\"position:relative\">\n            <ion-fab-button color=\"danger\" style=\"position: absolute; top: 0; right: 0;\" size=\"small\" (click)=\"removeOnImagesList(i)\">\n              <ion-icon name=\"trash-outline\"></ion-icon>\n            </ion-fab-button>\n            <img [src]=\"image.data\" />\n          </ion-thumbnail>\n          \n          <div class=\"camera\" (click)=\"getPicture()\" *ngIf=\"selectedImages.length<5\">\n            <ion-icon name=\"camera-outline\" size=\"large\" color=\"medium\" ></ion-icon>\n          </div>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n\n   <div style=\"margin-top:2%\"></div>\n\n    <ion-col size=\"12\" style=\"margin:0;padding:0\">\n      <ion-row style=\"margin:0;padding:0\">\n        <ion-icon name=\"ellipse-outline\" size=\"large\" color=\"primary\" *ngIf=\"selectedIntitule=='' || selectedIntitule==null\"></ion-icon>\n        <ion-icon name=\"checkmark-circle\" size=\"large\" color=\"primary\" *ngIf=\"selectedIntitule!=null && selectedIntitule!=''\"></ion-icon>\n        <ion-title style=\"font-weight:bold\">Intitule</ion-title>\n      </ion-row>\n      <ion-row style=\"margin-top:2%;padding:0\">\n      <ion-input [(ngModel)]=\"selectedIntitule\" placeholder=\"ex:marche sportive pour recolte de fonds ...etc\" class=\"input\"></ion-input>\n      </ion-row>\n    </ion-col>\n\n    <ion-col size=\"12\">\n      <ion-row style=\"margin:0;padding:0\">\n        <ion-icon name=\"ellipse-outline\" size=\"large\" color=\"primary\" *ngIf=\"description==null|| description==''\"></ion-icon>\n        <ion-icon name=\"checkmark-circle\" size=\"large\" color=\"primary\" *ngIf=\"description!=null && description!=''\"></ion-icon>\n        <ion-title style=\"font-weight:bold\">Description</ion-title>\n      </ion-row>\n      <ion-row style=\"margin:0;padding:0\">\n        <ion-textarea class=\"input\"  [(ngModel)]=\"description\" placeholder=\"Aide : Decrivez de maniere detaille l'evenement que vous voulez realiser , son objectif ...etc\"\n        maxlength=\"200\" rows=\"4\"></ion-textarea>\n      </ion-row>\n      <ion-row style=\"width:100%;text-align: right;color:gray;margin-top:2%\">\n        <ion-text style=\"width:100%\">200 caractere maximum</ion-text>\n      </ion-row>\n    </ion-col>\n\n    <ion-col size=\"12\">\n      <ion-row style=\"margin:0;padding:0\">\n        <ion-icon name=\"ellipse-outline\" size=\"large\" color=\"primary\" *ngIf=\"seletedCategory==null\"></ion-icon>\n        <ion-icon name=\"checkmark-circle\" size=\"large\" color=\"primary\" *ngIf=\"seletedCategory!=null\"></ion-icon>\n        <ion-title style=\"font-weight:bold\">Category</ion-title>\n      </ion-row>\n      <ion-row style=\"margin:0;padding:0\">\n      <ion-select  [(ngModel)]=\"seletedCategory\" interface=\"action-sheet\" placeholder=\"De quel type de mouvement s'agit t'il ? \" class=\"input\" style=\"width:100%;margin-top:2%\">\n        <ion-select-option value=\"Masculin\">Masculin</ion-select-option>\n        <ion-select-option value=\"Feminin\">Feminin</ion-select-option>\n      </ion-select>\n      </ion-row>\n    </ion-col>\n\n    <ion-col size=\"12\">\n      <ion-row style=\"margin:0;padding:0\">\n        <ion-icon name=\"ellipse-outline\" size=\"large\" color=\"primary\" *ngIf=\"DateDebut==null\"></ion-icon>\n        <ion-icon name=\"checkmark-circle\" size=\"large\" color=\"primary\"  *ngIf=\"DateDebut!=null\"></ion-icon>\n        <ion-title style=\"font-weight:bold\">Date/Heure Debut</ion-title>\n      </ion-row>\n      <ion-row style=\"margin:0;padding:0\">\n    <ion-datetime [(ngModel)]=\"DateDebut\" placeholder=\"Select Date\"></ion-datetime>\n      </ion-row>\n    </ion-col>\n\n    <ion-col size=\"12\">\n      <ion-row style=\"margin:0;padding:0\">\n        <ion-icon name=\"ellipse-outline\" size=\"large\" color=\"primary\"  *ngIf=\"DateFin==null\"></ion-icon>\n        <ion-icon name=\"checkmark-circle\" size=\"large\" color=\"primary\"  *ngIf=\"DateFin!=null\"></ion-icon>\n        <ion-title style=\"font-weight:bold\">Date/Heure Fin</ion-title>\n      </ion-row>\n      <ion-row style=\"margin:0;padding:0\">\n    <ion-datetime  [(ngModel)]=\"DateFin\"  placeholder=\"Select Date\"></ion-datetime>\n      </ion-row>\n    </ion-col>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-row style=\"width:100%\">\n  <ion-button expand=\"full\"style=\"width:100%\" (click)=\"createMouvement()\" [disabled]=\"!validation\">Enregistrez l'evenement</ion-button>\n  </ion-row>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_creation_creation-mouvements_creation-mouvements_module_ts.js.map