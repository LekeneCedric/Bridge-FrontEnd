import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';

@Component({
  selector: 'app-modal-demandes-adhesion-association',
  templateUrl: './modal-demandes-adhesion-association.page.html',
  styleUrls: ['./modal-demandes-adhesion-association.page.scss'],
})
export class ModalDemandesAdhesionAssociationPage implements OnInit {
  @Input() id_association:number;
  constructor(private manageDataService:ManageDataService,private modalCtrl:ModalController,private toast:ToastController) { }
  
  ngOnInit() {
    this.manageDataService.getOneAssociation(this.id_association).toPromise().then(
      data=>{
        this.Association = data;
      }
    ).catch(()=>{
      this.cancel();
    })
  }

  public Association:any=null;
  cancel(){
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  
  confirm(){
    return this.modalCtrl.dismiss(null, 'confirm');
  }
  public rejectDemand(id_donateur:number){
    this.manageDataService.rejectAssociationMember(id_donateur,this.id_association).toPromise().then(
      async data=>{
        const toast = this.toast.create({
          message:`demande rejete`,
          icon: 'information-circle',
          duration:1000,
          color:"danger"
        });
        this.ngOnInit();
        (await (toast)).present();  
      }
    )
  }
  public acceptDemand(id_donateur:number){
    this.manageDataService.addAssociationMember(id_donateur,this.id_association).toPromise().then(
      async data=>{
        const toast = this.toast.create({
          message:`demande accpte`,
          icon: 'information-circle',
          duration:1000,
          color:"success"
        });
        this.ngOnInit();
        (await (toast)).present();  
      }
    )
  }
}
