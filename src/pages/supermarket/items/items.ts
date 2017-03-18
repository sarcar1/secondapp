import { Component, OnInit } from '@angular/core';
import { Quote, CategoryGroup } from "../../../data/quote.interface";
import { NavParams, AlertController } from "ionic-angular";
import { ShopListService } from "../../services/shopList.service";
//import defaultCategories from "../../../data/quotes";
import { AllCategoriesService } from "../../services/all.service";

@Component({
  selector: 'page-items',
  templateUrl: 'items.html'
})
export class ItemsPage implements OnInit {
  category: {category: string, quotes: Quote[], icon:string};
  //allCategories: CategoryGroup[];

  constructor( 
    private navParams: NavParams, 
    private altertCtrl: AlertController,
    private shopListService: ShopListService,
    private all: AllCategoriesService ) {

    }

  ngOnInit() {
    this.category = this.navParams.data;
    //this.allCategories = defaultCategories;
  }

  onAddToFavorits(quote: Quote) {
    const myAlert = this.altertCtrl.create({
      title: 'Add Item?',
      subTitle: 'Add to shopping list',
      message: 'Are you sure you want to add the item?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.all.enableItem(quote);
            //this.shopListService.addItem(selectedItem);
            //this.shopListService.addItem(selectedItem);
            // add favorite quote in shop list
            // this.allCategories.forEach((categoryGroupEl: CategoryGroup) => {
            //   categoryGroupEl.quotes.forEach((quoteEl: Quote) => {
            //     if (quoteEl.id == selectedItem.id) {
            //       quoteEl.default == true;
            //     }
            //   });
            // });            
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
    //this.shopListService.removeItem(quote);
    this.all.disableItem(quote);
  }

  isFavorite(quote: Quote) {
    //return this.shopListService.isQuoteFavorite(quote);
    this.all.isItemEnabled(quote);
  }
}
