import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleryTypePageRoutingModule } from './galery-type-routing.module';

import { GaleryTypePage } from './galery-type.page';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleryTypePageRoutingModule
  ],
  providers:[PhotoViewer],
  declarations: [GaleryTypePage]
})
export class GaleryTypePageModule {}
