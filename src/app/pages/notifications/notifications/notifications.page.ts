import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import TimeAgo from 'javascript-time-ago';
import fr from 'javascript-time-ago/locale/fr'
import { NotificationPage } from './notification/notification.page';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor(private route:ActivatedRoute,private manageDataService:ManageDataService,
    private navCtrl:NavController,private modalCtrl:ModalController) { }

  ngOnInit() {
    this.notifications = [];
    TimeAgo.addDefaultLocale(fr);
    setInterval(()=>{
      const tabBar = document.getElementById('app-tab-bar');
      tabBar.style.display = 'flex';
    },100)
    this.id_donateur = this.route.snapshot.params['id_donateur'];
    this.manageDataService.getNotificationDonateur(this.id_donateur).toPromise().then(
      data=>{
        data.forEach((notif)=>{
          this.notifications.push(notif);
        })
      }
    ).finally(()=>{
      console.log(this.notifications)
    })
  }

  /*-------------------------VARIABLES--------------------------*/
  public id_donateur:number = null;
  public notifications:any[]=[]
  /*--------------------------FUNCTIONS-------------------------*/
  public refresh(){
    setTimeout(()=>{
      this.ngOnInit();
    },500)
  }
  public timeAgo(created_at:any):string{
    const timeAgo = new TimeAgo('fr-EU');
    const elapsedTime = timeAgo.format(new Date(Date.parse(created_at)-60*1000));
    return elapsedTime
  }
  public back(){
  this.navCtrl.back();
  }
  public async openNotification(notif){
    this.manageDataService.vueNotification(this.id_donateur,notif.id).toPromise().then(async ()=>{
      const modal = await this.modalCtrl.create({
        component:NotificationPage,
        componentProps:{
          title:notif.title,
          description:notif.message,
          timeAgo:this.timeAgo(notif.created_at)
        },
        breakpoints:[0,1],
        initialBreakpoint:1,
        animated:true,
        handle:false
      });
      modal.present();
      const {data,role } = await modal.onWillDismiss();
      if(role ==='confirm'){}
    })
    
  }
  doRefresh(event){
    setTimeout(()=>{
     this.ngOnInit(); 
     event.target.complete();
    },500)
   }
}
