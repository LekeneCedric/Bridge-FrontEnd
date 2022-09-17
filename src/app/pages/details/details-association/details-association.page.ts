import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { ModalAnnoncesPage } from 'src/app/modals/modal-annonces/modal-annonces.page';
import { ModalMouvementsPage } from 'src/app/modals/modal-mouvements/modal-mouvements.page';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details-association',
  templateUrl: './details-association.page.html',
  styleUrls: ['./details-association.page.scss'],
})
export class DetailsAssociationPage implements OnInit {

  constructor(private manageDataService: ManageDataService,private router:ActivatedRoute,
    private navCtrl:NavController,private alertController:AlertController,
    private modalCtrl:ModalController) { }

  ngOnInit() {

this.myId = JSON.parse(localStorage.getItem('mydata')).id;
    this.idAssociation = this.router.snapshot.params['id'];
    let id = this.idAssociation;
    this.manageDataService.getOneAssociation(id).toPromise().then(
      data=>{
        this.Association = data;
        console.log(data)
      }
    )
  }

/*---------------------------VARIABLES----------------------------*/
myId:number=null;

public idAssociation:number=null;
public Association:any = null;
public storage:string = environment.storage;

/*---------------------------FUNCTIONS----------------------------*/
get Id(){
  return this.myId;
}
public navBack(){
  this.navCtrl.back();
}
public async openMouvementsModal(){
  const modal = await this.modalCtrl.create({
    component:ModalMouvementsPage,
    componentProps:{
      mouvements:this.Association.mouvement
    },
    breakpoints:[0,1],
    initialBreakpoint:1,
    animated:true,
    handle:true
  });
  modal.present();
  const {data,role } = await modal.onWillDismiss();
  if(role ==='confirm'){
  }
}
public async openAnnoncesModal(){
  const modal = await this.modalCtrl.create({
    component:ModalAnnoncesPage,
    componentProps:{
      annonces:this.Association.annonce
    },
    breakpoints:[0,1],
    initialBreakpoint:1,
    animated:true,
    handle:true
  });
  modal.present();
  const {data,role } = await modal.onWillDismiss();
  if(role ==='confirm'){
  }
}
}
