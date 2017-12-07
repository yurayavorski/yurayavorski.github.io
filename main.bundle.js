webpackJsonp([1,4],{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "header {\r\n    background-color: #05096d;\r\n    border-radius: 0 0 10px 10px;\r\n    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);\r\n    color: #fff;\r\n    margin-bottom: 40px;\r\n    padding: 40px;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "#controlls {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: calc(100vh - 170px);\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    text-align: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n.controll {\r\n    background: transparent no-repeat center center;\r\n    background-size: contain;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 80px;\r\n    height: 80px;\r\n    vertical-align: middle;\r\n    margin: 0 5%;\r\n}\r\n#prev {\r\n    background-image: url(\"/assets/images/prev.png\");\r\n}\r\n#play {\r\n    background-image: url(\"/assets/images/play.png\");\r\n}\r\n#pause {\r\n    background-image: url(\"/assets/images/pause.png\");\r\n}\r\n#next {\r\n    background-image: url(\"/assets/images/next.png\");\r\n}\r\n#pause, #play {\r\n    width: 150px;\r\n    height: 150px;\r\n    margin: 0;\r\n}\r\nspan {\r\n    display: block;\r\n    margin-bottom: 20px;\r\n}\r\n#time-controll-wrapper {\r\n    margin-top: 60px;\r\n}\r\n@media (max-width: 1300px) {\r\n    .controll {\r\n        width: 50px;\r\n        height: 50px;\r\n    }\r\n    #pause, #play {\r\n        width: 100px;\r\n        height: 100px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "h3 {\r\n    text-align: center ;\r\n}\r\n#playlist {\r\n    list-style: none;\r\n}\r\n#playlist li {\r\n    cursor: pointer;\r\n    padding: 10px;\r\n}\r\n.current {\r\n    background-color: #ccc;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

module.exports = "<header><h1>{{title}}</h1></header>\n<div class=\"row\">\n    <div class=\"col-lg-9 col-md-6 col-sm-12\">\n        <app-player></app-player>\n    </div>\n    <div class=\"col-lg-3 col-md-6 col-sm-12\">\n        <app-playlist></app-playlist>\n    </div>\n</div>"

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

module.exports = "<div id=\"controlls\">\n  <button id=\"prev\" class=\"controll\" (click)=\"PrevSong();\"></button>\n  <button id=\"play\" class=\"controll mainControll\" (click)=\"Play();\"></button>\n  <button id=\"pause\" class=\"controll mainControll\" (click)=\"Pause();\"></button>\n  <button id=\"next\" class=\"controll mainControll\" (click)=\"NextSong();\"></button>\n  <div style=\"width: 300px;\" id=\"volume-wrapper\">\n    <span>volume</span>\n    <input class=\"mdl-slider mdl-js-slider\" type=\"range\"\n           min=\"0\" max=\"100\" value=\"100\" tabindex=\"0\" id=\"vol\" (mousemove)=\"ChangeVolume(volume.value)\" #volume>\n  </div>\n  <div style=\"width: 600px;\" id=\"time-controll-wrapper\">\n    <span>Time Controller</span>\n    <input class=\"mdl-slider mdl-js-slider\" type=\"range\"\n           min=\"0\" max=\"{{Durations()}}\" [value]=\"GetCurrentTime()\" tabindex=\"0\" id=\"time-controll\" #timecontroll (mouseup)=\"ChangeTime(timecontroll.value)\" (mousedown)=\"OnLocked()\">\n  </div>\n</div>"

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

module.exports = "<h3>{{Title}}</h3>\n<ul id=\"playlist\">\n  <li *ngFor=\"let music of Musics\" (click)=\"service.ChangeSong(Musics.indexOf(music))\" [ngClass]=\"{'current': music.isPlaying}\">\n    {{music.Name}}\n  </li>\n</ul>"

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(75);


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__musics__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonService = (function () {
    function CommonService() {
        this.Musics = __WEBPACK_IMPORTED_MODULE_1__musics__["a" /* musics */];
        this.Current = __WEBPACK_IMPORTED_MODULE_1__musics__["a" /* musics */][0];
        this.Path = "/assets/music/";
        this.Audio = new Audio(this.Path + this.Current.Name);
        this.Current.isPlaying = true;
    }
    CommonService.prototype.ngOnInit = function () {
    };
    CommonService.prototype.PlayMusic = function () {
        this.Audio.play();
    };
    CommonService.prototype.PauseMusic = function () {
        this.Audio.pause();
    };
    CommonService.prototype.ChangeSong = function (index) {
        var _this = this;
        if ((index <= this.Musics.length - 1) && (index >= 0)) {
            this.Audio.pause();
            this.Current.isPlaying = false;
            this.Current = this.Musics[index];
            this.Current.isPlaying = true;
            this.Audio = new Audio(this.Path + this.Current.Name);
            setTimeout(function () { return _this.PlayMusic(); }, 50);
            return true;
        }
        return false;
    };
    CommonService.prototype.NextSong = function () {
        var index = this.Musics.indexOf(this.Current);
        return this.ChangeSong(index + 1);
    };
    CommonService.prototype.PrevSong = function () {
        var index = this.Musics.indexOf(this.Current);
        return this.ChangeSong(index - 1);
    };
    return CommonService;
}());
CommonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CommonService);

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 74;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(88);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'HTML player for Teamvoy!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(145),
        styles: [__webpack_require__(142)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_common_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player_player_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__playlist_playlist_component__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__player_player_component__["a" /* PlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__playlist_playlist_component__["a" /* PlaylistComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__shared_common_service__["a" /* CommonService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_common_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerComponent = (function () {
    function PlayerComponent(service) {
        this.service = service;
        this.CurrentTime = 20;
        this.isControllerLocked = false;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        this.service.Audio.ontimeupdate = this.OnTimeUpdate(this.service.Audio);
        setInterval(function () {
            this.OnTimeUpdate(this.service.Audio);
        }.bind(this), 5);
    };
    PlayerComponent.prototype.Play = function () {
        this.service.PlayMusic();
    };
    PlayerComponent.prototype.Pause = function () {
        this.service.PauseMusic();
    };
    PlayerComponent.prototype.ChangeVolume = function (volValue) {
        this.service.Audio.volume = volValue / 100;
    };
    PlayerComponent.prototype.NextSong = function () {
        this.service.NextSong();
    };
    PlayerComponent.prototype.PrevSong = function () {
        this.service.PrevSong();
    };
    PlayerComponent.prototype.Durations = function () {
        return this.service.Audio.duration || 100;
    };
    PlayerComponent.prototype.ChangeTime = function (time) {
        this.service.Audio.currentTime = time;
        this.isControllerLocked = false;
    };
    PlayerComponent.prototype.OnTimeUpdate = function (audio) {
        if (!this.isControllerLocked)
            this.CurrentTime = this.service.Audio.currentTime;
    };
    PlayerComponent.prototype.GetCurrentTime = function () {
        return this.CurrentTime || 1;
    };
    PlayerComponent.prototype.OnLocked = function () {
        this.isControllerLocked = true;
    };
    return PlayerComponent;
}());
PlayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-player',
        template: __webpack_require__(146),
        styles: [__webpack_require__(143)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_common_service__["a" /* CommonService */]) === "function" && _a || Object])
], PlayerComponent);

var _a;
//# sourceMappingURL=player.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_common_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaylistComponent = (function () {
    function PlaylistComponent(service) {
        this.service = service;
        this.Title = "Playlist";
        this.Musics = this.service.Musics;
    }
    PlaylistComponent.prototype.ngOnInit = function () {
    };
    return PlaylistComponent;
}());
PlaylistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-playlist',
        template: __webpack_require__(147),
        styles: [__webpack_require__(144)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_common_service__["a" /* CommonService */]) === "function" && _a || Object])
], PlaylistComponent);

var _a;
//# sourceMappingURL=playlist.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Music; });
var Music = (function () {
    function Music(name) {
        this.isPlaying = false;
        this.Name = name;
    }
    return Music;
}());

//# sourceMappingURL=music.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__music__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return musics; });
/**
 * Created by Lenovo on 30.11.2017.
 */

var musics = [
    new __WEBPACK_IMPORTED_MODULE_0__music__["a" /* Music */]("28-the-tower-of-dawn.mp3"),
    new __WEBPACK_IMPORTED_MODULE_0__music__["a" /* Music */]("36-time-only-knows.mp3"),
    new __WEBPACK_IMPORTED_MODULE_0__music__["a" /* Music */]("01-the_offspring-the_future_is_now.mp3"),
    new __WEBPACK_IMPORTED_MODULE_0__music__["a" /* Music */]("02-the_offspring-secrets_from_the_underground.mp3"),
    new __WEBPACK_IMPORTED_MODULE_0__music__["a" /* Music */]("03-the_offspring-days_go_by.mp3"),
    new __WEBPACK_IMPORTED_MODULE_0__music__["a" /* Music */]("03-the_offspring-days_go_by.mp3"),
];
//# sourceMappingURL=musics.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[178]);
//# sourceMappingURL=main.bundle.js.map