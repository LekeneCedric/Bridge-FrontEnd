import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsEvenementsPage } from './details-evenements.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsEvenementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsEvenementsPageRoutingModule {}
