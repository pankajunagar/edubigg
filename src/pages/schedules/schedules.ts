import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';

import { ScheduleDetailPage } from '../schedule-detail/schedule-detail';
import moment from 'moment';
import * as _ from 'underscore';
import { Storage } from '@ionic/storage';
import { EdubiggServiceProvider } from '../../providers/edubigg-service/edubigg-service';
/**
 * Generated class for the SchedulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedules',
  templateUrl: 'schedules.html',
})
export class SchedulesPage {
  schedule = [];
  fromDate = "";
  toDate = "";
  nodata = false;
  studentName: any;
  d1: any;
  d2: any;
  constructor(public alertCtrl: AlertController, public platform: Platform, private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public eduService: EdubiggServiceProvider) {
    // 

    console.log("this.navParams.data; = ", this.navParams.data);

    //let data = moment().format('YYYY-MM-DD');
    //let time = moment().format('HHmmss');

    // var start = moment().startOf('week').add(1,'days').format('YYYY-MM-DD');
    // var end = moment().endOf('week').add(1,'days').format('YYYY-MM-DD');

    // var start = moment().startOf('week').subtract(6,'days').format('YYYY-MM-DD');
    // var end = moment().endOf('week').subtract(6,'days').format('YYYY-MM-DD');



    var start = moment().startOf('isoWeek').format('YYYY-MM-DD');
    var end = moment().endOf('isoWeek').format('YYYY-MM-DD');

    this.fromDate = start;
    this.toDate = end;


    this.getSchedule(this.fromDate, this.toDate);

    // platform.registerBackButtonAction(() => {
    //   this.storage.get('page').then((val) => {
    //     console.log("back val SchedulesPage =",val)
    //     if(val == "SchedulesPage"){          
    //       this.logout();
    //     }
    //   })
    // });

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
    this.storage.set('page', "SchedulesPage");
    console.log('ionViewDidLoad SchedulesPage');
  }
  ionViewDidEnter() {
    this.storage.set('page', "SchedulesPage");
    console.log("ionViewDidEnter schedule")
  }

  openSchedule(data) {
    console.log("bjeja", data)
    this.navCtrl.push(ScheduleDetailPage, {
      StandardName: data.StandardName,
      SubjectName: data.SubjectName,
      TopicName: data.TopicName,
      LectureTimeEnd: data.LectureTimeEnd,
      LectureTimeStart: data.LectureTimeStart,
      LectureDate: data.LectureDate,
      FacultyName: data.FacultyName,
      ExamName: data.ExamName,
      scheduleType: data.scheduleType,
      JoinURL: data.JoinURL,
      ViewURL: data.ViewURL,
      LoginRole: data.LoginRole,
      ActualLectureTime: data.ActualLectureTime,
      AdmissionFeesDetailID: data.AdmissionFeesDetailID,
      LectureScheduleID: data.LectureScheduleID,

    });
  }

  stringIsNumber(s) {
    var x = +s; // made cast obvious for demonstration
    return x.toString() === s;
  }

  refresh(refresher) {
    this.getSchedule(this.fromDate, this.toDate);
    refresher.complete();
  }

  resetData() {
    // var start = moment().startOf('week').add(1,'days').format('YYYY-MM-DD');
    // var end = moment().endOf('week').add(1,'days').format('YYYY-MM-DD');

    // var start = moment().startOf('week').subtract(6,'days').format('YYYY-MM-DD');
    // var end = moment().endOf('week').subtract(6,'days').format('YYYY-MM-DD');

    var start = moment().startOf('isoWeek').format('YYYY-MM-DD');
    var end = moment().endOf('isoWeek').format('YYYY-MM-DD');

    this.fromDate = start;
    this.toDate = end;

    this.getSchedule(this.fromDate, this.toDate);
  }


  getStartDate() {
    var startD = this.fromDate || "";
    var endD = this.toDate || "";
    //console.log("startD ",startD ," endD =",endD);
    var date = new Date();
    console.log("startD ", startD, " endD =", endD, " date =", date);
    this.getSchedule(startD, endD)
  }

  // var data = null;
  // this.storage.get('userData').then((value) => {
  //		this.parent = value.Parent;
  //		console.log('ParentJai:'+this.parent);
  //	});

  getSchedule(startD, endD) {
    var data = null;
    var time = [];
    var finalData = [];
    this.storage.get('userData').then((val) => {
      console.log('Your id is', val.StudentID);
      console.log('Your Role', val.Parent);
      data = {
        StudentID: val.StudentID || this.navParams.data.studentId,
        FirstDateOfWeek: startD || this.d1,
        LastDateOfWeek: endD || this.d2,
        start_Date: startD || this.d1,
        end_Date: endD || this.d2,
        LoginRole: val.Parent
      };





      this.eduService.getScheduleData(data).then((response: any) => {
        // response.Data.forEach(element => {
        //   element.ViewURL= "https://www.dropbox.com/s/mji55pwxqhdvztb/hello37687263894324%20on%202020-06-23%2011%3A07.mp4?dl=0";
        // });
        console.log("user data = ", (response));

        //console.log("Data with role:" +data);
        if (response['Data'].length == 0) {
          this.schedule = [];
          this.nodata = true;
        } else {
          this.nodata = false;
          //  this.schedule.push(_.sortBy(response['Data'],'LectureDate'));

          _.each(response['Data'], function (value, key) {
            console.log("element =", value);
            value.LoginRole = data.LoginRole;
            time.push(value.LectureDate);
          });


          var unique = time.filter(function (item, i, ar) { return ar.indexOf(item) === i; });

          console.log("unique =", unique);
          _.each(unique, function (v, k) {
            var abc = _.where(response['Data'], { LectureDate: v });
            finalData.push(abc);
          });

          this.schedule = finalData;
          console.log("this.schedule = " + JSON.stringify(finalData));
        }
      }).catch((error) => {
        console.log("error = ", error)
      });

    });

  }

  display(time) {
    console.log("print");
    var timeString = time;
    var H = +timeString.substr(0, 2);
    var h = (H % 12) || 12;
    var ampm = H < 12 ? "AM" : "PM";
    timeString = h + timeString.substr(2, 3) + ampm;
    return timeString;
  }

}
