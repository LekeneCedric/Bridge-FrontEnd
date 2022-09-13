import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import TimeAgo from 'javascript-time-ago';
import fr from 'javascript-time-ago/locale/fr'
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.page.html',
  styleUrls: ['./annonces.page.scss'],
})
export class AnnoncesPage implements OnInit {

  constructor(private route:ActivatedRoute,private manageDataService:ManageDataService,
    private navController:NavController,private toast:ToastController,
    private alertController:AlertController) { }

  ngOnInit() {

    TimeAgo.addDefaultLocale(fr);
    this.id  = this.route.snapshot.params['id'];
    this.manageDataService.getDonateur(this.Id).toPromise().then(
      data=>{
        console.log(data)
        this.userInfo = data;
      }
    ).catch(err=>{
      console.log(err);
    })
  }

  /*--------------------------------VARIABLES--------------------------------*/
  private id:number = null;
  public userInfo = null;
  public selectedSegment='dons';
  public storage = environment.storage;
  /*--------------------------------FUNCTIONS----------------------------------------------------*/
  public async deleteDon(don:any){
    const alert = await this.alertController.create({
      cssClass:'deconnexion-alert',
      header: `voulez vous supprime ${don.titre} ?`,
      buttons: [
        {
          text: 'annuler',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'oui',
          role: 'confirm',
          handler: () => {
            this.manageDataService.deleteDon(don.id).toPromise().then(
              async data=>{
                const toast = this.toast.create({
                  message:`annonce de don supprime avec success`,
                  icon: 'information-circle',
                  duration:1000,
                  color:"danger"
                });
                (await (toast)).present(); 
              }
            ).catch(async err=>{
              const toast = this.toast.create({
                message:`Erreur lors de la supression du don`,
                icon: 'information-circle',
                duration:1000,
                color:"warning"
              });
              (await (toast)).present();
            }).finally(()=>{
              this.ngOnInit();
            })
          },
        },
      ],
    });
    await alert.present();
   
  }
  public navBack(){
    this.navController.back();
  }
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
  get Id(){
    return this.id;
  }
  public segmentChanged(event:any){
    this.selectedSegment = event.target.value; 
   }
}
