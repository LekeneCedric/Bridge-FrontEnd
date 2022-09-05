import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalonPageRoutingModule } from './salon-routing.module';

import { SalonPage } from './salon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SalonPageRoutingModule
  ],
  declarations: [SalonPage]
})
export class SalonPageModule {}
