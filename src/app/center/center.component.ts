import { Component } from '@angular/core';
import { ReversePhoneService } from '../reverse-phone.service'

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent {

  constructor(public _api:ReversePhoneService) { }
}
