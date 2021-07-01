(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+x+M":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 0, vars: 0, template: function HomeComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                template: `

  `,
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Coding\MidiTools\src\main.ts */"zUnb");


/***/ }),

/***/ "4Pve":
/*!********************************************!*\
  !*** ./src/app/midi/midi-tab.component.ts ***!
  \********************************************/
/*! exports provided: MidiTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MidiTabComponent", function() { return MidiTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pirate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pirate.service */ "OjCT");





const _c0 = ["i"];
const _c1 = ["tun"];
const _c2 = ["ausgabe"];
const _c3 = ["sort"];
class MidiTabComponent {
    constructor(pirateService) {
        this.pirateService = pirateService;
        this.sortPattern = true;
    }
    ngOnInit() {
    }
    tabWrite(name = "tab Write", tuning = "dropped", sortPattern = this.sortPattern) {
        console.log(sortPattern);
        //console.log(this.supported);
        this.pirateService.tabWrite(this.input.nativeElement.value, this.tuner.nativeElement.value, sortPattern);
        //this.readTab();
    }
    readTab() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.tabContent = yield this.pirateService.readTab();
            this.ausgabe.nativeElement.value = this.tabContent;
            this.sort.nativeElement = true;
        });
    }
}
MidiTabComponent.ɵfac = function MidiTabComponent_Factory(t) { return new (t || MidiTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_pirate_service__WEBPACK_IMPORTED_MODULE_2__["PirateService"])); };
MidiTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MidiTabComponent, selectors: [["app-midi-tab"]], viewQuery: function MidiTabComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tuner = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ausgabe = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 33, vars: 0, consts: [[1, "row"], [1, "col-sm-3"], ["type", "text", "value", "Songname"], ["i", ""], ["name", "tuning", 1, "custom-select-sm"], ["tun", ""], ["value", "standard"], ["value", "dropped"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckChecked", "checked", "", 1, "form-check-input"], ["sort", ""], ["for", "flexCheckChecked", 1, "form-check-label"], [1, "form-group"], ["for", "comment"], ["rows", "17", "cols", "70", "id", "comment", 1, "form-control"], ["ausgabe", ""], [1, "midis"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"]], template: function MidiTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "E-Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "D-Dropped");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Sort pattern ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "textarea", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MidiTabComponent_Template_button_click_28_listener() { return ctx.tabWrite(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Create Bass TAB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MidiTabComponent_Template_button_click_31_listener() { return ctx.readTab(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Open file in editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%] { padding: 5px; align-items: center; display: flex; justify-content: center;}", "textarea[_ngcontent-%COMP%] { background-color: darkgray; background-image: linear-gradient(hsl(190,10%,98%), hsl(190,10%,94%)); padding: 1ex; font-size: 0.75em; box-sizing: border-box; color: black}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MidiTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-midi-tab',
                template: `

  <div class="row">
    <div class="col-sm-3"> 
      <input type="text" #i value="Songname">
    </div>
    <div class="col-sm-3">  
      <form>
        <select name="tuning" class="custom-select-sm" #tun>
          <option value="standard" >E-Standard</option>
          <option value="dropped">D-Dropped</option>
        </select>
      </form>
    </div>
    <div class="col-sm-3">  
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" #sort checked>
        <label class="
        form-check-label" for="flexCheckChecked">
           Sort pattern
        </label>
      </div>
    </div>
  </div>

  <div class="form-group">
  <label for="comment"></label>
  <pre>
    <textarea class="form-control" rows="17" cols="70" id="comment" #ausgabe></textarea>
  </pre>
  </div>  

  <section>
  <div class="midis">
    <div>
      <button type="button" class="btn btn-outline-secondary" (click)="tabWrite()">Create Bass TAB</button>
    </div>
    <div>
      <button type="button" class="btn btn-outline-secondary" (click)="readTab()">Open file in editor</button>
    </div>
 </div>
</section>




  `,
                styles: [
                    'div { padding: 5px; align-items: center; display: flex; justify-content: center;}',
                    'textarea { background-color: darkgray; background-image: linear-gradient(hsl(190,10%,98%), hsl(190,10%,94%)); padding: 1ex; font-size: 0.75em; box-sizing: border-box; color: black}'
                ]
            }]
    }], function () { return [{ type: _pirate_service__WEBPACK_IMPORTED_MODULE_2__["PirateService"] }]; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["i"]
        }], tuner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["tun"]
        }], ausgabe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["ausgabe"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['sort']
        }] }); })();


/***/ }),

/***/ "5hGD":
/*!*************************************!*\
  !*** ./src/app/header.component.ts ***!
  \*************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["active"]; };
const _c1 = function () { return ["tab"]; };
const _c2 = function () { return ["converter"]; };
const _c3 = function () { return ["other"]; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 11, vars: 12, consts: [[1, "container"], [1, "nav", "nav-tabs"], [1, "nav-item"], [1, "nav-link", 3, "routerLinkActive", "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tab Creator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Converter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                template: `

  <div class="container">
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link" [routerLinkActive]="['active']" [routerLink]="['tab']">Tab Creator</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" [routerLinkActive]="['active']" [routerLink]="['converter']">Converter</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" [routerLinkActive]="['active']" [routerLink]="['other']">Other</a>
  </li>
  </ul>
  
  </div>


  `,
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    desktop: true
};


/***/ }),

/***/ "IFme":
/*!*****************************************!*\
  !*** ./src/app/midi/other.component.ts ***!
  \*****************************************/
/*! exports provided: OtherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherComponent", function() { return OtherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! howler */ "HlzF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pirate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pirate.service */ "OjCT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["tem"];
const _c1 = ["i"];
function OtherComponent_div_28_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherComponent_div_28_button_4_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.setStep($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const u_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](step_r6.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r5.buttonArray[u_r4][i_r7].color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", step_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", step_r6.id + 1, " ");
} }
function OtherComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OtherComponent_div_28_button_4_Template, 2, 7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instrument_r3 = ctx.$implicit;
    const u_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.instrumentsMidi[u_r4], " C3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", instrument_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.instruments[u_r4], "");
} }
class OtherComponent {
    /*
    toggle5 = true;
    status = 'Enable'; */
    constructor(pirateService) {
        this.pirateService = pirateService;
        this.instruments = ["kick", "snare", "hihat_cl", "hihat_ho", "tom_lo", "tom_hi", "crash_le", "crash_ri"];
        this.instrumentsMidi = [60, 62, 66, 68, 72, 71, 73, 74];
        this.buttonArray = new Array();
        this.sequencerArray = new Array();
        this.pattern1 = [[127, 0, 0, 0, 127, 0, 0, 0, 127, 0, 0, 0, 127, 0, 0, 0],
            [0, 0, 127, 0, 0, 0, 127, 0, 0, 0, 127, 0, 0, 0, 127, 0],
            [0, 0, 127, 0, 127, 0, 127, 0, 127, 0, 127, 0, 127, 0, 127, 0],
            [127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        this.pattern0 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        this.counter = 0;
        this.isPlaying = false;
        this.soundKick = new howler__WEBPACK_IMPORTED_MODULE_1__["Howl"]({ src: ['assets/drums/kick.wav'] });
        this.soundSnare = new howler__WEBPACK_IMPORTED_MODULE_1__["Howl"]({ src: ['assets/drums/snare.wav'], volume: 0.7 });
        this.soundHatCl = new howler__WEBPACK_IMPORTED_MODULE_1__["Howl"]({ src: ['assets/drums/hihat_cl.wav'], volume: 0.2 });
        this.soundHatHaOp = new howler__WEBPACK_IMPORTED_MODULE_1__["Howl"]({ src: ['assets/drums/hihat_ho.wav'], volume: 0.2 });
        this.soundTomLo = new howler__WEBPACK_IMPORTED_MODULE_1__["Howl"]({ src: ['assets/drums/tom_lo.wav'], volume: 0.3 });
        this.soundTomHi = new howler__WEBPACK_IMPORTED_MODULE_1__["Howl"]({ src: ['assets/drums/tom_hi.wav'], volume: 0.3 });
        this.soundCrashLe = new howler__WEBPACK_IMPORTED_MODULE_1__["Howl"]({ src: ['assets/drums/crash_le.wav'], volume: 0.3 });
        this.soundCrashRi = new howler__WEBPACK_IMPORTED_MODULE_1__["Howl"]({ src: ['assets/drums/crash_ri.wav'], volume: 0.3 });
        this.addList(this.instruments);
        this.interval = 125;
    }
    loadPattern() {
        this.sequencerArray = Array.from(this.pattern1);
    }
    clearPattern() {
        //this.addList(this.instruments);
        this.sequencerArray = this.pattern0;
    }
    changeTempo() {
        // calculate interval time of bpm
        this.interval = this.calculateBpm(this.tempo.nativeElement.value);
        // quick and dirty, sequencer starts after changing tempo
        this.stopStuff();
        this.startSequencer();
    }
    calculateBpm(bpm) {
        // 120 bpm 1 beat = 500 ms
        // 120 bp60s = 2 bps = 500 ms
        // 0.5 s 
        return 60000 / (bpm * 4);
    }
    // build button + sequencer arrays
    addList(instruments) {
        for (let j = 0; j < instruments.length; j++) {
            var buttonSubArray = new Array();
            var sequencerSubArray = new Array();
            for (let i = 0; i < 16; i++) {
                buttonSubArray[i] = new Object();
                buttonSubArray[i].id = i;
                buttonSubArray[i].class = instruments[j];
                buttonSubArray[i].click = this.toggle(i);
                buttonSubArray[i].stepActive = false;
                buttonSubArray[i].color = "white";
                // 0 means no volume == false, sequencerArray saves dynamic velocity
                sequencerSubArray.push(0);
            }
            this.buttonArray[j] = buttonSubArray;
            this.sequencerArray[j] = sequencerSubArray;
        }
        //console.log(this.sequencerArray);
    }
    setStep(event) {
        const button = event.target;
        //console.log(button.id);
        //console.log(button.className);
        let row;
        row = this.instruments.indexOf(button.className);
        if (this.buttonArray[row][button.id].stepActive == true) {
            this.sequencerArray[row][button.id] = 0;
            this.buttonArray[row][button.id].stepActive = false;
            this.buttonArray[row][button.id].color = "white";
        }
        else {
            this.sequencerArray[row][button.id] = 127;
            this.buttonArray[row][button.id].stepActive = true;
            this.buttonArray[row][button.id].color = "grey";
        }
        console.log("sequencer");
        console.log(this.sequencerArray);
        console.log("button");
        console.log(this.buttonArray);
        /*
        this.toggle5 = !this.toggle5;
        this.status = this.toggle5 ? 'Enable' : 'Disable';*/
        // delete next line!!
        //this.sequencerArray = this.pattern1;
        //console.log(this.sequencerArray);
    }
    stopStuff() {
        clearInterval(this.timer);
        //console.log(this.tempo.nativeElement.value);
    }
    startSequencer() {
        //console.log("1 "+this.isPlaying);
        this.isPlaying = true;
        this.counter = 0;
        this.timer = setInterval(() => {
            if (this.isPlaying == true) {
                console.log(this.sequencerArray[0][15]);
                for (let i = 0; i < this.sequencerArray.length; i++) {
                    //console.log(i)
                    if (this.counter == 0) {
                        if (this.sequencerArray[i][15] == 127) {
                            this.buttonArray[i][15].color = "grey";
                        }
                        else {
                            this.buttonArray[i][15].color = "white";
                        }
                    }
                    else if (this.counter != 0) {
                        if (this.sequencerArray[i][this.counter - 1] == 127) {
                            this.buttonArray[i][this.counter - 1].color = "grey";
                        }
                        else {
                            this.buttonArray[i][this.counter - 1].color = "white";
                        }
                    }
                    if (this.sequencerArray[i][this.counter] == 127) {
                        this.buttonArray[i][this.counter].color = "red";
                        switch (i) {
                            case 0:
                                this.soundKick.play();
                                break;
                            case 1:
                                this.soundSnare.play();
                                break;
                            case 2:
                                this.soundHatCl.play();
                                break;
                            case 3:
                                this.soundHatHaOp.play();
                                break;
                            case 4:
                                this.soundTomLo.play();
                                break;
                            case 5:
                                this.soundTomHi.play();
                                break;
                            case 6:
                                this.soundCrashLe.play();
                                break;
                            case 7:
                                this.soundCrashRi.play();
                                break;
                            default:
                                break;
                        }
                    }
                    else {
                        this.buttonArray[i][this.counter].color = "blue";
                    }
                }
                //console.log(this.pattern1);
                this.counter += 1;
                if (this.counter >= this.sequencerArray[0].length) {
                    this.counter = 0;
                }
            }
        }, this.interval);
    }
    playAudio() {
        //console.log("Playing Sound");
        let audio = new Audio();
        //Can externalize the variables
        audio.src = "./../../src/assets/kick.wav";
        audio.load();
        audio.play();
    }
    toggle(button) {
        this.buttonValue = button.id;
        // console.log(this.buttonValue);
    }
    /*
    toggle2(event: Event): void {
      let elementId: string = (event.target as Element).id;
      
  }
  
    getButtonId(event: Event){
      var target = event.target || event.srcElement || event.currentTarget;
      var idAttr = target.attributes.id;
      var value = idAttr.nodeValue;
    }*/
    ngOnInit() {
    }
}
OtherComponent.ɵfac = function OtherComponent_Factory(t) { return new (t || OtherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pirate_service__WEBPACK_IMPORTED_MODULE_2__["PirateService"])); };
OtherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtherComponent, selectors: [["app-other"]], viewQuery: function OtherComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tempo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, decls: 40, vars: 1, consts: [[1, "container", "p-3", "my-3", "bg-dark", "text-white"], [1, "container", "shadow", "min-vh-50", "py-2"], [1, "row"], [1, "col"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["for", "inputsm"], ["id", "inputdefault", "type", "number", "min", "60", "max", "240", "value", "120", 1, "form-control", 3, "change"], ["tem", ""], ["name", "drumkit", 1, "custom-select-sm"], ["kit", ""], ["value", "rock"], ["value", "electro"], [1, "container"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "note"], [3, "background-color", "class", "id", "click", 4, "ngFor", "ngForOf"], [3, "id", "click"]], template: function OtherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LX MIDI TOOLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bass TAB Creator. Midi Drum Converter. Drum Sequencer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherComponent_Template_button_click_9_listener() { return ctx.startSequencer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherComponent_Template_button_click_11_listener() { return ctx.stopStuff(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OtherComponent_Template_input_change_16_listener() { return ctx.changeTempo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Rock Drumkit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Electronic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, OtherComponent_div_28_Template, 7, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherComponent_Template_button_click_32_listener() { return ctx.clearPattern(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherComponent_Template_button_click_34_listener() { return ctx.loadPattern(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Load ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherComponent_Template_button_click_36_listener() { return ctx.changeTempo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherComponent_Template_button_click_38_listener() { return ctx.stopStuff(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buttonArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".button[_ngcontent-%COMP%] { background-color: #4CAF50; border: none; color: red; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; ont-size: 16px;}", ".kick[_ngcontent-%COMP%] { }", ".green[_ngcontent-%COMP%] {background-color: green;}", ".red[_ngcontent-%COMP%] { background-color: red; }", "label.note[_ngcontent-%COMP%] { background-color: grey; width: 50px; margin-right: 0.2em; text-align: center; font-size: small; color:white; margin-left: 0.2em}", "button.btn[_ngcontent-%COMP%]   btn-outline-secondary[_ngcontent-%COMP%] {margin-right: 0.2em; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-other',
                template: `

<div class="container p-3 my-3 bg-dark text-white">
  <h1>LX MIDI TOOLS</h1>
  <p>Bass TAB Creator. Midi Drum Converter. Drum Sequencer</p>
</div>

<hr>

<div class="container shadow min-vh-50 py-2">
  <div class="row">
    <div class="col"> 
      <button type="button" class="btn btn-outline-secondary" (click)="startSequencer()">Play</button>
      <button type="button" class="btn btn-outline-secondary" (click)="stopStuff()">Stop</button>
    </div>
</div>

<div class="row">
    <div class="col">  
      <label for="inputsm"></label>
      <input class="form-control" id="inputdefault" type="number" min="60" max="240" #tem value="120" (change)="changeTempo()">
    </div>
    <div class="col">  
    <form>
      <select name="drumkit" class="custom-select-sm" #kit>
        <option value="rock">Rock Drumkit</option>
        <option value="electro">Electronic</option>
      </select>
    </form>
  </div>
  </div>
</div>

<hr>

<div class="container">
  <div *ngFor="let instrument of buttonArray; let u = index"> 
  <div>
    <label class="note"> {{ instrumentsMidi[u] }} C3</label>
    <button 
      *ngFor="let step of instrument; let i = index" [style.background-color]="buttonArray[u][i].color"
      (click) = "setStep($event)" class = "{{ step.class }}" 
      id="{{ step.id }}"> 
      {{ step.id +1 }}
      <!--{{ step.id }} - (Index: {{ i }})-->
    </button>
    <label class="note"> {{ instruments[u] }}</label>
  </div>
  </div>
</div>


<div class="container shadow min-vh-50 py-2">
  <div class="row">
      <div class="col">
          <button class="btn btn-outline-secondary" (click)="clearPattern()">
              Clear
          </button>
          <button class="btn btn-outline-secondary" (click)="loadPattern()">
              Load
          </button>
          <button class="btn btn-outline-secondary" (click)="changeTempo()">
              Save
          </button>
          <button type="button" class="btn btn-outline-secondary" (click)="stopStuff()">Export</button>
      </div>
  </div>
</div>


  `,
                styles: ['.button { background-color: #4CAF50; /* Green */border: none; color: red; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; ont-size: 16px;}',
                    '.kick { }',
                    '.green {background-color: green;}',
                    '.red { background-color: red; }',
                    'label.note { background-color: grey; width: 50px; margin-right: 0.2em; text-align: center; font-size: small; color:white; margin-left: 0.2em}',
                    'button.btn btn-outline-secondary {margin-right: 0.2em; }'
                ]
            }]
    }], function () { return [{ type: _pirate_service__WEBPACK_IMPORTED_MODULE_2__["PirateService"] }]; }, { tempo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["tem"]
        }], input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["i"]
        }] }); })();


/***/ }),

/***/ "OjCT":
/*!***********************************!*\
  !*** ./src/app/pirate.service.ts ***!
  \***********************************/
/*! exports provided: PirateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PirateService", function() { return PirateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PirateService {
    constructor(http) {
        this.http = http;
    }
    getPirates() {
        alert("http!");
        return this.http.get('assets/pirates.json').toPromise();
    }
    readTab() {
        //alert("local");
        //return this.electronService.ipcRenderer.invoke('readTab');
        return this.http.get('assets/pirates.json').toPromise();
    }
    selectPirate(name) {
        alert("http!");
        alert('You selected: ' + name);
    }
    angToElec(name) {
        //alert("local");
    }
    midiRead(name) {
        //alert("local");
    }
    tabWrite(name, tuning, sortPattern) {
        //alert("local");
    }
    /* Ab hier nur Schrott */
    electronMessage() {
        alert("http!");
        alert("na nüüü");
        return this.http.get('assets/pirates.json').toPromise();
    }
    electronMessage2(message) {
        alert("http!");
        alert("na nüüü");
        return "fuuuck";
    }
    getIrgendwas(name) {
    }
    add(...params) {
        let result = 0;
        for (let val of params) {
            result += val;
        }
        return result;
    }
}
PirateService.ɵfac = function PirateService_Factory(t) { return new (t || PirateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PirateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PirateService, factory: PirateService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PirateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pirate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pirate.service */ "OjCT");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "5hGD");
/* harmony import */ var _midi_midi_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./midi/midi.component */ "yp9P");






//import {MIDI_SUPPORT} from '@ng-web-apis/midi';
class AppComponent {
    constructor(/*@Inject(MIDI_SUPPORT) readonly supported: boolean,*/ pirateService, puService, calc) {
        this.pirateService = pirateService;
        this.puService = puService;
        this.title = 'LX MIDI TOOLS';
        this.irgendwas = "hallo";
        this.sum = 0;
        this.sortPattern = true;
        this.sum = calc.add(1, 2, 3, 4);
        this.function1;
    }
    function1(event) {
    }
    ngOnInit() {
        this.getPirates();
        //this.readTab();
    }
    selectPirate(name) {
        this.pirateService.selectPirate(name);
    }
    angToElec(name = "String A2E") {
        this.pirateService.angToElec(name);
    }
    getPirates() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.pirates = yield this.pirateService.getPirates();
            console.log(this.pirates);
        });
    }
    /* Ab hier nur Schrott */
    hallo() {
        //this.puService.einTest(name);
        alert("jooooo");
        this.electronMessage2("OK!");
    }
    electronMessage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.eMessage = yield this.pirateService.electronMessage();
        });
    }
    electronMessage2(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.pirateService.electronMessage2(message);
        });
    }
    alertMessage() {
        alert("funzt");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_pirate_service__WEBPACK_IMPORTED_MODULE_2__["PirateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_pirate_service__WEBPACK_IMPORTED_MODULE_2__["PirateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_pirate_service__WEBPACK_IMPORTED_MODULE_2__["PirateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-midi");
    } }, directives: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _midi_midi_component__WEBPACK_IMPORTED_MODULE_4__["MidiComponent"]], styles: ["h1[_ngcontent-%COMP%] { font-size: 20px; margin-bottom: 50px; }\r\np[_ngcontent-%COMP%] { font-size: 16px; margin-top: 25px; line-height: 20px}\r\ndiv[_ngcontent-%COMP%] { padding: 5px;\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: center;}\r\n*/\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  background-color: #4CAF50; \r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\ntextarea[_ngcontent-%COMP%] {\r\n  background-image:linear-gradient(\r\n     hsl(190,10%,98%), hsl(190,10%,94%)\r\n  ); \r\n  padding:1ex;\r\n  font-size:0.75em;\r\n  box-sizing:border-box;\r\n  color:black\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxLQUFLLGVBQWUsRUFBRSxtQkFBbUIsRUFBRTtBQUMzQyxJQUFJLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUI7QUFDeEQsTUFBTSxZQUFZO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCLENBQUM7QUFBQzs7O0VBR3pCLHlCQUF5QixFQUFFLFVBQVU7RUFDckMsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtBQUVBO0VBQ0U7O0dBRUM7RUFDRCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQjs7QUFFRjtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFtSXdCO0FBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0QnRCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmgxIHsgZm9udC1zaXplOiAyMHB4OyBtYXJnaW4tYm90dG9tOiA1MHB4OyB9XHJcbnAgeyBmb250LXNpemU6IDE2cHg7IG1hcmdpbi10b3A6IDI1cHg7IGxpbmUtaGVpZ2h0OiAyMHB4fVxyXG5kaXYgeyBwYWRkaW5nOiA1cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO30qL1xyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgLyogR3JlZW4gKi9cclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChcclxuICAgICBoc2woMTkwLDEwJSw5OCUpLCBoc2woMTkwLDEwJSw5NCUpXHJcbiAgKTsgXHJcbiAgcGFkZGluZzoxZXg7XHJcbiAgZm9udC1zaXplOjAuNzVlbTtcclxuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgY29sb3I6YmxhY2tcclxuXHJcbn1cclxuXHJcbi8qOmhvc3Qge1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICB9XHJcbiAgXHJcbiAgaDIge1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zcGFjZXIge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2xiYXIgaW1nIHtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gIH1cclxuICBcclxuICAudG9vbGJhciAjdHdpdHRlci1sb2dvIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gIH1cclxuICBcclxuICAudG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogODJweCBhdXRvIDMycHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMCA4cHggMTZweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQuY2FyZC1zbWFsbCB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTY4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIH1cclxuICBcclxuICBzdmcjcm9ja2V0IHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICB0b3A6IC0yNHB4O1xyXG4gIH1cclxuICBcclxuICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDk1cHgpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDE4MHB4O1xyXG4gICAgei1pbmRleDogLTEwO1xyXG4gIH1cclxuICBcclxuICAvKiBSZXNwb25zaXZlIFN0eWxlcyAqLy8qXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICBcclxuICAgIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICAgIHJpZ2h0OiAxMjBweDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICB9XHJcbiAgKi9cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _pirate_service__WEBPACK_IMPORTED_MODULE_2__["PirateService"] }, { type: _pirate_service__WEBPACK_IMPORTED_MODULE_2__["PirateService"] }, { type: _pirate_service__WEBPACK_IMPORTED_MODULE_2__["PirateService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "+x+M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-electron */ "31Lz");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pirate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pirate.service */ "OjCT");
/* harmony import */ var _pirate_local_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pirate-local.service */ "o9Ap");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header.component */ "5hGD");
/* harmony import */ var _midi_midi_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./midi/midi-tab.component */ "4Pve");
/* harmony import */ var _midi_midi_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./midi/midi.component */ "yp9P");
/* harmony import */ var _midi_other_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./midi/other.component */ "IFme");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");















const pirateFactory = (http, electron) => {
    //return !environment.desktop ? new PirateService(http) : new PirateLocalService(electron);
    return new _pirate_local_service__WEBPACK_IMPORTED_MODULE_8__["PirateLocalService"](electron);
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _pirate_service__WEBPACK_IMPORTED_MODULE_7__["PirateService"], useFactory: pirateFactory, deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_electron__WEBPACK_IMPORTED_MODULE_5__["ElectronService"]] },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ngx_electron__WEBPACK_IMPORTED_MODULE_5__["NgxElectronModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_0__["routing"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _midi_midi_tab_component__WEBPACK_IMPORTED_MODULE_10__["MidiTabComponent"],
        _midi_midi_component__WEBPACK_IMPORTED_MODULE_11__["MidiComponent"],
        _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        _midi_other_component__WEBPACK_IMPORTED_MODULE_12__["OtherComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ngx_electron__WEBPACK_IMPORTED_MODULE_5__["NgxElectronModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                    _midi_midi_tab_component__WEBPACK_IMPORTED_MODULE_10__["MidiTabComponent"],
                    _midi_midi_component__WEBPACK_IMPORTED_MODULE_11__["MidiComponent"],
                    _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
                    _midi_other_component__WEBPACK_IMPORTED_MODULE_12__["OtherComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    ngx_electron__WEBPACK_IMPORTED_MODULE_5__["NgxElectronModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_0__["routing"]
                ],
                providers: [
                    { provide: _pirate_service__WEBPACK_IMPORTED_MODULE_7__["PirateService"], useFactory: pirateFactory, deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_electron__WEBPACK_IMPORTED_MODULE_5__["ElectronService"]] },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _midi_other_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./midi/other.component */ "IFme");
/* harmony import */ var _midi_midi_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./midi/midi-tab.component */ "4Pve");
/* harmony import */ var _midi_midi_converter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./midi/midi-converter.component */ "pgWX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const APP_ROUTES = [
    { path: "", component: _midi_midi_tab_component__WEBPACK_IMPORTED_MODULE_1__["MidiTabComponent"] },
    { path: "converter", component: _midi_midi_converter_component__WEBPACK_IMPORTED_MODULE_2__["MidiConverterComponent"] },
    { path: "tab", component: _midi_midi_tab_component__WEBPACK_IMPORTED_MODULE_1__["MidiTabComponent"] },
    { path: "other", component: _midi_other_component__WEBPACK_IMPORTED_MODULE_0__["OtherComponent"] }
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "o9Ap":
/*!*****************************************!*\
  !*** ./src/app/pirate-local.service.ts ***!
  \*****************************************/
/*! exports provided: PirateLocalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PirateLocalService", function() { return PirateLocalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-electron */ "31Lz");



class PirateLocalService {
    constructor(electronService) {
        this.electronService = electronService;
    }
    getPirates() {
        //alert("local");
        return this.electronService.ipcRenderer.invoke('getPirates');
    }
    readTab() {
        return this.electronService.ipcRenderer.invoke('readTab');
    }
    selectPirate(name) {
        //alert("local");
        this.electronService.ipcRenderer.sendSync('selectPirate', name);
    }
    angToElec(name) {
        //alert("local");
        this.electronService.ipcRenderer.sendSync('angToElec', name);
    }
    midiRead(name) {
        //alert("local");
        this.electronService.ipcRenderer.sendSync('midiRead', name);
    }
    tabWrite(name, tuning, sortPattern) {
        //alert("local");
        this.electronService.ipcRenderer.sendSync('tabWrite', name, tuning, sortPattern);
    }
    /* Ab hier nur Schrott */
    electronMessage() {
        return this.electronService.ipcRenderer.invoke('electronMessage');
    }
    electronMessage2(message) {
        return this.electronService.ipcRenderer.invoke('electronMessage2');
    }
    getIrgendwas(name) {
        return this.electronService.ipcRenderer.invoke('getIrgendwas');
    }
    add(...params) {
        //alert("local!!!!");
        let result = 0;
        for (let val of params) {
            result += val;
        }
        return result;
    }
}
PirateLocalService.ɵfac = function PirateLocalService_Factory(t) { return new (t || PirateLocalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_electron__WEBPACK_IMPORTED_MODULE_1__["ElectronService"])); };
PirateLocalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PirateLocalService, factory: PirateLocalService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PirateLocalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ngx_electron__WEBPACK_IMPORTED_MODULE_1__["ElectronService"] }]; }, null); })();


/***/ }),

/***/ "pgWX":
/*!**************************************************!*\
  !*** ./src/app/midi/midi-converter.component.ts ***!
  \**************************************************/
/*! exports provided: MidiConverterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MidiConverterComponent", function() { return MidiConverterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pirate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pirate.service */ "OjCT");



class MidiConverterComponent {
    constructor(pirateService) {
        this.pirateService = pirateService;
    }
    ngOnInit() {
    }
    midiRead(name = "Midi Read") {
        //console.log(this.supported);
        console.log("hallo");
        this.pirateService.midiRead(name);
    }
}
MidiConverterComponent.ɵfac = function MidiConverterComponent_Factory(t) { return new (t || MidiConverterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pirate_service__WEBPACK_IMPORTED_MODULE_1__["PirateService"])); };
MidiConverterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MidiConverterComponent, selectors: [["app-midi-converter"]], decls: 5, vars: 0, consts: [[1, "midis"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"]], template: function MidiConverterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MidiConverterComponent_Template_button_click_3_listener() { return ctx.midiRead(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Convert Drums");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%] { padding: 5px; align-items: center; display: flex; justify-content: center;}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MidiConverterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-midi-converter',
                template: `
  <section>
  <div class="midis">
    <div>
      <button type="button" class="btn btn-outline-secondary" (click)="midiRead()">Convert Drums</button>
    </div>
  </div>
  </section>
  `,
                styles: [
                    'div { padding: 5px; align-items: center; display: flex; justify-content: center;}'
                ]
            }]
    }], function () { return [{ type: _pirate_service__WEBPACK_IMPORTED_MODULE_1__["PirateService"] }]; }, null); })();


/***/ }),

/***/ "yp9P":
/*!****************************************!*\
  !*** ./src/app/midi/midi.component.ts ***!
  \****************************************/
/*! exports provided: MidiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MidiComponent", function() { return MidiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MidiComponent {
    constructor() { }
    ngOnInit() {
    }
}
MidiComponent.ɵfac = function MidiComponent_Factory(t) { return new (t || MidiComponent)(); };
MidiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MidiComponent, selectors: [["app-midi"]], decls: 1, vars: 0, template: function MidiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MidiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-midi',
                template: `
    <router-outlet></router-outlet>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map