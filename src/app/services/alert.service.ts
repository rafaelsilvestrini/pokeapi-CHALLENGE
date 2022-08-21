import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alert: any
  constructor(
    public alertController: AlertController
  ) { }

  async simplePresentAlert(title: string, message: string) {

    this.alert = await this.alertController.create({
      header: title,
      message: message,
      cssClass: 'alertCancel',
      mode:"md",
      buttons: ["OK"]
    });

    this.alert.present();
  }

  async presentAlertCustom(header: string, message: string, cssClass?: string, buttons?: any, inputs?: any) {

    this.alert = await this.alertController.create({
      cssClass: 'alertCancel',
      mode:"md",
      header,
      message,
      buttons,
      inputs
    });

    this.alert.present();
  }


}
