import {
  Component,
  OnInit,
  Input,
  inject
} from '@angular/core';
import { FlyoutService } from '../shared/services/flyout.service';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';
import { AddinClientInitArgs } from '@blackbaud/sky-addin-client';
import { SkyAvatarModule } from '@skyux/avatar';
import { SkyLabelModule } from '@skyux/indicators';
import { SkyPageSummaryModule } from '@skyux/layout';

@Component({
    selector: 'app-flyout-detail',
    templateUrl: './flyout-detail.component.html',
    imports: [SkyAvatarModule, SkyLabelModule, SkyPageSummaryModule],
    standalone: true
})
export class FlyoutDetailComponent implements OnInit {
  private flyoutSvc = inject(FlyoutService);
  private addinClientService = inject(AddinClientService);

  @Input()
  public id!: string;
  public record: any;

  public ngOnInit() {
    this.addinClientService.args.subscribe((args: AddinClientInitArgs) => {
      this.record = args.context.data;
    });

    if (this.id) {
      this.record = this.flyoutSvc.getRecordById(this.id);
    }
  }
}
