import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email: string;
  tel: string;

  constructor(public navCtrl: NavController) {

  }
  onClickShopButton() {
    this.navCtrl.push(ShopPage);
  }
}
