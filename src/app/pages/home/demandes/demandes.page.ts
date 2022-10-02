import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCategoryPage } from 'src/app/modals/modal-category/modal-category.page';
import { IDemande } from 'src/app/models/demande.model';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.page.html',
  styleUrls: ['./demandes.page.scss'],
})
export class DemandesPage implements OnInit {

  constructor(public manageDataService: ManageDataService,private modalCtrl:ModalController) { }

  ngOnInit() {
    this.notifications = [];
    this.demandes = [];
    this.getDemande();
    this.getMyNotifications();
    setInterval(()=>{
      if(this.loadingDemandes==false && this.demandes.length<1){
          this.is_null_Demande = true;
      }
      else{
        this.is_null_Demande = false;
      }
    },100)
    setTimeout(()=>{
      if(this.is_null_Demande)
      {
        this.demandes.length<1 ? this.loadingDemandes == true : this.loadingDemandes = false;
      }
      else if(!this.is_null_Demande)
      {
        this.demandes.length<1 ? this.loadingDemandes == true : this.loadingDemandes = false;
      }
      else{
        this.loadingDemandes = false;
      }
      
    },100)
    setTimeout(()=>{
      this.demandes.length <1 ? this.is_null_Demande = true:this.is_null_Demande = false;
      this.loadingDemandes = false
    },10000)
    this.loadingDemandes= true;
    this.is_null_Demande= false;
    this.myData = JSON.parse(localStorage.getItem('mydata'));
    this.myid = JSON.parse(localStorage.getItem('mydata')).id;

    setInterval(()=>{
      const tabBar = document.getElementById('app-tab-bar');
      tabBar.style.display = 'flex';
    },100)
  }

/*------------------------------VARIABLES------------------------------*/
public loadingDemandes : boolean = true;
public is_null_Demande : boolean = false;
public myData:any = {};
public myid :number = null;
public demandes:IDemande[]=[];
public demandesContainer:IDemande[] = [];
public storage = 'http://127.0.0.1:8000/storage/';
public selectedCategory : string[]=[];
public notifications:any[] = [];
/*------------------------------FUNCTIONS------------------------------*/
get id ():number{return this.myid}
public refreshFilter(){
  this.demandes = this.demandesContainer;
  this.selectedCategory = [];
}
public getMyNotifications(){
  this.manageDataService.getNotificationDonateur(this.myid).toPromise().then(
    data=>{
      console.log(data)
      data.forEach((notif)=>{
        notif.vu==0? this.notifications.push(notif):null;
      })
    }
  )
}
public async openModal(){
  const modal = await this.modalCtrl.create({
    component:ModalCategoryPage,
    componentProps:{
      selectedCategory:this.selectedCategory
    },
    breakpoints:[0,0.65],
      initialBreakpoint:0.65,
      animated:true,
      handle:true
  });
  modal.present();
  const {data,role } = await modal.onWillDismiss();
  if(role ==='confirm'){
    this.selectedCategory=data;
    this.demandes = this.demandesContainer;
    this.selectedCategory.length>0?
    this.demandes = this.demandes.filter((demande)=>{
      return this.selectedCategory.includes(demande.category)
    })
    :null;
  }
}
public refresh(){
  this.refreshFilter()
  setTimeout(()=>{
    this.ngOnInit();
  },500)
}
public doRefresh(event){
  setTimeout(()=>{
   this.ngOnInit(); 
   event.target.complete();
  },500)}
public getDemande(){
  return this.manageDataService.getDemandes().toPromise().then(
   data=>{
    this.demandes = data;
    this.demandesContainer = data;
    console.log(data)
   }
  ).catch(
    err=>{

    }
  )
}
}
