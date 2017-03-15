import { Component, OnInit } from '@angular/core';
import { Quote } from "../../../data/quote.interface";
import { NavParams, AlertController } from "ionic-angular";
import { ShopListService } from "../../services/shopList.service";

@Component({
  selector: 'page-items',
  templateUrl: 'items.html'
})
export class ItemsPage implements OnInit {
  category: {category: string, quotes: Quote[], icon:string};

  constructor( 
    private navParams: NavParams, 
    private altertCtrl: AlertController,
    private shopListService: ShopListService ) {}

  ngOnInit() {
    this.category = this.navParams.data;
  }

  onAddToFavorits(selectedItem: Quote) {
    const myAlert = this.altertCtrl.create({
      title: 'Add Item?',
      subTitle: 'Add to shopping list',
      message: 'Are you sure you want to add the item?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.shopListService.addItem(selectedItem);
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
    this.shopListService.removeItem(quote);
  }

  isFavorite(quote: Quote) {
    return this.shopListService.isQuoteFavorite(quote);
  }
}
