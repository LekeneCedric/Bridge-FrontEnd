"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_details_details-don_details-don_module_ts"],{

/***/ 4403:
/*!*************************************************************************!*\
  !*** ./src/app/pages/details/details-don/details-don-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsDonPageRoutingModule": () => (/* binding */ DetailsDonPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _details_don_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-don.page */ 5609);




const routes = [
    {
        path: '',
        component: _details_don_page__WEBPACK_IMPORTED_MODULE_0__.DetailsDonPage
    }
];
let DetailsDonPageRoutingModule = class DetailsDonPageRoutingModule {
};
DetailsDonPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsDonPageRoutingModule);



/***/ }),

/***/ 8975:
/*!*****************************************************************!*\
  !*** ./src/app/pages/details/details-don/details-don.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsDonPageModule": () => (/* binding */ DetailsDonPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _details_don_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-don-routing.module */ 4403);
/* harmony import */ var _details_don_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-don.page */ 5609);







let DetailsDonPageModule = class DetailsDonPageModule {
};
DetailsDonPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _details_don_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsDonPageRoutingModule
        ],
        declarations: [_details_don_page__WEBPACK_IMPORTED_MODULE_1__.DetailsDonPage]
    })
], DetailsDonPageModule);



/***/ }),

/***/ 5609:
/*!***************************************************************!*\
  !*** ./src/app/pages/details/details-don/details-don.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsDonPage": () => (/* binding */ DetailsDonPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _details_don_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-don.page.html?ngResource */ 203);
/* harmony import */ var _details_don_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-don.page.scss?ngResource */ 2005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! javascript-time-ago */ 488);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! javascript-time-ago/locale/fr */ 8996);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);










let DetailsDonPage = class DetailsDonPage {
    constructor(navCtrl, route, manageDataService) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.manageDataService = manageDataService;
        this.detail_id = null;
        this.don = null;
        this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.storage;
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
        this.donsSimilaires = [];
        this.detail_id = this.route.snapshot.params.id;
        this.getDon();
        setTimeout(() => {
            this.getDonSimilaires();
        }, 2000);
        const tabBar = document.getElementById('app-tab-bar');
        if (tabBar !== null) {
            tabBar.style.display = 'none';
        }
    }
    /*--------------------------------FUNCTIONS--------------------------------*/
    image(don) {
        let url = '';
        don.media.length > 1 ? url = `${this.storage + don.media[0].filePath.toString()}` : url = '../../../../../../assets/images/empty.webp';
        return `url(${url})`;
    }
    navBack() {
        this.navCtrl.back();
    }
    doRefresh(event) {
        setTimeout(() => {
            this.ngOnInit();
            event.target.complete();
        }, 500);
    }
    getDon() {
        this.manageDataService.getOneDon(this.detail_id).toPromise()
            .then((data) => {
            this.don = data;
            javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"].addDefaultLocale(javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_5__["default"]);
            const timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"]('fr-EU');
            this.elapsedTime = timeAgo.format(new Date(Date.parse(data.created_at)));
        })
            .catch(err => {
            this.navBack();
        });
    }
    getDonSimilaires() {
        const id = this.don.id;
        const category = this.don.category;
        this.manageDataService.getDonSimilaires(id, category).toPromise().then((data) => {
            data.forEach((don) => {
                this.donsSimilaires.unshift(don);
            });
        }).catch((err) => {
            console.log(err);
        });
    }
};
DetailsDonPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__.ManageDataService }
];
DetailsDonPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-details-don',
        template: _details_don_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_details_don_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailsDonPage);



/***/ }),

/***/ 2005:
/*!****************************************************************************!*\
  !*** ./src/app/pages/details/details-don/details-don.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Roboto Mono\", monospace;\n}\n\n.imgProduct {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMtZG9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUoiLCJmaWxlIjoiZGV0YWlscy1kb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlOztcbn1cbi5pbWdQcm9kdWN0e1xuICAgIHdpZHRoOiAxMDAlO1xuIH0iXX0= */";

/***/ }),

/***/ 203:
/*!****************************************************************************!*\
  !*** ./src/app/pages/details/details-don/details-don.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content color=\"danger\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-row slot=\"fixed\">\n    <ion-fab style=\"margin-top:5px\" horizontal=\"start\" (click)=\"navBack()\">\n      <ion-fab-button color=\"light\">\n          <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"danger\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    </ion-row>\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" *ngIf=\"don!=null\" style=\"height:45%\">\n      <ion-slide *ngFor=\"let img of don.media\">\n        <ion-img\n        [src]=\"storage+img.filePath\"\n          class=\"imgProduct\"></ion-img>\n      </ion-slide>\n      <ion-slide *ngIf=\"don.media.length<1\">\n        <ion-img src=\"../../../../assets/images/empty.webp\"  class=\"imgProduct\">\n\n        </ion-img>\n      </ion-slide>\n    </ion-slides>\n     <ion-grid *ngIf=\"don!=null\">\n        <ion-item lines=\"none\">\n          <ion-text style=\"font-weight: bold;font-size:1.3em\">{{don.titre}}</ion-text>\n          <ion-icon name=\"heart-outline\" size=\"large\" slot=\"end\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\"> \n          <ion-text style=\"font-weight: bold\"> publie {{elapsedTime}}</ion-text>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <img src=\"../../../../assets/images/information.png\" alt=\"\">\n          <ion-title style=\"font-weight: bold\">Informations</ion-title>\n        </ion-item>\n        <ion-item lines=\"none\" style=\"margin-bottom:5%\">\n        <ion-col size=\"8\">\n         <ion-row><ion-text>Categorie</ion-text></ion-row>\n         <ion-text style=\"color:gray;margin-top:10px ;\">{{don.category}}</ion-text>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-row><ion-text>Etat</ion-text></ion-row>\n          <ion-text style=\"color:gray;margin-top:10px ;\">{{don.etat}}</ion-text>\n        </ion-col>\n        </ion-item>\n        <ion-item lines=\"none\" style=\"margin-bottom:5%\">\n          <ion-col size=\"7\">\n           <ion-row><ion-text>Lieu</ion-text></ion-row>\n           <ion-text style=\"color:gray;margin-top:10px\">{{don.adresse}}</ion-text>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-row><ion-text>Disponibilite</ion-text></ion-row>\n           <ion-text style=\"color:gray;margin-top:10px ;\">week-end</ion-text>\n          </ion-col>\n          </ion-item>\n          <ion-item lines=\"none\" style=\"margin-bottom:5%\">\n            <ion-col size=\"12\">\n             <ion-row><ion-text>Description</ion-text></ion-row>\n            <ion-text style=\"color:gray;margin-top:10%;\">{{don.description}}</ion-text>\n            </ion-col>\n          </ion-item>\n          <ion-item style=\"width:100%;border-bottom:1px solid rgb(91, 91, 91);border-bottom-style:dashed;border-top:1px solid rgb(91, 91, 91);border-top-style:dashed;\" lines=\"none\" \n          [routerLink]=\"['/profil-donateur',don.donateur.id]\">\n            <ion-thumbnail slot=\"start\" >\n              <img style=\"border-radius:10px\" [src]=\"storage+don.donateur.media[0].filePath\" />\n            </ion-thumbnail>\n            <ion-col style=\"text-align: left\">\n              <ion-row>\n               <ion-text style=\"font-weight: bold\">{{don.donateur.name}} {{don.donateur.surname}}</ion-text>\n              </ion-row>\n              <ion-row>\n                <ion-text style=\"color:gray\"> donateur/necessiteux</ion-text>\n              </ion-row>\n            </ion-col>\n            <ion-icon name=\"chevron-forward-outline\" size=\"large\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item lines=\"none\">\n          <ion-text style=\"font-weight: bold\">Partager cette annonce</ion-text>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-icon name=\"logo-whatsapp\" color=\"success\" size=\"large\"></ion-icon>\n            <ion-icon name=\"ellipsis-horizontal-circle-sharp\" color=\"dark\" size=\"large\" style=\"margin-left:10px\"></ion-icon>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-text style=\"font-weight: bold\">Localisation</ion-text>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d63693.27239988237!2d11.5080475!3d3.8467449!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1661874465059!5m2!1sfr!2scm\" width=\"600\" height=\"250\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n            <ion-text style=\"font-weight: bold\">Annonces similaires</ion-text>\n          </ion-item>\n          <ion-grid style=\"display: flex; flex-wrap:wrap;justify-content: space-between;\">\n            <div *ngFor=\"let don of donsSimilaires\" style=\"width:50%\">\n            <ion-card  [routerLink]=\"['/menu/dons/details',don.id]\"style=\"width:90%\">\n              <div style=\"width:100%;height:150px;margin:0;padding:0;background-size:cover;\"\n              [style.background-image]=\"image(don)\"\n              >\n                \n              </div>\n                <ion-item>\n                  <ion-text style=\"font-weight: bold\">{{don.titre | slice:0:20}}{{don.titre.length>20?'...':''}}</ion-text>\n                </ion-item>\n            <ion-item>\n              <ion-icon name=\"location-outline\" color=\"danger\"></ion-icon>\n              <ion-label>{{don.adresse}}</ion-label>\n          </ion-item>\n            </ion-card>\n          </div>\n          </ion-grid>\n     </ion-grid>\n\n     <div style=\"margin-bottom:10%\"></div>\n</ion-content>\n<ion-card style=\"padding:0;margin:0\" *ngIf=\"don!=null\">\n  <ion-row>\n    <ion-col size=\"2\">\n      <ion-thumbnail>\n      <img style=\"border-radius:10px\" [src]=\"storage+don.donateur.media[0].filePath\" />\n      </ion-thumbnail>\n    </ion-col>\n    <ion-col size=\"5\"class=\"ion-margin-top\">\n            <ion-text style=\"font-weight: bold\">{{don.donateur.name}} {{don.donateur.surname}}</ion-text>\n    </ion-col>\n    <ion-col size=\"5\">\n      <ion-button expand=\"block\" color=\"danger\" routerLink=\"/menu/dons\">Contacter</ion-button>\n    </ion-col>\n    \n      \n  </ion-row>\n  \n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details_details-don_details-don_module_ts.js.map