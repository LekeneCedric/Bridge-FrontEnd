"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_splashscreen_splashscreen_module_ts"],{

/***/ 70520:
/*!*******************************************************************!*\
  !*** ./src/app/pages/splashscreen/splashscreen-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashscreenPageRoutingModule": () => (/* binding */ SplashscreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _splashscreen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splashscreen.page */ 51833);




const routes = [
    {
        path: '',
        component: _splashscreen_page__WEBPACK_IMPORTED_MODULE_0__.SplashscreenPage
    }
];
let SplashscreenPageRoutingModule = class SplashscreenPageRoutingModule {
};
SplashscreenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SplashscreenPageRoutingModule);



/***/ }),

/***/ 4236:
/*!***********************************************************!*\
  !*** ./src/app/pages/splashscreen/splashscreen.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashscreenPageModule": () => (/* binding */ SplashscreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _splashscreen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splashscreen-routing.module */ 70520);
/* harmony import */ var _splashscreen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splashscreen.page */ 51833);







let SplashscreenPageModule = class SplashscreenPageModule {
};
SplashscreenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _splashscreen_routing_module__WEBPACK_IMPORTED_MODULE_0__.SplashscreenPageRoutingModule
        ],
        declarations: [_splashscreen_page__WEBPACK_IMPORTED_MODULE_1__.SplashscreenPage]
    })
], SplashscreenPageModule);



/***/ }),

/***/ 51833:
/*!*********************************************************!*\
  !*** ./src/app/pages/splashscreen/splashscreen.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashscreenPage": () => (/* binding */ SplashscreenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _splashscreen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splashscreen.page.html?ngResource */ 87611);
/* harmony import */ var _splashscreen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splashscreen.page.scss?ngResource */ 18137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let SplashscreenPage = class SplashscreenPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        if (localStorage.getItem('userData')) {
            this.router.navigateByUrl('/menu', { replaceUrl: true });
        }
    }
};
SplashscreenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SplashscreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-splashscreen',
        template: _splashscreen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_splashscreen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SplashscreenPage);



/***/ }),

/***/ 18137:
/*!**********************************************************************!*\
  !*** ./src/app/pages/splashscreen/splashscreen.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".grid {\n  margin-top: 60%;\n  display: grid;\n}\n\n.title {\n  text-align: center;\n  font-weight: bolder;\n}\n\n.subtitle {\n  margin-top: 5%;\n}\n\n.subtitle {\n  text-align: center;\n  color: gray;\n  font-weight: 500;\n}\n\n.started {\n  margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaHNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUFSOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUNJO0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFBUjs7QUFHQTtFQUNJLGNBQUE7QUFBSiIsImZpbGUiOiJzcGxhc2hzY3JlZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZ3JpZHtcbiAgICBtYXJnaW4tdG9wOjYwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuLnRpdGxle1xuICAgICZ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgIH1cbn1cbi5zdWJ0aXRsZXtcbiAgICBtYXJnaW4tdG9wOjUlO1xuICAgICZ7XG5cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjpncmF5O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbn1cbi5zdGFydGVke1xuICAgIG1hcmdpbi10b3A6NSU7XG59Il19 */";

/***/ }),

/***/ 87611:
/*!**********************************************************************!*\
  !*** ./src/app/pages/splashscreen/splashscreen.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n<ion-grid class=\"grid\">\n  <ion-row>\n    <ion-img src=\"../../../assets/images/undraw_Deliveries_2r4y (1).png\"></ion-img>\n  </ion-row>\n  <ion-row class=\"title\">\n    <ion-col size=\"12\">\n     <ion-title> A donation can save a life</ion-title>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"subtitle\">\n    <ion-col size=\"12\">\n    <ion-text>\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\n    </ion-text>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"started\">\n    <ion-col size=\"12\">\n      <ion-button expand=\"block\" color=\"danger\" routerLink=\"/login\">\n        Get Started\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_splashscreen_splashscreen_module_ts.js.map