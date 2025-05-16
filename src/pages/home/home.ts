import { Component } from '@angular/core';
import { NavController,Events, ViewController,NavParams,Platform,AlertController,MenuController } from 'ionic-angular';

//import { SchedulesPage } from '../schedules/schedules';
//import { PerformancePage } from '../performance/performance';
//import { AttendancePage } from '../attendance/attendance';
//import { AdmissionPage } from '../admission/admission'; 
import { ProfilePage } from '../profile/profile';
//import { DocumentsPage } from '../documents/documents';
//import { FeedbackPage } from '../feedback/feedback';
//import { PunchesPage } from '../punches/punches';  
//import { MessagesPage } from '../messages/messages';
//import { ChangePasswordPage } from '../change-password/change-password';
//import { LeavePage } from '../leave/leave';
import { LoginPage } from '../login/login';

import { Storage } from '@ionic/storage';
import { EdubiggServiceProvider } from '../../providers/edubigg-service/edubigg-service';
 
@Component({ 
  selector: 'page-home',
  templateUrl: 'home.html'
}) 
export class HomePage {

  rootPage:any = ProfilePage;  
  //swtiched to this page for debugging
  //rootPage:any = LeavePage;    
  studentData  :any;
  studentName : any;
  studentImage : any;
  items = [];
  constructor(public events : Events,public menuCtrl: MenuController,public platform: Platform,private storage: Storage,public navParams: NavParams,public navCtrl: NavController, public viewCtrl:ViewController, public eduService : EdubiggServiceProvider, public alertCtrl: AlertController) {
   
    events.publish('setuserData'); 

    this.storage.get('userData').then((val) => {
      if(val.Parent == "Student"){
        this.items = [{name:"Schedules",icon:"ios-clock-outline"},
        {name:"Performance",icon:"ios-pulse-outline"},
        {name:"Attendance",icon:"ios-people-outline"},
        {name:"Admission",icon:"ios-paper-outline"},
        {name:"Documents",icon:"ios-document-outline"}, 
        {name:"Feedback",icon:"ios-chatboxes-outline"},
        {name:"Punches",icon:"ios-chatboxes-outline"},
        {name:"Messages",icon:"ios-clock-outline"},
        {name:"Profile",icon:"ios-person-outline"}, 
        {name:"Change Password",icon:"ios-lock-outline"}, 
        {name:"Logout",icon:"ios-log-out-outline"}];
      }else{
        this.items = [{name:"Schedules",icon:"ios-clock-outline"},
        {name:"Performance",icon:"ios-pulse-outline"},
        {name:"Attendance",icon:"ios-people-outline"},
        {name:"Admission",icon:"ios-paper-outline"},
        {name:"Documents",icon:"ios-document-outline"},    
        {name:"Leaves",icon:"ios-calendar-outline"},
        {name:"Feedback",icon:"ios-chatboxes-outline"},
        {name:"Punches",icon:"ios-chatboxes-outline"},
        {name:"Messages",icon:"ios-clock-outline"},
        {name:"Profile",icon:"ios-person-outline"},
        {name:"Change Password",icon:"ios-lock-outline"},      
        {name:"Logout",icon:"ios-log-out-outline"}]; 
      }
    });   
    
  this.studentName = this.navParams.data.displayName;
  console.log("this.navParams.data.studentImage =",this.navParams.data.studentImage);

  this.storage.get('url').then((val) => {
   // receiptUrl = val+"student/student_admissions_details_SinglePaidPDF_App.asp?AdmissionFeesDetailID="+data.AdmissionFeesDetailID+"&FeesID="+data.FeesID+"&BranchID="+bID;
    this.studentImage = (this.navParams.data.studentImage)
  });

  //this.studentImage = (this.navParams.data.studentImage ? this.navParams.data.studentImage:"assets/images/default-user.png")
  
  this.studentData = this.navParams.data;

  // platform.registerBackButtonAction(() => {
  //   this.storage.get('menuAction').then((val) => {
  //     if(val == "menuOpen"){
  //      // close menu 
  //      this.menuCtrl.close();
  //     }
  //   });

  //   this.storage.get('page').then((val) => {
  //     if(val == "SchedulesPage"){
  //       this.logout();
  //     }else{
  //       this.viewCtrl.dismiss()
  //     }
  //   });


  // });
  }

ionViewWillEnter() {
  this.viewCtrl.showBackButton(false);
}
ionViewDidEnter(){
  console.log("ionViewDidEnter home")
}


menuClosed() {
  console.log("menuClose")
  this.storage.set('menuAction', "menuClose");
}

menuOpened() {
  console.log("menuOpen")
  this.storage.set('menuAction', "menuOpen");
}

// sliderClick(event,data){
//   console.log("event  : "+JSON.stringify(data));
//   switch(data.name){
//     case "Schedules":
//     this.storage.set('page', "SchedulesPage");
//     this.rootPage = SchedulesPage;
//     //this.navCtrl.push(SchedulesPage);
//     break;
//     case "Performance":
//     //this.rootPage = PerformancePage;
//     //this.storage.set('page', "PerformancePage");
//     this.navCtrl.push(PerformancePage);
//     break;
//     case "Attendance":
//     // this.rootPage = AttendancePage;
//     // this.storage.set('page', "AttendancePage");
//     this.navCtrl.push(AttendancePage);
//     break;
//     case "Admission":
//     //this.rootPage = AdmissionPage;
//    // this.storage.set('page', "AdmissionPage");
//     this.navCtrl.push(AdmissionPage);
//     break;
//     case "Profile":
//     //this.rootPage = ProfilePage;
//    // this.storage.set('page', "ProfilePage");
//     this.navCtrl.push(ProfilePage);
//     break;
//     case "Documents":
//     //this.rootPage = DocumentsPage;
//    // this.storage.set('page', "DocumentsPage");
//     this.navCtrl.push(DocumentsPage);
//     break; 
//     case "Change Password":
//     //this.rootPage = DocumentsPage;
//    // this.storage.set('page', "ChangePasswordPage");
//     this.navCtrl.push(ChangePasswordPage);
//     break;
//     case "Leaves":
//     //this.rootPage = DocumentsPage;
//    // this.storage.set('page', "LeavePage");
//     this.navCtrl.push(LeavePage);
//     break;
//     case "Feedback":
//     //this.rootPage = FeedbackPage;
//    // this.storage.set('page', "FeedbackPage");
//     this.navCtrl.push(FeedbackPage);
//     break;
//     case "Logout":
//     this.logout()
//     break;
    
//   }
// }

logout(){
  
  let prompt = this.alertCtrl.create({
    title: 'Logout',
    message: "Are you sure you want to logout??",
    buttons: [
      {
        text: 'Yes',
        handler: data => {
          this.storage.set('id',null);
          this.rootPage = LoginPage;
         // this.navCtrl.pop();

        }
      },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
    ]
  });
  prompt.present();

}

}
