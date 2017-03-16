import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ShopListService } from "../../services/shopList.service";
import { Quote, CategoryGroup } from "../../../data/quote.interface";
import { ItemUpdatePage } from "../item-update/item-update";
import { CategoriesPage } from "../categories/categories";
import { EmailPage } from "../../send/email/email";
import defaultCategories from "../../../data/quotes";

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
  toogle: boolean = true;
  allCategories: CategoryGroup[];

  // pages
  categoriesPage = CategoriesPage;
  emailPage = EmailPage;

  constructor(
        public navCtrl: NavController,
        private modalCtrl: ModalController,
        private shopList: ShopListService,
        public navParams: NavParams) {
    this.allCategories = defaultCategories;
  }

  ionViewWillEnter() {
    //this.quotes = this.quotes.concat(this.shopList.getCurrentList());
  }

  /*
    Update button color and add item to list
  */
  onClickButtonQuote(event, quote: Quote) {
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.offsetParent.id || target.attributes.id;
    let elem = document.getElementById(idAttr);

    if (elem.style.color == "") {
      elem.style.color = "blue";
    }

    //  Add item to list if it's new
    let addit: boolean = true;
    for (let newItem of this.listToSend) {
      if (String(newItem) === String(quote.person)) {
        addit = false;
        break;
      }
    }
    if (addit) {
      this.listToSend.push(quote.person);
    }

    //  Remove item it is selected the second time
    var index: number = -1;
    if (elem.style.color == "green") {
      index = this.listToSend.indexOf(quote.person);
    }
    if (index > -1) {
      this.listToSend.splice(index, 1);
    }

    switch (elem.style.color) {
      case "blue": {
        elem.style.color = "green";
        break;
      }
      case "green": {
        elem.style.color = "blue";
        break;
      }
      default: {
        elem.style.color = "blue";
        break;
      }
    }

    // log list
    console.log(this.listToSend);
  }

  // --- DEPRECATED ---
  // /*
  //   Update button color and add item to list 
  // */
  // onClickButton(button, productData: { item: string }) {

  //   //
  //   //  Add item to list if it's new
  //   //
  //   let addit:boolean = true;
  //   for (let newItem of this.listToSend) {
  //     if (String(newItem) === String(productData.item)) {
  //       addit = false;
  //       break;
  //     }
  //   }
  //   if ( addit ) {
  //       this.listToSend.push(productData.item);
  //   }

  //   //
  //   //  Remove item it is selected the second time
  //   //
  //   var index:number = -1;
  //   if ( button._color == "secondary" ) {
  //     index = this.listToSend.indexOf(productData.item);
  //   }
  //   if (index > -1) {
  //     this.listToSend.splice(index, 1);
  //   }

  //   //
  //   //  Change color
  //   //
  //   button.color = ((button._color == "primary") || (button._color == "undefined")) ? "secondary" : "primary";

  //   //
  //   //  Log list
  //   //
  //   console.log(this.listToSend);
  // };

  /*
    Ask if to remove button in case of long press on it
  */
  onPressButton(quote: Quote) {
    const modal = this.modalCtrl.create(ItemUpdatePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.shopList.removeItem(quote);
        // this.quotes = this.shopList.getCurrentList(); // re set all the list
        const position = this.quotes.findIndex((quoteEl: Quote) => {
          return quoteEl.id == quote.id;
        });
        this.quotes.splice(position, 1); // get a new array and remove at position 1 one element
      }
    });
  };

}
