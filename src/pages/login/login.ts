import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';
//import { ForgotPasswordPage } from '../forgot-password/forgot-password';

import { EdubiggServiceProvider } from '../../providers/edubigg-service/edubigg-service';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {

  loginForm: any;
  submitAttempt: any;
  toast: any;
  password : any;
  username  : any;
  //show_password : any;


  constructor(public platform: Platform, private storage: Storage, private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public eduService: EdubiggServiceProvider) {
    //this.show_password = false;
    //return;
    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
    this.storage.set('page',"LoginPage")
	
	

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.storage.set('page',"LoginPage")
  }

 
  // showHide() {
  //   this.show_password = this.show_password + 1;
  //   console.log(this.show_password);
  // }


  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3500,
      position: 'bottom'
    });
    toast.present();

    // toast.onDidDismiss(() => {
    //   console.log('Dismissed toast');
    // });
  }

  openForgotPage(){
    
    //this.navCtrl.push(ForgotPasswordPage);
    this.storage.get('url').then((val) => {
      window.open(val+"Student/forgetpwd.asp", '_blank');
    });
    
  }

 
  login() {

    this.submitAttempt = true;
    if (this.loginForm.valid) {

      var data = {
        UserName: this.loginForm.value.username,
        UserPassword: this.loginForm.value.password,
      };

      this.eduService.login(data).then((userData) => {
        console.log(userData); //return false;

        if (userData['Data'].length == 0) {
          this.presentToast(userData['Message'] || "Sorry, Something went wrong.");
        } else {
          this.username = "";
          this.password = "";
          this.loginForm.value.username = "";
          this.loginForm.value.password = "";
          this.storage.set('id', userData['Data'][0].StudentID);
          this.storage.set('userData', userData['Data'][0]);
          this.storage.set('parent', userData['Data'][0]);
          this.storage.set('parent2', userData['Data'][0].Parent);

         

          this.storage.get('token').then((val) => {
            console.log(userData['Data']);
            var tokendata_ = {
              AdmissionfeesdetailId: userData['Data'][0].AdmissionFeesDetailID,
              fcmToken: val,
              userRole: userData['Data'][0].Parent
            };
              console.log(tokendata_)
            this.eduService.fcm(tokendata_).then((tokenData) => {
              this.navCtrl.push(HomePage, {
                studentId: userData['Data'][0].StudentID,
                studentName: userData['Data'][0].StudentUserName,
                displayName: userData['Data'][0].Name,
                studentImage: userData['Data'][0].StudentImage,
              });

            }).catch((error) => {
              this.navCtrl.push(HomePage, {
                studentId: userData['Data'][0].StudentID,
                studentName: userData['Data'][0].StudentUserName,
                displayName: userData['Data'][0].Name,
                studentImage: userData['Data'][0].StudentImage,
              });
            });
          });

        }
      }).catch((error) => {
        console.log("error = ", error)
      });

      //
    }
  }
}
