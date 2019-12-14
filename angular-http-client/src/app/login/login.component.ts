import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public email = '';
  public password = '';
  public status = '';

  constructor(private _loginService: LoginService) { }

  login() {
    this._loginService.login(this.email, this.password).subscribe(() => {
      this.status = 'success';
    }, () => {
      this.status = 'invalid';
    });
  }


}
