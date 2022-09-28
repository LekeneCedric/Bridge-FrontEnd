import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationAssociationDonPage } from './creation-association-don.page';

const routes: Routes = [
  {
    path: '',
    component: CreationAssociationDonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationAssociationDonPageRoutingModule {}
