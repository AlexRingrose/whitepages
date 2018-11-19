import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReversePhoneService {
  api_key;
  resData;
  constructor(public _http : HttpClient) {
    this.api_key="4deef5294a724373ba7c654f4ad08998";
    //Assigning test data to avoid unessecary api queries
    this.resData = {
  "id": "Phone.3e836fef-a2df-4b08-cfe3-bc7128b6f5b4",
  "phone_number": "2061115201",
  "is_valid": true,
  "country_calling_code": "1",
  "line_type": "Mobile",
  "carrier": "Whitepages Telco",
  "is_prepaid": null,
  "is_commercial": false,
  "belongs_to": [
    {
      "id": "Person.fffdcf06-0929-4b5a-9921-ee49b101ca84",
      "name": "Waidong L Syrws",
      "firstname": "Waidong",
      "middlename": "L",
      "lastname": "Syrws",
      "age_range": "25-29",
      "gender": "Female",
      "type": "Person",
      "link_to_phone_start_date": "2018-01-01"
    }
  ],
  "current_addresses": [
    {
      "id": "Location.bda7f52b-384a-4d60-aaa9-e42184910001",
      "location_type": "Address",
      "street_line_1": "100 Syrws St Ste 1",
      "street_line_2": null,
      "city": "Lynden",
      "postal_code": "98264",
      "zip4": "9999",
      "state_code": "WA",
      "country_code": "US",
      "lat_long": {
        "latitude": 48.966444,
        "longitude": -121.960843,
        "accuracy": "RoofTop"
      },
      "is_active": true,
      "delivery_point": "MultiUnit",
      "link_to_person_start_date": "2018-01-01"
    },
    {
      "id": "Location.d1a40ed5-a70a-46f8-80a9-bb4ac27e3a02",
      "location_type": "Address",
      "street_line_1": "2 Syrws St",
      "street_line_2": null,
      "city": "Lynden",
      "postal_code": "98264",
      "zip4": "9999",
      "state_code": "WA",
      "country_code": "US",
      "lat_long": {
        "latitude": 48.966444,
        "longitude": -121.960843,
        "accuracy": "RoofTop"
      },
      "is_active": true,
      "delivery_point": "SingleUnit",
      "link_to_person_start_date": "2018-01-01"
    }
  ],
  "historical_addresses": [
    {
      "id": "Location.d1a40ed5-a70a-46f8-80a9-bb4ac27e3a03",
      "location_type": "Address",
      "street_line_1": "3 Syrws St",
      "street_line_2": null,
      "city": "Lynden",
      "postal_code": "98264",
      "zip4": "9999",
      "state_code": "WA",
      "country_code": "US",
      "lat_long": {
        "latitude": 48.966444,
        "longitude": -121.960843,
        "accuracy": "RoofTop"
      },
      "is_active": true,
      "delivery_point": "SingleUnit",
      "link_to_person_start_date": "2010-07-31",
      "link_to_person_end_date": null
    }
  ],
  "associated_people": [
    {
      "id": "Person.f191f534-5392-4b39-9826-c9b57cf77a57",
      "name": "Waiso F Syrws III",
      "firstname": "Waiso",
      "middlename": "F",
      "lastname": "Syrws",
      "relation": "Parent_Child"
    },
    {
      "id": "Person.fea1fe63-a199-4e7c-b553-971bdb733e05",
      "name": "Baacel Vandenzanten",
      "firstname": "Baacel",
      "middlename": null,
      "lastname": "Vandenzanten",
      "relation": "Associate"
    }
  ],
  "alternate_phones": [
    "2061115102",
    "2061115101"
  ],
  "error": null,
  "warnings": [],
};
  }
  
  phoneLookup(number) {
      console.log("phoneLookup has fired")
      console.log("Number: "+ number);
      // return  this._http.get( 'https://proapi.whitepages.com/3.0/phone?phone=' + number + '&api_key=' + this.api_key);
    }
};
