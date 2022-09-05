import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationDemandesPageRoutingModule } from './creation-demandes-routing.module';

import { CreationDemandesPage } from './creation-demandes.page';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationDemandesPageRoutingModule
  ],
  providers:[NativeGeocoder],
  declarations: [CreationDemandesPage]
})
export class CreationDemandesPageModule {}
