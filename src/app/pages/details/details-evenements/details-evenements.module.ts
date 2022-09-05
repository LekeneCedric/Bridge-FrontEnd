import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsEvenementsPageRoutingModule } from './details-evenements-routing.module';

import { DetailsEvenementsPage } from './details-evenements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsEvenementsPageRoutingModule
  ],
  declarations: [DetailsEvenementsPage]
})
export class DetailsEvenementsPageModule {}
