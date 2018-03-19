import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {WorkerAppModule} from '@angular/platform-webworker';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';


@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent
  ],
  imports: [
    // BrowserModule,
    WorkerAppModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
