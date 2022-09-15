import { Component, OnInit } from '@angular/core';
import { NativeGeocoderResult } from '@ionic-native/native-geocoder';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { NavController, ActionSheetController, LoadingController, ToastController } from '@ionic/angular';
import { CreationService } from 'src/app/services/creation/creation.service';
import { MediasService } from 'src/app/services/medias/medias.service';
import { PhotoService } from 'src/app/services/photo/photo.service';
import { Geolocation } from '@capacitor/geolocation';
import { Router } from '@angular/router';
@Component({
  selector: 'app-creation-demandes',
  templateUrl: './creation-demandes.page.html',
  styleUrls: ['./creation-demandes.page.scss'],
})
export class CreationDemandesPage implements OnInit {

  constructor(private creationService:CreationService,private mediaService:MediasService,
    private navCtrl:NavController,private actionSheetController:ActionSheetController,
    private photoService:PhotoService,private nativGeocoder:NativeGeocoder,
    private loadingController:LoadingController, private toast:ToastController,private router:Router) { }
  
  async ngOnInit() {
    await Geolocation.watchPosition({
      enableHighAccuracy:true,
      timeout:3000,
      maximumAge:1000,
    },()=>{console.log('watchPosition updated')});
    const mycoordinate = await Geolocation.getCurrentPosition();
    this.myCoordinate = mycoordinate;
  }
  /*-----------------------------VARIABLES------------------------------------------------*/
  MyGeocoder:NativeGeocoderResult;
  GeocoderOption:any={useLocale: true,maxResults: 5};
  myCoordinate:GeolocationPosition;
  myAdress:string ="";
  selectedStateIcon:string='';
  selectedTitle:string='';
  selectedDescription:string='';
  selectedImages:any[] = [];
  selectedLatitude:number = 7;
  selectedLongitude:number = 11;
  selectedCategory:string = '';
  //Modals
  iscategoriesModalOpen:boolean = false;
  setCategoriesModalOpen(isopen:boolean){
    this.iscategoriesModalOpen = isopen;
  }
  /**--------------------------------FUNCTIONS--------------------------------------------*/
  public async createDonation(){
    const loading = await this.loadingController.create({
      spinner: 'lines-small',
      message: 'Patientez....',
      translucent: true,
      cssClass: 'custom-class custom-loading',
    });
    await loading.present();
    const uid = JSON.parse(localStorage.getItem('mydata')).id;
    const token = localStorage.getItem('token');
    const demande = {
      donateur_id:uid,
      contenu:this.selectedDescription,
      title:this.selectedTitle,
      category:this.selectedCategory,
      adresse:'cameroun,yaounde',
      longitude:this.selectedLongitude,
      latitude:this.selectedLatitude
    }
    this.creationService.createDemande(demande,token).toPromise()
    .then(async data=>{
      loading.dismiss();
      this.router.navigateByUrl('/menu/demandes').then(()=>{
        window.location.reload();
      })
      const toast = this.toast.create({
        message:'demande publie',
        icon: 'checkmark-done-outline',
        duration:500,
        color:"danger"
      });
      (await (toast)).present(); 
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
  get validationDemande(){
    let res = false;
    this.selectedTitle!=''&&this.selectedDescription!=''
    && this.selectedCategory!='' &&
    this.selectedLongitude!=null && this.selectedLatitude!=null?res=true:null;
    return res;
  }
  public navBack(){
    this.navCtrl.back();
  }
 
  async locationSheet(){
    const actionsheet = await this.actionSheetController.create({
      buttons:[
      {
        text:'Ma position',
        icon:'body-outline',
        handler:()=>{
          this.selectedLongitude = this.myCoordinate.coords.longitude;
          this.selectedLatitude = this.myCoordinate.coords.latitude;
          this.nativGeocoder.reverseGeocode(this.selectedLatitude, this.selectedLongitude,this.GeocoderOption).then(
            (result:NativeGeocoderResult[])=>{
              this.MyGeocoder=result[0];
              this.myAdress = this.MyGeocoder.subLocality+","+this.MyGeocoder.locality+","+this.MyGeocoder.administrativeArea+","+this.MyGeocoder.postalCode+","+this.MyGeocoder.countryName;
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
        icon:'location-outline',
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
        icon:'paw-outline',
        text:'Nourriture pour animaux',
        handler:()=>{
          this.selectedCategory = 'Nourriture pour animaux'
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'paw-outline',
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
        icon:'leaf-outline',
        text:'Machines & equipements jardin',
        handler:()=>{
          this.selectedCategory = 'Machines & equipements jardin'
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'leaf-outline',
        text:'Mobilier jardin',
        handler:()=>{
          this.selectedCategory = 'Mobilier jardin';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'leaf-outline',
        text:'petit outillsage et accessoire jardin',
        handler:()=>{
          this.selectedCategory = 'petit outillsage et accessoire jardin';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'leaf-outline',
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
        icon:'library-outline',
        text:'Livres,films & musiques',
        handler:()=>{
          this.selectedCategory = 'Livres,films & musiques'
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'library-outline',
        text:'jeux & jouets',
        handler:()=>{
          this.selectedCategory = 'jeux & jouets';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'library-outline',
        text:'Jeux videos',
        handler:()=>{
          this.selectedCategory = 'Jeux videos';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'library-outline',
        text:'Materiels & equipements sportifs',
        handler:()=>{
          this.selectedCategory = 'Materiels & equipements sportifs';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'library-outline',
        text:'Autres accessoires sport',
        handler:()=>{
          this.selectedCategory = 'Autres accessoires sport';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'library-outline',
        text:'Papeterie & fourniture de bureau',
        handler:()=>{
          this.selectedCategory = 'Papeterie & fourniture de bureau';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'library-outline',
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
        icon:'laptop-outline',
        text:'Informatique',
        handler:()=>{
          this.selectedCategory = 'Informatique'
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'laptop-outline',
        text:'TV,Hi-Fi,telephonie',
        handler:()=>{
          this.selectedCategory = 'TV,Hi-Fi,telephonie';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'laptop-outline',
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
        icon:'bed-outline',
        text:'Meubles',
        handler:()=>{
          this.selectedCategory = 'Meubles'
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'bed-outline',
        text:'Vaiselles & ustensiles cuisine',
        handler:()=>{
          this.selectedCategory = 'Vaiselles & ustensiles cuisine';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'bed-outline',
        text:'Decoration de la maison',
        handler:()=>{
          this.selectedCategory = 'Decoration de la maison';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'bed-outline',
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
        icon:'logo-reddit',
        text:'Vetements bebe',
        handler:()=>{
          this.selectedCategory = 'Vetements bebe'
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'logo-reddit',
        text:'Jouets pour bebe',
        handler:()=>{
          this.selectedCategory = 'Jouets pour bebe';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'logo-reddit',
        text:'Equipement de puericulture',
        handler:()=>{
          this.selectedCategory = 'Equipement de puericulture';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'logo-reddit',
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
        icon:'build-outline',
        text:'petit electromenager',
        handler:()=>{
          this.selectedCategory = 'petit electromenager'
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'build-outline',
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
        icon:'shirt-outline',
        text:'Vetements',
        handler:()=>{
          this.selectedCategory = 'Vetements';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'shirt-outline',
        text:'Accessoires de mode',
        handler:()=>{
          this.selectedCategory = 'Accessoires de mode';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'shirt-outline',
        text:'Chaussures',
        handler:()=>{
          this.selectedCategory = 'Chaussures';
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'shirt-outline',
        text:"Produits & accessoires d'hygiene",
        handler:()=>{
          this.selectedCategory = "Produits & accessoires d'hygiene";
          this.setCategoriesModalOpen(false);
        }
      },
      {
        icon:'shirt-outline',
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
}
