import {NgModule} from '@angular/core';
import {StamComponent} from './stam.component';
import {Service1Service} from '../app/service1.service';

// module creates an injector
// it will

@NgModule({
  declarations: [StamComponent],
  exports: [StamComponent],
  providers: [Service1Service]
})
export class StamModule {}
