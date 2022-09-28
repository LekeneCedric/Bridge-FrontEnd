import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
import { ModalAnnoncesPage } from 'src/app/modals/modal-annonces/modal-annonces.page';
import { ModalAssociationsMembresPage } from 'src/app/modals/modal-associations-membres/modal-associations-membres.page';
import { ModalMouvementsPage } from 'src/app/modals/modal-mouvements/modal-mouvements.page';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details-association',
  templateUrl: './details-association.page.html',
  styleUrls: ['./details-association.page.scss'],
})
export class DetailsAssociationPage implements OnInit {

  constructor(private manageDataService: ManageDataService,private router:ActivatedRoute,
    private navCtrl:NavController,private alertController:AlertController,
    private modalCtrl:ModalController,private toast:ToastController) { }

  ngOnInit() {

this.myId = JSON.parse(localStorage.getItem('mydata')).id;
    this.idAssociation = this.router.snapshot.params['id'];
    let id = this.idAssociation;
    this.manageDataService.getOneAssociation(id).toPromise().then(
      data=>{
        this.Association = data;
        console.log(data)
      }
    )
  }

/*---------------------------VARIABLES----------------------------*/
myId:number=null;

public idAssociation:number=null;
public Association:any = null;
public storage:string = environment.storage;

/*---------------------------FUNCTIONS----------------------------*/
public doRefresh(event){
  setTimeout(()=>{
   this.ngOnInit(); 
   event.target.complete();
  },500)}
public async openModalMembers(){
  const modal = await this.modalCtrl.create({
    component:ModalAssociationsMembresPage,
    componentProps:{
      id_association:this.idAssociation
    },
    breakpoints:[0,1],
    initialBreakpoint:0.6,
    animated:true,
    handle:false,
  });
  modal.present();
  const {data,role } = await modal.onWillDismiss(); 
}
public rejectDemand(id_association:number){
  this.manageDataService.rejectAssociationMember(this.myId,id_association).toPromise().then(
    async data=>{
      this.ngOnInit();
      const toast = this.toast.create({
        message:`demande rejete`,
        icon: 'information-circle',
        duration:2000,
        color:"danger"
      });
      (await (toast)).present(); 
    }
  ).catch(()=>{
    this.ngOnInit()
  })
}
public sendDemand(id_association:number){
  this.manageDataService.becameAssociationMember(this.myId,id_association).toPromise().then(
    async data=>{
      this.ngOnInit();
      const toast = this.toast.create({
        message:`demande envoye`,
        icon: 'information-circle',
        duration:2000,
        color:"success"
      });
      (await (toast)).present(); 
    }
  ).catch(async ()=>{
    this.ngOnInit();
   
  })
}
get Id(){
  return this.myId;
}
public navBack(){
  this.navCtrl.back();
}
public async openMouvementsModal(){
  const modal = await this.modalCtrl.create({
    component:ModalMouvementsPage,
    componentProps:{
      association_id:this.Association.id
    },
    breakpoints:[0,1],
    initialBreakpoint:0.6,
    animated:true,
    handle:false
  });
  modal.present();
  const {data,role } = await modal.onWillDismiss();
  if(role ==='confirm'){
  }
}
public async openAnnoncesModal(){
  const modal = await this.modalCtrl.create({
    component:ModalAnnoncesPage,
    componentProps:{
      association_id:this.Association.id
    },
    breakpoints:[0,1],
    initialBreakpoint:0.6,
    animated:true,
    handle:false
  });
  modal.present();
  const {data,role } = await modal.onWillDismiss();
  if(role ==='confirm'){
  }
}
}
