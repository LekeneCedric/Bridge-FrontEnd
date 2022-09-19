import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import TimeAgo from 'javascript-time-ago';
import fr from 'javascript-time-ago/locale/fr'
import { ModalEditProfilPage } from 'src/app/modals/modal-edit-profil/modal-edit-profil.page';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profil-donateur',
  templateUrl: './profil-donateur.page.html',
  styleUrls: ['./profil-donateur.page.scss'],
})
export class ProfilDonateurPage implements OnInit {

  constructor(private navCtrl:NavController,private route:ActivatedRoute,
    private manageDataService:ManageDataService,private modalCtrl:ModalController) { }
 
  ngOnInit() {
    TimeAgo.addDefaultLocale(fr);
    this.myId = JSON.parse(localStorage.getItem('mydata')).id as number;
    this.user_id = this.route.snapshot.params.id;
    this.manageDataService.getDonateur(this.user_id).toPromise().then(
      data=>{
        console.log(data)
        this.userInfo = data;
      }
    ).catch(err=>{
      console.log(err);
    })
  }
  /*------------------------------VARIABLES---------------------*/
  public myId:number=null;
  public selectedSegment='dons';
  public user_id : number;
  public userInfo=null;
  public storage = environment.storage;
  /*------------------------------FUNCTIONS---------------------*/
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
 refresh(){
  this.ngOnInit();
 }
 doRefresh(event){
  setTimeout(()=>{
   this.refresh(); 
   event.target.complete();
  },500)
 }
  public async edit(){
    const modal = await this.modalCtrl.create({
      component:ModalEditProfilPage,
      componentProps:{
        user:this.userInfo
      },
      breakpoints:[0,1],
      initialBreakpoint:0.8,
      animated:true,
      handle:true
    });
    modal.present();
    const {data,role } = await modal.onWillDismiss();
    if(role ==='confirm'){
      setTimeout(()=>{
        console.log('exit')
        this.refresh();
      },200) 
    }
  }
  public segmentChanged(event:any){
    this.selectedSegment = event.target.value; 
   }
  navBack(){
    this.navCtrl.back();
  }
}
