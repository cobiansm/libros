import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VerLibroPage } from '../pages/ver-libro/ver-libro';
import { NuevoLibroPage } from '../pages/nuevo-libro/nuevo-libro';
import { BioAutorPage } from '../pages/bio-autor/bio-autor';
import { NewRevPage } from '../pages/new-rev/new-rev';
import { ReviewsPage } from '../pages/reviews/reviews';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VerLibroPage,
    NuevoLibroPage,
    BioAutorPage,
    NewRevPage,
    ReviewsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VerLibroPage,
    NuevoLibroPage,
    BioAutorPage,
    NewRevPage,
    ReviewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
