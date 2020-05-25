(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _section_hero_section_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-hero/section-hero.component */ "./src/app/section-hero/section-hero.component.ts");
/* harmony import */ var _section_services_section_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section-services/section-services.component */ "./src/app/section-services/section-services.component.ts");
/* harmony import */ var _section_offer_section_offer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./section-offer/section-offer.component */ "./src/app/section-offer/section-offer.component.ts");
/* harmony import */ var _section_coaches_section_coaches_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./section-coaches/section-coaches.component */ "./src/app/section-coaches/section-coaches.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");








class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-section-hero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-section-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-section-offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-section-coaches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _section_hero_section_hero_component__WEBPACK_IMPORTED_MODULE_2__["SectionHeroComponent"], _section_services_section_services_component__WEBPACK_IMPORTED_MODULE_3__["SectionServicesComponent"], _section_offer_section_offer_component__WEBPACK_IMPORTED_MODULE_4__["SectionOfferComponent"], _section_coaches_section_coaches_component__WEBPACK_IMPORTED_MODULE_5__["SectionCoachesComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGdpdFxcd2VkZGluZy1hbmd1bGFyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiIsIjpob3N0IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/logo/logo.component.ts");
/* harmony import */ var _section_hero_section_hero_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./section-hero/section-hero.component */ "./src/app/section-hero/section-hero.component.ts");
/* harmony import */ var _section_services_section_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./section-services/section-services.component */ "./src/app/section-services/section-services.component.ts");
/* harmony import */ var _section_offer_section_offer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./section-offer/section-offer.component */ "./src/app/section-offer/section-offer.component.ts");
/* harmony import */ var _section_coaches_section_coaches_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./section-coaches/section-coaches.component */ "./src/app/section-coaches/section-coaches.component.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _logo_logo_component__WEBPACK_IMPORTED_MODULE_7__["LogoComponent"],
        _section_hero_section_hero_component__WEBPACK_IMPORTED_MODULE_8__["SectionHeroComponent"],
        _section_services_section_services_component__WEBPACK_IMPORTED_MODULE_9__["SectionServicesComponent"],
        _section_offer_section_offer_component__WEBPACK_IMPORTED_MODULE_10__["SectionOfferComponent"],
        _section_coaches_section_coaches_component__WEBPACK_IMPORTED_MODULE_11__["SectionCoachesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _logo_logo_component__WEBPACK_IMPORTED_MODULE_7__["LogoComponent"],
                    _section_hero_section_hero_component__WEBPACK_IMPORTED_MODULE_8__["SectionHeroComponent"],
                    _section_services_section_services_component__WEBPACK_IMPORTED_MODULE_9__["SectionServicesComponent"],
                    _section_offer_section_offer_component__WEBPACK_IMPORTED_MODULE_10__["SectionOfferComponent"],
                    _section_coaches_section_coaches_component__WEBPACK_IMPORTED_MODULE_11__["SectionCoachesComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logo/logo.component */ "./src/app/logo/logo.component.ts");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "base-section", "footer", "d-flex", "justify-between", "align-center"], [1, "footer__copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Copyright \u00A9 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__["LogoComponent"]], styles: [".footer[_ngcontent-%COMP%] {\n  background-color: #1f1f1f;\n  padding-top: 2.5%;\n  padding-bottom: 2.5%;\n  color: white;\n}\n@media only screen and (max-width: 760px) {\n  .footer[_ngcontent-%COMP%] {\n    padding-top: 5%;\n    padding-bottom: 5%;\n  }\n}\n.footer.base-section[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxnaXRcXHdlZGRpbmctYW5ndWxhci9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDREY7QURFRTtFQUxGO0lBTUksZUFBQTtJQUNBLGtCQUFBO0VDQ0Y7QUFDRjtBREFFO0VBQ0UsZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJzJztcblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjFmMWY7XG4gIHBhZGRpbmctdG9wOiAyLjUlO1xuICBwYWRkaW5nLWJvdHRvbTogMi41JTtcbiAgY29sb3I6IHdoaXRlO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYS1tb2IpIHtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xuICB9XG4gICYuYmFzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59IiwiLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjFmMWY7XG4gIHBhZGRpbmctdG9wOiAyLjUlO1xuICBwYWRkaW5nLWJvdHRvbTogMi41JTtcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xuICAuZm9vdGVyIHtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xuICB9XG59XG4uZm9vdGVyLmJhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo/logo.component */ "./src/app/logo/logo.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");





const _c0 = function (a0) { return { hasShadow: a0 }; };
class HeaderComponent {
    constructor() {
        this.isScrolled = false;
    }
    ngOnInit() {
        document.addEventListener('scroll', () => {
            this.isScrolled = Boolean(window.top.scrollY);
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 3, consts: [[1, "header", "base-section", "d-flex", "align-center", "justify-between", 3, "ngClass"], [1, "header__menu-burger"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.isScrolled));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]], styles: [".header[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #ffffff;\n  position: fixed;\n  z-index: 99;\n  min-height: 8vh;\n  transition: all 0.3s;\n}\n@media only screen and (max-width: 760px) {\n  .header[_ngcontent-%COMP%] {\n    padding-top: 4%;\n    padding-bottom: 4%;\n  }\n}\n.header__menu-burger[_ngcontent-%COMP%], .header__menu-burger[_ngcontent-%COMP%]::before, .header__menu-burger[_ngcontent-%COMP%]::after {\n  transition: all 0.3s;\n  content: \"\";\n  height: 2px;\n  width: 32px;\n  border-radius: 4px;\n  background-color: #000000;\n  position: relative;\n  z-index: 6;\n  display: block;\n}\n.header__menu-burger[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: -5px;\n}\n.header__menu-burger[_ngcontent-%COMP%]::before {\n  position: absolute;\n  bottom: -5px;\n}\n@media only screen and (min-width: 760px) {\n  .header__menu-burger[_ngcontent-%COMP%], .header__menu-burger[_ngcontent-%COMP%]::before, .header__menu-burger[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n}\n.header__menu-burger--active[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.header__menu-burger--active[_ngcontent-%COMP%]:before {\n  transform: rotate(45deg);\n  top: 0;\n}\n.header__menu-burger--active[_ngcontent-%COMP%]:after {\n  transform: rotate(-45deg);\n  top: 0;\n}\n.header.hasShadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxnaXRcXHdlZGRpbmctYW5ndWxhci9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9DOlxcZ2l0XFx3ZWRkaW5nLWFuZ3VsYXIvc3JjXFxzY3NzXFxfdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNERjtBREVFO0VBUEY7SUFRSSxlQUFBO0lBQ0Esa0JBQUE7RUNDRjtBQUNGO0FEQUU7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJFbkJTO0VGb0JULGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNFSjtBRERJO0VBRUUsa0JBQUE7RUFDQSxTQUFBO0FDRU47QURBSTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtBQ0NOO0FEQ0k7RUFwQkY7SUFxQkksYUFBQTtFQ0VKO0FBQ0Y7QURESTtFQUNFLDZCQUFBO0FDR047QURGTTtFQUNFLHdCQUFBO0VBQ0EsTUFBQTtBQ0lSO0FERk07RUFDRSx5QkFBQTtFQUNBLE1BQUE7QUNJUjtBRENFO0VBQ0UsNENBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJzJztcblxuLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5O1xuICBtaW4taGVpZ2h0OiA4dmg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYS1tb2IpIHtcbiAgICBwYWRkaW5nLXRvcDogNCU7XG4gICAgcGFkZGluZy1ib3R0b206IDQlO1xuICB9XG4gICZfX21lbnUtYnVyZ2VyIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbWFpbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogNjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAmOjphZnRlciB7XG4gICAgICBAZXh0ZW5kIC5oZWFkZXJfX21lbnUtYnVyZ2VyO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtNXB4O1xuICAgIH1cbiAgICAmOjpiZWZvcmUge1xuICAgICAgQGV4dGVuZCAuaGVhZGVyX19tZW51LWJ1cmdlcjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogLTVweDtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWVkaWEtbW9iKSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAmLS1hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgIHRvcDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmhhc1NoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMCAwLjJyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cbn1cbiIsIi5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTtcbiAgbWluLWhlaWdodDogOHZoO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgLmhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDQlO1xuICAgIHBhZGRpbmctYm90dG9tOiA0JTtcbiAgfVxufVxuLmhlYWRlcl9fbWVudS1idXJnZXIsIC5oZWFkZXJfX21lbnUtYnVyZ2VyOjpiZWZvcmUsIC5oZWFkZXJfX21lbnUtYnVyZ2VyOjphZnRlciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA2O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5oZWFkZXJfX21lbnUtYnVyZ2VyOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xufVxuLmhlYWRlcl9fbWVudS1idXJnZXI6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjBweCkge1xuICAuaGVhZGVyX19tZW51LWJ1cmdlciwgLmhlYWRlcl9fbWVudS1idXJnZXI6OmJlZm9yZSwgLmhlYWRlcl9fbWVudS1idXJnZXI6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uaGVhZGVyX19tZW51LWJ1cmdlci0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uaGVhZGVyX19tZW51LWJ1cmdlci0tYWN0aXZlOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdG9wOiAwO1xufVxuLmhlYWRlcl9fbWVudS1idXJnZXItLWFjdGl2ZTphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRvcDogMDtcbn1cbi5oZWFkZXIuaGFzU2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAwLjJyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG59IiwiJGNvbG9yLW1haW46ICMwMDAwMDA7XG4kY29sb3ItYWNjZW50OiAjRkY2OTlGO1xuXG4kZm9udC1mYW1pbHktbWFpbjogXCJNb250c2VycmF0XCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktYWx0OiBcIlJvYm90b1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXG4kbWVkaWEtbW9iOiA3NjBweDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/logo/logo.component.ts":
/*!****************************************!*\
  !*** ./src/app/logo/logo.component.ts ***!
  \****************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], decls: 2, vars: 0, consts: [["href", "#", 1, "logo"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wedding Dance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".logo[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nby9DOlxcZ2l0XFx3ZWRkaW5nLWFuZ3VsYXIvc3JjXFxhcHBcXGxvZ29cXGxvZ28uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59IiwiLmxvZ28ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MenuComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
} }
class MenuComponent {
    constructor() {
        this.items = [
            {
                title: "Services",
                link: '#services',
            },
            {
                title: "Our Coaches",
                link: '#coaches',
            },
            {
                title: "Testimonials",
                link: '#testimonials',
            },
            {
                title: "FAQ",
                link: '#faq',
            },
            {
                title: "Lesson Review",
                link: '#review',
            },
        ];
    }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 7, vars: 1, consts: [[1, "menu", "header__menu", "d-flex", "align-center", "justify-end"], [1, "base-heading-xl", "menu__heading"], [1, "menu__list", "d-flex", "justify-end"], ["class", "menu__item", 4, "ngFor", "ngForOf"], [1, "btn-main", "menu__btn"], [1, "menu__item"], [1, "menu__link", 3, "href"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuComponent_li_4_Template, 3, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["@media only screen and (max-width: 760px) {\n  .menu[_ngcontent-%COMP%] {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    transition: all 0.3s ease-in-out;\n    background-color: white;\n    top: 0;\n    left: 0;\n    flex-direction: column;\n    transform: scale(0);\n    opacity: 0;\n    align-items: flex-start;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position-x: right;\n    z-index: 5;\n    justify-content: flex-start;\n    padding: 11% 0 0 7%;\n  }\n  .menu--active[_ngcontent-%COMP%] {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.menu__heading[_ngcontent-%COMP%] {\n  margin-bottom: 13%;\n}\n@media only screen and (min-width: 760px) {\n  .menu__heading[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 760px) {\n  .menu__list[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-bottom: 5%;\n  }\n}\n.menu__item[_ngcontent-%COMP%] {\n  margin-right: 7%;\n  white-space: nowrap;\n  font-size: 0.875rem;\n  font-family: \"Roboto\", Arial, Helvetica, sans-serif;\n}\n@media only screen and (max-width: 960px) {\n  .menu__item[_ngcontent-%COMP%] {\n    margin-right: 4%;\n  }\n}\n@media only screen and (max-width: 760px) {\n  .menu__item[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin-bottom: 22%;\n    font-weight: bold;\n    font-family: \"Montserrat\", Arial, Helvetica, sans-serif;\n  }\n}\n.menu__link[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcZ2l0XFx3ZWRkaW5nLWFuZ3VsYXIvc3JjXFxhcHBcXG1lbnVcXG1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVudS9DOlxcZ2l0XFx3ZWRkaW5nLWFuZ3VsYXIvc3JjXFxzY3NzXFxfdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBREY7SUFFSSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxnQ0FBQTtJQUNBLHVCQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLHVCQUFBO0lBRUEsNEJBQUE7SUFDQSx3QkFBQTtJQUNBLDRCQUFBO0lBQ0EsVUFBQTtJQUNBLDJCQUFBO0lBQ0EsbUJBQUE7RUNGRjtFRElFO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VDRko7QUFDRjtBRElFO0VBQ0Usa0JBQUE7QUNGSjtBREdJO0VBRkY7SUFHSSxhQUFBO0VDQUo7QUFDRjtBREdJO0VBREY7SUFFSSxzQkFBQTtJQUNBLGlCQUFBO0VDQUo7QUFDRjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbURFeENjO0FEd0NsQjtBRENJO0VBTEY7SUFNSSxnQkFBQTtFQ0VKO0FBQ0Y7QURESTtFQVJGO0lBU0ksZUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSx1REVqRGE7RURxRGpCO0FBQ0Y7QURESTtFQUNBLGdDQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJzJztcblxuLm1lbnUge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYS1tb2IpIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvTWVudS5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogcmlnaHQ7XG4gICAgei1pbmRleDogNTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMTElIDAgMCA3JTtcblxuICAgICYtLWFjdGl2ZSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgJl9faGVhZGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTMlO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1lZGlhLW1vYikge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgJl9fbGlzdCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWEtbW9iKSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgfVxuICB9XG4gICZfX2l0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogNyU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYWx0O1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNCU7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhLW1vYikge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjIlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LW1haW47XG4gICAgfVxuICB9XG4gICZfX2xpbmsge1xuICAgICY6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItbWFpbjtcbiAgICB9XG4gIH1cbn0iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIC5tZW51IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogcmlnaHQ7XG4gICAgei1pbmRleDogNTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMTElIDAgMCA3JTtcbiAgfVxuICAubWVudS0tYWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5tZW51X19oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMTMlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjBweCkge1xuICAubWVudV9faGVhZGluZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xuICAubWVudV9fbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgfVxufVxuLm1lbnVfX2l0ZW0ge1xuICBtYXJnaW4tcmlnaHQ6IDclO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLm1lbnVfX2l0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogNCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgLm1lbnVfX2l0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMiU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB9XG59XG4ubWVudV9fbGluazpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xufSIsIiRjb2xvci1tYWluOiAjMDAwMDAwO1xuJGNvbG9yLWFjY2VudDogI0ZGNjk5RjtcblxuJGZvbnQtZmFtaWx5LW1haW46IFwiTW9udHNlcnJhdFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LWFsdDogXCJSb2JvdG9cIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcblxuJG1lZGlhLW1vYjogNzYwcHg7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/section-coaches/section-coaches.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/section-coaches/section-coaches.component.ts ***!
  \**************************************************************/
/*! exports provided: SectionCoachesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionCoachesComponent", function() { return SectionCoachesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SectionCoachesComponent {
    constructor() { }
    ngOnInit() {
    }
}
SectionCoachesComponent.ɵfac = function SectionCoachesComponent_Factory(t) { return new (t || SectionCoachesComponent)(); };
SectionCoachesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionCoachesComponent, selectors: [["app-section-coaches"]], decls: 108, vars: 0, consts: [["id", "coaches", 1, "base-section", "coaches"], ["data-wow-delay", "0.1s", 1, "section-heading", "wow", "fadeInDown"], ["data-wow-delay", "0.3s", 1, "section-description", "wow", "fadeInDown"], [1, "coaches__inner"], ["data-wow-delay", "0.5s", 1, "base-card", "coaches__item", "coach-card", "wow", "fadeInUp"], ["src", "../../assets/coach1.jpg", "alt", "Coach photo", "loading", "lazy", 1, "coach-card__img"], [1, "coach-card__info", "d-flex", "flex-column"], [1, "coach-card__number"], [1, "base-heading-sm", "coach-card__name"], [1, "coach-card__position"], [1, "base-text", "coach-card__list"], [1, "coach-card__list-item"], [1, "blurred"], [1, "btn-accent", "coach-card__btn"], [1, "btn-accent", "coach-card__btn--mob"], ["data-wow-delay", "0.7s", 1, "base-card", "coaches__item", "coach-card", "wow", "fadeInUp"], ["src", "../../assets/coach2.jpg", "alt", "Coach photo", "loading", "lazy", 1, "coach-card__img"], [1, "base-card", "coaches__item", "coach-card"], [1, "coaches__navigation", "d-flex", "justify-center"], [1, "coaches__counter"]], template: function SectionCoachesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Our Coaches ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Coaches in our school are not only perfect dancers but also have a big experience in coaching that is why you will feel really amazing after each of your class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ann Walker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Dancer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Work experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "8 years ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Teacher for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "3 years ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Style ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Viennese Waltz, Salsa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Let\u2019s start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Tom Wilspon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Dancer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Work experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "10 years ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Teacher for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "5 years ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Style ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "HipHop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Let\u2019s start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Ann Walker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Dancer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Work experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "8 years ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Teacher for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "3 years ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Style ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Viennese Waltz, Salsa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Let\u2019s start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Tom Wilspon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Dancer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Work experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "10 years ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Teacher for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "5 years ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Style ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "HipHop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Let\u2019s start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@charset \"UTF-8\";\n.coaches__inner[_ngcontent-%COMP%] {\n  margin: -30px -16px -30px 0;\n}\n.coaches__item[_ngcontent-%COMP%] {\n  margin: 30px 16px 30px 0;\n}\n.coaches__navigation[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n@media only screen and (max-width: 960px) {\n  .coaches__navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.coaches__counter[_ngcontent-%COMP%] {\n  margin: 0 2%;\n}\n.coaches[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%] {\n  display: flex;\n}\n.coaches[_ngcontent-%COMP%]   .slick-arrow[_ngcontent-%COMP%] {\n  transition: color 0.2s linear;\n}\n.coaches[_ngcontent-%COMP%]   .slick-arrow[_ngcontent-%COMP%]:hover {\n  color: #FF699F;\n}\n.coaches[_ngcontent-%COMP%]   .slick-disabled[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n.coaches[_ngcontent-%COMP%]   .slick-disabled[_ngcontent-%COMP%]:hover {\n  color: inherit;\n}\n@media only screen and (max-width: 760px) {\n  .coach-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.coach-card__img[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 45%;\n}\n@media only screen and (max-width: 760px) {\n  .coach-card__img[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: 300px;\n    height: 100%;\n  }\n}\n.coach-card__info[_ngcontent-%COMP%] {\n  padding: 7% 5% 12%;\n  width: 100%;\n}\n@media only screen and (max-width: 760px) {\n  .coach-card__info[_ngcontent-%COMP%] {\n    padding-bottom: 0;\n  }\n}\n.coach-card__number[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 3%;\n}\n.coach-card__name[_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n}\n.coach-card__position[_ngcontent-%COMP%] {\n  margin-bottom: 8%;\n}\n.coach-card__list[_ngcontent-%COMP%] {\n  margin-bottom: 8%;\n}\n.coach-card__list-item[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n}\n.coach-card__btn[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  margin-top: auto;\n}\n@media only screen and (max-width: 760px) {\n  .coach-card__btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.coach-card__btn--mob[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  padding: 0;\n  border-radius: 50%;\n  min-width: 33px;\n  min-height: 33px;\n  position: absolute;\n  bottom: 5%;\n  transform: translateY(-50%);\n}\n@media only screen and (min-width: 760px) {\n  .coach-card__btn--mob[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.coach-card__btn--mob[_ngcontent-%COMP%]::after {\n  content: \"\u203A\";\n  font-size: 2rem;\n  position: absolute;\n  line-height: 0;\n  transform: translateX(-40%);\n  top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbi1jb2FjaGVzL3NlY3Rpb24tY29hY2hlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VjdGlvbi1jb2FjaGVzL0M6XFxnaXRcXHdlZGRpbmctYW5ndWxhci9zcmNcXGFwcFxcc2VjdGlvbi1jb2FjaGVzXFxzZWN0aW9uLWNvYWNoZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlY3Rpb24tY29hY2hlcy9DOlxcZ2l0XFx3ZWRkaW5nLWFuZ3VsYXIvc3JjXFxzY3NzXFxfdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0dkO0VBQ0UsMkJBQUE7QURESjtBQ0dFO0VBQ0Usd0JBQUE7QURESjtBQ0lFO0VBQ0UsZ0JBQUE7QURGSjtBQ0dJO0VBRkY7SUFHSSxhQUFBO0VEQUo7QUFDRjtBQ0VFO0VBQ0UsWUFBQTtBREFKO0FDRUU7RUFDRSxhQUFBO0FEQUo7QUNFRTtFQUNFLDZCQUFBO0FEQUo7QUNDSTtFQUNFLGNDeEJTO0FGeUJmO0FDRUU7RUFDRSxZQUFBO0FEQUo7QUNDSTtFQUNFLGNBQUE7QURDTjtBQ0tFO0VBREY7SUFFSSxzQkFBQTtFRERGO0FBQ0Y7QUNFRTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxVQUFBO0FEQUo7QUNDSTtFQUhGO0lBSUksV0FBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFREVKO0FBQ0Y7QUNBRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBREVKO0FDREk7RUFIRjtJQUlJLGlCQUFBO0VESUo7QUFDRjtBQ0ZFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBRElKO0FDRkU7RUFDRSxpQkFBQTtBRElKO0FDRkU7RUFDRSxpQkFBQTtBRElKO0FDRkU7RUFDRSxpQkFBQTtBRElKO0FDRkU7RUFDRSxpQkFBQTtBRElKO0FDRkU7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0FESUo7QUNISTtFQUhGO0lBSUksYUFBQTtFRE1KO0FBQ0Y7QUNMSTtFQUNFLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QURPTjtBQ05NO0VBVEY7SUFVSSxhQUFBO0VEU047QUFDRjtBQ1JNO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7QURVUiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb24tY29hY2hlcy9zZWN0aW9uLWNvYWNoZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29hY2hlc19faW5uZXIge1xuICBtYXJnaW46IC0zMHB4IC0xNnB4IC0zMHB4IDA7XG59XG4uY29hY2hlc19faXRlbSB7XG4gIG1hcmdpbjogMzBweCAxNnB4IDMwcHggMDtcbn1cbi5jb2FjaGVzX19uYXZpZ2F0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmNvYWNoZXNfX25hdmlnYXRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5jb2FjaGVzX19jb3VudGVyIHtcbiAgbWFyZ2luOiAwIDIlO1xufVxuLmNvYWNoZXMgLnNsaWNrLXNsaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jb2FjaGVzIC5zbGljay1hcnJvdyB7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgbGluZWFyO1xufVxuLmNvYWNoZXMgLnNsaWNrLWFycm93OmhvdmVyIHtcbiAgY29sb3I6ICNGRjY5OUY7XG59XG4uY29hY2hlcyAuc2xpY2stZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjM7XG59XG4uY29hY2hlcyAuc2xpY2stZGlzYWJsZWQ6aG92ZXIge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xuICAuY29hY2gtY2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLmNvYWNoLWNhcmRfX2ltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogNDUlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xuICAuY29hY2gtY2FyZF9faW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbi5jb2FjaC1jYXJkX19pbmZvIHtcbiAgcGFkZGluZzogNyUgNSUgMTIlO1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgLmNvYWNoLWNhcmRfX2luZm8ge1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG59XG4uY29hY2gtY2FyZF9fbnVtYmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuLmNvYWNoLWNhcmRfX25hbWUge1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cbi5jb2FjaC1jYXJkX19wb3NpdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDglO1xufVxuLmNvYWNoLWNhcmRfX2xpc3Qge1xuICBtYXJnaW4tYm90dG9tOiA4JTtcbn1cbi5jb2FjaC1jYXJkX19saXN0LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cbi5jb2FjaC1jYXJkX19idG4ge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xuICAuY29hY2gtY2FyZF9fYnRuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uY29hY2gtY2FyZF9fYnRuLS1tb2Ige1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtaW4td2lkdGg6IDMzcHg7XG4gIG1pbi1oZWlnaHQ6IDMzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjBweCkge1xuICAuY29hY2gtY2FyZF9fYnRuLS1tb2Ige1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5jb2FjaC1jYXJkX19idG4tLW1vYjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKAulwiO1xuICBmb250LXNpemU6IDJyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDAlKTtcbiAgdG9wOiAxcmVtO1xufSIsIkBpbXBvcnQgJ3ZhcnMnO1xuXG4uY29hY2hlcyB7XG4gICZfX2lubmVyIHtcbiAgICBtYXJnaW46IC0zMHB4IC0xNnB4IC0zMHB4IDA7XG4gIH1cbiAgJl9faXRlbSB7XG4gICAgbWFyZ2luOiAzMHB4IDE2cHggMzBweCAwO1xuXG4gIH1cbiAgJl9fbmF2aWdhdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICAmX19jb3VudGVyIHtcbiAgICBtYXJnaW46IDAgMiU7XG4gIH1cbiAgJiAuc2xpY2stc2xpZGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgJiAuc2xpY2stYXJyb3cge1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgbGluZWFyO1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRjb2xvci1hY2NlbnQ7XG4gICAgfVxuICB9XG4gICYgLnNsaWNrLWRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cbn1cblxuLmNvYWNoLWNhcmQge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYS1tb2IpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gICZfX2ltZyB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYS1tb2IpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG4gICZfX2luZm8ge1xuICAgIHBhZGRpbmc6IDclIDUlIDEyJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYS1tb2IpIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuICAmX19udW1iZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICB9XG4gICZfX25hbWUge1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICB9XG4gICZfX3Bvc2l0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4JTtcbiAgfVxuICAmX19saXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiA4JTtcbiAgfVxuICAmX19saXN0LWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICB9XG4gICZfX2J0biB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhLW1vYikge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgJi0tbW9iIHtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG1pbi13aWR0aDogMzNweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDMzcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDUlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWVkaWEtbW9iKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwi4oC6XCI7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MCUpO1xuICAgICAgICB0b3A6IDFyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiJGNvbG9yLW1haW46ICMwMDAwMDA7XG4kY29sb3ItYWNjZW50OiAjRkY2OTlGO1xuXG4kZm9udC1mYW1pbHktbWFpbjogXCJNb250c2VycmF0XCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktYWx0OiBcIlJvYm90b1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXG4kbWVkaWEtbW9iOiA3NjBweDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionCoachesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section-coaches',
                templateUrl: './section-coaches.component.html',
                styleUrls: ['./section-coaches.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/section-hero/section-hero.component.ts":
/*!********************************************************!*\
  !*** ./src/app/section-hero/section-hero.component.ts ***!
  \********************************************************/
/*! exports provided: SectionHeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionHeroComponent", function() { return SectionHeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SectionHeroComponent {
    constructor() { }
    ngOnInit() {
    }
}
SectionHeroComponent.ɵfac = function SectionHeroComponent_Factory(t) { return new (t || SectionHeroComponent)(); };
SectionHeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionHeroComponent, selectors: [["app-section-hero"]], decls: 12, vars: 0, consts: [[1, "hero", "base-section", "d-flex"], [1, "hero__inner", "d-flex", "flex-column", "justify-center"], ["data-wow-delay", "0.1s", 1, "hero__heading", "base-heading-xl", "wow", "fadeInDown"], ["data-wow-delay", "0.4s", 1, "hero__location", "base-heading-sm", "wow", "fadeIn"], ["data-wow-delay", "0.6s", 1, "base-text", "hero__info", "wow", "fadeIn"], ["data-wow-delay", "0.8s", 1, "btn-accent", "hero__btn", "wow", "fadeInUp"], [1, "hero__img-holder"], ["src", "../../assets/first-dance-i.jpg", "alt", "First Dance", "data-wow-delay", "1.2s", 1, "hero__img", "wow", "fadeIn"]], template: function SectionHeroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Wedding Dance Lessons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New Jersey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " The wedding dance is one of the most important dances in your life. You look perfect and the whole audience is looking at you. Also, it becomes the favorite moment you like to play on videos and photos. Feel the moment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Let\u2019s start ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".hero[_ngcontent-%COMP%] {\n  padding-top: 8vh;\n  height: 100vh;\n}\n@media screen and (orientation: portrait) {\n  .hero[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n}\n.hero__inner[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 100%;\n  background-color: #ffffff;\n  padding-right: 6%;\n}\n@media only screen and (orientation: portrait) {\n  .hero__inner[_ngcontent-%COMP%] {\n    width: 90%;\n    padding: 0 0 6%;\n    justify-content: flex-start;\n  }\n}\n.hero__heading[_ngcontent-%COMP%] {\n  margin-bottom: 4%;\n}\n.hero__location[_ngcontent-%COMP%] {\n  margin-bottom: 6%;\n  font-size: 1.5rem;\n}\n@media only screen and (max-width: 760px) {\n  .hero__location[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.hero__info[_ngcontent-%COMP%] {\n  margin-bottom: 8%;\n}\n.hero__btn[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n@media only screen and (orientation: portrait) {\n  .hero__img-holder[_ngcontent-%COMP%] {\n    margin: 0 -30px 10%;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 960px) {\n  .hero__img-holder[_ngcontent-%COMP%] {\n    margin: 0 -15px 10%;\n  }\n}\n.hero__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbi1oZXJvL0M6XFxnaXRcXHdlZGRpbmctYW5ndWxhci9zcmNcXGFwcFxcc2VjdGlvbi1oZXJvXFxzZWN0aW9uLWhlcm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlY3Rpb24taGVyby9zZWN0aW9uLWhlcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNERjtBREVFO0VBSEY7SUFJSSw4QkFBQTtFQ0NGO0FBQ0Y7QURBRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0VKO0FEREk7RUFMRjtJQU1JLFVBQUE7SUFDQSxlQUFBO0lBQ0EsMkJBQUE7RUNJSjtBQUNGO0FERkU7RUFDRSxpQkFBQTtBQ0lKO0FERkU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDSUo7QURISTtFQUhGO0lBSUksZUFBQTtFQ01KO0FBQ0Y7QURKRTtFQUNFLGlCQUFBO0FDTUo7QURKRTtFQUNFLHNCQUFBO0FDTUo7QURISTtFQURGO0lBRUksbUJBQUE7RUNNSjtBQUNGO0FETEk7RUFKRjtJQUtJLG1CQUFBO0VDUUo7QUFDRjtBRE5FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9uLWhlcm8vc2VjdGlvbi1oZXJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFycyc7XG5cbi5oZXJvIHtcbiAgcGFkZGluZy10b3A6IDh2aDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxuICAmX19pbm5lciB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2JTtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBwYWRkaW5nOiAwIDAgNiU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICB9XG4gICZfX2hlYWRpbmcge1xuICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICB9XG4gICZfX2xvY2F0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2JTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYS1tb2IpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbiAgJl9faW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogOCU7XG4gIH1cbiAgJl9fYnRuIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB9XG4gICZfX2ltZy1ob2xkZXIge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgbWFyZ2luOiAwIC0zMHB4IDEwJTtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICAgIG1hcmdpbjogMCAtMTVweCAxMCU7XG4gICAgfVxuICB9XG4gICZfX2ltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG59XG4iLCIuaGVybyB7XG4gIHBhZGRpbmctdG9wOiA4dmg7XG4gIGhlaWdodDogMTAwdmg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5oZXJvIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbn1cbi5oZXJvX19pbm5lciB7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy1yaWdodDogNiU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmhlcm9fX2lubmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDAgMCA2JTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cbi5oZXJvX19oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogNCU7XG59XG4uaGVyb19fbG9jYXRpb24ge1xuICBtYXJnaW4tYm90dG9tOiA2JTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIC5oZXJvX19sb2NhdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4uaGVyb19faW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IDglO1xufVxuLmhlcm9fX2J0biB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmhlcm9fX2ltZy1ob2xkZXIge1xuICAgIG1hcmdpbjogMCAtMzBweCAxMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5oZXJvX19pbWctaG9sZGVyIHtcbiAgICBtYXJnaW46IDAgLTE1cHggMTAlO1xuICB9XG59XG4uaGVyb19faW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionHeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section-hero',
                templateUrl: './section-hero.component.html',
                styleUrls: ['./section-hero.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/section-offer/section-offer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/section-offer/section-offer.component.ts ***!
  \**********************************************************/
/*! exports provided: SectionOfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionOfferComponent", function() { return SectionOfferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SectionOfferComponent {
    constructor() { }
    ngOnInit() {
    }
}
SectionOfferComponent.ɵfac = function SectionOfferComponent_Factory(t) { return new (t || SectionOfferComponent)(); };
SectionOfferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionOfferComponent, selectors: [["app-section-offer"]], decls: 38, vars: 0, consts: [["id", "offer", 1, "base-section", "offer"], ["data-wow-delay", "0.1s", 1, "section-heading", "wow", "fadeInDown"], ["data-wow-delay", "0.3s", 1, "section-description", "wow", "fadeInDown"], [1, "offer__inner", "d-flex"], ["data-wow-delay", "0.4s", 1, "offer__item", "d-flex", "align-center", "flex-column", "wow", "fadeInUp"], [1, "icon", "icon-coaches", "offer__icon"], [1, "offer__description"], ["data-wow-delay", "0.5s", 1, "offer__item", "d-flex", "align-center", "flex-column", "wow", "fadeInUp"], [1, "icon", "icon-door", "offer__icon"], ["data-wow-delay", "0.6s", 1, "offer__item", "d-flex", "align-center", "flex-column", "wow", "fadeInUp"], [1, "icon", "icon-coffee", "offer__icon"], ["data-wow-delay", "0.7s", 1, "offer__item", "d-flex", "align-center", "flex-column", "wow", "fadeInUp"], [1, "icon", "icon-form", "offer__icon"], ["data-wow-delay", "0.8s", 1, "offer__item", "d-flex", "align-center", "flex-column", "wow", "fadeInUp"], [1, "icon", "icon-star", "offer__icon"], ["data-wow-delay", "0.9s", 1, "offer__item", "d-flex", "align-center", "flex-column", "wow", "fadeInUp"], [1, "icon", "icon-fun", "offer__icon"], ["data-wow-delay", "1s", 1, "offer__item", "d-flex", "align-center", "flex-column", "wow", "fadeInUp"], [1, "icon", "icon-photos", "offer__icon"], ["data-wow-delay", "1.1s", 1, "offer__item", "d-flex", "align-center", "flex-column", "wow", "fadeInUp"], [1, "icon", "icon-happy", "offer__icon"]], template: function SectionOfferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " What we offer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Our goal is not only to teach you how to dance but also give the best unforgettable memories about preparing to your event ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Talented Coaches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cozy rooms for training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Coffee, tea, and cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Good physical form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Self Confidence and success on your event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Exciting emotions and a lot of fun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Great photos from your event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Spend hours together in happiness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".offer__inner[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  margin-bottom: -3%;\n}\n.offer__item[_ngcontent-%COMP%] {\n  width: 24%;\n  margin-bottom: 6%;\n}\n@media only screen and (max-width: 760px) {\n  .offer__item[_ngcontent-%COMP%] {\n    width: 49%;\n    margin-bottom: 10%;\n  }\n}\n.offer__icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #FF699F;\n  margin-bottom: 4%;\n}\n.offer__description[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 1.5rem;\n  max-width: 65%;\n}\n@media only screen and (max-width: 760px) {\n  .offer__description[_ngcontent-%COMP%] {\n    max-width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbi1vZmZlci9DOlxcZ2l0XFx3ZWRkaW5nLWFuZ3VsYXIvc3JjXFxhcHBcXHNlY3Rpb24tb2ZmZXJcXHNlY3Rpb24tb2ZmZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlY3Rpb24tb2ZmZXIvc2VjdGlvbi1vZmZlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VjdGlvbi1vZmZlci9DOlxcZ2l0XFx3ZWRkaW5nLWFuZ3VsYXIvc3JjXFxzY3NzXFxfdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDRko7QURJRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0ZKO0FER0k7RUFIRjtJQUlJLFVBQUE7SUFDQSxrQkFBQTtFQ0FKO0FBQ0Y7QURFRTtFQUNFLGVBQUE7RUFDQSxjRWhCVztFRmlCWCxpQkFBQTtBQ0FKO0FERUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKO0FEQ0k7RUFKRjtJQUtJLGNBQUE7RUNFSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbi1vZmZlci9zZWN0aW9uLW9mZmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFycyc7XG5cbi5vZmZlciB7XG4gICZfX2lubmVyIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLWJvdHRvbTogLTMlO1xuICB9XG4gICZfX2l0ZW0ge1xuICAgIHdpZHRoOiAyNCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNiU7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWEtbW9iKSB7XG4gICAgICB3aWR0aDogNDklO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgIH1cbiAgfVxuICAmX19pY29uIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgY29sb3I6ICRjb2xvci1hY2NlbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gIH1cbiAgJl9fZGVzY3JpcHRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIG1heC13aWR0aDogNjUlO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhLW1vYikge1xuICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgfVxuICB9XG59IiwiLm9mZmVyX19pbm5lciB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogLTMlO1xufVxuLm9mZmVyX19pdGVtIHtcbiAgd2lkdGg6IDI0JTtcbiAgbWFyZ2luLWJvdHRvbTogNiU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIC5vZmZlcl9faXRlbSB7XG4gICAgd2lkdGg6IDQ5JTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gIH1cbn1cbi5vZmZlcl9faWNvbiB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgY29sb3I6ICNGRjY5OUY7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xufVxuLm9mZmVyX19kZXNjcmlwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgbWF4LXdpZHRoOiA2NSU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIC5vZmZlcl9fZGVzY3JpcHRpb24ge1xuICAgIG1heC13aWR0aDogOTAlO1xuICB9XG59IiwiJGNvbG9yLW1haW46ICMwMDAwMDA7XG4kY29sb3ItYWNjZW50OiAjRkY2OTlGO1xuXG4kZm9udC1mYW1pbHktbWFpbjogXCJNb250c2VycmF0XCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktYWx0OiBcIlJvYm90b1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXG4kbWVkaWEtbW9iOiA3NjBweDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionOfferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section-offer',
                templateUrl: './section-offer.component.html',
                styleUrls: ['./section-offer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/section-services/section-services.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/section-services/section-services.component.ts ***!
  \****************************************************************/
/*! exports provided: SectionServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionServicesComponent", function() { return SectionServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SectionServicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
SectionServicesComponent.ɵfac = function SectionServicesComponent_Factory(t) { return new (t || SectionServicesComponent)(); };
SectionServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionServicesComponent, selectors: [["app-section-services"]], decls: 38, vars: 0, consts: [["id", "services", 1, "base-section", "services"], ["data-wow-delay", "0.1s", 1, "section-heading", "wow", "fadeInDown"], ["data-wow-delay", "0.3s", 1, "section-description", "wow", "fadeInDown"], [1, "services__inner", "d-flex", "justify-between"], ["data-wow-delay", "0.5s", 1, "base-card", "services__item", "service-card", "d-flex", "flex-column", "wow", "fadeInUp"], ["src", "../../assets/services1.jpg", "alt", "For Bride and Groom", "loading", "lazy", 1, "service-card__img"], [1, "service-card__info"], [1, "base-heading-sm", "service-card__heading"], [1, "base-text"], [1, "service-card__point"], ["data-wow-delay", "0.7s", 1, "base-card", "services__item", "service-card", "d-flex", "flex-column", "wow", "fadeInUp"], ["src", "../../assets/services2.jpg", "alt", "For Bride and Groom", "loading", "lazy", 1, "service-card__img"], ["data-wow-delay", "0.9s", 1, "base-card", "services__item", "service-card", "d-flex", "flex-column", "wow", "fadeInUp"], ["src", "../../assets/services3.jpg", "alt", "For Bride and Groom", "loading", "lazy", 1, "service-card__img"]], template: function SectionServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Our Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " We want to make your wedding day perfect that is why suggest a lot of options for dance: not only for a bride and groom but for their friends and relatives ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " For Bride and Groom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "First Dance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Parent & Child Dance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "For Guests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Groomsmen Dance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Parent Dance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Children\u2019s Dance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Other events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Bridal Party Dance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Anniversary Dance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".services__inner[_ngcontent-%COMP%] {\n  margin: 0 -8px;\n}\n@media only screen and (max-width: 760px) {\n  .services__inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.services__item[_ngcontent-%COMP%] {\n  margin: 0 8px 30px;\n}\n.service-card__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n  max-width: 421px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n@media only screen and (max-width: 760px) {\n  .service-card__img[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.service-card__info[_ngcontent-%COMP%] {\n  padding: 10% 6% 18%;\n}\n.service-card__heading[_ngcontent-%COMP%] {\n  margin-bottom: 6%;\n}\n.service-card__point[_ngcontent-%COMP%] {\n  margin-bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbi1zZXJ2aWNlcy9DOlxcZ2l0XFx3ZWRkaW5nLWFuZ3VsYXIvc3JjXFxhcHBcXHNlY3Rpb24tc2VydmljZXNcXHNlY3Rpb24tc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlY3Rpb24tc2VydmljZXMvc2VjdGlvbi1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGNBQUE7QUNGSjtBREdJO0VBRkY7SUFHSSxzQkFBQTtFQ0FKO0FBQ0Y7QURFRTtFQUNFLGtCQUFBO0FDQUo7QURLRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDRko7QURHSTtFQUxGO0lBTUksZUFBQTtFQ0FKO0FBQ0Y7QURFRTtFQUNFLG1CQUFBO0FDQUo7QURFRTtFQUNFLGlCQUFBO0FDQUo7QURFRTtFQUNFLGlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9uLXNlcnZpY2VzL3NlY3Rpb24tc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJzJztcblxuLnNlcnZpY2VzIHtcbiAgJl9faW5uZXIge1xuICAgIG1hcmdpbjogMCAtOHB4O1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhLW1vYikge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIH1cbiAgJl9faXRlbSB7XG4gICAgbWFyZ2luOiAwIDhweCAzMHB4O1xuICB9XG59XG5cbi5zZXJ2aWNlLWNhcmQge1xuICAmX19pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjAlO1xuICAgIG1heC13aWR0aDogNDIxcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWEtbW9iKSB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gICZfX2luZm8ge1xuICAgIHBhZGRpbmc6IDEwJSA2JSAxOCU7XG4gIH1cbiAgJl9faGVhZGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNiU7XG4gIH1cbiAgJl9fcG9pbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICB9XG59IiwiLnNlcnZpY2VzX19pbm5lciB7XG4gIG1hcmdpbjogMCAtOHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xuICAuc2VydmljZXNfX2lubmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4uc2VydmljZXNfX2l0ZW0ge1xuICBtYXJnaW46IDAgOHB4IDMwcHg7XG59XG5cbi5zZXJ2aWNlLWNhcmRfX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgbWF4LXdpZHRoOiA0MjFweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIC5zZXJ2aWNlLWNhcmRfX2ltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG4uc2VydmljZS1jYXJkX19pbmZvIHtcbiAgcGFkZGluZzogMTAlIDYlIDE4JTtcbn1cbi5zZXJ2aWNlLWNhcmRfX2hlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiA2JTtcbn1cbi5zZXJ2aWNlLWNhcmRfX3BvaW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section-services',
                templateUrl: './section-services.component.html',
                styleUrls: ['./section-services.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\git\wedding-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map