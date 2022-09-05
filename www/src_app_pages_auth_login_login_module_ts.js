"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_login_login_module_ts"],{

/***/ 5221:
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/login/login-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 7412);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 9456:
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5221);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 7412);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 7412:
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6579);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 1191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1228);









let LoginPage = class LoginPage {
  constructor(fb, authService, loadingController, toast, router) {
    this.fb = fb;
    this.authService = authService;
    this.loadingController = loadingController;
    this.toast = toast;
    this.router = router;
    this.term_condition = false;
    this.password_input_type = 'password';
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.credential = _this.fb.group({
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]]
      });

      if (JSON.parse(localStorage.getItem('mydata')).name) {
        console.log('user present');
        const token = localStorage.getItem('token');

        _this.authService.validToken(token).toPromise().then(data => {
          _this.router.navigateByUrl('/menu/dons', {
            replaceUrl: true
          });
        }).catch(err => {
          console.log('invalidToken');
        });
      } else {}
    })();
  }
  /*-----------------------------FUNCTIONS-----------------------------------------------*/


  signIN() {
    var _this2 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingController.create({
        spinner: 'lines-small',
        message: 'Please wait...',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      yield loading.present();
      const credential = {
        email: _this2.email.value,
        password: _this2.password.value
      };

      _this2.authService.signIn(credential).toPromise().then( /*#__PURE__*/function () {
        var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          console.log(data);
          localStorage.setItem('token', data.token);
          localStorage.setItem('mydata', JSON.stringify(data.user));
          console.log(JSON.parse(localStorage.getItem('mydata')).name);
          loading.dismiss(); //on affiche un message de success

          const toast = _this2.toast.create({
            message: `${data.message}`,
            icon: 'information-circle',
            duration: 1000,
            color: "success"
          });

          (yield toast).present();

          _this2.router.navigateByUrl('/menu/dons', {
            replaceUrl: true
          });
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()).catch( /*#__PURE__*/function () {
        var _ref2 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
          console.log(err);
          loading.dismiss();

          const toast = _this2.toast.create({
            message: `${err.error.message}`,
            icon: 'alert',
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

  validcondition() {
    this.term_condition = !this.term_condition;
  }

  changePassInputType() {
    this.password_input_type == 'password' ? this.password_input_type = 'text' : this.password_input_type = "password";
  }

  get email() {
    return this.credential.get('email');
  }

  get password() {
    return this.credential.get('password');
  }

};

LoginPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 1191:
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Roboto Mono\", monospace;\n}\n\n.grid {\n  margin-top: 10%;\n}\n\n.hello-text {\n  font-weight: bolder;\n  text-align: center;\n}\n\n.input {\n  border: 0.5px solid rgb(206, 204, 204);\n  border-radius: 10px;\n}\n\n.google_elt {\n  margin-top: 2%;\n  align-self: center;\n  text-align: center;\n}\n\n.signup {\n  text-align: left;\n  text-decoration: underline;\n  -webkit-text-decoration-color: #eb445a;\n          text-decoration-color: #eb445a;\n}\n\n.rowSignup {\n  width: 100%;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBR0E7O0FBREE7RUFDSSxzQ0FBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUtKOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUtKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbn1cbi5ncmlke1xuICAgIG1hcmdpbi10b3A6MTAlO1xufVxuLmhlbGxvLXRleHR7XG5mb250LXdlaWdodDpib2xkZXI7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5wdXR7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMjA2LCAyMDQsIDIwNCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5nb29nbGVfZWx0e1xuICAgIG1hcmdpbi10b3A6MiU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaWdudXBNZXNzYWdle1xufVxuLnNpZ251cHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2ViNDQ1YTtcbn1cbi5yb3dTaWdudXB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */";

/***/ }),

/***/ 6579:
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n<ion-grid class=\"grid\">\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-img src=\"../../../../assets/images/undraw_Access_account_re_8spm.png\"></ion-img>\n    </ion-col>\n  </ion-row>\n  <form [formGroup]=\"credential\" (ngSubmit)=\"signIN()\">\n  <ion-row>\n    <ion-col size=\"12\" class=\"hello-text\">\n      <h1>Welcome back ! </h1>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item class=\"input\">\n        <ion-input type=\"email\" placeholder=\"Enter email\" formControlName=\"email\" maxlength=\"45\"></ion-input>\n        <ion-note slot=\"error\" *ngIf=\"(email.dirty||email.touched)&& email.errors\">invalid email</ion-note>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item class=\"input\">\n        <ion-input [type]=\"password_input_type\" placeholder=\"password\" formControlName=\"password\"></ion-input>\n        <ion-icon name=\"eye-off-outline\" *ngIf=\"password_input_type=='password'\" (click)=\"changePassInputType()\"></ion-icon>\n      <ion-icon name=\"eye-outline\" *ngIf=\"password_input_type=='text'\" (click)=\"changePassInputType()\"></ion-icon>\n        <ion-note slot=\"error\" *ngIf=\"(password.dirty||password.touched)&& password.errors\">invalid password</ion-note>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"ion-margin-top\" style=\"margin-left:15px\">\n    <ion-checkbox color=\"danger\" (click)=\"validcondition()\"></ion-checkbox>\n    <ion-label class=\"ion-margin-horizontal\">acccept term and condition</ion-label>\n</ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n     <ion-button [disabled]=\"!credential.valid || !term_condition\" type=\"submit\" color=\"success\"  type=\"submit\" expand=\"block\" color=\"danger\">Enroll now !</ion-button>\n    </ion-col>\n  </ion-row>\n</form>\n  <ion-row>\n    <ion-col>\n      <ion-item-divider></ion-item-divider>\n    </ion-col>\n    <ion-col class=\"google_elt\">\n      <ion-chip>\n        <ion-avatar>\n          <img src=\"../../../../assets/images/google.png\">\n        </ion-avatar>\n        <ion-label>Google</ion-label>\n      </ion-chip> \n    </ion-col>\n    <ion-col><ion-item-divider></ion-item-divider></ion-col>\n  </ion-row>\n  <ion-row class=\"rowSignup\">\n    <ion-col class=\"signupMessage\" style=\"text-align: center;\" size=\"9\">\n     <ion-text>You don't have account ? </ion-text>\n    </ion-col>\n      <ion-col class='signup' size=\"3\" routerLink=\"/register\">\n         <ion-text color=\"danger\">Sign Up</ion-text>\n      </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_login_login_module_ts.js.map