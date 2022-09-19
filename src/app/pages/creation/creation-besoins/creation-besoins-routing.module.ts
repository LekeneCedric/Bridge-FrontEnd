import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationBesoinsPage } from './creation-besoins.page';

const routes: Routes = [
  {
    path: '',
    component: CreationBesoinsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationBesoinsPageRoutingModule {}
