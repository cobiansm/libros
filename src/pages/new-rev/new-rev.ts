import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the NewRevPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-rev',
  templateUrl: 'new-rev.html',
})
export class NewRevPage {
persona = '';
avatar = '';
texto = '';
reviews = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewRevPage');
  }

  publicarRes() {
    if (this.texto.length > 0) {
      let fecha = new Date();
      let day = fecha.getDay();
      let month = fecha.getMonth();
      let year = fecha.getFullYear();
      this.reviews.push({titulo: this.persona, autor: this.texto, fecha: day + '/' + month + '/' + year});
      this.navCtrl.pop();
    } else {
      const alert = this.alertCtrl.create ({
        title: 'Error',
        subTitle: 'Tu libro está incompleto',
        buttons: ['Ok']
      });
      alert.present();
    }
  }

}
