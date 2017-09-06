import { Component, ViewChild } from '@angular/core'
import { Http } from '@angular/http'
import { AlbumService } from '../services/albums.service'

import { FileUploadComponent } from './file_upload.component'

@Component({
    moduleId: module.id,
    selector: 'creator',
    templateUrl: `creator.component.html`,
    styleUrls: ['./creator.component.css']
})

export class CreatorComponent implements OnInit {
    imager = false;

    constructor(
        private albumService: AlbumService,
        private http: Http
    ){}

    add(name: string, author: any, imageUrl: any) {
        this.albumService.createAlbum(name, author, imageUrl)
    }


    handleInputChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

        var pattern = /image-*/;
        var reader = new FileReader();

        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }

        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }

    imageSrc: string = '';

    _handleReaderLoaded(e) {
        var reader = e.target;
        this.imageSrc = reader.result;
    }


    uploadFile(fileToUpload: any) {
        console.log('uploadFile initialized')
        let input = new FormData()
        input.append('myFile', fileToUpload)
        console.log(input)

        return this.http
            .post('/upload', input)
            .subscribe(res => console.log(res))
    }

}


@Component({
    moduleId: module.id,
    selector: 'file-input',
    template: `
            <span class="input-span" *ngFor="let music of musics; let i = index">
                <label class="input-label">
                    <input class="input-file" type="file" (change)="onChangeEvent($event, i)">
                </label>
                <strong class="input-strong" *ngIf="music.size">{{ (i+1) + ") " + music.name + ", " + (music.size / 1024 / 1024).toFixed(1) + " MB" }}</strong>
                <button class="input-button" *ngIf="music.size" (click)="deleteMusic(music, i)">X</button>
            </span>
    `,
    styleUrls: ['./creator.component.css']
})

export class InputFileComponent implements OnInit {

    public musics = []

    ngOnInit() {

        this.musics[0] = ''
        console.log(this.musics)
    }

    onChangeEvent(event: any, i: any) {

        if (event.target.files[0].size === 0) {
            console.log('File was not choosen')
            return;
        } else {
            if (this.musics[i] === '') {
                this.musics.splice(i, 1, event.target.files[0])
                this.musics[i + 1] = ''
                console.log(this.musics)
                return;
            }
        }

    }

    deleteMusic(music: any, i) {

        this.musics.splice(i, 1)

        if ( this.musics.length <= 1 ) {
            this.musics[i] = ''
            return;
        }

        console.log(this.musics)

    }


}