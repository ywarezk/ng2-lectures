import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {AuthModule} from "../auth/auth.module";
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {LoginService} from "./login.service";
import {JwtInterceptor} from "./jwt.interceptor";
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // HttpClientXsrfModule.withOptions(
    //   {
    //     cookieName: 'My-Xsrf-Cookie',
    //     headerName: 'My-Xsrf-Header',
    //   }
    // ),
    // AuthModule
  ],
  providers: [
    LoginService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
