import { Component, OnInit } from '@angular/core';
import { ActionSheetController, LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { CreationService } from 'src/app/services/creation/creation.service';
import { MediasService } from 'src/app/services/medias/medias.service';
import { PhotoService } from 'src/app/services/photo/photo.service';
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import {decode} from "base64-arraybuffer";
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem } from '@capacitor/filesystem';
@Component({
  selector: 'app-creation-dons',
  templateUrl: './creation-dons.page.html',
  styleUrls: ['./creation-dons.page.scss'],
})
export class CreationDonsPage implements OnInit {

  constructor(private creationService:CreationService,private mediaService:MediasService,
    private navCtrl:NavController,private actionSheetController:ActionSheetController,
    private nativGeocoder:NativeGeocoder,private platform:Platform,
    private loadingController:LoadingController,
    private http:HttpClient, private toast:ToastController,private router:Router) { }
  
  async ngOnInit() {
       this.myCoordinate = await Geolocation.getCurrentPosition();
     Geolocation.watchPosition({
      enableHighAccuracy:true,
      timeout:1000,
      maximumAge:1000,
    },()=>{console.log('watchPosition updated')});
  
  }
  /*-----------------------------VARIABLES------------------------------------------------*/
  MyGeocoder:NativeGeocoderResult;
  GeocoderOption:any={useLocale: true,maxResults: 5};
  myCoordinate:GeolocationPosition;
  myAdress:string ="";
  selectedDisponibility:string ='';
  selectedState:string ='';
  selectedStateIcon:string='';
  selectedTitle:string='';
  selectedDescription:string='';
  selectedImages:any[] = [];
  selectedLatitude:number = 11;
  selectedLongitude:number = 7;
  selectedCategory:string = '';
  //Modals
  iscategoriesModalOpen:boolean = false;
  setCategoriesModalOpen(isopen:boolean){
    this.iscategoriesModalOpen = isopen;
  }
  /**--------------------------------FUNCTIONS--------------------------------------------*/
  public removeOnImagesList(i:number){
   this.selectedImages.splice(i, 1)
  }
  public async getPicture(){
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source:CameraSource.Camera,
      quality:100
    });
    if(image){
      this.saveImage(image)
    }
  }
  public async saveImage(image:Photo){
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
  public async createDonation(){
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'creation dons....',
      translucent: true,
      cssClass: 'custom-class custom-loading',
    });
    await loading.present();
    const uid = JSON.parse(localStorage.getItem('mydata')).id;
    const token = localStorage.getItem('token');
    const donation = {
      donateur_id:uid,
      disponibilite:this.selectedDisponibility,
      contenu:this.selectedDescription,
      titre:this.selectedTitle,
      category:this.selectedCategory,
      etat:this.selectedState,
      description:this.selectedDescription,
      longitude:11,
      latitude:3,
      adresse:'this.myAdress'
    }
   
    this.creationService.createDon(donation,token).toPromise()
    .then(data=>{
      this.upload_image(data,loading);
    })
    .catch(
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
    don_id:data.Don.id,
    files:this.selectedImages
  }
    this.mediaService.uploadImageDon(token,fd).then(async data=>{
      setTimeout(async ()=>{
        loading.dismiss();
        this.router.navigateByUrl('/menu/dons')
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
  get validationDonation(){
    let res = false;
    this.selectedImages.length>=1&&this.selectedTitle!=''&&this.selectedDescription!=''
    && this.selectedDisponibility!='' && this.selectedState!='' && this.selectedCategory!=''?res=true:null;
    return res;
  }
  public navBack(){
    this.router.navigateByUrl('/menu/dons',{replaceUrl:true});
  }
  public onFileChange(event){
      console.log(event.target.files[0]);
      this.selectedImages.unshift(event.target.files[0])
  }
  async locationSheet(){
    const actionsheet = await this.actionSheetController.create({
      buttons:[
      {
        text:'Ma position',
        handler:()=>{
          this.selectedLongitude = this.myCoordinate.coords.longitude;
          this.selectedLatitude = this.myCoordinate.coords.latitude;
          this.nativGeocoder.reverseGeocode(this.selectedLatitude, this.selectedLongitude,this.GeocoderOption).then(
            (result:NativeGeocoderResult[])=>{
              this.MyGeocoder=result[0];
              this.myAdress = this.MyGeocoder.subLocality+"."+this.MyGeocoder.locality+"."+this.MyGeocoder.administrativeArea+"."+this.MyGeocoder.countryName;
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
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'open Map',
        handler:()=>{
          this.selectedLongitude = null;
          this.selectedLatitude = null;
          this.setCategoriesModalOpen(false);
        }
      }
    ]
    });
    await actionsheet.present();
  }
  async monde_animaux_Sheet(){
    const actionsheet = await this.actionSheetController.create({
      buttons:[
      {
        text:'Nourriture pour animaux',
        handler:()=>{
          this.selectedCategory = 'Nourriture pour animaux'
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'Accessoires pour animaux',
        handler:()=>{
          this.selectedCategory = 'Accessoires pour animaux';
          this.setCategoriesModalOpen(false);
        }
      }
    ]
    });
    await actionsheet.present();
  }
  async jardin_bricolage_Sheet(){
    const actionsheet = await this.actionSheetController.create({
      buttons:[
      {
        text:'Machies & equipements jardin',
        handler:()=>{
          this.selectedCategory = 'Machies & equipements jardin'
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'Mobilier jardin',
        handler:()=>{
          this.selectedCategory = 'Mobilier jardin';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'petit outillsage et accessoire jardin',
        handler:()=>{
          this.selectedCategory = 'petit outillsage et accessoire jardin';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'Plantes & jardin',
        handler:()=>{
          this.selectedCategory = 'Plantes & jardin';
          this.setCategoriesModalOpen(false);
        }
      }
    ]
    });
    await actionsheet.present();
  }
  async culture_sport_loisir_Sheet(){
    const actionsheet = await this.actionSheetController.create({
      buttons:[
      {
        text:'Livres,films & musiques',
        handler:()=>{
          this.selectedCategory = 'Livres,films & musiques'
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'jeux & jouets',
        handler:()=>{
          this.selectedCategory = 'jeux & jouets';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'Jeux videos',
        handler:()=>{
          this.selectedCategory = 'Jeux videos';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'Materiels & equipements sportifs',
        handler:()=>{
          this.selectedCategory = 'Materiels & equipements sportifs';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'Autres accessoires sport',
        handler:()=>{
          this.selectedCategory = 'Autres accessoires sport';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'Papeterie & fourniture de bureau',
        handler:()=>{
          this.selectedCategory = 'Papeterie & fourniture de bureau';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'Loisirs creatifs',
        handler:()=>{
          this.selectedCategory = 'Loisirs creatifs';
          this.setCategoriesModalOpen(false);
        }
      }
    ]
    });
    await actionsheet.present();
  }
  async electroniqueSheet(){
    const actionsheet = await this.actionSheetController.create({
      buttons:[
      {
        text:'Informatique',
        handler:()=>{
          this.selectedCategory = 'Informatique'
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'TV,Hi-Fi,telephonie',
        handler:()=>{
          this.selectedCategory = 'TV,Hi-Fi,telephonie';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'cables,coques & accesoires',
        handler:()=>{
          this.selectedCategory = 'cables,coques & accesoires';
          this.setCategoriesModalOpen(false);
        }
      }
    ]
    });
    await actionsheet.present();
  }
  async maison_ammeublementSheet(){
    const actionsheet = await this.actionSheetController.create({
      buttons:[
      {
        text:'Meubles',
        handler:()=>{
          this.selectedCategory = 'Meubles'
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'Vaiselles & ustensiles cuisine',
        handler:()=>{
          this.selectedCategory = 'Vaiselles & ustensiles cuisine';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'Decoration de la maison',
        handler:()=>{
          this.selectedCategory = 'Decoration de la maison';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'Entretien de la maison',
        handler:()=>{
          this.selectedCategory = 'Entretien de la maison';
          this.setCategoriesModalOpen(false);
        }
      }
    
    ]
    });
    await actionsheet.present();
  }
  async universbebeSheet(){
    const actionsheet = await this.actionSheetController.create({
      buttons:[
      {
        text:'Vetements bebe',
        handler:()=>{
          this.selectedCategory = 'Vetements bebe'
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'Jouets pour bebe',
        handler:()=>{
          this.selectedCategory = 'Jouets pour bebe';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'Equipement de puericulture',
        handler:()=>{
          this.selectedCategory = 'Equipement de puericulture';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'Petits accessoires & consommables',
        handler:()=>{
          this.selectedCategory = 'Petits accessoires & consommables';
          this.setCategoriesModalOpen(false);
        }
      }
    
    ]
    });
    await actionsheet.present();
  }
  async electromenagerSheet(){
    const actionsheet = await this.actionSheetController.create({
      buttons:[
      {
        text:'petit electromenager',
        handler:()=>{
          this.selectedCategory = 'petit electromenager'
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'gros electromenager',
        handler:()=>{
          this.selectedCategory = 'gros electromenager';
          this.setCategoriesModalOpen(false);
        }
      }]
    });
    await actionsheet.present();
  }
  async modebeautySheet(){
    const actionsheet = await this.actionSheetController.create({
      buttons:[
      {
        text:'Vetements',
        handler:()=>{
          this.selectedCategory = 'Vetements';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'Accessoires de mode',
        handler:()=>{
          this.selectedCategory = 'Accessoires de mode';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'Chaussures',
        handler:()=>{
          this.selectedCategory = 'Chaussures';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:"Produits & accessoires d'hygiene",
        handler:()=>{
          this.selectedCategory = "Produits & accessoires d'hygiene";
          this.setCategoriesModalOpen(false);
        }
      },
      {
        text:'Maquillage',
        handler:()=>{
          this.selectedCategory = 'Maquillage';
          this.setCategoriesModalOpen(false);
        }
      }
    
    ]
    });
    await actionsheet.present();
  }
  async openDisponibiliteSheet(){
    const actionsheet= await this.actionSheetController.create({
      header: 'Disponibilites',
      buttons: [{
        text: 'Cancel',
        role: 'destructive',
        icon: 'close-circle-outline',
        handler:()=>{
            console.log('exit')
        },
      },
    {
      text:'La journee en semaine',
      icon:'sunny-outline',
      handler:()=>{
        this.selectedDisponibility = 'Journee en semaine'
      }
    },
    {
      text:'La journee en soiree',
      icon:'cloudy-night-outline',
      handler:()=>{
        this.selectedDisponibility = 'Journee en soiree'
      }
    },
    {
      text:'Le Week-end',
      icon:'umbrella-outline',
      handler:()=>{
        this.selectedDisponibility = 'Week-end'
      }
    },
    {
      text:'Je suis flexible',
      icon:'help-outline',
      handler:()=>{
        this.selectedDisponibility = 'Flexible'
      }
    }]
    });
    await actionsheet.present();
  }

  async openEtatSheet(){
    const actionsheet= await this.actionSheetController.create({
      header: 'Etat',
      buttons: [{
        text: 'Cancel',
        role: 'destructive',
        icon: 'close-circle-outline',
        handler:()=>{
            console.log('exit')
        },
      },
    {
      text:'Comme neuf',
      icon:'ribbon-outline',
      handler:()=>{
        this.selectedState = 'Neuf'
        this.selectedStateIcon = 'ribbon-outline';
      }
    },
    {
      text:'Bon etat',
      icon:'checkmark-done-circle-outline',
      handler:()=>{
        this.selectedState = 'Bon etat'
        this.selectedStateIcon='checkmark-done-circle-outline'
      }
    },
    {
      text:'Etat moyen',
      icon:'checkmark-circle-outline',
      handler:()=>{
        this.selectedState = 'Etat-moyen'
        this.selectedStateIcon = 'checkmark-circle-outline'
      }
    },
    {
      text:'A bricoler',
      icon:'construct-outline',
      handler:()=>{
        this.selectedState = 'A bricoler',
        this.selectedStateIcon = 'construct-outline'
      }
    }]
    });
    await actionsheet.present();
  }
}
