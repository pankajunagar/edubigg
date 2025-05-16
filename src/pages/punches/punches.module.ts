import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PunchesPage } from './punches';

@NgModule({
  declarations: [
    PunchesPage,
  ],
  imports: [
    IonicPageModule.forChild(PunchesPage),
  ],
})
export class PunchesPageModule {}
