import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationAssociationPage } from './creation-association.page';

const routes: Routes = [
  {
    path: '',
    component: CreationAssociationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationAssociationPageRoutingModule {}
