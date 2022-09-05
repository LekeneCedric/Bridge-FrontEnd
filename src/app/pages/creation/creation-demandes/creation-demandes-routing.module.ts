import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationDemandesPage } from './creation-demandes.page';

const routes: Routes = [
  {
    path: '',
    component: CreationDemandesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationDemandesPageRoutingModule {}
