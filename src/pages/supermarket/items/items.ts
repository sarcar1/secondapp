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
    private shopList: ShopListService ) {}

  ngOnInit() {
    this.category = this.navParams.data;
  }

  onAddToFavorits(selectedItem: Quote) {
    const myAlert = this.altertCtrl.create({
      title: 'Add Item',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the item?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.shopList.addItem(selectedItem);
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

}
