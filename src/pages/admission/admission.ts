import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { EdubiggServiceProvider } from '../../providers/edubigg-service/edubigg-service';

import { AdmissionDetailPage } from '../admission-detail/admission-detail';
/**
 * Generated class for the AdmissionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admission',
  templateUrl: 'admission.html',
})
export class AdmissionPage {

  admission : any;
  nodata = false;
  validdata = true;
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams,public eduService: EdubiggServiceProvider) {
    this.getAdmission();
  }

  ionViewDidLoad() {
    this.storage.set('page', "AdmissionPage");
    console.log('ionViewDidLoad AdmissionPage');
  }
  ionViewDidEnter(){
    this.storage.set('page', "AdmissionPage");
    console.log("ionViewDidEnter AdmissionPage")
  }

  // ionViewDidEnter(){
  //   this.getAdmission();
  // }
  refreshDoc(refresher) {
    this.getAdmission();
    refresher.complete();
  }

  getAdmission() { 
    var data = null;
    this.storage.get('userData').then((val) => {
      console.log('Your id is', val.StudentID);
	  console.log('Your Role', val.Parent);
      data = {
        StudentId: val.StudentID,
		LoginRole: val.Parent
      };

      this.eduService.getAdmission(data).then((response) => {
        console.log("user data = " + JSON.stringify(response));
        if (response['Data'].length == 0) {
          this.admission = [];
          this.nodata = true;
        } else {
          this.validdata = true;
          this.nodata = false;
          this.admission = response['Data'];
        }
      }).catch((error) => { 
        console.log("error = ", error)
      });

    });

  }


  rowClick(data){
    console.log("data = ",data)
    this.navCtrl.push(AdmissionDetailPage,{
      AdmissionFeesDetailID : data.AdmissionFeesDetailID,

    })
  }



}
