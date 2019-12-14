/**
 * Created by yarivkatz on 12/12/2017.
 */


import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {UserService} from "./services/user.service";

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [UserService]
})
export class UserModule{

}
