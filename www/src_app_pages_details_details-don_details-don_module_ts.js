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
        /*--------------------------------VARIABLES--------------------------------*/
        this.id = null;
        this.detail_id = null;
        this.don = null;
        this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.storage;
        this.nbreReserve = null;
        this.reserve = false;
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
        javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"].addDefaultLocale(javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_5__["default"]);
        this.id = JSON.parse(localStorage.getItem('mydata')).id;
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
    timeAgo(created_at) {
        const timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"]('fr-EU');
        const elapsedTime = timeAgo.format(new Date(Date.parse(created_at) - 60 * 1000));
        return elapsedTime;
    }
    image(don) {
        let url = '';
        don.media.length > 0 ? url = `${this.storage + don.media[0].filePath}` : url = '../../../../../../assets/images/empty.webp';
        return url;
    }
    get myId() {
        return this.id;
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
            data.nombre_reserve > 0 ? this.reserve = true : this.reserve = false;
            this.don = data;
            javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"].addDefaultLocale(javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_5__["default"]);
            const timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"]('fr-EU');
            this.elapsedTime = timeAgo.format(new Date(Date.parse(data.created_at)));
            this.manageDataService.nbreInteressesDon(data.id).toPromise().then((data) => {
                this.nbreReserve = data.nb;
            });
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

module.exports = ".imgProduct {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMtZG9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7QUFBSiIsImZpbGUiOiJkZXRhaWxzLWRvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pbWdQcm9kdWN0e1xuICAgIHdpZHRoOiAxMDAlO1xuIH0iXX0= */";

/***/ }),

/***/ 203:
/*!****************************************************************************!*\
  !*** ./src/app/pages/details/details-don/details-don.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content color=\"danger\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-row slot=\"fixed\" style=\"width: 100%;\">\n    <ion-fab style=\"margin-top:5px\" horizontal=\"start\" (click)=\"navBack()\">\n      <ion-fab-button color=\"light\">\n          <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"danger\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    <ion-button *ngIf=\"nbreReserve>0\" style=\"position:absolute;right:5%;margin-top:4%;display: flex;flex-direction:row;\" color=\"danger\">\n      <ion-icon name=\"people-outline\"></ion-icon>\n    <ion-text style=\"font-weight:bolder;font-size:1.3em;color:white;margin-top:5px;margin-left:5px\">{{nbreReserve}}</ion-text>\n    </ion-button>\n    <ion-button *ngIf=\"nbreReserve==0\" style=\"position:absolute;right:5%;margin-top:4%;display: flex;flex-direction:row;\" color=\"success\">\n      <ion-icon name=\"people-outline\"></ion-icon>\n    <ion-text style=\"font-weight:bolder;font-size:1.3em;color:white;margin-top:5px;margin-left:5px\">{{nbreReserve}}</ion-text>\n    </ion-button>\n    \n    </ion-row>\n    <div *ngIf=\"reserve\" style=\"position: absolute;margin-top:25%;background-color:#ec566a;padding:10%;opacity:0.5\">\n      <ion-text style=\"font-weight:bold;color:white;font-size: 1.5rem;\">Reserve</ion-text>\n      </div>\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" *ngIf=\"don!=null\" style=\"height:35%;position:relative;opacity: {{reserve?0.5:1}}\">\n      \n      <ion-slide *ngFor=\"let img of don.media\" >\n        <ion-img\n        [src]=\"storage+img.filePath\"\n          class=\"imgProduct\"></ion-img>\n      </ion-slide>\n      <ion-slide *ngIf=\"don.media.length<1\">\n        <ion-img src=\"../../../../assets/images/empty.webp\"  class=\"imgProduct\">\n        </ion-img>\n      </ion-slide>\n      \n    </ion-slides>\n     <ion-grid *ngIf=\"don!=null\" style=\"margin-top:0;padding-top:0\">\n        <ion-item lines=\"none\">\n          <ion-text style=\"font-weight: bold;font-size:1.3em\">{{don.titre}}</ion-text>\n          <ion-icon name=\"create-outline\" color=\"danger\" size=\"large\" slot=\"end\" *ngIf=\"myId==don.donateur.id\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\"> \n          <ion-text style=\"font-weight: bold;color:gray\"> publie <strong style=\"color:black\">{{elapsedTime}}</strong></ion-text>\n        </ion-item>\n        <ion-item lines=\"none\" style=\"text-align:left\">\n          <ion-title style=\"font-weight: bold;padding-left: 0;\">Informations</ion-title>\n        </ion-item>\n        <ion-item lines=\"none\" style=\"margin-bottom:2.5%\">\n        <ion-col size=\"8\" style=\"margin-top:0;padding-top:0\">\n         <ion-row><ion-text style=\"font-weight:bold\">Categorie</ion-text></ion-row>\n         <ion-text style=\"color:rgb(0, 0, 0);margin-top:10px ;\">{{don.category}}</ion-text>\n        </ion-col>\n        <ion-col size=\"4\" style=\"margin-top:0;padding-top:0\">\n          <ion-row><ion-text style=\"font-weight:bold\">Etat</ion-text></ion-row>\n          <ion-text style=\"color:rgb(0, 0, 0);margin-top:10px ;\">{{don.etat}}</ion-text>\n        </ion-col>\n        </ion-item>\n        <ion-item lines=\"none\" style=\"margin-bottom:2.5%\">\n          <ion-col size=\"12\" style=\"margin-top:0;padding-top:0\">\n           <ion-row><ion-text style=\"font-weight:bold\">Lieu</ion-text></ion-row>\n           <ion-text style=\"color:rgb(0, 0, 0);margin-top:5px\">{{don.adresse}}</ion-text>\n          </ion-col>\n          </ion-item>\n          <ion-item lines=\"none\" style=\"text-align:left\">\n            <ion-title style=\"font-weight: bold;padding-left: 0;\">Description</ion-title>\n          </ion-item>\n          <ion-item lines=\"none\" style=\"margin-bottom:5%\">\n            <ion-col size=\"12\">\n            <ion-text style=\"color:rgb(0, 0, 0);margin-top:10%;\">{{don.description}}</ion-text>\n            </ion-col>\n          </ion-item>\n          <ion-item lines=\"none\" style=\"text-align:left;margin-bottom:5%\">\n            <ion-col size=\"12\" style=\"margin-left:0;padding-left:0\">\n              <ion-row><ion-title style=\"font-weight: bold;padding-left: 0;\">Diponibilite</ion-title></ion-row>\n             <ion-text style=\"color:rgb(0, 0, 0);margin-top:25px;margin-left:2%\">Le week-end </ion-text>\n             </ion-col>\n          </ion-item>\n          \n          <ion-item style=\"width:100%;border-bottom:1px solid rgb(91, 91, 91);border-bottom-style:dashed;border-top:1px solid rgb(91, 91, 91);border-top-style:dashed;\" lines=\"none\" \n          [routerLink]=\"['/profil-donateur',don.donateur.id]\">\n            <ion-thumbnail slot=\"start\" >\n              <img style=\"border-radius:10px\" [src]=\"don.donateur.media.length>0?storage+don.donateur.media[0].filePath:'assets/images/user.png'\" />\n            </ion-thumbnail>\n            <ion-col style=\"text-align: left\">\n              <ion-row>\n               <ion-text style=\"font-weight: bold\">{{don.donateur.name}} {{don.donateur.surname}}</ion-text>\n              </ion-row>\n              <ion-row>\n                <ion-text style=\"color:gray\"> donateur/necessiteux</ion-text>\n              </ion-row>\n            </ion-col>\n            <ion-icon name=\"chevron-forward-outline\" size=\"large\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item lines=\"none\" style=\"text-align:left\">\n            <ion-title style=\"font-weight: bold;padding-left: 0;\">Partager cette annonce</ion-title>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-icon name=\"logo-whatsapp\" color=\"success\" size=\"large\"></ion-icon>\n            <ion-icon name=\"ellipsis-horizontal-circle-sharp\" color=\"dark\" size=\"large\" style=\"margin-left:10px\"></ion-icon>\n          </ion-item>\n          <ion-item lines=\"none\" style=\"text-align:left\">\n            <ion-title style=\"font-weight: bold;padding-left: 0;\">Localisation</ion-title>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d63693.27239988237!2d11.5080475!3d3.8467449!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1661874465059!5m2!1sfr!2scm\" width=\"600\" height=\"250\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\n          </ion-item>\n\n          <ion-item lines=\"none\" style=\"text-align:left\">\n            <ion-title style=\"font-weight: bold;padding-left: 0;\">Annonces Similaires</ion-title>\n          </ion-item>\n          <ion-grid style=\"display: flex; flex-wrap:wrap;justify-content: space-between;\">\n            <div *ngFor=\"let Don of donsSimilaires\" style=\"width:50%\">\n              <ion-card  [routerLink]=\"['details',don.id]\"style=\"width:90%;position: relative;\" >\n                <div *ngIf=\"don.nombre_reserve>0\" style=\"position: absolute;top:45%; height: 10%;width: 50%;background-color:#ec566a\">\n                <ion-text style=\"font-weight:bold;position:absolute;color:white;text-align:center;margin-top:5%;margin-left: 5%;\">Reserve</ion-text>\n                </div>\n                <div style=\"width:100%;height:150px;margin:0;padding:0;background-size:cover; opacity: {{don.nombre_reserve>0?0.5:1}};\n                background-image: url({{image(don)}});\">   \n                </div>\n                  <ion-row style=\"margin-top:2%\">\n                    <ion-text style=\"font-weight: bolder;font-size:1.3em;margin-left:2%;width:100%;padding:2%\"color=\"dark\">\n                      {{don.titre | slice:0:20}}{{don.titre.length>20?'...':''}}</ion-text>\n                  </ion-row>\n                  <ion-text style=\"font-weight: bolder;font-size:1.3em;width:100%;margin-left:2%;padding:2%\"color=\"medium\">\n                    {{don.adresse | slice:0:18}}{{don.adresse.length>18?'...':''}}</ion-text>\n                  <ion-row style=\"margin-top:10px;padding:0;width:100%;display: flex;\">\n                    <ion-col size=\"2\" style=\"padding-right:0;text-align: right;\"><ion-icon name=\"timer-outline\" color=\"dark\"style=\"font-weight:bold\" size=\"medium\" style=\"padding-right:0\"></ion-icon></ion-col>\n                    <ion-col style=\"padding-left:0\"> <ion-text style=\"margin-left:8px;font-size:1.1em;font-weight: bolder; padding:0;width:100%;\" color=\"dark\">{{timeAgo(don.created_at) | slice:7}}</ion-text></ion-col> \n                </ion-row>\n                    \n              </ion-card>\n          </div>\n          </ion-grid>\n     </ion-grid>\n\n     <div style=\"margin-bottom:10%\"></div>\n</ion-content>\n<ion-card style=\"padding:0;margin:0\" *ngIf=\"don!=null&&myId!=don.donateur.id\">\n  <ion-row>\n    <ion-col size=\"2\">\n      <ion-thumbnail>\n      <img style=\"border-radius:10px\"  [src]=\"don.donateur.media.length>0?storage+don.donateur.media[0].filePath:'assets/images/user.png'\" />\n      </ion-thumbnail>\n    </ion-col>\n    <ion-col size=\"5\"class=\"ion-margin-top\">\n            <ion-text style=\"font-weight: bold\">{{don.donateur.name}} {{don.donateur.surname}}</ion-text>\n    </ion-col>\n    <ion-col size=\"5\">\n      <ion-button expand=\"block\" color=\"danger\" [routerLink]=\"['/salon',don.donateur.id,myId,0,don.id]\">Contacter</ion-button>\n    </ion-col>\n    \n      \n  </ion-row>\n  \n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details_details-don_details-don_module_ts.js.map