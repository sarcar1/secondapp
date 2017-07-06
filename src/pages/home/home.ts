import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ShopPage } from '../supermarket/shop/shop';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contact = ContactPage;
  shopPage = ShopPage;

  constructor(public navCtrl: NavController) {};

  // stop for 1 sec before leaving
  // ionViewCanLeave(): boolean | Promise<{ void }> {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(resolve(), 5000);
  //   });
  //   return promise;
  // };

}
