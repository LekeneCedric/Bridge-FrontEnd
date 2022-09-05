import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsBesoinPage } from './details-besoin.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsBesoinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsBesoinPageRoutingModule {}
