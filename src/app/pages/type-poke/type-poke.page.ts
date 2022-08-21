import { PokeList } from './../../interfaces/poke-list';
import { UtilsService } from './../../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-poke',
  templateUrl: './type-poke.page.html',
  styleUrls: ['./type-poke.page.scss'],
})
export class TypePokePage implements OnInit {
  /* poke */
  listPoke: PokeList[];
  listPokeFilter: PokeList[];
  listPokeBackup: PokeList[];
  /* filter and outhers */
  isFilter: boolean = false;
  isSkeleton: boolean = true;
  titleSegment: string = "Types Of Pokémons"
  /* Emphasis */
  emphasis: PokeList[];

  constructor(
    public utils: UtilsService
  ) { }

  ngOnInit() {
    this.onPokes()
  }

  /* Get list poke */
  async onPokes() {
    await this.utils.loadingService.presentLoading()
    this.utils.pokeApiService.getTypePoke()
      .then((data: any) => {
        this.listPokeBackup = data?.results
        console.log(this.listPokeBackup)
        this.listPoke = this.listPokeBackup.slice(0,10)
      }).catch((err: any) => {
        console.log(err)
        this.utils.toastService.presentToast(err.error.message, "toast-error")
      }).finally(async () => {
        this.timeOutSkeleton()
        this.utils.loadingService.dismissLoading()
      })
  }



  /* Infinite Scroll */
  infiniteScrool($event) {
    var list = this.isFilter ? this.listPokeFilter : this.listPokeBackup
    let pushInfinite = list.slice(this.listPoke.length, 10 + this.listPoke.length);
    for (let i = 0; i < pushInfinite.length; i++) {
      this.listPoke.push(pushInfinite[i]);
    }
    $event.target.complete();
    console.log(this.listPoke)
    let keysss = Object.keys(list).length
  }

  /* filter */
  async filterList(evt) {
    this.isFilter = false;
    this.listPoke = this.listPokeBackup.slice(0, 10);
    this.isSkeleton = true;
    this.titleSegment = "Types Of Pokémons"
    this.timeOutSkeleton()
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    /* update isFilter */
    this.isFilter = true;
    this.isSkeleton = true;
    this.titleSegment = "Results"

    this.listPokeFilter = this.listPokeBackup.filter(poke => {
      if (poke.name && searchTerm) {
        return (poke.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
    this.listPoke = this.listPokeFilter.slice(0, 10)
    this.timeOutSkeleton()
  }

  /* finally timeout skeleton */
  timeOutSkeleton() {
    setTimeout(() => {
      this.isSkeleton = false;
    }, 2000);
  }

}
