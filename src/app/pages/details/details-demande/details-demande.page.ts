import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IDemande } from 'src/app/models/demande.model';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import TimeAgo from 'javascript-time-ago'
import fr from 'javascript-time-ago/locale/fr'
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-details-demande',
  templateUrl: './details-demande.page.html',
  styleUrls: ['./details-demande.page.scss'],
})
export class DetailsDemandePage implements OnInit {

  
  constructor(private navCtrl:NavController,private route:ActivatedRoute,private manageDataService:ManageDataService) { }

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem('mydata')).id as number;
    this.hideTabBar();
    this.detail_id = this.route.snapshot.params.id;
    this.manageDataService.getOneDemande(this.detail_id).toPromise().then(
      data=>{
        this.demande = data;
        TimeAgo.addDefaultLocale(fr);
        const timeAgo = new TimeAgo('fr-EU');
        this.elapsedTime = timeAgo.format(new Date(Date.parse(data.created_at)))
      }
    ).catch(error=>{
      console.log(error)
    })
  }

  /*---------------------------VARIABLES------------------------------*/
  private id:number = null;
  public detail_id:number;
  public demande:IDemande = null;
  public elapsedTime:any;
  public storage = environment.storage;
  /*--------------------------FUNCTIONS-------------------------------*/
  get myid():number {
    return this.id
  }
  private hideTabBar(){
    const tabBar = document.getElementById('app-tab-bar');
    if (tabBar !== null) {
      tabBar.style.display = 'none';
    }
  }
  navBack(){
    this.navCtrl.back();
  }

}
