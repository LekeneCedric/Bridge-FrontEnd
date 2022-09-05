import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-category',
  templateUrl: './modal-category.page.html',
  styleUrls: ['./modal-category.page.scss'],
})
export class ModalCategoryPage implements OnInit{
  @Input() selectedCategory:string[];
  ngOnInit(): void {
    console.log('selected category')
      console.log(this.selectedCategory)
  }
  

  constructor(private modalCtrl:ModalController,private actionSheetController:ActionSheetController) { }
  cancel(){
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  confirm(){
    console.log(this.selectedCategory)
    return this.modalCtrl.dismiss(this.selectedCategory, 'confirm');
  }
  async monde_animaux_Sheet(){
    const actionsheet = await this.actionSheetController.create({
      buttons:[
        {
          icon:'close-circle-outline',
          text:'Annuler',
          role:'destructive'
        },
      {
        cssClass:this.selectedCategory.indexOf('Nourriture pour animaux')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Nourriture pour animaux')!=-1?'checkmark-circle-outline':'shirt-outline',
        text:'Nourriture pour animaux',
        handler:()=>{
          this.selectedCategory.unshift('Nourriture pour animaux')
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('Accessoires pour animaux')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Accessoires pour animaux')!=-1?'checkmark-circle-outline':'shirt-outline',
        text:'Accessoires pour animaux',
        handler:()=>{
          this.selectedCategory.unshift('Accessoires pour animaux');
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
          icon:'close-circle-outline',
          text:'Annuler',
          role:'destructive'
        },
      {
        cssClass:this.selectedCategory.indexOf('Machies & equipements jardin')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Machies & equipements jardin')!=-1?'checkmark-circle-outline':'leaf-outline',
        text:'Machies & equipements jardin',
        handler:()=>{
          this.selectedCategory.unshift('Machies & equipements jardin')
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('Mobilier jardin')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Mobilier jardin')!=-1?'checkmark-circle-outline':'leaf-outline',
        text:'Mobilier jardin',
        handler:()=>{
          this.selectedCategory.unshift('Mobilier jardin');
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('petit outillsage et accessoire jardin')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('petit outillsage et accessoire jardin')!=-1?'checkmark-circle-outline':'leaf-outline',
        text:'petit outillsage et accessoire jardin',
        handler:()=>{
          this.selectedCategory.unshift('petit outillsage et accessoire jardin');
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('Plantes & jardin')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Plantes & jardin')!=-1?'checkmark-circle-outline':'leaf-outline',
        text:'Plantes & jardin',
        handler:()=>{
          this.selectedCategory.unshift('Plantes & jardin');
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
          icon:'close-circle-outline',
          text:'Annuler',
          role:'destructive'
        },
      {
        cssClass:this.selectedCategory.indexOf('Livres,films & musiques')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Livres,films & musiques')!=-1?'checkmark-circle-outline':'bicycle-outline',
        text:'Livres,films & musiques',
        handler:()=>{
          this.selectedCategory.unshift('Livres,films & musiques')
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('jeux & jouets')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('jeux & jouets')!=-1?'checkmark-circle-outline':'bicycle-outline',
        text:'jeux & jouets',
        handler:()=>{
          this.selectedCategory.unshift('jeux & jouets');
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('Jeux videos')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Jeux videos')!=-1?'checkmark-circle-outline':'bicycle-outline',
        text:'Jeux videos',
        handler:()=>{
          this.selectedCategory.unshift('Jeux videos');
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('Materiels & equipements sportifs')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Materiels & equipements sportifs')!=-1?'checkmark-circle-outline':'bicycle-outline',
        text:'Materiels & equipements sportifs',
        handler:()=>{
          this.selectedCategory.unshift('Materiels & equipements sportifs');
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('Autres accessoires sport')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Autres accessoires sport')!=-1?'checkmark-circle-outline':'bicycle-outline',
        text:'Autres accessoires sport',
        handler:()=>{
          this.selectedCategory.unshift('Autres accessoires sport');
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('Papeterie & fourniture de bureau')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Papeterie & fourniture de bureau')!=-1?'checkmark-circle-outline':'bicycle-outline',
        text:'Papeterie & fourniture de bureau',
        handler:()=>{
          this.selectedCategory.unshift('Papeterie & fourniture de bureau');
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('Loisirs creatifs')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Loisirs creatifs')!=-1?'checkmark-circle-outline':'bicycle-outline',
        text:'Loisirs creatifs',
        handler:()=>{
          this.selectedCategory.unshift('Loisirs creatifs');
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
          icon:'close-circle-outline',
          text:'Annuler',
          role:'destructive'
        },
      {
        cssClass:this.selectedCategory.indexOf('Informatique')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Informatique')!=-1?'checkmark-circle-outline':'laptop-outline',
        text:'Informatique',
        handler:()=>{
          this.selectedCategory .unshift('Informatique')
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('TV,Hi-Fi,telephonie')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('TV,Hi-Fi,telephonie')!=-1?'checkmark-circle-outline':'laptop-outline',
        text:'TV,Hi-Fi,telephonie',
        handler:()=>{
          this.selectedCategory .unshift('TV,Hi-Fi,telephonie');
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('cables,coques & accesoires')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('cables,coques & accesoires')!=-1?'checkmark-circle-outline':'laptop-outline',
        text:'cables,coques & accesoires',
        handler:()=>{
          this.selectedCategory .unshift('cables,coques & accesoires');
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
          icon:'close-circle-outline',
          text:'Annuler',
          role:'destructive'
        },
      {
        cssClass:this.selectedCategory.indexOf('Meubles')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Meubles')!=-1?'checkmark-circle-outline':'bed-outline',
        text:'Meubles',
        handler:()=>{
          this.selectedCategory .unshift('Meubles')
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('Vaiselles & ustensiles cuisine')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Vaiselles & ustensiles cuisine')!=-1?'checkmark-circle-outline':'bed-outline',
        text:'Vaiselles & ustensiles cuisine',
        handler:()=>{
          this.selectedCategory .unshift('Vaiselles & ustensiles cuisine');
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('Decoration de la maison')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Decoration de la maison')!=-1?'checkmark-circle-outline':'bed-outline',
        text:'Decoration de la maison',
        handler:()=>{
          this.selectedCategory .unshift('Decoration de la maison');
          
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('Entretien de la maison')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Entretien de la maison')!=-1?'checkmark-circle-outline':'bed-outline',
        text:'Entretien de la maison',
        handler:()=>{
          this.selectedCategory .unshift('Entretien de la maison');
          
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
          icon:'close-circle-outline',
          text:'Annuler',
          role:'destructive'
        },
      {
        cssClass:this.selectedCategory.indexOf('Vetements bebe')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Vetements bebe')!=-1?'checkmark-circle-outline':'logo-reddit',
        text:'Vetements bebe',
        handler:()=>{
          this.selectedCategory.unshift('Vetements bebe')
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('Jouets pour bebe')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Jouets pour bebe')!=-1?'checkmark-circle-outline':'logo-reddit',
        text:'Jouets pour bebe',
        handler:()=>{
          this.selectedCategory.unshift('Jouets pour bebe');
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('Equipement de puericulture')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Equipement de puericulture')!=-1?'checkmark-circle-outline':'logo-reddit',
        text:'Equipement de puericulture',
        handler:()=>{
          this.selectedCategory.unshift('Equipement de puericulture');
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('Petits accessoires & consommables')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Petits accessoires & consommables')!=-1?'checkmark-circle-outline':'logo-reddit',
        text:'Petits accessoires & consommables',
        handler:()=>{
          this.selectedCategory.unshift('Petits accessoires & consommables');
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
          icon:'close-circle-outline',
          text:'Annuler',
          role:'destructive'
        },
        {
        cssClass:this.selectedCategory.indexOf('petit electromenager')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('petit electromenager')!=-1?'checkmark-circle-outline':'build-outline',  
        text:'petit electromenager',
        handler:()=>{
          this.selectedCategory.unshift('petit electromenager')
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('gros electromenager')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('gros electromenager')!=-1?'checkmark-circle-outline':'build-outline',
        text:'gros electromenager',
        handler:()=>{
          this.selectedCategory.unshift('gros electromenager');
        }
      }]
    });
    await actionsheet.present();
  }
  async modebeautySheet(){
    const actionsheet = await this.actionSheetController.create({
      animated:true,
      buttons:[
      {
        icon:'close-circle-outline',
        text:'Annuler',
        role:'destructive'
      },
      {
        cssClass:this.selectedCategory.indexOf('Accessoires de mode')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Accessoires de mode')!=-1?'checkmark-circle-outline':'shirt-outline',
        text:'Accessoires de mode',
        handler:()=>{
          this.selectedCategory.unshift('Accessoires de mode');
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('Vetements')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Vetements')!=-1?'checkmark-circle-outline':'shirt-outline',
        text:'Vetements',
        handler:()=>{
          this.selectedCategory.unshift('Vetements');
        }
      },
      {
        cssClass:this.selectedCategory.indexOf('Chaussures')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Chaussures')!=-1?'checkmark-circle-outline':'shirt-outline',
        text:'Chaussures',
        handler:()=>{
          this.selectedCategory.unshift( 'Chaussures');
        }
      },
      {
        cssClass:this.selectedCategory.indexOf("Produits & accessoires d'hygiene")!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf("Produits & accessoires d'hygiene")!=-1?'checkmark-circle-outline':'shirt-outline',
        text:"Produits & accessoires d'hygiene",
        handler:()=>{
          this.selectedCategory.unshift( "Produits & accessoires d'hygiene");
        }
      },
      {
        
        cssClass:this.selectedCategory.indexOf('Maquillage')!=-1?'selected':'noselected',
        icon:this.selectedCategory.indexOf('Maquillage')!=-1?'checkmark-circle-outline':'shirt-outline',
        text:'Maquillage',
        handler:()=>{
          this.selectedCategory.unshift('Maquillage');
        }
      }
    
    ]
    });
    await actionsheet.present();
  }

}
