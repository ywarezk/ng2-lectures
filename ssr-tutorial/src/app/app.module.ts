import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {LaddaDirective} from './directives/ladda.directive';
import {AboutComponent} from './components/about.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LaddaDirective,
    AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
