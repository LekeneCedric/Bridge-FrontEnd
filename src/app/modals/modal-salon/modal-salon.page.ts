import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';

@Component({
  selector: 'app-modal-salon',
  templateUrl: './modal-salon.page.html',
  styleUrls: ['./modal-salon.page.scss'],
})
export class ModalSalonPage implements OnInit {

  @Input() selectedRoom:any;
  @Input() allRoom:any[];
  public rooms:any[]=[];
  public load:boolean = true;
  public temp_room:any[]=[];
  public search:string ='';
  constructor(private manageDataService:ManageDataService,private modalCtrl:ModalController ) {}

  ngOnInit() {
    
    this.allRoom.forEach(room=>{
      this.manageDataService.getLastMessage(room.id_donateur,room.id_receiver,room.id_don).toPromise().then(
        data=>{
         this.temp_room.push({
          message:data.contenu,
          date:data.created_at
         });
        }
      ).catch(err=>{
        console.log(err);
      });
        })
    

    this.allRoom.forEach(room=>{
      this.manageDataService.getDonateur(room.id_receiver).toPromise().then(
        data=>{
          this.rooms.push({
            id_donateur:room.id_donateur,
            id_receiver:room.id_receiver,
            id_don:room.id_don,
            reic_img:data.media.lenght>0?data.media:'assets/images/user.png',
            reic_name:data.name,
            reic_contact:data.contact
          })
        }
      )
    })

    setTimeout(()=>{
      this.load = false;
    },500)
  }
  cancel(){
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
