import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';

@Component({
  selector: 'app-modal-association-member',
  templateUrl: './modal-association-member.page.html',
  styleUrls: ['./modal-association-member.page.scss'],
})
export class ModalAssociationMemberPage implements OnInit {

    
  @Input() id_association:number;
  constructor(private manageDataService:ManageDataService,private modalCtrl:ModalController){}

  ngOnInit() {
    this.manageDataService.getAssociationMembersList(this.id_association).toPromise().then(
      (data)=>{
         this.members = data;
         console.log(data)
      }
    )
  }
  /*------------------------------VARIABLES------------------*/
  public search:string='';
  public members : any[]=[];
  /*------------------------------FUNCTIONS------------------*/
  cancel(){
    return this.modalCtrl.dismiss();
   }
}
