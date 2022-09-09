import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
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
    private router:NavController,private toast:ToastController) { }

  ngOnInit() {
    this.convers = [];
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
    this.isdon?this.getConversDons():this.getConversDemande();
    setTimeout(()=>{
      this.isdon?console.log(this.don):console.log(this.demande);
      console.log(this.donateur);
      console.log(this.receiver);
    },2000)
    setTimeout(()=>{      
      this.manageDataService.isReserv(this.id_don,this.id_reicv).toPromise().then(
        data=>{
          console.log(data.message)
          data.message == 'oui'?this.isReserv = true:this.isReserv=false;
        }
      )
    },500)
    }
  /*-------------------------------------------VARIABLES------------------------------------*/
  public isReserv:boolean = false;
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
  public createur:number=null;
  /*-------------------------------------------FUNCTIONS-------------------------------------------*/
  public reserveDon(){
   let don_id = this.don_id;
   let donateur_id = this.id_reicv;
   this.manageDataService.reserverDon(don_id, donateur_id).toPromise().then(
    async (data)=>{
      const toast = this.toast.create({
        message:`Don reserve avec success`,
        icon: 'information-circle',
        duration:1000,
        color:"success"
      });
      
      (await (toast)).present();  
    }
   ).finally(()=>{
    this.ngOnInit();
   })
  }
  public annulerReservation(){
    let don_id = this.don_id;
   let donateur_id = this.id_reicv;
   this.manageDataService.annulerReservation(don_id, donateur_id).toPromise().then(
    async (data)=>{
      const toast = this.toast.create({
        message:`Reservation annule`,
        icon: 'information-circle',
        duration:1000,
        color:"warning"
      });
      (await (toast)).present();  
    }
   ).finally(()=>{
    this.ngOnInit();
   })
  }
  public back(){
    this.router.back();
  }
  doRefresh(event){
    setTimeout(()=>{
     this.ngOnInit(); 
     event.target.complete();
    },500)
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
    this.isdon?this.manageDataService.addMessageDon(this.don_id,this.donat_id,this.reic_id,this.new_message,0,this.id,this.id==this.donat_id?this.reic_id:this.donat_id)
    .toPromise()
    .then(
      res=>{
        const message = {
          id:res.id,
          donateur_id:Number(res.donateur_id),
          receiver_id:Number(res.receiver_id),
          sender:res.sender,
          receiver:res.receiver,
          contenu:res.contenu,
          created_at:res.created_at
        }
        this.convers.push(message);
        console.log(message)
        this.new_message = "";
      }
    ).catch(
      err=>{}
    ):
    this.manageDataService.addMessageDemande(this.demand_id,this.donat_id,this.reic_id,this.new_message,0,this.id,this.id==this.donat_id?this.reic_id:this.donat_id)
    .toPromise()
    .then(
      res=>{
        const message = {
          id:res.id,
          donateur_id:Number(res.donateur_id),
          receiver_id:Number(res.receiver_id),
          sender:res.sender,
          receiver:res.receiver,
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
        this.createur = data.createur_don_id;
        data.data1.forEach(conv=>{
          this.convers.push({
            id:conv.id,
            donateur_id:conv.donateur_id,
            receiver_id:conv.receiver_id,
            contenu:conv.contenu,
            sender:conv.sender,
            receiver:conv.receiver,
            created_at:conv.created_at
          })
        });
        data.data2.forEach(conv=>{
          this.convers.push({
            id:conv.id,
            donateur_id:conv.donateur_id,
            receiver_id:conv.receiver_id,
            contenu:conv.contenu,
            sender:conv.sender,
            receiver:conv.receiver,
            created_at:conv.created_at
          })
        });
        this.convers.sort((a, b) => a.created_at.localeCompare(b.created_at))
      }
    )
  }
  public getConversDemande(){
    this.manageDataService.getConversationsDemande(this.donat_id,this.reic_id,this.demand_id).toPromise().then(
      data=>{
        this.createur = data.createur_demande_id;
        data.data1.forEach(conv=>{
          this.convers.push({
            id:conv.id,
            donateur_id:conv.donateur_id,
            receiver_id:conv.receiver_id,
            contenu:conv.contenu,
            sender:conv.sender,
            receiver:conv.receiver,
            created_at:conv.created_at
          })
        });
        data.data2.forEach(conv=>{
          this.convers.push({
            id:conv.id,
            donateur_id:conv.donateur_id,
            receiver_id:conv.receiver_id,
            contenu:conv.contenu,
            sender:conv.sender,
            receiver:conv.receiver,
            created_at:conv.created_at
          })
        })
        this.convers.sort((a, b) => a.created_at.localeCompare(b.created_at))
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
