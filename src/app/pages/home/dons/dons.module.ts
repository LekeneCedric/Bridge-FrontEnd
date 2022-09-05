import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonsPageRoutingModule } from './dons-routing.module';

import { DonsPage } from './dons.page';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonsPageRoutingModule
  ],
 providers:[NativeGeocoder],
  declarations: [DonsPage]
})
export class DonsPageModule {}
