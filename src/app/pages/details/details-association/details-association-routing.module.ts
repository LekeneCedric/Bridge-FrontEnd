import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsAssociationPage } from './details-association.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsAssociationPage
  },
  {
    path: 'administration-association/:id',
    loadChildren: () => import('./administration-association/administration-association.module').then( m => m.AdministrationAssociationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsAssociationPageRoutingModule {}
