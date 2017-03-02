import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

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

@NgModule({
  declarations: [
    MyApp,
    ContactsPage,
    LoginPage,
    NewTxPage,
    SearchContactPage,
    SearchTxPage,
    SignupPage,
    SingleContactPage,
    SingleTxPage,
    SettingsPage,
    TransactionsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactsPage,
    LoginPage,
    NewTxPage,
    SearchContactPage,
    SearchTxPage,
    SignupPage,
    SingleContactPage,
    SingleTxPage,
    SettingsPage,
    TransactionsPage
  ],
  providers: []
})
export class AppModule {}
