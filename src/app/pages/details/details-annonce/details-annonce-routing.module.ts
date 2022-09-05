import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsAnnoncePage } from './details-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsAnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsAnnoncePageRoutingModule {}
