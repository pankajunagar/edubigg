// import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import * as _ from 'underscore';
import { Storage } from '@ionic/storage';
import { EdubiggServiceProvider } from '../../providers/edubigg-service/edubigg-service';
import {Component, ViewChild} from '@angular/core';
import { ToastController } from 'ionic-angular';
//import { FeedbackPage } from '../feedback/feedback';
/**
 * Generated class for the FeedbackDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@IonicPage()
@Component({
  selector: 'page-feedback-details',
  templateUrl: 'feedback-details.html',
  // templateUrl: 'build/pages/chatPage/chatPage.html',
  // queries: {
  //   content: new ViewChild('content')
  // }
})
export class FeedbackDetailsPage {
  @ViewChild('content') content:any;
	issueId : any;
	feedback : any;
	feedbackDetailData : any;
	nodata = false;
  nohit = false;
	feedbackDetail: any;
	Title:any;
  comment:any;
  desp: any;
  IssueNotPickedUp :any;


  constructor(public storage: Storage, public toastCtrl: ToastController , public navCtrl: NavController, public navParams: NavParams,public eduService: EdubiggServiceProvider) {
 
	  this.issueId = navParams.get('data');
  }

  ionViewDidLoad() {
    this.getFeedbackDetailData();
    //this.content.scrollToBottom(300);//300ms animation speed
  }

  // ionViewDidEnter(){
  //   this.content.scrollToBottom(300);//300ms animation speed
  // }

  ionViewWillEnter() {
    this.content.scrollToBottom(300);
    console.log("ionViewWillEnter")
  }
  
 

  getFeedbackDetailData() { 

    var data = null; 
    //var time = [];
    //var finalData = [];
    var id = String(this.issueId);
      data = {
        IssueID: id,
      };
      console.log(data);
      // return false;
      this.eduService.getFeedbackDetails(data).then((response) => {
      	console.log(response);
        if (response['Data'].length == 0) {
          this.feedback = [];
          this.nodata = true;
        } else {
          this.nodata = false;
          this.feedbackDetail = response['Data'];
          this.Title = this.feedbackDetail[0].IssueTitle;
          this.desp = this.feedbackDetail[0].IssueDescription;
		  this.IssueNotPickedUp = this.feedbackDetail[0].IssueNotPickedUp;
		//  console.log("Yhaa pe" + this.IssueNotPickedUp)
        }
      }).catch((error) => {
        console.log("error = ", error);
      });  
  }

   /**refresh(refresher) {
            this.getFeedbackDetailData();
            refresher.complete();
          }**/

  // getComments() { 
  //   var data = null;
  //   var id = parseInt(this.issueId);
  //     data = {
  //       IssueID: id,
  //     };
  //     console.log(data);
  //     // return false;
  //     this.eduService.getFeedbackDetails(data).then((response) => {
  //       if (response['Data'].length == 0) {
  //         this.feedback = [];
  //         this.nodata = true;
  //       } else {
  //         this.nodata = false;
  //         var fdb =  this.feedbackDetail = response['Data'][0];
  //         console.log(fdb);
  //         this.Title = fdb['IssueTitle'];
  //         this.Desp = fdb['IssueDescription'];
  //       }
  //     }).catch((error) => {
  //       console.log("error = ", error);
  //     });  
  // }

  sendComment(){
    console.log('i m in');
    this.storage.get('parent2').then((val) => {
    	var issueId = String(this.issueId);
      
      var data = {
        IssueID : issueId,
        comment : this.comment,
        Parent : val
      };
      console.log(data);
      this.eduService.addFeedbackComment(data).then((response) => {
        var dt = response['Data'][0].Column1;
        console.log(dt);
        this.nohit==false;

        if(this.nohit==false){
          let toast = this.toastCtrl.create({
            message: response['Data'][0].message,
            duration: 3000,
            position: 'top',
            cssClass: 'color:green',
          });

          toast.onDidDismiss(() => {
            console.log('Dismissed toast');
          });

          toast.present();
          setInterval(function(){
          //this.rootPage = FeedbackPage;
          //this.pageArray.push("FeedbackPage");
          }, 300);
           // window.location.reload();
           // getFeedbackDetailData();
       
          }

          this.getFeedbackDetailData();
          this.comment = " ";

       //console.log(dt);
      }).catch((error) => {
        console.log("error = ", error);
        this.nohit=true;
      });
    }); 
  }
}
