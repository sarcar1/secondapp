import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuyoutPage } from '../buyout/buyout';
/*
  Generated class for the Shop page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {
  item: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  onBuy(productData: { item: string }) {
    this.navCtrl.push(BuyoutPage, productData);
  }
}
