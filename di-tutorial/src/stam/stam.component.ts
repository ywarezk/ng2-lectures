import {Component} from '@angular/core';
import {Service1Service} from '../app/service1.service';

@Component({
  template: `
    <h1>
      Hello stam component
    </h1>
  `,
  selector: 'app-stam'
})
export class StamComponent {
  constructor(private _service1: Service1Service) {}
}
