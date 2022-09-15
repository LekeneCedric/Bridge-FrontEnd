"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs-menu_tabs-menu_module_ts"],{

/***/ 1447:
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs-menu/tabs-menu-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsMenuPageRoutingModule": () => (/* binding */ TabsMenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tabs_menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-menu.page */ 5776);




const routes = [
    {
        path: '',
        component: _tabs_menu_page__WEBPACK_IMPORTED_MODULE_0__.TabsMenuPage,
        children: [
            {
                path: 'dons',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_javascript-time-ago_locale_fr_json_js-node_modules_javascript-time-ago_m-f2b7d5"), __webpack_require__.e("default-src_app_modals_modal-category_modal-category_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_dons_dons_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/home/dons/dons.module */ 4984)).then(m => m.DonsPageModule)
            },
            {
                path: 'demandes',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modals_modal-category_modal-category_page_ts"), __webpack_require__.e("src_app_pages_home_demandes_demandes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/home/demandes/demandes.module */ 4314)).then(m => m.DemandesPageModule)
            },
            {
                path: 'associations',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_associations_associations_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/home/associations/associations.module */ 6359)).then(m => m.AssociationsPageModule)
            },
            {
                path: 'messages',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_messages_receptions_receptions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/messages/receptions/receptions.module */ 6929)).then(m => m.ReceptionsPageModule)
            },
            {
                path: 'settings',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/settings/settings.module */ 7850)).then(m => m.SettingsPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: '/menu/dons',
        pathMatch: 'full'
    }
];
let TabsMenuPageRoutingModule = class TabsMenuPageRoutingModule {
};
TabsMenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabsMenuPageRoutingModule);



/***/ }),

/***/ 5107:
/*!*****************************************************!*\
  !*** ./src/app/pages/tabs-menu/tabs-menu.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsMenuPageModule": () => (/* binding */ TabsMenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tabs_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-menu-routing.module */ 1447);
/* harmony import */ var _tabs_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-menu.page */ 5776);







let TabsMenuPageModule = class TabsMenuPageModule {
};
TabsMenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tabs_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsMenuPageRoutingModule
        ],
        declarations: [_tabs_menu_page__WEBPACK_IMPORTED_MODULE_1__.TabsMenuPage]
    })
], TabsMenuPageModule);



/***/ }),

/***/ 5776:
/*!***************************************************!*\
  !*** ./src/app/pages/tabs-menu/tabs-menu.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsMenuPage": () => (/* binding */ TabsMenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_menu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-menu.page.html?ngResource */ 5575);
/* harmony import */ var _tabs_menu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-menu.page.scss?ngResource */ 9919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1228);






let TabsMenuPage = class TabsMenuPage {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
};
TabsMenuPage.ctorParameters = () => [
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
TabsMenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tabs-menu',
        template: _tabs_menu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_menu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsMenuPage);



/***/ }),

/***/ 9919:
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs-menu/tabs-menu.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-tab-button {\n  font-size: 10px;\n  --background-focused: #eb445a;\n  --color-selected: #eb445a;\n  --padding-end: 0px;\n  --padding-start: 10px;\n  --padding-bottom: 0px;\n  --margin-left:0px;\n  --margin-right:0px;\n  max-width: 100px;\n}\nion-tab-button ion-icon {\n  font-size: 67.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMtbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQUk7RUFDSSxpQkFBQTtBQUVSIiwiZmlsZSI6InRhYnMtbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJ1dHRvbntcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNlYjQ0NWE7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogI2ViNDQ1YTtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLW1hcmdpbi1sZWZ0OjBweDtcbiAgICAtLW1hcmdpbi1yaWdodDowcHg7XG4gICAgbWF4LXdpZHRoOjEwMHB4O1xuICAgIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDY3LjVweDtcbiAgICB9fSJdfQ== */";

/***/ }),

/***/ 5575:
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs-menu/tabs-menu.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar id=\"app-tab-bar\" slot=\"bottom\">\n    <ion-tab-button tab=\"associations\">\n      <ion-icon name=\"body-outline\" size=\"large\"> </ion-icon>\n      <ion-text  style=\"font-weight:bold;margin-top:5px\">Associations</ion-text>\n    </ion-tab-button>\n    \n    <ion-tab-button tab=\"dons\">\n      <ion-icon name=\"gift-outline\" size=\"large\"></ion-icon>\n      <ion-text  style=\"font-weight:bold;margin-top:5px\">Dons</ion-text>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"demandes\">\n      <ion-icon name=\"hand-left-outline\"size=\"large\" ></ion-icon>\n      <ion-text  style=\"font-weight:bold;margin-top:5px\">Demandes</ion-text>\n    </ion-tab-button>\n\n    \n\n    <ion-tab-button tab=\"messages\">\n      <ion-icon name=\"chatbox-outline\" size=\"large\"></ion-icon>\n      <ion-text style=\"font-weight:bold;margin-top:5px\">Messages</ion-text>\n    </ion-tab-button>\n    <ion-tab-button tab=\"settings\">\n      <ion-icon name=\"settings-outline\" size=\"large\"></ion-icon>\n      <ion-text style=\"font-weight:bold;margin-top:5px\">parametres</ion-text>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs-menu_tabs-menu_module_ts.js.map