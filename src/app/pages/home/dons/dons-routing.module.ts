import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonsPage } from './dons.page';

const routes: Routes = [
  {
    path: '',
    component: DonsPage,
  },
  {
    path:'details/:id',
    loadChildren: () => import('../../details/details-don/details-don.module').then(m => m.DetailsDonPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonsPageRoutingModule {}
