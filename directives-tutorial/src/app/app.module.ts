import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyNgClassDirective } from './my-ng-class.directive';
import { MyIfDirective } from './my-if.directive';
import { MyForDirective } from './my-for.directive';


@NgModule({
  declarations: [
    AppComponent,
    MyNgClassDirective,
    MyIfDirective,
    MyForDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
