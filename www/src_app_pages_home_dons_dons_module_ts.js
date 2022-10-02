"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_dons_dons_module_ts"],{

/***/ 59128:
/*!********************************************************!*\
  !*** ./src/app/pages/home/dons/dons-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonsPageRoutingModule": () => (/* binding */ DonsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dons_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dons.page */ 52347);




const routes = [
    {
        path: '',
        component: _dons_page__WEBPACK_IMPORTED_MODULE_0__.DonsPage,
    },
    {
        path: 'details/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_details_details-don_details-don_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../details/details-don/details-don.module */ 18975)).then(m => m.DetailsDonPageModule)
    }
];
let DonsPageRoutingModule = class DonsPageRoutingModule {
};
DonsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DonsPageRoutingModule);



/***/ }),

/***/ 84984:
/*!************************************************!*\
  !*** ./src/app/pages/home/dons/dons.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonsPageModule": () => (/* binding */ DonsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _dons_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dons-routing.module */ 59128);
/* harmony import */ var _dons_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dons.page */ 52347);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 29036);








let DonsPageModule = class DonsPageModule {
};
DonsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _dons_routing_module__WEBPACK_IMPORTED_MODULE_0__.DonsPageRoutingModule
        ],
        providers: [_ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeGeocoder],
        declarations: [_dons_page__WEBPACK_IMPORTED_MODULE_1__.DonsPage]
    })
], DonsPageModule);



/***/ }),

/***/ 52347:
/*!**********************************************!*\
  !*** ./src/app/pages/home/dons/dons.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonsPage": () => (/* binding */ DonsPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dons_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dons.page.html?ngResource */ 47145);
/* harmony import */ var _dons_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dons.page.scss?ngResource */ 40474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 58027);
/* harmony import */ var javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! javascript-time-ago/locale/fr */ 8996);
/* harmony import */ var src_app_modals_modal_category_modal_category_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modals/modal-category/modal-category.page */ 44098);
/* harmony import */ var src_app_modals_modal_etat_modal_etat_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/modal-etat/modal-etat.page */ 20192);
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! javascript-time-ago */ 20488);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 92340);












let DonsPage = class DonsPage {
  constructor(manageDataService, modalCtrl) {
    this.manageDataService = manageDataService;
    this.modalCtrl = modalCtrl;
    /*-----------------------------VARIABLES-----------------------------*/

    this.loadingDons = false;
    this.is_null_Don = false;
    this.myid = null;
    this.dons = [];
    this.donContainer = [];
    this.GeocoderOption = {
      useLocale: true,
      maxResults: 5
    };
    this.selectedCategory = [];
    this.selectedEtat = [];
    this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.storage;
    this.current_page = 1;
    this.next_page = this.current_page;
    this.last_page = null;
    this.myData = {};
    this.notifications = [];
  }

  ngOnInit() {
    this.notifications = [];
    this.loadingDons = true;
    this.myid = JSON.parse(localStorage.getItem('mydata')).id;
    setInterval(() => {
      if (this.loadingDons == true && this.dons.length < 1) {
        this.is_null_Don = true;
      } else if (this.loadingDons == true && this.dons.length > 1) {
        this.is_null_Don = false;
        this.loadingDons = false;
      }
    }, 100);
    setInterval(() => {
      if (this.is_null_Don) {
        if (this.dons.length > 0) {
          this.is_null_Don = false;
          this.loadingDons = false;
        } else {
          this.is_null_Don = true;
          this.loadingDons = false;
        }
      } else if (!this.is_null_Don) {
        if (this.dons.length < 1) {
          this.is_null_Don = true;
          this.loadingDons = false;
        } else {
          this.is_null_Don = false;
          this.loadingDons = false;
        }
      }
    }, 100);
    setTimeout(() => {
      this.dons.length < 1 ? this.is_null_Don = true : this.is_null_Don = false;
      this.loadingDons = false;
    }, 10000);
    this.dons = [];
    this.loadingDons = true;
    this.is_null_Don = false;
    this.myData = JSON.parse(localStorage.getItem('mydata'));
    console.log(this.myData);
    this.current_page = 1;
    this.getDons();
    this.getMyNotifications();
    setInterval(() => {
      const tabBar = document.getElementById('app-tab-bar');
      tabBar.style.display = 'flex';
    }, 100);
    javascript_time_ago__WEBPACK_IMPORTED_MODULE_7__["default"].addDefaultLocale(javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_8__["default"]);
  }
  /*-----------------------------FUNCTIONS-----------------------------*/


  timeAgo(created_at) {
    const timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_7__["default"]('fr-EU');
    const elapsedTime = timeAgo.format(new Date(Date.parse(created_at) - 60 * 1000));
    return elapsedTime;
  }

  get id() {
    return this.myid;
  }

  openModal() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: src_app_modals_modal_category_modal_category_page__WEBPACK_IMPORTED_MODULE_4__.ModalCategoryPage,
        componentProps: {
          selectedCategory: _this.selectedCategory
        },
        breakpoints: [0, 0.65],
        initialBreakpoint: 0.65,
        animated: true,
        handle: true
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role === 'confirm') {
        _this.selectedCategory = data;
        _this.dons = _this.donContainer;
        console.log(_this.selectedCategory);

        if (_this.selectedCategory.length > 0 && _this.selectedEtat.length < 1) {
          _this.dons = _this.donContainer.filter(don => {
            return _this.selectedCategory.includes(don.category);
          });
        } else if (_this.selectedCategory.length > 0 && _this.selectedEtat.length > 0) {
          _this.dons = _this.donContainer.filter(don => {
            return _this.selectedCategory.includes(don.category) && _this.selectedEtat.includes(don.etat);
          });
        } else if (_this.selectedCategory.length < 1 && _this.selectedEtat.length > 0) {
          _this.dons = _this.donContainer.filter(don => {
            return _this.selectedEtat.includes(don.etat);
          });
        }
      }
    })();
  }

  openModalEtat() {
    var _this2 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: src_app_modals_modal_etat_modal_etat_page__WEBPACK_IMPORTED_MODULE_5__.ModalEtatPage,
        componentProps: {
          selectedEtat: _this2.selectedEtat
        },
        mode: 'md',
        breakpoints: [0, 1],
        initialBreakpoint: 0.35,
        animated: true,
        handle: true
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role === 'confirm') {
        _this2.dons = _this2.donContainer;
        _this2.selectedEtat = data;

        if (_this2.selectedCategory.length > 0 && _this2.selectedEtat.length < 1) {
          _this2.dons = _this2.donContainer.filter(don => {
            return _this2.selectedCategory.includes(don.category);
          });
        } else if (_this2.selectedCategory.length > 0 && _this2.selectedEtat.length > 0) {
          _this2.dons = _this2.donContainer.filter(don => {
            return _this2.selectedCategory.includes(don.category) && _this2.selectedEtat.includes(don.etat);
          });
        } else if (_this2.selectedCategory.length < 1 && _this2.selectedEtat.length > 0) {
          _this2.dons = _this2.donContainer.filter(don => {
            return _this2.selectedEtat.includes(don.etat);
          });
        }
      }
    })();
  }

  refreshFilter() {
    console.log(this.donContainer);
    this.dons = this.donContainer;
    this.selectedCategory = [];
    this.selectedEtat = [];
  }

  image(don) {
    let url = '';
    don.media.length > 0 ? url = `${this.storage + don.media[0].filePath}` : url = 'assets/images/empty.webp';
    return url;
  }

  getMyNotifications() {
    this.manageDataService.getNotificationDonateur(this.myid).toPromise().then(data => {
      console.log(data);
      data.forEach(notif => {
        notif.vu == 0 ? this.notifications.push(notif) : null;
      });
    });
  }

  getDons() {
    this.manageDataService.getDons(this.current_page).toPromise().then(data => {
      this.last_page = data.last_page;
      console.log(this.last_page);
      data.data.forEach(don => {
        this.dons.push(don);
        this.donContainer.push(don);
      });
      this.selectedCategory.length > 0 ? this.dons = this.dons.filter(don => {
        console.log(don.category);
        return this.selectedCategory.includes(don.category);
      }) : null;
    }).catch(err => {}).finally(() => {
      this.current_page += 1;
    });
  }

  loadData(event) {
    setTimeout(() => {
      console.log(this.current_page, this.last_page);
      this.current_page <= this.last_page ? this.getDons() : this.current_page;
      event.target.complete();
    }, 500);
  } // public filtre(category:string , etat:string):boolean{
  //   let res:boolean;
  // (this.selectedCategory.includes(category)&&this.selectedEtat.includes(etat))||
  // (this.selectedCategory.includes(category)&&this.selectedEtat.length<1)||
  // (this.selectedCategory.length <1 && this.selectedEtat.includes(etat))||
  // (this.selectedCategory.length<1&&this.selectedEtat.length<1)?res=true:res=false;
  // return res;
  // }


  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 500);
  }

  refresh() {
    this.refreshFilter();
    this.ngOnInit();
  }

};

DonsPage.ctorParameters = () => [{
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__.ManageDataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}];

DonsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-dons',
  template: _dons_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_dons_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DonsPage);


/***/ }),

/***/ 40474:
/*!***********************************************************!*\
  !*** ./src/app/pages/home/dons/dons.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".logo .title {\n  margin-left: 2%;\n  text-align: left;\n  color: #eb445a;\n  font-family: \"Rubik Glitch\";\n  font-size: 2em;\n  margin-bottom: 2%;\n}\n\n.title {\n  padding: 0;\n  margin: 0;\n  font-size: 0.7em;\n}\n\nion-chip {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUE7RUFDSSxtQkFBQTtBQUNKIiwiZmlsZSI6ImRvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XG4gICAgJiAudGl0bGV7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICNlYjQ0NWE7XG4gICAgZm9udC1mYW1pbHk6J1J1YmlrIEdsaXRjaCc7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7fVxufVxuXG4udGl0bGV7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbn1cbmlvbi1jaGlwe1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4iXX0= */";

/***/ }),

/***/ 47145:
/*!***********************************************************!*\
  !*** ./src/app/pages/home/dons/dons.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-row style=\"width: 100%;\">\n    <ion-col class=\"logo\" size=\"10\">\n      <ion-text class=\"title\">BRIDGE</ion-text>\n      \n    </ion-col>\n    <ion-col>\n      <ion-col size=\"2\" style=\"text-align:center;margin-left:5%\" [routerLink]=\"['/notifications',id]\"> \n        <ion-icon name=\"notifications\" size=\"large\" color=\"warning\"></ion-icon>\n        <ion-badge style=\"position:absolute;top:0;right:0\" color=\"danger\" *ngIf=\"notifications.length>0\">{{notifications.length}}</ion-badge>\n      </ion-col>\n    </ion-col>\n    <!-- <ion-col>\n      <ion-row style=\"width:100%\">\n        <ion-col size=\"3\" [routerLink]=\"['/profil-donateur',id]\" style=\"text-align:left;height: 100%;\">\n          <ion-icon name=\"person-circle-outline\" size=\"large\" color=\"danger\" ></ion-icon>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text style=\"color:gray;font-weight: bold;position:absolute;top:30%;\">{{myData.name | slice:0:15}}&ensp;{{myData.surname | slice:0:10}}</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col> -->\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-segment scrollable>\n       <ion-chip style=\"padding:0;border-radius:20%\" color=\"danger\">\n        <ion-icon name=\"options-outline\" color=\"danger\" size=\"large\" style=\"text-align:center;margin-right:5px\"></ion-icon>\n       </ion-chip>\n       <ion-chip (click)=\"openModal()\">\n       <ion-text>Category</ion-text>\n       <ion-badge color=\"danger\" style=\"margin-left:2px\">{{selectedCategory.length}}</ion-badge>\n       <ion-icon name=\"chevron-down-outline\"></ion-icon>\n      </ion-chip>\n       <ion-chip (click)=\"openModalEtat()\">\n        <ion-text>Etat</ion-text>\n        <ion-badge color=\"danger\" style=\"margin-left:2px\">{{selectedEtat.length}}</ion-badge>\n        <ion-icon name=\"chevron-down-outline\"></ion-icon>\n       </ion-chip>\n       <ion-chip class=\"chip\" color=\"success\" (click)=\"refreshFilter()\"  style=\"padding:0;border-radius:100%\">\n        <ion-icon name=\"refresh-outline\" size=\"large\" style=\"margin-left:5px\"></ion-icon>\n        </ion-chip>\n      </ion-segment>\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" class=\"red\">\n    <ion-refresher-content color=\"danger\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-list *ngIf=\"loadingDons == true\">\n    <ion-grid style=\"display: flex; flex-wrap:wrap;justify-content: space-between;\" >\n    <div style=\"width:50%\" *ngFor=\"let i of [1,1,1,1,1,1]\">\n      <ion-card style=\"width:90%\">\n        <ion-thumbnail  style=\"width:100%;height:150px\">\n          <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label style=\"width:100%\" >\n          <h3 class=\"ion-margin-horizontal\">\n            <ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text>\n          </h3>\n          <p class=\"ion-margin-horizontal\">\n            <ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text>\n          </p>\n          <p class=\"ion-margin-horizontal\"> \n            <ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-card>\n  </div>\n</ion-grid>\n  </ion-list>\n  <ion-grid style=\"text-align:center;margin-top:15%\" *ngIf=\"is_null_Don\">\n      <img src=\"../../../../assets/images/no-results.png\" class=\"ion-margin-vertical\">\n      <ion-item lines=\"none\"style=\"text-align:center;width: 100%;\" class=\"ion-margin-vertical\">\n        <ion-text style=\"color:rgb(64, 64, 64);width:100%;text-align:center;\">Aucun don disponible dans cette categorie ou Verifiez votre connexion internet ! </ion-text>\n      </ion-item>\n      <ion-button (click)=\"refresh()\" expand=\"block\" class=\"ion-margin-horizontal\" color=\"danger\" class=\"ion-margin-vertical\" style=\"font-weight:bold;margin-left: 20%;margin-right:20%\">raffraichir la page</ion-button>\n  </ion-grid>\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"danger\">\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button color=\"danger\" routerLink=\"/creation-dons\">\n        <ion-icon name=\"gift-outline\" size=\"large\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"light\" routerLink=\"/creation-demandes\">\n        <ion-icon name=\"hand-left-outline\" size=\"large\" color=\"danger\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-grid style=\"display: flex; flex-wrap:wrap;justify-content: space-between;\" *ngIf=\"!is_null_Don && loadingDons==false\">\n    \n      <div *ngFor=\"let don of dons\" style=\"width:50%\">\n        <ion-card style=\"width:90%;position: relative;\" [routerLink]=\"['/menu/dons/details',don.id]\">\n          <div *ngIf=\"don.nombre_reserve>0\" style=\"position: absolute;top:45%; height: 10%;width: 50%;background-color:#ec566a\">\n          <ion-text style=\"font-weight:bold;position:absolute;color:white;text-align:center;margin-top:5%;margin-left: 5%;\">Reserve</ion-text>\n          </div>\n          <div style=\"width:100%;height:150px;margin:0;padding:0;background-size:cover; opacity: {{don.nombre_reserve>0?0.5:1}};\n          background-image: url({{image(don)}});\">   \n          </div>\n            <ion-row style=\"margin-top:2%\" >\n              <ion-text style=\"font-weight: bolder;font-size:1.3em;margin-left:2%;width:100%;padding:2%\"color=\"dark\">\n                {{don.titre | slice:0:20}}{{don.titre.length>20?'...':''}}</ion-text>\n            </ion-row>\n            <ion-text style=\"font-weight: bolder;font-size:1.3em;width:100%;margin-left:2%;padding:2%\"color=\"medium\" [routerLink]=\"['/menu/dons/details',don.id]\">\n              {{don.adresse | slice:0:20}}{{don.adresse.length>20?'...':''}}</ion-text>\n            <ion-row style=\"margin-top:10px;padding:0;width:100%;display: flex;\" [routerLink]=\"['/menu/dons/details',don.id]\">\n              <ion-col size=\"2\" style=\"padding-right:0;text-align: right;\"><ion-icon name=\"timer-outline\" color=\"dark\"style=\"font-weight:bold\" size=\"medium\" style=\"padding-right:0\"></ion-icon></ion-col>\n              <ion-col style=\"padding-left:0\"> <ion-text style=\"margin-left:8px;font-size:1.1em;font-weight: bolder; padding:0;width:100%;\" color=\"dark\">{{timeAgo(don.created_at) | slice:7}}</ion-text></ion-col> \n          </ion-row>\n        </ion-card>\n    </div>\n  \n<ion-infinite-scroll class=\"scroll-content\" threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"loadData($event)\" >\n  <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"Chargement de dons...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n</ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_dons_dons_module_ts.js.map