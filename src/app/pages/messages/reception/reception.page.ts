import { Component, OnInit } from '@angular/core';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.page.html',
  styleUrls: ['./reception.page.scss'],
})
export class ReceptionPage implements OnInit {

  constructor(private manageDataService: ManageDataService) { }

  ngOnInit() {
    this.myId = JSON.parse(localStorage.getItem('mydata')).id as number;
    this.getSalons()
  }
/*----------------------------------------VARIABLES----------------------------*/
private myId:number=null;
public selectedSegment:string = 'dons';
public salons:any[] = [];
/*----------------------------------------FUNCTIONS----------------------------*/
public get id():number { return this.myId;};
public segmentChanged(event:any)
{
  this.selectedSegment = event.target.value; 
}
 public getSalons()
 {
   this.manageDataService.getSalons(this.id).toPromise().then(
    data=>{
    data.forEach(data=>{
      this.manageDataService.getOneDon(data.id_don).toPromise().then(
        don=>{
          this.salons.push({
             id_don:data.id_don,
             id_donateur:data.id_donateur,
             id_receiver:data.id_receiver,
             id_demande:null,
             data:{
              media:don.media,
              titre:don.titre,
              adresse:don.adresse
             }
          })
        }
      )
      
    });
    console.log(this.salons)
    }
   )
 } 
 
}
