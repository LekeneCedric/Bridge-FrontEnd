import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { IDon } from 'src/app/models/don.model';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';

import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { ModalCategoryPage } from 'src/app/modals/modal-category/modal-category.page';
import { ModalEtatPage } from 'src/app/modals/modal-etat/modal-etat.page';
@Component({
  selector: 'app-dons',
  templateUrl: './dons.page.html',
  styleUrls: ['./dons.page.scss'],
})
export class DonsPage implements OnInit {

  constructor(private manageDataService:ManageDataService,
    private nativGeocoder:NativeGeocoder,private modalCtrl:ModalController) { }

  ngOnInit() {
    this.current_page = 1;
    this.next_page = 2;
    this.dons = [];
    this.getDons();
    this.myid = JSON.parse(localStorage.getItem('mydata')).id;
    setInterval(()=>{
      const tabBar = document.getElementById('app-tab-bar');
      tabBar.style.display = 'flex';
    },100)
  }
  /*-----------------------------VARIABLES-----------------------------*/
  private myid :number = null;
  public dons:IDon[]=[];
  GeocoderOption:any={useLocale: true,maxResults: 5};
  public selectedCategory : string[]=[];
  public selectedEtat:string[]=[];
  public storage = 'http://127.0.0.1:8000/storage/';
  public current_page :number = 1;
  public next_page : number = 1;
  public last_page :number = null;
  /*-----------------------------FUNCTIONS-----------------------------*/
  get id ():number{return this.myid}
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
  public async openModalEtat(){
  const modal = await this.modalCtrl.create({
    component:ModalEtatPage,
    componentProps:{
      selectedEtat:this.selectedEtat
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
    this.selectedEtat=data;
  }
}
  public refreshFilter(){
    this.selectedCategory = [];
    this.selectedEtat = [];
  }
  image(don:any):any{
    let url = '';
    don.media.length>0?url= `${this.storage+don.media[0].filePath.toString()}`: url='../../../../../../assets/images/empty.webp'
   
    return `url(${url})`;
  }
  getDons(){
    this.manageDataService.getDons(this.current_page).toPromise().then(
      data=>{
        this.last_page = data.last_page;
        data.data.forEach((don)=>{
          this.dons.push(don);
        })
      },
    ).catch(err=>{

    })
  }
  public loadData(event:any){
    setTimeout(()=>{
      this.current_page < this.last_page ?this.current_page = this.next_page:this.current_page;
      this.next_page < this.last_page ? this.next_page+=1:this.next_page;
      this.current_page < this.last_page ? this.getDons() : event.target.disabled=true;
      event.target.complete();
    },500)
    
  }
  // public filtre(category:string , etat:string):boolean{
  //   let res:boolean;
  // (this.selectedCategory.includes(category)&&this.selectedEtat.includes(etat))||
  // (this.selectedCategory.includes(category)&&this.selectedEtat.length<1)||
  // (this.selectedCategory.length <1 && this.selectedEtat.includes(etat))||
  // (this.selectedCategory.length<1&&this.selectedEtat.length<1)?res=true:res=false;
  // return res;
  // }
  
  doRefresh(event){
   setTimeout(()=>{
    this.ngOnInit(); 
    event.target.complete();
   },500)
  }
  refresh(){
    this.ngOnInit();
  }
}
