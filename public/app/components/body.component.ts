import { Component } from '@angular/core';
import { AlbumService } from '../services/albums.service'
import { Album } from '../album'

@Component({
    moduleId: module.id,
    selector: 'main-body',
    templateUrl: `body.component.html`
})
export class BodyComponent {
    albums: Album[];

    constructor(private albumService: AlbumService) {
        this.albumService.getAlbums()
            .subscribe(res => {
                // console.log(res[0]._id)
                this.albums = res;
            })
    }
}