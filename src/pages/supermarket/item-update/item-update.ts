import { Component } from '@angular/core';
import { Quote } from "../../../data/quote.interface";
import { ShopListService } from "../../services/shopList.service";
import { ViewController, NavParams } from "ionic-angular";

@Component({
  selector: 'page-item-update',
  templateUrl: 'item-update.html'
})
export class ItemUpdatePage {
  person: string;
  text: string;

  constructor(
    private viewCtrl: ViewController, // this controls the currently visible page
    private navParams: NavParams ) {};

  // executed only if the page was not retreived from the CACHE
  ionViewDidLoad() {
    this.person = this.navParams.get('person'); // here we do ".get" not ".data"
    this.text = this.navParams.get('text');
  }

  onClose(remove: boolean = false) {
    this.viewCtrl.dismiss(remove);
  }

}
