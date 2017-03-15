import { Component } from '@angular/core';
import { EmailComposer } from 'ionic-native';
import { ShopListService } from "../../services/shopList.service";
import { Quote } from "../../../data/quote.interface";

@Component({
    selector: 'page-email',
    templateUrl: 'email.html'
})
export class EmailPage {
    listToSend: Array<string> = [];

    constructor(
        public shopListService: ShopListService) {

        this.shopListService.getCurrentList().forEach((quoteEl: Quote) => {
            this.listToSend.push(quoteEl.person);
        });
        // this.onEmail(this.listToSend); // add this to send email
        console.log(this.listToSend.join('<br>'));
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
            body: this.listToSend.join('<br>'),
            isHtml: true
        };

        // Send a text message using default options
        EmailComposer.open(email);
    }

    onRemoveFromSoppingList(item: string) {
        const position = this.listToSend.findIndex((itemEl: string) => {
            return itemEl == item;
        });
        this.listToSend.splice(position, 1);
        console.log("listToSend:", this.listToSend);
    }
}
