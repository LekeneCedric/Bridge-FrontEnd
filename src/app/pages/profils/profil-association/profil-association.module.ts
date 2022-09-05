import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilAssociationPageRoutingModule } from './profil-association-routing.module';

import { ProfilAssociationPage } from './profil-association.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilAssociationPageRoutingModule
  ],
  declarations: [ProfilAssociationPage]
})
export class ProfilAssociationPageModule {}
