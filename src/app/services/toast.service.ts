import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    public toastCtrl:ToastController
  ) { }

    //Toast
    async presentToast(message: string, cssClass?) {
      let toast = await this.toastCtrl.create({
        mode:"ios",
        message: message,
        duration: 4000,
        cssClass,
        buttons: [
          {
            text: "Ok",
            role: "cancel",
          },
        ],
      });
      toast.present();
    }
}
