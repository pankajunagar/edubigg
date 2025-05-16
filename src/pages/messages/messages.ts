import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import moment from 'moment';

import { Storage } from '@ionic/storage';
//import * as _ from 'underscore';
import { EdubiggServiceProvider } from '../../providers/edubigg-service/edubigg-service';
//import { FCM } from '@ionic-native/fcm';

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage { 
  nodata = false;
  messages = [];
  fromDate = "";
  toDate = "";
  d1: any;
  d2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public eduService: EdubiggServiceProvider) {
    //let data = moment().format('YYYY-MM-DD');
    //let time = moment().format('HHmmss');

    var start = moment().startOf('isoWeek').format('YYYY-MM-DD');
    var end = moment().endOf('isoWeek').format('YYYY-MM-DD');

    this.fromDate = start;
    this.toDate = end;
    
    this.getMessages(this.fromDate, this.toDate);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }


   refresh(refresher) {
    this.getMessages(this.fromDate, this.toDate);
    refresher.complete();
  }

  resetData() {
    var start = moment().startOf('isoWeek').format('YYYY-MM-DD');
    var end = moment().endOf('isoWeek').format('YYYY-MM-DD');

    this.fromDate = start;
    this.toDate = end;

    this.getMessages(this.fromDate, this.toDate);
  }


  getStartDate() {
    var startD = this.fromDate || "";
    var endD = this.toDate || "";
    //console.log("startD ",startD ," endD =",endD);
    var date = new Date();
    console.log("startD ", startD, " endD =", endD, " date =", date);
    this.getMessages(startD, endD)
  } 

  getMessages(startD, endD) {
    var data = null;
    this.storage.get('userData').then((val) => {
      //console.log('Your id is', val.StudentID);
      data = {
        StudentID: val.StudentID || this.navParams.data.studentId,
        FromDate: startD || this.d1,
        ToDate: endD || this.d2,
        userrole : val.Parent,
		LoginRole: val.Parent

        //StudentId: "5201620172255",
        //FromDate: "2018-06-01",
        //ToDate: "2018-06-30",  
        //userrole: "Student",
           
      };

      console.log(data);


      this.eduService.getMessages(data).then((response) => {
        if (response['Data'].length == 0) {
          console.log("hello here");
          this.nodata = true;
          
        } else {
          //console.log(response['Data']);
          this.nodata = false;
          
          // this.messages = response['Data'];
          this.messages = [];


          let messagesData = response['Data'];
          let parsedMessages = [];

          messagesData.map( ( msg, idx ) => {
            let msgData = msg;
            // console.log( `${idx} : `,  msg.Noti_Description );
            
            msgData.Noti_Description = msg.Noti_Description.replaceAll( '<br>', ' <br> ' ); 
            msgData.Noti_Description = this.linkify( msg.Noti_Description );
            parsedMessages.push( msgData );
          });

          this.messages = parsedMessages;

          console.log( 'messages : ', this.messages);
          
        }
      }).catch((error) => {
        console.log("error = ", error);
        
      });

    });

  }



  linkify(plainText): string {
    let replacedText;
    let replacePattern1;
    let replacePattern2;
    let replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = plainText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    return replacedText;
   }

}
