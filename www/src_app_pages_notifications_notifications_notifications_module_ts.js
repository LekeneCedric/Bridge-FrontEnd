"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_notifications_notifications_notifications_module_ts"],{

/***/ 29189:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/notifications/notifications/notification/notification.page.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPage": () => (/* binding */ NotificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _notification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.page.html?ngResource */ 54231);
/* harmony import */ var _notification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page.scss?ngResource */ 69531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let NotificationPage = class NotificationPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    confirm() {
        return this.modalCtrl.dismiss(null, 'confirm');
    }
};
NotificationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
NotificationPage.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    timeAgo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
NotificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-notification',
        template: _notification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationPage);



/***/ }),

/***/ 35622:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/notifications/notifications/notifications-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageRoutingModule": () => (/* binding */ NotificationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page */ 14780);




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage
    },
    {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notifications_notifications_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notification/notification.module */ 61240)).then(m => m.NotificationPageModule)
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ 95440:
/*!***************************************************************************!*\
  !*** ./src/app/pages/notifications/notifications/notifications.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageModule": () => (/* binding */ NotificationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications-routing.module */ 35622);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page */ 14780);







let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationsPageRoutingModule
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_1__.NotificationsPage]
    })
], NotificationsPageModule);



/***/ }),

/***/ 14780:
/*!*************************************************************************!*\
  !*** ./src/app/pages/notifications/notifications/notifications.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPage": () => (/* binding */ NotificationsPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _notifications_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page.html?ngResource */ 10604);
/* harmony import */ var _notifications_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.page.scss?ngResource */ 56243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 58027);
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! javascript-time-ago */ 20488);
/* harmony import */ var javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! javascript-time-ago/locale/fr */ 8996);
/* harmony import */ var _notification_notification_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification/notification.page */ 29189);











let NotificationsPage = class NotificationsPage {
  constructor(route, manageDataService, navCtrl, modalCtrl) {
    this.route = route;
    this.manageDataService = manageDataService;
    this.navCtrl = navCtrl;
    this.modalCtrl = modalCtrl;
    /*-------------------------VARIABLES--------------------------*/

    this.id_donateur = null;
    this.notifications = [];
  }

  ngOnInit() {
    this.notifications = [];
    javascript_time_ago__WEBPACK_IMPORTED_MODULE_5__["default"].addDefaultLocale(javascript_time_ago_locale_fr__WEBPACK_IMPORTED_MODULE_6__["default"]);
    setInterval(() => {
      const tabBar = document.getElementById('app-tab-bar');
      tabBar.style.display = 'flex';
    }, 100);
    this.id_donateur = this.route.snapshot.params['id_donateur'];
    this.manageDataService.getNotificationDonateur(this.id_donateur).toPromise().then(data => {
      data.forEach(notif => {
        this.notifications.push(notif);
      });
    }).finally(() => {
      console.log(this.notifications);
    });
  }
  /*--------------------------FUNCTIONS-------------------------*/


  refresh() {
    setTimeout(() => {
      this.ngOnInit();
    }, 500);
  }

  timeAgo(created_at) {
    const timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_5__["default"]('fr-EU');
    const elapsedTime = timeAgo.format(new Date(Date.parse(created_at) - 60 * 1000));
    return elapsedTime;
  }

  back() {
    this.navCtrl.back();
  }

  openNotification(notif) {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.manageDataService.vueNotification(_this.id_donateur, notif.id).toPromise().then( /*#__PURE__*/(0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const modal = yield _this.modalCtrl.create({
          component: _notification_notification_page__WEBPACK_IMPORTED_MODULE_4__.NotificationPage,
          componentProps: {
            title: notif.title,
            description: notif.message,
            timeAgo: _this.timeAgo(notif.created_at)
          },
          breakpoints: [0, 1],
          initialBreakpoint: 1,
          animated: true,
          handle: false
        });
        modal.present();
        const {
          data,
          role
        } = yield modal.onWillDismiss();

        if (role === 'confirm') {}
      }));
    })();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 500);
  }

};

NotificationsPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__.ManageDataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}];

NotificationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-notifications',
  template: _notifications_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_notifications_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], NotificationsPage);


/***/ }),

/***/ 69531:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/notifications/notifications/notification/notification.page.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 56243:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/notifications/notifications/notifications.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 54231:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/notifications/notifications/notification/notification.page.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-button slot=\"end\" color=\"danger\" (click)=\"confirm()\">\n      <ion-text>Fermer</ion-text>\n      <ion-icon name=\"close-circle-outline\" size=\"large\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list class=\"ion-padding\">\n  <ion-row style=\"width:100%;text-align:left;margin-bottom:5%;font-weight: bold;font-size:1.5em\">\n      {{title}}\n  </ion-row>\n  <ion-text>{{description}}</ion-text>\n  <ion-item lines=\"none\" class=\"ion-margin-top\">\n    <ion-text slot=\"end\" style=\"color:gray\">{{timeAgo}}</ion-text>\n  </ion-item>\n</ion-list>\n</ion-content>\n";

/***/ }),

/***/ 10604:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/notifications/notifications/notifications.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-item lines=\"none\">\n    <ion-icon name=\"chevron-back\" (click)=\"back()\" slot=\"start\"></ion-icon>\n    <ion-title slot=\"start\">Notifications</ion-title>\n  </ion-item>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid style=\"text-align:center;margin-top:15%\" *ngIf=\"notifications.length<1\">\n    <img src=\"../../../../assets/images/chat.png\" class=\"ion-margin-vertical\">\n    <ion-item lines=\"none\"style=\"text-align:center;width: 100%;\" class=\"ion-margin-vertical\">\n      <ion-text style=\"color:rgb(64, 64, 64);width: 100%\">Actuellement vous n'avez aucune notification</ion-text>\n    </ion-item>\n    <ion-button (click)=\"refresh()\" expand=\"block\" class=\"ion-margin-horizontal\" color=\"danger\" class=\"ion-margin-vertical\" style=\"font-weight:bold;margin-left: 20%;margin-right:20%\">reessayer</ion-button>\n  </ion-grid>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" class=\"red\">\n    <ion-refresher-content color=\"danger\"></ion-refresher-content>\n  </ion-refresher>\n<ion-list>\n  <ion-item style=\"margin-top:5px\" *ngFor=\"let notif of notifications\"   (click)=\"openNotification(notif)\" lines=\"full\">\n    <ion-icon [name]=\"notif.vu==0?'notifications':'notifications-outline' \" slot=\"end\" [color]=\"notif.vu==0?'danger':'medium'\"></ion-icon>\n  <ion-col size=\"12\">\n    <ion-row style=\"width:100%;text-align:left\">\n      <ion-text style=\"width:100%;font-weight: bold;\">\n        {{notif.title | slice : 0:36}}{{notif.title.length>36?'...':''}}\n      </ion-text>\n      \n    </ion-row>\n    <ion-row style=\"width:100%;text-align:left;margin-top:5px\">\n      <ion-text style=\"width:100%\">\n        {{notif.message | slice : 0:36}}{{notif.message.length>36?'...':''}}\n      </ion-text>\n    </ion-row>\n    <ion-row style=\"width:100%;text-align: right;\">\n      <ion-text style=\"width:100%;color: gray;\" class=\"ion-margin-top\" >\n        il y'a {{timeAgo(notif.created_at) | slice:7}}\n      </ion-text>\n    </ion-row>\n  </ion-col>\n  </ion-item>\n</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_notifications_notifications_notifications_module_ts.js.map