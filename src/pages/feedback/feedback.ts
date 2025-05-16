import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FeedbackFormPage } from '../feedback-form/feedback-form';
import { FeedbackDetailsPage } from '../feedback-details/feedback-details';

import { Storage } from '@ionic/storage';
//import moment from 'moment';
import * as _ from 'underscore';
import { EdubiggServiceProvider } from '../../providers/edubigg-service/edubigg-service';
/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  feedback : any;
  nodata = false;
  feedbackData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,public eduService: EdubiggServiceProvider) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter  FeedbackPage');
    this.getFeedbackData();
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter FeedbackPage');
  }

  openFeedbackForm(){
    this.navCtrl.push(FeedbackFormPage);
  }

  openFeedbackDetails(issueId){
  this.navCtrl.push(FeedbackDetailsPage,{
  data: issueId
  });
  }

  getFeedbackData() { 
    var data = null;
    var time = [];
    var finalData = [];
    this.storage.get('id').then((val) => {
      console.log('Your id is', val);
      data = {
        StudentId: val,
      };

      this.eduService.getFeedback(data).then((response) => {
        console.log("user data = " + JSON.stringify(response));
        if (response['Data'].length == 0) {
          this.feedback = [];
          this.nodata = true;
        } else {
          this.nodata = false;
          //this.feedback = response['Data'];

          _.each(response['Data'], function (value, key) {
            console.log("element =", value);

            time.push(value.IssueDate);
          });


          var unique = time.filter(function (item, i, ar) { return ar.indexOf(item) === i; });

          console.log("unique =", unique);
          _.each(unique, function (v, k) {
            var abc = _.where(response['Data'], { IssueDate: v });
            finalData.push(abc);
          });

          //this.feedback = finalData;
          this.feedbackData = response['Data']
          //console.log(feedbackData);
        }
      }).catch((error) => {
        console.log("error = ", error)
      });

    });

  }

  refreshFeedback(refresher) {
    this.getFeedbackData();
    refresher.complete();
  }


}
