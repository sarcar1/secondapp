import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ShopPage } from '../shop/shop';
import { ContactPage } from '../contact/contact';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email: string = "";
  tel: string = "";
  contact = ContactPage;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {};

  // obligate email or tel to shop
  onClickShopButton() {
    console.log("email: ", this.email);
    console.log("tel: ", this.tel);
    
    if ( this.email == "" && this.tel == "" ) {
      let alert = this.alertCtrl.create({
        title: 'Oops',
        subTitle: 'Please enter either email or phone number!',
        buttons: ['OK']
      });
      alert.present();
    } else {
      this.navCtrl.push(ShopPage);
    }
  };

  // stop for 1 sec before leaving
  ionViewCanLeave(): boolean | Promise<{ void }> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(resolve(), 5000);
    });
    return promise;
  };

}
