"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_modal-galerie-association_modal-galerie-association_module_ts"],{

/***/ 7646:
/*!**********************************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/modal-galerie-association-routing.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalGalerieAssociationPageRoutingModule": () => (/* binding */ ModalGalerieAssociationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _modal_galerie_association_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-galerie-association.page */ 7346);




const routes = [
    {
        path: '',
        component: _modal_galerie_association_page__WEBPACK_IMPORTED_MODULE_0__.ModalGalerieAssociationPage
    },
    {
        path: 'galery-type/:category/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modals_modal-galerie-association_galery-type_galery-type_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./galery-type/galery-type.module */ 2517)).then(m => m.GaleryTypePageModule)
    }
];
let ModalGalerieAssociationPageRoutingModule = class ModalGalerieAssociationPageRoutingModule {
};
ModalGalerieAssociationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalGalerieAssociationPageRoutingModule);



/***/ }),

/***/ 1945:
/*!**************************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/modal-galerie-association.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalGalerieAssociationPageModule": () => (/* binding */ ModalGalerieAssociationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modal_galerie_association_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-galerie-association-routing.module */ 7646);
/* harmony import */ var _modal_galerie_association_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-galerie-association.page */ 7346);







let ModalGalerieAssociationPageModule = class ModalGalerieAssociationPageModule {
};
ModalGalerieAssociationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modal_galerie_association_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalGalerieAssociationPageRoutingModule
        ],
        declarations: [_modal_galerie_association_page__WEBPACK_IMPORTED_MODULE_1__.ModalGalerieAssociationPage]
    })
], ModalGalerieAssociationPageModule);



/***/ }),

/***/ 7346:
/*!************************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/modal-galerie-association.page.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalGalerieAssociationPage": () => (/* binding */ ModalGalerieAssociationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modal_galerie_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-galerie-association.page.html?ngResource */ 6643);
/* harmony import */ var _modal_galerie_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-galerie-association.page.scss?ngResource */ 1435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/medias/medias.service */ 8549);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);









let ModalGalerieAssociationPage = class ModalGalerieAssociationPage {
    constructor(route, manageDataService, mediaService, navCtrl) {
        this.route = route;
        this.manageDataService = manageDataService;
        this.mediaService = mediaService;
        this.navCtrl = navCtrl;
        /*----------------------------------VARIABLES------------------------------___*/
        this.association_id = null;
        this.AssociationImages = null;
        this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.storage;
    }
    ngOnInit() {
        this.association_id = this.route.snapshot.params.id;
        this.manageDataService.getGalerieAssociation(this.association_id).toPromise().then((data) => {
            this.AssociationImages = data;
            console.log(data);
        });
    }
    /*----------------------------------FUNCTIONS---------------------------------*/
    navBack() {
        this.navCtrl.back();
    }
};
ModalGalerieAssociationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__.ManageDataService },
    { type: src_app_services_medias_medias_service__WEBPACK_IMPORTED_MODULE_3__.MediasService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
ModalGalerieAssociationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-modal-galerie-association',
        template: _modal_galerie_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modal_galerie_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalGalerieAssociationPage);



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

/***/ 1435:
/*!*************************************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/modal-galerie-association.page.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = ".image {\n  min-width: 5rem;\n  min-height: 5rem;\n}\n.image img {\n  max-width: 5rem;\n  min-width: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLWdhbGVyaWUtYXNzb2NpYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBRVIiLCJmaWxlIjoibW9kYWwtZ2FsZXJpZS1hc3NvY2lhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2V7XG4gICAgbWluLXdpZHRoOiA1cmVtOyAgICBcbiAgICBtaW4taGVpZ2h0OiA1cmVtO1xuICAgIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogNXJlbTsgICAgXG4gICAgICAgIG1pbi13aWR0aDogNXJlbTtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 6643:
/*!*************************************************************************************************!*\
  !*** ./src/app/modals/modal-galerie-association/modal-galerie-association.page.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n<ion-item lines=\"none\">\n  <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"primary\" (click)=\"navBack()\"></ion-icon>\n  <ion-title>Galerie</ion-title>\n</ion-item>\n\n<div *ngIf=\"AssociationImages!=null\"\n[routerLink]=\"['galery-type','association',association_id]\"\n class=\"ion-margin\" style=\"height:200px;opacity: 0.8; position:relative;background-repeat: no-repeat;\nbackground-position: center;border-radius:5px;background-size:cover;\nbackground-image: url({{storage+AssociationImages.Association[0].filePath}});\">\n <ion-text style=\"position:absolute;bottom:2%;left:2%;font-weight: bolder;font-size: 2em;opacity: 1;color:white\"  color=\"light\"> Association </ion-text>\n</div>\n<div *ngIf=\"AssociationImages!=null\" \n[routerLink]=\"['galery-type','mouvements',association_id]\"\nclass=\"ion-margin\" style=\"height:200px;opacity: 0.8; position:relative;background-repeat: no-repeat;\nbackground-position: center;border-radius:5px;background-size:cover;\nbackground-image: url({{AssociationImages.Mouvements[0].length>0 ? storage+AssociationImages.Mouvements[0][0].filePath:'assets/empty.png'}});\">\n  <ion-text style=\"position:absolute;bottom:2%;left:2%;font-weight: bolder;font-size: 2em;opacity: 1;\"  color=\"light\"> Mouvements </ion-text>\n </div>\n <div *ngIf=\"AssociationImages!=null\"\n [routerLink]=\"['galery-type','annonces',association_id]\"\n class=\"ion-margin\" style=\"height:200px;opacity: 0.8; position:relative;background-repeat: no-repeat;\n background-position: center;border-radius:5px;background-size:cover;\n background-image: url({{AssociationImages.Annonces[0].length>0 ? storage+AssociationImages.Annonces[0][0].filePath : 'assets/empty.png'}})\">\n  <ion-text style=\"position:absolute;bottom:2%;left:2%;font-weight: bolder;font-size: 2em;opacity: 1;\" color=\"dark\"> Annonces </ion-text>\n </div>\n<!-- <ion-row>\n<ion-title style=\"font-weight:bold\">Images Associations</ion-title>\n</ion-row>\n<ion-row *ngIf=\"AssociationImages!=null\">\n  <ion-col size=\"12\" style=\"display:flex\">\n    <ion-thumbnail class=\"image\" *ngFor=\"let image of AssociationImages.Association\" style=\"margin:1%;\">\n      <img [src]=\"storage+image.filePath\" />\n    </ion-thumbnail>\n  </ion-col>\n</ion-row> -->\n<!-- ------------------MOUVEMENTS -->\n<!-- <ion-row>\n  <ion-title style=\"font-weight:bold\">Images Mouvements</ion-title>\n  </ion-row>\n  <ion-row *ngIf=\"AssociationImages!=null\">\n    <ion-col size=\"12\" style=\"display:flex\">\n      <ion-thumbnail class=\"image\" *ngFor=\"let image of AssociationImages.Mouvements[0]\" style=\"margin:1%;\">\n        <img [src]=\"storage+image.filePath\" />\n      </ion-thumbnail>\n    </ion-col>\n  </ion-row> -->\n  <!-- -----------ANNONCES -->\n  <!-- <ion-row>\n    <ion-title style=\"font-weight:bold\">Images Annonces</ion-title>\n    </ion-row>\n    <ion-row *ngIf=\"AssociationImages!=null\">\n      <ion-col size=\"12\" style=\"display:flex\">\n        <ion-thumbnail class=\"image\" *ngFor=\"let image of AssociationImages.Annonces[0]\" style=\"margin:1%;\">\n          <img [src]=\"storage+image.filePath\" />\n        </ion-thumbnail>\n      </ion-col>\n    </ion-row> -->\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modals_modal-galerie-association_modal-galerie-association_module_ts.js.map