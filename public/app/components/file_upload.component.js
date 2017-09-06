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
var FileUploadComponent = (function () {
    function FileUploadComponent(http) {
        this.http = http;
        this.logme = 'logme';
    }
    FileUploadComponent.prototype.onChange = function () {
        this.fi = this.fileInput.nativeElement;
        if (this.fi.files && this.fi.files[0]) {
            this.fileToUpload = this.fi.files[0];
            console.log(this.fileToUpload);
            // this.uploadFile(this.fileToUpload)
            //     .subscribe(res => console.log(res))
        }
    };
    FileUploadComponent.prototype.uploadFile = function (fileToUpload) {
        console.log('uploadFile initialized');
        var input = new FormData();
        input.append('myFile', fileToUpload);
        console.log(input);
        return this.http
            .post('/upload', input)
            .subscribe(function (res) { return console.log(res); });
    };
    return FileUploadComponent;
}());
__decorate([
    core_1.ViewChild("fileInput"),
    __metadata("design:type", Object)
], FileUploadComponent.prototype, "fileInput", void 0);
FileUploadComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'file-upload',
        template: "<label for=\"upload-input\" class=\"label-upload\">Upload Music</label>\n               <input style=\"display: none\" id=\"upload-input\" type=\"file\" name=\"myFile\" #fileInput>",
        styleUrls: ['./creator.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http])
], FileUploadComponent);
exports.FileUploadComponent = FileUploadComponent;
//# sourceMappingURL=file_upload.component.js.map