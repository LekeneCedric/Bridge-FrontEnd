import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalMouvementsPageRoutingModule } from './modal-mouvements-routing.module';

import { ModalMouvementsPage } from './modal-mouvements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalMouvementsPageRoutingModule
  ],
  declarations: [ModalMouvementsPage]
})
export class ModalMouvementsPageModule {}
