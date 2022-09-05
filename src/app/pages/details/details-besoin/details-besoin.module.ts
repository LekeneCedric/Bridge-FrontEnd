import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsBesoinPageRoutingModule } from './details-besoin-routing.module';

import { DetailsBesoinPage } from './details-besoin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsBesoinPageRoutingModule
  ],
  declarations: [DetailsBesoinPage]
})
export class DetailsBesoinPageModule {}
