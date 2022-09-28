import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesFavorisPageRoutingModule } from './mes-favoris-routing.module';

import { MesFavorisPage } from './mes-favoris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesFavorisPageRoutingModule
  ],
  declarations: [MesFavorisPage]
})
export class MesFavorisPageModule {}
