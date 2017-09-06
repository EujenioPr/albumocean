import { Component } from '@angular/core';
import { AlbumService } from './services/albums.service'

@Component({
    moduleId: module.id,
    selector: 'main-app',
    templateUrl: `app.component.html`,
    providers: [ AlbumService ]
})
export class AppComponent { }