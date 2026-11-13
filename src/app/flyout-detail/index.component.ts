import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { FlyoutDetailComponent } from './flyout-detail.component';

@Component({
    selector: 'app-flyout-detail-route-index',
    templateUrl: './index.component.html',
    imports: [FlyoutDetailComponent],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true
})
export class FlyoutDetailRouteIndexComponent { }
