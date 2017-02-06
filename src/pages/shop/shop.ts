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
  myColor1: string = 'primary';
  listToSend: Array<string> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  onClickButton(productData: { item: string }) {
    //this.navCtrl.push(BuyoutPage, productData);
    this.myColor1 = 'secondary';
    this.listToSend.push(productData.item);
    console.log(this.listToSend);
  }
}
