import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAddMemberAssociationPage } from './modal-add-member-association.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAddMemberAssociationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAddMemberAssociationPageRoutingModule {}
