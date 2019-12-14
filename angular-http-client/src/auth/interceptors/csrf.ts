/**
 * Created by yarivkatz on 11/01/2018.
 */


import {HttpInterceptor} from '@angular/common/http'
import {HttpRequest} from "@angular/common/http";
import {HttpHandler} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpEvent} from "@angular/common/http";

export class CsrfInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('second intercept');
    const oreq = req.clone({
      headers: req.headers.set('X-XSRF-TOKEN', 'wat')
    })
    return next.handle(oreq);
  }
}
