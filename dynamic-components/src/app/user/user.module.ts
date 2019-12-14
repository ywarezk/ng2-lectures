import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStamComponent } from './user-stam/user-stam.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserStamComponent],
  exports: [UserStamComponent]
})
export class UserModule { }
