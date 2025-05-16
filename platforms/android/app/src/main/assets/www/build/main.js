webpackJsonp([20],{

/***/ 1100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_schedules_schedules__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_performance_performance__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_attendance_attendance__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_admission_admission__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_documents_documents__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_feedback_feedback__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_change_password_change_password__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_leave_leave__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_punches_punches__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_messages_messages__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_firebase__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_firebase_x_ngx__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { LoginPage } from '../pages/login/login';
// import { ProfilePage } from '../pages/profile/profile';
// import { SchedulesPage } from '../pages/schedules/schedules';













//import { FCM } from '@ionic-native/fcm'; 


//import { FeedbackDetailsPage } from '../pages/feedback-details/feedback-details';

var MyApp = (function () {
    function MyApp(events, menuCtrl, ionicApp, fcm, alertCtrl, storage, toastCtrl, platform, statusBar, splashScreen, eduService, firebase) {
        var _this = this;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.ionicApp = ionicApp;
        this.fcm = fcm;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.eduService = eduService;
        this.firebase = firebase;
        this.res = {};
        this.pageArray = ["SchedulesPage"];
        this.initializeApp();
        var data = {
            SchedulesPage: __WEBPACK_IMPORTED_MODULE_5__pages_schedules_schedules__["a" /* SchedulesPage */],
            AttendancePage: __WEBPACK_IMPORTED_MODULE_7__pages_attendance_attendance__["a" /* AttendancePage */],
            AdmissionPage: __WEBPACK_IMPORTED_MODULE_8__pages_admission_admission__["a" /* AdmissionPage */]
        };
        //back button handle
        //Registration of push in Android and Windows Phone
        //var lastTimeBackPress = 0;
        //var timePeriodToExit  = 2000;
        events.subscribe('setuserData', function () {
            _this.setUserData();
        });
        platform.registerBackButtonAction(function () {
            // get current active page
            //  let view = this.nav.getActive();
            console.log("page array", _this.pageArray, _this.pageArray.length);
            console.log("this.pageArray = ", _this.pageArray[1]);
            // var pageName = this.pageArray[(this.pageArray.length-2)];
            var page1 = _this.pageArray[(_this.pageArray.length - 1)];
            var pageName = _this.pageArray[(_this.pageArray.indexOf(page1) - 1)];
            console.log("data[pageName] >", data[pageName]);
            console.log("pageName = ", pageName);
            var activePortal = _this.ionicApp._loadingPortal.getActive() ||
                _this.ionicApp._modalPortal.getActive() ||
                _this.ionicApp._toastPortal.getActive() ||
                _this.ionicApp._overlayPortal.getActive();
            var view = _this.nav.getActive();
            var currentRootPage = view.component;
            console.log("activePortal", activePortal);
            console.log("view", view);
            console.log("currentRootPage", currentRootPage);
            if (_this.menuCtrl.isOpen()) {
                console.log("this.menuCtrl", _this.menuCtrl);
                _this.menuCtrl.close();
            }
            else if (view.component.name == "HomePage") {
                _this.storage.get('page').then(function (val) {
                    console.log("back val =", val);
                    if (val == "SchedulesPage") {
                        _this.storage.set('page', "");
                        _this.pageArray = [];
                        //this.logout();
                    }
                    else if (val == "LoginPage") {
                        _this.storage.set('page', "");
                        var prompt_1 = _this.alertCtrl.create({
                            title: 'Exit',
                            message: "Are you sure you want to exit?",
                            buttons: [
                                {
                                    text: 'Yes',
                                    handler: function (data) {
                                        _this.platform.exitApp(); //Exit from app
                                    }
                                },
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }
                            ]
                        });
                        prompt_1.present();
                    }
                    else if (val == "ScheduleDetailPage") {
                        console.log("inside ScheduleDetailPage");
                        _this.storage.set('page', "");
                        _this.pageArray.push("SchedulesPage");
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_schedules_schedules__["a" /* SchedulesPage */];
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
            }
            else if (view.component.name == "LoginPage") {
                var prompt_2 = _this.alertCtrl.create({
                    title: 'Exit',
                    message: "Are you sure you want to exit?",
                    buttons: [
                        {
                            text: 'Yes',
                            handler: function (data) {
                                _this.platform.exitApp(); //Exit from app
                            }
                        },
                        {
                            text: 'No',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        }
                    ]
                });
                prompt_2.present();
            }
            else if (view.component.name == "SchedulesPage") {
                _this.storage.set('page', "");
                _this.pageArray = [];
                var prompt_3 = _this.alertCtrl.create({
                    title: 'Exit',
                    message: "Are you sure you want to exit?",
                    buttons: [
                        {
                            text: 'Yes',
                            handler: function (data) {
                                _this.platform.exitApp(); //Exit from app
                            }
                        },
                        {
                            text: 'No',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        }
                    ]
                });
                prompt_3.present();
                //  this.logout();
            }
            else if (view.component.name == "AttendancePage" || view.component.name == "AdmissionPage" || view.component.name == "PerformancePage" || view.component.name == "FeedbackPage" || view.component.name == "LeavePage" || view.component.name == "ChangePasswordPage" || view.component.name == "ProfilePage" || view.component.name == "DocumentsPage" || view.component.name == "PunchesPage" || view.component.name == "MessagesPage") {
                _this.storage.set('page', "");
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                //  this.nav.push(HomePage)
                _this.pageArray.push(pageName);
                //this.rootPage = data[pageName];
            }
            else {
                _this.storage.set('page', "");
                _this.nav.pop();
                //this.nav.push(pageName)
            }
            if (activePortal) {
                console.log("activePortal", activePortal);
                //  activePortal.dismiss();
            }
            else if (_this.menuCtrl.isOpen()) {
                console.log("this.menuCtrl", _this.menuCtrl);
                //  this.menuCtrl.close();
            }
            else if (_this.nav.canGoBack() || view && view.isOverlay) {
                console.log("this.nav.canGoBack() ", _this.nav.canGoBack());
                // console.log("view ",view)
                // console.log("view.isOverlay ",view.isOverlay)
                //  this.nav.pop();
            }
            else if (currentRootPage) {
                //this.openPage(this.side_menu_navigation_pages[0]);
                console.log("open another page");
                // this.nav.push(HomePage)
            }
            else {
                console.log("insside else==");
            }
            console.log("view.component.name = ", view.component.name);
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
    MyApp.prototype.logout = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Logout',
            message: "Are you sure you want to logout?",
            buttons: [
                {
                    text: 'Yes',
                    handler: function (data) {
                        _this.storage.set('id', null);
                        //  this.rootPage = LoginPage;
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */]);
                        //  this.nav.pop();
                    }
                },
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        _this.storage.set('page', "SchedulesPage");
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    MyApp.prototype.setUserData = function () {
        var _this = this;
        this.eduService.getMenu().then(function (res) {
            console.log(res);
            var temp_menu = [];
            var ths = _this;
            ths.res = res;
            console.log(ths.res.Data);
            var dta = ths.res.Data;
            console.log(dta);
            for (var _i = 0, dta_1 = dta; _i < dta_1.length; _i++) {
                var v = dta_1[_i];
                if (v.value == 0)
                    temp_menu.push({ name: v.code, icon: v.icon });
                //console.log(v);
            }
            temp_menu.push({ name: 'Profile', icon: 'ios-person-outline' }, { name: 'Change Password', icon: 'ios-lock-outline' }, { name: 'Logout', icon: 'ios-log-out-outline' });
            ths.items = temp_menu;
            //console.log(temp_menu);
            //function for taking care of menu 
            console.log(temp_menu[0].name);
            switch (temp_menu[0].name) {
                case "Schedules":
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_schedules_schedules__["a" /* SchedulesPage */];
                    console.log("SchedulesPage");
                    break;
                case "Performance":
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_performance_performance__["a" /* PerformancePage */];
                    console.log("PerformancePage");
                    break;
                case "Attendance":
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_attendance_attendance__["a" /* AttendancePage */];
                    console.log("AttendancePage");
                    break;
                case "Admissions":
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_admission_admission__["a" /* AdmissionPage */];
                    console.log("AdmissionPage");
                    break;
                case "Documents":
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_documents_documents__["a" /* DocumentsPage */];
                    console.log("DocumentsPage");
                    break;
                case "Feedback":
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_feedback_feedback__["a" /* FeedbackPage */];
                    console.log("FeedbackPage");
                    break;
                case "Leaves":
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_13__pages_leave_leave__["a" /* LeavePage */];
                    console.log("LeavePage");
                    break;
                case "Punches":
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_15__pages_punches_punches__["a" /* PunchesPage */];
                    console.log("PunchesPage");
                    break;
                case "Messages":
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_16__pages_messages_messages__["a" /* MessagesPage */];
                    console.log("MessagesPage");
                    break;
                default:
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */];
                    console.log("ProfilePage");
                    break;
            }
        });
        this.storage.get('userData').then(function (val) {
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
            _this.studentName = val.Name;
            // this.storage.get('url').then((val) => {
            //   this.studentImage = (val.StudentImage ? val+"Branch/UploadFiles/"+val.StudentImage:"assets/images/default-user.png")
            // });
            _this.studentImage = (val.StudentImage ? val.StudentImage : "assets/images/default-user.png");
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.storage.get("id").then(function (data) {
                console.log(data);
                if (data == null || data == undefined) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
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
            if (_this.platform.is('android')) {
                _this.fcm.getToken().then(function (token) {
                    console.log("token = ", token);
                    //     alert( 'TOKEN: ' + token );
                    _this.storage.set('token', token);
                });
                /*  this.firebase.getToken().then(token => {
                      console.log(`The token is ${token}`)
                      this.storage.set('token', token);
                  }) */
                // this.firebase.onMessageReceived().subscribe(data => console.log(`FCM message: ${data}`));
            }
            if (_this.platform.is('ios')) {
                /*
              this.fcm.getToken().then(token=>{
                   console.log("token = ",token);
                   this.storage.set('token', token);
                   this.fcm.grantPermission();
              });
              */
                _this.firebase.getToken().then(function (token) {
                    console.log("The token is " + token);
                    _this.storage.set('token', token);
                    _this.fcm.grantPermission();
                });
            }
            _this.fcm.onTokenRefresh().subscribe(function (token) {
                console.log("token on refresh = ", token);
                _this.storage.set('token', token);
            });
        });
    };
    // }
    MyApp.prototype.sliderClick = function (event, data) {
        console.log("event 123  : " + JSON.stringify(data));
        switch (data.name) {
            case "Schedules":
                this.storage.set('page', "SchedulesPage");
                this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_schedules_schedules__["a" /* SchedulesPage */];
                this.pageArray.push("SchedulesPage");
                //this.navCtrl.push(SchedulesPage);
                break;
            case "Performance":
                //  this.nav.pop();
                this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_performance_performance__["a" /* PerformancePage */];
                this.storage.set('page', "PerformancePage");
                this.pageArray.push("PerformancePage");
                //this.nav.push(PerformancePage);
                break;
            case "Attendance":
                //   this.nav.pop();
                this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_attendance_attendance__["a" /* AttendancePage */];
                this.storage.set('page', "AttendancePage");
                this.pageArray.push("AttendancePage");
                //this.nav.push(AttendancePage);
                break;
            case "Admissions":
                //  this.nav.pop();
                this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_admission_admission__["a" /* AdmissionPage */];
                this.storage.set('page', "AdmissionPage");
                this.pageArray.push("AdmissionPage");
                //this.nav.push(AdmissionPage);
                break;
            case "Profile":
                //  this.nav.pop();
                this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */];
                this.storage.set('page', "ProfilePage");
                this.pageArray.push("ProfilePage");
                //this.nav.push(ProfilePage);
                break;
            case "Documents":
                //  this.nav.pop();
                this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_documents_documents__["a" /* DocumentsPage */];
                this.storage.set('page', "DocumentsPage");
                this.pageArray.push("DocumentsPage");
                //this.nav.push(DocumentsPage);
                break;
            case "Change Password":
                //  this.nav.pop();
                this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_change_password_change_password__["a" /* ChangePasswordPage */];
                this.storage.set('page', "ChangePasswordPage");
                this.pageArray.push("ChangePasswordPage");
                //this.nav.push(ChangePasswordPage);
                break;
            case "Leaves":
                //  this.nav.pop();
                this.rootPage = __WEBPACK_IMPORTED_MODULE_13__pages_leave_leave__["a" /* LeavePage */];
                this.storage.set('page', "LeavePage");
                this.pageArray.push("LeavePage");
                // this.nav.push(LeavePage);
                break;
            case "Feedback":
                //  this.nav.pop();
                this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_feedback_feedback__["a" /* FeedbackPage */];
                this.storage.set('page', "FeedbackPage");
                this.pageArray.push("FeedbackPage");
                //this.nav.push(FeedbackPage);
                break;
            case "Logout":
                this.logout();
                break;
            case "Punches":
                //   this.nav.pop();
                this.rootPage = __WEBPACK_IMPORTED_MODULE_15__pages_punches_punches__["a" /* PunchesPage */];
                this.storage.set('page', "PunchesPage");
                this.pageArray.push("PunchesPage");
                break;
            case "Messages":
                //   this.nav.pop();
                this.rootPage = __WEBPACK_IMPORTED_MODULE_16__pages_messages_messages__["a" /* MessagesPage */];
                this.storage.set('page', "MessagesPage");
                this.pageArray.push("MessagesPage");
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\app\app.html"*/'<ion-menu [content]="content" id="menu1">\n\n\n\n        <ion-content style="background-color: #1a2532">\n\n      \n\n      \n\n          <ion-row style="justify-content: center">\n\n            <img class="userImg" [src]="studentImage" >\n\n          </ion-row>\n\n          <h4 style="text-align: center;color: #fff;margin-left: 10px;margin-right: 10px;">{{studentName}}</h4>\n\n          <!-- <h5 style="margin-left: 10px;margin-right: 10px;text-align: center;font-weight: 400;font-size: 16px;color: #fff;margin-top: 5px">sushant.indulkar@wwindia.com</h5> -->\n\n          <hr style="margin-top: 20px;background-color:#233143;" /> \n\n          <ion-list>\n\n            <!--<ion-item *ngFor="let item of items">-->\n\n            <button menuClose ion-button icon-left full clear style="border-bottom: 1px solid #233143;" *ngFor="let item of items" (click)="sliderClick($event,item)">\n\n              <ion-icon name="{{item.icon}}" class="sliderIcon"></ion-icon>\n\n              <ion-label class="sliderLbl" style="padding-bottom:3px;" text-capitalize>{{item.name}}</ion-label>\n\n              <hr/>\n\n            </button>\n\n          </ion-list>\n\n        </ion-content>\n\n      \n\n      </ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n\n'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_18__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_20__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */], __WEBPACK_IMPORTED_MODULE_19__ionic_native_firebase_x_ngx__["a" /* FirebaseX */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { FormBuilder, FormGroup, Validators } from '@angular/forms';



//import { ForgotPasswordPage } from '../forgot-password/forgot-password';

var LoginPage = (function () {
    //show_password : any;
    function LoginPage(platform, storage, toastCtrl, navCtrl, navParams, formBuilder, eduService) {
        this.platform = platform;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.eduService = eduService;
        //this.show_password = false;
        //return;
        this.loginForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
        this.storage.set('page', "LoginPage");
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.storage.set('page', "LoginPage");
    };
    // showHide() {
    //   this.show_password = this.show_password + 1;
    //   console.log(this.show_password);
    // }
    LoginPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3500,
            position: 'bottom'
        });
        toast.present();
        // toast.onDidDismiss(() => {
        //   console.log('Dismissed toast');
        // });
    };
    LoginPage.prototype.openForgotPage = function () {
        //this.navCtrl.push(ForgotPasswordPage);
        this.storage.get('url').then(function (val) {
            window.open(val + "Student/forgetpwd.asp", '_blank');
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.loginForm.valid) {
            var data = {
                UserName: this.loginForm.value.username,
                UserPassword: this.loginForm.value.password,
            };
            this.eduService.login(data).then(function (userData) {
                console.log(userData); //return false;
                if (userData['Data'].length == 0) {
                    _this.presentToast(userData['Message'] || "Sorry, Something went wrong.");
                }
                else {
                    _this.username = "";
                    _this.password = "";
                    _this.loginForm.value.username = "";
                    _this.loginForm.value.password = "";
                    _this.storage.set('id', userData['Data'][0].StudentID);
                    _this.storage.set('userData', userData['Data'][0]);
                    _this.storage.set('parent', userData['Data'][0]);
                    _this.storage.set('parent2', userData['Data'][0].Parent);
                    _this.storage.get('token').then(function (val) {
                        console.log(userData['Data']);
                        var tokendata_ = {
                            AdmissionfeesdetailId: userData['Data'][0].AdmissionFeesDetailID,
                            fcmToken: val,
                            userRole: userData['Data'][0].Parent
                        };
                        console.log(tokendata_);
                        _this.eduService.fcm(tokendata_).then(function (tokenData) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], {
                                studentId: userData['Data'][0].StudentID,
                                studentName: userData['Data'][0].StudentUserName,
                                displayName: userData['Data'][0].Name,
                                studentImage: userData['Data'][0].StudentImage,
                            });
                        }).catch(function (error) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], {
                                studentId: userData['Data'][0].StudentID,
                                studentName: userData['Data'][0].StudentUserName,
                                displayName: userData['Data'][0].Name,
                                studentImage: userData['Data'][0].StudentImage,
                            });
                        });
                    });
                }
            }).catch(function (error) {
                console.log("error = ", error);
            });
            //
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content class="myview" padding>\n\n  <ion-grid style="margin-top:20%;border-style: none;">\n\n    <ion-row style="text-align: center">\n\n      <ion-col align-self-center>\n\n        <img src="assets/images/logo_large.png" style="height: 98px;width: 198px;" />\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row center style="margin-top: 10px;">\n\n      <ion-col col-12>\n\n\n\n        <ion-list radio-group inset>\n\n          <form [formGroup]="loginForm" class="formContainer">\n\n            <ion-item>\n\n              <ion-label floating>Username</ion-label>\n\n              <ion-input type="text" value="" formControlName="username" [(ngModel)]="username"></ion-input>\n\n            </ion-item>\n\n            <p class="errorClass"\n\n              *ngIf="!loginForm.controls.username.valid  && (loginForm.controls.username.dirty || submitAttempt)">*\n\n              Please enter username</p>\n\n\n\n            <ion-item>\n\n              <ion-label floating primary>Password</ion-label>\n\n              <ion-input type="password" value="" formControlName="password" [(ngModel)]="password"></ion-input>\n\n            </ion-item>\n\n            <p class="errorClass"\n\n              *ngIf="!loginForm.controls.password.valid  && (loginForm.controls.password.dirty || submitAttempt)">*\n\n              Please enter password</p>\n\n          </form>\n\n          <!--<ion-item style="padding:0px;">\n\n            <button ion-button (click)="login()" block color="btn">Log In</button>\n\n			\n\n          </ion-item>-->\n\n        </ion-list>\n\n        <button ion-button (click)="login()" style="padding:10px;" block color="btn">Log In</button>\n\n\n\n          \n\n\n\n\n\n        <button style="border-style: none;" ion-button (click)="openForgotPage()" clear full color="btn">Forgot\n\n          Password?</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(storage, navCtrl, navParams, eduService) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eduService = eduService;
        this.getProfile();
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.getProfile = function () {
        var _this = this;
        var data = null;
        this.storage.get('id').then(function (val) {
            console.log('Your id is', val);
            data = {
                StudentId: val,
            };
            _this.eduService.getProfile(data).then(function (response) {
                if (response['Data'].length == 0) {
                    _this.profileData = [];
                    _this.nodata = true;
                }
                else {
                    _this.nodata = false;
                    _this.profileData = response['Data'];
                    console.log(_this.profileData);
                    localStorage.profileData = JSON.stringify(_this.profileData[0]);
                    _this.studentImage = (response['Data'][0].StudentImage);
                }
            }).catch(function (error) {
                console.log("error = ", error);
            });
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="home_header">\n\n\n\n  <ion-navbar style="background-color:btn">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n\n\n  <ion-item-group *ngFor="let profile of profileData">\n\n\n\n\n\n    <ion-item style="border-bottom: 0.4px solid #f2f2f2" text-nowrap>\n\n      <ion-avatar item-left>\n\n        <img [src]="studentImage">\n\n      </ion-avatar>\n\n      <p text-wrap style="font-size: 19px;color: #1a2532;margin-top: 5px">{{profile.StudentFName+" "+profile.StudentMName+" "+profile.StudentLName}}</p>\n\n      <p text-wrap style="margin-top: 5px">{{profile.StudentGender == 1 ?\'Male\' :\'Female\'}}</p>\n\n\n\n    </ion-item>\n\n\n\n\n\n\n\n    <ion-item>\n\n      <ion-icon name="md-calendar" item-start></ion-icon>\n\n      {{(profile.StudentDOB | date : \'EEE, MMMM d, y\') || \'-\'}}\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="md-call" item-start></ion-icon>\n\n      {{profile.StudentMobileNo || \'-\'}}\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="md-mail" item-start></ion-icon>\n\n      {{profile.StudentEmail || \'-\'}}\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="ios-school" item-start></ion-icon>\n\n      {{profile.StudentSchool || \'-\'}}\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="ios-home" item-start></ion-icon>\n\n      {{profile.StudentAddress || \'-\'}}\n\n    </ion-item>\n\n    <!-- <ion-item>\n\n      <ion-icon name="logo-linkedin" item-start></ion-icon>\n\n      {{profile.StudentLinkedIn || \'NA\'}}\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="logo-googleplus" item-start></ion-icon>\n\n      {{profile.StudentGooglePlus || \'NA\'}}\n\n    </ion-item> -->\n\n\n\n\n\n\n\n  </ion-item-group>\n\n\n\n  <!-- <ion-card class="cardContainer" *ngFor="let profile of profileData">\n\n  <ion-item-group >\n\n    <ion-item-divider style="color: #003b8e">\n\n      Other Details\n\n    </ion-item-divider>\n\n    <ion-item style="border-bottom: 0.4px solid #f2f2f2" (click)="rowClick(performanceDataDetails)" text-nowrap>\n\n      <ion-row>\n\n          <ion-col class="profileLeftTxt" col-5>\n\n              School/College :\n\n          </ion-col>\n\n          <ion-col class="rightTxt" col-7>\n\n              {{profile.StudentSchool || \'-\'}}\n\n          </ion-col>\n\n  \n\n          <ion-col class="profileLeftTxt" col-5>\n\n              Address :\n\n          </ion-col>\n\n          <ion-col class="rightTxt" style="white-space: initial" col-7>\n\n                {{profile.StudentAddress || \'-\'}}  \n\n          </ion-col>\n\n\n\n          </ion-row>\n\n    \n\n    </ion-item> \n\n  </ion-item-group>\n\n</ion-card> -->\n\n\n\n  <ion-card class="cardContainer" *ngFor="let profile of profileData">\n\n    <div *ngIf="profile.FatherFName != null">\n\n    <ion-item-group *ngFor="let profile of profileData">\n\n      <ion-item-divider style="color: #003b8e">\n\n        Father Details\n\n      </ion-item-divider>\n\n      <ion-item style="border-bottom: 0.4px solid #f2f2f2"  text-nowrap>\n\n\n\n        <ion-row>\n\n          <ion-col class="profileLeftTxt" col-5>\n\n            Name :\n\n          </ion-col>\n\n          <ion-col class="rightTxt" col-7>\n\n            {{profile.FatherFName}} {{profile.FatherMName}} {{profile.FatherLName}}\n\n          </ion-col>\n\n\n\n          <ion-col class="profileLeftTxt" col-5>\n\n            Contact No. :\n\n          </ion-col>\n\n          <ion-col class="rightTxt" col-7>\n\n            {{profile.FatherMobileNo || \'-\'}}\n\n          </ion-col>\n\n\n\n\n\n          <ion-col class="profileLeftTxt" col-5>\n\n            Email :\n\n          </ion-col>\n\n          <ion-col class="rightTxt" col-7>\n\n            {{profile.FatherEmail || \'-\'}}\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n    </ion-item-group>\n\n    </div>\n\n  </ion-card>\n\n\n\n  <ion-card class="cardContainer" *ngFor="let profile of profileData">\n\n    <div *ngIf="profile.MotherFName != null">\n\n    <ion-item-group *ngFor="let profile of profileData">\n\n      <ion-item-divider style="color: #003b8e">\n\n        Mother Details\n\n      </ion-item-divider>\n\n      <ion-item style="border-bottom: 0.4px solid #f2f2f2" text-nowrap>\n\n\n\n        <ion-row>\n\n          <ion-col class="profileLeftTxt" col-5>\n\n            Name :\n\n          </ion-col>\n\n          <ion-col class="rightTxt" col-7>\n\n            {{profile.MotherFName}} {{profile.MotherMName}} {{profile.MotherLName}}\n\n          </ion-col>\n\n\n\n          <ion-col class="profileLeftTxt" col-5>\n\n            Contact No. :\n\n          </ion-col>\n\n          <ion-col class="rightTxt" col-7>\n\n            {{profile.MotherMobileNo || \'-\'}}\n\n          </ion-col>\n\n\n\n\n\n          <ion-col class="profileLeftTxt" col-5>\n\n            Email :\n\n          </ion-col>\n\n          <ion-col class="rightTxt" col-7>\n\n            {{profile.MotherEmail || \'-\'}}\n\n          </ion-col>\n\n\n\n        </ion-row>\n\n\n\n\n\n      </ion-item>\n\n    </ion-item-group>\n\n    </div>\n\n  </ion-card>\n\n\n\n  <ion-card class="cardContainer" *ngFor="let profile of profileData">\n\n    <div *ngIf="profile.OthrGuardianFName != null">\n\n    <ion-item-group *ngFor="let profile of profileData">\n\n      <ion-item-divider style="color: #003b8e">\n\n        Other Guardian Details\n\n      </ion-item-divider>\n\n      <ion-item style="border-bottom: 0.4px solid #f2f2f2"  text-nowrap>\n\n\n\n        <ion-row>\n\n          <ion-col class="profileLeftTxt" col-5>\n\n            Name :\n\n          </ion-col>\n\n          <ion-col class="rightTxt" col-7>\n\n            {{profile.OthrGuardianFName}} {{profile.OthrGuardianMName}} {{profile.OthrGuardianLName}}\n\n          </ion-col>\n\n\n\n          <ion-col class="profileLeftTxt" col-5>\n\n            Contact No. :\n\n          </ion-col>\n\n          <ion-col class="rightTxt" col-7>\n\n            {{profile.OthrGuardianMobileNo || \'-\'}}\n\n          </ion-col>\n\n\n\n          <ion-col class="profileLeftTxt" col-5>\n\n            Email :\n\n          </ion-col>\n\n          <ion-col class="rightTxt" col-7>\n\n            {{profile.OthrGuardianEmail || \'-\'}}\n\n          </ion-col>\n\n\n\n        </ion-row>\n\n      </ion-item>\n\n    </ion-item-group>\n\n    </div>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { SchedulesPage } from '../schedules/schedules';
//import { PerformancePage } from '../performance/performance';
//import { AttendancePage } from '../attendance/attendance';
//import { AdmissionPage } from '../admission/admission'; 

//import { DocumentsPage } from '../documents/documents';
//import { FeedbackPage } from '../feedback/feedback';
//import { PunchesPage } from '../punches/punches';  
//import { MessagesPage } from '../messages/messages';
//import { ChangePasswordPage } from '../change-password/change-password';
//import { LeavePage } from '../leave/leave';



var HomePage = (function () {
    function HomePage(events, menuCtrl, platform, storage, navParams, navCtrl, viewCtrl, eduService, alertCtrl) {
        var _this = this;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.storage = storage;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.eduService = eduService;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
        this.items = [];
        events.publish('setuserData');
        this.storage.get('userData').then(function (val) {
            if (val.Parent == "Student") {
                _this.items = [{ name: "Schedules", icon: "ios-clock-outline" },
                    { name: "Performance", icon: "ios-pulse-outline" },
                    { name: "Attendance", icon: "ios-people-outline" },
                    { name: "Admission", icon: "ios-paper-outline" },
                    { name: "Documents", icon: "ios-document-outline" },
                    { name: "Feedback", icon: "ios-chatboxes-outline" },
                    { name: "Punches", icon: "ios-chatboxes-outline" },
                    { name: "Messages", icon: "ios-clock-outline" },
                    { name: "Profile", icon: "ios-person-outline" },
                    { name: "Change Password", icon: "ios-lock-outline" },
                    { name: "Logout", icon: "ios-log-out-outline" }];
            }
            else {
                _this.items = [{ name: "Schedules", icon: "ios-clock-outline" },
                    { name: "Performance", icon: "ios-pulse-outline" },
                    { name: "Attendance", icon: "ios-people-outline" },
                    { name: "Admission", icon: "ios-paper-outline" },
                    { name: "Documents", icon: "ios-document-outline" },
                    { name: "Leaves", icon: "ios-calendar-outline" },
                    { name: "Feedback", icon: "ios-chatboxes-outline" },
                    { name: "Punches", icon: "ios-chatboxes-outline" },
                    { name: "Messages", icon: "ios-clock-outline" },
                    { name: "Profile", icon: "ios-person-outline" },
                    { name: "Change Password", icon: "ios-lock-outline" },
                    { name: "Logout", icon: "ios-log-out-outline" }];
            }
        });
        this.studentName = this.navParams.data.displayName;
        console.log("this.navParams.data.studentImage =", this.navParams.data.studentImage);
        this.storage.get('url').then(function (val) {
            // receiptUrl = val+"student/student_admissions_details_SinglePaidPDF_App.asp?AdmissionFeesDetailID="+data.AdmissionFeesDetailID+"&FeesID="+data.FeesID+"&BranchID="+bID;
            _this.studentImage = (_this.navParams.data.studentImage);
        });
        //this.studentImage = (this.navParams.data.studentImage ? this.navParams.data.studentImage:"assets/images/default-user.png")
        this.studentData = this.navParams.data;
        // platform.registerBackButtonAction(() => {
        //   this.storage.get('menuAction').then((val) => {
        //     if(val == "menuOpen"){
        //      // close menu 
        //      this.menuCtrl.close();
        //     }
        //   });
        //   this.storage.get('page').then((val) => {
        //     if(val == "SchedulesPage"){
        //       this.logout();
        //     }else{
        //       this.viewCtrl.dismiss()
        //     }
        //   });
        // });
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        console.log("ionViewDidEnter home");
    };
    HomePage.prototype.menuClosed = function () {
        console.log("menuClose");
        this.storage.set('menuAction', "menuClose");
    };
    HomePage.prototype.menuOpened = function () {
        console.log("menuOpen");
        this.storage.set('menuAction', "menuOpen");
    };
    // sliderClick(event,data){
    //   console.log("event  : "+JSON.stringify(data));
    //   switch(data.name){
    //     case "Schedules":
    //     this.storage.set('page', "SchedulesPage");
    //     this.rootPage = SchedulesPage;
    //     //this.navCtrl.push(SchedulesPage);
    //     break;
    //     case "Performance":
    //     //this.rootPage = PerformancePage;
    //     //this.storage.set('page', "PerformancePage");
    //     this.navCtrl.push(PerformancePage);
    //     break;
    //     case "Attendance":
    //     // this.rootPage = AttendancePage;
    //     // this.storage.set('page', "AttendancePage");
    //     this.navCtrl.push(AttendancePage);
    //     break;
    //     case "Admission":
    //     //this.rootPage = AdmissionPage;
    //    // this.storage.set('page', "AdmissionPage");
    //     this.navCtrl.push(AdmissionPage);
    //     break;
    //     case "Profile":
    //     //this.rootPage = ProfilePage;
    //    // this.storage.set('page', "ProfilePage");
    //     this.navCtrl.push(ProfilePage);
    //     break;
    //     case "Documents":
    //     //this.rootPage = DocumentsPage;
    //    // this.storage.set('page', "DocumentsPage");
    //     this.navCtrl.push(DocumentsPage);
    //     break; 
    //     case "Change Password":
    //     //this.rootPage = DocumentsPage;
    //    // this.storage.set('page', "ChangePasswordPage");
    //     this.navCtrl.push(ChangePasswordPage);
    //     break;
    //     case "Leaves":
    //     //this.rootPage = DocumentsPage;
    //    // this.storage.set('page', "LeavePage");
    //     this.navCtrl.push(LeavePage);
    //     break;
    //     case "Feedback":
    //     //this.rootPage = FeedbackPage;
    //    // this.storage.set('page', "FeedbackPage");
    //     this.navCtrl.push(FeedbackPage);
    //     break;
    //     case "Logout":
    //     this.logout()
    //     break;
    //   }
    // }
    HomePage.prototype.logout = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Logout',
            message: "Are you sure you want to logout??",
            buttons: [
                {
                    text: 'Yes',
                    handler: function (data) {
                        _this.storage.set('id', null);
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
                        // this.navCtrl.pop();
                    }
                },
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\home\home.html"*/'<!-- <ion-menu [content]="content" (ionOpen)="menuOpened()" (ionClose)="menuClosed()" id="menu1">\n\n\n\n  <ion-content style="background-color: #1a2532">\n\n\n\n\n\n    <ion-row style="justify-content: center">\n\n      <img class="userImg" [src]="studentImage" >\n\n    </ion-row>\n\n    <h4 style="text-align: center;color: #fff;margin-left: 10px;margin-right: 10px;">{{studentName}}</h4>\n\n    <hr style="margin-top: 20px;background-color:#233143;" /> \n\n    <ion-list>\n\n      <button menuClose ion-button icon-left full clear style="border-bottom: 1px solid #233143" *ngFor="let item of items" (click)="sliderClick($event,item)">\n\n        <ion-icon name="{{item.icon}}" class="sliderIcon"></ion-icon>\n\n        <ion-label class="sliderLbl" text-capitalize>{{item.name}}</ion-label>\n\n        <hr/>\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu> -->\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" [rootParams]="studentData" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLeavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { FormBuilder, FormGroup, Validators } from '@angular/forms';




/**
 * Generated class for the AddLeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddLeavePage = (function () {
    function AddLeavePage(storage, navCtrl, navParams, formBuilder, eduService, toastCtrl, viewCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.eduService = eduService;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.leaveForm = formBuilder.group({
            fromDate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            toDate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            note: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    }
    AddLeavePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddLeavePage');
        this.check = false;
    };
    AddLeavePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3500,
            position: 'bottom'
        });
        toast.present();
    };
    AddLeavePage.prototype.noteHandler = function (keyCode) {
        console.log(keyCode);
        var ths = this;
        setTimeout(function () {
            var charStr = String.fromCharCode(keyCode);
            if (keyCode == 34 || charStr == "&" || keyCode == 39 || keyCode == 59)
                ths.note = ths.note.slice(0, -1);
            console.log(ths.note);
        }, 100);
    };
    AddLeavePage.prototype.addLeave = function () {
        var _this = this;
        this.storage.get('userData').then(function (val) {
            _this.submitAttempt = true;
            if (_this.leaveForm.valid) {
                var data = {
                    StudentID: val.StudentID,
                    BranchID: val.BranchID,
                    LeaveOpener: val.Parent,
                    LeaveStartDate: _this.leaveForm.value.fromDate,
                    LeaveEndDate: _this.leaveForm.value.toDate,
                    LeaveReason: _this.leaveForm.value.note,
                    ActualTime: __WEBPACK_IMPORTED_MODULE_5_moment___default()().format("YYYY-MM-DD"),
                };
                _this.eduService.addLeave(data).then(function (leaveData) {
                    console.log("user data = " + JSON.stringify(leaveData));
                    if (leaveData['Code'] == 1) {
                        _this.presentToast("Leave was marked successfully");
                    }
                    else {
                        _this.presentToast(leaveData['Message'] || "Sorry, Something went wrong.");
                    }
                    _this.viewCtrl.dismiss();
                }).catch(function (error) {
                    _this.viewCtrl.dismiss();
                    console.log("error = ", error);
                });
            }
        });
    };
    AddLeavePage.prototype.showbutton = function () {
        console.log(this.check);
        if (this.check == true) {
            this.check = false;
            return false;
        }
        if (this.check == false) {
            this.check = true;
            return false;
        }
    };
    AddLeavePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-leave',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\add-leave\add-leave.html"*/'<!--\n\n  Generated template for the AddLeavePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Add Leave</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row center style="margin-top: 30px">\n\n      <ion-col col-12>\n\n\n\n        <ion-list>\n\n          <form [formGroup]="leaveForm" class="formContainer">\n\n\n\n            <ion-item>\n\n              <ion-label floating>Start Date</ion-label>\n\n              <ion-datetime displayFormat=\'MMM DD, YYYY\' formControlName="fromDate" [(ngModel)]="fromDate"></ion-datetime>\n\n            </ion-item>\n\n            <p class="errorClass" *ngIf="!leaveForm.controls.fromDate.valid  && (leaveForm.controls.fromDate.dirty || submitAttempt)">* Please Select start date</p>\n\n\n\n            <ion-item>\n\n              <ion-label floating>End Date</ion-label>\n\n              <ion-datetime displayFormat=\'MMM DD, YYYY\' formControlName="toDate" [(ngModel)]="toDate"></ion-datetime>\n\n            </ion-item>\n\n            <p class="errorClass" *ngIf="!leaveForm.controls.toDate.valid  && (leaveForm.controls.toDate.dirty || submitAttempt)">* Please Select end date</p>\n\n\n\n            <ion-item>\n\n              <ion-label floating>Note</ion-label>\n\n              <ion-textarea (keypress)="noteHandler($event.keyCode)" type="text" formControlName="note" [(ngModel)]="note"></ion-textarea>\n\n            </ion-item>\n\n            <p class="errorClass" *ngIf="!leaveForm.controls.note.valid  && (leaveForm.controls.note.dirty || submitAttempt)">* Please enter note</p>\n\n\n\n            <ion-item>\n\n              <ion-label>I hereby confirm the terms & <br>conditions from branch for add <br>leave.</ion-label>\n\n              <ion-checkbox color="blue" (click)="showbutton()"></ion-checkbox>\n\n              <!-- <ion-label >I hereby confirm the terms & conditions from branch for add leave.</ion-label>\n\n              <ion-checkbox></ion-checkbox> -->\n\n            </ion-item>\n\n          </form>\n\n\n\n          <!-- <button (click)="login()"  ion-button color="danger" outline block>Log In</button> -->\n\n          <div *ngIf="check">\n\n               <button ion-button (click)="addLeave()" style="margin-top: 20px" block color="btn" > Add Leave</button>\n\n           </div>\n\n\n\n           <!-- <div *ngIf="check == false">\n\n               <span style="margin-top: 20px" block color="btn" > Add Leave</span>\n\n           </div> -->\n\n          \n\n\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\add-leave\add-leave.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], AddLeavePage);
    return AddLeavePage;
}());

//# sourceMappingURL=add-leave.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmissionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AdmissionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdmissionDetailPage = (function () {
    function AdmissionDetailPage(storage, navCtrl, navParams, eduService) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eduService = eduService;
        this.IncludeTax = "";
        this.EnableTax = "";
        this.StudentCourseFees = 0;
        this.ServiceTaxTotal = 0;
        this.Amount_ = 0;
        this.uncleared = 0;
        this.bounceAmount = 0;
        this.PaidDate = "";
        this.PaymentModeName = "";
        this.table3Flag = false;
        this.table5Flag = false;
        this.table6Flag = false;
        this.table7Flag = false;
        this.table8Flag = false;
        this.admissionDate = "";
        this.fees = "";
        this.additionalFees = "";
        this.discount = "";
        this.total = "";
        this.OnlyOutstanding = "";
        this.total_ = "";
        this.paid_ = "";
        this.balance_ = "";
        this.bounced_ = "";
        this.uncleared_ = "";
        this.getAdmissionDetail();
    }
    AdmissionDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdmissionDetailPage');
    };
    AdmissionDetailPage.prototype.printFees = function (data) {
        var _this = this;
        var receiptUrl = null;
        this.storage.get('userData').then(function (value) {
            var bID = value.BranchID == undefined ? 1 : value.BranchID;
            _this.storage.get('url').then(function (val) {
                receiptUrl = val + "student/student_admissions_details_SinglePaidPDF_App.asp?AdmissionFeesDetailID=" + data.AdmissionFeesDetailID + "&FeesID=" + data.FeesID + "&BranchID=" + bID;
                console.log(receiptUrl);
                window.open(receiptUrl, "_blank");
            });
        });
    };
    AdmissionDetailPage.prototype.payFees = function (data) {
        // var url = null;
        var url = data.PAY_URL;
        var flag = data.PAY_ONLINE;
        console.clear();
        console.log(data);
        if (flag == 1) {
            console.log("Payment URL Hit");
            console.log(url);
            window.open(url, "_blank");
        }
    };
    AdmissionDetailPage.prototype.getAdmissionDetail = function () {
        var _this = this;
        var data = null;
        this.storage.get('userData').then(function (value) {
            _this.parent = value.Parent;
            console.log('ParentArun:' + _this.parent);
        });
        this.storage.get('id').then(function (val) {
            console.log('Your id is', _this.navParams.data.AdmissionFeesDetailID);
            console.log('Your id is', _this.navParams.data);
            data = {
                AdmissionFeesDetailID: _this.navParams.data.AdmissionFeesDetailID,
                Parent: _this.parent,
                ParentID: 150,
                StudentID: "120162017097",
                DomainName: "xyz.com",
                Amount: 150
            };
            //var amount = 0;
            //var bounceAmt = 0;
            _this.eduService.getAdmissionDetail(data).then(function (response) {
                console.log("user data = " + JSON.stringify(response));
                if (__WEBPACK_IMPORTED_MODULE_4_underscore__["size"](response['Data']) == 0) {
                    _this.admissionDetailData = [];
                    _this.nodata = true;
                }
                else {
                    _this.nodata = false;
                    _this.admissionDetailData = response['Data'];
                    _this.table = _this.admissionDetailData.Table;
                    _this.CourseName = _this.admissionDetailData.Table1[0].CourseName;
                    _this.StudentCourseFees = (__WEBPACK_IMPORTED_MODULE_4_underscore__["size"](_this.admissionDetailData.Table2) > 0 ? _this.admissionDetailData.Table2[0].StudentCourseFees : 0);
                    _this.IncludeTax = (__WEBPACK_IMPORTED_MODULE_4_underscore__["size"](_this.admissionDetailData.Table2) > 0 ? _this.admissionDetailData.Table2[0].IncludeTax : '');
                    _this.EnableTax = (__WEBPACK_IMPORTED_MODULE_4_underscore__["size"](_this.admissionDetailData.Table2) > 0 ? _this.admissionDetailData.Table2[0].EnableTax : '');
                    //this.Amount_ = (_.size(this.admissionDetailData.Table5) > 0 ? this.admissionDetailData.Table5[0].Amount : 0);
                    _this.table5 = _this.admissionDetailData.Table5;
                    //_.size(this.admissionDetailData.Table5) > 0 ? this.Table5Flag = true : this.Table5Flag = false
                    __WEBPACK_IMPORTED_MODULE_4_underscore__["size"](_this.admissionDetailData.Table5) > 0 ? _this.table5Flag = true : _this.table5Flag = false;
                    __WEBPACK_IMPORTED_MODULE_4_underscore__["size"](_this.admissionDetailData.Table6) > 0 ? _this.table6Flag = true : _this.table6Flag = false;
                    __WEBPACK_IMPORTED_MODULE_4_underscore__["size"](_this.admissionDetailData.Table7) > 0 ? _this.table7Flag = true : _this.table7Flag = false;
                    __WEBPACK_IMPORTED_MODULE_4_underscore__["size"](_this.admissionDetailData.Table8) > 0 ? _this.table8Flag = true : _this.table8Flag = false;
                    //  this.table5 = this.admissionDetailData.Table5;
                    _this.table6 = _this.admissionDetailData.Table6;
                    // _.each(this.admissionDetailData.Table5, function (v, k) {
                    //   amount = (amount + v.Amount)
                    // });
                    // this.Amount_ = amount;
                    _this.total_ = _this.admissionDetailData.Table3[0].Total || 0;
                    _this.paid_ = _this.admissionDetailData.Table3[0].Recived || 0;
                    _this.balance_ = _this.admissionDetailData.Table3[0].Balance1 || 0;
                    _this.uncleared_ = _this.admissionDetailData.Table3[0].Uncleared || 0;
                    _this.bounced_ = _this.admissionDetailData.Table4[0].BouncedAmt || 0;
                    _this.ServiceTaxTotal = (__WEBPACK_IMPORTED_MODULE_4_underscore__["size"](_this.admissionDetailData.Table5) > 0 ? _this.admissionDetailData.Table5[0].ServiceTaxTotal : 0);
                    _this.uncleared = (__WEBPACK_IMPORTED_MODULE_4_underscore__["size"](_this.admissionDetailData.Table4) > 0 ? _this.admissionDetailData.Table4[0].uncleared : 0);
                    // this.bounceAmount =  (_.size(this.admissionDetailData.Table6) > 0 ? this.admissionDetailData.Table6[0].Amount : 0); 
                    // _.each(this.admissionDetailData.Table6, function (v, k) {
                    //   bounceAmt = (bounceAmt + v.Amount)
                    // });
                    // this.bounceAmount = bounceAmt;
                    _this.PaidDate = (__WEBPACK_IMPORTED_MODULE_4_underscore__["size"](_this.admissionDetailData.Table5) > 0 ? _this.admissionDetailData.Table5[0].PaidDate : "");
                    _this.PaymentModeName = (__WEBPACK_IMPORTED_MODULE_4_underscore__["size"](_this.admissionDetailData.Table5) > 0 ? _this.admissionDetailData.Table5[0].PaymentModeName : "");
                    _this.admissionDate = (__WEBPACK_IMPORTED_MODULE_4_underscore__["size"](_this.admissionDetailData.Table9) > 0 ? _this.admissionDetailData.Table9[0].AdmissionDate : "");
                    _this.fees = (__WEBPACK_IMPORTED_MODULE_4_underscore__["size"](_this.admissionDetailData.Table9) > 0 ? _this.admissionDetailData.Table9[0].Fee : "");
                    _this.additionalFees = _this.admissionDetailData.Table10[0].AdditionalFees != null ? _this.admissionDetailData.Table10[0].AdditionalFees : 0;
                    console.log("Final Data" + _this.admissionDetailData.Table10[0].AdditionalFees);
                    _this.discount = (__WEBPACK_IMPORTED_MODULE_4_underscore__["size"](_this.admissionDetailData.Table9) > 0 ? _this.admissionDetailData.Table9[0].DiscountAmount : "");
                    _this.total = (__WEBPACK_IMPORTED_MODULE_4_underscore__["size"](_this.admissionDetailData.Table9) > 0 ? _this.admissionDetailData.Table9[0].StudentCourseFees : "");
                    //this.bounceTxt  = this.admissionDetailData.Table6[0].Amount;  
                    // this.table5 = this.admissionDetailData.Table5;
                    console.log(_this.admissionDetailData);
                    _this.table7 = _this.admissionDetailData.Table7;
                    _this.table8 = _this.admissionDetailData.Table8;
                    console.log("this.admissionDetailData 1 = ", _this.admissionDetailData);
                    console.log("this.admissionDetailData 2 = ", _this.admissionDetailData.Table);
                    console.log("this.admissionDetailData  3= ", _this.admissionDetailData.Table1[0].CourseName);
                    _this.OnlyOutstanding = _this.admissionDetailData.Table11[0].OnlyOutstanding;
                    if (_this.admissionDetailData.Table11[0].OnlyOutstanding == 0) {
                        console.log("OnlyOutstanding is 1");
                        _this.table5Flag = false;
                    }
                    console.log(_this.CourseName);
                }
            }).catch(function (error) {
                console.log("error = ", error);
                _this.nohit = true;
                console.log("Please contact admin :", _this.nohit);
            });
        });
    };
    AdmissionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admission-detail',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\admission-detail\admission-detail.html"*/'<!--\n\n  Generated template for the AdmissionDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Admission Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n\n\n  \n\n  <ion-card class="cardContainer" >\n\n\n\n    <ion-item-group>\n\n\n\n    \n\n      <ion-item-divider style="color: #003b8e">\n\n\n\n         \n\n        {{ CourseName }}\n\n\n\n      </ion-item-divider>\n\n\n\n\n\n      <ion-item-group style="margin-top: 20px" *ngIf="OnlyOutstanding != 0">\n\n          <ion-item style="align-items: left;min-height: 3.4rem;">\n\n              <ion-label class="subLbl">Admission Date</ion-label>\n\n              <ion-label class="subLbl">{{admissionDate | date: \'d MMMM, y\'}}</ion-label>\n\n          </ion-item>\n\n\n\n          <ion-item style="align-items: left;min-height: 3.4rem;">\n\n              <ion-label class="subLbl">Fees</ion-label>\n\n              <ion-label class="subLbl">₹{{fees.toLocaleString()}}</ion-label>\n\n          </ion-item>\n\n\n\n          <ion-item style="align-items: left;min-height: 3.4rem;">\n\n              <ion-label class="subLbl">Additional Fees</ion-label>\n\n              <ion-label class="subLbl">₹{{additionalFees.toLocaleString()}}</ion-label>\n\n          </ion-item>\n\n\n\n          <ion-item style="align-items: left;min-height: 3.4rem;" *ngIf="discount != 0" >\n\n            <ion-label class="subLbl">Discount</ion-label>\n\n            <ion-label class="subLbl">₹{{discount}}</ion-label>\n\n          </ion-item>\n\n\n\n          <ion-item style="align-items: left;min-height: 3.4rem;">\n\n              <ion-label class="subLbl">Total</ion-label>\n\n              <ion-label class="subLbl">₹{{total.toLocaleString()}}</ion-label>\n\n          </ion-item>\n\n        </ion-item-group>\n\n\n\n        <hr style="color: #dedede;height: 2px">\n\n\n\n      <ion-grid>\n\n        \n\n        <ion-row class="subdetailRow" *ngIf="OnlyOutstanding != 0">\n\n          <ion-col class="colBorder" col-6>\n\n            Total \n\n          </ion-col>\n\n          <ion-col col-6>\n\n            Paid\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row class="detailRow" *ngIf="OnlyOutstanding != 0">\n\n            <ion-col class="colBorder" col-6>\n\n              <!-- {{ \'Rs.\'+total_.toLocaleString()}}{{(EnableTax == 0) ?\'(w/o tax)\':\'(incl. taxes)\' }} -->\n\n              {{ \'₹ \'+total_.toLocaleString()}}{{ total_!=0 ? (EnableTax == 0 && IncludeTax ==1) ?\'(w/o tax)\': (EnableTax == 0 && IncludeTax ==0)?\'(incl. taxes)\':\'\' :\'\' }}\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <!-- {{ \'Rs.\'+(EnableTax == 0 ?(Amount_).toLocaleString()+\'(w/o tax)\':(Amount_+ServiceTaxTotal).toLocaleString()+\'(incl. taxes)\') }} -->\n\n            {{\'₹ \'+paid_.toLocaleString()}}{{ paid_!=0 ? (EnableTax == 0 && IncludeTax ==1) ?\'(w/o tax)\': (EnableTax == 0 && IncludeTax ==0)?\'(incl. taxes)\':\'\' :\'\' }}\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n        \n\n        <ion-row class="subdetailRow" *ngIf="OnlyOutstanding != 0">\n\n          <ion-col class="colBorder" col-6>\n\n            Balance\n\n          </ion-col>\n\n          <ion-col col-6 >\n\n            Uncleared\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="detailRow" *ngIf="OnlyOutstanding != 0">\n\n            <ion-col class="colBorder" col-6>\n\n              <!-- {{ \'Rs.\'+(StudentCourseFees - (EnableTax == 0 ?Amount_:(Amount_+ServiceTaxTotal))).toLocaleString() + (EnableTax == 0 ? ((StudentCourseFees - (EnableTax == 0 ?Amount_:(Amount_+ServiceTaxTotal))) !=0)?\'(w/o tax)\':\'\':((StudentCourseFees - (EnableTax == 0 ?Amount_:(Amount_+ServiceTaxTotal)))!=0)?\'(incl. taxes)\':\'\')  }} -->\n\n              {{\'₹ \'+balance_.toLocaleString()}}{{ balance_!=0 ? (EnableTax == 0 && IncludeTax ==1) ?\'(w/o tax)\': (EnableTax == 0 && IncludeTax ==0)?\'(incl. taxes)\':\'\' :\'\' }}\n\n            </ion-col>\n\n            <ion-col col-6 > \n\n              {{ \'₹ \'+ (uncleared_.toLocaleString() || 0)  }}{{ uncleared_!=0 ? (EnableTax == 0 && IncludeTax ==1) ?\'(w/o tax)\': (EnableTax == 0 && IncludeTax ==0)?\'(incl. taxes)\':\'\' :\'\' }}\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n        <ion-row class="subdetailRow" *ngIf="OnlyOutstanding != 0">\n\n          <ion-col col-12>\n\n            Bounced\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="detailRow" *ngIf="OnlyOutstanding != 0">\n\n            <ion-col col-12>\n\n              <!-- {{ \'Rs.\'+bounceAmount.toLocaleString() +(EnableTax == 0 ?(bounceAmount !=0?\'(w/o tax)\':\'\'):(bounceAmount !=0 ? \'(incl. taxes)\':\'\'))}}  -->\n\n              {{\'₹ \'+bounced_.toLocaleString()}}{{ bounced_!= 0 ? (EnableTax == 0 && IncludeTax ==1) ?\'(w/o tax)\': (EnableTax == 0 && IncludeTax ==0)?\'(incl. taxes)\':\'\' :\'\' }}\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n        <ion-row class="subdetailRow" *ngIf="OnlyOutstanding == 0">\n\n          <ion-col class="colBorder" col-6>\n\n            <b style="font-size: 19px"> Balance </b>\n\n          </ion-col>\n\n          <ion-col col-6 >\n\n            <b style="font-size: 19px"> {{\'₹ \'+balance_.toLocaleString()}}{{ balance_!=0 ? (EnableTax == 0 && IncludeTax ==1) ?\'(w/o tax)\': (EnableTax == 0 && IncludeTax ==0)?\'(incl. taxes)\':\'\' :\'\' }} </b>\n\n          </ion-col>\n\n		   \n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n    \n\n    \n\n      <ion-item style="font-weight: bold;font-size: 17px;color: #78B254" *ngIf="table5Flag" >Paid</ion-item>\n\n	  <ion-item-group *ngIf="table5Flag" >\n\n        <ion-item style="border-bottom: 0.4px solid #f2f2f2" *ngFor="let paidData of table5" text-nowrap >\n\n          <p text-wrap style="font-size: 16px;color: #1a2532;margin-top: 5px">₹ {{(paidData.Amount+paidData.ServiceTaxTotal).toLocaleString()}} </p>\n\n          <p text-wrap style="margin-top: 5px" *ngIf="paidData.ServiceTaxTotal != 0">( Basic: {{(paidData.Amount).toLocaleString()}}/- + Tax: {{(paidData.ServiceTaxTotal).toLocaleString()}}/- )</p>\n\n          <p text-wrap style="margin-top: 15px">paid on {{paidData.PaidDate | date: \'d MMMM, y\'}} by {{paidData.PaymentModeName}}.</p>\n\n          <ion-icon name="md-print" style="color: #78B254" (click)="printFees(paidData)" item-end></ion-icon>\n\n        </ion-item>\n\n      </ion-item-group>\n\n	\n\n\n\n\n\n      <!-- <hr style="color: #dedede;height: 2px" *ngIf="table5Flag"> -->\n\n		<hr style="color: #dedede;height: 2px">\n\n      <ion-item style="font-weight: bold;font-size: 17px;color: red" *ngIf="table7Flag" >Unpaid</ion-item>\n\n      <ion-item-group>\n\n          <ion-item style="border-bottom: 0.4px solid #f2f2f2" *ngFor="let unpaidData of table7" text-nowrap>\n\n            <p text-wrap style="font-size: 16px;color: #1a2532;margin-top: 5px">₹ {{(unpaidData.Amount).toLocaleString()}}</p>\n\n            <p text-wrap style="margin-top: 5px">due on {{unpaidData.PaymentDate | date: \'d MMMM, y\'}}.</p>\n\n            <ion-icon *ngIf="unpaidData.PAY_ONLINE == 1" name="md-card" style="color: #78B254" (click)="payFees(unpaidData)" item-end></ion-icon>\n\n          </ion-item>\n\n        </ion-item-group> \n\n\n\n        <!-- <hr style="color: #dedede;height: 2px" *ngIf="table6Flag"> -->\n\n\n\n\n\n        <ion-item style="font-weight: bold;font-size: 17px;color: red"  *ngIf="table8Flag" >Bounced Cheques</ion-item>\n\n      <ion-item-group>\n\n          <ion-item style="border-bottom: 0.4px solid #f2f2f2" *ngFor="let bouncedData of table8"  text-nowrap>\n\n            <p text-wrap style="font-size: 16px;color: #1a2532;margin-top: 5px">₹ {{(bouncedData.Amount+bouncedData.ServiceTaxTotal).toLocaleString()}}</p>\n\n            <p text-wrap style="margin-top: 5px" *ngIf="bouncedData.ServiceTaxTotal != 0">( Basic: {{(bouncedData.Amount)}}/- + Tax: {{(bouncedData.ServiceTaxTotal)}}/- )</p>\n\n            <p text-wrap style="margin-top: 15px">Bounced on {{bouncedData.ChequeBouncedDate | date: \'d MMMM, y\'}} by Cheque of {{bouncedData.ChequeBankName}} {{bouncedData.ChequeNumber}} dated {{bouncedData.ChequeDate | date: \'d MMMM y\'}}</p>\n\n          </ion-item>\n\n        </ion-item-group>\n\n\n\n\n\n\n\n       \n\n\n\n\n\n        <!-- <ion-item style="font-weight: bold;font-size: 17px;">{{ CourseName }}</ion-item> -->\n\n      <!-- <ion-item-group>\n\n          <ion-item style="align-items: left;min-height: 3.4rem;">\n\n              <ion-label class="subLbl">Admission Date</ion-label>\n\n              <ion-label class="subLbl">{{admissionDate | date: \'d MMMM, y\'}}</ion-label>\n\n          </ion-item>\n\n\n\n          <ion-item style="align-items: left;min-height: 3.4rem;">\n\n              <ion-label class="subLbl">Fees</ion-label>\n\n              <ion-label class="subLbl">Rs.{{fees.toLocaleString()}}</ion-label>\n\n          </ion-item>\n\n\n\n          <ion-item style="align-items: left;min-height: 3.4rem;">\n\n              <ion-label class="subLbl">Additional Fees</ion-label>\n\n              <ion-label class="subLbl">Rs.{{additionalFees.toLocaleString()}}</ion-label>\n\n          </ion-item>\n\n\n\n          <ion-item style="align-items: left;min-height: 3.4rem;" *ngIf="discount != 0" >\n\n            <ion-label class="subLbl">Discount</ion-label>\n\n            <ion-label class="subLbl">Rs.{{discount.toLocaleString()}}</ion-label>\n\n          </ion-item>\n\n\n\n          <ion-item style="align-items: left;min-height: 3.4rem;">\n\n              <ion-label class="subLbl">Total</ion-label>\n\n              <ion-label class="subLbl">Rs.{{total.toLocaleString()}}</ion-label>\n\n          </ion-item>\n\n        </ion-item-group> -->\n\n\n\n    </ion-item-group>\n\n\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="nodata">\n\n    <ion-item>\n\n      Data not available!\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="nohit">\n\n    <ion-item>\n\n      Data not available!\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\admission-detail\admission-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */]])
    ], AdmissionDetailPage);
    return AdmissionDetailPage;
}());

//# sourceMappingURL=admission-detail.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmissionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admission_detail_admission_detail__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AdmissionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdmissionPage = (function () {
    function AdmissionPage(storage, navCtrl, navParams, eduService) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eduService = eduService;
        this.nodata = false;
        this.validdata = true;
        this.getAdmission();
    }
    AdmissionPage.prototype.ionViewDidLoad = function () {
        this.storage.set('page', "AdmissionPage");
        console.log('ionViewDidLoad AdmissionPage');
    };
    AdmissionPage.prototype.ionViewDidEnter = function () {
        this.storage.set('page', "AdmissionPage");
        console.log("ionViewDidEnter AdmissionPage");
    };
    // ionViewDidEnter(){
    //   this.getAdmission();
    // }
    AdmissionPage.prototype.refreshDoc = function (refresher) {
        this.getAdmission();
        refresher.complete();
    };
    AdmissionPage.prototype.getAdmission = function () {
        var _this = this;
        var data = null;
        this.storage.get('userData').then(function (val) {
            console.log('Your id is', val.StudentID);
            console.log('Your Role', val.Parent);
            data = {
                StudentId: val.StudentID,
                LoginRole: val.Parent
            };
            _this.eduService.getAdmission(data).then(function (response) {
                console.log("user data = " + JSON.stringify(response));
                if (response['Data'].length == 0) {
                    _this.admission = [];
                    _this.nodata = true;
                }
                else {
                    _this.validdata = true;
                    _this.nodata = false;
                    _this.admission = response['Data'];
                }
            }).catch(function (error) {
                console.log("error = ", error);
            });
        });
    };
    AdmissionPage.prototype.rowClick = function (data) {
        console.log("data = ", data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__admission_detail_admission_detail__["a" /* AdmissionDetailPage */], {
            AdmissionFeesDetailID: data.AdmissionFeesDetailID,
        });
    };
    AdmissionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admission',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\admission\admission.html"*/'<!--\n\n  Generated template for the AdmissionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="home_header">\n\n\n\n    <ion-navbar style="background-color:btn">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Admission</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n\n\n  <ion-refresher (ionRefresh)="refreshDoc($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <!-- <ion-grid>\n\n    <ion-card class="cardContainer" *ngFor="let admissionData of admission">\n\n      <ion-row>\n\n        <ion-col class="leftTxt" col-5>\n\n          Course Name :\n\n        </ion-col>\n\n        <ion-col class="rightTxt" col-7>\n\n          {{admissionData.CourseName}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col class="leftTxt" col-5>\n\n          Status :\n\n        </ion-col>\n\n        <ion-col class="rightTxt" col-7>\n\n          {{ \'Next installment of Rs.\'+ admissionData.Fees+\' due on \'}}{{admissionData.InstallmentDate | date: \'EEE, MMMM d, y\'}}\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>\n\n\n\n\n\n\n\n  </ion-grid> -->\n\n\n\n  <ion-card class="cardContainer" *ngFor="let admissionData of admission" (click)="rowClick(admissionData)" >\n\n    <ion-item-group>\n\n      <ion-item-divider style="color: #003b8e"> \n\n\n\n        {{admissionData.CourseName}}\n\n        <ion-icon name="ios-arrow-forward" *ngIf="admissionData.Fees == 0" item-end></ion-icon>\n\n      </ion-item-divider>\n\n\n\n      <ion-item *ngIf="admissionData.StatusID == 6"> \n\n          <p  text-wrap style="font-size: 16px;color: red;margin-top: 5px" >Admission is cancelled on {{admissionData.InstallmentDate | date: \'MMMM d, y\'}}</p>\n\n      </ion-item>\n\n      <ion-item style="border-bottom: 0.4px solid #f2f2f2" *ngIf="admissionData.Fees >0"  text-nowrap>\n\n          \n\n        <p *ngIf="admissionData.StatusID != 6" text-wrap style="font-size: 16px;color: #1a2532;margin-top: 5px">{{ \'Next installment of ₹\'+ admissionData.Fees+\' due on \'}}{{admissionData.InstallmentDate | date: \'MMMM d, y\'}}</p>\n\n        <!-- <p text-wrap style="margin-top: 5px">{{\'Tests : \'+performanceDataDetails.ExamCount+\' . Percentage : \'+performanceDataDetails.Percentage+\'%\'}}</p> -->\n\n        <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n      </ion-item>\n\n\n\n\n\n    </ion-item-group>\n\n  </ion-card>\n\n  <ion-card *ngIf="nodata">\n\n    <ion-item>\n\n        No admission found.\n\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\admission\admission.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */]])
    ], AdmissionPage);
    return AdmissionPage;
}());

//# sourceMappingURL=admission.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdubiggServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';
//import { Http, Headers, RequestOptions, RequestOptionsArgs, RequestMethod, Request } from '@angular/http';






/*
  Generated class for the EdubiggServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EdubiggServiceProvider = (function () {
    function EdubiggServiceProvider(storage, http, loadingCtrl, network, toastCtrl) {
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.toastCtrl = toastCtrl;
        //uri: string = "http://api.gsgworld.xyz/api/";
        //uri: string = "http://api.sambodhiinstitute.in/api/";
        this.uri = "http://api.avalonlearning.in/api/";
        console.log('Hello EdubiggServiceProvider Provider');
        this.storage.set('url', "http://www.avalonlearning.in/");
    }
    EdubiggServiceProvider.prototype.getMenu = function () {
        return this.postNeoData(this.uri + 'Login/fetchStudentMenu', {});
    };
    EdubiggServiceProvider.prototype.getPunch = function (data) {
        return this.postNeoData(this.uri + 'Student/fetchPunches', data);
    };
    EdubiggServiceProvider.prototype.getMessages = function (data) {
        return this.postNeoData(this.uri + 'fcm/getMessage', data);
    };
    EdubiggServiceProvider.prototype.login = function (data) {
        return this.postNeoData(this.uri + 'Login/Login', data);
    };
    EdubiggServiceProvider.prototype.changePassword = function (data) {
        return this.postNeoData(this.uri + 'Student/changePassword', data);
    };
    EdubiggServiceProvider.prototype.getLeave = function (data) {
        return this.postNeoData(this.uri + 'Leaves/fetchLeaves', data);
    };
    EdubiggServiceProvider.prototype.addLeave = function (data) {
        return this.postNeoData(this.uri + 'Leaves/addLeave', data);
    };
    EdubiggServiceProvider.prototype.fcm = function (data) {
        return this.postNeoData(this.uri + 'fcm/saveFcmData', data);
    };
    EdubiggServiceProvider.prototype.getScheduleData = function (data) {
        return this.postNeoData(this.uri + 'Schedule/fetchDashboard', data);
    };
    EdubiggServiceProvider.prototype.getPerformance = function (data) {
        return this.postNeoData(this.uri + 'Performance/fetchPerformance', data);
    };
    EdubiggServiceProvider.prototype.getPerformanceDetail = function (data) {
        return this.postNeoData(this.uri + 'Performance/fetchPerformanceDetails', data);
    };
    EdubiggServiceProvider.prototype.getFeedback = function (data) {
        return this.postNeoData(this.uri + 'Feedback/fetchFeedback', data);
    };
    EdubiggServiceProvider.prototype.addFeedback = function (data) {
        return this.postNeoData(this.uri + 'Feedback/addFeedback', data);
    };
    EdubiggServiceProvider.prototype.getFeedbackDetails = function (data) {
        return this.postNeoData(this.uri + 'Feedback/fetchFeedbackDetail', data);
    };
    EdubiggServiceProvider.prototype.addFeedbackComment = function (data) {
        return this.postNeoData(this.uri + 'Feedback/addFeedbackComment', data);
    };
    EdubiggServiceProvider.prototype.getAttendance = function (data) {
        return this.postNeoData(this.uri + 'Attendance/fetchAttendance', data);
    };
    EdubiggServiceProvider.prototype.getAttendanceDetail = function (data) {
        return this.postNeoData(this.uri + 'Attendance/fetchAttendanceDetails', data);
    };
    EdubiggServiceProvider.prototype.getAdmission = function (data) {
        return this.postNeoData(this.uri + 'Admission/fetchAdmission', data);
    };
    EdubiggServiceProvider.prototype.getAdmissionDetail = function (data) {
        return this.postNeoData(this.uri + 'Admission/fetchAdmissionDetails', data);
    };
    EdubiggServiceProvider.prototype.getDocuments = function (data) {
        return this.postNeoData(this.uri + 'Document/fetchDocument', data);
    };
    EdubiggServiceProvider.prototype.getProfile = function (data) {
        return this.postNeoData(this.uri + 'Student/fetchProfile', data);
    };
    EdubiggServiceProvider.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3500,
            position: 'bottom'
        });
        toast.present();
    };
    EdubiggServiceProvider.prototype.postNeoData = function (uri, data) {
        var _this = this;
        if (data.hasOwnProperty('fcmToken') && data.fcmToken == null)
            data.fcmToken = '';
        if (this.network.type != "none") {
            var loading_1 = null;
            loading_1 = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Please wait...'
            });
            loading_1.present();
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            console.log(data);
            headers.append('Content-Type', 'application/json');
            return new Promise(function (resolve, reject) {
                _this.http.post(uri, data, { headers: headers })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    // this.data = data;
                    resolve(data);
                    setTimeout(function (e) {
                        loading_1.dismiss();
                    }, 500);
                    console.log(data.status);
                }, function (error) {
                    reject(error.json());
                    console.log('here is problem');
                    _this.presentToast("Sorry, Something went wrong.");
                    setTimeout(function (e) {
                        loading_1.dismiss();
                    }, 500);
                });
            });
        }
        else {
            this.presentToast("No internet connection. Please check your connection settings and try again.");
        }
    };
    EdubiggServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], EdubiggServiceProvider);
    return EdubiggServiceProvider;
}());

//# sourceMappingURL=edubigg-service.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AttendanceDetailPage } from '../attendance-detail/attendance-detail';




/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AttendancePage = (function () {
    function AttendancePage(storage, navCtrl, navParams, eduService) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eduService = eduService;
        this.finalArray = [];
        this.nodata = false;
        this.fromDate = "";
        this.toDate = "";
        this.totalD = 0;
        this.totalP = 0;
        this.totalA = 0;
        this.totalPercentage = "";
        this.validdata = true;
        var start = __WEBPACK_IMPORTED_MODULE_5_moment___default()().startOf('isoWeek').format('YYYY-MM-DD');
        var end = __WEBPACK_IMPORTED_MODULE_5_moment___default()().endOf('isoWeek').format('YYYY-MM-DD');
        this.totalD = 0;
        this.totalP = 0;
        this.totalA = 0;
        this.fromDate = start;
        this.toDate = end;
        this.getAttendanceData(this.fromDate, this.toDate);
    }
    AttendancePage.prototype.ionViewDidLoad = function () {
        this.storage.set('page', "AttendancePage");
        console.log('ionViewDidLoad AttendancePage');
    };
    AttendancePage.prototype.ionViewDidEnter = function () {
        this.storage.set('page', "AttendancePage");
        console.log("ionViewDidEnter AttendancePage");
    };
    /**attendancerowClick(data) {
      console.log("data", data);
      this.navCtrl.push(AttendanceDetailPage, {
        totalD: data.Total,
        present: data.TotalPresent,
        absent: data.TotalAbsent,
        percentage: data.percentage,
        SubjectID: data.SubjectID,
        StandardID : data.StandardID,
        StandardName: data.StandardName,
        SubjectName: data.SubjectName,
      });
    }**/
    // ionViewDidEnter(){
    //   this.getAttendanceData(this.fromDate, this.toDate);
    // }
    AttendancePage.prototype.resetData = function () {
        var start = __WEBPACK_IMPORTED_MODULE_5_moment___default()().startOf('isoWeek').format('YYYY-MM-DD');
        var end = __WEBPACK_IMPORTED_MODULE_5_moment___default()().endOf('isoWeek').format('YYYY-MM-DD');
        this.fromDate = start;
        this.toDate = end;
        this.getAttendanceData(this.fromDate, this.toDate);
    };
    AttendancePage.prototype.refresh = function (refresher) {
        this.getAttendanceData(this.fromDate, this.toDate);
        refresher.complete();
    };
    AttendancePage.prototype.getStartDate = function () {
        var startD = this.fromDate || "";
        var endD = this.toDate || "";
        //console.log("startD ",startD ," endD =",endD);
        var date = new Date();
        console.log("startD ", startD, " endD =", endD, " date =", date);
        this.getAttendanceData(startD, endD);
    };
    // rowClick(data){
    //   this.navCtrl.push(PerformanceDetailPage,{
    //     StudentID:data.StudentID,
    //     AdmissionFeesDetailID:data.AdmissionFeesDetailID,
    //     StandardID:data.StandardID,
    //     SubjectID:data.SubjectID,
    //   });
    // }
    AttendancePage.prototype.refreshPerformance = function (refresher) {
        this.getAttendanceData(this.fromDate, this.toDate);
        refresher.complete();
    };
    AttendancePage.prototype.getAttendanceData = function (startD, endD) {
        var _this = this;
        var _self = this;
        //var totalD = 0;
        //var totalP = 0;
        //var totalA = 0;
        var data = null;
        //var classes = [];
        //var finalData = [];
        this.storage.get('userData').then(function (val) {
            console.log('Your id is', val);
            data = {
                StudentID: val.StudentID,
                // AdmissionFeesDetailID : val.AdmissionFeesDetailID,
                FromDate: startD,
                //FromDate : '2018-06-01',
                // StandardID : val.StandardId,
                // SubjectID : null,
                ToDate: endD,
                LoginRole: val.Parent
            };
            _this.eduService.getAttendance(data).then(function (response) {
                console.log(response['Data']);
                if (response['Data'].length == 0) {
                    _this.attendance = [];
                    console.log(data);
                    _this.nodata = true;
                }
                else {
                    _this.nodata = false;
                    //   this.totalPercentage = response['totalPercentage'];
                    //   this.totalP = response['totalP'];
                    //   this.totalD = response['totalD'];
                    //   this.totalA = response['totalA']; 
                    //   this.nodata = false;
                    //  // this.validdata = true;
                    //   this.attendance = response['Data'];
                    /** _.each(response['Data'], function (value, key) {
                       console.log("element =", value);
                       console.log("v.Total = ", value.Total);
                       totalD++;
                       if(value.PresentAbsent == 0)
                         totalP++;
                       else
                         totalA++;
                       //totalA = totalA + value.TotalAbsent;
                       classes.push(value.StandardName);
                     });
           
                     this.totalD = totalD;
                     this.totalP = totalP;
                     this.totalA = totalA;
           
                     **/
                    /**var unique = classes.filter(function (item, i, ar) { return ar.indexOf(item) === i; });
          
                    console.log("unique =", unique, this.totalD);
                    _.each(unique, function (v, k) {
                      var abc = _.where(response['Data'], { StandardName: v });
                      finalData.push(abc);
                    });**/
                    _this.attendance = response['Data'];
                    console.log(_this.attendance);
                    //this.datelist = _.chain(this.attendance).pluck('LectureDate').unique().value();
                    //console.log(this.datelist);
                    //console.log(this.dateatt);
                    var tempdate = '';
                    var array = [];
                    _self.finalArray = [];
                    __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](_this.attendance, function (i, v) {
                        // console.log("HELLO TEST");
                        // console.log(v);
                        // console.log(i.LectureDate)
                        if (tempdate == i.LectureDate) {
                            array.push(i);
                        }
                        else {
                            if (v != 0) {
                                _self.finalArray.push(array);
                                array = [];
                            }
                            array.push(i);
                        }
                        tempdate = i.LectureDate;
                    });
                    console.log(array);
                    _self.finalArray.push(array);
                    console.log(_self.finalArray);
                    //console.log(this.attendance[0].LectureDate);
                    _self.tempdate = _self.attendance[0].LectureDate;
                    console.log(_self.tempdate);
                }
            }).catch(function (error) {
                console.log("error = ", error);
            });
        });
    };
    AttendancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-attendance',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\attendance\attendance.html"*/'<!--\n\n  Generated template for the AttendancePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="home_header">\n\n\n\n  <ion-navbar style="background-color:btn">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Attendance</ion-title>\n\n  </ion-navbar>\n\n  <ion-card style="width: 100%;margin:0;">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-5 text-center>From Date</ion-col>\n\n                <ion-col col-5 text-center>To Date</ion-col>\n\n                <ion-col></ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n\n\n                <ion-col col-5>\n\n                    <button ion-button block outline class="datebtn">\n\n                        <ion-datetime displayFormat=\'MMM DD, YYYY\' placeholder="DD-MM-YYYY" (ionChange)="getStartDate()" [(ngModel)]="fromDate" min="2012" max="2030-12-31"></ion-datetime>\n\n                    </button>\n\n                </ion-col>\n\n\n\n                <ion-col col-5>\n\n                    <button ion-button block outline class="datebtn">\n\n                        <ion-datetime displayFormat="MMM DD, YYYY" placeholder="DD-MM-YYYY" (ionChange)="getStartDate()" [(ngModel)]="toDate" min="2012" max="2030-12-31"></ion-datetime>\n\n                    </button>\n\n                </ion-col>\n\n\n\n                <ion-col col-2>\n\n                    <button ion-button block (click)="resetData()">\n\n                        <ion-icon name="md-refresh"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-card>\n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n  \n\n    <ion-refresher (ionRefresh)="refresh($event)"> \n\n        <ion-refresher-content></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n <div *ngIf="!nodata">\n\n  <ion-card class="cardContainer" *ngFor="let x of finalArray">\n\n      \n\n      <ion-card-header>\n\n       <p> <ion-datetime class="dateFont" displayFormat="DDD, MMM D, YYYY" [(ngModel)]="x[0].LectureDate"></ion-datetime></p>\n\n      </ion-card-header>\n\n     \n\n\n\n      <ion-card-content *ngFor="let y of x">\n\n        <ion-grid>\n\n          <ion-row >\n\n            <ion-col col-2 id="status">\n\n              <ion-icon  [ngClass]="y.PresentAbsent == 0 ?\'statusClass present\':\'statusClass absent\'" item-start>{{y.PresentAbsent == 0 ? \'P\':\'A\'}}</ion-icon>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n              <p>  {{y.StandardName}} - {{y.SubjectName}}</p> \n\n              <p>  {{y.LectureTimeStart}} - {{y.LectureTimeEnd}}</p> \n\n              <ion-note> Topics : {{y.TopicName}}</ion-note>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card-content>\n\n    \n\n  </ion-card>\n\n  </div>\n\n\n\n  <ion-card *ngIf="nodata">\n\n    <ion-item>\n\n     No attendance found for the selected date range.\n\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\attendance\attendance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */]])
    ], AttendancePage);
    return AttendancePage;
}());

//# sourceMappingURL=attendance.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { FormBuilder, FormGroup, Validators } from '@angular/forms';



//import moment from 'moment';
/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangePasswordPage = (function () {
    function ChangePasswordPage(viewCtrl, storage, navCtrl, navParams, formBuilder, eduService, toastCtrl) {
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.eduService = eduService;
        this.toastCtrl = toastCtrl;
        this.changePasswordForm = formBuilder.group({
            currentP: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            newP: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            cnewP: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    }
    ChangePasswordPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3500,
            position: 'bottom'
        });
        toast.present();
    };
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePasswordPage');
    };
    ChangePasswordPage.prototype.changePassword = function () {
        var _this = this;
        this.storage.get('userData').then(function (val) {
            _this.submitAttempt = true;
            var data = null;
            if (_this.changePasswordForm.value.newP == _this.changePasswordForm.value.cnewP) {
                _this.match = false;
            }
            else {
                _this.match = true;
            }
            if (_this.changePasswordForm.valid && !_this.match) {
                _this.storage.get('userData').then(function (val) {
                    console.log('Your id is', val);
                    data = {
                        StudentId: val.StudentID,
                        AdmissionFeesDetailID: val.AdmissionFeesDetailID,
                        StandardID: val.StandardId,
                        Parent: val.Parent,
                        CurrentPassword: _this.changePasswordForm.value.currentP,
                        NewPassword: _this.changePasswordForm.value.newP,
                        ConfirmPassword: _this.changePasswordForm.value.cnewP,
                    };
                    _this.eduService.changePassword(data).then(function (response) {
                        console.log("response =", response);
                        // if(response['Data'][0].code ==1 || response['Data'][0].code == "1"){
                        //     this.viewCtrl.dismiss();
                        // }
                        _this.code = response['Code'];
                        //console.log("Code aaya "+this.code); 
                        // if code==0 then error
                        if (_this.code == 0) {
                            _this.presentToast(response['Message']);
                        }
                        else {
                            _this.presentToast(response['Data'][0].message);
                            //this.changePasswordForm.reset();
                            //this.changePasswordForm.currentP.reset();
                            // this.changePasswordForm.newP.reset();
                            // this.changePasswordForm.cnewP.reset();
                        }
                    }).catch(function (error) {
                        console.log("error = ", error);
                    });
                });
            }
            else {
                console.log("else");
            }
        });
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\change-password\change-password.html"*/'<!--\n\n  Generated template for the ChangePasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="home_header">\n\n\n\n    <ion-navbar style="background-color:btn">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Change Password</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row center style="margin-top: 30px">\n\n      <ion-col col-12>\n\n\n\n        <ion-list>\n\n          <form [formGroup]="changePasswordForm" class="formContainer">\n\n            \n\n            <ion-item>\n\n              <ion-label floating>Current Password</ion-label>\n\n              <ion-input type="password" formControlName="currentP"></ion-input>\n\n            </ion-item>\n\n            <p class="errorClass" *ngIf="!changePasswordForm.controls.currentP.valid  && (changePasswordForm.controls.currentP.dirty || submitAttempt)">* Please enter current password</p>\n\n            \n\n            <ion-item>\n\n              <ion-label floating>New Password</ion-label>\n\n              <ion-input type="password" formControlName="newP"></ion-input>\n\n            </ion-item>\n\n            <p class="errorClass" *ngIf="!changePasswordForm.controls.newP.valid  && (changePasswordForm.controls.newP.dirty || submitAttempt)">* Please enter new password</p>\n\n\n\n            \n\n            <ion-item> \n\n              <ion-label floating>Confirm New Password</ion-label>\n\n              <ion-input type="password" formControlName="cnewP"></ion-input>\n\n            </ion-item>\n\n            <p class="errorClass" *ngIf="!changePasswordForm.controls.cnewP.valid  && (changePasswordForm.controls.cnewP.dirty || submitAttempt)">* Please enter new password again</p>\n\n            <p class="errorClass" *ngIf="match">* Password doesn\'t match</p>\n\n          \n\n          </form>\n\n          <!-- <ion-item> -->\n\n            <!-- <button (click)="login()"  ion-button color="danger" outline block>Log In</button> -->\n\n            <button ion-button (click)="changePassword()" style="margin-top: 20px" block color="btn">Change Password</button>\n\n\n\n          <!-- </ion-item> -->\n\n\n\n        </ion-list>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\change-password\change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mathjs__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mathjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the DocumentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DocumentsPage = (function () {
    function DocumentsPage(navCtrl, iab, navParams, storage, eduService) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.navParams = navParams;
        this.storage = storage;
        this.eduService = eduService;
        // const fileTransfer: FileTransferObject = this.transfer.create();
        this.getDocuments();
    }
    DocumentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DocumentsPage');
        console.log(this.documents);
    };
    DocumentsPage.prototype.refreshDoc = function (refresher) {
        this.getDocuments();
        refresher.complete();
    };
    DocumentsPage.prototype.getDocuments = function () {
        var _this = this;
        var data = null;
        this.storage.get('id').then(function (val) {
            console.log('Your id is', val);
            data = {
                StudentId: val,
            };
            _this.eduService.getDocuments(data).then(function (response) {
                console.log("user data = " + JSON.stringify(response));
                if (response['Data'].length == 0) {
                    _this.documents = [];
                    _this.nodata = true;
                }
                else {
                    _this.nodata = false;
                    _this.documents = response['Data'];
                    _this.documentBackup = response['Data'];
                }
            }).catch(function (error) {
                console.log("error = ", error);
            });
        });
    };
    DocumentsPage.prototype.calculateSize = function (bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        var i = parseInt(__WEBPACK_IMPORTED_MODULE_2_mathjs__["floor"](__WEBPACK_IMPORTED_MODULE_2_mathjs__["log"](bytes) / __WEBPACK_IMPORTED_MODULE_2_mathjs__["log"](1024)));
        var finalSize = __WEBPACK_IMPORTED_MODULE_2_mathjs__["round"](bytes / __WEBPACK_IMPORTED_MODULE_2_mathjs__["pow"](1024, i), 2) + ' ' + sizes[i];
        return (finalSize == 'NaN undefined' ? "" : finalSize + ' - ');
    };
    DocumentsPage.prototype.download = function (url, UploadFileName) {
        return __awaiter(this, void 0, void 0, function () {
            var extensions, edubiggUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        extensions = ["FLV", "MP4", "AVI", "WMV", "AMV", "MPEG", "M4V", "flv", "mp4", "avi", "wmv", "amv", "mpeg", "m4v"];
                        if (!extensions.find(function (ext) { return url.toLowerCase().endsWith(ext); })) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.storage.get('url')];
                    case 1:
                        edubiggUrl = _a.sent();
                        this.iab.create(edubiggUrl + "student/student_documents1.asp?url=" + url + "&UploadFileName=" + UploadFileName, "_blank", { toolbar: 'no', location: "no" });
                        return [3 /*break*/, 3];
                    case 2:
                        window.open(url, "_blank");
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DocumentsPage.prototype.getTextData = function (text_data) {
        this.documents = this.documentBackup;
        this.documents = this.documents.filter(function (item) {
            console.log("item", item);
            return (item.UploadFileName.toLowerCase().indexOf(text_data.toLowerCase()) > -1);
        });
    };
    DocumentsPage.prototype.hideList = function () {
        this.documents = this.documentBackup;
    };
    DocumentsPage.prototype.getFileName = function (txt) {
        var fileFormat = {
            xlsx: "Excel File",
            txt: "Notepad File",
            docx: "Word File",
            png: "File",
            asp: "File",
            webm: "File",
            jpg: "Image File",
            rar: "Zip File",
            pdf: "Portable Document Format (PDF)",
            pptx: "Powerpoint Template File",
            mp3: "Audio File",
            mp4: "Video File"
        };
        return fileFormat[txt.toLowerCase()];
    };
    DocumentsPage.prototype.getClass = function (txt) {
        var fileFormat = {
            xlsx: "ExcelFile",
            txt: "NotepadFile",
            docx: "WordFile",
            png: "File",
            asp: "File",
            webm: "File",
            jpg: "ImageFile",
            rar: "ZipFile",
            pdf: "pdfFile",
            pptx: "pptFile",
            mp3: "AudioFile",
            mp4: "VideoFile"
        };
        return fileFormat[txt.toLowerCase()];
    };
    DocumentsPage.prototype.getColor = function (txt) {
        var fileFormat = {
            xlsx: "green",
            txt: "blue",
            docx: "blue",
            png: "gray",
            asp: "gray",
            webm: "gray",
            jpg: "gray",
            rar: "red",
            pdf: "red",
            pptx: "orange",
            mp3: "orange",
            mp4: "orange"
        };
        return fileFormat[txt.toLowerCase()];
    };
    DocumentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-documents',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\documents\documents.html"*/'<!--\n\n  Generated template for the DocumentsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="home_header">\n\n\n\n  <ion-navbar style="background-color:btn">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Documents</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-searchbar [(ngModel)]="companyValue" (ionCancel)="hideList()" (ionClear)="hideList()" (keyup)="getTextData($event.target.value)">\n\n  </ion-searchbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n\n\n    <ion-refresher (ionRefresh)="refreshDoc($event)"> \n\n        <ion-refresher-content></ion-refresher-content>\n\n      </ion-refresher>\n\n<!-- \n\n  <ion-card class="cardContainer"> -->\n\n      \n\n      \n\n    <!-- <ion-grid class="subDetail">\n\n      <ion-row *ngFor="let documentsData of documents" (click)="download(documentsData.URL)">\n\n        <ion-col text-left col-1>\n\n          <ion-icon name="ios-document-outline" style="color: darkgrey;font-size: 25px;font-weight: bold"></ion-icon>\n\n\n\n\n\n\n\n        </ion-col>\n\n        <ion-col text-left style="text-overflow: ellipsis;" col-10>\n\n          <ion-row style="border-bottom :0px;min-height: 30px">\n\n              {{documentsData.UploadFileName}}\n\n          </ion-row>\n\n          <ion-row style="border-bottom :0px;min-height: 30px;color: darkgrey">\n\n              {{ documentsData.UploadFileName.substring(documentsData.UploadFileName.indexOf(".")+1) }} - {{ calculateSize(documentsData.UploadFileSize) }} - {{documentsData.ActualTime | date: \'EEE, MMMM d, y\'}}\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col col-1>\n\n          <ion-icon name="md-cloud-download" style="color: #78B254;font-size: 25px;font-weight: bold"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid> -->\n\n  <!-- </ion-card> -->\n\n\n\n  <ion-card class="cardContainer" *ngFor="let documentsData of documents">\n\n    <ion-item-group>\n\n      <ion-item style="border-bottom: 0.4px solid #f2f2f2" (click)="download(documentsData.URL,documentsData.UploadFileName)" text-nowrap>\n\n        <ion-icon [ngClass]="getClass(documentsData.UploadFileName.substring(documentsData.UploadFileName.lastIndexOf(\'.\')+1))" [ngStyle]="{ \'color\': getColor(documentsData.UploadFileName.substring(documentsData.UploadFileName.lastIndexOf(\'.\')+1))}" class="iconFont" item-start></ion-icon>\n\n        <p text-wrap style="font-size: 16px;color: #1a2532;margin-top: 5px">{{documentsData.UploadFileName}}</p>\n\n        <p text-wrap style="margin-top: 5px">{{ getFileName(documentsData.UploadFileName.substring(documentsData.UploadFileName.lastIndexOf(".")+1)) }} - {{ calculateSize(documentsData.UploadFileSize) }}{{documentsData.ActualTime | date: \'EEE, MMMM d, y\'}}</p>\n\n        <p text-wrap style="margin-top: 5px">{{documentsData.Description}}</p>\n\n        <ion-icon name="md-cloud-download" style="color: #78B254" item-end></ion-icon>\n\n      </ion-item>\n\n    </ion-item-group>\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="nodata">\n\n      <ion-item>\n\n          No files shared yet.\n\n      </ion-item>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\documents\documents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */]])
    ], DocumentsPage);
    return DocumentsPage;
}());

//# sourceMappingURL=documents.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Component } from '@angular/core';

//import * as _ from 'underscore';




//import { FeedbackPage } from '../feedback/feedback';
/**
 * Generated class for the FeedbackDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackDetailsPage = (function () {
    function FeedbackDetailsPage(storage, toastCtrl, navCtrl, navParams, eduService) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eduService = eduService;
        this.nodata = false;
        this.nohit = false;
        this.issueId = navParams.get('data');
    }
    FeedbackDetailsPage.prototype.ionViewDidLoad = function () {
        this.getFeedbackDetailData();
        //this.content.scrollToBottom(300);//300ms animation speed
    };
    // ionViewDidEnter(){
    //   this.content.scrollToBottom(300);//300ms animation speed
    // }
    FeedbackDetailsPage.prototype.ionViewWillEnter = function () {
        this.content.scrollToBottom(300);
        console.log("ionViewWillEnter");
    };
    FeedbackDetailsPage.prototype.getFeedbackDetailData = function () {
        var _this = this;
        var data = null;
        //var time = [];
        //var finalData = [];
        var id = String(this.issueId);
        data = {
            IssueID: id,
        };
        console.log(data);
        // return false;
        this.eduService.getFeedbackDetails(data).then(function (response) {
            console.log(response);
            if (response['Data'].length == 0) {
                _this.feedback = [];
                _this.nodata = true;
            }
            else {
                _this.nodata = false;
                _this.feedbackDetail = response['Data'];
                _this.Title = _this.feedbackDetail[0].IssueTitle;
                _this.desp = _this.feedbackDetail[0].IssueDescription;
                _this.IssueNotPickedUp = _this.feedbackDetail[0].IssueNotPickedUp;
                //  console.log("Yhaa pe" + this.IssueNotPickedUp)
            }
        }).catch(function (error) {
            console.log("error = ", error);
        });
    };
    /**refresh(refresher) {
             this.getFeedbackDetailData();
             refresher.complete();
           }**/
    // getComments() { 
    //   var data = null;
    //   var id = parseInt(this.issueId);
    //     data = {
    //       IssueID: id,
    //     };
    //     console.log(data);
    //     // return false;
    //     this.eduService.getFeedbackDetails(data).then((response) => {
    //       if (response['Data'].length == 0) {
    //         this.feedback = [];
    //         this.nodata = true;
    //       } else {
    //         this.nodata = false;
    //         var fdb =  this.feedbackDetail = response['Data'][0];
    //         console.log(fdb);
    //         this.Title = fdb['IssueTitle'];
    //         this.Desp = fdb['IssueDescription'];
    //       }
    //     }).catch((error) => {
    //       console.log("error = ", error);
    //     });  
    // }
    FeedbackDetailsPage.prototype.sendComment = function () {
        var _this = this;
        console.log('i m in');
        this.storage.get('parent2').then(function (val) {
            var issueId = String(_this.issueId);
            var data = {
                IssueID: issueId,
                comment: _this.comment,
                Parent: val
            };
            console.log(data);
            _this.eduService.addFeedbackComment(data).then(function (response) {
                var dt = response['Data'][0].Column1;
                console.log(dt);
                _this.nohit == false;
                if (_this.nohit == false) {
                    var toast = _this.toastCtrl.create({
                        message: response['Data'][0].message,
                        duration: 3000,
                        position: 'top',
                        cssClass: 'color:green',
                    });
                    toast.onDidDismiss(function () {
                        console.log('Dismissed toast');
                    });
                    toast.present();
                    setInterval(function () {
                        //this.rootPage = FeedbackPage;
                        //this.pageArray.push("FeedbackPage");
                    }, 300);
                    // window.location.reload();
                    // getFeedbackDetailData();
                }
                _this.getFeedbackDetailData();
                _this.comment = " ";
                //console.log(dt);
            }).catch(function (error) {
                console.log("error = ", error);
                _this.nohit = true;
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", Object)
    ], FeedbackDetailsPage.prototype, "content", void 0);
    FeedbackDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-feedback-details',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\feedback-details\feedback-details.html"*/'<!--\n\n  Generated template for the FeedbackFormPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n  <ion-header>\n\n\n\n    <ion-navbar style="background-color:btn">\n\n      <ion-title>Feedback Details</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n\n\n<ion-content #content class="FeedbackDetailsPage"> \n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n          <ion-card>\n\n              <ion-card-header>\n\n                Title : {{Title}} <br>\n\n                <p style="white-space: pre-line;">{{desp}}</p>\n\n              </ion-card-header>\n\n          </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>  \n\n	<div *ngIf="IssueNotPickedUp == 1">\n\n		<ion-card *ngFor="let comment of feedbackDetail; let last=last">\n\n			<ion-card-content style="padding-top:17%;">\n\n			  <b>{{comment.commentuser}}</b><br>\n\n			  <small>on {{comment.IssueDate1}} at {{comment.IssueTime}}</small>\n\n			  <p>{{comment.IssueComment}}</p>\n\n			</ion-card-content>\n\n		</ion-card>\n\n	</div>\n\n	\n\n  \n\n</ion-content>\n\n\n\n<div *ngIf="IssueNotPickedUp == 1">\n\n<ion-footer>\n\n  <div style="text-align: center">\n\n    <ion-list >\n\n        <ion-item >\n\n          <ion-textarea type="text" placeholder="Write here..." [(ngModel)]=\'comment\'></ion-textarea>\n\n           <button ion-button clear (click)="sendComment()" item-end >\n\n              <ion-icon ios="ios-send" md="md-send" style="font-size:32px;"> </ion-icon>\n\n          </button>\n\n        </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-footer>\n\n</div>\n\n'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\feedback-details\feedback-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */]])
    ], FeedbackDetailsPage);
    return FeedbackDetailsPage;
}());

//# sourceMappingURL=feedback-details.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { FormBuilder, FormGroup, Validators } from '@angular/forms';




/**
 * Generated class for the FeedbackFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackFormPage = (function () {
    function FeedbackFormPage(storage, navCtrl, navParams, formBuilder, eduService, toastCtrl, viewCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.eduService = eduService;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.feedbackForm = formBuilder.group({
            type: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            desc: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    }
    FeedbackFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbackFormPage');
    };
    FeedbackFormPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3500,
            position: 'bottom'
        });
        toast.present();
    };
    FeedbackFormPage.prototype.noteHandler = function (keyCode, whc) {
        console.log(keyCode);
        var ths = this;
        setTimeout(function () {
            var charStr = String.fromCharCode(keyCode);
            if (keyCode == 34 || charStr == "&" || keyCode == 39 || keyCode == 59)
                ths[whc] = ths[whc].slice(0, -1);
            console.log(ths[whc]);
        }, 100);
    };
    FeedbackFormPage.prototype.postFeedback = function () {
        var _this = this;
        this.storage.get('userData').then(function (val) {
            _this.submitAttempt = true;
            if (_this.feedbackForm.valid) {
                var data = {
                    StudentID: val.StudentID,
                    ActualTimevalue: __WEBPACK_IMPORTED_MODULE_5_moment___default()().format("YYYY-MM-DD"),
                    IssueStatus: "Open",
                    Parent: val.Parent,
                    IssueCategory2: _this.feedbackForm.value.type,
                    issue_title2: _this.feedbackForm.value.title,
                    issue_description2: _this.feedbackForm.value.desc,
                };
                console.log(data);
                _this.eduService.addFeedback(data).then(function (userData) {
                    console.log("user data = " + JSON.stringify(userData));
                    if (userData['Data'].length == 0) {
                        _this.presentToast(userData['Message'] || "Sorry, Something went wrong.");
                    }
                    _this.viewCtrl.dismiss();
                }).catch(function (error) {
                    _this.viewCtrl.dismiss();
                    console.log("error = ", error);
                });
            }
        });
    };
    FeedbackFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback-form',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\feedback-form\feedback-form.html"*/'<!--\n\n  Generated template for the FeedbackFormPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar style="background-color:btn">\n\n      <ion-title>Feedback</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n\n\n<ion-content padding> \n\n<ion-grid>\n\n    <ion-row center style="margin-top: 30px">\n\n        <ion-col col-12>\n\n         \n\n          <ion-list>\n\n              <form [formGroup]="feedbackForm" class="formContainer">\n\n              <ion-item>\n\n                  <ion-label>Type</ion-label>\n\n                  <ion-select [(ngModel)]="Type" formControlName="type">\n\n                    <ion-option>Feedback</ion-option>\n\n                    <ion-option>Complaint</ion-option>\n\n                    <ion-option>Suggestion</ion-option>\n\n                    <ion-option>Compliment</ion-option>\n\n                  </ion-select>\n\n              </ion-item>\n\n                <p class="errorClass" *ngIf="!feedbackForm.controls.type.valid  && (feedbackForm.controls.type.dirty || submitAttempt)">* Please select type</p>\n\n            <ion-item>\n\n              <ion-label floating>Title</ion-label>\n\n              <ion-input type="text" (keypress)="noteHandler($event.keyCode, \'title\')" formControlName="title" [(ngModel)]="title"></ion-input>\n\n            </ion-item>\n\n            <p class="errorClass" *ngIf="!feedbackForm.controls.title.valid  && (feedbackForm.controls.title.dirty || submitAttempt)">* Please enter title</p>\n\n           \n\n                <ion-item>\n\n              <ion-label floating>Description</ion-label>\n\n              <ion-textarea type="text" (keypress)="noteHandler($event.keyCode, \'description\')" formControlName="desc" class="no-validation-line" [(ngModel)]="description"></ion-textarea>\n\n            </ion-item>\n\n            <br>\n\n            <p class="errorClass" *ngIf="!feedbackForm.controls.desc.valid  && (feedbackForm.controls.desc.dirty || submitAttempt)">* Please enter description</p>\n\n            \n\n            </form>\n\n            <ion-item>\n\n              <!-- <button (click)="login()"  ion-button color="danger" outline block>Log In</button> -->\n\n              <button ion-button (click)="postFeedback()"  block color="btn">Add feedback</button>\n\n  \n\n            </ion-item>\n\n          \n\n          </ion-list>\n\n       \n\n        </ion-col>\n\n      </ion-row>\n\n</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\feedback-form\feedback-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], FeedbackFormPage);
    return FeedbackFormPage;
}());

//# sourceMappingURL=feedback-form.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback_form_feedback_form__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feedback_details_feedback_details__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import moment from 'moment';


/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackPage = (function () {
    function FeedbackPage(navCtrl, navParams, storage, eduService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.eduService = eduService;
        this.nodata = false;
    }
    FeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbackPage');
    };
    FeedbackPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter  FeedbackPage');
        this.getFeedbackData();
    };
    FeedbackPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter FeedbackPage');
    };
    FeedbackPage.prototype.openFeedbackForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__feedback_form_feedback_form__["a" /* FeedbackFormPage */]);
    };
    FeedbackPage.prototype.openFeedbackDetails = function (issueId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__feedback_details_feedback_details__["a" /* FeedbackDetailsPage */], {
            data: issueId
        });
    };
    FeedbackPage.prototype.getFeedbackData = function () {
        var _this = this;
        var data = null;
        var time = [];
        var finalData = [];
        this.storage.get('id').then(function (val) {
            console.log('Your id is', val);
            data = {
                StudentId: val,
            };
            _this.eduService.getFeedback(data).then(function (response) {
                console.log("user data = " + JSON.stringify(response));
                if (response['Data'].length == 0) {
                    _this.feedback = [];
                    _this.nodata = true;
                }
                else {
                    _this.nodata = false;
                    //this.feedback = response['Data'];
                    __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](response['Data'], function (value, key) {
                        console.log("element =", value);
                        time.push(value.IssueDate);
                    });
                    var unique = time.filter(function (item, i, ar) { return ar.indexOf(item) === i; });
                    console.log("unique =", unique);
                    __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](unique, function (v, k) {
                        var abc = __WEBPACK_IMPORTED_MODULE_5_underscore__["where"](response['Data'], { IssueDate: v });
                        finalData.push(abc);
                    });
                    //this.feedback = finalData;
                    _this.feedbackData = response['Data'];
                    //console.log(feedbackData);
                }
            }).catch(function (error) {
                console.log("error = ", error);
            });
        });
    };
    FeedbackPage.prototype.refreshFeedback = function (refresher) {
        this.getFeedbackData();
        refresher.complete();
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\feedback\feedback.html"*/'<!--\n\n  Generated template for the FeedbackPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="home_header">\n\n\n\n  <ion-navbar style="background-color:btn">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Feedback</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content no-padding> \n\n  <ion-refresher (ionRefresh)="refreshFeedback($event)"> \n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n\n\n  <!-- <ion-card class="cardContainer" *ngFor="let feedbackData of feedback">\n\n       \n\n    \n\n        <ion-item-divider style="color: #003b8e">\n\n\n\n          {{feedbackData[0].IssueDate ? (feedbackData[0].IssueDate | date: \'EEE, MMMM d, y\') : "NA"}} \n\n\n\n        </ion-item-divider> -->\n\n  <ion-card *ngFor="let feedbackDetail of feedbackData">\n\n        <ion-item-group (click)="openFeedbackDetails(feedbackDetail.IssueID)">\n\n        \n\n            <ion-item-divider style="color: #003b8e">\n\n\n\n                 {{feedbackDetail.IssueTitle}}\n\n            </ion-item-divider>\n\n\n\n\n\n        <!-- <hr style="color: #dedede;height: 2px"> -->\n\n\n\n        \n\n        <ion-item style="align-items: center" >\n\n            <!-- <ion-label class="subLbl">{{feedbackDetail.IssueStatus}}</ion-label> -->\n\n            <p style="font-weight: bold;font-size: 17px">Status</p>\n\n            <button item-end ion-button [ngClass]="(feedbackDetail.IssueStatus).toLowerCase() == \'open\' ?\'blueBg\' :\'greenBg\'">  {{feedbackDetail.IssueStatus}} </button>\n\n        </ion-item>\n\n\n\n        <hr style="color: #dedede;height: 2px">\n\n\n\n        <!-- <ion-item style="font-weight: bold;font-size: 17px">Asignee</ion-item>\n\n        <ion-item style="align-items: left" class="statusClass">\n\n            <ion-label class="subLbl">{{(feedbackDetail.IssueOpenerFather == 0)?feedbackDetail.FatherFName+" "+feedbackDetail.FatherLName:""}} {{(feedbackDetail.IssueOpenerGuard == 0)?feedbackDetail.OthrGuardianFName+" "+feedbackDetail.OthrGuardianLName:""}} {{(feedbackDetail.IssueOpenerMother == 0)?feedbackDetail.MotherFName+" "+feedbackDetail.MotherLName:""}} {{(feedbackDetail.IssueOpenerStudent == 0)?feedbackDetail.StudentFName+" "+feedbackDetail.StudentLName:""}}</ion-label>        \n\n        </ion-item> -->\n\n\n\n        <ion-item style="align-items: center" >\n\n                <p style="font-weight: bold;font-size: 17px">Asignee</p>\n\n                <!-- <ion-label item-end class="subLbl">{{(feedbackDetail.IssueOpenerFather == 0)?feedbackDetail.FatherFName+" "+feedbackDetail.FatherLName:""}} {{(feedbackDetail.IssueOpenerGuard == 0)?feedbackDetail.OthrGuardianFName+" "+feedbackDetail.OthrGuardianLName:""}} {{(feedbackDetail.IssueOpenerMother == 0)?feedbackDetail.MotherFName+" "+feedbackDetail.MotherLName:""}} {{(feedbackDetail.IssueOpenerStudent == 0)?feedbackDetail.StudentFName+" "+feedbackDetail.StudentLName:""}}</ion-label>         -->\n\n                <button style="color: #000;font-size:1.4rem"  item-end clear ion-button>{{(feedbackDetail.IssueOpenerFather == 0)?feedbackDetail.FatherFName+" "+feedbackDetail.FatherLName:""}} {{(feedbackDetail.IssueOpenerGuard == 0)?feedbackDetail.OthrGuardianFName+" "+feedbackDetail.OthrGuardianLName:""}} {{(feedbackDetail.IssueOpenerMother == 0)?feedbackDetail.MotherFName+" "+feedbackDetail.MotherLName:""}} {{(feedbackDetail.IssueOpenerStudent == 0)?feedbackDetail.StudentFName+" "+feedbackDetail.StudentLName:""}}</button>\n\n        </ion-item>\n\n\n\n\n\n        <hr style="color: #dedede;height: 2px">\n\n\n\n        <ion-grid>\n\n          <ion-row class="detailRow">\n\n              <ion-col class="colBorder" col-6>\n\n                {{\'# \'+feedbackDetail.IssueID}}\n\n              </ion-col>\n\n              <ion-col col-6>\n\n                {{feedbackDetail.IssueCategory}}\n\n                <!-- <p text-wrap style="font-size: 16px;color: #1a2532;margin-top: 5px" [ngClass]="(feedbackDetail.IssueCategory == \'Complaint\')?\'openTxt\':(feedbackDetail.IssueCategory == \'Feedback\')?\'feedback\': (feedbackDetail.IssueCategory == \'Compliment\') ?\'compliment\':\'closeTxt\'" >{{feedbackDetail.IssueCategory}} <span style="color: #1a2532">{{ \' - \'+feedbackDetail.IssueTitle || "NA"}} </span> </p> -->\n\n              </ion-col>\n\n          </ion-row>\n\n\n\n\n\n          <!-- <ion-row class="detailRow">\n\n              <ion-col class="colBorder" col-6>\n\n                  Asignee\n\n              </ion-col>\n\n              <ion-col col-6>\n\n                  {{(feedbackDetail.IssueOpenerFather == 0)?feedbackDetail.FatherFName+" "+feedbackDetail.FatherLName:""}} {{(feedbackDetail.IssueOpenerGuard == 0)?feedbackDetail.OthrGuardianFName+" "+feedbackDetail.OthrGuardianLName:""}} {{(feedbackDetail.IssueOpenerMother == 0)?feedbackDetail.MotherFName+" "+feedbackDetail.MotherLName:""}} {{(feedbackDetail.IssueOpenerStudent == 0)?feedbackDetail.StudentFName+" "+feedbackDetail.StudentLName:""}}\n\n              </ion-col>\n\n          </ion-row> -->\n\n\n\n\n\n\n\n          <ion-row class="detailRow">\n\n              <ion-col class="colBorder" col-6>\n\n                  Created On\n\n              </ion-col>\n\n              <ion-col col-6>\n\n                  Updated On\n\n              </ion-col>\n\n          </ion-row>\n\n          <ion-row class="subdetailRow">\n\n              <ion-col class="colBorder" col-6>\n\n                  {{feedbackDetail.IssueDate ? (feedbackDetail.IssueDate | date: \'MMMM d, y\') : "-"}} \n\n              </ion-col> \n\n              <ion-col col-6>\n\n                  {{feedbackDetail.LastModified ? (feedbackDetail.LastModified | date: \'MMMM d, y\') : "-"}} \n\n              </ion-col>\n\n          </ion-row>\n\n\n\n\n\n\n\n          <!-- <ion-row class="subdetailRow">\n\n              <ion-col [ngClass]="performanceDetailData.MarksScored != null ? \'colBorder colActiveSubTxtColor\':\'colBorder colSubTxtColor\'"  col-6>\n\n                  {{ (performanceDetailData.MarksScored != null)?\'Marks\':\'Marks\' }}\n\n              </ion-col> \n\n              <ion-col col-6>\n\n                  Maximum\n\n              </ion-col>\n\n          </ion-row> -->\n\n\n\n      </ion-grid>\n\n\n\n    </ion-item-group>\n\n  </ion-card>\n\n<!-- </ion-card> -->\n\n\n\n\n\n  <!-- <ion-card class="cardContainer" *ngFor="let feedbackData of feedback">\n\n      <ion-item-group>\n\n        <ion-item-divider style="color: #003b8e">\n\n  \n\n            {{feedbackData[0].IssueDate ? (feedbackData[0].IssueDate | date: \'EEE, MMMM d, y\') : "NA"}} \n\n  \n\n        </ion-item-divider> \n\n  \n\n        <ion-item *ngFor="let feedbackDetail of feedbackData" style="border-bottom: 0.4px solid #f2f2f2"  text-nowrap>\n\n         \n\n          <p text-wrap style="font-size: 15px;color: #1a2532;margin-top: 5px"> {{\'# \'+feedbackDetail.IssueID}}</p>\n\n\n\n          <p text-wrap style="font-size: 16px;color: #1a2532;margin-top: 5px" [ngClass]="(feedbackDetail.IssueCategory == \'Complaint\')?\'openTxt\':(feedbackDetail.IssueCategory == \'Feedback\')?\'feedback\': (feedbackDetail.IssueCategory == \'Compliment\') ?\'compliment\':\'closeTxt\'" >{{feedbackDetail.IssueCategory}} <span style="color: #1a2532">{{ \' - \'+feedbackDetail.IssueTitle || "NA"}} </span> </p>\n\n          <p text-wrap style="font-size: 15px;color: #1a2532;margin-top: 5px"> {{(feedbackDetail.IssueOpenerFather == 0)?feedbackDetail.FatherFName+" "+feedbackDetail.FatherLName:""}} {{(feedbackDetail.IssueOpenerGuard == 0)?feedbackDetail.OthrGuardianFName+" "+feedbackDetail.OthrGuardianLName:""}} {{(feedbackDetail.IssueOpenerMother == 0)?feedbackDetail.MotherFName+" "+feedbackDetail.MotherLName:""}} {{(feedbackDetail.IssueOpenerStudent == 0)?feedbackDetail.StudentFName+" "+feedbackDetail.StudentLName:""}}</p>\n\n          <p text-wrap style="margin-top: 5px"> {{feedbackDetail.IssueStatus+\' - Updated on : \'+((feedbackDetail.LastModified | date: \'EEE, MMMM d, y\') ||\'NA\')}}</p>\n\n        </ion-item>\n\n      \n\n      </ion-item-group>\n\n    </ion-card> -->\n\n\n\n\n\n  <ion-card *ngIf="nodata">\n\n      <ion-item>\n\n            No feedback found.\n\n      </ion-item>\n\n    </ion-card>\n\n\n\n  <ion-fab bottom right #fab>\n\n      <button ion-fab (click)="openFeedbackForm()" ><ion-icon name="ios-add-outline"></ion-icon></button>\n\n  </ion-fab>\n\n   \n\n</ion-content>'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\feedback\feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_leave_add_leave__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import * as _ from 'underscore';

/**
 * Generated class for the LeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeavePage = (function () {
    function LeavePage(storage, navCtrl, navParams, eduService) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eduService = eduService;
        this.nodata = false;
        this.check = false;
        //this.getLeaveData();
    }
    LeavePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeavePage');
    };
    LeavePage.prototype.refreshLeaves = function (refresher) {
        refresher.complete();
        this.getLeaveData();
    };
    LeavePage.prototype.openLeaveForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_leave_add_leave__["a" /* AddLeavePage */]);
    };
    LeavePage.prototype.ionViewDidEnter = function () {
        this.getLeaveData();
    };
    LeavePage.prototype.getLeaveData = function () {
        var _this = this;
        var data = null;
        //var check;
        var myapp = this;
        this.storage.get('userData').then(function (val) {
            console.log(val);
            data = {
                StudentId: val.StudentID,
            };
            console.log(data);
            _this.eduService.getLeave(data).then(function (response) {
                console.log("user data = " + JSON.stringify(response));
                if (response['Data'].length == 0) {
                    _this.leaveData = [];
                    _this.nodata = true;
                }
                else {
                    console.log(response['Data']);
                    if (response['Data'][0].hasOwnProperty('LeaveStartDate')) {
                        _this.leaveData = response['Data'];
                        console.log(" i kkkmn");
                        _this.nodata = false;
                    }
                    else {
                        _this.nodata = true;
                    }
                    //console.log(response['Data'][0].LeaveApplication);
                    _this.leaveapp = response['Data'][0].LeaveApplication;
                    //this.leaveapp = leaveData[0].LeaveApplication;
                    console.log("parent", val.Parent);
                    if (val.Parent == "Student") {
                        myapp.check = false;
                    }
                    else {
                        if (_this.leaveapp == 0) {
                            myapp.check = true;
                            console.log(myapp.check);
                        }
                    }
                    console.log("showing button", myapp.check);
                    //  if(val.Parent != "Student"){
                    //       if(this.leaveapp == 0){
                    //        this.check = true;
                    //        console.log(this.check);
                    //       }
                    //  }
                    //  if(val.Parent == "Student"){
                    //	  if(this.leaveapp == 0){
                    //        this.check = true;
                    //        console.log(this.check);
                    //       }
                    //  }
                }
            }).catch(function (error) {
                console.log("error = ", error);
            });
        });
        // this.storage.get('userData').then((val)=>{
        //   console.log(val);
        //   if(val.Parent == "Student"){
        //     this.check = false;
        //     //console.log(this.leaveapp);
        //     console.log(this.check);
        //     console.log(this.leaveapp);
        //   }
        //   else{
        //     this.check = true;
        //     console.log(this.check);
        //   }
        // });
    };
    LeavePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leave',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\leave\leave.html"*/'<!--\n\n  Generated template for the LeavePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Leaves</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n<ion-header class="home_header">\n\n\n\n    <ion-navbar style="background-color:btn">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Leaves</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n\n\n  <ion-refresher (ionRefresh)="refreshLeaves($event)" >\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-card class="cardContainer" *ngFor="let leaveDataDetail of leaveData">\n\n    <ion-item-group>\n\n      <ion-item-divider style="color: #003b8e">\n\n\n\n        {{leaveDataDetail.LeaveStartDate1}} - {{leaveDataDetail.LeaveendDate1}}\n\n\n\n      </ion-item-divider>\n\n\n\n      <ion-item style="border-bottom: 0.4px solid #f2f2f2" text-nowrap>\n\n        <p text-wrap style="font-size: 16px;color: #1a2532;margin-top: 5px">{{leaveDataDetail.LeaveReason}}</p>\n\n        <!-- <p text-wrap style="margin-top: 5px"></p> -->\n\n      </ion-item>\n\n\n\n\n\n    </ion-item-group>\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="nodata">\n\n      <ion-item>\n\n          No leave found.\n\n      </ion-item>\n\n    </ion-card>\n\n    \n\n  \n\n  \n\n\n\n  <!-- <ion-fab bottom right #fab>\n\n      <button  ion-fab (click)="openLeaveForm()" ><ion-icon name="ios-add-outline"></ion-icon></button>\n\n  </ion-fab> -->\n\n</ion-content>\n\n\n\n<ion-footer>\n\n<div *ngIf="check">\n\n    <ion-fab bottom right #fab >\n\n      <button ion-fab (click)="openLeaveForm()" ><ion-icon name="ios-add-outline"></ion-icon></button>\n\n    </ion-fab>\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\leave\leave.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */]])
    ], LeavePage);
    return LeavePage;
}());

//# sourceMappingURL=leave.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import * as _ from 'underscore';

//import { FCM } from '@ionic-native/fcm';
/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagesPage = (function () {
    function MessagesPage(navCtrl, navParams, storage, eduService) {
        //let data = moment().format('YYYY-MM-DD');
        //let time = moment().format('HHmmss');
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.eduService = eduService;
        this.nodata = false;
        this.messages = [];
        this.fromDate = "";
        this.toDate = "";
        var start = __WEBPACK_IMPORTED_MODULE_2_moment___default()().startOf('isoWeek').format('YYYY-MM-DD');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment___default()().endOf('isoWeek').format('YYYY-MM-DD');
        this.fromDate = start;
        this.toDate = end;
        this.getMessages(this.fromDate, this.toDate);
    }
    MessagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagesPage');
    };
    MessagesPage.prototype.refresh = function (refresher) {
        this.getMessages(this.fromDate, this.toDate);
        refresher.complete();
    };
    MessagesPage.prototype.resetData = function () {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment___default()().startOf('isoWeek').format('YYYY-MM-DD');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment___default()().endOf('isoWeek').format('YYYY-MM-DD');
        this.fromDate = start;
        this.toDate = end;
        this.getMessages(this.fromDate, this.toDate);
    };
    MessagesPage.prototype.getStartDate = function () {
        var startD = this.fromDate || "";
        var endD = this.toDate || "";
        //console.log("startD ",startD ," endD =",endD);
        var date = new Date();
        console.log("startD ", startD, " endD =", endD, " date =", date);
        this.getMessages(startD, endD);
    };
    MessagesPage.prototype.getMessages = function (startD, endD) {
        var _this = this;
        var data = null;
        this.storage.get('userData').then(function (val) {
            //console.log('Your id is', val.StudentID);
            data = {
                StudentID: val.StudentID || _this.navParams.data.studentId,
                FromDate: startD || _this.d1,
                ToDate: endD || _this.d2,
                userrole: val.Parent,
                LoginRole: val.Parent
                //StudentId: "5201620172255",
                //FromDate: "2018-06-01",
                //ToDate: "2018-06-30",  
                //userrole: "Student",
            };
            console.log(data);
            _this.eduService.getMessages(data).then(function (response) {
                if (response['Data'].length == 0) {
                    console.log("hello here");
                    _this.nodata = true;
                }
                else {
                    //console.log(response['Data']);
                    _this.nodata = false;
                    // this.messages = response['Data'];
                    _this.messages = [];
                    var messagesData = response['Data'];
                    var parsedMessages_1 = [];
                    messagesData.map(function (msg, idx) {
                        var msgData = msg;
                        // console.log( `${idx} : `,  msg.Noti_Description );
                        msgData.Noti_Description = msg.Noti_Description.replaceAll('<br>', ' <br> ');
                        msgData.Noti_Description = _this.linkify(msg.Noti_Description);
                        parsedMessages_1.push(msgData);
                    });
                    _this.messages = parsedMessages_1;
                    console.log('messages : ', _this.messages);
                }
            }).catch(function (error) {
                console.log("error = ", error);
            });
        });
    };
    MessagesPage.prototype.linkify = function (plainText) {
        var replacedText;
        var replacePattern1;
        var replacePattern2;
        var replacePattern3;
        //URLs starting with http://, https://, or ftp://
        replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
        replacedText = plainText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');
        //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');
        //Change email addresses to mailto:: links.
        replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
        replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');
        return replacedText;
    };
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messages',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\messages\messages.html"*/'<!--\n\n  Generated template for the MessagesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header class="home_header">\n\n\n\n    <ion-navbar style="background-color:btn">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Messages</ion-title>\n\n    </ion-navbar>\n\n  \n\n  <!-- <ion-card style="width: 100%;margin:0;">\n\n     <ion-row>\n\n                <ion-col col-5 text-center>From Date</ion-col>\n\n                <ion-col col-5 text-center>To Date</ion-col>\n\n                <ion-col></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row style="margin-left: 1%; margin-right: 1%">\n\n\n\n                <ion-col col-5>\n\n                    <button ion-button block outline class="datebtn">\n\n                        <ion-datetime displayFormat=\'MMM DD, YYYY\' placeholder="DD-MM-YYYY" (ionChange)="getStartDate()" [(ngModel)]="fromDate"></ion-datetime>\n\n                    </button>\n\n                </ion-col>\n\n\n\n                <ion-col col-5>\n\n                    <button ion-button block outline class="datebtn">\n\n                        <ion-datetime displayFormat="MMM DD, YYYY" placeholder="DD-MM-YYYY" (ionChange)="getStartDate()" [(ngModel)]="toDate"></ion-datetime>\n\n                    </button>\n\n                </ion-col>\n\n\n\n                <ion-col col-2>\n\n                    <button ion-button block (click)="resetData()">\n\n                        <ion-icon name="md-refresh"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n    </ion-row>\n\n  </ion-card> -->\n\n  <ion-card style="width: 100%;margin:0;">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-5 text-center>From Date</ion-col>\n\n                <ion-col col-5 text-center>To Date</ion-col>\n\n                <ion-col></ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n\n\n                <ion-col col-5>\n\n                    <button ion-button block outline class="datebtn">\n\n                        <ion-datetime displayFormat=\'MMM DD, YYYY\' placeholder="DD-MM-YYYY" (ionChange)="getStartDate()" [(ngModel)]="fromDate" min="2012" max="2030-12-31"></ion-datetime>\n\n                    </button>\n\n                </ion-col>\n\n\n\n                <ion-col col-5>\n\n                    <button ion-button block outline class="datebtn">\n\n                        <ion-datetime displayFormat="MMM DD, YYYY" placeholder="DD-MM-YYYY" (ionChange)="getStartDate()" [(ngModel)]="toDate" min="2012" max="2030-12-31"></ion-datetime>\n\n                    </button>\n\n                </ion-col>\n\n\n\n                <ion-col col-2>\n\n                    <button ion-button block (click)="resetData()">\n\n                        <ion-icon name="md-refresh"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-card>\n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n  <ion-refresher (ionRefresh)="refresh($event)">\n\n        <ion-refresher-content></ion-refresher-content>\n\n    </ion-refresher>\n\n  \n\n	\n\n <div *ngIf="nodata == false">   \n\n	<ion-card *ngFor="let msg of messages">\n\n	  <ion-card-header class="header" id="head">\n\n	    {{msg.Noti_Heading}}\n\n	  </ion-card-header>\n\n	  <ion-card-content class="content" id="con">\n\n	  	<!-- <ion-icon name="text"></ion-icon> -->\n\n	     <ion-grid>\n\n	     	<ion-row class="space"> \n\n	     		<ion-col col-1>\n\n	     			<ion-icon name="text" class="icon"></ion-icon>\n\n	     		</ion-col>\n\n	     		<ion-col col-11>\n\n            <div [innerHTML]="msg.Noti_Description"></div>\n\n	     			<!-- {{msg.Noti_Description}} -->\n\n	     			<!-- <span inner-html="{{msg.Noti_Description}}"></span> -->\n\n	     		</ion-col>\n\n	     	<span class="time" style="margin-left: 10%;" >{{msg.Noti_Date}} - {{msg.Noti_Time}}</span> \n\n	     	</ion-row> \n\n	     </ion-grid>\n\n	  </ion-card-content>\n\n	</ion-card>\n\n  </div>\n\n\n\n\n\n  <ion-card *ngIf="nodata == true">\n\n    <ion-item>\n\n      No messages found for the selected date range.\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\messages\messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PerformanceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerformanceDetailPage = (function () {
    //singleValue = 40;
    function PerformanceDetailPage(viewCtrl, platform, navCtrl, navParams, eduService) {
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eduService = eduService;
        this.nodata = false;
        this.StandardName = "";
        this.SubjectName = "";
        this.getPerformanceDetail(this.navParams.data);
    }
    PerformanceDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerformanceDetailPage');
    };
    PerformanceDetailPage.prototype.refreshPerformanceDetail = function (refresher) {
        this.getPerformanceDetail(this.navParams.data);
        refresher.complete();
    };
    PerformanceDetailPage.prototype.getPerformanceDetail = function (data) {
        var _this = this;
        data = {
            StudentID: data.StudentID,
            // StandardID: data.StandardID,
            SubjectID: data.SubjectID,
        };
        this.eduService.getPerformanceDetail(data).then(function (response) {
            console.log("user data = " + JSON.stringify(response));
            if (response['Data'].length == 0) {
                _this.performanceDetail = [];
                _this.nodata = true;
            }
            else {
                _this.nodata = false;
                console.log("response['Data'][0].StandardName =", response['Data'][0].StandardName);
                console.log("response['Data'][0].StandardName =", response['Data'].StandardName);
                _this.StandardName = response['Data'][0].StandardName;
                _this.SubjectName = response['Data'][0].SubjectName;
                _this.performanceDetail = response['Data'];
            }
        }).catch(function (error) {
            console.log("error = ", error);
        });
    };
    PerformanceDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-performance-detail',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\performance-detail\performance-detail.html"*/'<!--\n\n  Generated template for the PerformanceDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar style="background-color:btn">\n\n        <ion-title>Performance Detail</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n    <ion-refresher (ionRefresh)="refreshPerformanceDetail($event)">\n\n        <ion-refresher-content></ion-refresher-content>\n\n    </ion-refresher>\n\n    <ion-card style="background:#f7f7f7 !important;">\n\n        <ion-card-content>\n\n            <ion-grid>\n\n			  <ion-row >            \n\n				<ion-col col-12>\n\n				  <p style="color: #000000!important;font-size: 20px !important;">{{StandardName+\'/\'}} {{SubjectName}}</p>               \n\n				</ion-col>\n\n			  </ion-row>\n\n			</ion-grid> \n\n              <!-- {{StandardName+\'/\'}} {{SubjectName}}-->\n\n			\n\n        </ion-card-content>\n\n		\n\n		\n\n    </ion-card>\n\n    <ion-card class="cardContainer" *ngFor="let performanceDetailData of performanceDetail">\n\n       \n\n        <ion-item-group>\n\n\n\n           <ion-item-divider style="color: #003b8e">\n\n                {{performanceDetailData.ExamName}}<br/>{{performanceDetailData.ExamDate | date: \'EEE, MMMM d, y\'}}\n\n            </ion-item-divider>\n\n            <ion-grid>\n\n                <ion-row class="detailRow">\n\n                    <ion-col class="colBorder" col-6>\n\n                        <!-- {{(performanceDetailData.MarksScored || performanceDetailData.MarksScored  ) || \'Absent\'}} -->\n\n                        {{ (performanceDetailData.MarksScored != null)?performanceDetailData.MarksScored:\'Absent\' }}\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        {{performanceDetailData.ExamTotalMarks || \'-\'}}\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row class="subdetailRow">\n\n                    <ion-col [ngClass]="performanceDetailData.MarksScored != null ? \'colBorder colActiveSubTxtColor\':\'colBorder colSubTxtColor\'"  col-6>\n\n                        {{ (performanceDetailData.MarksScored != null)?\'Marks\':\'Marks\' }}\n\n                    </ion-col> \n\n                    <ion-col col-6>\n\n                        Maximum\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n            </ion-grid>\n\n\n\n            <!-- <ion-item style="font-weight: bold;font-size: 17px">Result</ion-item> -->\n\n            <ion-item style="font-weight: bold;font-size: 17px" [ngClass]="(performanceDetailData.MarksScored >= performanceDetailData.ExamPassingMarks)?\'closeTxt\':(performanceDetailData.MarksScored == null || performanceDetailData.MarksScored == 0)?\'openTxt\':\'openTxt\'">Result : {{(performanceDetailData.MarksScored >= performanceDetailData.ExamPassingMarks) ? \'Pass\':(performanceDetailData.MarksScored == null)?\'Absent\':(performanceDetailData.MarksScored == 0)?\'Fail\':\'Fail\'}}</ion-item>\n\n            \n\n            <!--<hr style="color: #dedede;height: 2px">-->\n\n			<hr style="border-bottom: 0.4px solid #dedede">\n\n\n\n            <ion-item style="font-weight: bold;font-size: 17px">Analysis :</ion-item>\n\n            <div style="z-index: 100000">\n\n                <ion-item style="align-items: left;min-height:2.4rem">\n\n                    <ion-label class="subLbl">Percentage : {{performanceDetailData.Percentage == null ?\'-\': performanceDetailData.Percentage+\'%\'}} </ion-label>\n\n                    <ion-range *ngIf="performanceDetailData.Percentage != null" [(ngModel)]="performanceDetailData.Percentage" min="0" max="100" color="primary" step="performanceDetailData.Percentage"\n\n                        class="marks" disabled></ion-range>\n\n                </ion-item>\n\n            </div>\n\n            <!-- <hr [ngStyle]="{\'color\':\'#0678CB\',\'height\': \'6px\', \'margin-left\':\'16px\',\'width\':performanceDetailData.MarksScored-9.1+\'%\'}" > -->\n\n\n\n            <!-- <ion-item style="align-items: left;min-height:2.4rem">\n\n                <ion-label class="subLbl">Average : {{ ((performanceDetailData.HigestMarks+performanceDetailData.LowestMarks)/2) || \'NA\'}} </ion-label>\n\n                <ion-range [(ngModel)]="performanceDetailData.Percentage" min="0" max="100" color="average" step="performanceDetailData.Percentage"\n\n                    class="average" disabled></ion-range>\n\n            </ion-item> -->\n\n\n\n            <ion-item style="align-items: left;min-height:2.4rem">\n\n                <ion-label class="subLbl">Lowest : {{performanceDetailData.LowestMarks == null ? \'-\': performanceDetailData.LowestMarks+\'%\'}} </ion-label>\n\n                <ion-range *ngIf="performanceDetailData.LowestMarks != null" [(ngModel)]="performanceDetailData.LowestMarks" min="0" max="100" color="average" step="performanceDetailData.LowestMarks"\n\n                    class="average" disabled></ion-range>\n\n            </ion-item>\n\n\n\n            <!-- <hr [ngStyle]="{\'color\':\'#e63900\',\'height\': \'6px\', \'margin-left\':\'16px\',\'width\':performanceDetailData.Percentage-9.1+\'%\'}" > -->\n\n\n\n            <ion-item style="align-items: left;min-height:2.4rem">\n\n                <ion-label class="subLbl">Highest : {{performanceDetailData.HigestMarks == null ? \'-\': performanceDetailData.HigestMarks+\'%\'}} </ion-label>\n\n                <ion-range *ngIf="performanceDetailData.HigestMarks != null" [(ngModel)]="performanceDetailData.HigestMarks" min="0" max="100" color="highest" step="performanceDetailData.HigestMarks"\n\n                    class="highest" disabled></ion-range>\n\n            </ion-item>\n\n            <!-- <hr [ngStyle]="{\'color\':\'#4d9900\',\'height\': \'6px\', \'margin-left\':\'16px\',\'width\':performanceDetailData.HigestMarks-9.1+\'%\'}" > -->\n\n\n\n            <!-- <ion-item style="align-items: left">\n\n                    <ion-label class="subLbl">highest :  {{performanceDetailData.HigestMarks}} </ion-label>\n\n                    \n\n            </ion-item> -->\n\n            \n\n\n\n            <hr style="border-bottom: 0.4px solid #dedede">\n\n\n\n            <ion-item style="font-weight: bold;font-size: 17px">Rank : {{(performanceDetailData.Rank == null || performanceDetailData.Rank == 0 || (performanceDetailData.MarksScored < performanceDetailData.ExamPassingMarks) ) ? \'-\':performanceDetailData.Rank }}</ion-item>\n\n			\n\n			<hr style="border-bottom: 0.4px solid #dedede">\n\n			<ion-item style="font-weight: bold;font-size: 17px">Topics :</ion-item>\n\n			<ion-card-content>\n\n				<ion-grid>\n\n				  <ion-row >            \n\n					<ion-col col-12>\n\n						 \n\n					  <!--<p style="font-weight:bold;font-size: 17px;">Topics</p>          -->     \n\n					   <p class="subLbl" style="padding-top:5px;">{{performanceDetailData.TopicName}}</p>               \n\n					</ion-col>\n\n				  </ion-row>\n\n				</ion-grid> \n\n			</ion-card-content>\n\n\n\n        </ion-item-group>\n\n\n\n    </ion-card>\n\n\n\n    <ion-card *ngIf="nodata">\n\n        <ion-item>\n\n            Data not available!\n\n        </ion-item>\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\performance-detail\performance-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */]])
    ], PerformanceDetailPage);
    return PerformanceDetailPage;
}());

//# sourceMappingURL=performance-detail.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__performance_detail_performance_detail__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PerformancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerformancePage = (function () {
    function PerformancePage(viewCtrl, platform, storage, navCtrl, navParams, eduService) {
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eduService = eduService;
        this.nodata = false;
        this.getPerformanceData();
    }
    PerformancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerformancePage');
    };
    // ionViewDidEnter(){
    //   this.getPerformanceData();
    // }
    PerformancePage.prototype.rowClick = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__performance_detail_performance_detail__["a" /* PerformanceDetailPage */], {
            StudentID: data.StudentID,
            AdmissionFeesDetailID: data.AdmissionFeesDetailID,
            StandardID: data.StandardID,
            SubjectID: data.SubjectID,
        });
    };
    PerformancePage.prototype.refreshPerformance = function (refresher) {
        refresher.complete();
        this.getPerformanceData();
    };
    PerformancePage.prototype.getPerformanceData = function () {
        var _this = this;
        var data = null;
        var classes = [];
        var finalData = [];
        this.storage.get('userData').then(function (val) {
            console.log('Your id is', val.StudentID);
            console.log('Your Role', val.Parent);
            data = {
                StudentID: val.StudentID,
                LoginRole: val.Parent
            };
            _this.eduService.getPerformance(data).then(function (response) {
                console.log("user data = " + JSON.stringify(response));
                if (response['Data'].length == 0) {
                    _this.performance = [];
                    _this.nodata = true;
                }
                else {
                    _this.nodata = false;
                    //  this.performance = response['Data'];
                    __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](response['Data'], function (value, key) {
                        console.log("element =", value);
                        classes.push(value.StandardName);
                    });
                    var unique = classes.filter(function (item, i, ar) { return ar.indexOf(item) === i; });
                    console.log("unique =", unique);
                    __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](unique, function (v, k) {
                        var abc = __WEBPACK_IMPORTED_MODULE_4_underscore__["where"](response['Data'], { StandardName: v });
                        finalData.push(abc);
                    });
                    _this.performance = finalData;
                }
            }).catch(function (error) {
                console.log("error = ", error);
            });
        });
    };
    PerformancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-performance',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\performance\performance.html"*/'<!--\n\n  Generated template for the PerformancePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="home_header">\n\n\n\n    <ion-navbar style="background-color:btn">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Performance</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n\n\n  <ion-refresher (ionRefresh)="refreshPerformance($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <!-- <ion-card class="cardContainer">\n\n\n\n\n\n    <ion-grid class="subDetail">\n\n\n\n      <ion-row class="headingData">\n\n        <ion-col class="headingTitle" col-4>\n\n            Subject\n\n        </ion-col>\n\n\n\n        <ion-col class="headingTitle" col-4>\n\n            Test given\n\n        </ion-col>\n\n\n\n        <ion-col class="headingTitle" col-4>\n\n            Performance (%)\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngFor="let performanceData of performance" (click)="rowClick(performanceData)">\n\n        <ion-col class="leftTxt longTxt" col-4> \n\n          {{performanceData.SubjectName || \'NA\'}}\n\n        </ion-col>\n\n        <ion-col class="rightTxt" col-4>\n\n            {{performanceData.ExamCount || \'NA\'}}\n\n        </ion-col>\n\n        <ion-col class="rightTxt" col-4>\n\n            {{performanceData.Percentage || \'NA\'}}\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </ion-grid>\n\n  </ion-card> -->\n\n \n\n\n\n  <ion-card class="cardContainer" *ngFor="let performanceData of performance">\n\n    <ion-item-group>\n\n      <ion-item-divider style="color: #003b8e">\n\n\n\n        {{performanceData[0].StandardName}}\n\n\n\n      </ion-item-divider>\n\n\n\n      <ion-item *ngFor="let performanceDataDetails of performanceData" style="border-bottom: 0.4px solid #f2f2f2" (click)="rowClick(performanceDataDetails)" text-nowrap>\n\n        <p text-wrap style="font-size: 16px;color: #1a2532;margin-top: 5px">{{performanceDataDetails.SubjectName}}</p>\n\n        <p text-wrap style="margin-top: 5px">{{\'Test Given : \'+performanceDataDetails.ExamCount+(performanceDataDetails.Percentage == null ?\' . Performance : N/A\' :\' . Performance : \'+performanceDataDetails.Percentage+\'%\')}}</p>\n\n        <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n       \n\n      </ion-item> \n\n\n\n\n\n    </ion-item-group>\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="nodata">\n\n    <ion-item>\n\n        No test given.\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\performance\performance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */]])
    ], PerformancePage);
    return PerformancePage;
}());

//# sourceMappingURL=performance.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PunchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { PunchesPage } from '../punches/punches';




/**
 * Generated class for the SchedulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PunchesPage = (function () {
    function PunchesPage(alertCtrl, platform, storage, navCtrl, navParams, eduService) {
        // 
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eduService = eduService;
        this.punch = [];
        this.schedule = [];
        this.finalArray = [];
        this.fromDate = "";
        this.toDate = "";
        this.nodata = false;
        console.log("this.navParams.data; = ", this.navParams.data);
        //let data = moment().format('YYYY-MM-DD');
        //let time = moment().format('HHmmss');
        var start = __WEBPACK_IMPORTED_MODULE_2_moment___default()().startOf('isoWeek').format('YYYY-MM-DD');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment___default()().endOf('isoWeek').format('YYYY-MM-DD');
        this.fromDate = start;
        this.toDate = end;
        this.getSchedule(this.fromDate, this.toDate);
    }
    PunchesPage.prototype.ionViewDidLoad = function () {
        this.storage.set('page', "PunchesPage");
        console.log('ionViewDidLoad PunchesPage');
    };
    PunchesPage.prototype.ionViewDidEnter = function () {
        this.storage.set('page', "PunchesPage");
        console.log("ionViewDidEnter Punches");
    };
    PunchesPage.prototype.stringIsNumber = function (s) {
        var x = +s; // made cast obvious for demonstration
        return x.toString() === s;
    };
    PunchesPage.prototype.refresh = function (refresher) {
        this.getSchedule(this.fromDate, this.toDate);
        refresher.complete();
    };
    PunchesPage.prototype.resetData = function () {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment___default()().startOf('isoWeek').format('YYYY-MM-DD');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment___default()().endOf('isoWeek').format('YYYY-MM-DD');
        this.fromDate = start;
        this.toDate = end;
        this.getSchedule(this.fromDate, this.toDate);
    };
    PunchesPage.prototype.getStartDate = function () {
        var startD = this.fromDate || "";
        var endD = this.toDate || "";
        //console.log("startD ",startD ," endD =",endD);
        //var date = new Date();
        //console.log("startD ", startD, " endD =", endD, " date =", date);
        this.getSchedule(startD, endD);
    };
    PunchesPage.prototype.getSchedule = function (startD, endD) {
        var _this = this;
        var _self = this;
        var data = null;
        //var time = [];
        //var punchData = [];
        this.storage.get('userData').then(function (val) {
            console.log('Your id is', val.StudentID);
            data = {
                StudentID: val.StudentID || _this.navParams.data.studentId,
                FromDate: startD || _this.d1,
                ToDate: endD || _this.d2,
                BranchID: val.BranchID,
                LoginRole: val.Parent
                //StudentId: "120162017101",
                //BranchID: "1",
                //FromDate: "2018-01-01",
                //ToDate: "2018-06-01"
            };
            console.log(data);
            _this.eduService.getPunch(data).then(function (response) {
                console.log("user data = " + JSON.stringify(response));
                //console.log(response);
                if (response['Data'].length == 0) {
                    _this.schedule = [];
                    _this.nodata = true;
                    console.log("if");
                }
                else {
                    //console.log(response['Data']);
                    _this.nodata = false;
                    _this.punchData = response['Data'];
                    console.log(_this.punchData);
                    var tempdate = '';
                    var array = [];
                    console.log('i.BioMetricLogInDate');
                    _self.finalArray = [];
                    _this.finalArray = [];
                    console.log(_this.finalArray);
                    __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](_this.punchData, function (i, v) {
                        var date = i.BioMetricLogInDate.split("T");
                        console.log(date[0]);
                        if (tempdate == date[0]) {
                            array.push(i);
                        }
                        else {
                            if (v != 0) {
                                _self.finalArray.push(array);
                                array = [];
                            }
                            array.push(i);
                        }
                        tempdate = date[0];
                    });
                    _self.finalArray.push(array);
                    console.log(_self.finalArray);
                    //  this.schedule.push(_.sortBy(response['Data'],'LectureDate'));
                    // _.each(response['Data'], function (value, key) {
                    //   console.log("element =", value);
                    //   this.punch.push(value);
                    // });
                    // console.log(this.punch);
                    // this.schedule = punch;
                    // console.log("this.punch = " + JSON.stringify(punch));
                }
            }).catch(function (error) {
                console.log("error = ", error);
            });
        });
    };
    PunchesPage.prototype.display = function (time) {
        console.log("print");
        var timeString = time;
        var H = +timeString.substr(0, 2);
        var h = (H % 12) || 12;
        var ampm = H < 12 ? "AM" : "PM";
        timeString = h + timeString.substr(2, 3) + ampm;
        return timeString;
    };
    PunchesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-punches',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\punches\punches.html"*/'<!--\n\n  Generated template for the PunchesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>punches</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n<ion-header class="home_header">\n\n\n\n    <ion-navbar style="background-color:btn">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Punches</ion-title>\n\n    </ion-navbar>\n\n  \n\n  <ion-card style="width: 100%;margin:0;">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-5 text-center>From Date</ion-col>\n\n                <ion-col col-5 text-center>To Date</ion-col>\n\n                <ion-col></ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n\n\n                <ion-col col-5>\n\n                    <button ion-button block outline class="datebtn">\n\n                        <ion-datetime displayFormat=\'MMM DD, YYYY\' placeholder="DD-MM-YYYY" (ionChange)="getStartDate()" [(ngModel)]="fromDate" min="2012" max="2030-12-31"></ion-datetime>\n\n                    </button>\n\n                </ion-col>\n\n\n\n                <ion-col col-5>\n\n                    <button ion-button block outline class="datebtn">\n\n                        <ion-datetime displayFormat="MMM DD, YYYY" placeholder="DD-MM-YYYY" (ionChange)="getStartDate()" [(ngModel)]="toDate" min="2012" max="2030-12-31"></ion-datetime>\n\n                    </button>\n\n                </ion-col>\n\n\n\n                <ion-col col-2>\n\n                    <button ion-button block (click)="resetData()">\n\n                        <ion-icon name="md-refresh"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n  </ion-card>\n\n  </ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n	\n\n\n\n    <ion-refresher (ionRefresh)="refresh($event)"> \n\n        <ion-refresher-content></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n <div *ngIf="nodata == false">\n\n	<ion-card *ngFor="let punch of finalArray">\n\n	  <ion-card-header class="date">\n\n		{{punch[0].BioMetricDate }}\n\n	  	<!--{{punch[0].BioMetricLogInDate | date:\'EEE, MMM dd, yyyy\' }} -->\n\n\n\n	     \n\n	  </ion-card-header>\n\n	  <ion-card-content class="cardContent" *ngFor="let x of punch">\n\n	     <ion-grid>\n\n	     	<ion-row> \n\n	     		<!--{{x.BioMetricLogInDate | date:\' h:mm a\' }}-->\n\n				{{x.BioMetricTime}}\n\n	     		<span class="in" *ngIf="x.BiometricType == 1"> IN </span>\n\n          <span class="in" *ngIf="x.BiometricType == 2"> OUT </span>\n\n	     	</ion-row> \n\n	     </ion-grid>\n\n	  </ion-card-content>\n\n	</ion-card>\n\n  </div>\n\n\n\n\n\n  <ion-card *ngIf="nodata == true">\n\n  \n\n    <ion-card-header>\n\n      No punches found for the selected date range.\n\n    </ion-card-header>\n\n  \n\n  </ion-card>\n\n\n\n	\n\n</ion-content>\n\n'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\punches\punches.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */]])
    ], PunchesPage);
    return PunchesPage;
}());

//# sourceMappingURL=punches.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_availability__ = __webpack_require__(512);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the ScheduleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScheduleDetailPage = (function () {
    function ScheduleDetailPage(alertCtrl, iab, appAvailability, viewCtrl, platform, navCtrl, navParams, storage, _sanitizer) {
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.appAvailability = appAvailability;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this._sanitizer = _sanitizer;
        this.StandardName = this.navParams.data.StandardName;
        this.SubjectName = this.navParams.data.SubjectName;
        this.ExamName = this.navParams.data.ExamName;
        this.TopicName = this.navParams.data.TopicName;
        this.LectureTimeEnd = this.navParams.data.LectureTimeEnd;
        this.LectureTimeStart = this.navParams.data.LectureTimeStart;
        this.LectureDate = this.navParams.data.LectureDate;
        this.FacultyName = this.navParams.data.FacultyName;
        this.scheduleType = this.navParams.data.scheduleType;
        this.JoinURL = this.navParams.data.JoinURL;
        this.ViewURL = this.navParams.data.ViewURL;
        this.LoginRole = this.navParams.data.LoginRole;
        this.ActualLectureTime = this.navParams.data.ActualLectureTime;
        this.AdmissionFeesDetailID = this.navParams.data.AdmissionFeesDetailID;
        this.LectureScheduleID = this.navParams.data.LectureScheduleID;
        // platform.registerBackButtonAction(() => {
        //   this.storage.get('page').then((val) => {
        //     console.log("back val ScheduleDetailPage =",val)
        //     if(val == "ScheduleDetailPage"){
        //       this.viewCtrl.dismiss();
        //     }else if(val == "SchedulesPage"){
        //       this.logout();
        //     }else{
        //       console.log("inside else");
        //       this.viewCtrl.dismiss();
        //       //this.navCtrl.pop();
        //     }
        //   })
        // });
        // platform.registerBackButtonAction(() => {
        //   this.viewCtrl.dismiss();
        // })
    }
    // logout(){
    //   let prompt = this.alertCtrl.create({
    //     title: 'Logout',
    //     message: "Are you sure you want to logout?",
    //     buttons: [
    //       {
    //         text: 'Yes',
    //         handler: data => {
    //           this.storage.set('id',null);
    //           this.navCtrl.pop();
    //         }
    //       },
    //         {
    //           text: 'No',
    //           role: 'cancel',
    //           handler: () => {
    //             this.storage.set('page', "SchedulesPage");
    //             console.log('Cancel clicked');
    //           }
    //         }
    //     ]
    //   });
    //   prompt.present();
    // }
    ScheduleDetailPage.prototype.ionViewDidLoad = function () {
        this.storage.set('page', "ScheduleDetailPage");
        console.log('ionViewDidLoad ScheduleDetailPage');
    };
    ScheduleDetailPage.prototype.ionViewDidEnter = function () {
        this.storage.set('page', "ScheduleDetailPage");
        console.log("ionViewDidEnter schedule");
        console.log("det", this.navParams.data);
        var retrievedObject = localStorage.getItem('token');
        console.log('retrievedObject: ', JSON.parse(retrievedObject));
    };
    ScheduleDetailPage.prototype.stringIsNumber = function (s) {
        var x = +s; // made cast obvious for demonstration
        return x.toString() === s;
    };
    ScheduleDetailPage.prototype.JoinMeeting = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var edubiggUrl, ex_1, profile, studentName, userinfoStr, app_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('url')];
                    case 1:
                        edubiggUrl = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, fetch(edubiggUrl + "branch/apis/OnlineLectureAttendance.asp?LectureScheduleID=" + this.LectureScheduleID + "&AdmissionFeesDetailID=" + this.AdmissionFeesDetailID)];
                    case 3: return [4 /*yield*/, (_a.sent()).text()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        ex_1 = _a.sent();
                        console.log("Error while attendance", ex_1);
                        return [3 /*break*/, 6];
                    case 6:
                        profile = { StudentFName: "Student", StudentLName: "", StudentMName: "", StudentID: 0 };
                        if (localStorage.profileData) {
                            profile = JSON.parse(localStorage.profileData);
                        }
                        studentName = profile.StudentFName + "%20" + profile.StudentMName + "%20" + profile.StudentLName;
                        userinfoStr = "userInfo.displayName=\"" + studentName + "\"&userInfo.email=\"\"&config.startWithAudioMuted=true&config.startWithVideoMuted=false";
                        try {
                            app_1 = "com.onlinelectpis";
                            if (typeof url === "string") {
                                if (url.includes('meet.google')) {
                                    app_1 = "com.google.android.apps.meetings";
                                }
                                else if (url.includes('zoom.us')) {
                                    app_1 = "us.zoom.videomeetings";
                                }
                                else if (url.includes('microsoft.com')) {
                                    app_1 = "com.microsoft.teams";
                                }
                                else {
                                    window.open(url, "_blank");
                                }
                            }
                            this.appAvailability.check(app_1)
                                .then(function (yes) {
                                // window.open("ebjitsi://onlinelectures.in/" + url);
                                // let uri = `ebjitsi://onlinelectures.in/${url}?1=2&studentid=${profile.StudentID}&meetingid=${url}&afd=${this.AdmissionFeesDetailID}&scheduleid=${this.LectureScheduleID}&apiUrl=${edubiggUrl}#${userinfoStr}`;
                                // console.log("uri", uri)
                                window.open(url);
                            }, function (no) {
                                // window.alert("Meeting app is not installed on.");
                                window.open("market://details?id=" + app_1, "_system");
                                return;
                            });
                        }
                        catch (ex) {
                            console.log(ex);
                            window.alert("Unexpected Error: " + ex.message);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ScheduleDetailPage.prototype.ViewLecture = function (ViewURL) {
        this.iab.create(ViewURL, "_blank", { toolbar: 'no', location: "no" });
    };
    ScheduleDetailPage.prototype.shouldShowJoinView = function () {
        return (this.LoginRole == "Student" && this.scheduleType == 1);
    };
    ScheduleDetailPage.prototype.isLectureCompleted = function () {
        return this.ActualLectureTime;
    };
    ScheduleDetailPage.prototype.isTodayLecture = function () {
        var dtLecture = new Date(this.LectureDate);
        var dtNow = new Date();
        return (dtLecture.getDate() == dtNow.getDate() &&
            dtLecture.getMonth() == dtNow.getMonth() &&
            dtLecture.getFullYear() == dtNow.getFullYear());
    };
    ScheduleDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule-detail',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\schedule-detail\schedule-detail.html"*/'<!--\n\n  Generated template for the ScheduleDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Schedule Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n\n\n  <ion-card>\n\n    <ion-item-divider style="color: #000;font-size: 20px !important">\n\n      {{StandardName}}\n\n    </ion-item-divider>\n\n  </ion-card>\n\n  <ion-card class="cardContainer">\n\n\n\n    <ion-item-group>\n\n      <ion-item-divider style="color: #003b8e;font-size: 18px">\n\n\n\n        {{LectureDate | date: \'EEE, MMMM d, y\'}}\n\n\n\n      </ion-item-divider>\n\n\n\n\n\n      <ion-item style="font-size: 17px" *ngIf="stringIsNumber(FacultyName)">Test - <span>{{ExamName || \'-\'}}</span>\n\n\n\n        <ion-icon name="md-clipboard" style="color: #c62828" item-start></ion-icon>\n\n      </ion-item>\n\n\n\n      <hr style="border-bottom: 0.4px solid #dedede" *ngIf="stringIsNumber(FacultyName)">\n\n\n\n      <ion-grid>\n\n        <ion-row class="detailRow">\n\n          <ion-col class="colBorder" col-6>\n\n            <!-- {{(performanceDetailData.MarksScored || performanceDetailData.MarksScored  ) || \'Absent\'}} -->\n\n            {{ LectureTimeStart }}\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            {{LectureTimeEnd}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="subdetailRow">\n\n          <ion-col class="colBorder" col-6>\n\n            Start Time\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            End Time\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      </ion-grid>\n\n\n\n\n\n      <hr style="border-bottom: 0.4px solid #dedede">\n\n\n\n      <ion-item style="font-size: 17px">Subject\n\n        <ion-icon name="ios-book" style="color:#FF9F3A" item-start></ion-icon>\n\n      </ion-item>\n\n      <ion-item style="align-items: left">\n\n        <ion-label class="subLbl">{{SubjectName || \'-\'}}</ion-label>\n\n      </ion-item>\n\n\n\n      <hr style="border-bottom: 0.4px solid #dedede">\n\n\n\n      <!--<ion-item style="font-size: 17px">Topics\n\n          <ion-icon name="md-list" style="color: #78B254" item-start></ion-icon>\n\n      </ion-item>\n\n      <ion-item style="align-items: left">\n\n        <ion-label class="subLbl">{{TopicName || \'-\'}}</ion-label>\n\n      </ion-item>-->\n\n      <ion-item style="font-size:17px">Topics\n\n        <ion-icon name="md-list" style="color: #78B254" item-start></ion-icon>\n\n      </ion-item>\n\n\n\n      <ion-card-content>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-12><br>\n\n              <p class="subLbl">{{TopicName}}</p>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card-content>\n\n\n\n      <hr style="border-bottom: 0.4px solid #dedede" *ngIf="!stringIsNumber(FacultyName)">\n\n\n\n      <ion-item style="font-size: 17px" *ngIf="!stringIsNumber(FacultyName)">Faculty\n\n        <ion-icon name="md-person" style="color: #7E249C" item-start></ion-icon>\n\n      </ion-item>\n\n      <ion-item style="align-items: left" *ngIf="!stringIsNumber(FacultyName)">\n\n        <ion-label class="subLbl">{{FacultyName || \'-\'}}</ion-label>\n\n      </ion-item>\n\n\n\n      <div *ngIf="shouldShowJoinView()">\n\n        <hr style="border-bottom: 0.4px solid #dedede">\n\n        <ion-item style="font-size: 25px" *ngIf="JoinURL && !isLectureCompleted() && isTodayLecture()">\n\n          <button ion-button (click)="JoinMeeting(JoinURL)">\n\n            <ion-icon name="md-videocam" item-start></ion-icon>\n\n            Join Lecture\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item style="font-size: 25px" *ngIf="ViewURL">\n\n          <a href="{{ViewURL}}">\n\n            <button ion-button (click)="ViewLecture(ViewURL)">\n\n              <!-- <ion-icon name="md-videocam" item-start></ion-icon> -->\n\n              View Recorded Lecture\n\n            </button>\n\n          </a>\n\n        </ion-item>\n\n      </div>\n\n    </ion-item-group>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\schedule-detail\schedule-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_availability__["a" /* AppAvailability */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ScheduleDetailPage);
    return ScheduleDetailPage;
}());

//# sourceMappingURL=schedule-detail.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_detail_schedule_detail__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SchedulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchedulesPage = (function () {
    function SchedulesPage(alertCtrl, platform, storage, navCtrl, navParams, eduService) {
        // 
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eduService = eduService;
        this.schedule = [];
        this.fromDate = "";
        this.toDate = "";
        this.nodata = false;
        console.log("this.navParams.data; = ", this.navParams.data);
        //let data = moment().format('YYYY-MM-DD');
        //let time = moment().format('HHmmss');
        // var start = moment().startOf('week').add(1,'days').format('YYYY-MM-DD');
        // var end = moment().endOf('week').add(1,'days').format('YYYY-MM-DD');
        // var start = moment().startOf('week').subtract(6,'days').format('YYYY-MM-DD');
        // var end = moment().endOf('week').subtract(6,'days').format('YYYY-MM-DD');
        var start = __WEBPACK_IMPORTED_MODULE_3_moment___default()().startOf('isoWeek').format('YYYY-MM-DD');
        var end = __WEBPACK_IMPORTED_MODULE_3_moment___default()().endOf('isoWeek').format('YYYY-MM-DD');
        this.fromDate = start;
        this.toDate = end;
        this.getSchedule(this.fromDate, this.toDate);
        // platform.registerBackButtonAction(() => {
        //   this.storage.get('page').then((val) => {
        //     console.log("back val SchedulesPage =",val)
        //     if(val == "SchedulesPage"){          
        //       this.logout();
        //     }
        //   })
        // });
    }
    // logout(){
    //   let prompt = this.alertCtrl.create({
    //     title: 'Logout',
    //     message: "Are you sure you want to logout?",
    //     buttons: [
    //       {
    //         text: 'Yes',
    //         handler: data => {
    //           this.storage.set('id',null);
    //           this.navCtrl.pop();
    //         }
    //       },
    //         {
    //           text: 'No',
    //           role: 'cancel',
    //           handler: () => {
    //             this.storage.set('page', "SchedulesPage");
    //             console.log('Cancel clicked');
    //           }
    //         }
    //     ]
    //   });
    //   prompt.present();
    // }
    SchedulesPage.prototype.ionViewDidLoad = function () {
        this.storage.set('page', "SchedulesPage");
        console.log('ionViewDidLoad SchedulesPage');
    };
    SchedulesPage.prototype.ionViewDidEnter = function () {
        this.storage.set('page', "SchedulesPage");
        console.log("ionViewDidEnter schedule");
    };
    SchedulesPage.prototype.openSchedule = function (data) {
        console.log("bjeja", data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__schedule_detail_schedule_detail__["a" /* ScheduleDetailPage */], {
            StandardName: data.StandardName,
            SubjectName: data.SubjectName,
            TopicName: data.TopicName,
            LectureTimeEnd: data.LectureTimeEnd,
            LectureTimeStart: data.LectureTimeStart,
            LectureDate: data.LectureDate,
            FacultyName: data.FacultyName,
            ExamName: data.ExamName,
            scheduleType: data.scheduleType,
            JoinURL: data.JoinURL,
            ViewURL: data.ViewURL,
            LoginRole: data.LoginRole,
            ActualLectureTime: data.ActualLectureTime,
            AdmissionFeesDetailID: data.AdmissionFeesDetailID,
            LectureScheduleID: data.LectureScheduleID,
        });
    };
    SchedulesPage.prototype.stringIsNumber = function (s) {
        var x = +s; // made cast obvious for demonstration
        return x.toString() === s;
    };
    SchedulesPage.prototype.refresh = function (refresher) {
        this.getSchedule(this.fromDate, this.toDate);
        refresher.complete();
    };
    SchedulesPage.prototype.resetData = function () {
        // var start = moment().startOf('week').add(1,'days').format('YYYY-MM-DD');
        // var end = moment().endOf('week').add(1,'days').format('YYYY-MM-DD');
        // var start = moment().startOf('week').subtract(6,'days').format('YYYY-MM-DD');
        // var end = moment().endOf('week').subtract(6,'days').format('YYYY-MM-DD');
        var start = __WEBPACK_IMPORTED_MODULE_3_moment___default()().startOf('isoWeek').format('YYYY-MM-DD');
        var end = __WEBPACK_IMPORTED_MODULE_3_moment___default()().endOf('isoWeek').format('YYYY-MM-DD');
        this.fromDate = start;
        this.toDate = end;
        this.getSchedule(this.fromDate, this.toDate);
    };
    SchedulesPage.prototype.getStartDate = function () {
        var startD = this.fromDate || "";
        var endD = this.toDate || "";
        //console.log("startD ",startD ," endD =",endD);
        var date = new Date();
        console.log("startD ", startD, " endD =", endD, " date =", date);
        this.getSchedule(startD, endD);
    };
    // var data = null;
    // this.storage.get('userData').then((value) => {
    //		this.parent = value.Parent;
    //		console.log('ParentJai:'+this.parent);
    //	});
    SchedulesPage.prototype.getSchedule = function (startD, endD) {
        var _this = this;
        var data = null;
        var time = [];
        var finalData = [];
        this.storage.get('userData').then(function (val) {
            console.log('Your id is', val.StudentID);
            console.log('Your Role', val.Parent);
            data = {
                StudentID: val.StudentID || _this.navParams.data.studentId,
                FirstDateOfWeek: startD || _this.d1,
                LastDateOfWeek: endD || _this.d2,
                start_Date: startD || _this.d1,
                end_Date: endD || _this.d2,
                LoginRole: val.Parent
            };
            _this.eduService.getScheduleData(data).then(function (response) {
                // response.Data.forEach(element => {
                //   element.ViewURL= "https://www.dropbox.com/s/mji55pwxqhdvztb/hello37687263894324%20on%202020-06-23%2011%3A07.mp4?dl=0";
                // });
                console.log("user data = ", (response));
                //console.log("Data with role:" +data);
                if (response['Data'].length == 0) {
                    _this.schedule = [];
                    _this.nodata = true;
                }
                else {
                    _this.nodata = false;
                    //  this.schedule.push(_.sortBy(response['Data'],'LectureDate'));
                    __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](response['Data'], function (value, key) {
                        console.log("element =", value);
                        value.LoginRole = data.LoginRole;
                        time.push(value.LectureDate);
                    });
                    var unique = time.filter(function (item, i, ar) { return ar.indexOf(item) === i; });
                    console.log("unique =", unique);
                    __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](unique, function (v, k) {
                        var abc = __WEBPACK_IMPORTED_MODULE_4_underscore__["where"](response['Data'], { LectureDate: v });
                        finalData.push(abc);
                    });
                    _this.schedule = finalData;
                    console.log("this.schedule = " + JSON.stringify(finalData));
                }
            }).catch(function (error) {
                console.log("error = ", error);
            });
        });
    };
    SchedulesPage.prototype.display = function (time) {
        console.log("print");
        var timeString = time;
        var H = +timeString.substr(0, 2);
        var h = (H % 12) || 12;
        var ampm = H < 12 ? "AM" : "PM";
        timeString = h + timeString.substr(2, 3) + ampm;
        return timeString;
    };
    SchedulesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedules',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\schedules\schedules.html"*/'<!--\n\n  Generated template for the SchedulesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n--> \n\n<ion-header class="home_header">\n\n\n\n    <ion-navbar style="background-color:btn">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Schedules</ion-title>\n\n    </ion-navbar>\n\n    \n\n    <ion-card style="width: 100%;margin:0;">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-5 text-center>From Date</ion-col>\n\n                <ion-col col-5 text-center>To Date</ion-col>\n\n                <ion-col></ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n\n\n                <ion-col col-5>\n\n                    <button ion-button block outline class="datebtn">\n\n                        <ion-datetime displayFormat=\'MMM DD, YYYY\' placeholder="DD-MM-YYYY" (ionChange)="getStartDate()" [(ngModel)]="fromDate" min="2012" max="2030-12-31"></ion-datetime>\n\n                    </button>\n\n                </ion-col>\n\n\n\n                <ion-col col-5>\n\n                    <button ion-button block outline class="datebtn">\n\n                        <ion-datetime displayFormat="MMM DD, YYYY" placeholder="DD-MM-YYYY" (ionChange)="getStartDate()" [(ngModel)]="toDate" min="2012" max="2030-12-31"></ion-datetime>\n\n                    </button>\n\n                </ion-col>\n\n\n\n                <ion-col col-2>\n\n                    <button ion-button block (click)="resetData()">\n\n                        <ion-icon name="md-refresh"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-card>\n\n\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n\n\n\n\n    <ion-refresher (ionRefresh)="refresh($event)">\n\n        <ion-refresher-content></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    \n\n    <ion-card class="cardContainer" *ngFor="let scheduleData of schedule">\n\n            <ion-item-group>\n\n                    <ion-item-divider style="color: #003b8e">\n\n        <!-- <ion-item style="background-color: #1a2532;font-size: 18px;font-weight: bold;color: #fff"> -->\n\n            {{scheduleData[0].LectureDate | date: \'EEE, MMMM d, y\' }}\n\n        <!-- </ion-item> -->\n\n        </ion-item-divider>\n\n        \n\n        <ion-item *ngFor="let scheduleDataDetails of scheduleData" style="border-bottom: 0.4px solid #f2f2f2"  (click)="openSchedule(scheduleDataDetails)" text-nowrap>\n\n            <ion-avatar item-left>\n\n                <ion-icon name="{{ !stringIsNumber(scheduleDataDetails.FacultyName) ?\'md-bookmarks\':\'md-clipboard\'}}" [ngClass]="stringIsNumber(scheduleDataDetails.FacultyName) ?\'testClassColor\':\'lectureClassColor\'"  style="font-size: 30px"></ion-icon>\n\n            </ion-avatar> \n\n            <p text-wrap style="font-size: 16px;color: #1a2532;margin-top: 5px">{{scheduleDataDetails.StandardName}} - {{scheduleDataDetails.SubjectName}}</p>\n\n            <!-- <p text-wrap style="margin-top: 5px">{{scheduleDataDetails.TopicName}}</p> -->\n\n            <p text-wrap style="margin-top: 5px;color: #999999;font-size: 1.3rem">{{(scheduleDataDetails.LectureTimeStart)}} - {{(scheduleDataDetails.LectureTimeEnd)}} {{ !stringIsNumber(scheduleDataDetails.FacultyName) ?\' . Lecture\': \' . Test\'}}</p>\n\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n        </ion-item>\n\n    \n\n\n\n    </ion-item-group>\n\n        <!--   <ion-grid>\n\n            \n\n             <ion-row>\n\n                <ion-col class="leftTxt" col-3>\n\n                    Date :\n\n                </ion-col>\n\n                <ion-col class="rightTxt" col-9>\n\n                    {{scheduleData.LectureDate | date: \'EEE, MMMM d, y\' || \'NA\'}}\n\n                </ion-col>\n\n\n\n                <ion-col class="leftTxt" col-3>\n\n                    Time :\n\n                </ion-col>\n\n                <ion-col class="rightTxt" col-9>\n\n                    {{scheduleData.LectureTimeStart}} - {{scheduleData.LectureTimeEnd || \'NA\'}}\n\n                </ion-col>\n\n\n\n\n\n                <ion-col class="leftTxt" col-3>\n\n                    Standard :\n\n                </ion-col>\n\n                <ion-col class="rightTxt" col-9>\n\n                    {{scheduleData.StandardName || \'NA\'}}\n\n                </ion-col>\n\n\n\n\n\n                <ion-col class="leftTxt" col-3>\n\n                    Subject :\n\n                </ion-col>\n\n                <ion-col class="rightTxt" col-9>\n\n                    {{scheduleData.SubjectName || \'NA\'}}\n\n                </ion-col>\n\n\n\n\n\n                <ion-col class="leftTxt" col-3>\n\n                    Topics :\n\n                </ion-col>\n\n                <ion-col class="rightTxt" col-9>\n\n                    {{scheduleData.TopicName || \'NA\'}}\n\n                </ion-col>\n\n\n\n                <ion-col class="leftTxt" col-3>\n\n                    Faculty :\n\n                </ion-col>\n\n                <ion-col class="rightTxt" col-9>\n\n                    {{scheduleData.FacultyName || \'NA\'}}\n\n                </ion-col>\n\n            </ion-row> \n\n        </ion-grid>-->\n\n    </ion-card>\n\n\n\n    <ion-card *ngIf="nodata">\n\n        <ion-item>\n\n            No schedules found for the selected date range.\n\n        </ion-item>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\schedules\schedules.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */]])
    ], SchedulesPage);
    return SchedulesPage;
}());

//# sourceMappingURL=schedules.js.map

/***/ }),

/***/ 275:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 275;

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-leave/add-leave.module": [
		1381,
		19
	],
	"../pages/admission-detail/admission-detail.module": [
		1382,
		18
	],
	"../pages/admission/admission.module": [
		1383,
		17
	],
	"../pages/attendance-detail/attendance-detail.module": [
		1384,
		16
	],
	"../pages/attendance/attendance.module": [
		1385,
		15
	],
	"../pages/change-password/change-password.module": [
		1386,
		14
	],
	"../pages/documents/documents.module": [
		1387,
		13
	],
	"../pages/feedback-details/feedback-details.module": [
		1388,
		12
	],
	"../pages/feedback-form/feedback-form.module": [
		1389,
		11
	],
	"../pages/feedback/feedback.module": [
		1390,
		10
	],
	"../pages/forgot-password/forgot-password.module": [
		1391,
		9
	],
	"../pages/leave/leave.module": [
		1392,
		8
	],
	"../pages/login/login.module": [
		1393,
		7
	],
	"../pages/messages/messages.module": [
		1394,
		6
	],
	"../pages/performance-detail/performance-detail.module": [
		1395,
		5
	],
	"../pages/performance/performance.module": [
		1396,
		4
	],
	"../pages/profile/profile.module": [
		1397,
		3
	],
	"../pages/punches/punches.module": [
		1398,
		2
	],
	"../pages/schedule-detail/schedule-detail.module": [
		1399,
		1
	],
	"../pages/schedules/schedules.module": [
		1400,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 320;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendanceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import moment from 'moment';
/**
 * Generated class for the AttendanceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AttendanceDetailPage = (function () {
    function AttendanceDetailPage(storage, navCtrl, navParams, eduService) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eduService = eduService;
        this.nodata = false;
        this.totalD = "";
        this.present = "";
        this.absent = "";
        this.standardName = "";
        this.subjectName = "";
        this.totalD = this.navParams.data.totalD;
        this.absent = this.navParams.data.absent;
        this.present = this.navParams.data.present;
        this.standardName = this.navParams.data.StandardName;
        this.subjectName = this.navParams.data.SubjectName;
        // if (this.navParams.data.data.length == 0) {
        //   this.attendancedata = [];
        //   this.nodata = true;
        // } else {
        //   this.nodata = false;
        //   this.attendancedata = this.navParams.data.data;
        // }
        this.getAttendanceDetail(this.navParams.data.SubjectID);
    }
    AttendanceDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AttendanceDetailPage');
    };
    AttendanceDetailPage.prototype.refresh = function (refresher) {
        this.getAttendanceDetail(this.navParams.data.SubjectID);
        refresher.complete();
    };
    AttendanceDetailPage.prototype.getAttendanceDetail = function (subject) {
        var _this = this;
        var data = null;
        var time = [];
        var finalData = [];
        this.storage.get('userData').then(function (val) {
            console.log('Your id is', val);
            data = {
                StudentID: val.StudentID,
                // AdmissionFeesDetailID : val.AdmissionFeesDetailID,
                // FromDate : startD,
                //StandardID : val.StandardId,
                SubjectID: subject,
            };
            _this.eduService.getAttendanceDetail(data).then(function (response) {
                console.log("user data = " + JSON.stringify(response));
                __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](response['Data'], function (value, key) {
                    console.log("element =", value);
                    time.push(value.LectureDate);
                });
                var unique = time.filter(function (item, i, ar) { return ar.indexOf(item) === i; });
                console.log("unique =", unique);
                __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](unique, function (v, k) {
                    var abc = __WEBPACK_IMPORTED_MODULE_2_underscore__["where"](response['Data'], { LectureDate: v });
                    finalData.push(abc);
                });
                _this.attendancedata = finalData;
                //  this.attendancedata = response['Data'];
            }).catch(function (error) {
                console.log("error = ", error);
            });
        });
        //   this.totalD = data.totalD;
        //   this.absent = data.absent;
        //   this.present = data.present;
        //     if (data.data.length == 0) {
        //       this.attendancedata = [];
        //       this.nodata = true;
        //     } else {
        //       this.nodata = false;
        //       this.attendancedata = data.data;
        //     }
        // }
    };
    AttendanceDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-attendance-detail',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\attendance-detail\attendance-detail.html"*/'<!--\n\n  Generated template for the AttendanceDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar style="background-color:btn">\n\n    <ion-title>Attendance Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n  <ion-refresher (ionRefresh)="refresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-item-group>\n\n    <ion-item-divider style="color: #000 !important;font-size: 20px !important">\n\n\n\n      {{standardName+\' / \'+subjectName}}\n\n\n\n    </ion-item-divider>\n\n</ion-item-group>\n\n\n\n  <ion-card class="cardContainer">\n\n\n\n    <ion-grid>\n\n      <ion-row class="detailRow">\n\n        <ion-col class="colBorder" col-4>\n\n          {{totalD || \'NA\'}}\n\n        </ion-col>\n\n        <ion-col class="colBorder" col-4>\n\n          {{(present == 0)?\'0\':present}}\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          {{(absent == 0)?\'0\':absent}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="subdetailRow">\n\n        <ion-col class="colBorder" col-4>\n\n          Total\n\n        </ion-col>\n\n        <ion-col class="colBorder" col-4>\n\n          Present\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          Absent\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </ion-grid>\n\n\n\n  </ion-card>\n\n\n\n\n\n  <ion-card class="cardContainer" *ngFor="let attendanceDataDetail of attendancedata">\n\n    <ion-item-group>\n\n      <ion-item-divider style="color: #003b8e">\n\n\n\n        {{attendanceDataDetail[0].LectureDate | date: \'EEE, MMMM d, y\'}}\n\n\n\n      </ion-item-divider>\n\n\n\n      <ion-item style="border-bottom: 0.4px solid #f2f2f2" *ngFor="let attendanceData of attendanceDataDetail" text-nowrap>\n\n        <p text-wrap style="font-size: 16px;color: #1a2532;margin-top: 5px">{{attendanceData.TopicName}}</p>\n\n        \n\n        <!-- <p text-wrap style="margin-top: 5px" [ngClass]=\'(attendanceData.Presesnt == 1)?"closeTxt":(attendanceData.Absent == 1)?"openTxt":""\'>Status : {{(attendanceData.Presesnt == 1)?\'Present\':(attendanceData.Absent == 1)?\'Absent\':"-" }}</p> -->\n\n\n\n        <p text-wrap style="margin-top: 5px;color: #999999;font-size: 1.3rem">{{(attendanceData.LectureTimeStart)}} - {{(attendanceData.LectureTimeEnd)}}</p>\n\n        <ion-icon style="color: #78B254" [ngClass]="attendanceData.Presesnt == 1 ?\'statusClass present\':\'statusClass absent\'" item-start>{{attendanceData.Presesnt == 1 ? \'P\':\'A\'}}</ion-icon>\n\n      </ion-item>\n\n\n\n    </ion-item-group>\n\n  </ion-card>\n\n\n\n\n\n  <ion-card *ngIf="nodata">\n\n    <ion-item>\n\n      Data not available!\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\attendance-detail\attendance-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */]])
    ], AttendanceDetailPage);
    return AttendanceDetailPage;
}());

//# sourceMappingURL=attendance-detail.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { FormBuilder, FormGroup, Validators } from '@angular/forms';


/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(navCtrl, navParams, formBuilder, eduService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.eduService = eduService;
        this.forgotForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"D:\EduBiggApps\AppNewdeepak\src\pages\forgot-password\forgot-password.html"*/'<!--\n\n  Generated template for the ForgotPasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Forgot Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<ion-list>\n\n    <form [formGroup]="forgotForm" class="formContainer">\n\n  <ion-item>\n\n    <ion-label floating>Username</ion-label>\n\n    <ion-input type="text" formControlName="username"></ion-input>\n\n  </ion-item>\n\n  <p class="errorClass" *ngIf="!forgotForm.controls.username.valid  && (forgotForm.controls.username.dirty || submitAttempt)">* Please Enter Username</p>\n\n</form>\n\n  <ion-item>\n\n    <!-- <button (click)="login()"  ion-button color="danger" outline block>Log In</button> -->\n\n    <button ion-button (click)="resetPassword()"  block color="btn">Reset Password</button>\n\n\n\n  </ion-item>\n\n\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\EduBiggApps\AppNewdeepak\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(653);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(1100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(1380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_schedules_schedules__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_performance_performance__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_attendance_attendance__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_admission_admission__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_admission_detail_admission_detail__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_performance_detail_performance_detail__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_attendance_detail_attendance_detail__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_schedule_detail_schedule_detail__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_documents_documents__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_feedback_feedback__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_feedback_form_feedback_form__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_feedback_details_feedback_details__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_change_password_change_password__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_forgot_password_forgot_password__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_leave_leave__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_add_leave_add_leave__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_punches_punches__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_messages_messages__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_edubigg_service_edubigg_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_network__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_in_app_browser__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_app_availability__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_firebase__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_firebase_x_ngx__ = __webpack_require__(555);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
































//import { FCM } from '@ionic-native/fcm';
//import { Push} from '@ionic-native/push';


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_schedules_schedules__["a" /* SchedulesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_performance_performance__["a" /* PerformancePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_attendance_attendance__["a" /* AttendancePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_admission_admission__["a" /* AdmissionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_performance_detail_performance_detail__["a" /* PerformanceDetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_attendance_detail_attendance_detail__["a" /* AttendanceDetailPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_documents_documents__["a" /* DocumentsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_feedback_form_feedback_form__["a" /* FeedbackFormPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_admission_detail_admission_detail__["a" /* AdmissionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_leave_leave__["a" /* LeavePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_add_leave_add_leave__["a" /* AddLeavePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_schedule_detail_schedule_detail__["a" /* ScheduleDetailPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_punches_punches__["a" /* PunchesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_feedback_details_feedback_details__["a" /* FeedbackDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-leave/add-leave.module#AddLeavePageModule', name: 'AddLeavePage', segment: 'add-leave', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admission-detail/admission-detail.module#AdmissionDetailPageModule', name: 'AdmissionDetailPage', segment: 'admission-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admission/admission.module#AdmissionPageModule', name: 'AdmissionPage', segment: 'admission', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/attendance-detail/attendance-detail.module#AttendanceDetailPageModule', name: 'AttendanceDetailPage', segment: 'attendance-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/attendance/attendance.module#AttendancePageModule', name: 'AttendancePage', segment: 'attendance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/documents/documents.module#DocumentsPageModule', name: 'DocumentsPage', segment: 'documents', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback-details/feedback-details.module#FeedbackDetailsPageModule', name: 'FeedbackDetailsPage', segment: 'feedback-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback-form/feedback-form.module#FeedbackFormPageModule', name: 'FeedbackFormPage', segment: 'feedback-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leave/leave.module#LeavePageModule', name: 'LeavePage', segment: 'leave', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/performance-detail/performance-detail.module#PerformanceDetailPageModule', name: 'PerformanceDetailPage', segment: 'performance-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/performance/performance.module#PerformancePageModule', name: 'PerformancePage', segment: 'performance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/punches/punches.module#PunchesPageModule', name: 'PunchesPage', segment: 'punches', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedule-detail/schedule-detail.module#ScheduleDetailPageModule', name: 'ScheduleDetailPage', segment: 'schedule-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedules/schedules.module#SchedulesPageModule', name: 'SchedulesPage', segment: 'schedules', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_schedules_schedules__["a" /* SchedulesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_performance_performance__["a" /* PerformancePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_attendance_attendance__["a" /* AttendancePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_admission_admission__["a" /* AdmissionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_performance_detail_performance_detail__["a" /* PerformanceDetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_attendance_detail_attendance_detail__["a" /* AttendanceDetailPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_documents_documents__["a" /* DocumentsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_feedback_form_feedback_form__["a" /* FeedbackFormPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_admission_detail_admission_detail__["a" /* AdmissionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_leave_leave__["a" /* LeavePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_add_leave_add_leave__["a" /* AddLeavePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_schedule_detail_schedule_detail__["a" /* ScheduleDetailPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_punches_punches__["a" /* PunchesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_feedback_details_feedback_details__["a" /* FeedbackDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_app_availability__["a" /* AppAvailability */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_firebase_x_ngx__["a" /* FirebaseX */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                // Push,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_30__providers_edubigg_service_edubigg_service__["a" /* EdubiggServiceProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 329,
	"./af.js": 329,
	"./ar": 330,
	"./ar-dz": 331,
	"./ar-dz.js": 331,
	"./ar-kw": 332,
	"./ar-kw.js": 332,
	"./ar-ly": 333,
	"./ar-ly.js": 333,
	"./ar-ma": 334,
	"./ar-ma.js": 334,
	"./ar-sa": 335,
	"./ar-sa.js": 335,
	"./ar-tn": 336,
	"./ar-tn.js": 336,
	"./ar.js": 330,
	"./az": 337,
	"./az.js": 337,
	"./be": 338,
	"./be.js": 338,
	"./bg": 339,
	"./bg.js": 339,
	"./bm": 340,
	"./bm.js": 340,
	"./bn": 341,
	"./bn.js": 341,
	"./bo": 342,
	"./bo.js": 342,
	"./br": 343,
	"./br.js": 343,
	"./bs": 344,
	"./bs.js": 344,
	"./ca": 345,
	"./ca.js": 345,
	"./cs": 346,
	"./cs.js": 346,
	"./cv": 347,
	"./cv.js": 347,
	"./cy": 348,
	"./cy.js": 348,
	"./da": 349,
	"./da.js": 349,
	"./de": 350,
	"./de-at": 351,
	"./de-at.js": 351,
	"./de-ch": 352,
	"./de-ch.js": 352,
	"./de.js": 350,
	"./dv": 353,
	"./dv.js": 353,
	"./el": 354,
	"./el.js": 354,
	"./en-au": 355,
	"./en-au.js": 355,
	"./en-ca": 356,
	"./en-ca.js": 356,
	"./en-gb": 357,
	"./en-gb.js": 357,
	"./en-ie": 358,
	"./en-ie.js": 358,
	"./en-il": 359,
	"./en-il.js": 359,
	"./en-nz": 360,
	"./en-nz.js": 360,
	"./eo": 361,
	"./eo.js": 361,
	"./es": 362,
	"./es-do": 363,
	"./es-do.js": 363,
	"./es-us": 364,
	"./es-us.js": 364,
	"./es.js": 362,
	"./et": 365,
	"./et.js": 365,
	"./eu": 366,
	"./eu.js": 366,
	"./fa": 367,
	"./fa.js": 367,
	"./fi": 368,
	"./fi.js": 368,
	"./fo": 369,
	"./fo.js": 369,
	"./fr": 370,
	"./fr-ca": 371,
	"./fr-ca.js": 371,
	"./fr-ch": 372,
	"./fr-ch.js": 372,
	"./fr.js": 370,
	"./fy": 373,
	"./fy.js": 373,
	"./gd": 374,
	"./gd.js": 374,
	"./gl": 375,
	"./gl.js": 375,
	"./gom-latn": 376,
	"./gom-latn.js": 376,
	"./gu": 377,
	"./gu.js": 377,
	"./he": 378,
	"./he.js": 378,
	"./hi": 379,
	"./hi.js": 379,
	"./hr": 380,
	"./hr.js": 380,
	"./hu": 381,
	"./hu.js": 381,
	"./hy-am": 382,
	"./hy-am.js": 382,
	"./id": 383,
	"./id.js": 383,
	"./is": 384,
	"./is.js": 384,
	"./it": 385,
	"./it.js": 385,
	"./ja": 386,
	"./ja.js": 386,
	"./jv": 387,
	"./jv.js": 387,
	"./ka": 388,
	"./ka.js": 388,
	"./kk": 389,
	"./kk.js": 389,
	"./km": 390,
	"./km.js": 390,
	"./kn": 391,
	"./kn.js": 391,
	"./ko": 392,
	"./ko.js": 392,
	"./ky": 393,
	"./ky.js": 393,
	"./lb": 394,
	"./lb.js": 394,
	"./lo": 395,
	"./lo.js": 395,
	"./lt": 396,
	"./lt.js": 396,
	"./lv": 397,
	"./lv.js": 397,
	"./me": 398,
	"./me.js": 398,
	"./mi": 399,
	"./mi.js": 399,
	"./mk": 400,
	"./mk.js": 400,
	"./ml": 401,
	"./ml.js": 401,
	"./mn": 402,
	"./mn.js": 402,
	"./mr": 403,
	"./mr.js": 403,
	"./ms": 404,
	"./ms-my": 405,
	"./ms-my.js": 405,
	"./ms.js": 404,
	"./mt": 406,
	"./mt.js": 406,
	"./my": 407,
	"./my.js": 407,
	"./nb": 408,
	"./nb.js": 408,
	"./ne": 409,
	"./ne.js": 409,
	"./nl": 410,
	"./nl-be": 411,
	"./nl-be.js": 411,
	"./nl.js": 410,
	"./nn": 412,
	"./nn.js": 412,
	"./pa-in": 413,
	"./pa-in.js": 413,
	"./pl": 414,
	"./pl.js": 414,
	"./pt": 415,
	"./pt-br": 416,
	"./pt-br.js": 416,
	"./pt.js": 415,
	"./ro": 417,
	"./ro.js": 417,
	"./ru": 418,
	"./ru.js": 418,
	"./sd": 419,
	"./sd.js": 419,
	"./se": 420,
	"./se.js": 420,
	"./si": 421,
	"./si.js": 421,
	"./sk": 422,
	"./sk.js": 422,
	"./sl": 423,
	"./sl.js": 423,
	"./sq": 424,
	"./sq.js": 424,
	"./sr": 425,
	"./sr-cyrl": 426,
	"./sr-cyrl.js": 426,
	"./sr.js": 425,
	"./ss": 427,
	"./ss.js": 427,
	"./sv": 428,
	"./sv.js": 428,
	"./sw": 429,
	"./sw.js": 429,
	"./ta": 430,
	"./ta.js": 430,
	"./te": 431,
	"./te.js": 431,
	"./tet": 432,
	"./tet.js": 432,
	"./tg": 433,
	"./tg.js": 433,
	"./th": 434,
	"./th.js": 434,
	"./tl-ph": 435,
	"./tl-ph.js": 435,
	"./tlh": 436,
	"./tlh.js": 436,
	"./tr": 437,
	"./tr.js": 437,
	"./tzl": 438,
	"./tzl.js": 438,
	"./tzm": 439,
	"./tzm-latn": 440,
	"./tzm-latn.js": 440,
	"./tzm.js": 439,
	"./ug-cn": 441,
	"./ug-cn.js": 441,
	"./uk": 442,
	"./uk.js": 442,
	"./ur": 443,
	"./ur.js": 443,
	"./uz": 444,
	"./uz-latn": 445,
	"./uz-latn.js": 445,
	"./uz.js": 444,
	"./vi": 446,
	"./vi.js": 446,
	"./x-pseudo": 447,
	"./x-pseudo.js": 447,
	"./yo": 448,
	"./yo.js": 448,
	"./zh-cn": 449,
	"./zh-cn.js": 449,
	"./zh-hk": 450,
	"./zh-hk.js": 450,
	"./zh-tw": 451,
	"./zh-tw.js": 451
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 682;

/***/ })

},[648]);
//# sourceMappingURL=main.js.map