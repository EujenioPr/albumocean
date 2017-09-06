import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'file-upload',
    template: `<label for="upload-input" class="label-upload">Upload Music</label>
               <input style="display: none" id="upload-input" type="file" name="myFile" #fileInput>`,
    styleUrls: ['./creator.component.css']
})
export class FileUploadComponent {
    @ViewChild("fileInput") fileInput;

    constructor( private http : Http ) {}

    public logme = 'logme'
    public fi
    public fileToUpload
    onChange(): void {
        this.fi = this.fileInput.nativeElement
        if (this.fi.files && this.fi.files[0]) {
            this.fileToUpload = this.fi.files[0]
            console.log(this.fileToUpload)
            // this.uploadFile(this.fileToUpload)
            //     .subscribe(res => console.log(res))
        }
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