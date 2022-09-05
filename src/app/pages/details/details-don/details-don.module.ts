import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsDonPageRoutingModule } from './details-don-routing.module';

import { DetailsDonPage } from './details-don.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsDonPageRoutingModule
  ],
  declarations: [DetailsDonPage]
})
export class DetailsDonPageModule {}
