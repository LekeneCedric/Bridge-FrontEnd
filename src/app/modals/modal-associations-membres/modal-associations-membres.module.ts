import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAssociationsMembresPageRoutingModule } from './modal-associations-membres-routing.module';

import { ModalAssociationsMembresPage } from './modal-associations-membres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAssociationsMembresPageRoutingModule
  ],
  declarations: [ModalAssociationsMembresPage]
})
export class ModalAssociationsMembresPageModule {}
