import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCategoryPage } from './modal-category.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCategoryPageRoutingModule {}
