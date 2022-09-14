import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesAssociationsPageRoutingModule } from './mes-associations-routing.module';

import { MesAssociationsPage } from './mes-associations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesAssociationsPageRoutingModule
  ],
  declarations: [MesAssociationsPage]
})
export class MesAssociationsPageModule {}
