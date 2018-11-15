import { Component } from '@angular/core';
import { ReversePhoneService } from './reverse-phone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whitepages';
  constructor(public _api:ReversePhoneService){
    
  }
  
  
  
}
