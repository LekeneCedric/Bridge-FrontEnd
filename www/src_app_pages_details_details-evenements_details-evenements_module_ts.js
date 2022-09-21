"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_details_details-evenements_details-evenements_module_ts"],{

/***/ 8774:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/details/details-evenements/details-evenements-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsEvenementsPageRoutingModule": () => (/* binding */ DetailsEvenementsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _details_evenements_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-evenements.page */ 5013);




const routes = [
    {
        path: '',
        component: _details_evenements_page__WEBPACK_IMPORTED_MODULE_0__.DetailsEvenementsPage
    }
];
let DetailsEvenementsPageRoutingModule = class DetailsEvenementsPageRoutingModule {
};
DetailsEvenementsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsEvenementsPageRoutingModule);



/***/ }),

/***/ 3077:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/details/details-evenements/details-evenements.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsEvenementsPageModule": () => (/* binding */ DetailsEvenementsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _details_evenements_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-evenements-routing.module */ 8774);
/* harmony import */ var _details_evenements_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-evenements.page */ 5013);







let DetailsEvenementsPageModule = class DetailsEvenementsPageModule {
};
DetailsEvenementsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _details_evenements_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsEvenementsPageRoutingModule
        ],
        declarations: [_details_evenements_page__WEBPACK_IMPORTED_MODULE_1__.DetailsEvenementsPage]
    })
], DetailsEvenementsPageModule);



/***/ }),

/***/ 5013:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/details/details-evenements/details-evenements.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsEvenementsPage": () => (/* binding */ DetailsEvenementsPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _details_evenements_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-evenements.page.html?ngResource */ 445);
/* harmony import */ var _details_evenements_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details-evenements.page.scss?ngResource */ 3502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! javascript-time-ago */ 488);
/* harmony import */ var javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! javascript-time-ago/locale/fr */ 8996);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);











let DetailsEvenementsPage = class DetailsEvenementsPage {
  constructor(navCtrl, manageDataService, loadingController, route) {
    this.navCtrl = navCtrl;
    this.manageDataService = manageDataService;
    this.loadingController = loadingController;
    this.route = route;
    this.Mouvement = null;
    this.id = null;
    this.myId = null;
    this.imParticipate = false;
    this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.storage;
    this.slideOpts = {
      initialSlide: 0,
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        stopOnLastSlide: false
      }
    };
  }

  ngOnInit() {
    this.myId = JSON.parse(localStorage.getItem('mydata')).id;
    javascript_time_ago__WEBPACK_IMPORTED_MODULE_5__["default"].addDefaultLocale(javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_6__["default"]);
    this.id = this.route.snapshot.params['id'];
    this.MouvementInfo();
    this.manageDataService.imParticipate(this.myId, this.id).toPromise().then(data => {
      console.log(data.message);
      data.message == 'reserve' ? this.imParticipate = true : this.imParticipate = false;
      console.log(this.imParticipate);
    });
    const tabBar = document.getElementById('app-tab-bar');

    if (tabBar !== null) {
      tabBar.style.display = 'none';
    }
  }
  /*----------------------------*/


  annulerParticipation() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingController.create({
        spinner: 'bubbles',
        message: 'enregistrement....',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      yield loading.present();

      _this.manageDataService.annulerParticipation(_this.myId, _this.id).toPromise().then( /*#__PURE__*/function () {
        var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          yield loading.dismiss();

          _this.ngOnInit();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()).catch( /*#__PURE__*/(0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield loading.dismiss();
      }));
    })();
  }

  participerMouvement() {
    var _this2 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingController.create({
        spinner: 'bubbles',
        message: 'enregistrement....',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      yield loading.present();
      const data = {
        mouvement_id: _this2.Mouvement.id,
        donateur_id: _this2.myId
      };

      _this2.manageDataService.participerMouvement(data).toPromise().then( /*#__PURE__*/function () {
        var _ref3 = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          yield loading.dismiss();

          _this2.ngOnInit();
        });

        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }()).catch( /*#__PURE__*/(0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield loading.dismiss();
      }));
    })();
  }

  MouvementInfo() {
    this.manageDataService.getOneMouvement(this.id).toPromise().then(data => {
      this.Mouvement = data;
      javascript_time_ago__WEBPACK_IMPORTED_MODULE_5__["default"].addDefaultLocale(javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_6__["default"]);
      const timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_5__["default"]('fr-EU');
      this.elapsedTime = timeAgo.format(new Date(Date.parse(data.created_at)));
    });
  }

  timeAgo(created_at) {
    const timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_5__["default"]('fr-EU');
    const elapsedTime = timeAgo.format(new Date(Date.parse(created_at) - 60 * 1000));
    return elapsedTime;
  }

  get IdMouvement() {
    return this.id;
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 500);
  }

  navBack() {
    this.navCtrl.back();
  }

};

DetailsEvenementsPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
}, {
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__.ManageDataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
}];

DetailsEvenementsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-details-evenements',
  template: _details_evenements_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_details_evenements_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DetailsEvenementsPage);


/***/ }),

/***/ 3502:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/details/details-evenements/details-evenements.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLWV2ZW5lbWVudHMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 445:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/details/details-evenements/details-evenements.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-row slot=\"fixed\">\n    <ion-fab style=\"margin-top:5px\" horizontal=\"start\" (click)=\"navBack()\">\n      <ion-fab-button color=\"light\">\n          <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"danger\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    <ion-fab style=\"margin-top:5px\" horizontal=\"end\" (click)=\"navBack()\">\n      <ion-fab-button color=\"light\">\n        <ion-icon name=\"heart-outline\" size=\"large\" slot=\"end\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n    \n    </ion-row>\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" *ngIf=\"Mouvement!=null\">\n      <ion-slide *ngFor=\"let img of Mouvement.media\" style=\"max-height:150px\">\n        <ion-img\n        [src]=\"storage+img.filePath\"\n          class=\"imgProduct\"></ion-img>\n      </ion-slide>\n      <ion-slide *ngIf=\"Mouvement.media.length<1\" style=\"background-image:url('../../../../assets/images/empty.webp')\">\n      </ion-slide>\n    </ion-slides>\n     <ion-grid style=\"width: 100%;padding:0;margin:0\" *ngIf=\"Mouvement !=null\">\n        <ion-item lines=\"none\" style=\"--background:#3880ff;\">\n          <ion-text style=\"font-weight: bold;font-size:1.3em\" color=\"light\" >{{Mouvement.intitule}}</ion-text>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-text style=\"color:#3880ff;\"> <strong>publie  &ensp;</strong><strong style=\"color:#3880ff\">{{elapsedTime}}</strong> </ion-text>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-text style=\"color:gray;width:auto\" slot=\"start\"><strong>Debut &ensp; :</strong> </ion-text>\n          <ion-text style=\"color:gray;font-weight: bold;\" slot=\"start\">{{Mouvement.date_rencontre | date:'MMM d, y'}} a {{Mouvement.heure_debut}}</ion-text>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-text style=\"color:gray;width:auto\" slot=\"start\"><strong>Fin &ensp; :</strong></ion-text>\n          <ion-text style=\"color:gray;font-weight: bold;\" slot=\"start\">{{Mouvement.date_rencontre | date:'MMM d, y'}} a {{Mouvement.heure_fin}}</ion-text>\n        </ion-item>\n        <ion-item>\n          <img src=\"../../../../assets//images/location.png\" alt=\"\">\n          <ion-text style=\"color:gray;font-weight: bold;\" >{{Mouvement.adresse}}Cameroun , yaounde, cite-verte</ion-text>\n        </ion-item>\n          <ion-item lines=\"none\" style=\"margin-top:5%;padding:0\">\n            <ion-col size=\"12\" style=\"margin:0;padding:0\">\n            <ion-text style=\"color:gray;margin-top:10px ;\">{{Mouvement.description}}</ion-text>\n            </ion-col>\n          </ion-item>\n          <div style=\"margin-top:15px\">\n            <iframe style=\"height:150px;\" src=\"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d31846.589784163676!2d11.504356780700759!3d3.8479866401768335!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1663688996918!5m2!1sfr!2scm\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\n          </div>\n     </ion-grid>\n     <div style=\"margin-bottom:10%\"></div>\n</ion-content>\n<ion-card style=\"padding:0;margin:0\">\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button color=\"light\">\n        <ion-icon name=\"gift-outline\" style=\"margin-bottom:5%\" color=\"danger\"></ion-icon>\n        <ion-text style=\"margin-left:10px;font-weight: bold;\" color=\"warning\">Soutenir</ion-text>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"6\" *ngIf=\"imParticipate==false\">\n      <ion-button expand=\"block\" color=\"primary\" (click)=\"participerMouvement()\"> Participer</ion-button>\n    </ion-col>\n    <ion-col size=\"6\" *ngIf=\"imParticipate==true\">\n      <ion-button expand=\"block\" color=\"danger\" (click)=\"annulerParticipation()\"> Annuler</ion-button>\n    </ion-col>\n    \n      \n  </ion-row>\n  \n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details_details-evenements_details-evenements_module_ts.js.map