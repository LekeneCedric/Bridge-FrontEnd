import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { IDon } from 'src/app/models/don.model';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import fr from 'javascript-time-ago/locale/fr'
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { ModalCategoryPage } from 'src/app/modals/modal-category/modal-category.page';
import { ModalEtatPage } from 'src/app/modals/modal-etat/modal-etat.page';
import TimeAgo from 'javascript-time-ago';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dons',
  templateUrl: './dons.page.html',
  styleUrls: ['./dons.page.scss'],
})
export class DonsPage implements OnInit {

  constructor(private manageDataService:ManageDataService,
    private nativGeocoder:NativeGeocoder,private modalCtrl:ModalController,private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any>('assets/country_dial_info.json').toPromise().then(
      data=>{
        console.log(data);
      }
    )
    this.myData = JSON.parse(localStorage.getItem('mydata'));
    console.log(this.myData);
    this.current_page = 1;
    this.dons = [];
    this.getDons();
    this.myid = JSON.parse(localStorage.getItem('mydata')).id;
    setInterval(()=>{
      const tabBar = document.getElementById('app-tab-bar');
      tabBar.style.display = 'flex';
    },100)
    TimeAgo.addDefaultLocale(fr);
    
  }
  /*-----------------------------VARIABLES-----------------------------*/
  private myid :number = null;
  public dons:IDon[]=[];
  GeocoderOption:any={useLocale: true,maxResults: 5};
  public selectedCategory : string[]=[];
  public selectedEtat:string[]=[];
  public storage = 'http://127.0.0.1:8000/storage/';
  public current_page :number = 1;
  public next_page : number = this.current_page;
  public last_page :number = null;
  public myData:any = {};
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
    don.media.length>0?url= `${this.storage+don.media[0].filePath}`: url='../../../../../../assets/images/empty.webp'
    return url;
  }
  getDons(){
    
    this.manageDataService.getDons(this.current_page).toPromise().then(
      data=>{
        this.last_page = data.last_page;
        console.log(this.last_page)
        data.data.forEach((don)=>{
          this.dons.push(don);
        })
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
    this.ngOnInit();
  }
}
