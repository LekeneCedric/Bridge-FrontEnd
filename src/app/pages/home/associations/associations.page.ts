import { Component, OnInit } from '@angular/core';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-associations',
  templateUrl: './associations.page.html',
  styleUrls: ['./associations.page.scss'],
})
export class AssociationsPage implements OnInit {

  constructor(private manageDataService: ManageDataService) {
    this.id = JSON.parse(localStorage.getItem('mydata')).id;

    setInterval(()=>{
      const tabBar = document.getElementById('app-tab-bar');
      tabBar.style.display = 'flex';
    },100)
   }

  ngOnInit() {
  this.manageDataService.getAnnonces().toPromise().then(
    data=>{
      this.Annonces = data;
    }
  )
  this.manageDataService.getMouvements().toPromise().then(
    data=>{
      this.Mouvements = data;
    }
  )
   
  }
  /*------------------------------------VARIABLES------------------------------------*/
  public storage = environment.storage;
  public Annonces:any = null;
  public Mouvements:any = null;
  public id :number = null;
  public selectedSegment='annonces';
  testtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  

  /*------------------------------------FUNCTIONS------------------------------------*/
  public segmentChanged(event:any){
    this.selectedSegment = event.target.value; 
   }
}
