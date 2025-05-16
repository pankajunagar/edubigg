import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { EdubiggServiceProvider } from '../../providers/edubigg-service/edubigg-service';
import * as _ from 'underscore';


/**
 * Generated class for the AdmissionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admission-detail',
  templateUrl: 'admission-detail.html',
})
export class AdmissionDetailPage {

  admissionDetailData: any;
  nodata: any;
  nohit: any;
  table: any;
  CourseName: any;
  IncludeTax = "";
  EnableTax = "";
  StudentCourseFees = 0;
  ServiceTaxTotal = 0;
  Amount_ = 0;
  uncleared = 0;
  bounceAmount = 0;
  PaidDate = "";
  PaymentModeName = "";
  table3: any;
  table5: any;
  table6: any;
  table7  :any;
  table8 :any;
  table11 :any;
  url :any;
 parent:any;	
  table3Flag  = false;
  table5Flag  = false;
  table6Flag  = false;
  table7Flag =  false;
  table8Flag =  false;

  admissionDate = "";
  fees = "";
  additionalFees = "";
  discount = "";
  total = "";
  OnlyOutstanding = "";

  total_ = "";
  paid_ = "";
  balance_ = "";
  bounced_ = "";
  uncleared_ = "";

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public eduService: EdubiggServiceProvider) {
    this.getAdmissionDetail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmissionDetailPage');
  }



  printFees (data){
    var receiptUrl  = null;
    this.storage.get('userData').then((value) => {
      var bID =  value.BranchID == undefined ? 1:value.BranchID;
	  
      this.storage.get('url').then((val) => {
        receiptUrl = val+"student/student_admissions_details_SinglePaidPDF_App.asp?AdmissionFeesDetailID="+data.AdmissionFeesDetailID+"&FeesID="+data.FeesID+"&BranchID="+bID;
        console.log(receiptUrl);
        window.open(receiptUrl,"_blank");
      });
    });
  }
  

  payFees (data){
   // var url = null;
    var url = data.PAY_URL;
    var flag = data.PAY_ONLINE;
	console.clear();
	console.log(data);
    if(flag==1){
      console.log("Payment URL Hit");
      console.log(url);
      window.open(url,"_blank");
	}
  }



  getAdmissionDetail() {
    var data = null;
	
	
	this.storage.get('userData').then((value) => {
		this.parent = value.Parent;
		console.log('ParentArun:'+this.parent);
	});
    this.storage.get('id').then((val) => {
      console.log('Your id is', this.navParams.data.AdmissionFeesDetailID);
      console.log('Your id is', this.navParams.data);
      data = {
        AdmissionFeesDetailID: this.navParams.data.AdmissionFeesDetailID,
        Parent: this.parent,//"Father",
        ParentID: 150,
        StudentID: "120162017097",
        DomainName: "xyz.com",
        Amount: 150
       
      };

      //var amount = 0;
      //var bounceAmt = 0;

      this.eduService.getAdmissionDetail(data).then((response) => {
        console.log("user data = " + JSON.stringify(response));
        if (_.size(response['Data']) == 0) {
          this.admissionDetailData = [];
          this.nodata = true;
        } else {
          this.nodata = false;
          this.admissionDetailData = response['Data'];
          this.table = this.admissionDetailData.Table;
          this.CourseName = this.admissionDetailData.Table1[0].CourseName;
          this.StudentCourseFees = (_.size(this.admissionDetailData.Table2) > 0 ? this.admissionDetailData.Table2[0].StudentCourseFees : 0);
          this.IncludeTax = (_.size(this.admissionDetailData.Table2) > 0 ? this.admissionDetailData.Table2[0].IncludeTax : '');
          this.EnableTax = (_.size(this.admissionDetailData.Table2) > 0 ? this.admissionDetailData.Table2[0].EnableTax : '');
          
          //this.Amount_ = (_.size(this.admissionDetailData.Table5) > 0 ? this.admissionDetailData.Table5[0].Amount : 0);

          this.table5 = this.admissionDetailData.Table5;

          //_.size(this.admissionDetailData.Table5) > 0 ? this.Table5Flag = true : this.Table5Flag = false
          _.size(this.admissionDetailData.Table5) > 0 ? this.table5Flag  = true : this.table5Flag = false
          _.size(this.admissionDetailData.Table6) > 0 ? this.table6Flag = true : this.table6Flag = false
          _.size(this.admissionDetailData.Table7) > 0 ? this.table7Flag = true : this.table7Flag = false
          _.size(this.admissionDetailData.Table8) > 0 ? this.table8Flag = true : this.table8Flag = false

        //  this.table5 = this.admissionDetailData.Table5;
          this.table6 = this.admissionDetailData.Table6;
          // _.each(this.admissionDetailData.Table5, function (v, k) {
          //   amount = (amount + v.Amount)
          // });
          // this.Amount_ = amount;

          this.total_ = this.admissionDetailData.Table3[0].Total ||0;
          this.paid_ = this.admissionDetailData.Table3[0].Recived ||0;
          this.balance_ = this.admissionDetailData.Table3[0].Balance1 ||0;
          this.uncleared_ = this.admissionDetailData.Table3[0].Uncleared ||0;
          this.bounced_ = this.admissionDetailData.Table4[0].BouncedAmt ||0;


          this.ServiceTaxTotal = (_.size(this.admissionDetailData.Table5) > 0 ? this.admissionDetailData.Table5[0].ServiceTaxTotal : 0);
          this.uncleared = (_.size(this.admissionDetailData.Table4) > 0 ? this.admissionDetailData.Table4[0].uncleared : 0);
          // this.bounceAmount =  (_.size(this.admissionDetailData.Table6) > 0 ? this.admissionDetailData.Table6[0].Amount : 0); 


          // _.each(this.admissionDetailData.Table6, function (v, k) {
          //   bounceAmt = (bounceAmt + v.Amount)
          // });
          // this.bounceAmount = bounceAmt;

          this.PaidDate = (_.size(this.admissionDetailData.Table5) > 0 ? this.admissionDetailData.Table5[0].PaidDate : "");
          this.PaymentModeName = (_.size(this.admissionDetailData.Table5) > 0 ? this.admissionDetailData.Table5[0].PaymentModeName : "");



          this.admissionDate = (_.size(this.admissionDetailData.Table9) > 0 ? this.admissionDetailData.Table9[0].AdmissionDate : "");

          this.fees = (_.size(this.admissionDetailData.Table9) > 0 ? this.admissionDetailData.Table9[0].Fee : "");

          this.additionalFees = this.admissionDetailData.Table10[0].AdditionalFees != null ? this.admissionDetailData.Table10[0].AdditionalFees : 0;

          console.log("Final Data"+this.admissionDetailData.Table10[0].AdditionalFees);

          this.discount = (_.size(this.admissionDetailData.Table9) > 0 ? this.admissionDetailData.Table9[0].DiscountAmount : "");

          this.total = (_.size(this.admissionDetailData.Table9) > 0 ? this.admissionDetailData.Table9[0].StudentCourseFees : "");

          //this.bounceTxt  = this.admissionDetailData.Table6[0].Amount;  
          // this.table5 = this.admissionDetailData.Table5;
			console.log(this.admissionDetailData);
          this.table7 = this.admissionDetailData.Table7;

          this.table8 = this.admissionDetailData.Table8;

          console.log("this.admissionDetailData 1 = ", this.admissionDetailData);
          console.log("this.admissionDetailData 2 = ", this.admissionDetailData.Table);
          console.log("this.admissionDetailData  3= ", this.admissionDetailData.Table1[0].CourseName);

          this.OnlyOutstanding = this.admissionDetailData.Table11[0].OnlyOutstanding;

          if(this.admissionDetailData.Table11[0].OnlyOutstanding == 0)
            {  
              console.log("OnlyOutstanding is 1");
              this.table5Flag = false;
            }

          console.log(this.CourseName);
        }
      }).catch((error) => {  
        console.log("error = ", error);
        this.nohit = true;
        console.log("Please contact admin :",this.nohit);
      });

    });
	
	

  }

  

}
