import { Injectable } from '@angular/core';
import { Quote } from "../../data/quote.interface";

@Injectable()
export class ShopListService {
    private currentList: Quote[] = [];

    constructor() {};

    addItem(quote: Quote) {
        this.currentList.push(quote);
        console.log(this.currentList);
    };

    removeItem(quote: Quote) {
        const position = this.currentList.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
        this.currentList.splice(position, 1);
    };

    getCurrentList() {
        return this.currentList.slice();
    }

}