import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Storage } from '@ionic/storage';
import { EdubiggServiceProvider } from '../../providers/edubigg-service/edubigg-service';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profileData :any;
  nodata : any;
  studentImage : any;
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public eduService: EdubiggServiceProvider) {
  this.getProfile();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  getProfile() {
    var data = null;
    this.storage.get('id').then((val) => {
      console.log('Your id is', val);
      data = {
        StudentId: val,
      };

      this.eduService.getProfile(data).then((response) => {
        if (response['Data'].length == 0) {
          this.profileData = [];
          this.nodata = true;
        } else {
          this.nodata = false;
          this.profileData = response['Data'];
          console.log(this.profileData);
          localStorage.profileData = JSON.stringify(this.profileData[0]);
          this.studentImage = (response['Data'][0].StudentImage)
          
        }
      }).catch((error) => {
        console.log("error = ", error)
      });

    });

  }


}
