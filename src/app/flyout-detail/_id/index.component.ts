import {
  Component,
  OnDestroy,
  OnInit,
  inject
} from '@angular/core';

import {
  ActivatedRoute
} from '@angular/router';

import {
  Subject
} from 'rxjs';

import {
  takeUntil
} from 'rxjs/operators';

import { FlyoutDetailComponent } from '../flyout-detail.component';

@Component({
    selector: 'app-flyout-detail-id-route-index',
    templateUrl: './index.component.html',
    imports: [FlyoutDetailComponent],
    standalone: true
})
export class FlyoutDetailIdRouteIndexComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);

  public id = '';

  private ngUnsubscribe = new Subject<void>();

  public ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(params => {
        this.id = params['id'];
      });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
