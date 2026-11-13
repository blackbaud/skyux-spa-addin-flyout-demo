import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { SkyI18nModule } from '@skyux/i18n';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    imports: [SkyI18nModule],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true
})
export class NotFoundComponent { }
