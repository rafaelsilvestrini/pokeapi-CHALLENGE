import { PokeList } from './../../interfaces/poke-list';
import { UtilsService } from './../../services/util.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage {
  /* poke */
  listPoke: PokeList[];
  listPokeFilter: PokeList[];
  listPokeBackup: PokeList[];
  /* filter and outhers */
  isFilter: boolean = false;
  isSkeleton: boolean = true;
  titleSegment: string = "Favorites"


  constructor(
    public utils: UtilsService
  ) { }

  ionViewDidEnter() {
    this.onPokes()
  }

  /* Get list poke */
  async onPokes() {
    await this.utils.loadingService.presentLoading()
    this.listPokeBackup = JSON.parse(localStorage.getItem("favoritePokemons") ?? null)
    this.listPoke = this.listPokeBackup ? this.listPokeBackup.slice(0, 10) : []
    this.utils.loadingService.dismissLoading()
    this.isSkeleton = false
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
    this.titleSegment = "Favorites"
    this.timeOutSkeleton()
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    /* update isFilter */
    this.isFilter = true;
    this.isSkeleton = true;
    this.titleSegment = "Results Favorites"

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

  removeFavorite(i: number) {
    this.listPokeBackup.splice(i, 1);
    console.log(this.listPokeBackup, i)
    localStorage.setItem("favoritePokemons", JSON.stringify(this.listPokeBackup))

    this.onPokes();
    return this.utils.toastService.presentToast(`Pokémon successfully removed.`, "toast-success")
  }


  async presentAlert(i: number) {
    const alert = await this.utils.alertController.create({
      header: 'Caution!',
      message: 'You will remove a pokemon from your favorites, are you sure you want to continue?',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            this.removeFavorite(i)
          },
        },
      ],
    });

    await alert.present();
  }

}
