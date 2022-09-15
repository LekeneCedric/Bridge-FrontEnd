import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediasService {

  constructor(private http:HttpClient) { }

  public uploadImageDon(token:string,credential:any): Promise<any>{
   
    console.log(credential.files)
    return new Promise<any>((resolve, reject) => {
        try{
          credential.files.forEach(async file=>{
              
              const res = await fetch(file.data);
              const blob = await res.blob();
              const formData = new FormData();
                 
              formData.append('file',blob, file.path);
              formData.append('don_id',credential.don_id);
              console.log(formData.get('file'));
                this.uploadData(formData,token);
            }
          );
          resolve('success')
        }catch(err){
          reject(err);
        }
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
  public uploadImageProfil(token:string,credential:any): Promise<any>{
   
    console.log(credential.files)
    return new Promise<any>(async (resolve, reject) => {
              const res = await fetch(credential.files.data);
              const blob = await res.blob();
              const formData = new FormData();
         console.log('this is credential');
         console.log(credential.files.path)
         console.log(credential.donateur_id)
              formData.append('file',blob, credential.files.path);
              formData.append('donateur_id',credential.donateur_id);
              this.uploadData(formData,token);
          resolve('success')
    });
  }
}
