import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BesoinsAssociationPageRoutingModule } from './besoins-association-routing.module';

import { BesoinsAssociationPage } from './besoins-association.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BesoinsAssociationPageRoutingModule
  ],
  declarations: [BesoinsAssociationPage]
})
export class BesoinsAssociationPageModule {}
