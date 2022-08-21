import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPokePage } from './detail-poke.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPokePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPokePageRoutingModule {}
