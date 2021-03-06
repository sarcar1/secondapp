import { Component } from '@angular/core';
import { EmailComposer } from 'ionic-native';
import { ShopListService } from "../../services/shopList.service";
import { SettingsPage } from "../../settings/settings";
import { Quote } from "../../../data/quote.interface";
import { SettingsService } from "../../services/settings.service";
import { reorderArray, AlertController, NavController } from "ionic-angular";

@Component({
    selector: 'page-email',
    templateUrl: 'email.html'
})
export class EmailPage {
    listToSend: Array<string> = [];
    myDate: String = "2017-07-09T14:06:11.156Z";
    private myQuote: Quote;
    sex: string;

    constructor(
        private navCtrl: NavController,
        public shopListService: ShopListService,
        private altertCtrl: AlertController,
        private settingsService: SettingsService) {
    }

    ionViewWillEnter() {
        this.listToSend = [];
        this.myDate = new Date().toISOString();
        this.shopListService.getCurrentList().forEach((quoteEl: Quote) => {
            this.listToSend.push(quoteEl.person);
        });
        console.log(this.listToSend.join('<br>'));
        this.sex = this.settingsService.getSex();
        console.log("this.sex: ",this.sex);
    }

    onRemoveFromSoppingList(item: string) {
        // Remove from listToSend
        const position = this.listToSend.findIndex((itemEl: string) => {
            return itemEl == item;
        });
        this.listToSend.splice(position, 1);
        
        // Remove from shopListService
        this.myQuote = this.shopListService.isItemInList(item);
        this.shopListService.removeItem(this.myQuote);
    }

    onEmail() {
        if (this.settingsService.getEmail() == "") {
            const myAlert = this.altertCtrl.create({
                title: 'No Email Found',
                subTitle: 'You need to set up the email',
                message: 'Go to settings to set up the recipient email?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            this.navCtrl.push(SettingsPage);
                        }
                    },
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => {
                            //console.log('Ok');
                        }
                    }
                ]
            });
            myAlert.present();

        } else {

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
    }

    onSMS() {
    }

    onGoogleKeep() {
    }

    getBackground() {
        return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
    }

    reorderItems(indexes) {
        this.listToSend = reorderArray(this.listToSend, indexes);
    }
}
