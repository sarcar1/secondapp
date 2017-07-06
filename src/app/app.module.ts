import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { ItemUpdatePage } from "../pages/supermarket/item-update/item-update";
import { AllCategoriesService } from "../pages/services/all.service";
import { SettingsService } from "../pages/services/settings.service";

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
    ItemsPage,
    ItemUpdatePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule
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
    ItemsPage,
    ItemUpdatePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShopListService,
    AllCategoriesService,
    SettingsService
    ]
})
export class AppModule {}
