import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesFavorisPage } from './mes-favoris.page';

const routes: Routes = [
  {
    path: '',
    component: MesFavorisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesFavorisPageRoutingModule {}
