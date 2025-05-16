import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ToastController } from 'ionic-angular';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { EdubiggServiceProvider } from '../../providers/edubigg-service/edubigg-service';
import moment from 'moment';
/**
 * Generated class for the AddLeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-leave',
  templateUrl: 'add-leave.html',
})
export class AddLeavePage {

  leaveForm: any;
  submitAttempt: any;
  toast : any;
  check : any;
  note : any;
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public eduService : EdubiggServiceProvider,private toastCtrl: ToastController,public viewCtrl : ViewController) {
    this.leaveForm = formBuilder.group({
      fromDate: ['', Validators.compose([Validators.required])],
      toDate: ['', Validators.compose([Validators.required])],
      note: ['', Validators.compose([Validators.required])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddLeavePage');
    this.check = false;
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3500,
      position: 'bottom'
    });
    toast.present();
  }
	noteHandler(keyCode){
		console.log(keyCode);
		let ths = this;
		setTimeout(function(){
			var charStr = String.fromCharCode(keyCode);
		if(keyCode == 34 || charStr == "&" || keyCode == 39 || keyCode == 59)
			ths.note = ths.note.slice(0, -1);
		console.log(ths.note);
			
		},100);
		
	}
  addLeave(){
    this.storage.get('userData').then((val) => {
    this.submitAttempt = true;
    if (this.leaveForm.valid) { 
     
        var data = {
          StudentID : val.StudentID,
          BranchID :val.BranchID,
          LeaveOpener : val.Parent,
          LeaveStartDate : this.leaveForm.value.fromDate,
          LeaveEndDate : this.leaveForm.value.toDate,
          LeaveReason : this.leaveForm.value.note,
          ActualTime : moment().format("YYYY-MM-DD"),
        };
  
      this.eduService.addLeave(data).then((leaveData) => {
        console.log("user data = " + JSON.stringify(leaveData));

        if(leaveData['Code'] == 1){
         this.presentToast("Leave was marked successfully");
        }
        else{
          this.presentToast(leaveData['Message']|| "Sorry, Something went wrong.");
        }
       

       this.viewCtrl.dismiss();
      }).catch((error) => {
        this.viewCtrl.dismiss();
        console.log("error = ",error)
      });

      
    }});
  }

  showbutton(){
    console.log(this.check);
    if(this.check == true){
      this.check = false;
      return false;
    }
    if(this.check == false){
      this.check = true; 
      return false;
    }
  }


}
