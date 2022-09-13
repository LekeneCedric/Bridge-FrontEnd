"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_register_register_module_ts"],{

/***/ 917:
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/register/register-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 9413);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 6029:
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 917);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 9413);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 9413:
/*!******************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.html?ngResource */ 5250);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 4390);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1228);










let RegisterPage = class RegisterPage {
  constructor(fb, authService, loadingController, toast, http, router) {
    this.fb = fb;
    this.authService = authService;
    this.loadingController = loadingController;
    this.toast = toast;
    this.http = http;
    this.router = router;
    this.term_condition = false;
    this.password_input_type = 'password';
    this.password_confirm_input_type = 'password';
    this.pays = [];
    this.pays_temp = [];
    this.ville = [];
    this.ville_temp = [];
    this.code = '';
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
    this.credential = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5)]],
      surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      birthday: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("")]],
      gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      contact: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^((\\+91-?)|0)?[0-9]{9}$")]],
      country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]]
    });
  }
  /*-----------------------------------------_FUNCTIONS------------------------------------ */


  filterPays(event) {
    this.pays = this.pays_temp;
    let keyword = event.target.value;

    if (!keyword) {
      return false;
    }

    this.pays = this.pays.filter(value => {
      return value.name === keyword;
    });
    this.code = this.pays[0].dial_code;
    this.filterVille(keyword);
  }

  filterVille(country) {
    this.ville_temp = this.ville[`${country}`];
    console.log(this.ville_temp);
  }

  signUP() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingController.create({
        spinner: 'lines-small',
        message: 'Please wait...',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      yield loading.present();
      const credential = {
        name: _this.name.value,
        surname: _this.surname.value,
        email: _this.email.value,
        date_naissance: !isNaN(Date.parse(_this.birthday.value)) ? _this.birthday.value : null,
        sexe: _this.gender.value,
        contact: Number(_this.code + _this.contact.value),
        pays: _this.country.value,
        ville: _this.city.value,
        password: _this.password.value,
        password_confirmation: _this.confirmPassword.value
      };

      _this.authService.signup(credential).toPromise().then( /*#__PURE__*/function () {
        var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          loading.dismiss();
          localStorage.setItem('token', data.token);
          localStorage.setItem('mydata', JSON.stringify(data.user)); //on affiche un message de success

          const toast = _this.toast.create({
            message: `Bienvenue ${data.user.name}`,
            icon: 'hand-left-outline',
            duration: 2000,
            color: "success"
          });

          (yield toast).present();

          _this.router.navigateByUrl('/menu/dons', {
            replaceUrl: true
          });
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()).catch( /*#__PURE__*/function () {
        var _ref2 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
          loading.dismiss();

          const toast = _this.toast.create({
            message: `${err.message}`,
            icon: 'alert',
            duration: 2000,
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

  test() {
    console.log(this.credential.value);
  }

  validcondition() {
    this.term_condition = !this.term_condition;
  }

  passwordMatching() {
    const password = this.password.value;
    const passwordConf = this.confirmPassword.value;
    return  true ? password == passwordConf : 0;
  }

  changePassInputType() {
    this.password_input_type == 'password' ? this.password_input_type = 'text' : this.password_input_type = "password";
  }

  changePassConfirmInputType() {
    this.password_confirm_input_type == 'password' ? this.password_confirm_input_type = 'text' : this.password_confirm_input_type = "password";
  }

  get isDate() {
    return !isNaN(Date.parse(this.birthday.value));
  }

  get name() {
    return this.credential.get('name');
  }

  get surname() {
    return this.credential.get('surname');
  }

  get email() {
    return this.credential.get('email');
  }

  get birthday() {
    return this.credential.get('birthday');
  }

  get gender() {
    return this.credential.get('gender');
  }

  get contact() {
    return this.credential.get('contact');
  }

  get country() {
    return this.credential.get('country');
  }

  get city() {
    return this.credential.get('city');
  }

  get password() {
    return this.credential.get('password');
  }

  get confirmPassword() {
    return this.credential.get('confirmPassword');
  }

};

RegisterPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}];

RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-register',
  template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RegisterPage);


/***/ }),

/***/ 4390:
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".hello-text {\n  font-weight: bolder;\n  text-align: center;\n}\n\n.input {\n  border: 0.5px solid rgb(206, 204, 204);\n  border-radius: 10px;\n}\n\n.signupMessage {\n  text-align: right;\n}\n\n.signup {\n  text-align: left;\n  text-decoration: underline;\n  -webkit-text-decoration-color: #eb445a;\n          text-decoration-color: #eb445a;\n}\n\n.rowSignup {\n  width: 100%;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFQTtFQUNRLHNDQUFBO0VBQ0EsbUJBQUE7QUFDUjs7QUFDSTtFQUNJLGlCQUFBO0FBRVI7O0FBQUk7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBQUdSOztBQURJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBSVIiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaGVsbG8tdGV4dHtcbiAgICBmb250LXdlaWdodDpib2xkZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbi5pbnB1dHtcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMjA2LCAyMDQsIDIwNCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuICAgIC5zaWdudXBNZXNzYWdle1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gICAgLnNpZ251cHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2ViNDQ1YTtcbiAgICB9XG4gICAgLnJvd1NpZ251cHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH0iXX0= */";

/***/ }),

/***/ 5250:
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  \n<ion-grid>\n  <ion-row>\n    <ion-col size=\"12\" class=\"hello-text\">\n      <h1>Bienvenue a bord ! </h1>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"text-align:center\">\n    <ion-card-subtitle color=\"dark\">\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\n    </ion-card-subtitle>\n  </ion-row>\n  <form [formGroup]=\"credential\" (ngSubmit)=\"signUP()\">\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item class=\"input\">\n        <ion-input type=\"text\" placeholder=\"Entrez votre nom\" formControlName=\"name\" maxlength=\"45\"></ion-input>\n        <ion-note slot=\"error\" *ngIf=\"(name.dirty||name.touched)&& name.errors\">min 6 characters</ion-note>    \n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item class=\"input\">\n        <ion-input type=\"text\" placeholder=\"Entrez votre prenom\" formControlName=\"surname\" maxlength=\"45\"></ion-input>\n        <ion-note slot=\"error\" *ngIf=\"(surname.dirty||surname.touched)&& surname.errors\">min 6 characters</ion-note>    \n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item class=\"input\">\n        <ion-input type=\"email\" placeholder=\"Entrez votre email\" formControlName=\"email\" maxlength=\"45\"></ion-input>\n        <ion-note slot=\"error\" *ngIf=\"(email.dirty||email.touched)&& email.errors\">invalid email</ion-note>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item class=\"input\" id=\"birthday\">\n        <ion-input placeholder=\"Date de naissance : 1998-09-30 ( optionel ) \" formControlName=\"birthday\" maxlength=\"10\"></ion-input>\n        <ion-note slot=\"error\" *ngIf=\"isDate==false\">invalid date</ion-note>\n      </ion-item>\n    </ion-col>\n  </ion-row><ion-row>\n    <ion-col size=\"12\">\n      <ion-item class=\"input\">\n        <ion-select interface=\"action-sheet\" placeholder=\"De quel sexe etes vous ? \" formControlName=\"gender\">\n          <ion-select-option value=\"Masculin\">Masculin</ion-select-option>\n          <ion-select-option value=\"Feminin\">Feminin</ion-select-option>\n        </ion-select>\n        <ion-note slot=\"error\" *ngIf=\"(gender.dirty||gender.touched)&& gender.errors\">invalid gender</ion-note>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"pays!=null\">\n    <ion-col size=\"12\">\n      <ion-item class=\"input ion-form-group\">\n        <ion-select interface=\"action-sheet\" placeholder=\"Selectionnez votre pays\" formControlName=\"country\" (ionChange)=\"filterPays($event)\">\n          <ion-select-option [value]=\"country.name\" *ngFor=\"let country of pays_temp\" > {{country.flag}}{{country.name}}</ion-select-option>\n        </ion-select>\n        <ion-note slot=\"error\" *ngIf=\"(country.dirty||country.touched)&& country.errors\">invalid country</ion-note>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"pays!=null\">\n    <ion-col size=\"12\">\n      <ion-item class=\"input\">\n        <ion-select interface=\"action-sheet\" placeholder=\"Selectionnez votre ville\" formControlName=\"city\">\n          <ion-select-option *ngFor=\"let city of ville_temp\" [value]=\"city\">{{city}}</ion-select-option>\n        </ion-select>\n        <ion-note slot=\"error\" *ngIf=\"(city.dirty||city.touched)&& city.errors\">invalid city</ion-note>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"pays!=null\">\n    <ion-col size=\"12\">\n      <ion-item class=\"input\">\n        <ion-text>\n          {{code}}\n        </ion-text>\n        <ion-input placeholder=\"Votre contact\" formControlName=\"contact\"></ion-input>\n        <ion-note slot=\"error\" *ngIf=\"(contact.dirty||contact.touched)&& contact.errors\">invalid contact</ion-note>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n \n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item class=\"input\">\n        <ion-input [type]=\"password_input_type\" placeholder=\"Entrez votre mot de passe\" formControlName=\"password\"></ion-input>\n        <ion-icon name=\"eye-off-outline\" *ngIf=\"password_input_type=='password'\" (click)=\"changePassInputType()\"></ion-icon>\n      <ion-icon name=\"eye-outline\" *ngIf=\"password_input_type=='text'\" (click)=\"changePassInputType()\"></ion-icon>\n        <ion-note slot=\"error\" *ngIf=\"(password.dirty||password.touched)&& password.errors\">invalid password</ion-note>\n      </ion-item>\n    </ion-col>\n  </ion-row><ion-row>\n    <ion-col size=\"12\">\n      <ion-item class=\"input\">\n        <ion-input [type]=\"password_confirm_input_type\" placeholder=\"Confirmez votre mot de passe\" formControlName=\"confirmPassword\"></ion-input>\n        <ion-icon name=\"eye-off-outline\" *ngIf=\"password_confirm_input_type=='password'\" (click)=\"changePassConfirmInputType()\"></ion-icon>\n      <ion-icon name=\"eye-outline\" *ngIf=\"password_confirm_input_type=='text'\" (click)=\"changePassConfirmInputType()\"></ion-icon>\n        <ion-note slot=\"error\" *ngIf=\"(confirmPassword.dirty||confirmPassword.touched)&& confirmPassword.errors\">invalid confirmPassword</ion-note>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"ion-margin-top\" style=\"margin-left:15px\">\n    <ion-checkbox color=\"danger\" (click)=\"validcondition()\"></ion-checkbox>\n    <ion-label class=\"ion-margin-horizontal\">accepter les termes et conditions</ion-label>\n</ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n     <ion-button [disabled]=\"!credential.valid || !passwordMatching() || !term_condition\" type=\"submit\" color=\"success\"  type=\"submit\" expand=\"block\" color=\"danger\">Enroll now !</ion-button>\n    </ion-col>\n  </ion-row>\n</form>\n  \n  <ion-row class=\"rowSignup\">\n    <ion-col class=\"signupMessage\" style=\"text-align: center;\" size=\"7\">\n     <ion-text>Vous avez deja un compte ? </ion-text>\n    </ion-col>\n      <ion-col class='signup' size=\"5\" routerLink=\"/login\">\n         <ion-text color=\"danger\" style=\"font-weight: bold;\">Connectez vous</ion-text>\n      </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_register_register_module_ts.js.map