import { Component, Input, OnInit } from '@angular/core';
import { NativeGeocoder, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { ActionSheetController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
@Component({
  selector: 'app-modal-edit-dons',
  templateUrl: './modal-edit-dons.page.html',
  styleUrls: ['./modal-edit-dons.page.scss'],
})
export class ModalEditDonsPage implements OnInit {
  @Input() don ;
  constructor(private actionSheetController: ActionSheetController,private toast:ToastController,
    private nativeGeocoder:NativeGeocoder,private loadingController: LoadingController,
    private manageDataService:ManageDataService,private modalController:ModalController) { }

  ngOnInit() {
     this.getCoordinate();
    this.myAdress = this.don.adresse;
    this.selectedDisponibility =this.don.disponibilite;
    this.selectedState = this.don.etat;
    this.selectedTitle = this.don.titre;
    this.selectedDescription = this.don.description;
    this.selectedCategory = this.don.category;
    this.selectedLatitude = this.don.latitude;
    this.selectedLongitude = this.don.longitude;
  }
  MyGeocoder:NativeGeocoderResult;
  GeocoderOption:any={useLocale: true,maxResults: 5};
  myCoordinate:GeolocationPosition;
  myAdress:string ='';
  selectedDisponibility:string ='';
  selectedState:string ='';
  selectedStateIcon:string='';
  selectedTitle:string='';
  selectedDescription:string='';
  selectedImages:any[] = [];
  selectedLatitude:number = null;
  selectedLongitude:number = null;
  selectedCategory:string = '';
  iscategoriesModalOpen:boolean = false;

  async getCoordinate(){
    this.myCoordinate = await Geolocation.getCurrentPosition();
    Geolocation.watchPosition({
     enableHighAccuracy:true,
     timeout:1000,
     maximumAge:1000,
   },()=>{console.log('watchPosition updated')});
  }
  setCategoriesModalOpen(isopen:boolean){
    this.iscategoriesModalOpen = isopen;
  }
  public async createDonation(){
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: `modification ${this.don.titre}`,
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
   
    this.manageDataService.updateDon(this.don.id,donation).toPromise()
    .then(async data=>{
      loading.dismiss();
      const toast = this.toast.create({
        message:`supression de ${this.don.titre} reussie`,
        icon: 'information-circle',
        duration:1000,
        color:"success"
      });
      (await (toast)).present();  
      setTimeout(()=>{
          return this.modalController.dismiss(null, 'confirm');
      },1000)
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
  async locationSheet(){
    const actionsheet = await this.actionSheetController.create({
      buttons:[
      {
        text:'Ma position',
        handler:()=>{
          this.selectedLongitude = this.myCoordinate.coords.longitude;
          this.selectedLatitude = this.myCoordinate.coords.latitude;
          this.nativeGeocoder.reverseGeocode(this.selectedLatitude, this.selectedLongitude,this.GeocoderOption).then(
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
