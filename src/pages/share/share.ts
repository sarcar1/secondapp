import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               private sharingVar: SocialSharing ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
  }

  whatsappShare() {
    this.sharingVar.shareViaWhatsApp("Message via WhatsApp", null /*Image*/,  "http://pointdeveloper.com/" /* url */)
      .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }

  twitterShare() {
    this.sharingVar.shareViaTwitter("Message via Twitter",null /*Image*/,"http://pointdeveloper.com")
    .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }

  facebookShare() {
    this.sharingVar.shareViaFacebook("Message via Twitter",null /*Image*/,"http://pointdeveloper.com")
    .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }

  instagramShare() {
    this.sharingVar.shareViaInstagram("Message via Instagram",null /*Image*/)
    .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }

  smsShare() {
    this.sharingVar.shareViaSMS("Message via SMS","0743120114")
    .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }

  otherShare() {
    this.sharingVar.share("Genral Share Sheet",null/*Subject*/,null/*File*/,"http://pointdeveloper.com")
    .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }

}
