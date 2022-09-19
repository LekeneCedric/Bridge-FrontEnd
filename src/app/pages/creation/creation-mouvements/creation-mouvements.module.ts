import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationMouvementsPageRoutingModule } from './creation-mouvements-routing.module';

import { CreationMouvementsPage } from './creation-mouvements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationMouvementsPageRoutingModule
  ],
  declarations: [CreationMouvementsPage]
})
export class CreationMouvementsPageModule {}
