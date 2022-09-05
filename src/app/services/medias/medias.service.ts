import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediasService {

  constructor(private http:HttpClient) { }

  public uploadImage(token:string,credential:any): Promise<any>{
   
    console.log(credential.files)
    return new Promise<any>((resolve, reject) => {
      setTimeout(()=>{
        try{
          credential.files.forEach(async file=>{
              const res = await fetch(file.data);
              const blob = await res.blob();
              const formData = new FormData();

              formData.append('file',blob, file.path);
              formData.append('don_id',credential.don_id);
              let cd={
                file:blob,
                don_id:credential.don_id,
              }
              setTimeout(()=>{
                this.uploadData(formData,token);
              },500)
            }
          );
          resolve('success')
        }catch(err){
          reject(err);
        }
      },300)
    });
  }
  async uploadData(formData,token){
    const api = environment.apiURL+'/medias';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
     this.http.post(api,formData).pipe().subscribe(data=>{
      console.log(data);
     })
  }
}
