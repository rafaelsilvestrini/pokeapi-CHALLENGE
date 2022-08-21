import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypePokePage } from './type-poke.page';

const routes: Routes = [
  {
    path: '',
    component: TypePokePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypePokePageRoutingModule {}
