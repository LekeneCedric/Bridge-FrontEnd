import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditProfilPageRoutingModule } from './modal-edit-profil-routing.module';

import { ModalEditProfilPage } from './modal-edit-profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditProfilPageRoutingModule
  ],
  declarations: [ModalEditProfilPage]
})
export class ModalEditProfilPageModule {}
