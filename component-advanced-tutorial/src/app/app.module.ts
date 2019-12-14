import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { LongFormComponent } from './long-form/long-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    LongFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [Task1Component, Task2Component, Task3Component]
})
export class AppModule { }
