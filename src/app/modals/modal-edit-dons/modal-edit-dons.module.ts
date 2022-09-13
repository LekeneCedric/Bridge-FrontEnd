import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditDonsPageRoutingModule } from './modal-edit-dons-routing.module';

import { ModalEditDonsPage } from './modal-edit-dons.page';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditDonsPageRoutingModule
  ],
  providers:[NativeGeocoder],
  declarations: [ModalEditDonsPage]
})
export class ModalEditDonsPageModule {}
