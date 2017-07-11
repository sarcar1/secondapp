import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               private socialSharing: SocialSharing ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
  }

  shareViaEmail() {

    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });

    // Share via email
    this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });

  }

  // whatsappShare() {
  //   this.sharingVar.shareViaWhatsApp("Message via WhatsApp", null /*Image*/,  "http://pointdeveloper.com/" /* url */)
  //     .then(()=>{
  //       alert("Success");
  //     },
  //     ()=>{
  //        alert("failed")
  //     })
  // }

  // twitterShare() {
  //   this.sharingVar.shareViaTwitter("Message via Twitter",null /*Image*/,"http://pointdeveloper.com")
  //   .then(()=>{
  //       alert("Success");
  //     },
  //     ()=>{
  //        alert("failed")
  //     })
  // }

  // facebookShare() {
  //   this.sharingVar.shareViaFacebook("Message via Twitter",null /*Image*/,"http://pointdeveloper.com")
  //   .then(()=>{
  //       alert("Success");
  //     },
  //     ()=>{
  //        alert("failed")
  //     })
  // }

  // instagramShare() {
  //   this.sharingVar.shareViaInstagram("Message via Instagram",null /*Image*/)
  //   .then(()=>{
  //       alert("Success");
  //     },
  //     ()=>{
  //        alert("failed")
  //     })
  // }

  // smsShare() {
  //   this.sharingVar.shareViaSMS("Message via SMS","0743120114")
  //   .then(()=>{
  //       alert("Success");
  //     },
  //     ()=>{
  //        alert("failed")
  //     })
  // }

  // otherShare() {
  //   this.sharingVar.share("Genral Share Sheet",null/*Subject*/,null/*File*/,"http://pointdeveloper.com")
  //   .then(()=>{
  //       alert("Success");
  //     },
  //     ()=>{
  //        alert("failed")
  //     })
  // }

}
