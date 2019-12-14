import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  @ViewChild('uploader') private _uploadElement: ElementRef;
  public progress: number = 0;

  constructor(private _http: HttpClient) { }

  public uploadFile() {
    const files: FileList = this._uploadElement.nativeElement.files;
    const formData: FormData = new FormData();
    for (let i=0; i<files.length; i++) {
      const file = files[0];
      formData.append("file", file);
    }
    this._http.post('/upload', formData, {
      observe: 'events',
      reportProgress: true
    }).subscribe((event: any) => {
      if (event.type === 1) {
        this.progress = Math.floor(event.loaded / event.total * 100)
      }
    });

  }

}
