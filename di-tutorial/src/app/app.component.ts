import {Component, Injector} from '@angular/core';
import {GroceryService} from './grocery.service';
import {Service1Service} from './service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private grocery: GroceryService, private injector: Injector, private _service1: Service1Service) {
  }
}
