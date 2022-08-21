import { PokeList } from './../../interfaces/poke-list';
import { UtilsService } from './../../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  /* poke */
  listPoke: PokeList[];
  listPokeFilter: PokeList[];
  listPokeBackup: PokeList[];
  /* filter and outhers */
  isFilter: boolean = false;
  isSkeleton: boolean = true;
  titleSegment: string = "Pokémons"
  /* Emphasis */
  emphasis: PokeList[];

  constructor(
    public utils: UtilsService
  ) { }

  ngOnInit() {
    this.onPokes()
    this.utils.getRouter()

  }

  /* Get list poke */
  async onPokes() {
    await this.utils.loadingService.presentLoading()
    this.utils.pokeApiService.allPoke()
      .then((data: any) => {
        this.listPokeBackup = data?.results
        this.createListPoekomInfo()
      }).catch((err: any) => {
        console.log(err)
        this.utils.toastService.presentToast(err.error.message, "toast-error")
      }).finally(async () => {
        this.timeOutSkeleton()
        this.utils.loadingService.dismissLoading()
      })
  }

  /* Get poke Url */
  onPokeURL(url: string, index: number) {
    this.utils.pokeApiService.getPokemonURL(url)
      .then((data: any) => {
        this.listPokeBackup[index]['info'] = data;
        return data;
      }).catch((err: any) => {
        console.log(err)
      })
  }

  /* Created group [Info] */
  createListPoekomInfo() {
    for (let index = 0; index < this.listPokeBackup.length; index++) {
      var result = this.onPokeURL(this.listPokeBackup[index].url, index)
    }
    this.rondomEmphasis()
    this.listPoke = this.listPokeBackup.slice(0, 10)

  }

  /* Emphasis */
  rondomEmphasis() {
    const number = Math.floor(Math.random() * Number(this.listPokeBackup.length))
    this.emphasis = this.listPokeBackup.slice((number - 1), number)
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
    this.titleSegment = "Pokémons"
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

  /* Favorite functions */

  addFavorite(dataFavorite) {
    var storage = JSON.parse(localStorage.getItem("favoritePokemons") ?? null)
    var checkFilter = []
    if (storage) {
      checkFilter = storage.filter((filter => {
        return filter?.info?.id == dataFavorite.info?.id
      }))
    }
    if (checkFilter && checkFilter.length > 0) return this.utils.toastService.presentToast("This pokemon is already in your favorites.", "toast-error")
    if (storage) {
      var data: any[] = storage.concat(dataFavorite)
      console.log(data)
      localStorage.setItem("favoritePokemons", JSON.stringify(data))
      this.postWebHook(dataFavorite)
      return this.utils.toastService.presentToast(`Pokémon ${dataFavorite?.name} successfully added to your favorites.`, "toast-success")
    } else {
      localStorage.setItem("favoritePokemons", JSON.stringify([dataFavorite]))
      this.postWebHook(dataFavorite)
      return this.utils.toastService.presentToast(`Pokémon ${dataFavorite?.name} successfully added to your favorites.`, "toast-success")
    }
  }


  /* WebHook */
 postWebHook(data: {}) {
    this.utils.webhookService.webhookPostInfo(data)
      .then((data: any) => {
        console.log(data)
      }).catch((err: any) => {
        console.log(err)
      })
  }
}
