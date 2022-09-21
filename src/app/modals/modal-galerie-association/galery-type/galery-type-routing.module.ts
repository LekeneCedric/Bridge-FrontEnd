import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleryTypePage } from './galery-type.page';

const routes: Routes = [
  {
    path: '',
    component: GaleryTypePage
  },
  {
    path: 'image/:id',
    loadChildren: () => import('./image/image.module').then( m => m.ImagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleryTypePageRoutingModule {}
