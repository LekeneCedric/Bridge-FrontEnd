import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { MediasService } from 'src/app/services/medias/medias.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-galery-type',
  templateUrl: './galery-type.page.html',
  styleUrls: ['./galery-type.page.scss'],
})
export class GaleryTypePage implements OnInit {

  constructor(private route:ActivatedRoute,private manageDataService:ManageDataService,
    private mediaService:MediasService,private navCtrl:NavController) { }

  ngOnInit() {
    this.category = this.route.snapshot.params.category;
    this.association_id = this.route.snapshot.params.id;
    this.manageDataService.getGalerieAssociation(this.association_id).toPromise().then(
      (data)=>{
        this.AssociationImages = data;
        console.log(data);
      }
    )
  }
/*----------------------------------VARIABLES------------------------------___*/
public category:string ='';
public association_id:number=null;
public AssociationImages : any=null;
public storage = environment.storage;
/*----------------------------------FUNCTIONS---------------------------------*/
public navBack(){
  this.navCtrl.back();
}
}
