import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {bootstrapWorkerUi} from '@angular/platform-webworker';

if (environment.production) {
  enableProdMode();
}

bootstrapWorkerUi('webworker.bundle.js');

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));
