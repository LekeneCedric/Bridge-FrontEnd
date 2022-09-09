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
    this.myData = JSON.parse(localStorage.getItem('mydata'));
    this.myid = JSON.parse(localStorage.getItem('mydata')).id;

    setInterval(()=>{
      const tabBar = document.getElementById('app-tab-bar');
      tabBar.style.display = 'flex';
    },100)
    this.getDemande();
  }

/*------------------------------VARIABLES------------------------------*/
public myData:any = {};
public myid :number = null;
public demandes:IDemande[]=[];
public storage = 'http://127.0.0.1:8000/storage/';
public selectedCategory : string[]=[];
/*------------------------------FUNCTIONS------------------------------*/
get id ():number{return this.myid}
public refreshFilter(){
  this.selectedCategory = [];
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
  }
}
public refresh(){
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
    this.demandes = data
    console.log(data)
   }
  ).catch(
    err=>{

    }
  )
}
}
