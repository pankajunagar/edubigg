import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as math from 'mathjs';
import { Storage } from '@ionic/storage';
import { EdubiggServiceProvider } from '../../providers/edubigg-service/edubigg-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the DocumentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-documents',
  templateUrl: 'documents.html',
})
export class DocumentsPage {

  documents: any;
  nodata: any;
  documentBackup: any;
  fileTransfer;
  constructor(public navCtrl: NavController, private iab: InAppBrowser, public navParams: NavParams, private storage: Storage, public eduService: EdubiggServiceProvider) {
    // const fileTransfer: FileTransferObject = this.transfer.create();
    this.getDocuments();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentsPage');
    console.log(this.documents)
  }

  refreshDoc(refresher) {
    this.getDocuments();
    refresher.complete();
  }

  getDocuments() {
    var data = null;
    this.storage.get('id').then((val) => {
      console.log('Your id is', val);
      data = {
        StudentId: val,
      };

      this.eduService.getDocuments(data).then((response) => {
        console.log("user data = " + JSON.stringify(response));
        if (response['Data'].length == 0) {
          this.documents = [];
          this.nodata = true;
        } else {
          this.nodata = false;
          this.documents = response['Data'];
          this.documentBackup = response['Data'];
        }
      }).catch((error) => {
        console.log("error = ", error)
      });

    });

  }

  calculateSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    var i = parseInt(math.floor(math.log(bytes) / math.log(1024)));
    var finalSize = math.round(bytes / math.pow(1024, i), 2) + ' ' + sizes[i];
    return (finalSize == 'NaN undefined' ? "" : finalSize + ' - ');
  }


  async download(url: string,UploadFileName:string) {
    //   const fileTransfer: FileTransferObject = this.transfer.create();
    // const url = 'http://www.gsgworld.xyz/branch/UploadDrive/EB-629663-student_Login_SinglePDF-jaisir.pdf';
    //   fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
    //     console.log('download complete: ' + entry.toURL());
    //   }, (error) => {
    //     // handle error
    //   });

    

    /* new Code */
    var extensions:string[] = ["FLV","MP4","AVI","WMV","AMV","MPEG","M4V","flv","mp4","avi","wmv","amv","mpeg","m4v"];

    if (extensions.find(ext=>url.toLowerCase().endsWith(ext))) {
      let edubiggUrl = await this.storage.get('url');
      this.iab.create(`${edubiggUrl}student/student_documents1.asp?url=${url}&UploadFileName=${UploadFileName}`, "_blank", { toolbar: 'no', location: "no" });
    }
    else {
      window.open(url, "_blank");
    }
    /* */

    /* Old Code
    if (url.toLowerCase().endsWith(".mp4") || url.toLowerCase().endsWith(".pdf")) {
      this.iab.create(url, "_blank", { toolbar: 'no', location: "no" });
    }
    else {
      window.open(url, "_blank");
    }
    */
  }

  getTextData(text_data) {
    this.documents = this.documentBackup;
    this.documents = this.documents.filter((item) => {
      console.log("item", item);
      return (item.UploadFileName.toLowerCase().indexOf(text_data.toLowerCase()) > -1)
    });
  }

  hideList() {
    this.documents = this.documentBackup;
  }

  getFileName(txt) {

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
    }
    return fileFormat[txt.toLowerCase()]
  }


  getClass(txt) {

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
    }
    return fileFormat[txt.toLowerCase()]
  }

  getColor(txt) {

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
    }
    return fileFormat[txt.toLowerCase()]
  }





}
