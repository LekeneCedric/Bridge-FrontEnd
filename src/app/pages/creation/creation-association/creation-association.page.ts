import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { NativeGeocoder, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { ActionSheetController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { CreationService } from 'src/app/services/creation/creation.service';
import { MediasService } from 'src/app/services/medias/medias.service';
import { Geolocation } from '@capacitor/geolocation';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';

@Component({
  selector: 'app-creation-association',
  templateUrl: './creation-association.page.html',
  styleUrls: ['./creation-association.page.scss'],
})
export class CreationAssociationPage implements OnInit {

  constructor(private route:Router,private router:NavController,private http:HttpClient,
    private actionSheetController:ActionSheetController,private nativGeocoder:NativeGeocoder,
    private toast:ToastController,private fb:FormBuilder, 
    private createService:CreationService,private mediaService:MediasService,
    private loadingController:LoadingController,private imagePicker:ImagePicker,private manageDataService:ManageDataService) { }

 ngOnInit() {
    this.credential = this.fb.group({
      name:['',[Validators.required, Validators.minLength(7)]],
      type:['',[Validators.required]],
      category:['',[Validators.required]],
      contact:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{9}$")]],
      adresse:['',[Validators.required]],
      password:['',[Validators.required]],
      password_confirmation:['',[Validators.required]],
      nom_responsable:['',[Validators.required, Validators.minLength(7)]],
      description:['',[Validators.required, Validators.minLength(50)]],
    })
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
    this.geolocation();
  }
  async geolocation(){
    await Geolocation.watchPosition({
      enableHighAccuracy:true,
      timeout:1000,
      maximumAge:1000,
    },()=>{console.log('watchPosition updated')});
       this.myCoordinate = await Geolocation.getCurrentPosition();
  }
  navBack(){
    this.router.back();
  }
  /*--------------------------_VARIABLES------------------------ */
  credential:FormGroup;
  MyGeocoder:NativeGeocoderResult;
  GeocoderOption:any={useLocale: true,maxResults: 5};
  myCoordinate:GeolocationPosition;
  typesAssociation:string[]=['Association déclarée','Association agréée','Association reconnue d\’utilité publique','Association culturelle','Association etrangere'];
  categoriesAssociation:string[]=['culture/Arts','Sports','Action sociale','Loisirs','Humanitaire','sante','Education','Environnement','Autres']
  pays :any[] = [];
  pays_temp:any[] = [];
  ville:any[]=[];
  ville_temp:any[] = [];
  typeAssociation:string='';
  categoryAssociation:string='';
  associationName:string='';//name
  associationCreatorName:string='';//nom_responsable
  contactAssociation:string='';//contact
  codeContactAssociation:string='';//codeContact
  paysAssociation:string='';//pays
  villeAssociation:string='';//ville
  adresseAssociation:string='';//adresse
  numeroContribuable:string='';//numeroContribuable
  longitudeAssociation:number=11;//longitude
  latitudeAssociation:number=7;//latitude
  password_input_type:string = 'password';
  password_confirm_input_type:string = 'password';
  

  /*--------------------------FUCNTIONS--------------------------*/  

  public async createAssociation(){
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'creation dons....',
      translucent: true,
      cssClass: 'custom-class custom-loading',
    });
    await loading.present();
    const data = {
      name:this.name.value,
      type:this.type.value,
      category:this.category.value,
      pays:this.paysAssociation,
      ville:this.villeAssociation,
      contact:this.codeContactAssociation+this.contact.value,
      adresse:'cameroun,yaounde,cite-verte',
      password:this.password.value,
      password_confirmation:this.password_confirmation.value,
      nom_responsable:this.nom_responsable.value,
      longitude:this.longitudeAssociation,
      latitude:this.latitudeAssociation,
      description:this.description.value
    }
    this.createService.createAssociation(data,localStorage.getItem('token') as string).toPromise().then(
      data=>{
        console.log(data)
        let id = JSON.parse(localStorage.getItem('mydata')).id;
        this.manageDataService.becameAssociationMember(id,data.Association.id).toPromise().then(
          dat=>{
            console.log(dat)
            this.manageDataService.addAssociationMember(id,data.Association.id).toPromise().then(
              data=>{console.log(data)}
            );
          }
        )
       
       this.upload_image(data,loading) 
      }
    ).catch(
      async err=>{
        loading.dismiss();
        //on affiche un message de success
        const toast = this.toast.create({
          message:`${err.message}`,
          icon: 'information-circle',
          duration:1000,
          color:"danger"
        });
        (await (toast)).present();  
      }
    );
  }
  public upload_image(data:any,loading){
    //creation don 
    const token = localStorage.getItem('token');
  
  let fd = {
    association_id:data.Association.id,
    files:this.selectedImages
  }
    this.mediaService.uploadImageAssociation(token,fd).then(async data=>{
      setTimeout(async ()=>{
        loading.dismiss();
        this.navBack()
        //on affiche un message de success
        const toast = this.toast.create({
          message:`don creer avec success`,
          icon: 'information-circle',
          duration:1000,
          color:"success"
        });
        (await (toast)).present();  
      })
    })
    .catch(async err=>{
      loading.dismiss();
    //on affiche un message de success
    const toast = this.toast.create({
      message:`${err.message}`,
      icon: 'information-circle',
      duration:1000,
      color:"danger"
    });
    (await (toast)).present();  
    })
  }
  public removeOnImagesList(i:number){
    this.selectedImages.splice(i, 1)
   }
  selectedImages:any[] = [];
public async getPicture(){
  const image = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source:CameraSource.Camera,
    quality:100
  });
  if(image){
    console.log(image)
    this.saveImage(image)
  }
  }
public async saveImage(image:any){
  const base64data = await this.readAsBase64(image);
  console.log(base64data)
  const filename = new Date().getTime()+'.jpeg';
  const img = {
    path:filename,
    data:base64data
  }
  setTimeout(() => {
    this.selectedImages.unshift(img)},500)
  }
  public async readAsBase64(photo:Photo){
      const res = await fetch(photo.webPath);
      const blob = await res.blob();
      return await this.convertBlobToBase64(blob) as string;
  }
  public convertBlobToBase64 = (blob:Blob)=>new Promise((resolve, reject)=>{
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {resolve(reader.result)};
    reader.readAsDataURL(blob);
  })
 
  get name(){
    return this.credential.get('name');
  }
  get type(){return this.credential.get('type');};
  get category(){return this.credential.get('category');};
  get contact(){return this.credential.get('contact');};
  get adresse(){return this.credential.get('adresse');};
  get nom_responsable(){return this.credential.get('nom_responsable');};
  get password(){return this.credential.get('password');};
  get password_confirmation(){return this.credential.get('password_confirmation');};
  get description(){return this.credential.get('description');};
  public test(){
    const data = {
      name:this.name.value,
      type:this.type.value,
      category:this.category.value,
      pays:this.paysAssociation,
      ville:this.villeAssociation,
      contact:this.codeContactAssociation+this.contact.value,
      adresse:this.adresse.value,
      password:this.password.value,
      passwordConfirmation:this.password_confirmation.value,
      nom_responsable:this.nom_responsable.value,
      longitude:this.longitudeAssociation,
      latitude:this.latitudeAssociation
    }
    console.log(data)
  }

 public  passwordMatching():boolean{
    const password = this.password.value;
    const passwordConf = this.password_confirmation.value;
    return true ? password == passwordConf : false;
    }
  public changePassInputType()
  {
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
