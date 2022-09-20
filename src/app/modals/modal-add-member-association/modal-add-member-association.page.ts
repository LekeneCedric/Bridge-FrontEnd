import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';

@Component({
  selector: 'app-modal-add-member-association',
  templateUrl: './modal-add-member-association.page.html',
  styleUrls: ['./modal-add-member-association.page.scss'],
})
export class ModalAddMemberAssociationPage implements OnInit {

  constructor(private manageDataService:ManageDataService,private route:ActivatedRoute,private toast:ToastController,
    private loadingController:LoadingController,private modalCtrl:ModalController) { }
  @Input() id_association:number;
  ngOnInit() {
    this.getMemberList();
    this.getNonMembersList();
    setTimeout(()=>{
    },2000)
  }

  /*--------------------------------VARIABLES-------------------------------*/
  public members:any[]=[];
  public non_members:any[]=[];
  public search:string = '';
  /*--------------------------------FUNCTIONS-------------------------------*/

  cancel(){
    return this.modalCtrl.dismiss();
   }
  public addMember(id:number){
    this.manageDataService.becameAssociationMember(id,this.id_association).toPromise().then(
      (data)=>{
        this.manageDataService.addAssociationMember(id,this.id_association).toPromise().then(
          async (data)=>{
            const toast = await this.toast.create({
             message:'ajoute aux membres',
             duration:1000,
             icon:'information-circle',
             color:'primary'
            });
            this.ngOnInit();
            await toast.present();
          }
        )
      }
    )
   
  }
  public getMemberList(){
   this.manageDataService.getAssociationMembersList(this.id_association).toPromise().then(
    data=>{
      this.members = data;
      console.log(data);
    }
   )
  }
  public getNonMembersList(){
    this.manageDataService.getNonAssociationMemberList(this.id_association).toPromise().then(
      data=>{
        this.non_members = data;
        console.log(data);
      }
    )
  }

}
