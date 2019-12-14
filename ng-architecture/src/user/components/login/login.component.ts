
import {Component} from "@angular/core";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'jb-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  constructor(private _userService: UserService){}
}
