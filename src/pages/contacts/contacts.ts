import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Contacts, ContactFieldType } from 'ionic-native';
/*
  Generated class for the Contacts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

Contacts.find([], {filter: ''}).then((contacts) => {
	alert(JSON.stringify(contacts[0]));
	if(contacts.length == 0) {
		alert('No contacts');
	}
})
  
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})

export class ContactsPage {

	contacttobefound = '';
	contactsfound = [];
	search = false;
	ourvalue: ContactFieldType[] = ['displayName'];

	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ContactsPage');
	}

}
