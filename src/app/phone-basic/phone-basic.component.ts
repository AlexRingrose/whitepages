import { Component } from '@angular/core';
import { ReversePhoneService } from '../reverse-phone.service'


@Component({
  selector: 'app-phone-basic',
  templateUrl: './phone-basic.component.html',
  styleUrls: ['./phone-basic.component.css','../center/center.component.css']
})
export class PhoneBasicComponent {

  constructor(public _api:ReversePhoneService) { }
  
  parseNumber(){
    let num = this._api.resData.phone_number.split("");
    num.splice(6,0,"-");
    num.splice(3,0," ");
    num.splice(3,0,")");
    num.splice(0,0,"(");
    num = num.toString();
    num = num.replace(/[,]/gi,''))
    return num;
  }
  
  censorName(){
    let fname = this._api.resData.belongs_to[0].firstname.split("");
    let lname = this._api.resData.belongs_to[0].lastname.split("");
    for( let i=1;i<fname.length;i++)
      fname[i] = "-";
    for( let i=1;i<lname.length;i++)
      lname[i] = "-";
    fname=fname.toString().replace(/[,]/gi,''))
    lname=lname.toString().replace(/[,]/gi,''));

    return fname + " " + lname;
  }
}
