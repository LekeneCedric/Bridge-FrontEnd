import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationAssociationPage } from './administration-association.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrationAssociationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationAssociationPageRoutingModule {}
