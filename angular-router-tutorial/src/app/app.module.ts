import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AboutPageComponent} from './components/about-page/about-page.component';
import {Error404PageComponent} from './components/error404-page/error404-page.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {TodoModule} from '../todo/todo.module';
import { Parent1Component } from './components/parent1/parent1.component';
import { Child1Component } from './components/child1/child1.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    Error404PageComponent,
    HomePageComponent,
    Parent1Component,
    Child1Component
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
