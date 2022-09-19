import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDemandesAdhesionAssociationPageRoutingModule } from './modal-demandes-adhesion-association-routing.module';

import { ModalDemandesAdhesionAssociationPage } from './modal-demandes-adhesion-association.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDemandesAdhesionAssociationPageRoutingModule
  ],
  declarations: [ModalDemandesAdhesionAssociationPage]
})
export class ModalDemandesAdhesionAssociationPageModule {}
