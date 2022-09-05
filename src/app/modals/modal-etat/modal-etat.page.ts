import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-etat',
  templateUrl: './modal-etat.page.html',
  styleUrls: ['./modal-etat.page.scss'],
})
export class ModalEtatPage implements OnInit {
@Input() selectedEtat:string[];
  constructor(private modalCtrl:ModalController,
    public actionSheetController:ActionSheetController) { }

  ngOnInit():void{
    const etats = this.selectedEtat;
    this.selectedState=etats;
  }
  public selectedState:string[]=[];
  cancel(){
   return this.modalCtrl.dismiss();
  }
  confirm(){
   return this.modalCtrl.dismiss(this.selectedState,'confirm');
  }
  public choose_neuf(){
   this.selectedState.includes('Neuf')?this.selectedState=this.selectedState.filter((value)=>{
    return value!='Neuf';
   }):this.selectedState.push('Neuf');
  }
  public choose_bon_etat(){
    this.selectedState.includes('Bon etat')?this.selectedState=this.selectedState.filter((value)=>{
      return value!='Bon etat';
     }):this.selectedState.push('Bon etat');
  }
  public choose_etat_moyen(){
    this.selectedState.includes('Etat-moyen')?this.selectedState=this.selectedState.filter((value)=>{
      return value!='Etat-moyen';
     }):this.selectedState.push('Etat-moyen');
  }
  public choose_a_bricoler(){
    this.selectedState.includes('A bricoler')?this.selectedState=this.selectedState.filter((value)=>{
      return value!='A bricoler';
     }):this.selectedState.push('A bricoler');
  }



}
