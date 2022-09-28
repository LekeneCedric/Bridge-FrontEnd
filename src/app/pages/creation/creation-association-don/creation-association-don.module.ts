import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationAssociationDonPageRoutingModule } from './creation-association-don-routing.module';

import { CreationAssociationDonPage } from './creation-association-don.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationAssociationDonPageRoutingModule
  ],
  declarations: [CreationAssociationDonPage]
})
export class CreationAssociationDonPageModule {}
