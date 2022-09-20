import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAddMemberAssociationPageRoutingModule } from './modal-add-member-association-routing.module';

import { ModalAddMemberAssociationPage } from './modal-add-member-association.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAddMemberAssociationPageRoutingModule
  ],
  declarations: [ModalAddMemberAssociationPage]
})
export class ModalAddMemberAssociationPageModule {}
