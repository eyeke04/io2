import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


import {Contacts } from 'ionic-native';

//import { ContactsModel } from '../models/contacts';

/*
  Generated class for the Contacts provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PhoneContacts {
    
  constructor(public http: Http) {}

  /*/load all contacts
  load(): Observable<ContactsModel[]> {

  }
*/


}
