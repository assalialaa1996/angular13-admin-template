import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  uploadFile(file: any) {
    console.log(file);

    const formData = new FormData();
    if (typeof file === 'string') {
      const type = (file.split(';')[0]).split('/')[1];
      const f = this.dataURLtoFile(file, 'product-' + new Date().toISOString() + '.' + type);
      console.log(f);
      formData.append('file', f);
    }
    else {
      formData.append('file', file);
    }
    console.log(formData);

    return this.http.post(`${environment.base_url}/${environment.api_prefix}/files/upload`, formData);
  }

  uploadMultipleFile(files: File[]) {
    return forkJoin(
      files.map((file) => this.uploadFile(file)).map((res: any) => res)
    );
  }


  dataURLtoFile(dataurl: any, filename: any) {

    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }
}
