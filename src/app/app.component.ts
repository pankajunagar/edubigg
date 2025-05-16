import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,Events, ToastController, AlertController,  NavController,IonicApp, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
// import { LoginPage } from '../pages/login/login';
// import { ProfilePage } from '../pages/profile/profile';
// import { SchedulesPage } from '../pages/schedules/schedules';

import { SchedulesPage } from '../pages/schedules/schedules';
import { PerformancePage } from '../pages/performance/performance';
import { AttendancePage } from '../pages/attendance/attendance';
import { AdmissionPage } from '../pages/admission/admission'; 
import { ProfilePage } from '../pages/profile/profile';
import { DocumentsPage } from '../pages/documents/documents';
import { FeedbackPage } from '../pages/feedback/feedback';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { LeavePage } from '../pages/leave/leave';
import { LoginPage } from '../pages/login/login';
import { PunchesPage } from '../pages/punches/punches';  
import { MessagesPage } from '../pages/messages/messages';
import { Storage } from '@ionic/storage';
//import { FCM } from '@ionic-native/fcm'; 
import { Firebase } from '@ionic-native/firebase';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
//import { FeedbackDetailsPage } from '../pages/feedback-details/feedback-details';
import { EdubiggServiceProvider } from '../providers/edubigg-service/edubigg-service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: NavController;

  //rootPage:any = LoginPage;
  rootPage :any;
  items :any;
  studentName  :any;
  studentImage  :any;
  public res: any={};

  pageArray = ["SchedulesPage"];
  constructor(public events : Events,public menuCtrl: MenuController,private ionicApp: IonicApp,public fcm : Firebase, public alertCtrl: AlertController,private storage: Storage,public toastCtrl: ToastController,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public eduService: EdubiggServiceProvider, public firebase: FirebaseX) {
    this.initializeApp();
    
  

    var data = {
      SchedulesPage : SchedulesPage,
      AttendancePage : AttendancePage,
      AdmissionPage : AdmissionPage
    }
         //back button handle
        //Registration of push in Android and Windows Phone
        //var lastTimeBackPress = 0;
        //var timePeriodToExit  = 2000;

        events.subscribe('setuserData',() => {
          this.setUserData();
        });

        platform.registerBackButtonAction(() => {
            // get current active page
          //  let view = this.nav.getActive();
        console.log("page array",this.pageArray,this.pageArray.length);
        console.log("this.pageArray = ",this.pageArray[1]);

       // var pageName = this.pageArray[(this.pageArray.length-2)];
        var page1 = this.pageArray[(this.pageArray.length-1)];
        var pageName = this.pageArray[(this.pageArray.indexOf(page1)-1)];

        

        console.log("data[pageName] >",data[pageName]);

        console.log("pageName = ",pageName);
        let activePortal = this.ionicApp._loadingPortal.getActive() ||
        this.ionicApp._modalPortal.getActive() ||
        this.ionicApp._toastPortal.getActive() ||
        this.ionicApp._overlayPortal.getActive();

        let view = this.nav.getActive();
        let currentRootPage = view.component;
        console.log("activePortal",activePortal);
        console.log("view",view);
        console.log("currentRootPage",currentRootPage);
        



          
        if (this.menuCtrl.isOpen()) {
          console.log("this.menuCtrl",this.menuCtrl);
          this.menuCtrl.close();
        } else if (view.component.name == "HomePage") {
              
                this.storage.get('page').then((val) => {
                  console.log("back val =",val)
                  if(val == "SchedulesPage"){
                    this.storage.set('page', "");
                    this.pageArray = [];
                    //this.logout();
                  }else if(val == "LoginPage"){
                    this.storage.set('page', "");
                    
                    let prompt = this.alertCtrl.create({
                      title: 'Exit',
                      message: "Are you sure you want to exit?",
                      buttons: [
                        {
                          text: 'Yes',
                          handler: data => {
                            this.platform.exitApp(); //Exit from app
                          }
                        },
                          {
                            text: 'No',
                            role: 'cancel',
                            handler: () => {
                              console.log('Cancel clicked');
                            }
                          }
                      ]
                    });
                    prompt.present();

                  }else if(val == "ScheduleDetailPage"){
                    console.log("inside ScheduleDetailPage");
                    this.storage.set('page', "");
                    this.pageArray.push("SchedulesPage");
                    this.rootPage = SchedulesPage;
                  //  this.nav.push(SchedulesPage)
                    //this.nav.pop();
                  }
                  // else if(val == "AttendancePage"){
                  //   console.log("inside AttendancePage");
                  //   this.storage.set('page', "");
                  //   //this.rootPage = HomePage;
                  //   this.nav.push(HomePage)
                  //   //this.nav.pop();
                  // }else if(val == "AdmissionPage"){
                  //   console.log("inside AdmissionPage");
                  //   this.storage.set('page', "");
                  //   //this.rootPage = HomePage;
                  //   this.nav.push(HomePage)
                  //   //this.nav.pop();
                  // }
                });
              //  this.logout();
        }else if (view.component.name == "LoginPage") {
            let prompt = this.alertCtrl.create({
              title: 'Exit',
              message: "Are you sure you want to exit?",
              buttons: [
                {
                  text: 'Yes',
                  handler: data => {
                    this.platform.exitApp(); //Exit from app
                  }
                },
                  {
                    text: 'No',
                    role: 'cancel',
                    handler: () => {
                      console.log('Cancel clicked');
                    }
                  }
              ]
            });
            prompt.present();
          } 
          else if (view.component.name == "SchedulesPage") {
            this.storage.set('page', "");
            this.pageArray = [];
			let prompt = this.alertCtrl.create({
              title: 'Exit',
              message: "Are you sure you want to exit?",
              buttons: [
                {
                  text: 'Yes',
                  handler: data => {
                    this.platform.exitApp(); //Exit from app
                  }
                },
                  {
                    text: 'No',
                    role: 'cancel',
                    handler: () => {
                      console.log('Cancel clicked');
                    }
                  }
              ]
            });
            prompt.present();
          //  this.logout();
          }else if (view.component.name == "AttendancePage" || view.component.name == "AdmissionPage" || view.component.name == "PerformancePage" || view.component.name == "FeedbackPage" || view.component.name == "LeavePage" || view.component.name == "ChangePasswordPage" || view.component.name == "ProfilePage" || view.component.name == "DocumentsPage" || view.component.name == "PunchesPage" || view.component.name == "MessagesPage") { 
            this.storage.set('page', "");
            this.rootPage = HomePage;
          //  this.nav.push(HomePage)
            this.pageArray.push(pageName);
            //this.rootPage = data[pageName];
            
          }
          // else if (view.component.name == "AdmissionPage") {
          //     this.storage.set('page', "");
          //     console.log("data[pageName] ,",data[pageName]);
          //     this.pageArray.push(pageName);
          //     //this.nav.push(data[pageName])
          //    // this.rootPage = data[pageName];
          //     this.rootPage = HomePage;
          // }
          else{
            
            this.storage.set('page', "");
            this.nav.pop();
            //this.nav.push(pageName)
          }

        if (activePortal) { 
          console.log("activePortal",activePortal);
        //  activePortal.dismiss();
        }
        else if (this.menuCtrl.isOpen()) {
          console.log("this.menuCtrl",this.menuCtrl);
        //  this.menuCtrl.close();
        }
        else if (this.nav.canGoBack() || view && view.isOverlay) {
          console.log("this.nav.canGoBack() ",this.nav.canGoBack())
          // console.log("view ",view)
          // console.log("view.isOverlay ",view.isOverlay)
        //  this.nav.pop();
        
        }
        else if(currentRootPage) { // Could any other page that you consider as your main one
          //this.openPage(this.side_menu_navigation_pages[0]);
          console.log("open another page");
         // this.nav.push(HomePage)
        }
        else {
            console.log("insside else==");
        }

            console.log("view.component.name = ",view.component.name);
            // if (view.component.name == "HomePage") {
              
            //     this.storage.get('page').then((val) => {
            //       console.log("back val =",val)
            //       if(val == "SchedulesPage"){
            //         this.storage.set('page', "");
            //         this.logout();
            //       }
            //     });
            //     //this.logout();
            // }else if (view.component.name == "LoginPage") {
            //   let prompt = this.alertCtrl.create({
            //     title: 'Exit',
            //     message: "Are you sure you want to exit?",
            //     buttons: [
            //       {
            //         text: 'Yes',
            //         handler: data => {
            //           this.platform.exitApp(); //Exit from app
            //         }
            //       },
            //         {
            //           text: 'No',
            //           role: 'cancel',
            //           handler: () => {
            //             console.log('Cancel clicked');
            //           }
            //         }
            //     ]
            //   });
            //   prompt.present();
            // } else {
            //     // go to previous page
            //     this.nav.pop({});
            // }
        });

  }

  logout(){
    let prompt = this.alertCtrl.create({
      title: 'Logout',
      message: "Are you sure you want to logout?",
      buttons: [
        {
          text: 'Yes',
          handler: data => {
            
            this.storage.set('id',null);
            
          //  this.rootPage = LoginPage;
            this.nav.push(LoginPage)
          //  this.nav.pop();
          }
        },
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              this.storage.set('page', "SchedulesPage");
              console.log('Cancel clicked');
            }
          }
      ]
    });
    prompt.present();
  }
 

  setUserData(){

        this.eduService.getMenu().then((res)=>{
          console.log(res);
          var temp_menu = [];
          var ths = this;
          ths.res = res;
          
          console.log(ths.res.Data);
          var dta = ths.res.Data;
          console.log(dta);
          for(let v of dta) {
            if(v.value == 0)
              temp_menu.push({name:v.code,icon:v.icon});
            //console.log(v);
          }
          temp_menu.push({name:'Profile',icon:'ios-person-outline'},{name:'Change Password',icon:'ios-lock-outline'},{name:'Logout',icon:'ios-log-out-outline'});
          ths.items = temp_menu;

          //console.log(temp_menu);
          
          //function for taking care of menu 
          
          console.log(temp_menu[0].name);
          switch(temp_menu[0].name){
                case "Schedules" : this.rootPage = SchedulesPage; console.log("SchedulesPage"); break;
                case "Performance" : this.rootPage = PerformancePage; console.log("PerformancePage"); break;
                case "Attendance" : this.rootPage = AttendancePage; console.log("AttendancePage"); break;
                case "Admissions" : this.rootPage = AdmissionPage; console.log("AdmissionPage"); break;
                case "Documents" : this.rootPage = DocumentsPage; console.log("DocumentsPage"); break;
                case "Feedback" : this.rootPage = FeedbackPage; console.log("FeedbackPage"); break;
                case "Leaves" : this.rootPage = LeavePage; console.log("LeavePage"); break;
                case "Punches" : this.rootPage = PunchesPage; console.log("PunchesPage"); break;
                case "Messages" : this.rootPage = MessagesPage; console.log("MessagesPage"); break;
                default : this.rootPage = ProfilePage; console.log("ProfilePage"); break;
               }

        });
        this.storage.get('userData').then((val) => {
          /** if(val.Parent == "Student"){
            this.items = [{name:"Schedules",icon:"ios-clock-outline"},
            {name:"Performance",icon:"ios-pulse-outline"},
            {name:"Attendance",icon:"ios-people-outline"},
            {name:"Admission",icon:"ios-paper-outline"},
            {name:"Documents",icon:"ios-document-outline"}, 
            {name:"Feedback",icon:"ios-chatboxes-outline"},
            {name:"Punches",icon:"ios-clock-outline"}, 
            {name:"Messages",icon:"ios-text-outline"},
            {name:"Profile",icon:"ios-person-outline"},
            {name:"Change Password",icon:"ios-lock-outline"}, 
            {name:"Logout",icon:"ios-log-out-outline"}];
          }else{
            this.items = [{name:"Schedules",icon:"ios-clock-outline"},
            {name:"Performance",icon:"ios-pulse-outline"},
            {name:"Attendance",icon:"ios-people-outline"},
            {name:"Admission",icon:"ios-paper-outline"},
            {name:"Documents",icon:"ios-document-outline"},    
            {name:"Leaves",icon:"ios-calendar-outline"},
            {name:"Feedback",icon:"ios-chatboxes-outline"},
            {name:"Punches",icon:"ios-clock-outline"}, 
            {name:"Messages",icon:"ios-text-outline"},
            {name:"Profile",icon:"ios-person-outline"},
            {name:"Change Password",icon:"ios-lock-outline"},      
            {name:"Logout",icon:"ios-log-out-outline"}];
          } **/
    
          this.studentName = val.Name;
          // this.storage.get('url').then((val) => {
          //   this.studentImage = (val.StudentImage ? val+"Branch/UploadFiles/"+val.StudentImage:"assets/images/default-user.png")
          // });
          this.studentImage = (val.StudentImage ? val.StudentImage :"assets/images/default-user.png")
    
        });   
    
      }

      
  initializeApp() {
	  
	  
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.storage.get("id").then(data=>{
        console.log(data);
        if(data == null || data == undefined ){
          this.rootPage = LoginPage;
        }else{
          this.rootPage = HomePage;
        }
      });
      console.clear();
      console.log("Hello");
      /**this.fcm.getToken(function (token){ 
       if(token == null){
       console.log("null token");
       } 
       else{
        console.log("got that : "+token);
       }
      })**/

      // get fcm token
      // if (this.platform.is('cordova')) {
		  
      /*this.fcm.getToken().then(token=>{
        console.log("token = ",token);
        this.storage.set('token', token);
      })*/
	  
	 
	  if (this.platform.is('android')) {
		  
		  
	
		  this.fcm.getToken().then(token=>{
             console.log("token = ",token);
        //     alert( 'TOKEN: ' + token );
             this.storage.set('token', token);
          });
          
		  
		  
		/*  this.firebase.getToken().then(token => {
			  console.log(`The token is ${token}`)
			  this.storage.set('token', token);
		  }) */
          // this.firebase.onMessageReceived().subscribe(data => console.log(`FCM message: ${data}`));
      }
	  
	  if (this.platform.is('ios')) {
		  /*
		this.fcm.getToken().then(token=>{
             console.log("token = ",token);
             this.storage.set('token', token);
			 this.fcm.grantPermission();
		});
		*/
		
		this.firebase.getToken().then(token => {
			  console.log(`The token is ${token}`)
			  this.storage.set('token', token);
			  this.fcm.grantPermission();
		});
		
	  }  
	
	  
	 
 

     
     
	  
	 
      
      this.fcm.onTokenRefresh().subscribe(token=>{
        console.log("token on refresh = ",token);
        this.storage.set('token', token);
      });
	  
    });
	}
  // }

  sliderClick(event,data){
    console.log("event 123  : "+JSON.stringify(data));
    switch(data.name){
      case "Schedules":
      this.storage.set('page', "SchedulesPage");
      this.rootPage = SchedulesPage;
      this.pageArray.push("SchedulesPage");
      //this.navCtrl.push(SchedulesPage);
      break;
      case "Performance":
    //  this.nav.pop();
      this.rootPage = PerformancePage;
      this.storage.set('page', "PerformancePage");
      this.pageArray.push("PerformancePage");
      //this.nav.push(PerformancePage);
      break;
      case "Attendance":
   //   this.nav.pop();
      this.rootPage = AttendancePage;
      this.storage.set('page', "AttendancePage");
      this.pageArray.push("AttendancePage");
      //this.nav.push(AttendancePage);
      break;
      case "Admissions":
    //  this.nav.pop();
      this.rootPage = AdmissionPage;
      this.storage.set('page', "AdmissionPage");
      this.pageArray.push("AdmissionPage");
      //this.nav.push(AdmissionPage);
      break;
      case "Profile":
    //  this.nav.pop();
      this.rootPage = ProfilePage;
      this.storage.set('page', "ProfilePage");
      this.pageArray.push("ProfilePage");
      //this.nav.push(ProfilePage);
      break;
      case "Documents":
    //  this.nav.pop();
      this.rootPage = DocumentsPage;
      this.storage.set('page', "DocumentsPage");
      this.pageArray.push("DocumentsPage");
      //this.nav.push(DocumentsPage);
      break; 
      case "Change Password":
    //  this.nav.pop();
      this.rootPage = ChangePasswordPage;
      this.storage.set('page', "ChangePasswordPage");
      this.pageArray.push("ChangePasswordPage");
      //this.nav.push(ChangePasswordPage);
      break;
      case "Leaves":
    //  this.nav.pop();
      this.rootPage = LeavePage;
      this.storage.set('page', "LeavePage");
      this.pageArray.push("LeavePage");
     // this.nav.push(LeavePage);
      break;
      case "Feedback":
    //  this.nav.pop();
      this.rootPage = FeedbackPage;
      this.storage.set('page', "FeedbackPage");
      this.pageArray.push("FeedbackPage");
      //this.nav.push(FeedbackPage);
      break;
      case "Logout":
      this.logout()
      break;
      case "Punches":
   //   this.nav.pop();
      this.rootPage = PunchesPage;
      this.storage.set('page', "PunchesPage");
      this.pageArray.push("PunchesPage");
      break;
      case "Messages":
   //   this.nav.pop();
      this.rootPage = MessagesPage;
      this.storage.set('page', "MessagesPage");
      this.pageArray.push("MessagesPage");
      break;
    }
  }


  
}
