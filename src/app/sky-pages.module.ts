import {
  CommonModule
} from '@angular/common';

import {
  NgModule
} from '@angular/core';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  RouterModule
} from '@angular/router';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyAppLinkModule
} from '@skyux/router';

import {
  FlyoutDetailComponent
} from './flyout-detail/flyout-detail.component';

import {
  MyTileComponent
} from './my-tile/my-tile.component';

import {
  FlyoutDetailIdRouteIndexComponent
} from './flyout-detail/_id/index.component';

import {
  FlyoutDetailRouteIndexComponent
} from './flyout-detail/index.component';

import {
  MyTileRouteIndexComponent
} from './my-tile/index.component';

import {
  RootRouteIndexComponent
} from './index.component';

import {
  NotFoundComponent
} from './not-found.component';

import {
  AppExtrasModule
} from './app-extras.module';

/**
 * @deprecated This module was migrated from SKY UX Builder v.4.
 * It is highly recommended that this module be factored-out into separate, lazy-loaded feature modules.
 */
@NgModule({
  imports: [
    AppExtrasModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SkyAppLinkModule,
    SkyI18nModule
  ],
  declarations: [
    FlyoutDetailComponent,
    FlyoutDetailIdRouteIndexComponent,
    FlyoutDetailRouteIndexComponent,
    MyTileComponent,
    MyTileRouteIndexComponent,
    NotFoundComponent,
    RootRouteIndexComponent
  ],
  exports: [
    AppExtrasModule,
    FlyoutDetailComponent,
    MyTileComponent,
    NotFoundComponent,
    RootRouteIndexComponent
  ]
})
export class SkyPagesModule { }
