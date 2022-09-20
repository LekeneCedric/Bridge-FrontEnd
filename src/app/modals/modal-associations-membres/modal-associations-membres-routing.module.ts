import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAssociationsMembresPage } from './modal-associations-membres.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAssociationsMembresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAssociationsMembresPageRoutingModule {}
