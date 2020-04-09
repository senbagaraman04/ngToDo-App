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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n\n  <h4>Todo App</h4>\n<form>\n  <div class=\"form-group\"></div>\n  <input [(ngModel)] = \"inputString\" type=\"text\" name=\"inputString\" class=\"form-control\" [value] = [inputString] (keyup.enter)=submitToDo(inputString)>\n  <span class=\"input-group-text\" (click)=\"submitToDo(inputString)\">\n    <i class=\"material-icons\">add</i></span>\n    <hr>\n    <marquee>{{returnMessage}}</marquee>\n    <div class=\"List\">\n        \n            <p *ngFor=\"let item of toDoContain\">\n             <input type=\"checkbox\" class=\"listOfItems\" value=\"1\">\n             <label for=\"list\" class=\"strike\">{{item}} </label> \n             <img src=\"https://img.icons8.com/material/24/000000/delete-trash.png\" (click) = \"removeTask($event.target,item)\" class=\"deleteIcon\" alt=\"Delete Icon\">\n            </p>\n          \n    </div>\n</form>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n}\r\nform{\r\n\tmax-width: 30em;\r\n\tmargin: 4em auto;\r\n\tposition: relative;\r\n    background: #f4f4f4;\r\n    padding: 2em 3em;\r\n    overflow: hidden;\r\n}\r\nform h1{\r\n    font-family: \"Raleway\";\r\n    color:#F97300; \r\n}\r\ninput[type=text]::-webkit-input-placeholder{\r\n   font-family: \"Raleway\";\r\n   color:#666; \r\n}\r\ninput[type=text]::-moz-placeholder{\r\n   font-family: \"Raleway\";\r\n   color:#666; \r\n}\r\ninput[type=text]::-ms-input-placeholder{\r\n   font-family: \"Raleway\";\r\n   color:#666; \r\n}\r\ninput[type=text]::placeholder{\r\n   font-family: \"Raleway\";\r\n   color:#666; \r\n}\r\nform .data{\r\n    margin-top: 1em;\r\n}\r\nform .data li{\r\n background: #fff;\r\n border-left: 4px solid #F97300;\r\n padding: 1em;\r\n margin: 1em auto;\r\n color: #666;\r\n font-family: \"Raleway\";\r\n}\r\nform .data li i{\r\n    float: right;\r\n    color: #888;\r\n    cursor: pointer;\r\n}\r\n.input-group-text{\r\n    background: #F97300;\r\n    border-radius: 50%;\r\n    width: 5em;\r\n    height: 5em;\r\n    padding: 1em 23px;\r\n    color: #fff;\r\n    position: absolute;\r\n    right: 19px;\r\n    top: 30px;\r\n    cursor: pointer;    \r\n}\r\n.form-control:focus{\r\n\tbox-shadow: 0;\r\n}\r\n.listOfItems:checked + .strike{\r\n    text-decoration: line-through;\r\n  }\r\nimg.deleteIcon {\r\n    position: absolute;\r\n    right: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxVQUFVO0NBQ1YsU0FBUztBQUNWO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjtBQUNBO0dBQ0csc0JBQXNCO0dBQ3RCLFVBQVU7QUFDYjtBQUhBO0dBQ0csc0JBQXNCO0dBQ3RCLFVBQVU7QUFDYjtBQUhBO0dBQ0csc0JBQXNCO0dBQ3RCLFVBQVU7QUFDYjtBQUhBO0dBQ0csc0JBQXNCO0dBQ3RCLFVBQVU7QUFDYjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLDhCQUE4QjtDQUM5QixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxzQkFBc0I7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZUFBZTtBQUNuQjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBRUE7SUFDSSw2QkFBNkI7RUFDL0I7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuZm9ybXtcclxuXHRtYXgtd2lkdGg6IDMwZW07XHJcblx0bWFyZ2luOiA0ZW0gYXV0bztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgcGFkZGluZzogMmVtIDNlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuZm9ybSBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuICAgIGNvbG9yOiNGOTczMDA7IFxyXG59XHJcbmlucHV0W3R5cGU9dGV4dF06OnBsYWNlaG9sZGVye1xyXG4gICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbiAgIGNvbG9yOiM2NjY7IFxyXG59XHJcbmZvcm0gLmRhdGF7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuZm9ybSAuZGF0YSBsaXtcclxuIGJhY2tncm91bmQ6ICNmZmY7XHJcbiBib3JkZXItbGVmdDogNHB4IHNvbGlkICNGOTczMDA7XHJcbiBwYWRkaW5nOiAxZW07XHJcbiBtYXJnaW46IDFlbSBhdXRvO1xyXG4gY29sb3I6ICM2NjY7XHJcbiBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XHJcbn1cclxuZm9ybSAuZGF0YSBsaSBpe1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmlucHV0LWdyb3VwLXRleHR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjk3MzAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDVlbTtcclxuICAgIGhlaWdodDogNWVtO1xyXG4gICAgcGFkZGluZzogMWVtIDIzcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxOXB4O1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgICBcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3Vze1xyXG5cdGJveC1zaGFkb3c6IDA7XHJcbn1cclxuXHJcbi5saXN0T2ZJdGVtczpjaGVja2VkICsgLnN0cmlrZXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gIH1cclxuXHJcbiAgaW1nLmRlbGV0ZUljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDUwcHg7XHJcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'toDoApp';
        this.toDoContain = []; //Initialize an empty array 
        this.returnMessage = null;
    }
    submitToDo(inputString) {
        console.log("Entered Input String");
        console.log(inputString);
        if (inputString == undefined || inputString == rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"]) {
            console.log("Empty");
        }
        else {
            if (this.toDoContain.includes(inputString.toLowerCase())) {
                //this.returnMessage = " "; 
                alert("Already Added");
                inputString = rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"];
            }
            else {
                this.toDoContain.push(inputString);
            }
            //this.returnMessage = "Your Input has been received"; 
        }
    }
    removeTask(a, removedItem) {
        console.log("Removed the data");
        console.log("222222222222");
        console.log(a);
        this.toDoContain.slice(this.toDoContain.indexOf(removedItem), 1);
        a.remove;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Learning\angularNew\new\toDo\toDoApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map