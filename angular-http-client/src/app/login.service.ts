import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';


@Injectable()
export class LoginService {
  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private _http: HttpClient) {}

  public login(email: string, password: string): Observable<any> {
    return this._http
      .post('/api/login', {email: email, password: password})
      .do((json: any) => localStorage.setItem('token', json.jwt))
      .do((json: any) => this.isLoggedIn.next(true));
  }
}
