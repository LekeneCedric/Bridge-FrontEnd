import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsAnnoncePageRoutingModule } from './details-annonce-routing.module';

import { DetailsAnnoncePage } from './details-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsAnnoncePageRoutingModule
  ],
  declarations: [DetailsAnnoncePage]
})
export class DetailsAnnoncePageModule {}
