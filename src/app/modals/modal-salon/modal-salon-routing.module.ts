import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSalonPage } from './modal-salon.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSalonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSalonPageRoutingModule {}
