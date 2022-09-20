import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ModalAddMemberAssociationPage } from 'src/app/modals/modal-add-member-association/modal-add-member-association.page';
import { ModalAssociationsMembresPage } from 'src/app/modals/modal-associations-membres/modal-associations-membres.page';
import { ModalDemandesAdhesionAssociationPage } from 'src/app/modals/modal-demandes-adhesion-association/modal-demandes-adhesion-association.page';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';

@Component({
  selector: 'app-administration-association',
  templateUrl: './administration-association.page.html',
  styleUrls: ['./administration-association.page.scss'],
})
export class AdministrationAssociationPage implements OnInit {

  constructor(private route:ActivatedRoute,private navCtrl:NavController,
    private manageDataService: ManageDataService,
    private modalCtrl:ModalController) { }

  ngOnInit() {
    this.idAssociation = this.route.snapshot.params['id'];
    this.manageDataService.getOneAssociation(this.idAssociation).toPromise().then(
      data=>{
        this.Association = data;
      }
    ).catch(()=>{
    })
  }
  public Association:any=null;
  public idAssociation:number=null;
  public navBack(){
    this.navCtrl.back();
  }
  public async openModalDemandesAdhesion(){
    const modal = await this.modalCtrl.create({
      component:ModalDemandesAdhesionAssociationPage,
      componentProps:{
        id_association:this.idAssociation
      },
      breakpoints:[0,1],
      initialBreakpoint:this.Association.attentes.length<1 ?0.2:0.3,
      animated:true,
      handle:true,
    });
    modal.present();
    const {data,role } = await modal.onWillDismiss();
  }
  public async openModalMembers(){
    const modal = await this.modalCtrl.create({
      component:ModalAssociationsMembresPage,
      componentProps:{
        id_association:this.idAssociation
      },
      breakpoints:[0,1],
      initialBreakpoint:this.Association.attentes.length<1 ?0.2:0.3,
      animated:true,
      handle:true,
    });
    modal.present();
    const {data,role } = await modal.onWillDismiss(); 
  }
  public async openModalAddMembers(){
    const modal = await this.modalCtrl.create({
      component:ModalAddMemberAssociationPage,
      componentProps:{
        id_association:this.idAssociation
      },
      breakpoints:[0,1],
      initialBreakpoint:0.3,
      animated:true,
      handle:true,
    });
    modal.present();
    const {data,role } = await modal.onWillDismiss();
  }
  
}
