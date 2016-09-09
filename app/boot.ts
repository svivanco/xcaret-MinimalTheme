import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app.component';

import {AboutService} from './services/about.service';


bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  AboutService
]);
