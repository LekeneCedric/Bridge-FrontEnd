import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediasService {

  constructor(private http:HttpClient) { }
  public getOneMedia(id:number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
    });
    const api = environment.apiURL+`/medias/${id}`;
    return this.http.get<any>(api,{headers:headers});
  }
  public uploadImageProfil(token:string,credential:any): Promise<any>{
   
    console.log(credential.files)
    return new Promise<any>(async (resolve, reject) => {
              const res = await fetch(credential.files.data);
              const blob = await res.blob();
              const formData = new FormData();
              formData.append('file',blob, credential.files.path);
              formData.append('donateur_id',credential.donateur_id);
                this.uploadData(formData,token).toPromise().then(
                  data=>{
                    resolve('success')
                  }
                );
    });
  }

  public uploadImageDon(token:string,credential:any): Promise<any>{
    console.log(credential.files)
    return new Promise<any>((resolve, reject) => {
        try{
            var i = 0 ;
            var max = credential.files.length;
            credential.files.forEach(async file=>{
                
                const res = await fetch(file.data);
                const blob = await res.blob();
                const formData = new FormData();
                   
                formData.append('file',blob, file.path);
                formData.append('don_id',credential.don_id);
                setTimeout(()=>{
                  this.uploadData(formData,token).toPromise().then(
                    data=>{
                      i +=1;
                      console.log(`image ${i} uploaded successfully`)
                      i>=max?resolve('success'):null;
                    }
                  );
                },3000)
                  
              }
            );
        }catch(err){
          reject(err);
        }});
  }
  public uploadImageAssoBesoinDon(token:string,credential:any): Promise<any>{
  //  creation don en reponse a un besoin d'une association
    console.log(credential.files)
    return new Promise<any>((resolve, reject) => {
        try{
          var i = 0 ;
          var max = credential.files.length;
          credential.files.forEach(async file=>{
              
              const res = await fetch(file.data);
              const blob = await res.blob();
              const formData = new FormData();
                 
              formData.append('file',blob, file.path);
              formData.append('asso_don_id',credential.asso_don_id);
              setTimeout(()=>{
                this.uploadData(formData,token).toPromise().then(
                  data=>{
                    i +=1;
                    console.log(`image ${i} uploaded successfully`)
                    i>=max?resolve('success'):null;
                  }
                );
              },3000)
                
            }
          );
          
        }catch(err){
          reject(err);
        }
    });
  }
  public uploadImageAssociation(token:string,credential:any): Promise<any>{
   
    console.log(credential.files)
    return new Promise<any>((resolve, reject) => {
        try{
          var i = 0 ;
          var max = credential.files.length;
          credential.files.forEach(async file=>{
              
              const res = await fetch(file.data);
              const blob = await res.blob();
              const formData = new FormData();
                 
              formData.append('file',blob, file.path);
              formData.append('association_id',credential.association_id);
              setTimeout(()=>{
                this.uploadData(formData,token).toPromise().then(
                  data=>{
                    i +=1;
                    console.log(`image ${i} uploaded successfully`)
                    i>=max?resolve('success'):null;
                  }
                );
              },3000)
                
            }
          );
          
        }catch(err){
          reject(err);
        }
    });
  }

  public uploadImageMouvement(token:string,credential:any): Promise<any>{
   
    console.log(credential.files)
    return new Promise<any>((resolve, reject) => {
        try{
          var i = 0 ;
          var max = credential.files.length;
          credential.files.forEach(async file=>{
              
              const res = await fetch(file.data);
              const blob = await res.blob();
              const formData = new FormData();
                 
              formData.append('file',blob, file.path);
              formData.append('mouvement_id',credential.mouvement_id);
              setTimeout(()=>{
                this.uploadData(formData,token).toPromise().then(
                  data=>{
                    i +=1;
                    console.log(`image ${i} uploaded successfully`)
                    i>=max?resolve('success'):null;
                  }
                );
              },3000)
                
            }
          );
        }catch(err){
          reject(err);
        }
    });
  }
  public uploadImageAnnonce(token:string,credential:any): Promise<any>{
   
    console.log(credential.files)
    return new Promise<any>((resolve, reject) => {
        try{
          var i = 0 ;
          var max = credential.files.length;
          credential.files.forEach(async file=>{
              
              const res = await fetch(file.data);
              const blob = await res.blob();
              const formData = new FormData();
              formData.append('file',blob, file.path);
              formData.append('annonce_id',credential.annonce_id);
              setTimeout(()=>{
                this.uploadData(formData,token).toPromise().then(
                  data=>{
                    i +=1;
                    console.log(`image ${i} uploaded successfully`)
                    i>=max?resolve('success'):null;
                  }
                );
              },3000)
                
            }
          );
          
        }catch(err){
          reject(err);
        }
    });
  }

  uploadData(formData,token):Observable<any>{
    const api = environment.apiURL+'/medias';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
     return this.http.post(api,formData)
  }
 
}
