import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrationAssociationPageRoutingModule } from './administration-association-routing.module';

import { AdministrationAssociationPage } from './administration-association.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrationAssociationPageRoutingModule
  ],
  declarations: [AdministrationAssociationPage]
})
export class AdministrationAssociationPageModule {}
