import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsMenuPage } from './tabs-menu.page';

const routes: Routes = [
 {
  path:'',
  component:TabsMenuPage,
  children:[
    {
      path: 'dons',
      loadChildren: () => import('../../pages/home/dons/dons.module').then(m => m.DonsPageModule)
    },
    {
      path:'demandes',
      loadChildren:()=> import('../../pages/home/demandes/demandes.module').then(m => m.DemandesPageModule)
    },
    {
      path:'annonces',
      loadChildren:()=> import('../../pages/home/annonces/annonces.module').then(m => m.AnnoncesPageModule)
    },
    {
      path:'messages',
      loadChildren:()=> import('../../pages/messages/receptions/receptions.module').then(m => m.ReceptionsPageModule)
    },
    {
      path:'settings',
      loadChildren:()=> import('../../pages/settings/settings.module').then(m => m.SettingsPageModule)
    }
  ]
 },
  {
    path: '',
    redirectTo: '/menu/dons',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsMenuPageRoutingModule {}
