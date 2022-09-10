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
    TimeAgo.addDefaultLocale(fr);
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
  public nbreReserve:number=null;
  public reserve :boolean = false;
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
  public timeAgo(created_at:any):string{
    const timeAgo = new TimeAgo('fr-EU');
    const elapsedTime = timeAgo.format(new Date(Date.parse(created_at)-60*1000));
    return elapsedTime
  }
  image(don:any):any{
    let url = '';
    don.media.length>0?url= `${this.storage+don.media[0].filePath}`: url='../../../../../../assets/images/empty.webp'
   
    return url;
  }
  get myId():number{
   return this.id;
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
        data.nombre_reserve>0?this.reserve = true :this.reserve = false;
        this.don = data;
        TimeAgo.addDefaultLocale(fr);
        const timeAgo = new TimeAgo('fr-EU');
        this.elapsedTime = timeAgo.format(new Date(Date.parse(data.created_at)));
        this.manageDataService.nbreInteressesDon(data.id).toPromise().then(
          (data)=>{
            this.nbreReserve = data.nb;
          }
        )
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
