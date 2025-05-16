import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,ViewController } from 'ionic-angular';

import { EdubiggServiceProvider } from '../../providers/edubigg-service/edubigg-service';

/**
 * Generated class for the PerformanceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-performance-detail',
  templateUrl: 'performance-detail.html',
})
export class PerformanceDetailPage {

  performanceDetail :any;
  nodata = false;
  StandardName = "";
  SubjectName  = "";
  //singleValue = 40;
  constructor(public viewCtrl : ViewController,public platform : Platform, public navCtrl: NavController, public navParams: NavParams,public eduService: EdubiggServiceProvider) {
  
    this.getPerformanceDetail(this.navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerformanceDetailPage');
  }
  refreshPerformanceDetail(refresher) {
    this.getPerformanceDetail(this.navParams.data);
    refresher.complete();
  }

  getPerformanceDetail(data){
    
    data = {
        StudentID: data.StudentID,
       // StandardID: data.StandardID,
        SubjectID: data.SubjectID,
       // AdmissionFeesDetailID: data.AdmissionFeesDetailID
    };

    this.eduService.getPerformanceDetail(data).then((response) => {
      console.log("user data = " + JSON.stringify(response));
      if (response['Data'].length == 0) {
        this.performanceDetail = [];
        this.nodata = true;
      } else {
        this.nodata = false;

        console.log("response['Data'][0].StandardName =",response['Data'][0].StandardName);
        console.log("response['Data'][0].StandardName =",response['Data'].StandardName);

        this.StandardName = response['Data'][0].StandardName;
        this.SubjectName = response['Data'][0].SubjectName;
        this.performanceDetail = response['Data'];
      }
    }).catch((error) => {
      console.log("error = ", error)
    });

  }

}
