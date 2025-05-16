//import { HttpClient } from '@angular/common/http';
//import { Http, Headers, RequestOptions, RequestOptionsArgs, RequestMethod, Request } from '@angular/http';
import { Http, Headers} from '@angular/http';
import { LoadingController, ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';
/*
  Generated class for the EdubiggServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EdubiggServiceProvider {

  //uri: string = "http://api.gsgworld.xyz/api/";
  //uri: string = "http://api.sambodhiinstitute.in/api/";
  uri: string = "http://api.avalonlearning.in/api/";
  constructor(public storage : Storage, public http: Http, public loadingCtrl: LoadingController, public network: Network, private toastCtrl: ToastController) {
    console.log('Hello EdubiggServiceProvider Provider');
    this.storage.set('url',"http://www.avalonlearning.in/");
  }


  getMenu(){
    return this.postNeoData(this.uri + 'Login/fetchStudentMenu',{});
  }

  getPunch(data){
     return this.postNeoData(this.uri + 'Student/fetchPunches', data);
  }

  getMessages(data){
    return this.postNeoData(this.uri + 'fcm/getMessage', data);
  }

  login(data) {
    return this.postNeoData(this.uri + 'Login/Login', data);
  }
 
  changePassword(data) {
    return this.postNeoData(this.uri + 'Student/changePassword', data);
  }

  getLeave(data) {
    return this.postNeoData(this.uri + 'Leaves/fetchLeaves', data);
  }

  addLeave(data) {
    return this.postNeoData(this.uri + 'Leaves/addLeave', data);
  }

  fcm(data) {
    return this.postNeoData(this.uri + 'fcm/saveFcmData', data);
  }

  getScheduleData(data) {
    return this.postNeoData(this.uri + 'Schedule/fetchDashboard', data);
  }

  getPerformance(data) {
    return this.postNeoData(this.uri + 'Performance/fetchPerformance', data);
  }

  getPerformanceDetail(data) { 
    return this.postNeoData(this.uri + 'Performance/fetchPerformanceDetails', data);
  }

  getFeedback(data) {
    return this.postNeoData(this.uri + 'Feedback/fetchFeedback', data);
  }

  addFeedback(data) { 
    return this.postNeoData(this.uri + 'Feedback/addFeedback', data);
  }

  getFeedbackDetails(data) {
    return this.postNeoData(this.uri + 'Feedback/fetchFeedbackDetail', data);
  }

  addFeedbackComment(data){
   return this.postNeoData(this.uri + 'Feedback/addFeedbackComment', data);
  }

  getAttendance(data) { 
    return this.postNeoData(this.uri + 'Attendance/fetchAttendance', data);
  }

  getAttendanceDetail(data) {  
    return this.postNeoData(this.uri + 'Attendance/fetchAttendanceDetails', data);
  }

  getAdmission(data) { 
    return this.postNeoData(this.uri + 'Admission/fetchAdmission', data);
  }

  getAdmissionDetail(data) { 
    return this.postNeoData(this.uri + 'Admission/fetchAdmissionDetails', data);
  }
  
  getDocuments(data) {
    return this.postNeoData(this.uri + 'Document/fetchDocument', data);
  }

  getProfile(data) {
    return this.postNeoData(this.uri + 'Student/fetchProfile', data);
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3500,
      position: 'bottom'
    });
    toast.present();
  }

  postNeoData(uri, data) {
    if(data.hasOwnProperty('fcmToken') && data.fcmToken == null) // HMD++ 190811
      data.fcmToken='';

    if (this.network.type != "none") {
      let loading = null;
      loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Please wait...'
      });

      loading.present();

      var headers = new Headers();
      console.log(data);
      headers.append('Content-Type', 'application/json');

      return new Promise((resolve, reject) => {
        this.http.post(uri, data, { headers: headers })
          .map(res => res.json())
          .subscribe(data => {
            // this.data = data;
            resolve(data);
            setTimeout(e => {
              loading.dismiss();
            }, 500);
            console.log(data.status);
          }, error => {
            reject(error.json());
            console.log('here is problem');
            this.presentToast("Sorry, Something went wrong.");
            setTimeout(e => {
              loading.dismiss();
            }, 500);
          });
      });
    }else{
      this.presentToast("No internet connection. Please check your connection settings and try again.");
    }
  }
}
