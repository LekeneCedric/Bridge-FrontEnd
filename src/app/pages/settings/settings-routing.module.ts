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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
