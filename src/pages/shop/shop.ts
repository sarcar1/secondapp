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
  listToSend: Array<string> = ["test"];

  /*
    Constructor
  */
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  /*
    Update button color and add item to list
  */
  onClickButton(button, productData: { item: string }) {

    //
    //  Add item to list if it's new
    //
    let addit:boolean = true;
    for (let newItem of this.listToSend) {
      if (String(newItem) === String(productData.item)) {
        addit = false;
        break;
      }
    }
    if ( addit ) {
        this.listToSend.push(productData.item);
    }

    //
    //  Remove item it is selected the second time
    //
    var index:number = -1;
    if ( button._color == "secondary" ) {
      index = this.listToSend.indexOf(productData.item);
    }
    if (index > -1) {
      this.listToSend.splice(index, 1);
    }

    //
    //  Change color
    //
    button.color = ((button._color == "primary") || (button._color == "undefined")) ? "secondary" : "primary";

    //
    //  Log list
    //
    console.log(this.listToSend);
  }
}
