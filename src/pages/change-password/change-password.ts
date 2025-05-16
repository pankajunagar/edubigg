import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,ViewController } from 'ionic-angular';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { Storage } from '@ionic/storage';
import { EdubiggServiceProvider } from '../../providers/edubigg-service/edubigg-service';
//import moment from 'moment';
/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

  changePasswordForm: any;
  submitAttempt: any;
  toast: any;
  match: any;
  code: any;
  constructor(public viewCtrl:ViewController, private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public eduService: EdubiggServiceProvider, private toastCtrl: ToastController) {
    this.changePasswordForm = formBuilder.group({
      currentP: ['', Validators.compose([Validators.required])],
      newP: ['', Validators.compose([Validators.required])],
      cnewP: ['', Validators.compose([Validators.required])],
    });

  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3500,
      position: 'bottom'
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }

  changePassword() {
    this.storage.get('userData').then((val) => {
      this.submitAttempt = true;
      var data = null;
      if (this.changePasswordForm.value.newP == this.changePasswordForm.value.cnewP) {
        this.match = false;
      } else {
        this.match = true;
      }
      if (this.changePasswordForm.valid && !this.match) {

        this.storage.get('userData').then((val) => {
          console.log('Your id is', val);
          data = {
            StudentId: val.StudentID,
            AdmissionFeesDetailID: val.AdmissionFeesDetailID,
            StandardID: val.StandardId,
			Parent: val.Parent,
            CurrentPassword: this.changePasswordForm.value.currentP,
            NewPassword: this.changePasswordForm.value.newP,
            ConfirmPassword: this.changePasswordForm.value.cnewP,

          };

          this.eduService.changePassword(data).then((response) => {
            console.log("response =", response);
            // if(response['Data'][0].code ==1 || response['Data'][0].code == "1"){
            //     this.viewCtrl.dismiss();
            // }
			this.code = response['Code'];
			//console.log("Code aaya "+this.code); 
				// if code==0 then error
			if(this.code==0){
				this.presentToast(response['Message']);
			}
			else{
            this.presentToast(response['Data'][0].message);
			//this.changePasswordForm.reset();
			//this.changePasswordForm.currentP.reset();
           // this.changePasswordForm.newP.reset();
           // this.changePasswordForm.cnewP.reset();
			}
            
            

          }).catch((error) => {
            console.log("error = ", error)
          });
        });
      } else {
        console.log("else")
      }
    });
  }

}
