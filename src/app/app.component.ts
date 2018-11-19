import { Component } from '@angular/core';
import { ReversePhoneService } from './reverse-phone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whitepages';
  viewControl;
  inputNum;
  constructor(public _api:ReversePhoneService){
    this.viewControl=2;
  }
  
  searchPhone(){
    console.log("searchPhone has fired")
    if(this.inputNum){
    this._api.phoneLookup(
        this.inputNum.replace(/[^0-9]/gi,''))
        // .subscribe(
        //   (res) => {
        //     this._api.resData = res
        //     console.log(this.resData)
        //   }
        // )
    }
  }
  
  setPerson(){this.viewControl=1}
  setPhone(){this.viewControl=2}
  setAddress(){this.viewControl=3}
  setBusiness(){this.viewControl=4}
}
