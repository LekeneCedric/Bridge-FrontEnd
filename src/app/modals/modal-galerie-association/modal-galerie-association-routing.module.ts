import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalGalerieAssociationPage } from './modal-galerie-association.page';

const routes: Routes = [
  {
    path: '',
    component: ModalGalerieAssociationPage
  },
  {
    path: 'galery-type/:category/:id',
    loadChildren: () => import('./galery-type/galery-type.module').then( m => m.GaleryTypePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalGalerieAssociationPageRoutingModule {}
