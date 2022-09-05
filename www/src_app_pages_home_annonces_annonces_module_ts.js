"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_annonces_annonces_module_ts"],{

/***/ 7518:
/*!****************************************************************!*\
  !*** ./src/app/pages/home/annonces/annonces-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnoncesPageRoutingModule": () => (/* binding */ AnnoncesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _annonces_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./annonces.page */ 1643);




const routes = [
    {
        path: '',
        component: _annonces_page__WEBPACK_IMPORTED_MODULE_0__.AnnoncesPage
    },
    {
        path: 'detailsAnnonce/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_details_details-annonce_details-annonce_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../details/details-annonce/details-annonce.module */ 328)).then(m => m.DetailsAnnoncePageModule)
    },
    {
        path: 'detailsEvenement/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_details_details-evenements_details-evenements_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../details/details-evenements/details-evenements.module */ 3077)).then(m => m.DetailsEvenementsPageModule)
    }
];
let AnnoncesPageRoutingModule = class AnnoncesPageRoutingModule {
};
AnnoncesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AnnoncesPageRoutingModule);



/***/ }),

/***/ 5034:
/*!********************************************************!*\
  !*** ./src/app/pages/home/annonces/annonces.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnoncesPageModule": () => (/* binding */ AnnoncesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _annonces_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./annonces-routing.module */ 7518);
/* harmony import */ var _annonces_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./annonces.page */ 1643);







let AnnoncesPageModule = class AnnoncesPageModule {
};
AnnoncesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _annonces_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnnoncesPageRoutingModule
        ],
        declarations: [_annonces_page__WEBPACK_IMPORTED_MODULE_1__.AnnoncesPage]
    })
], AnnoncesPageModule);



/***/ }),

/***/ 1643:
/*!******************************************************!*\
  !*** ./src/app/pages/home/annonces/annonces.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnoncesPage": () => (/* binding */ AnnoncesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _annonces_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./annonces.page.html?ngResource */ 5837);
/* harmony import */ var _annonces_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./annonces.page.scss?ngResource */ 9460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AnnoncesPage = class AnnoncesPage {
    constructor() {
        this.id = null;
        this.selectedSegment = 'annonces';
        this.testtext = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        this.id = JSON.parse(localStorage.getItem('mydata')).id;
        setInterval(() => {
            const tabBar = document.getElementById('app-tab-bar');
            tabBar.style.display = 'flex';
        }, 100);
    }
    ngOnInit() {
    }
    segmentChanged(event) {
        this.selectedSegment = event.target.value;
    }
};
AnnoncesPage.ctorParameters = () => [];
AnnoncesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-annonces',
        template: _annonces_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_annonces_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AnnoncesPage);



/***/ }),

/***/ 9460:
/*!*******************************************************************!*\
  !*** ./src/app/pages/home/annonces/annonces.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".logo {\n  margin-left: 2%;\n  text-align: left;\n  color: #eb445a;\n  font-family: \"Rubik Glitch\", cursive;\n  font-size: 3em;\n  margin-bottom: 2%;\n}\n\n.title {\n  padding: 0;\n  margin: 0;\n  font-size: 0.7em;\n}\n\nion-chip {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFubm9uY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7QUFFSiIsImZpbGUiOiJhbm5vbmNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5sb2dve1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjZWI0NDVhO1xuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsgR2xpdGNoJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cbi50aXRsZXtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDAuN2VtO1xufVxuaW9uLWNoaXB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */";

/***/ }),

/***/ 5837:
/*!*******************************************************************!*\
  !*** ./src/app/pages/home/annonces/annonces.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-row style=\"width: 100%;\">\n    <ion-col class=\"logo\" size=\"6\">\n      <ion-title class=\"title\">BRIDGE</ion-title>\n      <ion-card-subtitle>Cameroun,yaounde</ion-card-subtitle>\n    </ion-col>\n    <ion-col>\n      <ion-row style=\"width: 100%;\">\n        <ion-col size=\"4\">\n          <ion-icon name=\"settings\"  size=\"large\" color=\"danger\"></ion-icon>\n        </ion-col>\n      <ion-col style=\"text-align: right\" size=\"4\">\n        <ion-icon name=\"notifications\" size=\"large\" color=\"warning\"></ion-icon>\n        <ion-badge color=\"danger\">1</ion-badge>\n      </ion-col>\n      <ion-col style=\"text-align: right\" size=\"4\">\n        <ion-icon name=\"person-circle-outline\" size=\"large\" color=\"danger\" [routerLink]=\"['/profil-donateur',id]\"></ion-icon>\n      </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-segment  scrollable>\n       <ion-chip>\n        <ion-icon name=\"options-outline\" size=\"large\"></ion-icon>\n        <ion-text>Filter</ion-text>\n       </ion-chip>\n       <ion-chip>\n       <ion-text>Category</ion-text>\n       <ion-icon name=\"chevron-down-outline\"></ion-icon>\n       </ion-chip>\n      </ion-segment>\n    </ion-col>\n  </ion-row>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" [value]=\"selectedSegment\" color=\"danger\">\n    <ion-segment-button value=\"annonces\">\n      <ion-label>Annonces</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"evenements\">\n      <ion-label>Evenements</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content>\n    <ion-list *ngIf=\"selectedSegment=='annonces'\">\n      <ion-card *ngFor=\"let card of [1,2,3,4]\" [routerLink]=\"['detailsAnnonce',1]\">\n        <ion-img styl src=\"https://media.ooreka.fr/public/image/ensemble-association-solidarite-aide-main-main-10575538.jpg\"></ion-img>\n        <ion-item style=\"width:100%;\" lines=\"none\">\n          <ion-thumbnail class=\"ion-margin-start\" slot=\"start\" >\n            <img style=\"border-radius:10px\" src=\"https://i.pinimg.com/564x/44/9e/5e/449e5e93c14f34fb7b90559e4f9908ab.jpg\" />\n          </ion-thumbnail>\n          <ion-col style=\"text-align: left\">\n            <ion-row>\n             <ion-text style=\"font-weight: bold\">Les Armandins </ion-text>\n            </ion-row>\n            <ion-row>\n              <ion-text style=\"color:gray\"> association carritative</ion-text>\n            </ion-row>\n          </ion-col>\n        </ion-item>\n        <ion-item style=\"width:100%\" lines=\"none\">\n          <ion-text style=\"font-weight:bold;text-align: center;\">L'orphelinat qui s'est transforme</ion-text>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-text style=\"color:gray\">\n          {{testtext| slice:0:200}}{{testtext.length > 200 ? '&hellip;':'' }}\n          </ion-text>\n        </ion-item>\n        <ion-item lines=\"none\" style=\"width:100%;margin-top: 15px;margin-bottom:15px\">\n          <ion-icon name=\"heart-outline\" size=\"large\"></ion-icon>\n          <ion-chip slot=\"end\" color=\"warning\" style=\"padding: 20px;\">\n              <img src=\"../../../../assets/images/gift.png\">\n              <ion-text >Soutenir</ion-text>\n          </ion-chip>\n        </ion-item>\n      </ion-card>\n    </ion-list>\n  <ion-grid *ngIf=\"selectedSegment=='evenements'\">\n    <ion-card *ngFor=\"let card of [1,2,3,4]\" lines=\"none\" [routerLink]=\"['detailsEvenement',1]\">\n      <ion-img src=\"https://cdn.futura-sciences.com/buildsv6/images/wide1920/f/e/f/fef910bf42_50174338_marche-sportive-lzf-adobe-stock.jpg\"></ion-img>\n      <ion-item style=\"width:100%;\" lines=\"none\">\n        <ion-thumbnail slot=\"start\" >\n          <img style=\"border-radius:10px\" src=\"https://media.ooreka.fr/public/image/ensemble-association-solidarite-aide-main-main-10575538.jpg\" />\n        </ion-thumbnail>\n        <ion-col style=\"text-align: left\">\n          <ion-row>\n           <ion-text style=\"font-weight: bold\">Les Armandins </ion-text>\n          </ion-row>\n          <ion-row>\n            <ion-text style=\"color:gray\"> association carritative</ion-text>\n          </ion-row>\n        </ion-col>\n      </ion-item>\n      <ion-item style=\"width:100%\" lines=\"none\">\n        <ion-text style=\"font-weight:bold;text-align: center;\">L'orphelinat qui s'est transforme</ion-text>\n      </ion-item>\n      <ion-item style=\"width:100%;\" lines=\"none\">\n        <ion-icon name=\"today-outline\" size=\"large\" slot=\"start\"></ion-icon>\n        <ion-text style=\"color:gray\">30-09-2002 | </ion-text>\n        <ion-text style=\"color:gray\">15h35 - 18h00</ion-text>\n      </ion-item>\n      <ion-item style=\"width:100%;\" lines=\"none\"> \n        <img src=\"../../../../assets/images/location.png\" slot=\"start\">\n        <ion-text style=\"color:gray\">yaounde , bastos , marche central</ion-text>\n      </ion-item>\n      <ion-item lines=\"none\" style=\"margin-top:10px\">\n        <ion-text style=\"color:gray\">\n        {{testtext| slice:0:200}}{{testtext.length > 200 ? '&hellip;':'' }}\n        </ion-text>\n      </ion-item>\n      <ion-item lines=\"none\" style=\"width:100%;margin-top: 15px;margin-bottom:15px\">\n        <ion-button expand=\"block\" color=\"success\"> Participer</ion-button>\n        <ion-chip slot=\"end\" color=\"warning\" style=\"padding: 20px;\">\n            <img src=\"../../../../assets/images/gift.png\">\n            <ion-text>Soutenir</ion-text>\n        </ion-chip>\n      </ion-item>\n    </ion-card>\n     </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_annonces_annonces_module_ts.js.map