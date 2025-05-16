import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,ViewController } from 'ionic-angular';


import { PerformanceDetailPage } from '../performance-detail/performance-detail';

import { Storage } from '@ionic/storage';
import * as _ from 'underscore';
import { EdubiggServiceProvider } from '../../providers/edubigg-service/edubigg-service';
/**
 * Generated class for the PerformancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 

@IonicPage()
@Component({
  selector: 'page-performance',
  templateUrl: 'performance.html',
})
export class PerformancePage {

  performance : any;
  nodata = false;
  constructor(public viewCtrl : ViewController,public platform : Platform,private storage: Storage, public navCtrl: NavController, public navParams: NavParams,public eduService: EdubiggServiceProvider) {
    
    this.getPerformanceData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerformancePage');
  }

  // ionViewDidEnter(){
  //   this.getPerformanceData();
  // }

  rowClick(data){
    this.navCtrl.push(PerformanceDetailPage,{
      StudentID:data.StudentID,
      AdmissionFeesDetailID:data.AdmissionFeesDetailID,
      StandardID:data.StandardID,
      SubjectID:data.SubjectID,
    });
  }

  refreshPerformance(refresher) { 
    refresher.complete();
    this.getPerformanceData();
  }

  getPerformanceData() {
    var data = null;
    var classes = [];
    var finalData = [];
	this.storage.get('userData').then((val) => {
      console.log('Your id is', val.StudentID);
	  console.log('Your Role', val.Parent);  
      data = {
        StudentID: val.StudentID ,
		LoginRole: val.Parent
      };
    

      this.eduService.getPerformance(data).then((response) => {
        console.log("user data = " + JSON.stringify(response));
        if (response['Data'].length == 0) {
          this.performance = [];
          this.nodata = true;
        } else {
          this.nodata = false;
        //  this.performance = response['Data'];

 
          _.each(response['Data'], function (value, key) {
            console.log("element =", value);

            classes.push(value.StandardName);
          });


          var unique = classes.filter(function (item, i, ar) { return ar.indexOf(item) === i; });

          console.log("unique =", unique);
          _.each(unique, function (v, k) {
            var abc = _.where(response['Data'], { StandardName: v });
            finalData.push(abc);
          });

          this.performance = finalData;

        }
      }).catch((error) => {
        console.log("error = ", error)
      });

    });

  }




}
