import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReversePhoneService } from 
  './reverse-phone.service';
import { CenterComponent } from './center/center.component';
import { PhoneBasicComponent } from './phone-basic/phone-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    CenterComponent,
    PhoneBasicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ReversePhoneService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
