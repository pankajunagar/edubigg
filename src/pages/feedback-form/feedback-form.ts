import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { EdubiggServiceProvider } from '../../providers/edubigg-service/edubigg-service';
import moment from 'moment';
/**
 * Generated class for the FeedbackFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage() 
@Component({
  selector: 'page-feedback-form', 
  templateUrl: 'feedback-form.html',
})
export class FeedbackFormPage {

  feedbackForm: any; 
  submitAttempt: any;
  toast : any;
  title : any;
   description : any;
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public eduService : EdubiggServiceProvider,private toastCtrl: ToastController,public viewCtrl : ViewController) {
    this.feedbackForm = formBuilder.group({
      type: ['', Validators.compose([Validators.required])],
      title: ['', Validators.compose([Validators.required])],
      desc: ['', Validators.compose([Validators.required])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackFormPage');
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3500,
      position: 'bottom'
    });
    toast.present();
  }
  
  noteHandler(keyCode, whc){
		console.log(keyCode);
		let ths = this;
		setTimeout(function(){
			var charStr = String.fromCharCode(keyCode);
		if(keyCode == 34 || charStr == "&" || keyCode == 39 || keyCode == 59)
			ths[whc] = ths[whc].slice(0, -1);
		console.log(ths[whc]);
			
		},100);
		
	}

  postFeedback(){
    this.storage.get('userData').then((val) => {
    this.submitAttempt = true;
    if (this.feedbackForm.valid) { 
     
        var data = {
          StudentID : val.StudentID,
          ActualTimevalue : moment().format("YYYY-MM-DD"),
          IssueStatus : "Open",
          Parent : val.Parent,
          IssueCategory2 : this.feedbackForm.value.type,
          issue_title2 : this.feedbackForm.value.title,
          issue_description2 : this.feedbackForm.value.desc,
        };

        console.log(data);
  
      this.eduService.addFeedback(data).then((userData) => {
        console.log("user data = " + JSON.stringify(userData));

       if(userData['Data'].length == 0){
        this.presentToast(userData['Message']|| "Sorry, Something went wrong.");
       }

       this.viewCtrl.dismiss();
      }).catch((error) => {
        this.viewCtrl.dismiss();
        console.log("error = ",error)
      });

      
    }
  });
  }

}
