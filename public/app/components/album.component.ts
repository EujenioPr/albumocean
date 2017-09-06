import { Component } from '@angular/core';
import { AlbumService } from '../services/albums.service'
import { Album } from '../album'
import { Router, Routes } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'selected-album',
    templateUrl: `album.component.html`
})

export class AlbumComponent {
    album: Album;
    id: any;

    constructor(private albumService: AlbumService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.id = params['id']
        });
        this.albumService.getAlbum(this.id)
            .subscribe(res => {
                this.album = res;
                console.log()
            })

    }
}


