import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from 'ionic-native';

@Component({
    selector: 'page-buyout',
    templateUrl: 'buyout.html'
})
export class BuyoutPage {
    listToSend: Array<string> = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.listToSend = this.navParams.data;
        //console.log(this.listToSend.toLocaleString());
        this.onEmail();
    }

    onEmail() {
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
            body: this.listToSend.toLocaleString(),
            isHtml: true
        };

        // Send a text message using default options
        EmailComposer.open(email);
    }
}
