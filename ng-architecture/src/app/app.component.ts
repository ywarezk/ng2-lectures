import { Component } from '@angular/core';
import {UserService} from "../user/services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private _userService: UserService) {}
}
