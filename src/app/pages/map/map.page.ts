import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { NavController, ToastController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(private manageDataService: ManageDataService,
    private route:ActivatedRoute,private router:NavController,
    private toast:ToastController,) { }
  don:Marker={
    coordinate:{lat:0, lng:0},title:'',snippet:''
  };
  category:string;
  id_don:number;
  map:any;
  apiKey:string;
  mapRef:any;
  mycoordinates:any;
  navBack(){
    this.router.back();
  }

  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      this.ngOnInit();
    }, 100);
  }
  async loadPosition(){
    this.mycoordinates = await Geolocation.getCurrentPosition();
  }
  ngOnInit() {
  this.category = this.route.snapshot.params.category;
  this.apiKey = environment.map;
  this.mapRef = document.getElementById('map');
  this.loadPosition();
  this.id_don = this.route.snapshot.params.id;
  this.manageDataService.getOneDon(this.id_don).toPromise().then(
    data=>{
      this.don = {iconUrl:'assets/icon/giftbox.png', coordinate:{lat:Number(data.latitude), lng:Number(data.longitude)}}
    }
  ).catch((err)=>{console.log(err.message)}).finally(
    ()=>{
      this.createMap();
    }
  )
 
  }
  async createMap(){
    this.map = await GoogleMap.create({
      id: 'my-map',
      apiKey:this.apiKey,
      element:this.mapRef,
      config:{
        width: 100,
        height:100,
        x:0,
        y:0,
        center:{
          lat:this.don.coordinate.lat,
          lng:this.don.coordinate.lng
        },zoom:10
      }     
    }).then().catch(async err=>{
      const toast = this.toast.create({
        icon:'information-circle',
        message:`Erreur ,Verifiez votre connexion internet`,
        duration:1000,
        color:"danger"
      });
      (await (toast)).present();
      this.router.back();
    });
    this.addMarker();
   }
   async addMarker() {
    const marker:Marker = this.don;
    await this.map.addMarker({coordinate:{lat:this.mycoordinates.coords.latitude, lng:this.mycoordinates.coords.longitude},iconUrl:'assets/icon/avatar.png'})
    await this.map.addMarker(marker);
  }

}
