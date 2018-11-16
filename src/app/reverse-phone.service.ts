import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReversePhoneService {
  api_key;
  constructor(public _http : HttpClient) {
    this.api_key="4deef5294a724373ba7c654f4ad08998";
  }
  
  phoneLookup(number) {
      console.log("phoneLookup has fired")
      console.log("Number: "+ number);
      // return  this._http.get( 'https://proapi.whitepages.com/3.0/phone?phone=' + number + '&api_key=' + this.api_key);
    }
};
