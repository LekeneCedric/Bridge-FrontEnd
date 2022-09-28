import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BesoinsAssociationPage } from './besoins-association.page';

const routes: Routes = [
  {
    path: '',
    component: BesoinsAssociationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BesoinsAssociationPageRoutingModule {}
