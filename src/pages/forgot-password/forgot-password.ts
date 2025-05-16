import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { EdubiggServiceProvider } from '../../providers/edubigg-service/edubigg-service';
/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  forgotForm : any;
  submitAttempt : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder, public eduService: EdubiggServiceProvider) {

    this.forgotForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  // private presentToast(text) {
  //   let toast = this.toastCtrl.create({
  //     message: text,
  //     duration: 3500,
  //     position: 'bottom'
  //   });
  //   toast.present();

  //   // toast.onDidDismiss(() => {
  //   //   console.log('Dismissed toast');
  //   // });
  // }

//   resetPassword(){
//     this.submitAttempt = true;
//     if (this.forgotForm.valid) {

//       var data = {
//         UserName: this.forgotForm.value.username
//       }

//       // this.eduService.login(data).then((userData) => {

//       // }).catch((error) => {
//       //   console.log("error = ", error)
//       // });
//   }
// }

}
