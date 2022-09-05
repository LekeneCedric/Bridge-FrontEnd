import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private toast:ToastController,
    private router:Router) { }
  public signup(credential:any):Observable<any>{
   return this.http.post(`${environment.apiURL}/auth/register`, credential);
  }


  public signIn(credential:any):Observable<any>{
   return this.http.post(`${environment.apiURL}/auth/login`, credential);
  }


  public validToken(token:string):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    })
    const api = environment.apiURL+'/validate-token'
    return this.http.get(api,{headers:headers});
  }


  public logout(){
    const name = JSON.parse(localStorage.getItem('mydata')).name;
    const token = localStorage.getItem('token');
    const api = environment.apiURL+'/auth/logout'
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    })
    this.http.post(api,null,{headers:headers}).toPromise().then(
      async response=>{
        localStorage.removeItem('mydata');
        localStorage.removeItem('token');
        const toast = this.toast.create({
          message:`A la prochaine - ${name}`,
          icon: 'hand-right',
          duration:1000,
          color:"danger"
        });
        (await (toast)).present();  
            this.router.navigateByUrl('/login',{replaceUrl:true});
      }
    ).catch(
      async err=>{
        const toast = this.toast.create({
          message:`${err.message}`,
          icon: 'warning',
          duration:1000,
          color:"warning"
        });
        (await (toast)).present();  
      }
    )
  }
}
