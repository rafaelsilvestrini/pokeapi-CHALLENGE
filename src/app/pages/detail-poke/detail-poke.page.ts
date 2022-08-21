import { PokeList } from './../../interfaces/poke-list';
import { UtilsService } from './../../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-poke',
  templateUrl: './detail-poke.page.html',
  styleUrls: ['./detail-poke.page.scss'],
})
export class DetailPokePage implements OnInit {
  /* Poke */
  poke: PokeList;
  constructor(
    public utils: UtilsService
  ) {
    const nav = this.utils.router.getCurrentNavigation();
    this.poke = nav.extras.state.itens ?? {};
    console.log(this.poke)
  }

  ngOnInit() {
  }

}
