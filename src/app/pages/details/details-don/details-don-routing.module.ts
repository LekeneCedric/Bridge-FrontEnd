import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsDonPage } from './details-don.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsDonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsDonPageRoutingModule {}
