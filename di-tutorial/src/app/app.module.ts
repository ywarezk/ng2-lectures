import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {GroceryService} from './grocery.service';
import {LoggerService} from './logger.service';
import {Service1Service} from './service1.service';
import {Service2Service} from './service2.service';
import {Service3Service} from './service3.service';
import {StamModule} from '../stam/stam.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StamModule
  ],
  providers: [GroceryService, LoggerService, Service1Service, Service2Service, Service3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
