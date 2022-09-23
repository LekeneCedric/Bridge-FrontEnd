import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleryTypePageRoutingModule } from './galery-type-routing.module';

import { GaleryTypePage } from './galery-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleryTypePageRoutingModule
  ],
  declarations: [GaleryTypePage]
})
export class GaleryTypePageModule {}
