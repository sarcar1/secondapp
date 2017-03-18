import { Component } from '@angular/core';

import { EmailPage } from '../send/email/email';
import { CategoriesPage } from "../supermarket/categories/categories";
import { ShopPage } from "../supermarket/shop/shop";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ShopPage; // was HomePage
  tab2Root: any = CategoriesPage;
  tab3Root: any = EmailPage;

  constructor() {
  }

}
