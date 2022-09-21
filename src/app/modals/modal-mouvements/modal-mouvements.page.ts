import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-mouvements',
  templateUrl: './modal-mouvements.page.html',
  styleUrls: ['./modal-mouvements.page.scss'],
})
export class ModalMouvementsPage implements OnInit {
  @Input() association_id:number;
  constructor(private manageDataService:ManageDataService,private modalCtrl:ModalController) { }

  ngOnInit() {
    this.manageDataService.getMouvementsAssociation(this.association_id).toPromise().then(
      (data)=>{
        this.Mouvements = data
      }
    )
  }
  public Mouvements:any = null; 
  public storage = environment.storage;

  confirm(){
    return this.modalCtrl.dismiss(null, 'confirm');
  }
}
