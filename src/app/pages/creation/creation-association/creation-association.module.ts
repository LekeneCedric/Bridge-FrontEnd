import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationAssociationPageRoutingModule } from './creation-association-routing.module';

import { CreationAssociationPage } from './creation-association.page';

import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreationAssociationPageRoutingModule
  ],
  declarations: [CreationAssociationPage],
  providers:[ImagePicker]
})
export class CreationAssociationPageModule {}
