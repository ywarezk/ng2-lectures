import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'nz-home-page',
  template: `
    <h1>
      Welcome to the home page
    </h1>
    <button (click)="navigateToAbout()">
      Click to navigate to about
    </button>
  `
})
export class HomePageComponent {
  constructor(private _router: Router) {
    this._router
  }

  public navigateToAbout() {
    this._router.navigateByUrl('/about');
  }
}
