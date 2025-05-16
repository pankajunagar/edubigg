import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddLeavePage } from '../add-leave/add-leave';

import { Storage } from '@ionic/storage';
//import * as _ from 'underscore';
import { EdubiggServiceProvider } from '../../providers/edubigg-service/edubigg-service';
/**
 * Generated class for the LeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leave',
  templateUrl: 'leave.html',
})
export class LeavePage {

  leaveData :any;
  nodata = false;
  check = false;
  leaveapp :any;
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams,public eduService: EdubiggServiceProvider) {
  //this.getLeaveData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeavePage');
  }

  refreshLeaves(refresher) {
    refresher.complete();
    this.getLeaveData();
  }

  openLeaveForm(){
    this.navCtrl.push(AddLeavePage);
  }

  ionViewDidEnter(){
    this.getLeaveData();
  }

  getLeaveData() { 
    var data = null;
    //var check;

    let myapp = this;

    this.storage.get('userData').then((val) => {
      console.log(val);
      data = {
        StudentId: val.StudentID,
      };
      console.log(data);
      this.eduService.getLeave(data).then((response) => {
        console.log("user data = " + JSON.stringify(response));
        if (response['Data'].length == 0) {
          this.leaveData = [];
          this.nodata = true;
        } else {
          
		  console.log(response['Data']);
		  if(response['Data'][0].hasOwnProperty('LeaveStartDate')){
			this.leaveData = response['Data'];
			console.log(" i kkkmn")
			this.nodata = false;
		  }else{ this.nodata = true; }
          //console.log(response['Data'][0].LeaveApplication);
          this.leaveapp = response['Data'][0].LeaveApplication;
          //this.leaveapp = leaveData[0].LeaveApplication;
	console.log("parent",val.Parent);
          if(val.Parent == "Student"){
              myapp.check = false;
          }
          else{
               if(this.leaveapp == 0){
                myapp.check = true;
                console.log(myapp.check);
               }
          }
		  console.log("showing button",myapp.check);
		//  if(val.Parent != "Student"){
        //       if(this.leaveapp == 0){
        //        this.check = true;
        //        console.log(this.check);
        //       }
        //  }
		  
		//  if(val.Parent == "Student"){
		//	  if(this.leaveapp == 0){
        //        this.check = true;
        //        console.log(this.check);
        //       }
        //  }
          
		  
        }
      }).catch((error) => {
        console.log("error = ", error)
      });

    });
 
    // this.storage.get('userData').then((val)=>{
    //   console.log(val);
    //   if(val.Parent == "Student"){
    //     this.check = false;
    //     //console.log(this.leaveapp);
    //     console.log(this.check);
    //     console.log(this.leaveapp);
    //   }
    //   else{
    //     this.check = true;
    //     console.log(this.check);
    //   }
      
    // });

  }


}
