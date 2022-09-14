import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-creation-association',
  templateUrl: './creation-association.page.html',
  styleUrls: ['./creation-association.page.scss'],
})
export class CreationAssociationPage implements OnInit {

  constructor(private route:Router,private router:NavController,private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any>('assets/country_dial_info.json').toPromise().then(
      res=>{
          this.pays=res;
          this.pays_temp = this.pays;
          console.log(this.pays)
          
      }
    ).finally(()=>{
     this.http.get<any>('assets/country_city.json').toPromise().then(
      res=>{
          this.ville = res;
          console.log(this.ville)
        
      }
     )
    })
  }

  navBack(){
    this.router.back();
  }
  /*--------------------------_VARIABLES------------------------ */
  pays :any[] = [];
  pays_temp:any[] = [];
  ville:any[]=[];
  ville_temp:any[] = [];
  associationName:string='';
  associationCreatorName:string='';
  contactAssociation:string='';
  codeContactAssociation;
  paysAssociation:string='';
  villeAssociation:string='';

  /*--------------------------FUCNTIONS--------------------------*/  
  filterPays(event:any) {
    this.pays = this.pays_temp;
    let keyword =event.target.value
    if (!keyword) { return false; }
    this.pays = this.pays.filter((value)=>{
      return value.name === keyword
    })
    this.codeContactAssociation = this.pays[0].dial_code;
    this.filterVille(keyword)
 }
 filterVille(country:string){
  this.ville_temp=this.ville[`${country}`];
  console.log(this.ville_temp)
 }
}
