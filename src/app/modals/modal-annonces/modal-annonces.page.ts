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
    this.manageDataService.getAnnoncesAssociation(this.association_id).toPromise().then(
      (data)=>{
        this.Annonces = data
      }
    )
    console.log(this.Annonces);
  }
  public storage = environment.storage;
  public Annonces:any 

  confirm(){
    return this.modalCtrl.dismiss(null, 'confirm');
  }
}
