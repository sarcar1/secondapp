import { Component } from '@angular/core';
import { Toggle, AlertController } from "ionic-angular";
import { SettingsService } from "../services/settings.service";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  email: string = "razvan.sarca@gmail.com";
  tel: string = "0743120114";

  constructor(
    private settingsService: SettingsService,
    private alertCrtl: AlertController ) {
  }

  ionViewCanLeave() {
  }

  ionWillLeave() {
    if ( this.email == "" && this.tel == "" ) {
      let alert = this.alertCrtl.create({
        title: 'Oops',
        subTitle: 'Please enter either email or phone number!',
        buttons: ['OK']
      });
      alert.present();
    } else {
      this.settingsService.setEmail(this.email);
      this.settingsService.setTel(this.tel);
    }
  }

  onToggle(toggle: Toggle) {
    this.settingsService.setBackground(toggle.checked);
  }

  checkAltBAckground(): boolean {
    return this.settingsService.isAltBackground();
  }
}
