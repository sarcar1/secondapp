import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ShopListService } from "../../services/shopList.service";
import { Quote, CategoryGroup } from "../../../data/quote.interface";
import { ItemUpdatePage } from "../item-update/item-update";
import { CategoriesPage } from "../categories/categories";
import { EmailPage } from "../../send/email/email";
import defaultCategories from "../../../data/quotes";

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {
  quotesToSend: Quote[] = [];
  allCategories: CategoryGroup[];

  // pages
  categoriesPage = CategoriesPage;
  emailPage = EmailPage;

  constructor(
        public navCtrl: NavController,
        private modalCtrl: ModalController,
        private shopList: ShopListService,
        public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.allCategories = defaultCategories;
  }
  ionViewWillLeave() {
    this.shopList.setCurrentList(this.quotesToSend);
  }
  
  onClickButton(quote: Quote) {
    if (this.isSelected(quote)) {
        this.shopList.removeItem(quote);
        // this.quotes = this.shopList.getCurrentList(); // re-set all the list
        const position = this.quotesToSend.findIndex((quoteEl: Quote) => {
          return quoteEl.id == quote.id;
        });
        this.quotesToSend.splice(position, 1); // get a new array and remove at position 1 one element
    }
    else {
      this.quotesToSend.push(quote);
    }
    
    // log selected items
    let allItems: string[] = [];
    this.quotesToSend.forEach((element) => {
      allItems.push(element.person);
    });
    console.log(allItems);
  }

  isSelected(quote: Quote) {
    let selected: boolean = false;
    if (this.quotesToSend.length != 0) {
      this.quotesToSend.forEach((quoteEl: Quote) => {
        if (quote.person == quoteEl.person) {
          selected = true;
          return;
        }
      });
    }
    return selected;
  }

  onPressButton(quote: Quote) {
    const modal = this.modalCtrl.create(ItemUpdatePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {

        // 1. Remove from quote in view
        this.allCategories.forEach((categoryGroupEl: CategoryGroup) => {
          if (categoryGroupEl.category == quote.category) {
            const foundQuote = categoryGroupEl.quotes.findIndex((quoteEl: Quote) => {
              if (quoteEl.id == quote.id) {
                quoteEl.default = false;
                return true;
              } else {
                return false;
              }
            });
            if (!foundQuote) {
              console.log("Didn't find quote in allCategories!");
            }
          }
        });

        // 2. Remove from quoteToSend
        this.shopList.removeItem(quote);
        // this.quotes = this.shopList.getCurrentList(); // re set all the list
        const position2 = this.quotesToSend.findIndex((quoteEl: Quote) => {
          return quoteEl.id == quote.id;
        });
        this.quotesToSend.splice(position2, 1); // get a new array and remove at position 1 one element
      }
    });
  };

}
