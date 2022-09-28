import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  },
  {
    path: 'annonces/:id',
    loadChildren: () => import('./annonces/annonces.module').then( m => m.AnnoncesPageModule)
  },
  {
    path: 'mes-associations/:id',
    loadChildren: () => import('./mes-associations/mes-associations.module').then( m => m.MesAssociationsPageModule)
  },
  {
    path: 'mes-mouvements',
    loadChildren: () => import('./mes-mouvements/mes-mouvements.module').then( m => m.MesMouvementsPageModule)
  },
  {
    path: 'mes-favoris',
    loadChildren: () => import('./mes-favoris/mes-favoris.module').then( m => m.MesFavorisPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
