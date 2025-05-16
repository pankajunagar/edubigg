
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AppAvailability } from '@ionic-native/app-availability';



/**
 * Generated class for the ScheduleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule-detail',
  templateUrl: 'schedule-detail.html',
})
export class ScheduleDetailPage {
  StandardName: any;
  SubjectName: any;
  ExamName: any;
  TopicName: any;
  LectureTimeEnd: any;
  LectureTimeStart: any;
  LectureDate: any;
  FacultyName: any;
  scheduleType: number;
  JoinURL: string;
  ViewURL: string;
  LoginRole: string;
  ActualLectureTime: string;
  AdmissionFeesDetailID: string;
  LectureScheduleID: string;

  constructor(public alertCtrl: AlertController, private iab: InAppBrowser, private appAvailability: AppAvailability, public viewCtrl: ViewController, public platform: Platform, public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage, private _sanitizer: DomSanitizer) {

    this.StandardName = this.navParams.data.StandardName;
    this.SubjectName = this.navParams.data.SubjectName;
    this.ExamName = this.navParams.data.ExamName;
    this.TopicName = this.navParams.data.TopicName;
    this.LectureTimeEnd = this.navParams.data.LectureTimeEnd;
    this.LectureTimeStart = this.navParams.data.LectureTimeStart;
    this.LectureDate = this.navParams.data.LectureDate;
    this.FacultyName = this.navParams.data.FacultyName;

    this.scheduleType = this.navParams.data.scheduleType;
    this.JoinURL = this.navParams.data.JoinURL;
    this.ViewURL = this.navParams.data.ViewURL;
    this.LoginRole = this.navParams.data.LoginRole;
    this.ActualLectureTime = this.navParams.data.ActualLectureTime;
    this.AdmissionFeesDetailID = this.navParams.data.AdmissionFeesDetailID;
    this.LectureScheduleID = this.navParams.data.LectureScheduleID;





    // platform.registerBackButtonAction(() => {
    //   this.storage.get('page').then((val) => {
    //     console.log("back val ScheduleDetailPage =",val)
    //     if(val == "ScheduleDetailPage"){
    //       this.viewCtrl.dismiss();
    //     }else if(val == "SchedulesPage"){
    //       this.logout();
    //     }else{
    //       console.log("inside else");
    //       this.viewCtrl.dismiss();
    //       //this.navCtrl.pop();
    //     }
    //   })
    // });

    // platform.registerBackButtonAction(() => {
    //   this.viewCtrl.dismiss();
    // })

  }



  // logout(){
  //   let prompt = this.alertCtrl.create({
  //     title: 'Logout',
  //     message: "Are you sure you want to logout?",
  //     buttons: [
  //       {
  //         text: 'Yes',
  //         handler: data => {
  //           this.storage.set('id',null);
  //           this.navCtrl.pop();
  //         }
  //       },
  //         {
  //           text: 'No',
  //           role: 'cancel',
  //           handler: () => {
  //             this.storage.set('page', "SchedulesPage");
  //             console.log('Cancel clicked');
  //           }
  //         }
  //     ]
  //   });
  //   prompt.present();
  // }

  ionViewDidLoad() {
    this.storage.set('page', "ScheduleDetailPage");
    console.log('ionViewDidLoad ScheduleDetailPage');
  }
  ionViewDidEnter() {
    this.storage.set('page', "ScheduleDetailPage");
    console.log("ionViewDidEnter schedule")
    console.log("det", this.navParams.data)
    var retrievedObject = localStorage.getItem('token');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
  }

  stringIsNumber(s) {
    var x = +s; // made cast obvious for demonstration
    return x.toString() === s;
  }

  async JoinMeeting(url) {
    let edubiggUrl = await this.storage.get('url');
    try {
      await (await fetch(`${edubiggUrl}branch/apis/OnlineLectureAttendance.asp?LectureScheduleID=${this.LectureScheduleID}&AdmissionFeesDetailID=${this.AdmissionFeesDetailID}`)).text();
    }
    catch (ex) {
      console.log("Error while attendance", ex)
    }

    let profile = { StudentFName: "Student", StudentLName: "", StudentMName: "", StudentID: 0 };
    if (localStorage.profileData) {
      profile = JSON.parse(localStorage.profileData)
    }
    let studentName = `${profile.StudentFName}%20${profile.StudentMName}%20${profile.StudentLName}`;
    let userinfoStr = `userInfo.displayName="${studentName}"&userInfo.email=""&config.startWithAudioMuted=true&config.startWithVideoMuted=false`
    try {
      let app = "com.onlinelectpis";
      if(typeof url === "string"){
        if(url.includes('meet.google')){
          app = "com.google.android.apps.meetings";
        }
        else if(url.includes('zoom.us')){
          app = "us.zoom.videomeetings";
        }
        else if(url.includes('microsoft.com')){
          app = "com.microsoft.teams";
        }
       // else if(url.includes('webex.com')){
       //   app = "com.cisco.webex.meetings";
       // }
		else {
			window.open(url, "_blank");
		}
      }
      this.appAvailability.check(app)
        .then(
          (yes: boolean) => {
            // window.open("ebjitsi://onlinelectures.in/" + url);
            // let uri = `ebjitsi://onlinelectures.in/${url}?1=2&studentid=${profile.StudentID}&meetingid=${url}&afd=${this.AdmissionFeesDetailID}&scheduleid=${this.LectureScheduleID}&apiUrl=${edubiggUrl}#${userinfoStr}`;
            // console.log("uri", uri)
            window.open(url)
          },
          (no: boolean) => {
            // window.alert("Meeting app is not installed on.");
            window.open("market://details?id="+app, "_system");
            return;
          }
        );

    }
    catch (ex) {
      console.log(ex);
      window.alert("Unexpected Error: " + ex.message)
    }
  }

  ViewLecture(ViewURL) {
    this.iab.create(ViewURL, "_blank", { toolbar: 'no', location: "no" });
  }

  shouldShowJoinView() {
    return (this.LoginRole == "Student" && this.scheduleType == 1)
  }

  isLectureCompleted() {
    return this.ActualLectureTime
  }

  isTodayLecture() {
    let dtLecture = new Date(this.LectureDate);
    let dtNow = new Date();
    return (
      dtLecture.getDate() == dtNow.getDate() &&
      dtLecture.getMonth() == dtNow.getMonth() &&
      dtLecture.getFullYear() == dtNow.getFullYear()
    )
  }

}
