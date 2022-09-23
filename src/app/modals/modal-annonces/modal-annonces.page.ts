import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-annonces',
  templateUrl: './modal-annonces.page.html',
  styleUrls: ['./modal-annonces.page.scss'],
})
export class ModalAnnoncesPage implements OnInit {
@Input() association_id:number;
  constructor(private manageDataService:ManageDataService,private modalCtrl:ModalController) { }

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem('mydata')).id;
    this.manageDataService.getAnnoncesAssociation(this.association_id).toPromise().then(
      (data)=>{
        this.Annonces = data
      }
    )
    console.log(this.Annonces);
  }
  public id:number;
  public storage = environment.storage;
  public Annonces:any 
  public like(id_annonce){
    const data = {
      donateur_id:this.id,
      annonce_id:id_annonce
    }
    this.manageDataService.LikerAnnonce(data).toPromise().then((data)=>{
      this.ngOnInit()
    })
  }
  public dislike(id_annonce){
    this.manageDataService.disLikerAnnonce(id_annonce).toPromise().then(
      (data)=>{
         this.ngOnInit();
      }
    )
  }
  confirm(){
    return this.modalCtrl.dismiss(null, 'confirm');
  }
}
