import { Injectable } from '@angular/core';
import {Service2Service} from './service2.service';
import {Service3Service} from './service3.service';

@Injectable()
export class Service1Service {
  constructor() {
    console.log('service1');
  }
  public stam1 () {
    console.log('stam1');
    // this._service2.stam2();
  }
}
