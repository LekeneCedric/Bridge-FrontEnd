(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_splashscreen_splashscreen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/splashscreen/splashscreen.module */ 4236)).then(m => m.SplashscreenPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/register/register.module */ 76029)).then(m => m.RegisterPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/login/login.module */ 79456)).then(m => m.LoginPageModule)
    },
    {
        path: 'splashscreen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_splashscreen_splashscreen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/splashscreen/splashscreen.module */ 4236)).then(m => m.SplashscreenPageModule)
    },
    {
        path: 'menu',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs-menu_tabs-menu_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs-menu/tabs-menu.module */ 5107)).then(m => m.TabsMenuPageModule)
    },
    {
        path: 'creation-dons',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_creation_creation-dons_creation-dons_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/creation/creation-dons/creation-dons.module */ 44533)).then(m => m.CreationDonsPageModule)
    },
    {
        path: 'creation-demandes',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-node_modules_ionic-native_native-geocoder___ivy_ngcc___ngx_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_creation_creation-demandes_creation-demandes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/creation/creation-demandes/creation-demandes.module */ 38619)).then(m => m.CreationDemandesPageModule)
    },
    {
        path: 'creation-association',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_creation_creation-association_creation-association_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/creation/creation-association/creation-association.module */ 14643)).then(m => m.CreationAssociationPageModule)
    },
    {
        path: 'profil-donateur/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-node_modules_javascript-time-ago_locale_fr_json_js-node_modules_javascript-time-ago_m-f2b7d5"), __webpack_require__.e("default-src_app_modals_modal-edit-profil_modal-edit-profil_page_ts"), __webpack_require__.e("src_app_pages_profils_profil-donateur_profil-donateur_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profils/profil-donateur/profil-donateur.module */ 8813)).then(m => m.ProfilDonateurPageModule)
    },
    {
        path: 'profil-association/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profils_profil-association_profil-association_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profils/profil-association/profil-association.module */ 71524)).then(m => m.ProfilAssociationPageModule)
    },
    {
        path: 'reception',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_messages_reception_reception_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/messages/reception/reception.module */ 84432)).then(m => m.ReceptionPageModule)
    },
    {
        path: 'modal-etat',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modals_modal-etat_modal-etat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/modal-etat/modal-etat.module */ 32713)).then(m => m.ModalEtatPageModule)
    },
    {
        path: 'settings/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/settings.module */ 7850)).then(m => m.SettingsPageModule)
    },
    {
        path: 'salon/:id_donateur/:id_receiver/:id_demande/:id_don',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_messages_salon_salon_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/messages/salon/salon.module */ 74392)).then(m => m.SalonPageModule)
    },
    {
        path: 'receptions',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_messages_receptions_receptions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/messages/receptions/receptions.module */ 96929)).then(m => m.ReceptionsPageModule)
    },
    {
        path: 'modal-salon',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modals_modal-salon_modal-salon_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/modal-salon/modal-salon.module */ 74009)).then(m => m.ModalSalonPageModule)
    },
    {
        path: 'modal-popover',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modals_modal-popover_modal-popover_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/modal-popover/modal-popover.module */ 24322)).then(m => m.ModalPopoverPageModule)
    },
    {
        path: 'modal-edit-profil',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-src_app_modals_modal-edit-profil_modal-edit-profil_page_ts"), __webpack_require__.e("src_app_modals_modal-edit-profil_modal-edit-profil_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/modal-edit-profil/modal-edit-profil.module */ 68371)).then(m => m.ModalEditProfilPageModule)
    },
    {
        path: 'modal-edit-dons',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-node_modules_ionic-native_native-geocoder___ivy_ngcc___ngx_index_js"), __webpack_require__.e("default-src_app_modals_modal-edit-dons_modal-edit-dons_page_ts"), __webpack_require__.e("src_app_modals_modal-edit-dons_modal-edit-dons_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/modal-edit-dons/modal-edit-dons.module */ 7504)).then(m => m.ModalEditDonsPageModule)
    },
    {
        path: 'map/:category/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("src_app_pages_map_map_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/map/map.module */ 96016)).then(m => m.MapPageModule)
    },
    {
        path: 'details-association/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_details_details-association_details-association_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/details/details-association/details-association.module */ 35241)).then(m => m.DetailsAssociationPageModule)
    },
    {
        path: 'details-annonce/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_javascript-time-ago_locale_fr_json_js-node_modules_javascript-time-ago_m-f2b7d5"), __webpack_require__.e("src_app_pages_details_details-annonce_details-annonce_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/details/details-annonce/details-annonce.module */ 10328)).then(m => m.DetailsAnnoncePageModule)
    },
    {
        path: 'details-evenement/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_javascript-time-ago_locale_fr_json_js-node_modules_javascript-time-ago_m-f2b7d5"), __webpack_require__.e("src_app_pages_details_details-evenements_details-evenements_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/details/details-evenements/details-evenements.module */ 83077)).then(m => m.DetailsEvenementsPageModule)
    },
    {
        path: 'modal-mouvements',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modals_modal-mouvements_modal-mouvements_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/modal-mouvements/modal-mouvements.module */ 53665)).then(m => m.ModalMouvementsPageModule)
    },
    {
        path: 'modal-annonces',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modals_modal-annonces_modal-annonces_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/modal-annonces/modal-annonces.module */ 5737)).then(m => m.ModalAnnoncesPageModule)
    },
    {
        path: 'modal-demandes-adhesion-association',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modals_modal-demandes-adhesion-association_modal-demandes-adhesion-association_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/modal-demandes-adhesion-association/modal-demandes-adhesion-association.module */ 78630)).then(m => m.ModalDemandesAdhesionAssociationPageModule)
    },
    {
        path: 'creation-annonces/:id_association',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("src_app_pages_creation_creation-annonces_creation-annonces_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/creation/creation-annonces/creation-annonces.module */ 90761)).then(m => m.CreationAnnoncesPageModule)
    },
    {
        path: 'creation-besoins/:id_association',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_creation_creation-besoins_creation-besoins_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/creation/creation-besoins/creation-besoins.module */ 76460)).then(m => m.CreationBesoinsPageModule)
    },
    {
        path: 'creation-mouvements/:id_association',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("src_app_pages_creation_creation-mouvements_creation-mouvements_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/creation/creation-mouvements/creation-mouvements.module */ 34541)).then(m => m.CreationMouvementsPageModule)
    },
    {
        path: 'modal-galerie-association/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modals_modal-galerie-association_modal-galerie-association_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modals/modal-galerie-association/modal-galerie-association.module */ 31945)).then(m => m.ModalGalerieAssociationPageModule)
    },
    {
        path: 'creation-association-don/:id_association/:id_donateur/:id_besoin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_creation_creation-association-don_creation-association-don_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/creation/creation-association-don/creation-association-don.module */ 47537)).then(m => m.CreationAssociationDonPageModule)
    },
    {
        path: 'image/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_services_medias_medias_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/modal-galerie-association/galery-type/image/image.module */ 46772)).then(m => m.ImagePageModule)
    },
    {
        path: 'notifications/:id_donateur',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_javascript-time-ago_locale_fr_json_js-node_modules_javascript-time-ago_m-f2b7d5"), __webpack_require__.e("src_app_pages_notifications_notifications_notifications_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notifications/notifications/notifications.module */ 95440)).then(m => m.NotificationsPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        providers: [],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth/auth.service */ 51228);
/* harmony import */ var _services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/manage-data/manage-data.service */ 58027);







let AppComponent = class AppComponent {
    constructor(authService, router, manageDataService) {
        this.authService = authService;
        this.router = router;
        this.manageDataService = manageDataService;
    }
    ngOnInit() {
        // let token  = localStorage.getItem('token') as string;
        // setInterval(()=>{
        //   this.authService.validToken(token).toPromise().then(
        //     data=>{
        //       console.log('validToken')
        //     }
        //   ).catch(err=>{
        //     console.log('invalidToken')
        //     localStorage.removeItem('token')
        //     this.router.navigateByUrl('/login',{replaceUrl:true});
        //   });
        // },5000) 
        // if(JSON.parse(localStorage.getItem('mydata')).name)
        // {
        //   this.router.navigate(['/login']);
        // }
        // else{
        //   this.router.navigate(['/splashscreen']);
        // }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__.ManageDataService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ionic4-auto-complete */ 16629);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 28221);
/* harmony import */ var _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/native-geocoder/ngx */ 79683);













let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_11__.AutoCompleteModule,
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy }, _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__.CallNumber, _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 51228:
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);







let AuthService = class AuthService {
  constructor(http, toast, router) {
    this.http = http;
    this.toast = toast;
    this.router = router;
  }

  signup(credential) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiURL}/auth/register`, credential, {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
  }

  signIn(credential) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiURL}/auth/login`, credential, {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
  }

  validToken(token) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'X-XSRF-TOKEN': token,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json, text/plain, */*',
      'X-Requested-With': 'XMLHttpRequest'
    });
    const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiURL + '/validate-token';
    return this.http.get(api, {
      headers: headers
    });
  }

  logout() {
    var _this = this;

    const name = JSON.parse(localStorage.getItem('mydata')).name;
    const token = localStorage.getItem('token');
    const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiURL + '/auth/logout';
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json, text/plain, */*',
      'X-Requested-With': 'XMLHttpRequest'
    });
    this.http.post(api, null, {
      headers: headers
    }).toPromise().then( /*#__PURE__*/function () {
      var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
        localStorage.removeItem('mydata');
        localStorage.removeItem('token');

        const toast = _this.toast.create({
          message: `A la prochaine - ${name}`,
          icon: 'hand-right',
          duration: 1000,
          color: "danger"
        });

        (yield toast).present();

        _this.router.navigateByUrl('/login', {
          replaceUrl: true
        });
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).catch( /*#__PURE__*/function () {
      var _ref2 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        const toast = _this.toast.create({
          message: `${err.message}`,
          icon: 'warning',
          duration: 1000,
          color: "warning"
        });

        (yield toast).present();

        _this.router.navigateByUrl('/login', {
          replaceUrl: true
        });
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

};

AuthService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];

AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], AuthService);


/***/ }),

/***/ 58027:
/*!*************************************************************!*\
  !*** ./src/app/services/manage-data/manage-data.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageDataService": () => (/* binding */ ManageDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let ManageDataService = class ManageDataService {
    constructor(http) {
        this.http = http;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        setInterval(() => {
            this.myId = JSON.parse(localStorage.getItem('mydata')).id;
        }, 100);
    }
    getDons(page) {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/dons?page=${page}`;
        return this.http.get(api, { headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            } });
    }
    getOneDon(id) {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/dons/' + `${id}`;
        return this.http.get(api, { headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            } });
    }
    getDonSimilaires(id, category) {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/donsSimilaires/' + `${id}/` + `${category}`;
        return this.http.get(api, { headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            } });
    }
    nbreInteressesDon(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/interessesDon/' + `${id}`;
        return this.http.get(api, { headers: headers });
    }
    isReserv(id_don, idUser) {
        console.log(idUser);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/isreserv/' + `${id_don}-${idUser}`;
        return this.http.get(api, { headers: headers });
    }
    reserverDon(don_id, donateur_id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const data = {
            don_id: don_id,
            donateur_id: donateur_id
        };
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/reserverDon';
        return this.http.post(api, data, { headers: headers });
    }
    annulerReservation(don_id, donateur_id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const data = {
            don_id: don_id,
            donateur_id: donateur_id
        };
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/annulerReservation';
        return this.http.post(api, data, { headers: headers });
    }
    nbreservations(don_id) {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/nbreservations/' + `${don_id}`;
        return this.http.get(api, { headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            } });
    }
    receptionner(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/dons/${id}?_method=PUT`;
        return this.http.post(api, {
            disponible: 1
        }, { headers: headers });
    }
    deleteDon(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/dons/${id}`;
        return this.http.delete(api, { headers: headers });
    }
    updateDon(id, data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/dons/${id}?_method=PUT`;
        return this.http.post(api, data, { headers: headers });
    }
    /*-------------------------DEMANDES---------------------------*/
    deleteDemande(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/demandes/${id}`;
        return this.http.delete(api, { headers: headers });
    }
    getDemandes() {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/demandes';
        return this.http.get(api, { headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            } });
    }
    getOneDemande(id) {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/demandes' + `/${id}`;
        return this.http.get(api, { headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            } });
    }
    finishDemande(id, data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/demandes/${id}?_method=PUT`;
        return this.http.post(api, data, { headers: headers });
    }
    /*-------------------------DONATEUR-----------------------------*/
    getDonateur(id) {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/donateurs' + `/${id}`;
        return this.http.get(api, { headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            } });
    }
    updateProfil(id, data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/donateurs/${id}?_method=PUT`;
        return this.http.post(api, data, { headers: headers });
    }
    /*-------------------------CONVERSATIONS-------------------------*/
    getLastMessage(id_donateur, id_receiver, id_don) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/lastMessage/' + `${id_donateur}-${id_receiver}-${id_don}`;
        return this.http.get(api, { headers: headers });
    }
    deleteMessage(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/messages/' + `${id}`;
        return this.http.delete(api, { headers: headers });
    }
    addMessageDon(don_id, donateur_id, receiver_id, contenu, vu, sender, receiver) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/messages';
        const message = {
            don_id: don_id,
            donateur_id: donateur_id,
            receiver_id: receiver_id,
            sender: sender,
            receiver: receiver,
            contenu: contenu,
            vu: vu
        };
        return this.http.post(api, message, { headers: headers });
    }
    addMessageDemande(demande_id, donateur_id, receiver_id, contenu, vu, sender, receiver) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/messages';
        const message = {
            demande_id: demande_id,
            donateur_id: donateur_id,
            receiver_id: receiver_id,
            sender: sender,
            receiver: receiver,
            contenu: contenu,
            vu: vu
        };
        return this.http.post(api, message, { headers: headers });
    }
    getConversationsDon(id_donateur, id_receiver, id_don) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/conversationDon' + `/${id_donateur}-${id_receiver}-${id_don}`;
        return this.http.get(api, { headers: headers });
    }
    getConversationsDemande(id_donateur, id_receiver, id_demande) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/conversationDemande' + `/${id_donateur}-${id_receiver}-${id_demande}`;
        return this.http.get(api, { headers: headers });
    }
    getSalonsDons(mon_id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/salonsDiscussionsDon/' + `${mon_id}`;
        return this.http.get(api, { headers: headers });
    }
    getSalonsDemandes(mon_id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/salonsDiscussionsDemande/' + `${mon_id}`;
        return this.http.get(api, { headers: headers });
    }
    /*-----------------------------------ASSOCIATIONS-----------------------------------------------*/
    getGalerieAssociation(id_association) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/galerieAssociation/${id_association}`;
        return this.http.get(api, { headers: headers });
    }
    getAssociationMembersList(id_association) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/association_member_list/${id_association}`;
        return this.http.get(api, { headers: headers });
    }
    getNonAssociationMemberList(id_association) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/non_association_member_list/${id_association}`;
        return this.http.get(api, { headers: headers });
    }
    getAssociations() {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/associations/';
        return this.http.get(api, { headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            } });
    }
    getOneAssociation(idassociation) {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/associations/' + `${idassociation}`;
        return this.http.get(api, { headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            } });
    }
    becameAssociationMember(id_donateur, id_association) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const data = {
            association_id: id_association,
            donateur_id: id_donateur,
            valide: 0
        };
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/appartenances/';
        return this.http.post(api, data, { headers: headers });
    }
    addAssociationMember(id_donateur, id_association) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const data = {};
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/addAssociationMember/${id_donateur}/${id_association}}`;
        return this.http.post(api, data, { headers: headers });
    }
    rejectAssociationMember(id_donateur, id_association) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const data = {};
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/rejectAssociationMember/${id_donateur}/${id_association}}`;
        return this.http.post(api, data, { headers: headers });
    }
    /*---------------------------ANNONCES_ASSOCIATIONS---------------------------_*/
    mesAnnoncesFavoris() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/annoncesFavoris/' + `${this.myId}`;
        return this.http.get(api, { headers: headers });
    }
    LikerAnnonce(credential) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/likerAnnonce/';
        return this.http.post(api, credential, { headers: headers });
    }
    disLikerAnnonce(id_annonce) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/dislikeAnnonce/${id_annonce}/${this.myId}`;
        return this.http.delete(api, { headers: headers });
    }
    getAnnonces() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        console.log(this.myId);
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/annonces/${this.myId}`;
        return this.http.get(api, { headers: headers });
    }
    getOneAnnonce(idannonces) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/annonces/' + `${idannonces}/${this.myId}`;
        return this.http.get(api, { headers: headers });
    }
    addAnnonce(credential) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/annonces/';
        return this.http.post(api, credential, { headers: headers });
    }
    getAnnoncesAssociation(id_association) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/annoncesassociation/' + `${id_association}`;
        return this.http.get(api, { headers: headers });
    }
    /*---------------------------MOUVEMENTS_ASSOCIATIONS---------------------------_*/
    getMesMouvements() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/mouvementsParticiper/${this.myId}`;
        return this.http.get(api, { headers: headers });
    }
    imParticipate(myId, mouvementId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/imParticipate/${myId}/${mouvementId}`;
        return this.http.get(api, { headers: headers });
    }
    annulerParticipation(myId, mouvementId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/annulerParticipation/${myId}/${mouvementId}`;
        return this.http.post(api, {}, { headers: headers });
    }
    participerMouvement(credential) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/participations/';
        return this.http.post(api, credential, { headers: headers });
    }
    getMouvements() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/mouvements/';
        return this.http.get(api, { headers: headers });
    }
    getOneMouvement(idmouvement) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/mouvements/' + `${idmouvement}`;
        return this.http.get(api, { headers: headers });
    }
    addMouvement(credential) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/mouvements/';
        return this.http.post(api, credential, { headers: headers });
    }
    getMouvementsAssociation(id_association) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/mouvementsassociation/' + `${id_association}`;
        return this.http.get(api, { headers: headers });
    }
    /*---------------------------BESOINS---------------------*/
    getBesoinsNonResolusAssociation(id_association) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/besoinsnonresolusassociation/${id_association}`;
        return this.http.get(api, { headers: headers });
    }
    getBesoinsResolusAssociation(id_association) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/besoinsresolusassociation/${id_association}`;
        return this.http.get(api, { headers: headers });
    }
    getBesoins() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/besoins';
        return this.http.get(api, { headers: headers });
    }
    getOneBesoin(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/besoins' + `/${id}`;
        return this.http.get(api, { headers: headers });
    }
    getBesoinsAssociation(id_besoin) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/besoinsassociation' + `/${id_besoin}`;
        return this.http.get(api, { headers: headers });
    }
    /*--------------------------NOTIFICATION--------------------------*/
    getNotificationDonateur(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/notifications' + `/${id}`;
        return this.http.get(api, { headers: headers });
    }
    setNotification(credential) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/notifications/';
        return this.http.post(api, credential, { headers: headers });
    }
    vueNotification(id_donateur, id_notification) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + `/notificationVue/${id_donateur}/${id_notification}`;
        return this.http.post(api, {}, { headers: headers });
    }
};
ManageDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ManageDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ManageDataService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiURL: 'http://192.168.8.105:8000/api',
    storage: 'http://192.168.8.105:8000/storage/',
    map: 'AIzaSyAioYBvV5rpt9NIAAhyN4ZcxxbLamS052E'
    // apiURL:'http://192.168.8.105:8000/api'
};
// apiURL:' http://bridge.fiacademy.org/api',
// storage :'http://bridge.fiacademy.org/',
// map:'AIzaSyAioYBvV5rpt9NIAAhyN4ZcxxbLamS052E'
// apiURL:' http://192.168.8.105:8000/api',
// storage :'http://192.168.8.105:8000/storage/',
// map:'AIzaSyAioYBvV5rpt9NIAAhyN4ZcxxbLamS052E'
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_parse-26477881_js-node_modules_ionic_core_dist_esm_t-6bed99",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_parse-26477881_js-node_modules_ionic_core_dist_esm_t-6bed99",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map