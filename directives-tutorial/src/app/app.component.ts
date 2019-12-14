import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  classes = {'stam': true, 'foo-bar': false};
  groceryList = [
    'tofu',
    'saten',
    'soya milk'
  ]

  public toggleClasses() {
    this.classes['stam'] = false;
    this.classes['foo-bar'] = true;
  }
}
