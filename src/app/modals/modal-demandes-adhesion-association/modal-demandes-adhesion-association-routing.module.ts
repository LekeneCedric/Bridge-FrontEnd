import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDemandesAdhesionAssociationPage } from './modal-demandes-adhesion-association.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDemandesAdhesionAssociationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDemandesAdhesionAssociationPageRoutingModule {}
