import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {UserModule} from "../user/user.module";
import {UserService} from "../user/services/user.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, UserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
