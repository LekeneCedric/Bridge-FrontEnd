"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_creation_creation-annonces_creation-annonces_module_ts"],{

/***/ 7958:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-annonces/creation-annonces-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationAnnoncesPageRoutingModule": () => (/* binding */ CreationAnnoncesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _creation_annonces_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-annonces.page */ 9121);




const routes = [
    {
        path: '',
        component: _creation_annonces_page__WEBPACK_IMPORTED_MODULE_0__.CreationAnnoncesPage
    }
];
let CreationAnnoncesPageRoutingModule = class CreationAnnoncesPageRoutingModule {
};
CreationAnnoncesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreationAnnoncesPageRoutingModule);



/***/ }),

/***/ 761:
/*!******************************************************************************!*\
  !*** ./src/app/pages/creation/creation-annonces/creation-annonces.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationAnnoncesPageModule": () => (/* binding */ CreationAnnoncesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _creation_annonces_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-annonces-routing.module */ 7958);
/* harmony import */ var _creation_annonces_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-annonces.page */ 9121);







let CreationAnnoncesPageModule = class CreationAnnoncesPageModule {
};
CreationAnnoncesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _creation_annonces_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreationAnnoncesPageRoutingModule
        ],
        declarations: [_creation_annonces_page__WEBPACK_IMPORTED_MODULE_1__.CreationAnnoncesPage]
    })
], CreationAnnoncesPageModule);



/***/ }),

/***/ 9121:
/*!****************************************************************************!*\
  !*** ./src/app/pages/creation/creation-annonces/creation-annonces.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationAnnoncesPage": () => (/* binding */ CreationAnnoncesPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _creation_annonces_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-annonces.page.html?ngResource */ 2141);
/* harmony import */ var _creation_annonces_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creation-annonces.page.scss?ngResource */ 3176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/medias/medias.service */ 8549);










let CreationAnnoncesPage = class CreationAnnoncesPage {
  constructor(route, manageDataService, navCtrl, loadingController, mediaService, router, toast) {
    this.route = route;
    this.manageDataService = manageDataService;
    this.navCtrl = navCtrl;
    this.loadingController = loadingController;
    this.mediaService = mediaService;
    this.router = router;
    this.toast = toast;
    /*-------------------------------------VARIABLES----------------------*/

    this.Association = null;
    this.title = null;
    this.intitule = null;
    this.nbvue = 0;
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
  /*------------------------------------FUNCTIONS----------------------*/


  get validation() {
    let res = false;

    if (this.selectedImages.length > 0 && this.title != null && this.intitule != null) {
      if (this.title != '' && this.intitule != '') {
        res = true;
      }
    } else {
      res = false;
    }

    return res;
  }

  createAssociation() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingController.create({
        spinner: 'bubbles',
        message: 'creation Mouvement....',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      yield loading.present();
      const data = {
        association_id: _this.Association.id,
        title: _this.title,
        intitule: _this.intitule,
        nbvue: 0
      };

      _this.manageDataService.addAnnonce(data).toPromise().then(data => {
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
      annonce_id: data.annonce.id,
      files: this.selectedImages
    };
    this.mediaService.uploadImageAnnonce(token, fd).then( /*#__PURE__*/function () {
      var _ref2 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        setTimeout( /*#__PURE__*/(0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          loading.dismiss();

          _this2.router.navigateByUrl('/menu/associations'); //on affiche un message de success


          const toast = _this2.toast.create({
            message: `annonce creer avec success`,
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

  navBack() {
    this.navCtrl.back();
  }

  removeOnImagesList(i) {
    this.selectedImages.splice(i, 1);
  }

  getPicture() {
    var _this3 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Uri,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Camera,
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

};

CreationAnnoncesPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}, {
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_4__.ManageDataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}, {
  type: src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_5__.MediasService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
}];

CreationAnnoncesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-creation-annonces',
  template: _creation_annonces_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_creation_annonces_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CreationAnnoncesPage);


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

/***/ 4830:
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
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4830);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 1327)).then(m => new m.CameraWeb())
});



/***/ }),

/***/ 3176:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-annonces/creation-annonces.page.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = ".input {\n  border: 0.5px solid rgb(206, 204, 204);\n  border-radius: 5px;\n}\n\n.camera {\n  padding: 8px;\n  border: 1px dashed gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0aW9uLWFubm9uY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQUVKIiwiZmlsZSI6ImNyZWF0aW9uLWFubm9uY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dHtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigyMDYsIDIwNCwgMjA0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY2FtZXJhe1xuICAgIHBhZGRpbmc6OHB4O1xuICAgIGJvcmRlcjoxcHggZGFzaGVkIGdyYXkgXG59Il19 */";

/***/ }),

/***/ 2141:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-annonces/creation-annonces.page.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n\n  <ion-toolbar>\n    <ion-icon slot=\"start\" name=\"chevron-back-outline\" size=\"large\" color=\"primary\" (click)=\"navBack()\"></ion-icon>\n    <ion-text slot=\"start\" style=\"margin-left:10px\" *ngIf=\"Association!=null\">Annonce <strong>{{Association.name | slice:0:17}}{{Association.name.length>17?'...':''}}</strong> </ion-text>\n  </ion-toolbar>\n  <ion-grid style=\"padding-left:16px;padding-right:16px;padding-bottom:16px;padding-top:0\">\n  <ion-col size=\"12\" style=\"margin:0;padding:0\">\n    <ion-row style=\"margin:0;padding:0\">\n      <ion-icon name=\"ellipse-outline\" size=\"large\" color=\"primary\" *ngIf=\"selectedImages.length<1\"></ion-icon>\n      <ion-icon name=\"checkmark-circle\" size=\"large\" color=\"primary\" *ngIf=\"selectedImages.length>0\"></ion-icon>\n      <ion-title style=\"font-weight:bold\">Images</ion-title>\n    </ion-row>\n    <ion-row style=\"margin-top:2%;padding:0\">\n      <ion-item lines=\"none\">\n        <ion-thumbnail slot=\"start\" *ngFor=\"let image of selectedImages;let i = index\" style=\"position:relative\">\n          <ion-fab-button color=\"danger\" style=\"position: absolute; top: 0; right: 0;\" size=\"small\" (click)=\"removeOnImagesList(i)\">\n            <ion-icon name=\"trash-outline\"></ion-icon>\n          </ion-fab-button>\n          <img [src]=\"image.data\" />\n        </ion-thumbnail>\n        \n        <div class=\"camera\" (click)=\"getPicture()\" *ngIf=\"selectedImages.length<5\">\n          <ion-icon name=\"camera-outline\" size=\"large\" color=\"medium\" ></ion-icon>\n        </div>\n      </ion-item>\n    </ion-row>\n  </ion-col>\n  <div size=\"12\" class=\"ion-margin-top\"></div>\n  <ion-col size=\"12\" style=\"margin-top:10px;padding:0\">\n    <ion-row style=\"margin:0;padding:0\">\n      <ion-icon name=\"ellipse-outline\" size=\"large\" color=\"primary\" *ngIf=\"title=='' || title==null\"></ion-icon>\n      <ion-icon name=\"checkmark-circle\" size=\"large\" color=\"primary\" *ngIf=\"title!=null && title!=''\"></ion-icon>\n      <ion-title style=\"font-weight:bold\">Titre</ion-title>\n    </ion-row>\n    <ion-row style=\"margin-top:2%;padding:0\">\n    <ion-input [(ngModel)]=\"title\" placeholder=\"ex:marche sportive pour recolte de fonds ...etc\" class=\"input\"></ion-input>\n    </ion-row>\n  </ion-col>\n  <div size=\"12\" class=\"ion-margin-top\"></div>\n  <ion-col size=\"12\" style=\"margin-top:10px;padding:0\">\n    <ion-row style=\"margin:0;padding:0\">\n      <ion-icon name=\"ellipse-outline\" size=\"large\" color=\"primary\" *ngIf=\"intitule=='' || intitule==null\"></ion-icon>\n      <ion-icon name=\"checkmark-circle\" size=\"large\" color=\"primary\" *ngIf=\"intitule!=null && intitule!=''\"></ion-icon>\n      <ion-title style=\"font-weight:bold\">Description</ion-title>\n    </ion-row>\n    <ion-row style=\"margin-top:2%;padding:0\">\n      <ion-textarea class=\"input\"  [(ngModel)]=\"intitule\" placeholder=\"Aide : Decrivez de maniere detaille l'evenement que vous voulez realiser , son objectif ...etc\"\n      maxlength=\"200\" rows=\"4\"></ion-textarea>\n    </ion-row>\n  </ion-col>\n</ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-row style=\"text-align:center;padding:2px\">\n    <ion-icon name=\"help-circle-outline\"></ion-icon>\n    <ion-text style=\"color:rgb(96, 95, 95)\">\n      ke a type specimen book. essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem\n    </ion-text>\n  </ion-row>\n  <ion-row style=\"width:100%\">\n  <ion-button expand=\"full\"style=\"width:100%\" (click)=\"createAssociation()\" [disabled]=\"!validation\">Enregistrez l'annonce</ion-button>\n  </ion-row>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_creation_creation-annonces_creation-annonces_module_ts.js.map