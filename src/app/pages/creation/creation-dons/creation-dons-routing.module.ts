import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationDonsPage } from './creation-dons.page';

const routes: Routes = [
  {
    path: '',
    component: CreationDonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationDonsPageRoutingModule {}
