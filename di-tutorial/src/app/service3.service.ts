import {forwardRef, Inject, Injectable} from '@angular/core';
import {Service1Service} from './service1.service';

@Injectable()
export class Service3Service {

  constructor(@Inject(forwardRef(() => Service1Service)) _service1: Service1Service) { }

  public stam3() {
    console.log('stam3');
  }

  public justToUserService1() {
    // this._service1.stam1();
  }
}
