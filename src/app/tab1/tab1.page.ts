import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async UsarPoke() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Está certo disso?',
      message: 'Tem certeza que deseja utilizar esse Pokémon??',
      buttons: [
        {
          text: 'Quero esse não',
          role: 'cancel',
          handler: (blah) => {
            console.log('Ele cancelou: blah');
          }
        }, {
          text: 'QUERO!!',
          cssClass: 'secondary',
          handler: () => {
            this.oui();
          }
        }
      ]
    });
    await alert.present();
  }
  async oui() {
    const toast = await this.toastController.create({
      message: 'Esse Pokémon foi o eleito',
      color:'ii',
      duration: 2000
    });
    toast.present();
  }
}
