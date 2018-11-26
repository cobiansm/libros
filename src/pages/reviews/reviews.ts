import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewRevPage } from '../new-rev/new-rev';

/**
 * Generated class for the ReviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html',
})
export class ReviewsPage {
res = NewRevPage;

reviews = [
  {persona: 'Marlene Cobian', texto: 'Muy buen libro.', fecha: '25/11/2018', avatar: '../assets/marlene.png'},
];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewsPage');
  }

  agregarReview() {
    this.navCtrl.push(this.res, {reviews: this.reviews});
  }


}
