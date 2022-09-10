import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, PopoverController, ToastController } from '@ionic/angular';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';

@Component({
  selector: 'app-modal-popover',
  templateUrl: './modal-popover.page.html',
  styleUrls: ['./modal-popover.page.scss'],
})
export class ModalPopoverPage implements OnInit {

  constructor(private http:HttpClient,
    private popover:PopoverController ,private alertController:AlertController,private toast:ToastController,
    private manageDataService:ManageDataService) { }
  @Input() delMessageId:number;
  ngOnInit() {
  }
  public async deleteMessage(){
    const alert = await this.alertController.create({
      cssClass:'deconnexion-alert',
      header: 'supprimer ce message ?',
      buttons: [
        {
          text: 'annuler',
          role: 'cancel',
          cssClass : 'color:gray',
          handler: () => {
          },
        },
        {
          text: 'supprimer',
          role: 'confirm',
          handler: () => {
           this.manageDataService.deleteMessage(this.delMessageId).toPromise().then(async (data)=>{
            const toast = this.toast.create({
              message:`message supprime avec success`,
              icon: 'information-circle',
              duration:500,
              color:"danger"
            });
            (await (toast)).present();
            this.cancel();  
           }).catch(async (err)=>{
            const toast = this.toast.create({
              message:`erreur survenue ....`,
              icon: 'information-circle',
              duration:500,
              color:"warning"
            });
            this.ngOnInit();
            (await (toast)).present();  
           })
          },
        },
      ],
    });
    await alert.present();
 }

 cancel(){
  return this.popover.dismiss(null, 'confirm');
  }
}

