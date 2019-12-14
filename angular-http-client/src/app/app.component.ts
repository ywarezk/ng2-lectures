import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpErrorResponse} from "@angular/common/http";
import {HttpResponse} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {LoginService} from "./login.service";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public tasks: any[] = [];

  constructor(private _loginService: LoginService, private _http: HttpClient) {

  }

  ngOnInit(): void {
    this._loginService.isLoggedIn
      .filter((isLoggedIn: boolean) => isLoggedIn)
      .first()
      .subscribe(() => {
        this._http.get('/api/task').subscribe((tasks: any[]) => {
          this.tasks = tasks;
        });
      })
  }
}
