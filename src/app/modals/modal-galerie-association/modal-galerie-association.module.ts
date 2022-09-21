import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalGalerieAssociationPageRoutingModule } from './modal-galerie-association-routing.module';

import { ModalGalerieAssociationPage } from './modal-galerie-association.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalGalerieAssociationPageRoutingModule
  ],
  declarations: [ModalGalerieAssociationPage]
})
export class ModalGalerieAssociationPageModule {}
