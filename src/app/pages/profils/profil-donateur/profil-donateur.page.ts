import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profil-donateur',
  templateUrl: './profil-donateur.page.html',
  styleUrls: ['./profil-donateur.page.scss'],
})
export class ProfilDonateurPage implements OnInit {

  constructor(private navCtrl:NavController,private route:ActivatedRoute,
    private manageDataService:ManageDataService) { }

  ngOnInit() {
    this.user_id = this.route.snapshot.params.id;
    this.manageDataService.getDonateur(this.user_id).toPromise().then(
      data=>{
        console.log(data)
        this.userInfo = data;
      }
    ).catch(err=>{
      console.log(err);
    })
  }
  /*------------------------------VARIABLES---------------------*/
  public selectedSegment='dons';
  public user_id : number;
  public userInfo=null;
  public storage = environment.storage;
  /*------------------------------FUNCTIONS---------------------*/
  image(don:any):any{
    let url = '';
    don.media.length>1?url= `${this.storage+don.media[0].filePath.toString()}`: url='../../../../../../assets/images/empty.webp'
   
    return `url(${url})`;
  }
  public segmentChanged(event:any){
    this.selectedSegment = event.target.value; 
   }
  navBack(){
    this.navCtrl.back();
  }
}
