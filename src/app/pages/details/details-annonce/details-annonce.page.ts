import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import TimeAgo from 'javascript-time-ago';
import fr from 'javascript-time-ago/locale/fr'
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-details-annonce',
  templateUrl: './details-annonce.page.html',
  styleUrls: ['./details-annonce.page.scss'],
})
export class DetailsAnnoncePage implements OnInit {
  constructor(private navCtrl: NavController,private route:ActivatedRoute,
    private manageDataService:ManageDataService){}
  ngOnInit() {
    TimeAgo.addDefaultLocale(fr);
    this.id = this.route.snapshot.params['id'];
    this.AnnonceInfo()
    console.log(this.id)
    const tabBar = document.getElementById('app-tab-bar');
  if (tabBar !== null) {
    tabBar.style.display = 'none';
  }
  }

  /*-----------------------VARIABLES------------------*/
  public slideOpts = {
    initialSlide: 0,
    speed: 1000,
    autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          stopOnLastSlide: false
    }
  }
  public storage = environment.storage;
  public elapsedTime:any;
  public id:number=null;
  public Annonce:any=null;
  /*-----------------------FUNCTIONS------------------*/
  public timeAgo(created_at:any):string{
    const timeAgo = new TimeAgo('fr-EU');
    const elapsedTime = timeAgo.format(new Date(Date.parse(created_at)-60*1000));
    return elapsedTime
  }
  public AnnonceInfo(){
    this.manageDataService.getOneAnnonce(this.IdRoute).toPromise().then(
      data=>{
        this.Annonce = data;
        TimeAgo.addDefaultLocale(fr);
        const timeAgo = new TimeAgo('fr-EU');
        this.elapsedTime = timeAgo.format(new Date(Date.parse(data.created_at)));
        
      }
    )
  }
  get IdRoute():number{
    return this.id
  }
  navBack(){
    this.navCtrl.back();
  }

}
