import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    public loadingController: LoadingController
  ) { }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      mode:'ios'
    });
    await loading.present();
  }

  async presentLoadingWithMessage(message: string) {
    const loading = await this.loadingController.create({
      message: message,
      mode:'ios'
    });
    await loading.present();
  }

  async dismissLoading() {
    await this.loadingController.getTop().then(loading => {
      if (loading) {
        loading.dismiss().then(() => {
          console.log("Dismissed");
        });
      }
    });
  }
}
