import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPopoverPageRoutingModule } from './modal-popover-routing.module';

import { ModalPopoverPage } from './modal-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPopoverPageRoutingModule
  ],
  declarations: [ModalPopoverPage]
})
export class ModalPopoverPageModule {}
