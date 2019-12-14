import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppStamComponent } from './app-stam/app-stam.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    AppStamComponent
  ],
  imports: [
    BrowserModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
