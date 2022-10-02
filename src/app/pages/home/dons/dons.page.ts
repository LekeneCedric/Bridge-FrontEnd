import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IDon } from 'src/app/models/don.model';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import fr from 'javascript-time-ago/locale/fr'
import { ModalCategoryPage } from 'src/app/modals/modal-category/modal-category.page';
import { ModalEtatPage } from 'src/app/modals/modal-etat/modal-etat.page';
import TimeAgo from 'javascript-time-ago';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-dons',
  templateUrl: './dons.page.html',
  styleUrls: ['./dons.page.scss'],
})
export class DonsPage implements OnInit {

  constructor(private manageDataService:ManageDataService,private modalCtrl:ModalController) {}

  ngOnInit() {
    this.notifications = [];
    this.loadingDons = true;
    this.myid = JSON.parse(localStorage.getItem('mydata')).id;
    setInterval(()=>{
      if(this.loadingDons==true && this.dons.length<1){
          this.is_null_Don = true;
      }
      else if (this.loadingDons==true && this.dons.length>1){
        this.is_null_Don = false;
        this.loadingDons = false
      }
    },100)
    setInterval(()=>{
      if(this.is_null_Don)
      {
        if(this.dons.length>0){
          this.is_null_Don = false;
          this.loadingDons=false;
        }
        else{
          this.is_null_Don = true;
          this.loadingDons=false;
        }
      }
      else if (!this.is_null_Don){
        if(this.dons.length<1){
          this.is_null_Don = true;
          this.loadingDons=false;
        }
        else{
          this.is_null_Don = false;
          this.loadingDons=false;
        }
      }
    },100)
    setTimeout(()=>{
      this.dons.length <1 ? this.is_null_Don = true:this.is_null_Don = false;
      this.loadingDons = false
    },10000)
    this.dons = [];
    this.loadingDons= true;
    this.is_null_Don= false;
    this.myData = JSON.parse(localStorage.getItem('mydata'));
    console.log(this.myData);
    this.current_page = 1;
    this.getDons();
    this.getMyNotifications();
    setInterval(()=>{
      const tabBar = document.getElementById('app-tab-bar');
      tabBar.style.display = 'flex';
    },100)
    TimeAgo.addDefaultLocale(fr);
   
  }
  /*-----------------------------VARIABLES-----------------------------*/
  public loadingDons:boolean = false;
  public is_null_Don:boolean = false;
  private myid :number = null;
  public dons:IDon[]=[];
  public donContainer:IDon[] = [];
  GeocoderOption:any={useLocale: true,maxResults: 5};
  public selectedCategory : string[]=[];
  public selectedEtat:string[]=[];
  public storage = environment.storage;
  public current_page :number = 1;
  public next_page : number = this.current_page;
  public last_page :number = null;
  public myData:any = {};
  public notifications:any[] = [];
  /*-----------------------------FUNCTIONS-----------------------------*/
 
  public timeAgo(created_at:any):string{
    const timeAgo = new TimeAgo('fr-EU');
    const elapsedTime = timeAgo.format(new Date(Date.parse(created_at)-60*1000));
    return elapsedTime
  }
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
      this.dons = this.donContainer;
      console.log(this.selectedCategory)
      if(this.selectedCategory.length>0 && this.selectedEtat.length<1)
      {
        this.dons = this.donContainer.filter((don)=>{
          return this.selectedCategory.includes(don.category);
        }); 
      }
      else if (this.selectedCategory.length>0 && this.selectedEtat.length>0)
      {
        this.dons = this.donContainer.filter((don)=>{
          return this.selectedCategory.includes(don.category) && this.selectedEtat.includes(don.etat);
        });   
      }
      else if (this.selectedCategory.length<1 && this.selectedEtat.length>0)
      {
        this.dons = this.donContainer.filter((don)=>{
          return this.selectedEtat.includes(don.etat);
        }); 
      }
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
    this.dons = this.donContainer;
    this.selectedEtat=data;
    if(this.selectedCategory.length>0 && this.selectedEtat.length<1)
      {
        this.dons = this.donContainer.filter((don)=>{
          return this.selectedCategory.includes(don.category);
        }); 
      }
      else if (this.selectedCategory.length>0 && this.selectedEtat.length>0)
      {
        this.dons = this.donContainer.filter((don)=>{
          return this.selectedCategory.includes(don.category) && this.selectedEtat.includes(don.etat);
        });   
      }
      else if (this.selectedCategory.length<1 && this.selectedEtat.length>0)
      {
        this.dons = this.donContainer.filter((don)=>{
          return this.selectedEtat.includes(don.etat);
        }); 
      }
  }
}
  public refreshFilter(){
    console.log(this.donContainer)
    this.dons = this.donContainer;
    this.selectedCategory = [];
    this.selectedEtat = [];
  }
  image(don:any):any{     
    let url = '';
    don.media.length>0?url= `${this.storage+don.media[0].filePath}`: url='assets/images/empty.webp'
    return url;
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
  public getDons(){
    
    this.manageDataService.getDons(this.current_page).toPromise().then(
      data=>{
        this.last_page = data.last_page;
        console.log(this.last_page)
        data.data.forEach((don)=>{
          this.dons.push(don);
          this.donContainer.push(don);
        })
        this.selectedCategory.length>0?
        this.dons = this.dons.filter((don)=>{
          console.log(don.category)
          return this.selectedCategory.includes(don.category);
        }):null;
         
      },
    ).catch(err=>{

    }).finally(()=>{
      this.current_page+=1;
    })
  }
  public loadData(event:any){
    setTimeout(()=>{
      console.log(this.current_page,this.last_page)
      this.current_page <= this.last_page ? this.getDons():this.current_page;  
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
    this.refreshFilter();
    this.ngOnInit();
  }
}
