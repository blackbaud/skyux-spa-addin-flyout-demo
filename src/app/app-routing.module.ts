import {
  NgModule
} from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';

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

const routes: Routes = [
  { path: '', children: [
    { path: '', component: RootRouteIndexComponent },
    { path: 'flyout-detail', component: FlyoutDetailRouteIndexComponent },
    { path: 'my-tile', component: MyTileRouteIndexComponent },
    { path: 'flyout-detail/:id', component: FlyoutDetailIdRouteIndexComponent }
  ] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
