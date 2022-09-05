import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEtatPageRoutingModule } from './modal-etat-routing.module';

import { ModalEtatPage } from './modal-etat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEtatPageRoutingModule
  ],
  declarations: [ModalEtatPage]
})
export class ModalEtatPageModule {}
