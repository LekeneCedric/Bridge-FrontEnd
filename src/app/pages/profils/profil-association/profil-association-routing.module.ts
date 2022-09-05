import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilAssociationPage } from './profil-association.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilAssociationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilAssociationPageRoutingModule {}
