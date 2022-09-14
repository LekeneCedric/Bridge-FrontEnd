import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesAssociationsPage } from './mes-associations.page';

const routes: Routes = [
  {
    path: '',
    component: MesAssociationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesAssociationsPageRoutingModule {}
