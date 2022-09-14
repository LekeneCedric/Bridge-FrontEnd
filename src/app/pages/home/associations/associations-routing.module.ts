import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssociationsPage } from './associations.page';

const routes: Routes = [
  {
    path: '',
    component: AssociationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssociationsPageRoutingModule {}
