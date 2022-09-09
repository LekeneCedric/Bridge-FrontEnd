"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modals_modal-salon_modal-salon_page_ts"],{

/***/ 3378:
/*!********************************************************!*\
  !*** ./src/app/modals/modal-salon/modal-salon.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalSalonPage": () => (/* binding */ ModalSalonPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modal_salon_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-salon.page.html?ngResource */ 6520);
/* harmony import */ var _modal_salon_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-salon.page.scss?ngResource */ 2415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);






let ModalSalonPage = class ModalSalonPage {
    constructor(manageDataService, modalCtrl) {
        this.manageDataService = manageDataService;
        this.modalCtrl = modalCtrl;
        this.rooms = [];
        this.load = true;
    }
    ngOnInit() {
        this.allRoom.forEach(room => {
            this.manageDataService.getDonateur(room.id_receiver).toPromise().then(data => {
                this.rooms.push({
                    id_donateur: room.id_donateur,
                    id_receiver: room.id_receiver,
                    id_don: room.id_don,
                    reic_img: data.media.lenght > 0 ? data.media : '../../../../assets/images/full-moon.png',
                    reic_name: data.name,
                    reic_contact: data.contact
                });
            });
        });
        setTimeout(() => { this.load = false; }, 500);
    }
    cancel() {
        return this.modalCtrl.dismiss(null, 'cancel');
    }
};
ModalSalonPage.ctorParameters = () => [
    { type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_2__.ManageDataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
ModalSalonPage.propDecorators = {
    selectedRoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    allRoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ModalSalonPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-modal-salon',
        template: _modal_salon_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modal_salon_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalSalonPage);



/***/ }),

/***/ 8027:
/*!*************************************************************!*\
  !*** ./src/app/services/manage-data/manage-data.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageDataService": () => (/* binding */ ManageDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);




let ManageDataService = class ManageDataService {
    constructor(http) {
        this.http = http;
    }
    getDons(page) {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/dons' + `?page=${page}`;
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
    /*-------------------------DEMANDES---------------------------*/
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
    /*-------------------------DONATEUR-----------------------------*/
    getDonateur(id) {
        const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/donateurs' + `/${id}`;
        return this.http.get(api, { headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            } });
    }
    /*-------------------------CONVERSATIONS-------------------------*/
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

/***/ 2415:
/*!*********************************************************************!*\
  !*** ./src/app/modals/modal-salon/modal-salon.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1zYWxvbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 6520:
/*!*********************************************************************!*\
  !*** ./src/app/modals/modal-salon/modal-salon.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Discussions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list  *ngIf=\"load==false\">\n  <div *ngFor=\"let room of rooms\">\n    <ion-item lines=\"none\" *ngIf=\"room.id_don==selectedRoom.id_don\" \n    [routerLink]=\"['/salon',room.id_donateur,room.id_receiver,0,room.id_don]\" (click)=\"cancel()\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"room.reic_img\" style=\"border-radius:10px\">\n      </ion-thumbnail>\n      <ion-col>\n        <ion-row style=\"width:100%\">\n        <ion-text style=\"font-weight:bold\">\n         {{room.reic_name}}\n        </ion-text>\n        </ion-row>\n        <ion-row style=\"margin-top:10px\">\n          <ion-text color=\"medium\">\n           {{room.reic_contact}}\n          </ion-text>\n        </ion-row>\n      </ion-col>\n      <ion-icon name=\"chevron-forward-outline\" size=\"large\" slot=\"end\" color=\"dark\"></ion-icon>\n    </ion-item>\n  </div>\n  \n</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_modal-salon_modal-salon_page_ts.js.map