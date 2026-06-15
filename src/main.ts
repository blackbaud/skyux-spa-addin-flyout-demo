import { enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';

// Fix for crossvent `global is not defined` error. The crossvent library is used by Dragula,
// which in turn is used by multiple SKY UX components.
// https://github.com/bevacqua/dragula/issues/602
(window as any).global = window;

if (environment.production) {
  enableProdMode();
}

import('./app/app.module').then((m) => {
  platformBrowserDynamic().bootstrapModule(m.AppModule, { applicationProviders: [provideZoneChangeDetection()], })
    .catch(err => console.error(err));
});
