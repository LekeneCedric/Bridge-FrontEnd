import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAssociationMemberPageRoutingModule } from './modal-association-member-routing.module';

import { ModalAssociationMemberPage } from './modal-association-member.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAssociationMemberPageRoutingModule
  ],
  declarations: [ModalAssociationMemberPage]
})
export class ModalAssociationMemberPageModule {}
