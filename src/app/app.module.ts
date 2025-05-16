import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
//import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SchedulesPage } from '../pages/schedules/schedules';
import { PerformancePage } from '../pages/performance/performance';
import { AttendancePage } from '../pages/attendance/attendance';
import { AdmissionPage } from '../pages/admission/admission';
import { AdmissionDetailPage } from '../pages/admission-detail/admission-detail';
import { ProfilePage } from '../pages/profile/profile';
import { PerformanceDetailPage } from '../pages/performance-detail/performance-detail';
import { AttendanceDetailPage } from '../pages/attendance-detail/attendance-detail';
import { ScheduleDetailPage } from '../pages/schedule-detail/schedule-detail';
import { DocumentsPage } from '../pages/documents/documents';
import { FeedbackPage } from '../pages/feedback/feedback';
import { FeedbackFormPage } from '../pages/feedback-form/feedback-form';
import { FeedbackDetailsPage } from '../pages/feedback-details/feedback-details';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { LeavePage } from '../pages/leave/leave';
import { AddLeavePage } from '../pages/add-leave/add-leave';
import { PunchesPage } from '../pages/punches/punches'; 
import { MessagesPage } from '../pages/messages/messages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EdubiggServiceProvider } from '../providers/edubigg-service/edubigg-service';
 
import { Network } from '@ionic-native/network';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AppAvailability } from '@ionic-native/app-availability';

//import { FCM } from '@ionic-native/fcm';
//import { Push} from '@ionic-native/push';

import { Firebase } from '@ionic-native/firebase';


import { FirebaseX } from "@ionic-native/firebase-x/ngx";



@NgModule({
  declarations: [ 
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SchedulesPage,
    PerformancePage,
    AttendancePage,
    AdmissionPage,
    ProfilePage,
    PerformanceDetailPage,
    AttendanceDetailPage,
    DocumentsPage,
    FeedbackPage,
    FeedbackFormPage,
    AdmissionDetailPage,
    ChangePasswordPage,
    LeavePage,
    AddLeavePage,
    ForgotPasswordPage,
    ScheduleDetailPage,
    PunchesPage,
    MessagesPage,
    FeedbackDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SchedulesPage,
    PerformancePage,
    AttendancePage,
    AdmissionPage,
    ProfilePage,
    PerformanceDetailPage,
    AttendanceDetailPage,
    DocumentsPage,
    FeedbackPage,
    FeedbackFormPage,
    AdmissionDetailPage,
    ChangePasswordPage,
    LeavePage,
    AddLeavePage,
    ForgotPasswordPage,
    ScheduleDetailPage,
    PunchesPage,
    MessagesPage,
    FeedbackDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppAvailability,
    Network,
    Firebase, 
	FirebaseX,
    InAppBrowser,
   // Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EdubiggServiceProvider,
  ]
})
export class AppModule {}
