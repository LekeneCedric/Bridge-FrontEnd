import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationAnnoncesPageRoutingModule } from './creation-annonces-routing.module';

import { CreationAnnoncesPage } from './creation-annonces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationAnnoncesPageRoutingModule
  ],
  declarations: [CreationAnnoncesPage]
})
export class CreationAnnoncesPageModule {}
