import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCategoryPageRoutingModule } from './modal-category-routing.module';

import { ModalCategoryPage } from './modal-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCategoryPageRoutingModule
  ],
  declarations: [ModalCategoryPage]
})
export class ModalCategoryPageModule {}
