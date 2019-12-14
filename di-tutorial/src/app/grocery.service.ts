import {Injectable, InjectionToken, Injector} from '@angular/core';

export const ServerUrl: InjectionToken<string> = new InjectionToken('token');

@Injectable()
export class GroceryService {

  constructor(private _injector: Injector) {
  }

}
