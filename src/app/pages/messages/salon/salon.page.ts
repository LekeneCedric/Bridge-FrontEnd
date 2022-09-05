import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IDemande } from 'src/app/models/demande.model';
import { IDon } from 'src/app/models/don.model';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.page.html',
  styleUrls: ['./salon.page.scss'],
})
export class SalonPage implements OnInit {

  constructor(private route:ActivatedRoute,private manageDataService:ManageDataService,
    private router:NavController) { }

  ngOnInit() {
    this.myId = JSON.parse(localStorage.getItem('mydata')).id as number;
    this.id_donateur = this.route.snapshot.params['id_donateur'];
    this.id_reicv = this.route.snapshot.params['id_receiver'];
    this.id_demande = this.route.snapshot.params['id_demande'];
    this.id_don = this.route.snapshot.params['id_don'];
    this.id_don!=0?this.isdon = true:this.isdon = false;
    this.getDonateur();
    this.getReceiver();
    this.getnbreservations();
    this.isdon?this.getDon():this.getDemande();
    this.isdon?this.getConversDons():this.getConversDons();
    setTimeout(()=>{
      this.isdon?console.log(this.don):console.log(this.demande);
      console.log(this.donateur);
      console.log(this.receiver);
    },2000)
   
    }
  /*-------------------------------------------VARIABLES------------------------------------*/
  private id_donateur:number=null;
  private id_reicv:number=null;
  private id_demande:number=null;
  private id_don:number=null;
  public don:IDon = null;
  public demande:IDemande= null;
  public donateur:any= null;
  public receiver:any= null;
  public convers:any[]=[];
  public isdon:boolean;
  public storage = environment.storage;
  private myId:number=null;
  public new_message:string="";
  public nbreserv:number=null;
  /*-------------------------------------------FUNCTIONS-------------------------------------------*/
  public back(){
    this.router.back();
  }
  public get id():number { return this.myId;};
  public get donat_id():number{return this.id_donateur;}
  public get reic_id():number{return this.id_reicv;}
  public get demand_id():number{return this.id_demande;}
  public get don_id():number{return this.id_don;}
  public get conversation():any{return this.convers}
  public getreserverDon(){
    this.manageDataService.reserverDon(this.don_id,this.donat_id).toPromise().then(
      data=>{
        this.ngOnInit();
      }
    ).catch(
      err=>{console.log(err);}
    )
  }
  public getnbreservations(){
    this.manageDataService.nbreservations(this.don_id).toPromise()
    .then(
      data=>{
        this.nbreserv = data.nombre;
        console.log(data)
      }
    ).catch(err=>{console.log(err);})
  }
  public addMessage(){
    this.manageDataService.addMessageDon(this.don_id,this.id,this.donat_id,this.new_message,0)
    .toPromise()
    .then(
      res=>{
        const message = {
          id:res.id,
          donateur_id:Number(res.donateur_id),
          receiver_id:Number(res.receiver_id),
          contenu:res.contenu,
          created_at:res.created_at
        }
        this.convers.push(message);
        console.log(message)
        this.new_message = "";
      }
    ).catch(
      err=>{}
    )
  }
  public getConversDons(){
    this.manageDataService.getConversationsDon(this.donat_id,this.reic_id,this.don_id).toPromise().then(
      data=>{
        data.data.forEach(conv=>{
          this.convers.push({
            id:conv.id,
            donateur_id:conv.donateur_id,
            receiver_id:conv.receiver_id,
            contenu:conv.contenu,
            created_at:conv.created_at
          })
        });
        
      }
    )
  }
  public getConversDemande(){
    this.manageDataService.getConversationsDon(this.donat_id,this.reic_id,this.demand_id).toPromise().then(
      data=>{
        data.data.forEach(conv=>{
          this.convers.push({
            donateur_id:conv.donateur_id,
            receiver_id:conv.receiver_id,
            contenu:conv.contenu
          })
        })
      }
    )
  }
  public getDemande(){
    this.manageDataService.getOneDemande(this.demand_id).toPromise().then(
      data=>{
          this.demande = data;
      }
    ).catch(
      err=>{

      }
    )
    }
  public getDonateur(){
    this.manageDataService.getDonateur(this.donat_id).toPromise().then(
      data=>{
       this.donateur = data;
      }
    ).catch(
      err=>{
       console.log(err);
      }
    )
  }
  public getReceiver(){
    this.manageDataService.getDonateur(this.reic_id).toPromise().then(
      data=>{
       this.receiver = data;
      }
    ).catch(
      err=>{
       console.log(err);
      }
    )
  } 
  public getDon(){
    this.manageDataService.getOneDon(this.don_id).toPromise().then(
      data=>{
        this.don = data;
      }
    ).catch(
      err=>{
       console.log(err)
      }
    )
  }
}
