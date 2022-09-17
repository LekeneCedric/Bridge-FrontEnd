import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAnnoncesPage } from './modal-annonces.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAnnoncesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAnnoncesPageRoutingModule {}
