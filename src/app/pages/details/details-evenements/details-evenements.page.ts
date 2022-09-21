import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';

import TimeAgo from 'javascript-time-ago';
import fr from 'javascript-time-ago/locale/fr'
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-details-evenements',
  templateUrl: './details-evenements.page.html',
  styleUrls: ['./details-evenements.page.scss'],
})
export class DetailsEvenementsPage implements OnInit {

 
  constructor(private navCtrl:NavController,private manageDataService:ManageDataService,
    private loadingController:LoadingController,
    private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.myId = JSON.parse(localStorage.getItem('mydata')).id;
    TimeAgo.addDefaultLocale(fr);
    this.id = this.route.snapshot.params['id'];
    this.MouvementInfo()
    this.manageDataService.imParticipate(this.myId,this.id).toPromise().then(
      data=>{
        console.log(data.message)
        data.message == 'reserve'?this.imParticipate=true:this.imParticipate=false;
        console.log(this.imParticipate)
      }
    )
    const tabBar = document.getElementById('app-tab-bar');
  if (tabBar !== null) {
    tabBar.style.display = 'none';
  }
  }
public Mouvement:any = null;
public id:number = null;
public myId:number = null;
public imParticipate:boolean = false;
public elapsedTime:any;
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
  /*----------------------------*/
  public async annulerParticipation(){
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'enregistrement....',
      translucent: true,
      cssClass: 'custom-class custom-loading',
    });
    await loading.present();
    this.manageDataService.annulerParticipation(this.myId,this.id).toPromise().then(
      async (data)=>{
        await loading.dismiss();
        this.ngOnInit();
      }
    ).catch(async ()=>{
     await loading.dismiss();
    })
  }
  public async participerMouvement(){
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'enregistrement....',
      translucent: true,
      cssClass: 'custom-class custom-loading',
    });
    await loading.present();
    const data = {
      mouvement_id:this.Mouvement.id,
      donateur_id:this.myId
    }
    this.manageDataService.participerMouvement(data).toPromise().then(
      async (data)=>{
        await loading.dismiss();
        this.ngOnInit();
      }
    ).catch(async ()=>{
     await loading.dismiss();
    })
  }
  public MouvementInfo(){
    this.manageDataService.getOneMouvement(this.id).toPromise().then(
      data=>{
        this.Mouvement = data;
        TimeAgo.addDefaultLocale(fr);
        const timeAgo = new TimeAgo('fr-EU');
        this.elapsedTime = timeAgo.format(new Date(Date.parse(data.created_at)));
        
      }
    )
  }
public timeAgo(created_at:any):string{
    const timeAgo = new TimeAgo('fr-EU');
    const elapsedTime = timeAgo.format(new Date(Date.parse(created_at)-60*1000));
    return elapsedTime
  }
get IdMouvement():number{
   return this.id;
  }
doRefresh(event){
    setTimeout(()=>{
     this.ngOnInit(); 
     event.target.complete();
    },500)
   }
  navBack(){
    this.navCtrl.back();
  }
}
