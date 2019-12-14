import { Component } from '@angular/core';
import {ActivatedRoute, Event, NavigationEnd, RouteConfigLoadEnd, RouteConfigLoadStart, Router, RoutesRecognized} from '@angular/router';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private _router: Router, private _activated: ActivatedRoute) {
    // this._router.events
    //   .filter((event: Event) => event instanceof RoutesRecognized)
    //   .subscribe((event: RoutesRecognized) => debugger);
  }
}
