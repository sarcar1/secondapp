import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SMSPage } from '../pages/send/sms/sms';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ShopPage } from '../pages/shop/shop';
import { EmailPage } from '../pages/send/email/email';

@NgModule({
  declarations: [
    MyApp,
    SMSPage,
    ContactPage,
    HomePage,
    TabsPage,
    ShopPage,
    EmailPage
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
    EmailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
