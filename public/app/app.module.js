"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var header_component_1 = require("./components/header.component");
var body_component_1 = require("./components/body.component");
var footer_component_1 = require("./components/footer.component");
var stretchbar_component_1 = require("./components/stretchbar.component");
var album_component_1 = require("./components/album.component");
var creator_component_1 = require("./components/creator.component");
var creator_component_2 = require("./components/creator.component");
var app_routing_module_1 = require("./app-routing.module");
var albums_service_1 = require("./services/albums.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            stretchbar_component_1.StretchbarComponent,
            body_component_1.BodyComponent,
            footer_component_1.FooterComponent,
            album_component_1.AlbumComponent,
            creator_component_1.CreatorComponent,
            creator_component_2.InputFileComponent
            // FileUploadComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
            // HeaderComponent,
            // StretchbarComponent,
            // BodyComponent,
            // FooterComponent,
            // AlbumComponent,
            // CreatorComponent
        ],
        providers: [
            albums_service_1.AlbumService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map