import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SMSPage } from '../send/sms/sms';
import { EmailPage } from '../send/email/email';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = SMSPage;
  tab3Root: any = EmailPage;

  constructor() {
  }

}
