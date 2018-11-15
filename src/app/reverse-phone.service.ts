import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReversePhoneService {

  constructor(public _http:HttpClient) { }
  getPhoneLookup(path) {
      // return  this._http.get( 'https://proapi.whitepages.com/3.0/phone?phone=2061115201&api_key=API_KEY/'+path );
      console.log("Phone service works")
    }
}
