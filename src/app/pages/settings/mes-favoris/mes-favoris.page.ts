import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { environment } from 'src/environments/environment';

import fr from 'javascript-time-ago/locale/fr'

import TimeAgo from 'javascript-time-ago';
@Component({
  selector: 'app-mes-favoris',
  templateUrl: './mes-favoris.page.html',
  styleUrls: ['./mes-favoris.page.scss'],
})
export class MesFavorisPage implements OnInit {

  constructor(private manageDataService:ManageDataService,private navCtrl:NavController,private alertController:AlertController) { }

  ngOnInit() {
    TimeAgo.addDefaultLocale(fr);
    this.myId = JSON.parse(localStorage.getItem('mydata')).id;
    const tabBar = document.getElementById('app-tab-bar');
      if (tabBar !== null) {
        tabBar.style.display = 'none';
      }
   this.getAnnoncesFavoris()
  }
/*----------------------------------------VARIABLES--------------------------------*/
public AnnoncesFavoris:any[]=[];
public storage:string = environment.storage;
private myId:number;
/*---------------------------------------FUNCTIONS-------------------------------------*/
public timeAgo(created_at:any):string{
  const timeAgo = new TimeAgo('fr-EU');
  const elapsedTime = timeAgo.format(new Date(Date.parse(created_at)-60*1000));
  return elapsedTime
}
public getAnnoncesFavoris(){
  this.manageDataService.mesAnnoncesFavoris().toPromise().then(
    (data)=>{
      this.AnnoncesFavoris = data;
    }
  )
}
public like(id_annonce){
  const data = {
    donateur_id:this.myId,
    annonce_id:id_annonce
  }
  this.manageDataService.LikerAnnonce(data).toPromise().then((data)=>{
    this.ngOnInit()
  })
}
public async dislike(id_annonce){
  const alert = await this.alertController.create({
    header: 'vous vous engagez a retirer l\'annonce de vos favoris ? ',
    buttons: [
      {
        text: 'non',
        role: 'cancel',
        handler: () => {
        },
      },
      {
        text: 'oui j\'ai compris',
        role: 'confirm',
        handler: () => {
          this.manageDataService.disLikerAnnonce(id_annonce).toPromise().then(
            (data)=>{
               this.ngOnInit();
            }
          )
        },
      },
    ],
  });
  await alert.present();
}
public back(){
  this.navCtrl.back();
  const tabBar = document.getElementById('app-tab-bar');
  if (tabBar !== null) {
    tabBar.style.display = 'flex';
  }
}
}
