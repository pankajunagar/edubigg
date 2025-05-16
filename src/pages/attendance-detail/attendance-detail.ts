import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as _ from 'underscore';
import { Storage } from '@ionic/storage';
import { EdubiggServiceProvider } from '../../providers/edubigg-service/edubigg-service';
//import moment from 'moment';
/**
 * Generated class for the AttendanceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendance-detail',
  templateUrl: 'attendance-detail.html',
})
export class AttendanceDetailPage {

  attendancedata : any;
  nodata = false;
  totalD = "";
  present = "";
  absent = "";
  standardName = "";
  subjectName = "";
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams,public eduService: EdubiggServiceProvider) {
    

    this.totalD = this.navParams.data.totalD;
    this.absent = this.navParams.data.absent;
    this.present = this.navParams.data.present;
    this.standardName = this.navParams.data.StandardName;
    this.subjectName = this.navParams.data.SubjectName;


      // if (this.navParams.data.data.length == 0) {
      //   this.attendancedata = [];
      //   this.nodata = true;
      // } else {
      //   this.nodata = false;
      //   this.attendancedata = this.navParams.data.data;
      // }
      this.getAttendanceDetail(this.navParams.data.SubjectID);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendanceDetailPage');
  }

  refresh(refresher) {
    this.getAttendanceDetail(this.navParams.data.SubjectID);
    refresher.complete();
  }

  getAttendanceDetail(subject){
    var data = null;
    var time = [];
    var finalData = [];
    this.storage.get('userData').then((val) => {
      console.log('Your id is', val);
      data = {
        StudentID: val.StudentID,
        // AdmissionFeesDetailID : val.AdmissionFeesDetailID,
        // FromDate : startD,
         //StandardID : val.StandardId,
         SubjectID : subject,
        // ToDate : endD,
        // Parent : 0,
      };

      this.eduService.getAttendanceDetail(data).then((response) => {
        console.log("user data = " + JSON.stringify(response));
   
        _.each(response['Data'], function (value, key) {
          console.log("element =", value);

          time.push(value.LectureDate);
        });


        var unique = time.filter(function (item, i, ar) { return ar.indexOf(item) === i; });

        console.log("unique =", unique);
        _.each(unique, function (v, k) {
          var abc = _.where(response['Data'], { LectureDate: v });
          finalData.push(abc);
        });

        this.attendancedata = finalData;
      //  this.attendancedata = response['Data'];

      }).catch((error) => {
        console.log("error = ", error)
      });
    });

      
  //   this.totalD = data.totalD;
  //   this.absent = data.absent;
  //   this.present = data.present;
  //     if (data.data.length == 0) {
  //       this.attendancedata = [];
  //       this.nodata = true;
  //     } else {
  //       this.nodata = false;
  //       this.attendancedata = data.data;
  //     }
  // }
  }

}
