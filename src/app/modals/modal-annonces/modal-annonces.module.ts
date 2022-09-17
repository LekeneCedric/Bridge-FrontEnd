import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAnnoncesPageRoutingModule } from './modal-annonces-routing.module';

import { ModalAnnoncesPage } from './modal-annonces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAnnoncesPageRoutingModule
  ],
  declarations: [ModalAnnoncesPage]
})
export class ModalAnnoncesPageModule {}
