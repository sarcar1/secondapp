import defaultCategories from "../../data/quotes";
import { Injectable } from "@angular/core";
import { CategoryGroup, Quote } from "../../data/quote.interface";

@Injectable()
export class AllCategoriesService {
    private allCategories: CategoryGroup[];

    constructor() {
        this.allCategories = defaultCategories;
    }
    
    enableItem(quote: Quote) {
        this.allCategories.forEach((categoryGroupEl: CategoryGroup) => {
            categoryGroupEl.quotes.forEach((quoteEl: Quote) => {
                if (quoteEl.id == quote.id) {
                    quoteEl.default = true;
                }
            });
        });        
    }

    disableItem(quote: Quote) {
        this.allCategories.forEach((categoryGroupEl: CategoryGroup) => {
            categoryGroupEl.quotes.forEach((quoteEl: Quote) => {
                if (quoteEl.id == quote.id) {
                    quoteEl.default = false;
                }
            });
        });        
    }

    isItemEnabled(quote: Quote) {
        let isItemEnabled: boolean = false;
        this.allCategories.forEach((categoryGroupEl: CategoryGroup) => {
            categoryGroupEl.quotes.forEach((quoteEl: Quote) => {
                if (quoteEl.id == quote.id) {
                    if (quoteEl.default == true) {
                        isItemEnabled = true;
                        return;
                    }
                }
            });
        });        
        return isItemEnabled;
    }

    getAllCategories() {
        return this.allCategories;
    }
}    