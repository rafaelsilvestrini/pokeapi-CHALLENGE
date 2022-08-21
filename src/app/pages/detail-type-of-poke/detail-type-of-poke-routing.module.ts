import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTypeOfPokePage } from './detail-type-of-poke.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTypeOfPokePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTypeOfPokePageRoutingModule {}
