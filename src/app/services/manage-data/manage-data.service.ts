import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageDataService {

  constructor(private http:HttpClient) { 
    setInterval(()=>{
      this.myId = JSON.parse(localStorage.getItem('mydata')).id;
    },100)
   
  }
  public header =new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });

  public myId:number;
  public getDons(page:number):Observable<any>{
    const api = environment.apiURL+`/dons?page=${page}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }})
  }
  public getOneDon(id:number):Observable<any>{
    const api = environment.apiURL+'/dons/'+`${id}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getDonSimilaires(id:number,category:string):Observable<any>{
    const api = environment.apiURL+'/donsSimilaires/'+`${id}/`+`${category}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  } 
  public nbreInteressesDon(id:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/interessesDon/'+`${id}`;
    return this.http.get(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }})
  }
  public isReserv(id_don:number,idUser:number):Observable<any>{
    console.log(idUser)
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL + '/isreserv/' +`${id_don}-${idUser}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }})
  }
  public reserverDon(don_id:number,donateur_id:number):Observable<any>
  {
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const data = {
      don_id:don_id,
      donateur_id:donateur_id
    }
    const api = environment.apiURL+'/reserverDon';
    return this.http.post<any>(api,data,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }}
      );
  }
  public annulerReservation(don_id:number,donateur_id:number):Observable<any> {
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const data = {
      don_id:don_id,
      donateur_id:donateur_id
    }
    const api = environment.apiURL+'/annulerReservation';
    return this.http.post<any>(api,data,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }})
  }
  public nbreservations(don_id:number):Observable<any>{
      const api = environment.apiURL+'/nbreservations/'+`${don_id}`;
      return this.http.get(api,
        {headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }})
  }
  public receptionner(id:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+`/dons/${id}?_method=PUT`;
    return this.http.post(api,{
      disponible:1
    },{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }

  public deleteDon(id:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+`/dons/${id}`;
    return this.http.delete(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public updateDon(id:number,data:any):Observable<any> {
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+`/dons/${id}?_method=PUT`;
    return this.http.post(api,data,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  /*-------------------------DEMANDES---------------------------*/
  public deleteDemande(id:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+`/demandes/${id}`;
    return this.http.delete(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getDemandes():Observable<any>{
    const api = environment.apiURL+'/demandes';
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getOneDemande(id:number):Observable<any>{
    const api = environment.apiURL+'/demandes'+`/${id}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public finishDemande(id:number,data:any){
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+`/demandes/${id}?_method=PUT`;
    return this.http.post(api,data,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }

  /*-------------------------DONATEUR-----------------------------*/
  public getDonateur(id:number):Observable<any>{
    const api = environment.apiURL+'/donateurs'+`/${id}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public updateProfil(id:number,data:any):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+`/donateurs/${id}?_method=PUT`;
    return this.http.post(api,data,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  /*-------------------------CONVERSATIONS-------------------------*/
  public getLastMessage(id_donateur:number,id_receiver:number,id_don:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/lastMessage/'+`${id_donateur}-${id_receiver}-${id_don}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public deleteMessage(id:number){
   const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
  const api = environment.apiURL+'/messages/'+`${id}`;
  return this.http.delete(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public addMessageDon(don_id:number,donateur_id:number,receiver_id:number,contenu:string,vu:number,sender:number,receiver:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/messages';
    const message = {
     don_id:don_id,
     donateur_id:donateur_id,
     receiver_id:receiver_id,
     sender:sender,
     receiver:receiver,
     contenu:contenu,
     vu:vu
    }
    return this.http.post(api,message,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public addMessageDemande(demande_id:number,donateur_id:number,receiver_id:number,contenu:string,vu:number,sender:number,receiver:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/messages';
    const message = {
     demande_id:demande_id,
     donateur_id:donateur_id,
     receiver_id:receiver_id,
     sender:sender,
     receiver:receiver,
     contenu:contenu,
     vu:vu
    }
    return this.http.post(api,message,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getConversationsDon(id_donateur:number,id_receiver:number,id_don:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/conversationDon'+`/${id_donateur}-${id_receiver}-${id_don}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getConversationsDemande(id_donateur:number,id_receiver:number,id_demande:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/conversationDemande'+`/${id_donateur}-${id_receiver}-${id_demande}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getSalonsDons(mon_id:number){
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/salonsDiscussionsDon/'+`${mon_id}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getSalonsDemandes(mon_id:number){
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/salonsDiscussionsDemande/'+`${mon_id}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }


  /*-----------------------------------ASSOCIATIONS-----------------------------------------------*/
  public getGalerieAssociation(id_association:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+`/galerieAssociation/${id_association}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getAssociationMembersList(id_association):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+`/association_member_list/${id_association}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getNonAssociationMemberList(id_association):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+`/non_association_member_list/${id_association}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getAssociations():Observable<any>{
    const api = environment.apiURL+'/associations';
    const headers = new HttpHeaders({
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    })
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getOneAssociation(idassociation:number):Observable<any>{ 
    const api = environment.apiURL+'/associations/'+`${idassociation}`;
    const headers = new HttpHeaders({
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    })
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public becameAssociationMember(id_donateur:number,id_association:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const data={
      association_id:id_association,
      donateur_id:id_donateur,
      valide:0
    }
    const api = environment.apiURL+'/appartenances';
    return this.http.post<any>(api,data,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});

  }
  public addAssociationMember(id_donateur:number,id_association:number):Observable<any> {
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const data={}
    const api = environment.apiURL+`/addAssociationMember/${id_donateur}/${id_association}}`;
    return this.http.post<any>(api,data,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public rejectAssociationMember(id_donateur:number,id_association:number):Observable<any> {
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const data={}
    const api = environment.apiURL+`/rejectAssociationMember/${id_donateur}/${id_association}}`;
    return this.http.post<any>(api,data,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  /*---------------------------ANNONCES_ASSOCIATIONS---------------------------_*/
  public mesAnnoncesFavoris():Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/annoncesFavoris/'+`${this.myId}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public LikerAnnonce(credential:any):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/likerAnnonce';
    return this.http.post<any>(api,credential,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public disLikerAnnonce(id_annonce:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+`/dislikeAnnonce/${id_annonce}/${this.myId}`;
    return this.http.delete<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getAnnonces():Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    console.log(this.myId)
    const api = environment.apiURL+`/annonces/${this.myId}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getOneAnnonce(idannonces:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/annonces/'+`${idannonces}/${this.myId}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public addAnnonce(credential:any):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/annonces';
    return this.http.post<any>(api,credential,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getAnnoncesAssociation(id_association:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/annoncesassociation/'+`${id_association}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  /*---------------------------MOUVEMENTS_ASSOCIATIONS---------------------------_*/
  public getMesMouvements():Observable<any> {
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+`/mouvementsParticiper/${this.myId}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public imParticipate(myId:number,mouvementId:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+`/imParticipate/${myId}/${mouvementId}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public annulerParticipation(myId:number, mouvementId:number){
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+`/annulerParticipation/${myId}/${mouvementId}`;
    return this.http.post<any>(api,{},{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public participerMouvement(credential):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/participations';
    return this.http.post<any>(api,credential,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getMouvements():Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/mouvements';
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getOneMouvement(idmouvement:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/mouvements/'+`${idmouvement}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public addMouvement(credential:any):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/mouvements';
    return this.http.post<any>(api,credential,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getMouvementsAssociation(id_association:number){
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/mouvementsassociation/'+`${id_association}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }

  /*---------------------------BESOINS---------------------*/
  public getBesoinsNonResolusAssociation(id_association:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+`/besoinsnonresolusassociation/${id_association}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getBesoinsResolusAssociation(id_association:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+`/besoinsresolusassociation/${id_association}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getBesoins():Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/besoins';
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getOneBesoin(id:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/besoins'+`/${id}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public getBesoinsAssociation(id_besoin:number){
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/besoinsassociation'+`/${id_besoin}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  /*--------------------------NOTIFICATION--------------------------*/
  public getNotificationDonateur(id:number):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest'
  });
    const api = environment.apiURL+'/notifications'+`/${id}`;
    return this.http.get<any>(api,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public setNotification(credential:any):Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest',
  });
    const api = environment.apiURL+'/notifications';
    return this.http.post<any>(api,credential,{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
  public vueNotification(id_donateur,id_notification):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Accept': 'application/json, text/plain, */*',
      'X-Requested-With': 'XMLHttpRequest'
    });
    const api = environment.apiURL+`/notificationVue/${id_donateur}/${id_notification}`;
    return this.http.post<any>(api,{},{headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'X-Requested-With': 'XMLHttpRequest'
    }});
  }
}
