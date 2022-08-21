import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailTypeOfPokePageRoutingModule } from './detail-type-of-poke-routing.module';

import { DetailTypeOfPokePage } from './detail-type-of-poke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTypeOfPokePageRoutingModule
  ],
  declarations: [DetailTypeOfPokePage]
})
export class DetailTypeOfPokePageModule {}
