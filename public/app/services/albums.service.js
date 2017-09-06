"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var album_1 = require("../album");
var AlbumService = (function () {
    function AlbumService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.album = album_1.Album;
        console.log('Album Service Initialized');
    }
    AlbumService.prototype.getAlbums = function () {
        return this.http.get('http://localhost:3000/api/albums')
            .map(function (res) { return res.json(); });
    };
    AlbumService.prototype.getAlbum = function (id) {
        return this.http.get('http://localhost:3000/api/albums/' + id)
            .map(function (res) { return res.json(); });
    };
    AlbumService.prototype.createAlbum = function (name, author, imageUrl) {
        this.body = JSON.stringify({ name: name, author: author, imageUrl: imageUrl });
        return this.http
            .post('http://localhost:3000/api/albums', this.body, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .subscribe(); // IT'S REALLY NEEDED!!!
    };
    return AlbumService;
}());
AlbumService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AlbumService);
exports.AlbumService = AlbumService;
//# sourceMappingURL=albums.service.js.map