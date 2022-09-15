"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_creation_creation-association_creation-association_module_ts"],{

/***/ 4755:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-association/creation-association-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationAssociationPageRoutingModule": () => (/* binding */ CreationAssociationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _creation_association_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-association.page */ 2442);




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

/***/ 4643:
/*!************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-association/creation-association.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationAssociationPageModule": () => (/* binding */ CreationAssociationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _creation_association_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-association-routing.module */ 4755);
/* harmony import */ var _creation_association_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-association.page */ 2442);







let CreationAssociationPageModule = class CreationAssociationPageModule {
};
CreationAssociationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _creation_association_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreationAssociationPageRoutingModule
        ],
        declarations: [_creation_association_page__WEBPACK_IMPORTED_MODULE_1__.CreationAssociationPage]
    })
], CreationAssociationPageModule);



/***/ }),

/***/ 2442:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/creation/creation-association/creation-association.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreationAssociationPage": () => (/* binding */ CreationAssociationPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _creation_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-association.page.html?ngResource */ 6841);
/* harmony import */ var _creation_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creation-association.page.scss?ngResource */ 2905);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 9036);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);









let CreationAssociationPage = class CreationAssociationPage {
  constructor(route, router, http, actionSheetController, nativGeocoder, toast) {
    this.route = route;
    this.router = router;
    this.http = http;
    this.actionSheetController = actionSheetController;
    this.nativGeocoder = nativGeocoder;
    this.toast = toast;
    this.GeocoderOption = {
      useLocale: true,
      maxResults: 5
    };
    this.pays = [];
    this.pays_temp = [];
    this.ville = [];
    this.ville_temp = [];
    this.associationName = '';
    this.associationCreatorName = '';
    this.contactAssociation = '';
    this.codeContactAssociation = '';
    this.paysAssociation = '';
    this.villeAssociation = '';
    this.adresseAssociation = '';
    this.numeroContribuable = '';
    this.password = '';
    this.passwordConfirmation = '';
    this.password_input_type = 'password';
    this.password_confirm_input_type = 'password';
  }

  ngOnInit() {
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
  }

  navBack() {
    this.router.back();
  }
  /*--------------------------FUCNTIONS--------------------------*/


  passwordMatching() {
    const password = this.password;
    const passwordConf = this.passwordConfirmation;
    return  true ? password == passwordConf : 0;
  }

  changePassInputType() {
    this.password_input_type == 'password' ? this.password_input_type = 'text' : this.password_input_type = "password";
  }

  changePassConfirmInputType() {
    this.password_confirm_input_type == 'password' ? this.password_confirm_input_type = 'text' : this.password_confirm_input_type = "password";
  }

  locationSheet() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionsheet = yield _this.actionSheetController.create({
        buttons: [{
          text: 'Ma position',
          handler: () => {
            _this.longitudeAssociation = _this.myCoordinate.coords.longitude;
            _this.latitudeAssociation = _this.myCoordinate.coords.latitude;

            _this.nativGeocoder.reverseGeocode(_this.latitudeAssociation, _this.longitudeAssociation, _this.GeocoderOption).then(result => {
              _this.MyGeocoder = result[0];
              _this.adresseAssociation = _this.MyGeocoder.subLocality + "." + _this.MyGeocoder.locality + "." + _this.MyGeocoder.administrativeArea + "." + _this.MyGeocoder.countryName;
              console.log(JSON.stringify(result[0]));
            }).catch( /*#__PURE__*/function () {
              var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
                const toast = _this.toast.create({
                  message: `${err}`,
                  icon: 'information-circle',
                  duration: 1000,
                  color: "danger"
                });

                (yield toast).present();
                console.log('Error in reverse geocode');
              });

              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }());
          }
        }, {
          text: 'open Map',
          handler: () => {
            _this.longitudeAssociation = null;
            _this.latitudeAssociation = null;
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
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController
}, {
  type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}];

CreationAssociationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-creation-association',
  template: _creation_association_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_creation_association_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CreationAssociationPage);


/***/ }),

/***/ 2905:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-association/creation-association.page.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = ".input {\n  border: 0.5px solid rgb(206, 204, 204);\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0aW9uLWFzc29jaWF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJjcmVhdGlvbi1hc3NvY2lhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXR7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMjA2LCAyMDQsIDIwNCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */";

/***/ }),

/***/ 6841:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/creation/creation-association/creation-association.page.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"danger\" slot=\"start\" (click)=\"navBack()\"></ion-icon>\n    <ion-title>creation-association</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\"></ion-icon>\n    <ion-text>Creation : </ion-text><ion-text style=\"font-weight: bold\">Association</ion-text>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"associationName==''\"></ion-icon>\n    <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"associationName!=''\"></ion-icon>\n    <ion-row><ion-text>Nom de l'association: </ion-text></ion-row>\n  </ion-item>\n  <ion-item class=\"input ion-margin-horizontal\">\n    <ion-row><ion-input [(ngModel)]=\"associationName\" type=\"text\" placeholder=\"Ex : Nom de l'association... \" maxlength=\"45\"></ion-input></ion-row>\n  </ion-item>\n  <!-- ------------------- -->\n  <ion-item lines=\"none\">\n    <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"associationCreatorName==''\"></ion-icon>\n    <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"associationCreatorName!=''\"></ion-icon>\n    <ion-text>Nom et prenom Createur : </ion-text>\n  </ion-item>\n  <ion-item class=\"input ion-margin-horizontal\">\n    <ion-row><ion-input [(ngModel)]=\"associationCreatorName\" type=\"text\" placeholder=\"Ex : John Doe .. \" maxlength=\"45\"></ion-input></ion-row>\n  </ion-item>\n  <!-- ------------------------ -->\n  <ion-item lines=\"none\">\n    <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"paysAssociation==''\"></ion-icon>\n    <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"paysAssociation!=''\"></ion-icon>\n    <ion-text>Pays : </ion-text>\n  </ion-item>\n  <ion-row *ngIf=\"pays!=null\">\n    <ion-col size=\"12\">\n      <ion-item class=\"input ion-form-group\">\n        <ion-select interface=\"action-sheet\" placeholder=\"Selectionnez votre pays\" [(ngModel)]=\"paysAssociation\" (ionChange)=\"filterPays($event)\">\n          <ion-select-option [value]=\"country.name\" *ngFor=\"let country of pays_temp\" > {{country.flag}}{{country.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-item lines=\"none\">\n    <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"villeAssociation==''\"></ion-icon>\n    <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"villeAssociation!=''\"></ion-icon>\n    <ion-text>Ville : </ion-text>\n  </ion-item>\n  <ion-row *ngIf=\"pays!=null\">\n    <ion-col size=\"12\">\n      <ion-item class=\"input\">\n        <ion-select interface=\"action-sheet\" placeholder=\"Selectionnez votre ville\" [(ngModel)]=\"villeAssociation\">\n          <ion-select-option *ngFor=\"let city of ville_temp\" [value]=\"city\">{{city}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <!-- ---------------------- -->\n  <ion-item lines=\"none\">\n    <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"contactAssociation.length<1 ||  codeContactAssociation.length<1 \"></ion-icon>\n    <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"contactAssociation.length>1 && codeContactAssociation.length>1 \"></ion-icon>\n    <ion-text>Contact : </ion-text>\n  </ion-item>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item class=\"input\">\n        <ion-text style=\"font-weight:bold\" slot=\"start\">\n          {{codeContactAssociation}}\n        </ion-text>\n        <ion-input placeholder=\"Votre contact\" type=\"number\" [(ngModel)]='contactAssociation'></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n<!-- ---------------------- -->\n\n<!-- ------------------------------------ -->\n<ion-item lines=\"none\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"numeroContribuable ==''  ||  numeroContribuable=='' \"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"numeroContribuable!='' && numeroContribuable!='' \"></ion-icon>\n  <ion-text>Numero contribuable : </ion-text>\n</ion-item>\n<ion-row>\n  <ion-col size=\"12\">\n    <ion-item class=\"input\">\n      <ion-input placeholder=\"Numero contribuable\" type=\"number\" [(ngModel)]='numeroContribuable'></ion-input>\n    </ion-item>\n  </ion-col>\n</ion-row>\n<!-- ----------- -->\n<ion-item lines=\"none\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"numeroContribuable ==''  ||  numeroContribuable=='' \"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"numeroContribuable!='' && numeroContribuable!='' \"></ion-icon>\n  <ion-text slot=\"start\">Code Secret : </ion-text>\n</ion-item>\n<ion-row>\n  <ion-col size=\"12\">\n    <ion-item class=\"input\">\n      <ion-input [type]=\"password_confirm_input_type\" placeholder=\"Code Secret\" [(ngModel)]=\"password\"></ion-input>\n      <ion-icon name=\"eye-off-outline\" *ngIf=\"password_confirm_input_type=='password'\" (click)=\"changePassConfirmInputType()\"></ion-icon>\n    <ion-icon name=\"eye-outline\" *ngIf=\"password_confirm_input_type=='text'\" (click)=\"changePassConfirmInputType()\"></ion-icon>\n      <!-- <ion-note slot=\"error\" *ngIf=\"(confirmPassword.dirty||confirmPassword.touched)&& confirmPassword.errors\">invalid confirmPassword</ion-note> -->\n    </ion-item>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col size=\"12\">\n    <ion-item class=\"input\">\n      <ion-input [type]=\"password_confirm_input_type\" placeholder=\"Confirmez Code secret\" [(ngModel)]=\"passwordConfirmation\"></ion-input>\n      <ion-icon name=\"eye-off-outline\" *ngIf=\"password_confirm_input_type=='password'\" (click)=\"changePassConfirmInputType()\"></ion-icon>\n    <ion-icon name=\"eye-outline\" *ngIf=\"password_confirm_input_type=='text'\" (click)=\"changePassConfirmInputType()\"></ion-icon>\n      <!-- <ion-note slot=\"error\" *ngIf=\"(confirmPassword.dirty||confirmPassword.touched)&& confirmPassword.errors\">invalid confirmPassword</ion-note> -->\n    </ion-item>\n  </ion-col>\n</ion-row>\n<!-- ------------ -->\n<ion-item lines=\"none\" (click)=\"locationSheet()\">\n  <ion-icon name=\"ellipse-outline\" slot=\"start\" size=\"large\" *ngIf=\"latitudeAssociation==null || longitudeAssociation==null\"></ion-icon>\n  <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"danger\" size=\"large\" *ngIf=\"latitudeAssociation!=null || longitudeAssociation!=null\"></ion-icon>\n  <ion-icon name=\"location\" color=\"danger\"></ion-icon>\n  <ion-text style=\"margin-left:10px\">{{adresseAssociation}}</ion-text>\n  <ion-icon name=\"chevron-forward-outline\"  color=\"medium\" slot=\"end\"></ion-icon>\n</ion-item>\n<!-- ------------ -->\n\n</ion-content>\n<ion-footer>\n  <ion-card-subtitle style=\"color:grey\" class=\"ion-margin\">\n    Votre adresse restera confidentielle et ne sera jamais affiche publiquement , elle nous permet d'afficher un point aleatoire dans un rayoun de 600 m dee vous \n    </ion-card-subtitle>\n    <ion-card style=\"width:100%;margin:0\">\n    <ion-button expand=\"block\" color=\"danger\"  class=\"ion-margin\"[disabled]=\"!validationDonation\" >Creer Association </ion-button>\n    </ion-card>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_creation_creation-association_creation-association_module_ts.js.map