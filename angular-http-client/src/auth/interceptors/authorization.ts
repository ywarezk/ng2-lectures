

import {HttpInterceptor} from '@angular/common/http';
import {HttpRequest} from "@angular/common/http";
import {HttpHandler} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpEvent} from "@angular/common/http";

export class AuthorizationInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('first interceptor');
    const reqWithAuth = req.clone({
      headers: req.headers.set('Authorization', 'hello world')
    });
    return next.handle(reqWithAuth);
  }
}
