import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private route:ActivatedRoute,private manageDataService:ManageDataService,
    private alertController:AlertController,private authService:AuthService) { }

  ngOnInit() {
    setTimeout(()=>{
    this.manageDataService.getDonateur(this.id).toPromise()
    .then(
      data=>{
        this.mesInfo = data;
      }
    ).catch(
      err=>{

      }
    )
    },500)
    this.id = this.route.snapshot.params['id'];
  }

  /*------------------------------VARIABLES------------------------------*/
   private id:number = null;
   private mesInfo:any = null;
   private storage = environment.storage;
  /*------------------------------FUNCTIONS------------------------------*/
   public async deconnexion():Promise<void>{
    const alert = await this.alertController.create({
      cssClass:'deconnexion-alert',
      header: 'se deconnecter ?',
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
            this.authService.logout();
          },
        },
      ],
    });
    await alert.present();
   }
   get Id():number{return this.id}
   get MesInfo():any{return this.mesInfo}
   get Storage():string{return this.storage}
}
