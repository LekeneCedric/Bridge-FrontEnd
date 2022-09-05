import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import TimeAgo from 'javascript-time-ago';
import { IDon } from 'src/app/models/don.model';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import fr from 'javascript-time-ago/locale/fr'
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-details-don',
  templateUrl: './details-don.page.html',
  styleUrls: ['./details-don.page.scss'],
})
export class DetailsDonPage implements OnInit {

  constructor(private navCtrl:NavController,private route:ActivatedRoute,
    private manageDataService:ManageDataService) { }

  ngOnInit() {
  this.id = JSON.parse(localStorage.getItem('mydata')).id as number;
  this.donsSimilaires = [];
  this.detail_id = this.route.snapshot.params.id;
  this.getDon();
  setTimeout(()=>{
    this.getDonSimilaires();
  },2000)
    const tabBar = document.getElementById('app-tab-bar');
  if (tabBar !== null) {
    tabBar.style.display = 'none';
  }}

  /*--------------------------------VARIABLES--------------------------------*/
  public id:number = null;
  public elapsedTime:any;
  public detail_id: number=null;
  public don:IDon = null;
  public donsSimilaires:IDon[];
  public storage = environment.storage;
  public slideOpts = {
    initialSlide: 0,
    speed: 1000,
    autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          stopOnLastSlide: false
    }
  }
  /*--------------------------------FUNCTIONS--------------------------------*/
  get myId():number{
   return this.id;
  }
  image(don:any):any{
    let url = '';
    don.media.length>1?url= `${this.storage+don.media[0].filePath.toString()}`: url='../../../../../../assets/images/empty.webp'
   
    return `url(${url})`;
  }
  
  navBack(){
    this.navCtrl.back();
  }
  doRefresh(event){
    setTimeout(()=>{
     this.ngOnInit(); 
     event.target.complete();
    },500)
   }
  getDon(){
    this.manageDataService.getOneDon(this.detail_id).toPromise()
    .then(
      (data)=>{
        this.don = data;
        TimeAgo.addDefaultLocale(fr);
        const timeAgo = new TimeAgo('fr-EU');
        this.elapsedTime = timeAgo.format(new Date(Date.parse(data.created_at)))
      }
    )
    .catch(err=>{
      this.navBack();
    })
  }
  getDonSimilaires(){
    const id:number = this.don.id;
    const category:string = this.don.category;
    this.manageDataService.getDonSimilaires(id,category).toPromise().then(
      (data)=>{
       data.forEach((don)=>{
         this.donsSimilaires.unshift(don);
       })
      }
    ).catch((err)=>{
    console.log(err);
    })
  }

}
