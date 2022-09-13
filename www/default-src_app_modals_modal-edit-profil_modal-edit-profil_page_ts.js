"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modals_modal-edit-profil_modal-edit-profil_page_ts"],{

/***/ 284:
/*!********************************************************************!*\
  !*** ./src/app/modals/modal-edit-profil/modal-edit-profil.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalEditProfilPage": () => (/* binding */ ModalEditProfilPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modal_edit_profil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-edit-profil.page.html?ngResource */ 1306);
/* harmony import */ var _modal_edit_profil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-edit-profil.page.scss?ngResource */ 7672);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/medias/medias.service */ 8549);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 2340);











let ModalEditProfilPage = class ModalEditProfilPage {
  constructor(http, manageDataService, toast, modalCtrl, platform, mediaService) {
    this.http = http;
    this.manageDataService = manageDataService;
    this.toast = toast;
    this.modalCtrl = modalCtrl;
    this.platform = platform;
    this.mediaService = mediaService;
    this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.storage;
    this.updateImage = null;

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
    console.log(this.user);
    this.userInfo = this.user;
    this.name = this.user.name;
    this.surname = this.user.surname;
    this.date_naissance = this.user.date_naissance;
    this.contact = this.user.contact;
  }

  test() {
    console.log(this.name, this.surname, this.date_naissance, this.code, this.contact);
  }

  getPicture() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Uri,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Camera,
        quality: 100
      });

      if (image) {
        _this.saveImage(image);
      }
    })();
  }

  saveImage(image) {
    var _this2 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const base64data = yield _this2.readAsBase64(image);
      const filename = new Date().getTime() + '.jpeg';
      const img = {
        path: filename,
        data: base64data
      };
      setTimeout(() => {
        _this2.updateImage = img;
      }), 500;
    })();
  }

  readAsBase64(photo) {
    var _this3 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield fetch(photo.webPath);
      const blob = yield res.blob();
      return yield _this3.convertBlobToBase64(blob);
    })();
  }

  updateProfil() {
    var _this4 = this;

    const data = {
      name: this.name,
      surname: this.surname,
      date_naissance: this.date_naissance,
      contact: this.contact.toString()
    };
    this.manageDataService.updateProfil(this.user.id, data).toPromise().then( /*#__PURE__*/function () {
      var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        if (_this4.updateImage != null) {
          const token = localStorage.getItem('token');
          let fd = {
            donateur_id: _this4.user.id,
            files: _this4.updateImage
          };

          _this4.mediaService.uploadImageProfil(token, fd).then( /*#__PURE__*/function () {
            var _ref2 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
              //on affiche un message de success
              setTimeout( /*#__PURE__*/(0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                const toast = _this4.toast.create({
                  message: `profil modifie avec success`,
                  icon: 'alert',
                  duration: 1000,
                  color: "warning"
                });

                (yield toast).present();

                _this4.confirm();
              }), 1000);
            });

            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
        } else {
          const toast = _this4.toast.create({
            message: `profil modifie avec success`,
            icon: 'alert',
            duration: 1000,
            color: "warning"
          });

          (yield toast).present();

          _this4.confirm();
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).catch(er => {});
  }

  confirm() {
    return this.modalCtrl.dismiss(null, 'confirm');
  }

};

ModalEditProfilPage.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}, {
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_4__.ManageDataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
}, {
  type: src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_5__.MediasService
}];

ModalEditProfilPage.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }]
};
ModalEditProfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-modal-edit-profil',
  template: _modal_edit_profil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_modal_edit_profil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ModalEditProfilPage);


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

  uploadImageDon(token, credential) {
    var _this = this;

    console.log(credential.files);
    return new Promise((resolve, reject) => {
      try {
        credential.files.forEach( /*#__PURE__*/function () {
          var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (file) {
            const res = yield fetch(file.data);
            const blob = yield res.blob();
            const formData = new FormData();
            formData.append('file', blob, file.path);
            formData.append('don_id', credential.don_id);
            setTimeout(() => {
              _this.uploadData(formData, token);
            }, 150);
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
        resolve('success');
      } catch (err) {
        reject(err);
      }
    });
  }

  uploadImageProfil(token, credential) {
    var _this2 = this;

    console.log(credential.files);
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        const res = yield fetch(credential.files.data);
        const blob = yield res.blob();
        const formData = new FormData();
        console.log('this is credential');
        console.log(credential.files.path);
        console.log(credential.donateur_id);
        formData.append('file', blob, credential.files.path);
        formData.append('donateur_id', credential.donateur_id);

        _this2.uploadData(formData, token);

        resolve('success');
      });

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

  uploadData(formData, token) {
    var _this3 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiURL + '/medias';
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });

      _this3.http.post(api, formData).pipe().subscribe(data => {
        console.log(data);
      });
    })();
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

/***/ 7672:
/*!*********************************************************************************!*\
  !*** ./src/app/modals/modal-edit-profil/modal-edit-profil.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1lZGl0LXByb2ZpbC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1306:
/*!*********************************************************************************!*\
  !*** ./src/app/modals/modal-edit-profil/modal-edit-profil.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n<ion-grid>\n  <ion-list>\n    <div style=\"width:100%;text-align: center;\">\n      <img (click)=\"getPicture()\" style=\"border-radius:50%;width: 150px;height:150px\" src=\"{{updateImage!=null?updateImage.data:user.media.length>0 ? storage+user.media[0].filePath:'assets/images/user.png'}}\" />\n    </div>\n    <ion-item class=\"input ion-margin-vertical\">\n      <ion-label style=\"font-weight:bold\">Nom : </ion-label>\n      <ion-input type=\"email\" [value]=\"user.name\" [(ngModel)]=\"name\"  maxlength=\"45\"></ion-input>\n    </ion-item>\n    <ion-item class=\"input ion-margin-vertical\">\n      <ion-label style=\"font-weight:bold\">Prenom : </ion-label>\n      <ion-input type=\"email\" [value]=\"user.surname\" [(ngModel)]=\"surname\" maxlength=\"45\"></ion-input>\n    </ion-item>\n    <ion-item class=\"input ion-margin-vertical\">\n      <ion-label style=\"font-weight:bold\">Date naissance : </ion-label>\n      <ion-input type=\"email\" [value]=\"user.date_naissance\"[(ngModel)]=\"date_naissance\"  maxlength=\"45\"></ion-input>\n    </ion-item>\n    <ion-item class=\"input ion-margin-vertical\">\n      <ion-label style=\"font-weight:bold\">Contact : </ion-label>\n      <ion-input placeholder=\"Votre contact\" [(ngModel)]=\"contact\" [value]=\"user.contact\"></ion-input>\n    </ion-item>\n    <ion-button class=\"ion-margin-top\" expand=\"block\" (click)=\"updateProfil()\" *ngIf=\"user.name!=name || user.surname!=surname || user.date_naissance!= date_naissance || user.contact != contact || updateImage!=null\">\n      <ion-text style=\"font-weight:bold;color:white\">Modifier Profil</ion-text>\n    </ion-button>\n  </ion-list>\n</ion-grid>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_modal-edit-profil_modal-edit-profil_page_ts.js.map