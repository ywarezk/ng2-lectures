/**
 * Interceptor to include jwt token
 */

import {HttpInterceptor} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpHandler} from "@angular/common/http/src/backend";
import {HttpEvent} from "@angular/common/http/src/response";
import {HttpRequest} from "@angular/common/http/src/request";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
    });
    return next.handle(newReq);
  }
}
