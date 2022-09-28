import { Component, OnInit } from '@angular/core';
import { NativeGeocoderResult } from '@ionic-native/native-geocoder';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { NavController, ActionSheetController, LoadingController, ToastController } from '@ionic/angular';
import { CreationService } from 'src/app/services/creation/creation.service';
import { MediasService } from 'src/app/services/medias/medias.service';
import { PhotoService } from 'src/app/services/photo/photo.service';
import { Geolocation } from '@capacitor/geolocation';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';

@Component({
  selector: 'app-creation-besoins',
  templateUrl: './creation-besoins.page.html',
  styleUrls: ['./creation-besoins.page.scss'],
})
export class CreationBesoinsPage implements OnInit {

  constructor(private creationService:CreationService,public manageDataService:ManageDataService,
    private navCtrl:NavController,private actionSheetController:ActionSheetController,private route:ActivatedRoute,
    private loadingController:LoadingController, private toast:ToastController,private router:Router) { }
  
  async ngOnInit() {
    this.association_id = this.route.snapshot.params.id_association;
    console.log(this.association_id);
    this.manageDataService.getOneAssociation(this.association_id).toPromise().then((data)=>{
      this.Association = data
    })
  }
  /*-----------------------------VARIABLES------------------------------------------------*/
  public Association:any=null;
  public association_id:number=null;
  public selectedStateIcon:string='';
  public selectedTitle:string='';
  public selectedDescription:string='';
  public selectedImages:any[] = [];
  public selectedCategory:string = '';
  public selectedQuantity:number =0;
  public iscategoriesModalOpen:boolean = false;
  setCategoriesModalOpen(isopen:boolean){
    this.iscategoriesModalOpen = isopen;
  }
  /**--------------------------------FUNCTIONS--------------------------------------------*/
  public async createBesoin(){
    const loading = await this.loadingController.create({
      spinner: 'lines-small',
      message: 'Patientez....',
      translucent: true,
      cssClass: 'custom-class custom-loading',
    });
    await loading.present();
    const besoin = {
      association_id:this.association_id,
      contenu:this.selectedDescription,
      title:this.selectedTitle,
      category:this.selectedCategory,
      attente:1,
      resolu:0,
      quantite:this.selectedQuantity,
      quantite_actuelle:0,
    }
    this.creationService.createBesoin(besoin).toPromise()
    .then(async data=>{
      loading.dismiss();
      this.router.navigateByUrl('/menu/associations').then(()=>{
       this.ngOnInit()
      })
      const toast = this.toast.create({
        message:'besoin publie',
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
    && this.selectedCategory!=''?res=true:null;
    return res;
  }
  public navBack(){
    this.navCtrl.back();
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
