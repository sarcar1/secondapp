import { Component, OnInit } from '@angular/core';
import { Quote } from "../../../data/quote.interface";
import quote from "../../../data/quotes";
import { ItemsPage } from "../items/items";


@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage implements OnInit {
  quoteCollection: {category: string, quotes: Quote[], icon:string}[];
  itemsPage = ItemsPage;
  
  ngOnInit() {
    this.quoteCollection = quote;
  }

}
