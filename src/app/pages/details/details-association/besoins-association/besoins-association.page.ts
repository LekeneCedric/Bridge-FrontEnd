import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { environment } from 'src/environments/environment';
import fr from 'javascript-time-ago/locale/fr'
import TimeAgo from 'javascript-time-ago';
@Component({
  selector: 'app-besoins-association',
  templateUrl: './besoins-association.page.html',
  styleUrls: ['./besoins-association.page.scss'],
})
export class BesoinsAssociationPage implements OnInit {

  constructor(private route:ActivatedRoute,private manageDataService:ManageDataService,private navCtl:NavController) { }

  ngOnInit() {
    TimeAgo.addDefaultLocale(fr);
    this.id_association = this.route.snapshot.params.id;
    this.manageDataService.getBesoinsResolusAssociation(this.id_association).toPromise().then(
      data=>{
         data.length>0?this.BesoinsResolus = data : null;
      }
    )
    this.manageDataService.getBesoinsNonResolusAssociation(this.id_association).toPromise().then(
      data=>{
          data.length>0?this.BesoinsNonResolus = data : null;
      }
    )
  }
/*____________________________________VARIABLES______________________________________________*/

  public BesoinsResolus:any[]=[];
  public BesoinsNonResolus:any[]=[];
  private id_association:number=null;
  public selectedSegment='non_resolus';
  public storage:string = environment.storage;

  /*___________________________________FUNCTIONS___________________________________________*/
  
  public timeAgo(created_at:any):string{
    const timeAgo = new TimeAgo('fr-EU');
    const elapsedTime = timeAgo.format(new Date(Date.parse(created_at)-60*1000));
    return elapsedTime
  }
  public navBack(){
    this.navCtl.back();
  }
  public segmentChanged(event:any){
    this.selectedSegment = event.target.value; 
   }
}
