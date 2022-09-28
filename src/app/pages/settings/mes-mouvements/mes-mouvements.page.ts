import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mes-mouvements',
  templateUrl: './mes-mouvements.page.html',
  styleUrls: ['./mes-mouvements.page.scss'],
})
export class MesMouvementsPage implements OnInit {

  constructor(private route:ActivatedRoute,private manageDataService:ManageDataService,private navCtrl:NavController) { }

  ngOnInit() {
    const tabBar = document.getElementById('app-tab-bar');
      if (tabBar !== null) {
        tabBar.style.display = 'none';
      }
   this.getMesMouvements()
  }

/*------------------------------------_VARIABLES------------------------------*/
public MesMouvements:any[]=[];
public storage:string = environment.storage;

/*------------------------------FUNCTIONS------------------------------------*/
public getMesMouvements(){
  this.manageDataService.getMesMouvements().toPromise().then(
    (data)=>{
      this.MesMouvements  = data;
    }
  )
}
public back(){
  this.navCtrl.back();
  const tabBar = document.getElementById('app-tab-bar');
  if (tabBar !== null) {
    tabBar.style.display = 'flex';
  }
  }  
 

}
