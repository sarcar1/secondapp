import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ShopListService } from "../../services/shopList.service";
import { Quote, CategoryGroup } from "../../../data/quote.interface";
import { ItemUpdatePage } from "../item-update/item-update";
import { CategoriesPage } from "../categories/categories";
import { EmailPage } from "../../send/email/email";
import defaultCategories from "../../../data/quotes";
import { AllCategoriesService } from "../../services/all.service";
import { ItemsPage } from "../items/items";

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {
  listToSend: Quote[] = [];
  allNewCategories: CategoryGroup[];

  // pages
  categoriesPage = CategoriesPage;
  itemsPage = ItemsPage;
  emailPage = EmailPage;

  constructor(
        private navCtrl: NavController,
        private modalCtrl: ModalController,
        private shopList: ShopListService,
        private navParams: NavParams,
        private all: AllCategoriesService) {
  }

  ionViewWillEnter() {
    this.allNewCategories = this.all.getAllCategories();
    console.log("this.shopList.getCurrentList: ",this.shopList.getCurrentList());
  }

  ionViewWillLeave() {
    this.shopList.setCurrentList(this.listToSend);
  }

  isSelected(quote: Quote) {
    let selected: boolean = false;
    if (this.listToSend.length != 0) {
      this.listToSend.forEach((quoteEl: Quote) => {
        if (quote.person == quoteEl.person) {
          selected = true;
        }
      });
    }
    return selected;
  }
  
  onClickButton(quote: Quote) {
    if (this.isSelected(quote)) {
        this.shopList.removeItem(quote);
        // this.quotes = this.shopList.getCurrentList(); // re-set all the list
        const position = this.listToSend.findIndex((quoteEl: Quote) => {
          return quoteEl.id == quote.id;
        });
        this.listToSend.splice(position, 1); // get a new array and remove at position 1 one element
    }
    else {
      this.listToSend.push(quote);
    }
    
    // log selected items
    let allItems: string[] = [];
    this.listToSend.forEach((element) => allItems.push(element.person));
    console.log(allItems);
  }

  onPressButton(quote: Quote) {
    const modal = this.modalCtrl.create(ItemUpdatePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        // 1. Remove from view
        this.all.disableItem(quote);

        // 2. Remove from list to send
        this.shopList.removeItem(quote);
      }
    });
  };

}
