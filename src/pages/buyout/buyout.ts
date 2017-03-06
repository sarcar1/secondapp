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
<<<<<<< HEAD
        //this.onEmail(this.listToSend);
=======
        //console.log(this.listToSend.join('<br>'));
        this.onEmail();
>>>>>>> ddcc52ce94d6afce790c2b52e576550beac4fa17
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
<<<<<<< HEAD
            body: 'How are you? Nice greetings from Leipzig',
=======
            body: this.listToSend.join('<br>'),
>>>>>>> ddcc52ce94d6afce790c2b52e576550beac4fa17
            isHtml: true
        };

        // Send a text message using default options
        EmailComposer.open(email);
    }
}
