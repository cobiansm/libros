import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewRevPage } from './new-rev';

@NgModule({
  declarations: [
    NewRevPage,
  ],
  imports: [
    IonicPageModule.forChild(NewRevPage),
  ],
})
export class NewRevPageModule {}
