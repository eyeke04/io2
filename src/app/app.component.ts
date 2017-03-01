import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar} from 'ionic-native';
//commented out for spashscreen. put back later
//import { StatusBar, Splashscreen } from 'ionic-native';
import { ContactsPage } from '../pages/contacts/contacts';
import { LoginPage } from '../pages/login/login';
import { NewTxPage } from '../pages/new-tx/new-tx';
import { SearchContactPage } from '../pages/search-contact/search-contact';
import { SearchTxPage } from '../pages/search-tx/search-tx';
import { SignupPage } from '../pages/signup/signup';
import { SingleContactPage } from '../pages/single-contact/single-contact';
import { SingleTxPage } from '../pages/single-tx/single-tx';
import { SettingsPage } from '../pages/settings/settings';
import { TransactionsPage } from '../pages/transactions/transactions';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = TransactionsPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Contacts', component: ContactsPage },
      { title: 'Transactions', component: TransactionsPage },
      { title: 'Settings', component: SettingsPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      //Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
