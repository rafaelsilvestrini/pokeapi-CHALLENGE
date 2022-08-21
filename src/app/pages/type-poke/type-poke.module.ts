import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypePokePageRoutingModule } from './type-poke-routing.module';

import { TypePokePage } from './type-poke.page';
import { SharedModule } from 'src/app/shareds/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypePokePageRoutingModule,
    SharedModule
  ],
  declarations: [TypePokePage]
})
export class TypePokePageModule {}
