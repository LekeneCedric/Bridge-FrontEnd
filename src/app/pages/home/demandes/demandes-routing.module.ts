import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandesPage } from './demandes.page';

const routes: Routes = [
  {
    path: '',
    component: DemandesPage
  },
  {
    path:'details/:id',
    loadChildren: () => import('../../details/details-demande/details-demande.module').then(m => m.DetailsDemandePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandesPageRoutingModule {}
