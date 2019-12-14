import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ChildComponent} from './child.component';
import {ZigZagPipe} from "./zigzag.pipe";


@NgModule({
  declarations: [
    AppComponent, ChildComponent, ZigZagPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
