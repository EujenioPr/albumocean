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
var albums_service_1 = require("../services/albums.service");
var CreatorComponent = (function () {
    function CreatorComponent(albumService, http) {
        this.albumService = albumService;
        this.http = http;
        this.imager = false;
        this.imageSrc = '';
    }
    CreatorComponent.prototype.add = function (name, author, imageUrl) {
        this.albumService.createAlbum(name, author, imageUrl);
    };
    CreatorComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    CreatorComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.imageSrc = reader.result;
    };
    CreatorComponent.prototype.uploadFile = function (fileToUpload) {
        console.log('uploadFile initialized');
        var input = new FormData();
        input.append('myFile', fileToUpload);
        console.log(input);
        return this.http
            .post('/upload', input)
            .subscribe(function (res) { return console.log(res); });
    };
    return CreatorComponent;
}());
CreatorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'creator',
        templateUrl: "creator.component.html",
        styleUrls: ['./creator.component.css']
    }),
    __metadata("design:paramtypes", [albums_service_1.AlbumService,
        http_1.Http])
], CreatorComponent);
exports.CreatorComponent = CreatorComponent;
var InputFileComponent = (function () {
    function InputFileComponent() {
        this.musics = [];
    }
    InputFileComponent.prototype.ngOnInit = function () {
        this.musics[0] = '';
        console.log(this.musics);
    };
    InputFileComponent.prototype.onChangeEvent = function (event, i) {
        if (event.target.files[0].size === 0) {
            console.log('File was not choosen');
            return;
        }
        else {
            if (this.musics[i] === '') {
                this.musics.splice(i, 1, event.target.files[0]);
                this.musics[i + 1] = '';
                console.log(this.musics);
                return;
            }
        }
    };
    InputFileComponent.prototype.deleteMusic = function (music, i) {
        this.musics.splice(i, 1);
        if (this.musics.length <= 1) {
            this.musics[i] = '';
            return;
        }
        console.log(this.musics);
    };
    return InputFileComponent;
}());
InputFileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'file-input',
        template: "\n            <span class=\"input-span\" *ngFor=\"let music of musics; let i = index\">\n                <label class=\"input-label\">\n                    <input class=\"input-file\" type=\"file\" (change)=\"onChangeEvent($event, i)\">\n                </label>\n                <strong class=\"input-strong\" *ngIf=\"music.size\">{{ (i+1) + \") \" + music.name + \", \" + (music.size / 1024 / 1024).toFixed(1) + \" MB\" }}</strong>\n                <button class=\"input-button\" *ngIf=\"music.size\" (click)=\"deleteMusic(music, i)\">X</button>\n            </span>\n    ",
        styleUrls: ['./creator.component.css']
    })
], InputFileComponent);
exports.InputFileComponent = InputFileComponent;
//# sourceMappingURL=creator.component.js.map