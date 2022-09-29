import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAssociationMemberPage } from './modal-association-member.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAssociationMemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAssociationMemberPageRoutingModule {}
