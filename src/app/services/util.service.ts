import { AlertController } from '@ionic/angular';
import { WebhookService } from './webhook.service';
import { PokeApiService } from './poke-api.service';
import { LoadingService } from './loading.service';
import { ToastService } from './toast.service';
import { AlertService } from './alert.service';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {


  /* Menu select */
  menuHome: string = "home";
  menuType: string = "albums-outline";
  menuFavorite: string = "heart-outline";

  constructor(
    /* Service basic */
    public alertService: AlertService,
    public toastService: ToastService,
    public loadingService: LoadingService,

    /* Service assistent */
    public router: Router,
    public location: Location,
    public alertController: AlertController,
    /* Service  API */
    public pokeApiService: PokeApiService,
    public webhookService: WebhookService

  ) { }

  /* working menu */

  getRouter() {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.setIconMenu(this.router.url)
        }
      }
    );
  }

  setIconMenu(url: String) {
    switch (url) {
      case "/home":
        this.menuHome = "home";
        this.menuType = "albums-outline";
        this.menuFavorite = "heart-outline";
        break;
      case "/type-poke":
        this.menuHome = "home-outline";
        this.menuType = "albums";
        this.menuFavorite = "heart-outline";
        break;
      case "/favorite":
        this.menuHome = "home-outline";
        this.menuType = "albums-outline";
        this.menuFavorite = "heart";
        break;
      default:
        break;
    }
  }

}






