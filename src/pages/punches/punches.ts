import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,AlertController } from 'ionic-angular';

//import { PunchesPage } from '../punches/punches';
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
  selector: 'page-punches',
  templateUrl: 'punches.html',
})
export class PunchesPage {
  punch = [];
  schedule = [];
  finalArray: any = [];
  fromDate = "";
  toDate = "";
  nodata = false;
  studentName: any;
  d1: any;
  d2: any;
  punchData: any;
  constructor(public alertCtrl:AlertController, public platform : Platform, private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public eduService: EdubiggServiceProvider) 
  {
    // 

    console.log("this.navParams.data; = ", this.navParams.data);

    //let data = moment().format('YYYY-MM-DD');
    //let time = moment().format('HHmmss');

    var start = moment().startOf('isoWeek').format('YYYY-MM-DD');
    var end = moment().endOf('isoWeek').format('YYYY-MM-DD');

    this.fromDate = start;
    this.toDate = end;
    
    this.getSchedule(this.fromDate, this.toDate);

  }


  ionViewDidLoad() {
    this.storage.set('page', "PunchesPage");
    console.log('ionViewDidLoad PunchesPage');
  }
  ionViewDidEnter(){
    this.storage.set('page', "PunchesPage");
    console.log("ionViewDidEnter Punches")
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
    //var date = new Date();
    //console.log("startD ", startD, " endD =", endD, " date =", date);
    this.getSchedule(startD, endD)
  } 

  getSchedule(startD, endD) {
    var _self = this;
    var data = null;
    //var time = [];
    //var punchData = [];
    this.storage.get('userData').then((val) => {
      console.log('Your id is', val.StudentID);
      data = {
        StudentID: val.StudentID || this.navParams.data.studentId,
        FromDate: startD || this.d1,
        ToDate: endD || this.d2,
        BranchID : val.BranchID,
		LoginRole: val.Parent

        //StudentId: "120162017101",
        //BranchID: "1",
        //FromDate: "2018-01-01",
        //ToDate: "2018-06-01"
           
      };

      console.log(data);


      this.eduService.getPunch(data).then((response) => {
        console.log("user data = " + JSON.stringify(response));
        //console.log(response);
        if (response['Data'].length == 0) {
          this.schedule = [];
          this.nodata = true;
          console.log("if");
        } else {
          //console.log(response['Data']);
          this.nodata = false;
          this.punchData = response['Data'];
          console.log(this.punchData);
          var tempdate = '';
          var array = [];
          console.log('i.BioMetricLogInDate');
          _self.finalArray = []; 
          this.finalArray = [];
          console.log(this.finalArray);
          _.each(this.punchData,function(i,v){
              var date = i.BioMetricLogInDate.split("T")
              console.log(date[0])
              if(tempdate == date[0]){
                array.push(i)
              }
              else{
                if(v!=0){
                  _self.finalArray.push(array);
                  array = [];
                }
                array.push(i);
              }
              tempdate = date[0]
          })
          _self.finalArray.push(array);
          console.log(_self.finalArray);
          //  this.schedule.push(_.sortBy(response['Data'],'LectureDate'));

                
          // _.each(response['Data'], function (value, key) {
          //   console.log("element =", value);

          //   this.punch.push(value);
          // });
          // console.log(this.punch);


          // this.schedule = punch;
          // console.log("this.punch = " + JSON.stringify(punch));
        }
      }).catch((error) => {
        console.log("error = ", error);
        

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
