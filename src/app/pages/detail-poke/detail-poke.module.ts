import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPokePageRoutingModule } from './detail-poke-routing.module';

import { DetailPokePage } from './detail-poke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPokePageRoutingModule
  ],
  declarations: [DetailPokePage]
})
export class DetailPokePageModule {}
