import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SMSPage } from '../pages/send/sms/sms';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ShopPage } from '../pages/supermarket/shop/shop';
import { EmailPage } from '../pages/send/email/email';
import { SettingsPage } from "../pages/settings/settings";
import { CategoriesPage } from "../pages/supermarket/categories/categories";
import { ItemsPage } from "../pages/supermarket/items/items";
import { ShopListService } from "../pages/services/shopList.service";

@NgModule({
  declarations: [
    MyApp,
    SMSPage,
    ContactPage,
    HomePage,
    TabsPage,
    ShopPage,
    EmailPage,
    SettingsPage,
    CategoriesPage,
    ItemsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SMSPage,
    ContactPage,
    HomePage,
    TabsPage,
    ShopPage,
    EmailPage,
    SettingsPage,
    CategoriesPage,
    ItemsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShopListService
    ]
})
export class AppModule {}
