"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_messages_reception_reception_module_ts"],{

/***/ 6939:
/*!**********************************************************************!*\
  !*** ./src/app/pages/messages/reception/reception-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionPageRoutingModule": () => (/* binding */ ReceptionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _reception_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reception.page */ 6836);




const routes = [
    {
        path: '',
        component: _reception_page__WEBPACK_IMPORTED_MODULE_0__.ReceptionPage
    }
];
let ReceptionPageRoutingModule = class ReceptionPageRoutingModule {
};
ReceptionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReceptionPageRoutingModule);



/***/ }),

/***/ 4432:
/*!**************************************************************!*\
  !*** ./src/app/pages/messages/reception/reception.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionPageModule": () => (/* binding */ ReceptionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _reception_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reception-routing.module */ 6939);
/* harmony import */ var _reception_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reception.page */ 6836);






let ReceptionPageModule = class ReceptionPageModule {
};
ReceptionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _reception_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReceptionPageRoutingModule
        ],
        declarations: [_reception_page__WEBPACK_IMPORTED_MODULE_1__.ReceptionPage]
    })
], ReceptionPageModule);



/***/ }),

/***/ 6836:
/*!************************************************************!*\
  !*** ./src/app/pages/messages/reception/reception.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceptionPage": () => (/* binding */ ReceptionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reception_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reception.page.html?ngResource */ 9165);
/* harmony import */ var _reception_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reception.page.scss?ngResource */ 2366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);






let ReceptionPage = class ReceptionPage {
    constructor(manageDataService) {
        this.manageDataService = manageDataService;
        /*----------------------------------------VARIABLES----------------------------*/
        this.myId = null;
        this.selectedSegment = 'dons';
        this.salons = [];
        this.storage = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.storage;
    }
    ngOnInit() {
        this.salons = [];
        this.myId = JSON.parse(localStorage.getItem('mydata')).id;
    }
    /*----------------------------------------FUNCTIONS----------------------------*/
    doRefresh(event) {
        setTimeout(() => {
            this.ngOnInit();
            event.target.complete();
        }, 500);
    }
    get id() { return this.myId; }
    ;
    segmentChanged(event) {
        this.selectedSegment = event.target.value;
    }
};
ReceptionPage.ctorParameters = () => [
    { type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__.ManageDataService }
];
ReceptionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-reception',
        template: _reception_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reception_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReceptionPage);



/***/ }),

/***/ 2366:
/*!*************************************************************************!*\
  !*** ./src/app/pages/messages/reception/reception.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNlcHRpb24ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 9165:
/*!*************************************************************************!*\
  !*** ./src/app/pages/messages/reception/reception.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title style=\"font-weight: bold\">Messages</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" class=\"red\">\n    <ion-refresher-content color=\"danger\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" [value]=\"selectedSegment\" color=\"danger\">\n    <ion-segment-button value=\"dons\">\n      <ion-label>Dons</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"reception\">\n      <ion-label>Receptions</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <ion-list  *ngIf=\"selectedSegment=='dons'\">\n    <div *ngFor=\"let salon of salons\" lines=\"none\" [routerLink]=\"['/salon',salon.id_donateur,salon.id_receiver,salon.id_demande==null?0:salon.id_demande,salon.id_don]\">\n      <ion-item *ngIf=\"salon.id_don!=null\" lines=\"none\">\n        <ion-thumbnail slot=\"start\">\n          <img [src]=\"salon.data.media.length>0?storage+salon.data.media[0].filePath:'../../../../assets/images/full-moon.png'\" style=\"border-radius:10px\">\n        </ion-thumbnail>\n        <ion-col>\n          <ion-row style=\"width:100%\">\n          <ion-text>\n            {{salon.data.titre}}\n          </ion-text>\n          </ion-row>\n          <ion-row style=\"margin-top:10px\">\n            <ion-text>\n             {{salon.data.adresse}} \n            </ion-text>\n          </ion-row>\n        </ion-col>\n      </ion-item>\n    </div>\n  </ion-list>\n  <ion-list *ngIf=\"selectedSegment=='reception'\">\n    <div *ngFor=\"let salon of salons\" lines=\"none\" [routerLink]=\"['/salon',salon.id_donateur,salon.id_receiver,salon.id_demande==null?0:salon.id_demande,salon.id_don!=null?salon.id_don:0]\">\n      <ion-item *ngIf=\"salon.id_demande!=null\"> \n        <ion-thumbnail slot=\"start\">\n          <img [src]=\"salon.data.media.length>0?storage+salon.data.media[0].filePath:'../../../../assets/images/ask.png'\" style=\"border-radius:10px\">\n        </ion-thumbnail>\n        <ion-col>\n          <img  alt=\"\">\n          <ion-row style=\"width:100%\">\n          <ion-text>\n            {{salon.data.titre}}\n          </ion-text>\n          </ion-row>\n          <ion-row style=\"margin-top:10px\">\n            <ion-text>\n             {{salon.data.adresse}} \n            </ion-text>\n          </ion-row>\n        </ion-col>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-header class=\"ion-no-border\" style=\"background:#ec566a\">\n  <ion-row style=\"width: 100%;\">\n    <ion-col class=\"logo\" size=\"8\" style=\"margin-top:10px\">\n      <ion-title class=\"title\" color=\"light\" style=\"font-weight:bold\">BRIDGE</ion-title>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-row style=\"width: 100%;\">\n      <ion-col style=\"text-align: right\" size=\"6\">\n        <ion-icon name=\"notifications\" size=\"large\" color=\"light\"></ion-icon>\n      </ion-col>\n      <ion-col style=\"text-align: right\" size=\"6\">\n        <ion-icon name=\"person-circle-outline\" size=\"large\" color=\"light\" [routerLink]=\"['/profil-donateur',id]\"></ion-icon>\n      </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content>\n  <ion-grid  style=\"height:100px;width:100%;background:#ec566a;position:relative\">\n  </ion-grid>\n  <ion-list style=\"position:absolute;width:100%;top:0;background: transparent;\">\n    <ion-card style=\"width:95%\" class=\"ion-padding-vertical\">\n    <ion-row style=\"width:100%\" class=\"ion-padding-horizontal\">\n     <ion-col size=\"9\" >\n      <ion-row style=\"text-align:center;width:100%\"><ion-text style=\"font-weight:bold;color:black\">Total balance</ion-text></ion-row>\n      <ion-row style=\"text-align:center;width:100%;margin-top:1em\"><ion-text style=\"font-weight:bolder;font-size:2em;color:black\">$ 2,562.50</ion-text></ion-row>\n     </ion-col>\n     <ion-col size=\"3\">\n      <ion-button style=\"border-radius:10px\" size=\"large\">\n        <ion-icon name=\"add-outline\" size=\"large\"></ion-icon>\n      </ion-button>\n     </ion-col>\n    </ion-row>\n    <ion-row style=\"margin:0;padding:0\">\n      <ion-item-divider class=\"ion-margin-horizontal\"></ion-item-divider>\n    </ion-row>\n    <ion-item lines=\"none\">\n    <ion-col>\n      <ion-row>\n        <ion-button style=\"border-radius:10px\" size=\"large\" color=\"danger\">\n          <ion-icon name=\"arrow-down-outline\" size=\"large\"></ion-icon>\n        </ion-button>\n      </ion-row>\n      <ion-row><ion-text style=\"margin-top:10px;font-weight: bold;\">Withdraw</ion-text></ion-row>\n    </ion-col>\n    <ion-col>\n      <ion-row>\n        <ion-button style=\"border-radius:10px\" size=\"large\" color=\"success\">\n          <ion-icon name=\"card-outline\" size=\"large\"></ion-icon>\n        </ion-button>\n      </ion-row>\n      <ion-row style=\"width:100%;text-align:center;font-weight: bold;margin-left:15%\">\n        <ion-text style=\"margin-top:10px;text-align: center;\">send</ion-text>\n      </ion-row>\n    </ion-col>\n    <ion-col>\n      <ion-row>\n        <ion-button style=\"border-radius:10px\" size=\"large\" color=\"warning\">\n          <ion-icon name=\"cash-outline\" size=\"large\" color=\"light\"></ion-icon>\n        </ion-button>\n      </ion-row>\n      <ion-row><ion-text style=\"margin-top:10px;font-weight: bold;\">Exchange</ion-text></ion-row>\n    </ion-col>\n    \n    </ion-item>\n    </ion-card>\n    <ion-row style=\"width:100%\">\n    <ion-col size=\"6\"> \n     <ion-card class=\"ion-padding\">\n      <ion-row>\n        <ion-text style=\"font-weight:bold;color:gray\">income</ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text color=\"success\" style=\"font-weight:bold;font-size:2em;margin-top:12px\">$ 552.95</ion-text>\n      </ion-row>\n     </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card class=\"ion-padding\">\n        <ion-row>\n          <ion-text style=\"font-weight:bold;color:gray\">Express</ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-text color=\"danger\" style=\"font-weight:bold;font-size:2em;margin-top:12px\">$ 86.45</ion-text>\n        </ion-row>\n       </ion-card>\n    </ion-col>\n    </ion-row>\n    <ion-row style=\"width:100%\">\n      <ion-col size=\"6\"> \n       <ion-card class=\"ion-padding\">\n        <ion-row>\n          <ion-text style=\"font-weight:bold;color:gray\">income</ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-text color=\"success\" style=\"font-weight:bold;font-size:2em;margin-top:12px\">$ 552.95</ion-text>\n        </ion-row>\n       </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"ion-padding\">\n          <ion-row>\n            <ion-text style=\"font-weight:bold;color:gray\">Express</ion-text>\n          </ion-row>\n          <ion-row>\n            <ion-text color=\"danger\" style=\"font-weight:bold;font-size:2em;margin-top:12px\">$ 86.45</ion-text>\n          </ion-row>\n         </ion-card>\n      </ion-col>\n      </ion-row>\n      <ion-row style=\"width:100%\">\n        <ion-col size=\"6\"> \n         <ion-card class=\"ion-padding\">\n          <ion-row>\n            <ion-text style=\"font-weight:bold;color:gray\">income</ion-text>\n          </ion-row>\n          <ion-row>\n            <ion-text color=\"success\" style=\"font-weight:bold;font-size:2em;margin-top:12px\">$ 552.95</ion-text>\n          </ion-row>\n         </ion-card>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-card class=\"ion-padding\">\n            <ion-row>\n              <ion-text style=\"font-weight:bold;color:gray\">Express</ion-text>\n            </ion-row>\n            <ion-row>\n              <ion-text color=\"danger\" style=\"font-weight:bold;font-size:2em;margin-top:12px\">$ 86.45</ion-text>\n            </ion-row>\n           </ion-card>\n        </ion-col>\n        </ion-row>\n\n    <ion-item lines=\"none\">\n      <ion-text slot=\"start\" style=\"font-weight:bold;font-size:1.2em;\">Transactions</ion-text>\n      <ion-text slot=\"end\" color=\"medium\"> view all </ion-text>\n    </ion-item>\n    <ion-card class=\"ion-no-border\">\n    <ion-item lines=\"none\" class=\"ion-margin-horizontal\" style=\"margin:0;padding:0\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../../../assets/images/apple.png\" alt=\"\">\n      </ion-thumbnail>\n      <ion-col>\n        <ion-row><ion-text style=\"font-weight:bold;color:black\">Apple</ion-text></ion-row>\n        <ion-row><ion-text color=\"medium\">Shopping</ion-text></ion-row>\n      </ion-col>\n      <ion-text color=\"danger\"style=\"font-weight:bold\" slot=\"end\"> - $ 150</ion-text>\n    </ion-item>\n  </ion-card>\n  <ion-card class=\"ion-no-border\">\n    <ion-item lines=\"none\" class=\"ion-margin-horizontal\" style=\"margin:0;padding:0\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../../../assets/images/amazon-pay.png\" alt=\"\">\n      </ion-thumbnail>\n      <ion-col>\n        <ion-row><ion-text style=\"font-weight:bold;color:black\">Amazon</ion-text></ion-row>\n        <ion-row><ion-text color=\"medium\">Shopping</ion-text></ion-row>\n      </ion-col>\n      <ion-text color=\"danger\" style=\"font-weight:bold\" slot=\"end\"> - $ 150</ion-text>\n    </ion-item>\n  </ion-card>\n  <ion-item lines=\"none\">\n    <ion-text slot=\"start\" style=\"font-weight:bold;font-size:1.2em;\">My cards</ion-text>\n    <ion-text slot=\"end\" color=\"medium\"> view all </ion-text>\n  </ion-item>\n  </ion-list>\n  \n</ion-content> -->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_messages_reception_reception_module_ts.js.map