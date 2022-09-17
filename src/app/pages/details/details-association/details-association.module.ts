import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsAssociationPageRoutingModule } from './details-association-routing.module';

import { DetailsAssociationPage } from './details-association.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsAssociationPageRoutingModule
  ],
  declarations: [DetailsAssociationPage]
})
export class DetailsAssociationPageModule {}
