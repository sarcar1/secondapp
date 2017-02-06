import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from 'ionic-native';

@Component({
    selector: 'page-buyout',
    templateUrl: 'buyout.html'
})
export class BuyoutPage {
    productData: { item: string };
    listToSend: Array<string> = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.listToSend = this.navParams.data;
        //this.onEmail(this.listToSend);
    }

    onEmail(listToSend: Array<string>) {
        EmailComposer.isAvailable().then((available: boolean) => {
            if (available) {
                //Now we know we can send
            }
        });

        let email = {
            to: 'razvan.sarca@gmail.com',
            cc: '',
            bcc: [],
            attachments: [],
            subject: 'Shopping List',
            body: 'How are you? Nice greetings from Leipzig',
            isHtml: true
        };

        // Send a text message using default options
        EmailComposer.open(email);
    }
}
