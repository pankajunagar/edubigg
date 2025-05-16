import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { AttendanceDetailPage } from '../attendance-detail/attendance-detail';
import * as _ from 'underscore';
import { Storage } from '@ionic/storage';
import { EdubiggServiceProvider } from '../../providers/edubigg-service/edubigg-service';
import moment from 'moment';
/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {
 
  attendance: any;
  //datelist: any;
  //dateatt : any;
  tempdate : any;
  finalArray: any = [];
  nodata = false;
  fromDate = "";
  toDate = "";
  totalD = 0;
  totalP = 0;
  totalA = 0;
  totalPercentage = "";
  validdata = true;
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public eduService: EdubiggServiceProvider) {
    var start = moment().startOf('isoWeek').format('YYYY-MM-DD');
    var end = moment().endOf('isoWeek').format('YYYY-MM-DD');

    this.totalD = 0;
    this.totalP = 0;
    this.totalA = 0;

    this.fromDate = start;
    this.toDate = end;

    this.getAttendanceData(this.fromDate, this.toDate);

  }
  
  ionViewDidLoad() {
    this.storage.set('page', "AttendancePage");
    console.log('ionViewDidLoad AttendancePage');
  }
  ionViewDidEnter(){
    this.storage.set('page', "AttendancePage");
    console.log("ionViewDidEnter AttendancePage")
  }

  /**attendancerowClick(data) {
    console.log("data", data);
    this.navCtrl.push(AttendanceDetailPage, {
      totalD: data.Total,
      present: data.TotalPresent,
      absent: data.TotalAbsent,
      percentage: data.percentage,
      SubjectID: data.SubjectID,
      StandardID : data.StandardID,
      StandardName: data.StandardName,
      SubjectName: data.SubjectName,
    });
  }**/

  // ionViewDidEnter(){
  //   this.getAttendanceData(this.fromDate, this.toDate);
  // }

  resetData() {
    var start = moment().startOf('isoWeek').format('YYYY-MM-DD');
    var end = moment().endOf('isoWeek').format('YYYY-MM-DD');

    this.fromDate = start;
    this.toDate = end;

    this.getAttendanceData(this.fromDate, this.toDate);
  }
  refresh(refresher) {
    this.getAttendanceData(this.fromDate, this.toDate);
    refresher.complete();
  }

  getStartDate() {
    var startD = this.fromDate || "";
    var endD = this.toDate || "";
    //console.log("startD ",startD ," endD =",endD);
    var date = new Date();
    console.log("startD ", startD, " endD =", endD, " date =", date);
    this.getAttendanceData(startD, endD)
  }

  // rowClick(data){
  //   this.navCtrl.push(PerformanceDetailPage,{
  //     StudentID:data.StudentID,
  //     AdmissionFeesDetailID:data.AdmissionFeesDetailID,
  //     StandardID:data.StandardID,
  //     SubjectID:data.SubjectID,
  //   });
  // }

  refreshPerformance(refresher) {
    this.getAttendanceData(this.fromDate, this.toDate);
    refresher.complete();
  }

  getAttendanceData(startD, endD) {
    var _self = this;
    //var totalD = 0;
    //var totalP = 0;
    //var totalA = 0;
    var data = null;
    //var classes = [];
    //var finalData = [];
    this.storage.get('userData').then((val) => {
      console.log('Your id is', val);
      data = {
        StudentID: val.StudentID,
        // AdmissionFeesDetailID : val.AdmissionFeesDetailID,
        FromDate : startD,
        //FromDate : '2018-06-01',
        // StandardID : val.StandardId,
        // SubjectID : null,
        ToDate : endD,
		LoginRole: val.Parent
		
      };

      this.eduService.getAttendance(data).then((response) => {
        console.log(response['Data']);
        if (response['Data'].length == 0) {
          this.attendance = [];
          console.log(data);
          this.nodata = true;
        } else {
          this.nodata = false;
          //   this.totalPercentage = response['totalPercentage'];
          //   this.totalP = response['totalP'];
          //   this.totalD = response['totalD'];
          //   this.totalA = response['totalA']; 
          //   this.nodata = false;
          //  // this.validdata = true;

          //   this.attendance = response['Data'];



         /** _.each(response['Data'], function (value, key) {
            console.log("element =", value);
            console.log("v.Total = ", value.Total);
            totalD++;
            if(value.PresentAbsent == 0)
              totalP++;
            else
              totalA++;
            //totalA = totalA + value.TotalAbsent;
            classes.push(value.StandardName);
          });

          this.totalD = totalD;
          this.totalP = totalP;
          this.totalA = totalA;

          **/
          /**var unique = classes.filter(function (item, i, ar) { return ar.indexOf(item) === i; });

          console.log("unique =", unique, this.totalD);
          _.each(unique, function (v, k) {
            var abc = _.where(response['Data'], { StandardName: v });
            finalData.push(abc);
          });**/
          
          this.attendance = response['Data'];

      

          console.log(this.attendance); 
  
          //this.datelist = _.chain(this.attendance).pluck('LectureDate').unique().value();
          //console.log(this.datelist);
          //console.log(this.dateatt);
          var tempdate = '';
          var array = [];
          _self.finalArray = [];
          _.each(this.attendance,function(i,v){
            // console.log("HELLO TEST");
            // console.log(v);
              // console.log(i.LectureDate)
              if(tempdate == i.LectureDate){
                array.push(i)
              }
              else{
                if(v!=0){
                  _self.finalArray.push(array);
                  array = [];
                }
                array.push(i);
              }
              tempdate = i.LectureDate
          })
          console.log(array);
          _self.finalArray.push(array);
          console.log(_self.finalArray);
          //console.log(this.attendance[0].LectureDate);
          _self.tempdate = _self.attendance[0].LectureDate;
          console.log(_self.tempdate);
        }
      }).catch((error) => {
        console.log("error = ", error)
      });

    });

  }


}
