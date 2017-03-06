import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  listToSend: Array<string> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams ) {
    this.listToSend = this.navParams.data;
  }

}
