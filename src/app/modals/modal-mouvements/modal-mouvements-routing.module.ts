import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalMouvementsPage } from './modal-mouvements.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMouvementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalMouvementsPageRoutingModule {}
