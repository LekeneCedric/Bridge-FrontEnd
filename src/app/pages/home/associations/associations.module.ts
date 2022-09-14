import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssociationsPageRoutingModule } from './associations-routing.module';

import { AssociationsPage } from './associations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssociationsPageRoutingModule
  ],
  declarations: [AssociationsPage]
})
export class AssociationsPageModule {}
