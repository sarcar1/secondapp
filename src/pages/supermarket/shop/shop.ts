import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { EmailPage } from '../../send/email/email';
import { ShopListService } from "../../services/shopList.service";
import { Quote } from "../../../data/quote.interface";
import { ItemUpdatePage } from "../item-update/item-update";
import { CategoriesPage } from "../categories/categories";

/*
  Generated class for the Shop page.
*/
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {
  listToSend: Array<string> = [];
  quotes: Quote[];

  /*
    Constructor
  */
  constructor( public navCtrl: NavController,
               private modalCtrl: ModalController,
               private shopList: ShopListService,
               public navParams: NavParams ) {};

  ionViewWillEnter() {
    this.quotes = this.shopList.getCurrentList();
  }

  /*
    Ask if to remove button in case of long press on it
  */
  onPressButton(quote: Quote) {
    const modal = this.modalCtrl.create(ItemUpdatePage, quote);
    modal.present();
    modal.onDidDismiss( ( remove:boolean ) => {
      if ( remove ) {
        this.shopList.removeItem(quote);
        // this.quotes = this.shopList.getCurrentList(); // re set all the list
        const position = this.quotes.findIndex( ( quoteEl: Quote ) => {
          return quoteEl.id == quote.id;
        });
        this.quotes.splice( position, 1 ); // get a new array and remove at position 1 one element
      }
    });
  };
  /*
    Update button color and add item to list
  */
  onClickButtonQuote(event, productData: { item: string }) {
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.offsetParent.id || target.attributes.id;
    //var value = idAttr.nodeValue;
    console.log("id: ",idAttr);
    console.log("event: ",event);
  }

  /*
    Update button color and add item to list
  */
  onClickButton(event, productData: { item: string }) {
    // check Training
    let button = event.target.parentElement; // or parentElement
    console.log("event: ", event);

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
  };

  /*
    Send Email
  */
  onSendEmail() {
      this.navCtrl.push(EmailPage, this.listToSend);
  };

  onAddItem() {
    this.navCtrl.push(CategoriesPage);
  };

}
