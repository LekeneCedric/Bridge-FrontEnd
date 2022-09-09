import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSalonPageRoutingModule } from './modal-salon-routing.module';

import { ModalSalonPage } from './modal-salon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSalonPageRoutingModule
  ],
  declarations: [ModalSalonPage]
})
export class ModalSalonPageModule {}
