import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilDonateurPage } from './profil-donateur.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilDonateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilDonateurPageRoutingModule {}
