import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceptionPageRoutingModule } from './reception-routing.module';

import { ReceptionPage } from './reception.page';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReceptionPageRoutingModule
  ],
  declarations: [ReceptionPage]
})
export class ReceptionPageModule {}
