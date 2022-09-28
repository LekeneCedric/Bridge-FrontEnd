import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesMouvementsPageRoutingModule } from './mes-mouvements-routing.module';

import { MesMouvementsPage } from './mes-mouvements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesMouvementsPageRoutingModule
  ],
  declarations: [MesMouvementsPage]
})
export class MesMouvementsPageModule {}
