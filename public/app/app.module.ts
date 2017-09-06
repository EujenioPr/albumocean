import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header.component'
import { BodyComponent } from './components/body.component'
import { FooterComponent } from './components/footer.component'
import { StretchbarComponent } from './components/stretchbar.component'

import { AlbumComponent } from './components/album.component'
import { CreatorComponent } from './components/creator.component'
import { InputFileComponent } from './components/creator.component'

import { AppRoutingModule } from './app-routing.module'

import { AlbumService } from './services/albums.service'

import { FileUploadComponent } from './components/file_upload.component'

@NgModule({
    imports:      [
                    BrowserModule,
                    HttpModule,
                    JsonpModule,
                    AppRoutingModule
    ],
    declarations: [
                    AppComponent,
                    HeaderComponent,
                    StretchbarComponent,
                    BodyComponent,
                    FooterComponent,
                    AlbumComponent,
                    CreatorComponent,
                    InputFileComponent
                    // FileUploadComponent
    ],

    bootstrap:    [
                    AppComponent
                    // HeaderComponent,
                    // StretchbarComponent,
                    // BodyComponent,
                    // FooterComponent,
                    // AlbumComponent,
                    // CreatorComponent
    ],
    providers:    [
                    AlbumService
    ]
})

export class AppModule { }