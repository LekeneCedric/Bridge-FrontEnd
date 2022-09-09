import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalSalonPage } from 'src/app/modals/modal-salon/modal-salon.page';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-receptions',
  templateUrl: './receptions.page.html',
  styleUrls: ['./receptions.page.scss'],
})
export class ReceptionsPage implements OnInit {

  
  constructor(private manageDataService: ManageDataService,private modalCtrl:ModalController) { }

  ngOnInit() {
    this.filterDonAttente = [];
    this.filterDonFinalise = [];
    this.filterDonReserve = [];
    this.filterSalonDonAttente = [];
    this.filterSalonDonFinalise = [];
    this.filterSalonDonReserve = []
    this.mesdonsContactes = [];
    this.mesdonsReserves = [];
    this.mesdonsFinalise = [];
    this.DonsContactes = [];
    this.DonsReserves = [];
    this.DonsFinalises = [];
    this.mesDemandesContactes = [];
    this.mesDemandeResolus = [];
    this.DemandesContactes = [];
    this.DemandeResolus = []; 
    this.salonsDons = [];
    this.salonsDemandes=[];
    this.myId = JSON.parse(localStorage.getItem('mydata')).id as number;
    this.getSalonsDons();
    this.getSalonsDemandes();
    this.category = 'mesdons';
  }
/*----------------------------------------VARIABLES----------------------------*/
public category:string;
public changeCategory(cat:string){
  this.category = cat;
  this.filtration();
}
private myId:number=null;
public selectedSegment:string = 'attente';
public salonsDemandes:any[] = [];
public salonsDons:any[]=[];
public storage = environment.storage;
seeDonContacte:boolean = false;
seeDonReserve:boolean = false;
seeDonFinalise:boolean = false;
mesdonsFinalise:any[]=[];
mesdonsReserves:any[] = [];
mesdonsContactes:any[] = [];
DonsContactes:any[] = [];
DonsReserves:any[] = [];
DonsFinalises:any[] = [];
mesDemandesContactes:any[] = [];
mesDemandeResolus:any[] = [];
DemandesContactes:any[] = [];
DemandeResolus:any[] = [];

public filterDonAttente:any[] = [];
public filterDonReserve:any[] = [];
public filterDonFinalise:any[] = [];
public filterSalonDonAttente:any[] = [];
public filterSalonDonReserve:any[] = [];
public filterSalonDonFinalise:any[] = [];
public filterDemandeAttente:any[] = [];
public filterDemandeResolu:any[] = [];


/*----------------------------------------FUNCTIONS----------------------------*/
  async openModalMesdonsAttentes(salon:any){
  const modal = await this.modalCtrl.create({
    component:ModalSalonPage,
    componentProps:{
      selectedRoom:salon,
      allRoom:this.mesdonsContactes
    },
    mode:'md',
      breakpoints:[0,1],
      initialBreakpoint:0.35,
      animated:true,
      handle:true
  });
  modal.present();
  const {data,role} = await modal.onWillDismiss();
  if(role ==='confirm'){
    
  }
}
async openModalMesdonsReserves(salon:any){
  const modal = await this.modalCtrl.create({
    component:ModalSalonPage,
    componentProps:{
      selectedRoom:salon,
      allRoom:this.mesdonsReserves
    },
    mode:'md',
      breakpoints:[0,1],
      initialBreakpoint:0.35,
      animated:true,
      handle:true
  });
  modal.present();
  const {data,role} = await modal.onWillDismiss();
  if(role ==='confirm'){
    
  }
}
async openModalMesdonsFinalises(salon:any){
  const modal = await this.modalCtrl.create({
    component:ModalSalonPage,
    componentProps:{
      selectedRoom:salon,
      allRoom:this.mesdonsFinalise
    },
    mode:'md',
      breakpoints:[0,1],
      initialBreakpoint:0.35,
      animated:true,
      handle:true
  });
  modal.present();
  const {data,role} = await modal.onWillDismiss();
  if(role ==='confirm'){
    
  }
}
filtration(){
  this.filterDonAttente = [];
  this.filterDonFinalise = [];
  this.filterDonReserve = [];
  this.filterDemandeAttente=[];
  this.filterDemandeResolu=[];
  if(this.category=='mesdons'){
    let temp1:number[] = [];
    console.log(this.mesdonsContactes.length);
    this.mesdonsContactes.forEach(don=>{
      if(temp1.includes(don.id_don)){
      }
      else{
        console.log('')
        temp1.push(don.id_don);
        this.manageDataService.getOneDon(don.id_don).toPromise().then(
          data=>{
            this.filterDonAttente.push({
              id_don:don.id_don,
              id_donateur:don.id_donateur,
              id_receiver:don.id_receiver,
              titre:data.titre,
              media:data.media,
              adresse:data.adresse
            })
          }
        )
      }  
    } );
    let temp2:number[] = [];
    this.mesdonsReserves.forEach(don=>{
      
      if(temp2.includes(don.id_don)){

      }
      else{
        
        temp2.push(don.id_don);
        this.manageDataService.getOneDon(don.id_don).toPromise().then(
          data=>{
            this.filterDonReserve.push({
              id_don:don.id_don,
              id_donateur:don.id_donateur,
              id_receiver:don.id_receiver,
              titre:data.titre,
              media:data.media,
              adresse:data.adresse
            })
          }
        )
      }
    });
    let temp3 :number [] = [];
    this.mesdonsFinalise.forEach(don=>{
      
      if(temp3.includes(don.id_don)){

      }else{
        
        temp3.push(don.id_don);
      this.manageDataService.getOneDon(don.id_don).toPromise().then(
        data=>{
          this.filterDonFinalise.push({
            id_don:don.id_don,
            id_donateur:don.id_donateur,
            id_receiver:don.id_receiver,
            titre:data.titre,
            media:data.media,
            adresse:data.adresse
          })
        }
      )}
    });

  }
  else if (this.category =='donsdesires'){
    let temp1:number[] = [];
    this.DonsContactes.forEach(don=>{
      if(temp1.includes(don.id_don)){
        console.log('oui')
      }
      else{
        console.log('')
        temp1.push(don.id_don);
        this.manageDataService.getOneDon(don.id_don).toPromise().then(
          data=>{
            this.filterDonAttente.push({
              id_don:don.id_don,
              id_donateur:don.id_donateur,
              id_receiver:don.id_receiver,
              titre:data.titre,
              media:data.media,
              adresse:data.adresse
            })
          }
        )
      }  
    } );
    let temp2:number[] = [];
    this.DonsReserves.forEach(don=>{
      if(temp2.includes(don.id_don)){

      }
      else{
        
        temp2.push(don.id_don);
        this.manageDataService.getOneDon(don.id_don).toPromise().then(
          data=>{
            this.filterDonReserve.push({
              id_don:don.id_don,
              id_donateur:don.id_donateur,
              id_receiver:don.id_receiver,
              titre:data.titre,
              media:data.media,
              adresse:data.adresse
            })
          }
        )
      }
    });
    let temp3 :number [] = [];
    this.DonsFinalises.forEach(don=>{   
      if(temp3.includes(don.id_don)){

      }else{
        
        temp3.push(don.id_don);
      this.manageDataService.getOneDon(don.id_don).toPromise().then(
        data=>{
          this.filterDonFinalise.push({
            id_don:don.id_don,
            id_donateur:don.id_donateur,
            id_receiver:don.id_receiver,
            titre:data.titre,
            media:data.media,
            adresse:data.adresse
          })
        }
      )}
    });
  }

  else if(this.category =='mesdemandes'){
    let temp1:number[]=[];
    this.mesDemandesContactes.forEach(demande=>{
      if(temp1.includes(demande.id_demande)){
      }
      else{
        temp1.push(demande.id_demande);
        this.manageDataService.getOneDemande(demande.id_demande).toPromise().then(
          data=>{
            console.log(data.id_donateur,data.id_receiver)
            this.filterDemandeAttente.push({
              id_createur:demande.id_donateur,
              id_demande:demande.id_demande,
              id_donateur:demande.id_donateur,
              id_receiver:demande.id_receiver,
              id_don:null,
              media:[],
              titre:data.title,
              adresse:data.adresse
            })

          }
        )
      }  
    } );

    let temp2:number[] = [];
    this.mesDemandeResolus.forEach(demande=>{
      if(temp2.includes(demande.id_demande)){
      }
      else{
        temp2.push(demande.id_demande);
        this.manageDataService.getOneDemande(demande.id_demande).toPromise().then(
          data=>{
            this.filterDemandeResolu.push({
              id_createur:demande.id_donateur,
              id_demande:demande.id_demande,
              id_donateur:demande.id_donateur,
              id_receiver:demande.id_receiver,
              id_don:null,
              media:[],
              titre:data.title,
              adresse:data.adresse
            })
          }
        )
      }  
    } );
  }
  else if(this.category == 'demandesrepondus'){
    let temp1:number[] = [];
    this.DemandesContactes.forEach(demande=>{
      if(temp1.includes(demande.id_demande)){
      }
      else{
        temp1.push(demande.id_demande);
        this.manageDataService.getOneDemande(demande.id_demande).toPromise().then(
          data=>{
            this.filterDemandeAttente.push({
              id_createur:demande.id_donateur,
              id_demande:demande.id_demande,
              id_donateur:demande.id_donateur,
              id_receiver:demande.id_receiver,
              id_don:null,
              media:[],
              titre:data.title,
              adresse:data.adresse
            })
          }
        )
      }  
    } );

    let temp2:number[] = [];
    this.DemandeResolus.forEach(demande=>{
      if(temp2.includes(demande.id_demande)){
      }
      else{
        temp2.push(demande.id_demande);
        this.manageDataService.getOneDemande(demande.id_demande).toPromise().then(
          data=>{
            this.filterDemandeResolu.push({
              id_createur:demande.id_donateur,
              id_demande:demande.id_demande,
              id_donateur:demande.id_donateur,
              id_receiver:demande.id_receiver,
              id_don:null,
              media:[],
              titre:data.title,
              adresse:data.adresse
            })
          }
        )
      }  
    } );

  }

}
public showDonContacte(){
  this.seeDonContacte = !this.seeDonContacte;
}
public showDonReserve(){
  this.seeDonReserve = !this.seeDonReserve;
}
public showDonFinalise(){
  this.seeDonFinalise = !this.seeDonFinalise;
}
doRefresh(event){
  setTimeout(()=>{
   this.ngOnInit(); 
   event.target.complete();
  },500)
 }
public get id():number { return this.myId;};
public segmentChanged(event:any)
{
  this.selectedSegment = event.target.value; 
}
 public getSalonsDons()
 {
   this.manageDataService.getSalonsDons(this.id).toPromise().then(
    data=>{
    data.forEach(data=>{
     this.manageDataService.getOneDon(data.id_don).toPromise().then(
        don=>{
          if(data.reserver>0){
         data.id_donateur==this.id?this.mesdonsReserves.push({
            id_createur:data.id_donateur,
             id_don:data.id_don,
             id_donateur:data.id_donateur,
             id_receiver:data.id_receiver,
             id_demande:null,
             data:{
              media:don.media,
              titre:don.titre,
              adresse:don.adresse
             }
          }):this.DonsReserves.push({
            id_createur:data.id_donateur,
             id_don:data.id_don,
             id_donateur:data.id_donateur,
             id_receiver:data.id_receiver,
             id_demande:null,
             data:{
              media:don.media,
              titre:don.titre,
              adresse:don.adresse
             }
          })
        }
          else if(data.disponible!=0){
            data.id_donateur==this.id?this.mesdonsFinalise.push({
              id_createur:data.id_donateur,
               id_don:data.id_don,
               id_donateur:data.id_donateur,
               id_receiver:data.id_receiver,
               id_demande:null,
               data:{
                media:don.media,
                titre:don.titre,
                adresse:don.adresse
               }
            }):this.DonsFinalises.push({
              id_createur:data.id_donateur,
               id_don:data.id_don,
               id_donateur:data.id_donateur,
               id_receiver:data.id_receiver,
               id_demande:null,
               data:{
                media:don.media,
                titre:don.titre,
                adresse:don.adresse
               }
            })
          }
          else{
            data.id_donateur==this.id?this.mesdonsContactes.push({
              id_createur:data.id_donateur,
               id_don:data.id_don,
               id_donateur:data.id_donateur,
               id_receiver:data.id_receiver,
               id_demande:null,
               data:{
                media:don.media,
                titre:don.titre,
                adresse:don.adresse
               }
            }):this.DonsContactes.push({
              id_createur:data.id_donateur,
               id_don:data.id_don,
               id_donateur:data.id_donateur,
               id_receiver:data.id_receiver,
               id_demande:null,
               data:{
                media:don.media,
                titre:don.titre,
                adresse:don.adresse
               }
            })
          }
        }
      )
    });
    }
   ).finally(()=>{
     setTimeout(()=>{

      this.filtration();
     },1000)
   })
  
 } 
 public getSalonsDemandes(){
  this.manageDataService.getSalonsDemandes(this.id).toPromise().then(
    data=>{
      data.forEach(data=>{
        this.manageDataService.getOneDemande(data.id_demande).toPromise().then(
          demande=>{
            if(data.resolu==0)
            {
              data.id_donateur ==this.id?
              this.DemandesContactes.push({
                id_createur:data.id_donateur,
                id_demande:data.id_demande,
                id_donateur:data.id_donateur,
                id_receiver:data.id_receiver,
                id_don:null,
                data:{
                  media:[],
                  titre:demande.title,
                  adresse:demande.adresse
                }
              }):this.mesDemandesContactes.push({
                id_createur:data.id_donateur,
                id_demande:data.id_demande,
                id_donateur:data.id_donateur,
                id_receiver:data.id_receiver,
                id_don:null,
                data:{
                  media:[],
                  titre:demande.title,
                  adresse:demande.adresse
                }
              })
            }
            else if(data.resolu >0){
              data.id_donateur ==this.id?this.DemandeResolus.push({
                id_createur:data.id_donateur,
                id_demande:data.id_demande,
                id_donateur:data.id_donateur,
                id_receiver:data.id_receiver,
                id_don:null,
                data:{
                  media:[],
                  titre:demande.title,
                  adresse:demande.adresse
                }
              }):
              this.mesDemandeResolus.push({
                id_createur:data.id_donateur,
                id_demande:data.id_demande,
                id_donateur:data.id_donateur,
                id_receiver:data.id_receiver,
                id_don:null,
                data:{
                  media:[],
                  titre:demande.title,
                  adresse:demande.adresse
                }
              })
            }
           
          }
        )
      })
    }
   )
 }
}
