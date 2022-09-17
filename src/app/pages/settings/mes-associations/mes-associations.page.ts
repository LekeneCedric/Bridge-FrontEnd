import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mes-associations',
  templateUrl: './mes-associations.page.html',
  styleUrls: ['./mes-associations.page.scss'],
})
export class MesAssociationsPage implements OnInit {

  constructor(private router:Router,private manageDataService:ManageDataService) { }

  ngOnInit() {
    this.myId = JSON.parse(localStorage.getItem('mydata')).id;
    this.manageDataService.getAssociations().toPromise().then(
      data=>{
        this.associations = data;
        console.log(data)
      }
    )
    const tabBar = document.getElementById('app-tab-bar');
      if (tabBar !== null) {
        tabBar.style.display = 'none';
      }
  }

  /*---------------------------VARIABLES-------------------------------*/
  myId:number=null;
  public storage = environment.storage;
  associations:any[]=[];
  /*----------------------------FUNCTIONS-----------------------------*/
  get Id(){
    return this.myId;
  }
  navBack(){
    this.router.navigateByUrl('/menu/settings',{replaceUrl:true});
    const tabBar = document.getElementById('app-tab-bar');
      if (tabBar !== null) {
        tabBar.style.display = 'flex';
      }
  }

}
