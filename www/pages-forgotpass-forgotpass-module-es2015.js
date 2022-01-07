(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgotpass-forgotpass-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgotpass/forgotpass.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgotpass/forgotpass.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Forgot Password:</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <div class=\"loginform\">\r\n    <h2>Forgot Password:</h2>\r\n    <form action=\"\">\r\n      <div class=\"form-group\">\r\n        \r\n            <label for=\"email\" >Email:    </label>\r\n          \r\n            <input type=\"email\" [formControl]=\"userEmail\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" name=\"email\" required>\r\n        \r\n      </div>\r\n     \r\n      <div class=\"form-group form-check\">\r\n        <a [routerLink]=\"['/']\">Login?</a>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onReset()\">Send</button>\r\n    </form>\r\n  </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/forgotpass/forgotpass-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/forgotpass/forgotpass-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ForgotpassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPageRoutingModule", function() { return ForgotpassPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpass.page */ "./src/app/pages/forgotpass/forgotpass.page.ts");




const routes = [
    {
        path: '',
        component: _forgotpass_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpassPage"]
    }
];
let ForgotpassPageRoutingModule = class ForgotpassPageRoutingModule {
};
ForgotpassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotpassPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/forgotpass/forgotpass.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/forgotpass/forgotpass.module.ts ***!
  \*******************************************************/
/*! exports provided: ForgotpassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPageModule", function() { return ForgotpassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _forgotpass_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpass-routing.module */ "./src/app/pages/forgotpass/forgotpass-routing.module.ts");
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpass.page */ "./src/app/pages/forgotpass/forgotpass.page.ts");








let ForgotpassPageModule = class ForgotpassPageModule {
};
ForgotpassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgotpass_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpassPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
        ],
        declarations: [_forgotpass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassPage"]]
    })
], ForgotpassPageModule);



/***/ }),

/***/ "./src/app/pages/forgotpass/forgotpass.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/forgotpass/forgotpass.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loginform {\n  background-color: #3880FF;\n  text-align: center;\n  color: white;\n  margin: 1em;\n  font-weight: bold;\n}\n\n.form-group {\n  margin: 0;\n}\n\n.button {\n  width: 5em;\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ290cGFzcy9mb3Jnb3RwYXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBREo7O0FBS0E7RUFFRyxTQUFBO0FBSEg7O0FBTUE7RUFDSSxVQUFBO0VBQ0EsdUJBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdvdHBhc3MvZm9yZ290cGFzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5mb3JtXHJcbiB7XHJcbiAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODBGRjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcblxyXG4uZm9ybS1ncm91cFxyXG4ge1xyXG4gICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgICB3aWR0aDogNWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/forgotpass/forgotpass.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/forgotpass/forgotpass.page.ts ***!
  \*****************************************************/
/*! exports provided: ForgotpassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPage", function() { return ForgotpassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let ForgotpassPage = class ForgotpassPage {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
        this.userEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
    }
    ngOnInit() {
    }
    onReset() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const email = this.userEmail.value;
                yield this.authSvc.resetPassword(email);
                window.alert('Email sent, check your inbox');
                this.router.navigate(['/']);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
};
ForgotpassPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ForgotpassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpass',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgotpass.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgotpass/forgotpass.page.html")).default,
        providers: [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgotpass.page.scss */ "./src/app/pages/forgotpass/forgotpass.page.scss")).default]
    })
], ForgotpassPage);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");



let AuthService = class AuthService {
    constructor(afAuth) {
        this.afAuth = afAuth;
    }
    resetPassword(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return this.afAuth.sendPasswordResetEmail(email);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ })

}]);
//# sourceMappingURL=pages-forgotpass-forgotpass-module-es2015.js.map