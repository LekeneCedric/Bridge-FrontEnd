import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEtatPage } from './modal-etat.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEtatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEtatPageRoutingModule {}
