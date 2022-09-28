import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesMouvementsPage } from './mes-mouvements.page';

const routes: Routes = [
  {
    path: '',
    component: MesMouvementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesMouvementsPageRoutingModule {}
