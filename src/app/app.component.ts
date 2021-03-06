import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from "../pages/settings/settings";
import { ContactPage } from "../pages/contact/contact";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage = TabsPage;
  settingsPage = SettingsPage;
  contactPage = ContactPage;
  @ViewChild('content') content: NavController;

  // constructor(
  //   platform: Platform, 
  //   private menuCtrl: MenuController) {

  //   platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     StatusBar.styleDefault();
  //     Splashscreen.hide();
  //   });
  // }

  onLoad(page: any) {
    this.content.setRoot(page);
    this.menuCtrl.close();
  }

  constructor( platform: Platform,
               private menuCtrl: MenuController) {
    platform.ready().then(() => {
      this.hideSplashScreen();
    });
  }
  
  hideSplashScreen() {
    if (Splashscreen) {
      setTimeout(() => {
        Splashscreen.hide();
      }, 100);
    }
  }


}
