import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageDataService {

  constructor(private http:HttpClient) { }

  public getDons(page:number):Observable<any>{
    const api = environment.apiURL+'/dons'+`?page=${page}`;
    return this.http.get<any>(api)
  }
  public getOneDon(id:number):Observable<any>{
    const api = environment.apiURL+'/dons/'+`${id}`;
    return this.http.get<any>(api);
  }
  public getDonSimilaires(id:number,category:string):Observable<any>{
    const api = environment.apiURL+'/donsSimilaires/'+`${id}/`+`${category}`;
    return this.http.get<any>(api);
  } 

  public reserverDon(don_id:number,donateur_id:number):Observable<any>{
   
    const data = {
      don_id:don_id,
      donateur_id:donateur_id,
    }
    const api = environment.apiURL+'/reserverDon';
    return this.http.post<any>(api,data);
  }
  public nbreservations(don_id:number):Observable<any>{
      const api = environment.apiURL+'/nbreservations/'+`${don_id}`;
      return this.http.get(api)
  }
  /*-------------------------DEMANDES---------------------------*/
  public getDemandes():Observable<any>{
    const api = environment.apiURL+'/demandes';
    return this.http.get<any>(api);
  }
  public getOneDemande(id:number):Observable<any>{
    const api = environment.apiURL+'/demandes'+`/${id}`;
    return this.http.get<any>(api);
  }

  /*-------------------------DONATEUR-----------------------------*/
  public getDonateur(id:number):Observable<any>{
    const api = environment.apiURL+'/donateurs'+`/${id}`;
    return this.http.get<any>(api);
  }
  /*-------------------------CONVERSATIONS-------------------------*/
  public addMessageDon(don_id:number,donateur_id:number,receiver_id:number,contenu:string,vu:number):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const api = environment.apiURL+'/messages';
    const message = {
     don_id:don_id,
     donateur_id:donateur_id,
     receiver_id:receiver_id,
     contenu:contenu,
     vu:vu
    }
    return this.http.post(api,message,{headers:headers});
  }
  public getConversationsDon(id_donateur:number,id_receiver:number,id_don:number):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    const api = environment.apiURL+'/conversationDon'+`/${id_donateur}-${id_receiver}-${id_don}`;
    return this.http.get<any>(api,{headers:headers});
  }
  public getConversationsDemande(id_donateur:number,id_receiver:number,id_demande:number):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    const api = environment.apiURL+'/conversationDemande'+`/${id_donateur}-${id_receiver}/${id_demande}`;
    return this.http.get<any>(api,{headers:headers});
  }
  public getSalons(mon_id:number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const api = environment.apiURL+'/salonsDiscussionsDon/'+`${mon_id}`;
    return this.http.get<any>(api,{headers:headers});
  }
}
