import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmissionDetailPage } from './admission-detail';

@NgModule({
  declarations: [
    AdmissionDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AdmissionDetailPage),
  ],
})
export class AdmissionDetailPageModule {}
