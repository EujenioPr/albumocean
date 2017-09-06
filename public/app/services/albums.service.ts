import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

import { Album } from '../album'

@Injectable()
export class AlbumService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private album = Album
    private body


    constructor(private http: Http) {
        console.log('Album Service Initialized')
    }

    getAlbums() {
        return this.http.get('http://localhost:3000/api/albums')
            .map(res => res.json())
    }

    getAlbum(id: any) {
        return this.http.get('http://localhost:3000/api/albums/' + id)
            .map(res => res.json())
    }

    createAlbum(name: string, author: any, imageUrl: any) {
        this.body = JSON.stringify({ name: name, author: author, imageUrl: imageUrl })
        return this.http
            .post('http://localhost:3000/api/albums', this.body,
                { headers: this.headers })
            .map(res => res.json())
            .subscribe() // IT'S REALLY NEEDED!!!
    }



}