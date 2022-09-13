import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPageRoutingModule } from './map-routing.module';

import { MapPage } from './map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MapPage]
})
export class MapPageModule {}
