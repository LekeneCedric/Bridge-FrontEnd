import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnoncesPage } from './annonces.page';

const routes: Routes = [
  {
    path: '',
    component: AnnoncesPage
  },
  {
    path:'detailsAnnonce/:id',
    loadChildren: () => import('../../details/details-annonce/details-annonce.module').then(m => m.DetailsAnnoncePageModule)
  },
  {
    path:'detailsEvenement/:id',
    loadChildren: () => import('../../details/details-evenements/details-evenements.module').then(m => m.DetailsEvenementsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnoncesPageRoutingModule {}
