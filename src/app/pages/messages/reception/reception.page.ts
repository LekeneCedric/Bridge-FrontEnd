import { Component, OnInit } from '@angular/core';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.page.html',
  styleUrls: ['./reception.page.scss'],
})
export class ReceptionPage implements OnInit {

  constructor(private manageDataService: ManageDataService) { }

  ngOnInit() {
    this.salons = []
    this.myId = JSON.parse(localStorage.getItem('mydata')).id as number;

  }
/*----------------------------------------VARIABLES----------------------------*/
private myId:number=null;
public selectedSegment:string = 'dons';
public salons:any[] = [];
public storage = environment.storage;
/*----------------------------------------FUNCTIONS----------------------------*/
doRefresh(event){
  setTimeout(()=>{
   this.ngOnInit(); 
   event.target.complete();
  },500)
 }
public get id():number { return this.myId;};
public segmentChanged(event:any)
{
  this.selectedSegment = event.target.value; 
}
 
}
