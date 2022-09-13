import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditDonsPage } from './modal-edit-dons.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditDonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditDonsPageRoutingModule {}
