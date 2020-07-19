import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmeraldService {
  files;
  constructor(private http: HttpClient) { }
  sendMessage(name, mobile, email, message){
    return this.http.post('/api/message', {
      name, mobile, email, message
      });
  }

  submitProject(name, mobile, email, ptype, project, file){
    const formData = new FormData();
    for ( this.files of file){
    formData.append('file', this.files);
    console.log(this.files);
    }
    formData.append('name', name);
    formData.append('mobile', mobile);
    formData.append('email', email);
    formData.append('ptype', ptype);
    formData.append('project', project);
    return this.http.post('/api/project', formData);
  }
}
