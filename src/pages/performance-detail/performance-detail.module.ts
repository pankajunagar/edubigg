import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerformanceDetailPage } from './performance-detail';

@NgModule({
  declarations: [
    PerformanceDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PerformanceDetailPage),
  ],
})
export class PerformanceDetailPageModule {}
