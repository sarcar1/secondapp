import { Injectable } from '@angular/core';
import { Quote } from "../../data/quote.interface";

@Injectable()
export class ShopListService {
    private currentList: Quote[] = [];
    private myQuote: Quote;

    constructor() {
    }

    addItem(quote: Quote) {
        this.currentList.push(quote);
        console.log(this.currentList);
    }

    removeItem(quote: Quote) {
        const position = this.currentList.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
        this.currentList.splice(position, 1);
        console.log(this.currentList);
    }

    getCurrentList() {
        return this.currentList.slice();
    }

    setCurrentList(quotes: Quote[]) {
        this.currentList = quotes;
    }

    isQuoteFavorite(quote: Quote) {
        // find function
        //  - gets an argument of function which get executed on each item of the currentList array
        return this.currentList.find( (quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
    }

    isItemInList(item: String): Quote {
        this.myQuote = this.currentList.find( (quoteEl: Quote) => {
            return quoteEl.person == item;
        });
        return this.myQuote;
    }

}