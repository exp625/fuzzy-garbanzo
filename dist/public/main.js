(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_jam_session_jam_session_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/jam-session/jam-session.component */ "./src/app/components/jam-session/jam-session.component.ts");
/* harmony import */ var _components_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/landingpage/landingpage.component */ "./src/app/components/landingpage/landingpage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _components_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_3__["LandingpageComponent"],
        pathMatch: 'full'
    },
    {
        path: ':jamlabel',
        component: _components_jam_session_jam_session_component__WEBPACK_IMPORTED_MODULE_2__["JamSessionComponent"]
    },
    {
        path: '*',
        redirectTo: ''
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n\r\n</nav>\r\n<div id=\"content\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'public';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/spotify.service */ "./src/app/services/spotify.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/landingpage/landingpage.component */ "./src/app/components/landingpage/landingpage.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_jam_session_jam_session_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/jam-session/jam-session.component */ "./src/app/components/jam-session/jam-session.component.ts");
/* harmony import */ var _components_jam_session_sidebar_jam_session_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/jam-session-sidebar/jam-session-sidebar.component */ "./src/app/components/jam-session-sidebar/jam-session-sidebar.component.ts");
/* harmony import */ var _components_jam_session_queue_jam_session_queue_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/jam-session-queue/jam-session-queue.component */ "./src/app/components/jam-session-queue/jam-session-queue.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var config = { url: '', options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_6__["LandingpageComponent"],
                _components_jam_session_jam_session_component__WEBPACK_IMPORTED_MODULE_10__["JamSessionComponent"],
                _components_jam_session_sidebar_jam_session_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["JamSessionSidebarComponent"],
                _components_jam_session_queue_jam_session_queue_component__WEBPACK_IMPORTED_MODULE_12__["JamSessionQueueComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__["SocketIoModule"].forRoot(config)
            ],
            providers: [_services_spotify_service__WEBPACK_IMPORTED_MODULE_4__["SpotifyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/queue-song.ts":
/*!***************************************!*\
  !*** ./src/app/classes/queue-song.ts ***!
  \***************************************/
/*! exports provided: QueueSong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueSong", function() { return QueueSong; });
var QueueSong = /** @class */ (function () {
    function QueueSong(spotifyTrackFull, votes, voted) {
        this.spotifyTrackFull = spotifyTrackFull;
        this.votes = votes;
        this.voted = voted;
    }
    return QueueSong;
}());



/***/ }),

/***/ "./src/app/components/jam-session-queue/jam-session-queue.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/jam-session-queue/jam-session-queue.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"form-row\" style=\"margin-left: 0px\">\r\n    <div class=\"col-md-11 col-8\">\r\n      <input type=\"text\" class=\"form-control\" id=\"spotifySearchText\" placeholder=\"Search for your favourite Tracks\" (keyup)=\"spotifySearch($event)\">\r\n    </div>\r\n    <div class=\"col-md-1 col-4\">\r\n      <button class=\"btn btn-primary mx-3 btn-block\" (click)=\"clear()\">Clear</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<ul class=\"list-group\">\r\n  <li class=\"list-group-item d-flex align-items-center justify-content-between\" *ngIf=\"currentSong !== undefined\">\r\n    Currently playing\r\n  </li>\r\n  <li class=\"list-group-item align-items-center justify-content-between active\" *ngIf=\"currentSong !== undefined\">\r\n    <div class=\"row\">\r\n      <div class=\"col-2\">\r\n        <img [src]=\"currentSong.spotifyTrackFull.album.images[2].url\" width=\"64\" height=\"64\">\r\n      </div>\r\n      <div class=\"col-8\">\r\n        {{currentSong.spotifyTrackFull.name}}\r\n      </div>\r\n      <div class=\"col-2\">\r\n        <button *ngIf=\"playbackState.is_playing\" (click)=\"playback(false)\" class=\"btn btn-primary\">Stop</button>\r\n        <button *ngIf=\"!playbackState.is_playing\" (click)=\"playback(true)\" class=\"btn btn-primary\">Play</button>\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ul>\r\n\r\n<ul class=\"list-group my-3\">\r\n\r\n  <li class=\"list-group-item d-flex align-items-center justify-content-between\" *ngIf=\"onSearch === true\">\r\n    Search results\r\n  </li>\r\n\r\n  <li class=\"list-group-item d-flex align-items-center justify-content-between\" *ngIf=\"onSearch === false\">\r\n    Current Queue\r\n  </li>\r\n  <li class=\"list-group-item align-items-center\" *ngFor=\"let song of songList\" [ngClass]=\"{'active' : song.voted}\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-1 col-3\">\r\n        <img [src]=\"song.spotifyTrackFull.album.images[2].url\" width=\"64\" height=\"64\">\r\n      </div>\r\n      <div class=\"col-md-8 col-5\">\r\n        <p>{{song.spotifyTrackFull.name}}</p>\r\n      </div>\r\n      <div class=\"col-md-1 col-2\">\r\n        <span class=\"badge badge-primary badge-pill\">Votes: {{song.votes}}</span>\r\n      </div>\r\n      <div class=\"col-md-1 col-2\">\r\n        <button (click)=\"vote(song)\" class=\"btn btn-primary \">Vote</button>\r\n      </div>\r\n    </div>\r\n  </li>\r\n  <li class=\"list-group-item d-flex justify-content-between align-items-center\" *ngIf=\"songList.length === 0\">\r\n    Currently there are no songs in the queue!\r\n  </li>\r\n</ul>\r\n\r\n<button class=\"btn btn-danger btn-block my-3\" (click)=\"leave()\">Leave Party</button>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/jam-session-queue/jam-session-queue.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/jam-session-queue/jam-session-queue.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvamFtLXNlc3Npb24tcXVldWUvamFtLXNlc3Npb24tcXVldWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/jam-session-queue/jam-session-queue.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/jam-session-queue/jam-session-queue.component.ts ***!
  \*****************************************************************************/
/*! exports provided: JamSessionQueueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JamSessionQueueComponent", function() { return JamSessionQueueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_queue_song__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/queue-song */ "./src/app/classes/queue-song.ts");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/spotify.service */ "./src/app/services/spotify.service.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JamSessionQueueComponent = /** @class */ (function () {
    function JamSessionQueueComponent(spotify, socket, router) {
        this.spotify = spotify;
        this.socket = socket;
        this.router = router;
        this.pauseButtonFlag = true;
        this.currentSong = undefined;
        this.playbackState = undefined;
        this.songList = [];
        this.partyQueue = [];
        this.onSearch = false;
        this.spotifySearchText = '';
    }
    JamSessionQueueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getQueue();
        this.spotify.getState().subscribe(function (state) {
            console.log(state.currentSong);
            console.log(state.state);
            _this.currentSong = state.currentSong;
            _this.playbackState = state.state;
        });
        this.socket.fromEvent('test').subscribe(function (value) {
            console.log('Socket Test');
        });
        this.socket.fromEvent('queue').subscribe(function (queue) {
            _this.partyQueue = queue.map(function (q) {
                var voted = false;
                _this.partyQueue.forEach(function (value) {
                    if (value.spotifyTrackFull.uri === q.spotifyTrackFull.uri) {
                        voted = value.voted;
                    }
                });
                return new _classes_queue_song__WEBPACK_IMPORTED_MODULE_1__["QueueSong"](q.spotifyTrackFull, q.votes, voted);
            });
            if (!_this.onSearch) {
                _this.songList = _this.partyQueue;
            }
        });
        this.socket.fromEvent('playback').subscribe(function (playback) {
            console.log('Playback Socket');
            _this.playbackState = playback.state;
            _this.currentSong = playback.currentSong;
        });
    };
    JamSessionQueueComponent.prototype.playback = function (state) {
        this.spotify.setPlayback({ 'playback': state }).subscribe();
    };
    JamSessionQueueComponent.prototype.spotifySearch = function (e) {
        var _this = this;
        if (e.target.value && e.target.value !== '') {
            this.onSearch = true;
            this.spotify.spotifySearch(e.target.value).subscribe(function (value) {
                _this.spotify.getQueue().subscribe(function (queue) {
                    _this.partyQueue = queue;
                    var page = value.tracks;
                    var songs = page.items;
                    _this.songList = songs.map(function (song) {
                        var votes = 0;
                        var voted = false;
                        queue.forEach(function (q) {
                            if (q.spotifyTrackFull.uri === song.uri) {
                                votes = q.votes;
                                voted = q.voted;
                            }
                        });
                        return new _classes_queue_song__WEBPACK_IMPORTED_MODULE_1__["QueueSong"](song, votes, voted);
                    }).sort(function (a, b) { return b.spotifyTrackFull.popularity - a.spotifyTrackFull.popularity; });
                });
            });
        }
        else {
            this.onSearch = false;
            this.getQueue();
        }
    };
    JamSessionQueueComponent.prototype.getQueue = function () {
        var _this = this;
        this.spotify.getQueue().subscribe(function (value) {
            console.log(value);
            _this.songList = value;
            _this.partyQueue = value;
        });
    };
    JamSessionQueueComponent.prototype.clear = function () {
        this.onSearch = false;
        this.songList = [];
        document.getElementById('spotifySearchText').innerText = '';
        this.getQueue();
    };
    /*
    playSong(song: SpotifyTrackFull) {
      console.log(song.uri);
      this.spotify.playSong(song).subscribe(value => console.log(value));
    }
    */
    JamSessionQueueComponent.prototype.vote = function (song) {
        var _this = this;
        this.spotify.vote(song.spotifyTrackFull).subscribe(function (value) {
            _this.partyQueue = value;
            if (!_this.onSearch) {
                _this.songList = _this.partyQueue;
            }
            else {
                _this.songList = _this.songList.map(function (s) {
                    _this.partyQueue.forEach(function (q) {
                        if (q.spotifyTrackFull.uri === s.spotifyTrackFull.uri) {
                            s.votes = q.votes;
                        }
                    });
                    return s;
                }).sort(function (a, b) { return b.spotifyTrackFull.popularity - a.spotifyTrackFull.popularity; });
            }
        });
    };
    JamSessionQueueComponent.prototype.leave = function () {
        var _this = this;
        this.spotify.leave().subscribe(function (value) {
            if (value.Success) {
                _this.router.navigate(['/']);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JamSessionQueueComponent.prototype, "userStatus", void 0);
    JamSessionQueueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jam-session-queue',
            template: __webpack_require__(/*! ./jam-session-queue.component.html */ "./src/app/components/jam-session-queue/jam-session-queue.component.html"),
            styles: [__webpack_require__(/*! ./jam-session-queue.component.scss */ "./src/app/components/jam-session-queue/jam-session-queue.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], JamSessionQueueComponent);
    return JamSessionQueueComponent;
}());



/***/ }),

/***/ "./src/app/components/jam-session-sidebar/jam-session-sidebar.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/jam-session-sidebar/jam-session-sidebar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"sidebar\" style=\"padding-right: 20px\" *ngIf=\"userStatus.user === 'Host'\">\n  <div class=\"sidebar-header\">\n    <h3>{{partyName}}</h3>\n    <h3>{{userStatus.label}}</h3>\n    User Status: {{userStatus.user}}\n  </div>\n  <hr>\n\n  <form #settings=\"ngForm\" *ngIf=\"userStatus.user === 'Host'\">\n\n    <div class=\"form-group\">\n      <label for=\"deviceSelect\">Select your Playback Device</label>\n      <select class=\"custom-select\" id=\"deviceSelect\" name=\"deviceSelect\" [(ngModel)]=\"selectedDevice\">\n        <option [value]=\"device.id\" *ngFor=\"let device of avaliableDevices\" >{{device.name}}</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"custom-control custom-switch\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch1\" checked=\"\" name=\"ipVotingCheckbox\" [(ngModel)]=\"ipVoting\">\n        <label class=\"custom-control-label\" for=\"customSwitch1\">Use IP Voting</label>\n      </div>\n    </div>\n    <button class=\"btn btn-primary btn-block\" (click)=\"saveSettings()\">Update Settings</button>\n    <hr>\n  </form>\n\n  <form #playlist=\"ngForm\" *ngIf=\"userStatus.user === 'Host'\">\n\n    <div class=\"form-group\">\n      <label for=\"playlistSelect\">Add fallback Playlist</label>\n      <select class=\"custom-select\" id=\"playlistSelect\" name=\"playlistSelect\" [(ngModel)]=\"selectedPlaylist\">\n        <option selected=\"\">Select your Playback Device</option>\n        <option [value]=\"playlist.id\" *ngFor=\"let playlist of avaliablePlaylists\" >{{playlist.name}}</option>\n      </select>\n    </div>\n    <button class=\"btn btn-primary btn-block\" (click)=\"addPlaylist()\">Add Playlist to Queue</button>\n    <hr>\n  </form>\n\n\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/jam-session-sidebar/jam-session-sidebar.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/jam-session-sidebar/jam-session-sidebar.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidebar {\n  min-width: 200px;\n  max-width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qYW0tc2Vzc2lvbi1zaWRlYmFyL0M6XFxVc2Vyc1xcVGltXFxEb2N1bWVudHNcXENvZGVcXEZlc3RpZnkyLjBcXHB1YmxpYy9zcmNcXGFwcFxcY29tcG9uZW50c1xcamFtLXNlc3Npb24tc2lkZWJhclxcamFtLXNlc3Npb24tc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2phbS1zZXNzaW9uLXNpZGViYXIvamFtLXNlc3Npb24tc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWRlYmFyIHtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/jam-session-sidebar/jam-session-sidebar.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/jam-session-sidebar/jam-session-sidebar.component.ts ***!
  \*********************************************************************************/
/*! exports provided: JamSessionSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JamSessionSidebarComponent", function() { return JamSessionSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/spotify.service */ "./src/app/services/spotify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JamSessionSidebarComponent = /** @class */ (function () {
    function JamSessionSidebarComponent(auth, spotify, router) {
        this.auth = auth;
        this.spotify = spotify;
        this.router = router;
        this.avaliableDevices = [];
        this.selectedDevice = '';
        this.avaliablePlaylists = [];
        this.selectedPlaylist = undefined;
        this.partyName = '';
        this.ipVoting = false;
    }
    JamSessionSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spotify.getDevices().subscribe(function (value) {
            _this.avaliableDevices = value.devices;
            _this.selectedDevice = _this.avaliableDevices[0].id;
        });
        this.spotify.getPlaylists().subscribe(function (value) {
            _this.avaliablePlaylists = value.items;
            _this.selectedPlaylist = _this.avaliablePlaylists[0].id;
        });
        this.spotify.getPartyInfo().subscribe(function (value) {
            _this.partyName = value.display_name + '\'s Jam Session';
        });
    };
    JamSessionSidebarComponent.prototype.saveSettings = function () {
        console.log({ 'device': this.selectedDevice, 'ip': this.ipVoting });
        this.spotify.saveSettings({ 'device': this.selectedDevice, 'ip': this.ipVoting }).subscribe();
    };
    JamSessionSidebarComponent.prototype.leave = function () {
        var _this = this;
        this.spotify.leave().subscribe(function (value) {
            if (value.Success) {
                _this.router.navigate(['/']);
            }
        });
    };
    JamSessionSidebarComponent.prototype.addPlaylist = function () {
        console.log(this.selectedPlaylist);
        this.spotify.addPlaylist(this.selectedPlaylist).subscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JamSessionSidebarComponent.prototype, "userStatus", void 0);
    JamSessionSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jam-session-sidebar',
            template: __webpack_require__(/*! ./jam-session-sidebar.component.html */ "./src/app/components/jam-session-sidebar/jam-session-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./jam-session-sidebar.component.scss */ "./src/app/components/jam-session-sidebar/jam-session-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], JamSessionSidebarComponent);
    return JamSessionSidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/jam-session/jam-session.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/jam-session/jam-session.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <app-jam-session-sidebar [userStatus]=\"userStatus\"></app-jam-session-sidebar>\n\n  <app-jam-session-queue [userStatus]=\"userStatus\" class=\"flex-fill\"></app-jam-session-queue>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/jam-session/jam-session.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/jam-session/jam-session.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex;\n  width: 100%;\n  align-items: stretch; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qYW0tc2Vzc2lvbi9DOlxcVXNlcnNcXFRpbVxcRG9jdW1lbnRzXFxDb2RlXFxGZXN0aWZ5Mi4wXFxwdWJsaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGphbS1zZXNzaW9uXFxqYW0tc2Vzc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYixZQUFXO0VBQ1gscUJBQW9CLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9qYW0tc2Vzc2lvbi9qYW0tc2Vzc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/jam-session/jam-session.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/jam-session/jam-session.component.ts ***!
  \*****************************************************************/
/*! exports provided: JamSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JamSessionComponent", function() { return JamSessionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JamSessionComponent = /** @class */ (function () {
    function JamSessionComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.userStatus = { 'user': 'New', 'label': '' };
    }
    JamSessionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getUserStatus().subscribe(function (value) {
            _this.userStatus = value;
            if (!(_this.userStatus.user === 'Guest' || _this.userStatus.user === 'Host') || _this.userStatus.label.length !== 5) {
                _this.router.navigate(['/']);
            }
        });
    };
    JamSessionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jam-session',
            template: __webpack_require__(/*! ./jam-session.component.html */ "./src/app/components/jam-session/jam-session.component.html"),
            styles: [__webpack_require__(/*! ./jam-session.component.scss */ "./src/app/components/jam-session/jam-session.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], JamSessionComponent);
    return JamSessionComponent;
}());



/***/ }),

/***/ "./src/app/components/landingpage/landingpage.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/landingpage/landingpage.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\"><h1 style=\"text-align: center\">Welcome to Jam Factory</h1></div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col\"><h4><p class=\"text-success text-center my-3\">Join a Jam Session or login to Spotify to create your own</p></h4></div>\r\n  </div>\r\n  <form #joinSession=\"ngForm\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2 offset-md-4 col-6\">\r\n        <input class=\"form-control\" name=\"labelInput\" type=\"text\" placeholder=\"Jam Label\" maxlength=\"5\" [(ngModel)]=\"labelField\">\r\n      </div>\r\n      <div class=\"col-md-2 col-6\">\r\n        <button class=\"btn btn-primary btn-block\" (click)=\"join()\">Join Party</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2 offset-md-5 col-12\">\r\n      <button class=\"btn btn-primary btn-block my-4\" *ngIf=\"userStatus !== 'Host'\" (click)=\"login()\">Login to Spotify</button>\r\n      <button class=\"btn btn-primary btn-block my-4\" *ngIf=\"userStatus === 'Host'\" (click)=\"create()\">Create new Jam Sesseion</button>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/landingpage/landingpage.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/landingpage/landingpage.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZ3BhZ2UvbGFuZGluZ3BhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/landingpage/landingpage.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/landingpage/landingpage.component.ts ***!
  \*****************************************************************/
/*! exports provided: LandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function() { return LandingpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/spotify.service */ "./src/app/services/spotify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingpageComponent = /** @class */ (function () {
    function LandingpageComponent(auth, spotify, router) {
        this.auth = auth;
        this.spotify = spotify;
        this.router = router;
        this.userStatus = 'Undefined';
        this.userLabel = 'Undefined';
        this.labelField = '';
    }
    LandingpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getUserStatus().subscribe(function (value) {
            _this.userStatus = 'Undefined';
            _this.userLabel = 'Undefined';
            if (value.user !== 'New') {
                if (value.user === 'Guest') {
                    _this.userStatus = 'Guest';
                    _this.userLabel = value.label;
                }
                if (value.user === 'Host') {
                    _this.userStatus = 'Host';
                    _this.userLabel = value.label;
                }
            }
            else {
                _this.userStatus = 'New';
            }
            _this.checkForRedirect();
        });
    };
    LandingpageComponent.prototype.checkForRedirect = function () {
        if ((this.userStatus === 'Host' || this.userStatus === 'Guest') && this.userLabel.length === 5) {
            this.router.navigate(['/' + this.userLabel]);
        }
    };
    LandingpageComponent.prototype.login = function () {
        // Does not work due to CORS
        // this.auth.spotifyLogin().subscribe();
        this.auth.spotifyLogin().subscribe(function (value) {
            window.location.href = value.url;
        });
    };
    LandingpageComponent.prototype.create = function () {
        var _this = this;
        this.spotify.createNewParty().subscribe(function (value) {
            _this.auth.getUserStatus().subscribe(function (value2) {
                _this.userStatus = value2.user;
                _this.userLabel = value2.label;
                _this.checkForRedirect();
            });
        });
    };
    LandingpageComponent.prototype.join = function () {
        var _this = this;
        this.spotify.joinParty(this.labelField).subscribe(function (value) {
            _this.auth.getUserStatus().subscribe(function (value2) {
                _this.userStatus = value2.user;
                _this.userLabel = value2.label;
                _this.checkForRedirect();
            });
        });
    };
    LandingpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landingpage',
            template: __webpack_require__(/*! ./landingpage.component.html */ "./src/app/components/landingpage/landingpage.component.html"),
            styles: [__webpack_require__(/*! ./landingpage.component.scss */ "./src/app/components/landingpage/landingpage.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LandingpageComponent);
    return LandingpageComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.authUrl = '/api/auth';
    }
    AuthService.prototype.getUserStatus = function () {
        return this.http.get(this.authUrl + '/status/');
    };
    AuthService.prototype.spotifyLogin = function () {
        return this.http.get(this.authUrl + '/login/');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/spotify.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/spotify.service.ts ***!
  \*********************************************/
/*! exports provided: SpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyService", function() { return SpotifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpotifyService = /** @class */ (function () {
    function SpotifyService(http) {
        this.http = http;
        this.authToken = null;
        this.scope = 'user-read-private user-read-email user-modify-playback-state';
        this.uri = '/api/spotify';
        this.spotifyWebApi = 'https://api.spotify.com/v1';
        this.headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    SpotifyService.prototype.login = function () {
    };
    SpotifyService.prototype.createNewParty = function () {
        return this.http.get('/api/party/create');
    };
    SpotifyService.prototype.leave = function () {
        return this.http.get('/api/party/leave');
    };
    SpotifyService.prototype.joinParty = function (label) {
        var payload = { 'label': label };
        return this.http.put('/api/party/join', payload, this.headers);
    };
    SpotifyService.prototype.getPartyInfo = function () {
        return this.http.get('/api/party/info');
    };
    SpotifyService.prototype.getQueue = function () {
        return this.http.get('/api/party/queue');
    };
    SpotifyService.prototype.vote = function (spotifyTrackFull) {
        return this.http.put('/api/party/vote', spotifyTrackFull, this.headers);
    };
    SpotifyService.prototype.getDevices = function () {
        return this.http.get('/api/spotify/devices');
    };
    SpotifyService.prototype.addPlaylist = function (uri) {
        return this.http.put('/api/party/playlist', { 'uri': uri }, this.headers);
    };
    SpotifyService.prototype.getPlaylists = function () {
        return this.http.get('/api/spotify/playlist');
    };
    SpotifyService.prototype.saveSettings = function (payload) {
        return this.http.put('/api/party/settings', payload, this.headers);
    };
    SpotifyService.prototype.setPlayback = function (payload) {
        return this.http.put('/api/party/playback', payload, this.headers);
    };
    SpotifyService.prototype.getState = function () {
        return this.http.get('/api/party/state');
    };
    SpotifyService.prototype.setAuthToken = function (authToken) {
        this.authToken = authToken;
        sessionStorage.setItem('authToken', this.authToken);
    };
    SpotifyService.prototype.getAuthToken = function () {
        return this.authToken;
    };
    SpotifyService.prototype.pause = function () {
        return this.http.get(this.uri + '/pause');
    };
    SpotifyService.prototype.play = function () {
        return this.http.put(this.uri + '/play', undefined);
    };
    SpotifyService.prototype.spotifySearch = function (text) {
        var payload = { 'text': text };
        return this.http.put(this.uri + '/search', payload, this.headers);
    };
    SpotifyService.prototype.playSong = function (song) {
        return this.http.put(this.uri + '/play', song, this.headers);
    };
    SpotifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SpotifyService);
    return SpotifyService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tim\Documents\Code\Festify2.0\public\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map