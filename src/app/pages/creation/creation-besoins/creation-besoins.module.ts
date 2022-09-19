import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationBesoinsPageRoutingModule } from './creation-besoins-routing.module';

import { CreationBesoinsPage } from './creation-besoins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationBesoinsPageRoutingModule
  ],
  declarations: [CreationBesoinsPage]
})
export class CreationBesoinsPageModule {}
