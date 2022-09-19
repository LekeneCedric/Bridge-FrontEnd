import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationMouvementsPage } from './creation-mouvements.page';

const routes: Routes = [
  {
    path: '',
    component: CreationMouvementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationMouvementsPageRoutingModule {}
