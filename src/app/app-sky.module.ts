import {
  NgModule
} from '@angular/core';

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyKeyInfoModule,
  SkyLabelModule
} from '@skyux/indicators';

import {
  SkyPageSummaryModule
} from '@skyux/layout';

import {
  SkyListModule
} from '@skyux/list-builder';

import {
  SkyListViewGridModule
} from '@skyux/list-builder-view-grids';

/**
 * @deprecated Each SKY UX module should be imported into each feature module
 * that references the SKY UX module, and this module should be removed.
 */
@NgModule({
  exports: [
    SkyAvatarModule,
    SkyI18nModule,
    SkyKeyInfoModule,
    SkyLabelModule,
    SkyListModule,
    SkyListViewGridModule,
    SkyPageSummaryModule
  ]
})
export class AppSkyModule { }
