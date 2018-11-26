import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VerLibroPage } from '../ver-libro/ver-libro';
import { NuevoLibroPage } from '../nuevo-libro/nuevo-libro';
import { BioAutorPage } from '../bio-autor/bio-autor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
libro = VerLibroPage;
newLibro = NuevoLibroPage;
bio = BioAutorPage;

books = [
  {titulo: 'El Gran Gatsby', autor: 'F. Scott Fitzgerald', year: '1952', editorial: 'Aleph', imagen: '../assets/great.jpg'},
  {titulo: 'For Whom the Bell Tolls', autor: 'Ernest Hemingway', year: '1940', editorial: 'Festschrift',imagen: '../assets/bells.jpg'},
  {titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', year: '1943', editorial: 'Salamandra', imagen: '../assets/principito.png'}
] 

  constructor(public navCtrl: NavController) {

  }

  clickLibro(b) {
    this.navCtrl.push(this.libro, {book:b});
  }

  nuevoLibro(b) {
    this.navCtrl.push(this.newLibro, {books:this.books});
  }

}
