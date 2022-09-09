import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceptionsPage } from './receptions.page';

const routes: Routes = [
  {
    path: '',
    component: ReceptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceptionsPageRoutingModule {}
