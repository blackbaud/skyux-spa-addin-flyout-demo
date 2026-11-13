import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterModule],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true
})
export class AppComponent {
  title = 'addin-flyout-demo';
}
