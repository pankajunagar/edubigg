import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmissionPage } from './admission';

@NgModule({
  declarations: [
    AdmissionPage,
  ],
  imports: [
    IonicPageModule.forChild(AdmissionPage),
  ],
})
export class AdmissionPageModule {}
