import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreationService {

  constructor(private http:HttpClient) { }

  public createDon(credential:any,token):Observable<any>{
    const api = environment.apiURL+'/dons';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/json, text/plain, */*',
      'X-Requested-With': 'XMLHttpRequest'
    })
    return this.http.post(api,credential,{headers:headers})
  }

  public createDemande(credential:any,token):Observable<any>{
    const api = environment.apiURL+'/demandes';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/json, text/plain, */*',
      'X-Requested-With': 'XMLHttpRequest'
    })
    return this.http.post(api,credential,{headers:headers})
  }

  public createAssociation(credential:any,token:string):Observable<any>{
    const api = environment.apiURL+'/associations';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/json, text/plain, */*',
      'X-Requested-With': 'XMLHttpRequest'
    });
    return this.http.post(api,credential,{headers:headers})
  }

    /*----------------------------------BESOINS------------------------------*/
    public createBesoin(credential):Observable<any>
    {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Accept': 'application/json, text/plain, */*',
      'X-Requested-With': 'XMLHttpRequest'
      });
      const api = environment.apiURL+'/besoins';
      return this.http.post<any>(api,credential,{headers:headers});
    }  
    
    public createDonBesoinAssociation(credential):Observable<any>{
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Accept': 'application/json, text/plain, */*',
      'X-Requested-With': 'XMLHttpRequest'
      });
      const api = environment.apiURL+'/donsAssociation';
      return this.http.post<any>(api,credential,{headers:headers});
    }
}
