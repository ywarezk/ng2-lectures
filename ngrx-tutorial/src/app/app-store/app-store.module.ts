import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducers)
  ],
  exports: []
})
export class AppStoreModule {

}
