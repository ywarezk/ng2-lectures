import { Injectable } from '@angular/core';
import {Service3Service} from './service3.service';

@Injectable()
export class Service2Service {
  constructor(private _service3: Service3Service) { }
  public stam2() {
    console.log('stam2');
    this._service3.stam3();
  }
}
