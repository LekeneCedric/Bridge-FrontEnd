import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MediasService } from 'src/app/services/medias/medias.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage implements OnInit {

  constructor(private route:ActivatedRoute,private media:MediasService,private navCtrl:NavController) { }

  ngOnInit() {
    this.media_id = this.route.snapshot.params.id;
    this.media.getOneMedia(this.media_id).toPromise().then(
      data=>{
        this.currentMedia = data;
      }
    )
    console.log(this.media_id);
  }
  public media_id:number = null;
  public currentMedia :any=null;
  public storage:string = environment.storage;

  public navBack(){
    this.navCtrl.back();
  }
}
