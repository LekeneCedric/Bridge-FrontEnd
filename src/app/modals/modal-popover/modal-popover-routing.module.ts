import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPopoverPage } from './modal-popover.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPopoverPageRoutingModule {}
