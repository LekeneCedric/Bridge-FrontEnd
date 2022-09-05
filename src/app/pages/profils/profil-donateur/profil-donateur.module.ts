import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilDonateurPageRoutingModule } from './profil-donateur-routing.module';

import { ProfilDonateurPage } from './profil-donateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilDonateurPageRoutingModule
  ],
  declarations: [ProfilDonateurPage]
})
export class ProfilDonateurPageModule {}
