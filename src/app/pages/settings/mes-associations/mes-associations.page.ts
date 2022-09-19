import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mes-associations',
  templateUrl: './mes-associations.page.html',
  styleUrls: ['./mes-associations.page.scss'],
})
export class MesAssociationsPage implements OnInit {

  constructor(private router:Router,private manageDataService:ManageDataService,private toast:ToastController) { }

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
  public async iAmMember(){
    const toast = this.toast.create({
      message:`vous etes deja membre de cette association`,
      icon: 'information-circle',
      duration:2000,
      color:"primary"
    });
    (await (toast)).present(); 
  }
  public sendDemand(id_association:number){
    this.manageDataService.becameAssociationMember(this.myId,id_association).toPromise().then(
      async data=>{
        this.ngOnInit();
        const toast = this.toast.create({
          message:`demande envoye`,
          icon: 'information-circle',
          duration:2000,
          color:"success"
        });
        (await (toast)).present(); 
      }
    ).catch(async ()=>{
      this.ngOnInit();
     
    })
  }
  public rejectDemand(id_association:number){
    this.manageDataService.rejectAssociationMember(this.myId,id_association).toPromise().then(
      async data=>{
        this.ngOnInit();
        const toast = this.toast.create({
          message:`demande rejete`,
          icon: 'information-circle',
          duration:2000,
          color:"danger"
        });
        (await (toast)).present(); 
      }
    ).catch(()=>{
      this.ngOnInit()
    })
  }
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
  doRefresh(event){
    setTimeout(()=>{
     this.ngOnInit(); 
     event.target.complete();
    },500)
   }
}
