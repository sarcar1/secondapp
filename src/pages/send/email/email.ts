import { Component } from '@angular/core';
import { EmailComposer } from 'ionic-native';
import { ShopListService } from "../../services/shopList.service";
import { Quote } from "../../../data/quote.interface";
import { SettingsService } from "../../services/settings.service";

@Component({
    selector: 'page-email',
    templateUrl: 'email.html'
})
export class EmailPage {
    listToSend: Array<string> = [];

    constructor(
        public shopListService: ShopListService,
        private settingsService: SettingsService) {
    }

    ionViewWillEnter() {
        this.listToSend = [];
        this.shopListService.getCurrentList().forEach((quoteEl: Quote) => {
            this.listToSend.push(quoteEl.person);
        });
        console.log(this.listToSend.join('<br>'));
    }

    onRemoveFromSoppingList(item: string) {
        const position = this.listToSend.findIndex((itemEl: string) => {
            return itemEl == item;
        });
        this.listToSend.splice(position, 1);
        console.log("listToSend:", this.listToSend);
    }    

    onEmail() {
        EmailComposer.isAvailable().then((available: boolean) => {
            if (available) {
                //Now we know we can send
            }
        });

        let email = {
            to: this.settingsService.getEmail(),
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

    onSMS() {
    }

    onGoogleKeep() {
    }

    getBackground() {
        return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
    }
}
