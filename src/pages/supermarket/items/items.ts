import { Component, OnInit } from '@angular/core';
import { Quote } from "../../../data/quote.interface";
import { NavParams, AlertController } from "ionic-angular";
import { ShopListService } from "../../services/shopList.service";
import { AllCategoriesService } from "../../services/all.service";

@Component({
  selector: 'page-items',
  templateUrl: 'items.html'
})
export class ItemsPage implements OnInit {
  category: {category: string, quotes: Quote[], icon:string};

  constructor(
    private navParams: NavParams,
    private altertCtrl: AlertController,
    private all: AllCategoriesService ) {
    }

  ngOnInit() {
    this.category = this.navParams.data;
  }

  onAddToFavorits(quote: Quote) {
    const myAlert = this.altertCtrl.create({
      title: 'Add Item?',
      //subTitle: 'Add to shopping list',
      message: 'Are you sure you want to add the item?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.all.enableItem(quote);
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Ok');
          }
        }
      ]
    });
    myAlert.present();
  };

  onRemoveFromFavorits(quote: Quote) {
    this.all.disableItem(quote);
  }

  isFavorite(quote: Quote):boolean {
    return this.all.isItemEnabled(quote);
  }


}
