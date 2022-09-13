"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_map_map_module_ts"],{

/***/ 6770:
/*!*************************************************!*\
  !*** ./src/app/pages/map/map-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageRoutingModule": () => (/* binding */ MapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page */ 9763);




const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_0__.MapPage
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapPageRoutingModule);



/***/ }),

/***/ 6016:
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageModule": () => (/* binding */ MapPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-routing.module */ 6770);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page */ 9763);







let MapPageModule = class MapPageModule {
};
MapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _map_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapPageRoutingModule
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_1__.MapPage]
    })
], MapPageModule);



/***/ }),

/***/ 9763:
/*!***************************************!*\
  !*** ./src/app/pages/map/map.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPage": () => (/* binding */ MapPage)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _map_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page.html?ngResource */ 512);
/* harmony import */ var _map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.page.scss?ngResource */ 9055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/manage-data/manage-data.service */ 8027);
/* harmony import */ var _capacitor_google_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/google-maps */ 4822);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);











let MapPage = class MapPage {
  constructor(manageDataService, route, router, toast) {
    this.manageDataService = manageDataService;
    this.route = route;
    this.router = router;
    this.toast = toast;
    this.don = {
      coordinate: {
        lat: 0,
        lng: 0
      },
      title: '',
      snippet: ''
    };
  }

  navBack() {
    this.router.back();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      this.ngOnInit();
    }, 100);
  }

  loadPosition() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.mycoordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_6__.Geolocation.getCurrentPosition();
    })();
  }

  ngOnInit() {
    this.category = this.route.snapshot.params.category;
    this.apiKey = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.map;
    this.mapRef = document.getElementById('map');
    this.loadPosition();
    this.id_don = this.route.snapshot.params.id;
    this.manageDataService.getOneDon(this.id_don).toPromise().then(data => {
      this.don = {
        iconUrl: 'assets/icon/giftbox.png',
        coordinate: {
          lat: Number(data.latitude),
          lng: Number(data.longitude)
        }
      };
    }).catch(err => {
      console.log(err.message);
    }).finally(() => {
      this.createMap();
    });
  }

  createMap() {
    var _this2 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.map = yield _capacitor_google_maps__WEBPACK_IMPORTED_MODULE_4__.GoogleMap.create({
        id: 'my-map',
        apiKey: _this2.apiKey,
        element: _this2.mapRef,
        config: {
          width: 100,
          height: 100,
          x: 0,
          y: 0,
          center: {
            lat: _this2.don.coordinate.lat,
            lng: _this2.don.coordinate.lng
          },
          zoom: 10
        }
      }).then().catch( /*#__PURE__*/function () {
        var _ref = (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
          const toast = _this2.toast.create({
            icon: 'information-circle',
            message: `Erreur ,Verifiez votre connexion internet`,
            duration: 1000,
            color: "danger"
          });

          (yield toast).present();

          _this2.router.back();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());

      _this2.addMarker();
    })();
  }

  addMarker() {
    var _this3 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const marker = _this3.don;
      yield _this3.map.addMarker({
        coordinate: {
          lat: _this3.mycoordinates.coords.latitude,
          lng: _this3.mycoordinates.coords.longitude
        },
        iconUrl: 'assets/icon/avatar.png'
      });
      yield _this3.map.addMarker(marker);
    })();
  }

};

MapPage.ctorParameters = () => [{
  type: src_app_services_manage_data_manage_data_service__WEBPACK_IMPORTED_MODULE_3__.ManageDataService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}];

MapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-map',
  template: _map_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MapPage);


/***/ }),

/***/ 591:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7621:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geolocation": () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 591);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 8391)).then(m => new m.GeolocationWeb())
});



/***/ }),

/***/ 5325:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapType": () => (/* binding */ MapType)
/* harmony export */ });
var MapType;

(function (MapType) {
  /**
   * Basic map.
   */
  MapType["Normal"] = "Normal";
  /**
   * Satellite imagery with roads and labels.
   */

  MapType["Hybrid"] = "Hybrid";
  /**
   * Satellite imagery with no labels.
   */

  MapType["Satellite"] = "Satellite";
  /**
   * Topographic data.
   */

  MapType["Terrain"] = "Terrain";
  /**
   * No base map tiles.
   */

  MapType["None"] = "None";
})(MapType || (MapType = {}));

/***/ }),

/***/ 1819:
/*!************************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/implementation.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapacitorGoogleMaps": () => (/* binding */ CapacitorGoogleMaps)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);

const CapacitorGoogleMaps = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('CapacitorGoogleMaps', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_google-maps_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 601)).then(m => new m.CapacitorGoogleMapsWeb())
});
CapacitorGoogleMaps.addListener('isMapInFocus', data => {
  var _a;

  const x = data.x;
  const y = data.y;
  const elem = document.elementFromPoint(x, y);
  const internalId = (_a = elem === null || elem === void 0 ? void 0 : elem.dataset) === null || _a === void 0 ? void 0 : _a.internalId;
  const mapInFocus = internalId === data.mapId;
  CapacitorGoogleMaps.dispatchMapEvent({
    id: data.mapId,
    focus: mapInFocus
  });
});


/***/ }),

/***/ 4822:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* reexport safe */ _map__WEBPACK_IMPORTED_MODULE_1__.GoogleMap),
/* harmony export */   "MapType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_0__.MapType)
/* harmony export */ });
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ 5325);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ 8968);
/* eslint-disable @typescript-eslint/no-namespace */




/***/ }),

/***/ 8968:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/map.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* binding */ GoogleMap)
/* harmony export */ });
/* harmony import */ var _home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./implementation */ 1819);




class MapCustomElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'ios') {
      this.style.overflow = 'scroll';
      this.style['-webkit-overflow-scrolling'] = 'touch';
      const overflowDiv = document.createElement('div');
      overflowDiv.style.height = '200%';
      this.appendChild(overflowDiv);
    }
  }

}

customElements.define('capacitor-google-map', MapCustomElement);
class GoogleMap {
  constructor(id) {
    this.element = null;

    this.handleScrollEvent = () => this.updateMapBounds();

    this.id = id;
  }
  /**
   * Creates a new instance of a Google Map
   * @param options
   * @param callback
   * @returns GoogleMap
   */


  static create(options, callback) {
    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const newMap = new GoogleMap(options.id);

      if (!options.element) {
        throw new Error('container element is required');
      }

      if (options.config.androidLiteMode === undefined) {
        options.config.androidLiteMode = false;
      }

      newMap.element = options.element;
      newMap.element.dataset.internalId = options.id;
      const elementBounds = options.element.getBoundingClientRect();
      options.config.width = elementBounds.width;
      options.config.height = elementBounds.height;
      options.config.x = elementBounds.x;
      options.config.y = elementBounds.y;
      options.config.devicePixelRatio = window.devicePixelRatio;

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'android') {
        newMap.initScrolling();
      }

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform()) {
        options.element = {};
      }

      yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.create(options);

      if (callback) {
        const onMapReadyListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMapReady', data => {
          if (data.mapId == newMap.id) {
            callback(data);
            onMapReadyListener.remove();
          }
        });
      }

      return newMap;
    })();
  }
  /**
   * Enable marker clustering
   *
   * @returns void
   */


  enableClustering() {
    var _this = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableClustering({
        id: _this.id
      });
    })();
  }
  /**
   * Disable marker clustering
   *
   * @returns void
   */


  disableClustering() {
    var _this2 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.disableClustering({
        id: _this2.id
      });
    })();
  }
  /**
   * Adds a marker to the map
   *
   * @param marker
   * @returns created marker id
   */


  addMarker(marker) {
    var _this3 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addMarker({
        id: _this3.id,
        marker
      });
      return res.id;
    })();
  }
  /**
   * Adds multiple markers to the map
   *
   * @param markers
   * @returns array of created marker IDs
   */


  addMarkers(markers) {
    var _this4 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addMarkers({
        id: _this4.id,
        markers
      });
      return res.ids;
    })();
  }
  /**
   * Remove marker from the map
   *
   * @param id id of the marker to remove from the map
   * @returns
   */


  removeMarker(id) {
    var _this5 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.removeMarker({
        id: _this5.id,
        markerId: id
      });
    })();
  }
  /**
   * Remove markers from the map
   *
   * @param ids array of ids to remove from the map
   * @returns
   */


  removeMarkers(ids) {
    var _this6 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.removeMarkers({
        id: _this6.id,
        markerIds: ids
      });
    })();
  }
  /**
   * Destroy the current instance of the map
   */


  destroy() {
    var _this7 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'android') {
        _this7.disableScrolling();
      }

      _this7.removeAllMapListeners();

      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.destroy({
        id: _this7.id
      });
    })();
  }
  /**
   * Update the map camera configuration
   *
   * @param config
   * @returns
   */


  setCamera(config) {
    var _this8 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.setCamera({
        id: _this8.id,
        config
      });
    })();
  }
  /**
   * Sets the type of map tiles that should be displayed.
   *
   * @param mapType
   * @returns
   */


  setMapType(mapType) {
    var _this9 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.setMapType({
        id: _this9.id,
        mapType
      });
    })();
  }
  /**
   * Sets whether indoor maps are shown, where available.
   *
   * @param enabled
   * @returns
   */


  enableIndoorMaps(enabled) {
    var _this10 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableIndoorMaps({
        id: _this10.id,
        enabled
      });
    })();
  }
  /**
   * Controls whether the map is drawing traffic data, if available.
   *
   * @param enabled
   * @returns
   */


  enableTrafficLayer(enabled) {
    var _this11 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableTrafficLayer({
        id: _this11.id,
        enabled
      });
    })();
  }
  /**
   * Show accessibility elements for overlay objects, such as Marker and Polyline.
   *
   * Only available on iOS.
   *
   * @param enabled
   * @returns
   */


  enableAccessibilityElements(enabled) {
    var _this12 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableAccessibilityElements({
        id: _this12.id,
        enabled
      });
    })();
  }
  /**
   * Set whether the My Location dot and accuracy circle is enabled.
   *
   * @param enabled
   * @returns
   */


  enableCurrentLocation(enabled) {
    var _this13 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.enableCurrentLocation({
        id: _this13.id,
        enabled
      });
    })();
  }
  /**
   * Set padding on the 'visible' region of the view.
   *
   * @param padding
   * @returns
   */


  setPadding(padding) {
    var _this14 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.setPadding({
        id: _this14.id,
        padding
      });
    })();
  }
  /**
   * Get the map's current viewport latitude and longitude bounds.
   *
   * @returns {LatLngBounds}
   */


  getMapBounds() {
    var _this15 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.getMapBounds({
        id: _this15.id
      });
    })();
  }

  initScrolling() {
    const ionContents = document.getElementsByTagName('ion-content'); // eslint-disable-next-line @typescript-eslint/prefer-for-of

    for (let i = 0; i < ionContents.length; i++) {
      ionContents[i].scrollEvents = true;
    }

    window.addEventListener('ionScroll', this.handleScrollEvent);
    window.addEventListener('scroll', this.handleScrollEvent);
    window.addEventListener('resize', this.handleScrollEvent);

    if (screen.orientation) {
      screen.orientation.addEventListener('change', () => {
        setTimeout(this.updateMapBounds, 500);
      });
    } else {
      window.addEventListener('orientationchange', () => {
        setTimeout(this.updateMapBounds, 500);
      });
    }
  }

  disableScrolling() {
    window.removeEventListener('ionScroll', this.handleScrollEvent);
    window.removeEventListener('scroll', this.handleScrollEvent);
    window.removeEventListener('resize', this.handleScrollEvent);

    if (screen.orientation) {
      screen.orientation.removeEventListener('change', () => {
        setTimeout(this.updateMapBounds, 1000);
      });
    } else {
      window.removeEventListener('orientationchange', () => {
        setTimeout(this.updateMapBounds, 1000);
      });
    }
  }

  updateMapBounds() {
    if (this.element) {
      const mapRect = this.element.getBoundingClientRect();
      _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.onScroll({
        id: this.id,
        mapBounds: {
          x: mapRect.x,
          y: mapRect.y,
          width: mapRect.width,
          height: mapRect.height
        }
      });
    }
  }
  /*
  private findContainerElement(): HTMLElement | null {
    if (!this.element) {
      return null;
    }
       let parentElement = this.element.parentElement;
    while (parentElement !== null) {
      if (window.getComputedStyle(parentElement).overflowY !== 'hidden') {
        return parentElement;
      }
         parentElement = parentElement.parentElement;
    }
       return null;
  }
  */

  /**
   * Set the event listener on the map for 'onCameraIdle' events.
   *
   * @param callback
   * @returns
   */


  setOnCameraIdleListener(callback) {
    var _this16 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this16.onCameraIdleListener) {
        _this16.onCameraIdleListener.remove();
      }

      if (callback) {
        _this16.onCameraIdleListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onCameraIdle', _this16.generateCallback(callback));
      } else {
        _this16.onCameraIdleListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onBoundsChanged' events.
   *
   * @param callback
   * @returns
   */


  setOnBoundsChangedListener(callback) {
    var _this17 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this17.onBoundsChangedListener) {
        _this17.onBoundsChangedListener.remove();
      }

      if (callback) {
        _this17.onBoundsChangedListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onBoundsChanged', _this17.generateCallback(callback));
      } else {
        _this17.onBoundsChangedListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onCameraMoveStarted' events.
   *
   * @param callback
   * @returns
   */


  setOnCameraMoveStartedListener(callback) {
    var _this18 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this18.onCameraMoveStartedListener) {
        _this18.onCameraMoveStartedListener.remove();
      }

      if (callback) {
        _this18.onCameraMoveStartedListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onCameraMoveStarted', _this18.generateCallback(callback));
      } else {
        _this18.onCameraMoveStartedListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onClusterClick' events.
   *
   * @param callback
   * @returns
   */


  setOnClusterClickListener(callback) {
    var _this19 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this19.onClusterClickListener) {
        _this19.onClusterClickListener.remove();
      }

      if (callback) {
        _this19.onClusterClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onClusterClick', _this19.generateCallback(callback));
      } else {
        _this19.onClusterClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onClusterInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */


  setOnClusterInfoWindowClickListener(callback) {
    var _this20 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this20.onClusterInfoWindowClickListener) {
        _this20.onClusterInfoWindowClickListener.remove();
      }

      if (callback) {
        _this20.onClusterInfoWindowClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onClusterInfoWindowClick', _this20.generateCallback(callback));
      } else {
        _this20.onClusterInfoWindowClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */


  setOnInfoWindowClickListener(callback) {
    var _this21 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this21.onInfoWindowClickListener) {
        _this21.onInfoWindowClickListener.remove();
      }

      if (callback) {
        _this21.onInfoWindowClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onInfoWindowClick', _this21.generateCallback(callback));
      } else {
        _this21.onInfoWindowClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMapClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMapClickListener(callback) {
    var _this22 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this22.onMapClickListener) {
        _this22.onMapClickListener.remove();
      }

      if (callback) {
        _this22.onMapClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMapClick', _this22.generateCallback(callback));
      } else {
        _this22.onMapClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerClickListener(callback) {
    var _this23 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this23.onMarkerClickListener) {
        _this23.onMarkerClickListener.remove();
      }

      if (callback) {
        _this23.onMarkerClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMarkerClick', _this23.generateCallback(callback));
      } else {
        _this23.onMarkerClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDragStart' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerDragStartListener(callback) {
    var _this24 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this24.onMarkerDragStartListener) {
        _this24.onMarkerDragStartListener.remove();
      }

      if (callback) {
        _this24.onMarkerDragStartListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMarkerDragStart', _this24.generateCallback(callback));
      } else {
        _this24.onMarkerDragStartListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDrag' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerDragListener(callback) {
    var _this25 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this25.onMarkerDragListener) {
        _this25.onMarkerDragListener.remove();
      }

      if (callback) {
        _this25.onMarkerDragListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMarkerDrag', _this25.generateCallback(callback));
      } else {
        _this25.onMarkerDragListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDragEnd' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerDragEndListener(callback) {
    var _this26 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this26.onMarkerDragEndListener) {
        _this26.onMarkerDragEndListener.remove();
      }

      if (callback) {
        _this26.onMarkerDragEndListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMarkerDragEnd', _this26.generateCallback(callback));
      } else {
        _this26.onMarkerDragEndListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMyLocationButtonClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMyLocationButtonClickListener(callback) {
    var _this27 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this27.onMyLocationButtonClickListener) {
        _this27.onMyLocationButtonClickListener.remove();
      }

      if (callback) {
        _this27.onMyLocationButtonClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMyLocationButtonClick', _this27.generateCallback(callback));
      } else {
        _this27.onMyLocationButtonClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMyLocationClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMyLocationClickListener(callback) {
    var _this28 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this28.onMyLocationClickListener) {
        _this28.onMyLocationClickListener.remove();
      }

      if (callback) {
        _this28.onMyLocationClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_2__.CapacitorGoogleMaps.addListener('onMyLocationClick', _this28.generateCallback(callback));
      } else {
        _this28.onMyLocationClickListener = undefined;
      }
    })();
  }
  /**
   * Remove all event listeners on the map.
   *
   * @param callback
   * @returns
   */


  removeAllMapListeners() {
    var _this29 = this;

    return (0,_home_code237_Documents_GitHub_Bridge_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this29.onBoundsChangedListener) {
        _this29.onBoundsChangedListener.remove();

        _this29.onBoundsChangedListener = undefined;
      }

      if (_this29.onCameraIdleListener) {
        _this29.onCameraIdleListener.remove();

        _this29.onCameraIdleListener = undefined;
      }

      if (_this29.onCameraMoveStartedListener) {
        _this29.onCameraMoveStartedListener.remove();

        _this29.onCameraMoveStartedListener = undefined;
      }

      if (_this29.onClusterClickListener) {
        _this29.onClusterClickListener.remove();

        _this29.onClusterClickListener = undefined;
      }

      if (_this29.onClusterInfoWindowClickListener) {
        _this29.onClusterInfoWindowClickListener.remove();

        _this29.onClusterInfoWindowClickListener = undefined;
      }

      if (_this29.onInfoWindowClickListener) {
        _this29.onInfoWindowClickListener.remove();

        _this29.onInfoWindowClickListener = undefined;
      }

      if (_this29.onMapClickListener) {
        _this29.onMapClickListener.remove();

        _this29.onMapClickListener = undefined;
      }

      if (_this29.onMarkerClickListener) {
        _this29.onMarkerClickListener.remove();

        _this29.onMarkerClickListener = undefined;
      }

      if (_this29.onMyLocationButtonClickListener) {
        _this29.onMyLocationButtonClickListener.remove();

        _this29.onMyLocationButtonClickListener = undefined;
      }

      if (_this29.onMyLocationClickListener) {
        _this29.onMyLocationClickListener.remove();

        _this29.onMyLocationClickListener = undefined;
      }
    })();
  }

  generateCallback(callback) {
    const mapId = this.id;
    return data => {
      if (data.mapId == mapId) {
        callback(data);
      }
    };
  }

}

/***/ }),

/***/ 9055:
/*!****************************************************!*\
  !*** ./src/app/pages/map/map.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "capacitor-google-map {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoibWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNhcGFjaXRvci1nb29nbGUtbWFwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9Il19 */";

/***/ }),

/***/ 512:
/*!****************************************************!*\
  !*** ./src/app/pages/map/map.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"danger\" slot=\"start\" (click)=\"navBack()\"></ion-icon>\n    <ion-title>map {{category}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <capacitor-google-map id=\"map\"></capacitor-google-map>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_map_map_module_ts.js.map