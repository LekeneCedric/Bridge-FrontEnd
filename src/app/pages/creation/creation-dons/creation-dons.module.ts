import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationDonsPageRoutingModule } from './creation-dons-routing.module';

import { CreationDonsPage } from './creation-dons.page';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationDonsPageRoutingModule
  ],
  providers:[NativeGeocoder],
  declarations: [CreationDonsPage]
})
export class CreationDonsPageModule {}
