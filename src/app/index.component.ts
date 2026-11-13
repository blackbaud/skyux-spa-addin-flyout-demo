import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
    selector: 'app-root-route-index',
    templateUrl: './index.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true
})
export class RootRouteIndexComponent { }
