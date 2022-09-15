import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeGeocoder, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { ActionSheetController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-creation-association',
  templateUrl: './creation-association.page.html',
  styleUrls: ['./creation-association.page.scss'],
})
export class CreationAssociationPage implements OnInit {

  constructor(private route:Router,private router:NavController,private http:HttpClient,
    private actionSheetController:ActionSheetController,private nativGeocoder:NativeGeocoder,
    private toast:ToastController) { }

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
  MyGeocoder:NativeGeocoderResult;
  GeocoderOption:any={useLocale: true,maxResults: 5};
  myCoordinate:GeolocationPosition;
  pays :any[] = [];
  pays_temp:any[] = [];
  ville:any[]=[];
  ville_temp:any[] = [];
  associationName:string='';//name
  associationCreatorName:string='';//nom_responsable
  contactAssociation:string='';//contact
  codeContactAssociation:string='';//codeContact
  paysAssociation:string='';//pays
  villeAssociation:string='';//ville
  adresseAssociation:string='';//adresse
  numeroContribuable:string='';//numeroContribuable
  password:string='';//password
  passwordConfirmation:string='';
  longitudeAssociation:number;//longitude
  latitudeAssociation:number;//latitude
  password_input_type:string = 'password';
  password_confirm_input_type:string = 'password';

  /*--------------------------FUCNTIONS--------------------------*/  
  public test(){
    const data = {
      name:this.associationName,
      type:'type',
      category:'category',
      ville:this.villeAssociation,
      contact:this.codeContactAssociation+this.contactAssociation,
      adresse:this.adresseAssociation,
      password:this.password,
      passwordConfirmation:this.passwordConfirmation,
      nom_responsable:this.associationCreatorName,
      longitude:this.longitudeAssociation,
      latitude:this.latitudeAssociation
    }
    console.log(data)
  }
 public  passwordMatching():boolean{
    const password = this.password;
    const passwordConf = this.passwordConfirmation;
    return true ? password == passwordConf : false;
    }
  public changePassInputType(){
    this.password_input_type == 'password'?this.password_input_type='text':this.password_input_type="password"
  }
  public changePassConfirmInputType(){
    this.password_confirm_input_type == 'password'?this.password_confirm_input_type='text':
    this.password_confirm_input_type="password";
  }
  async locationSheet(){
    const actionsheet = await this.actionSheetController.create({
      buttons:[
      {
        text:'Ma position',
        handler:()=>{
          this.longitudeAssociation = this.myCoordinate.coords.longitude;
          this.latitudeAssociation = this.myCoordinate.coords.latitude;
          this.nativGeocoder.reverseGeocode(this.latitudeAssociation, this.longitudeAssociation,this.GeocoderOption).then(
            (result:NativeGeocoderResult[])=>{
              this.MyGeocoder=result[0];
              this.adresseAssociation = this.MyGeocoder.subLocality+"."+this.MyGeocoder.locality+"."+this.MyGeocoder.administrativeArea+"."+this.MyGeocoder.countryName;
              console.log(JSON.stringify(result[0]));
            }
          ).catch(async err=>{
            const toast = this.toast.create({
              message:`${err}`,
              icon: 'information-circle',
              duration:1000,
              color:"danger"
            });
            (await (toast)).present(); 
            console.log('Error in reverse geocode');
          });
        }
      },
      {
        text:'open Map',
        handler:()=>{
          this.longitudeAssociation = null;
          this.latitudeAssociation = null;
        }
      }
    ]
    });
    await actionsheet.present();
  }
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
