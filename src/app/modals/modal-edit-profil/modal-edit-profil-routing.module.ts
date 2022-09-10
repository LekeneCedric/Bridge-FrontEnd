import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditProfilPage } from './modal-edit-profil.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditProfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditProfilPageRoutingModule {}
