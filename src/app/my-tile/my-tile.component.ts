import {
  Component,
  OnInit
} from '@angular/core';
import { FlyoutService } from '../shared/services/flyout.service';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';
import { AddinClientInitArgs, AddinTileSummaryStyle, AddinClientShowFlyoutArgs } from '@blackbaud/sky-addin-client';

@Component({
  selector: 'app-my-tile',
  templateUrl: './my-tile.component.html',
  styleUrls: ['./my-tile.component.scss']
})
export class MyTileComponent implements OnInit {
  public records: any;
  public rowHighlightedId!: string;

  constructor(
    private flyoutSvc: FlyoutService,
    private addinClientService: AddinClientService
  ) { }

  public ngOnInit() {
    this.addinClientService.args.subscribe((args: AddinClientInitArgs) => {

      args.ready({
        showUI: true,
        title: 'My Flyout tile',
        tileConfig: {
          summaryStyle: AddinTileSummaryStyle.Check,
          summaryChecked: true
        }
      });
    });

    this.records = this.flyoutSvc.getRecords();

    this.addinClientService.flyoutNextClick.subscribe(() => {
      this.showFlyoutForNextRecord(this.rowHighlightedId);
    });

    this.addinClientService.flyoutPreviousClick.subscribe(() => {
      this.showFlyoutForPreviousRecord(this.rowHighlightedId);
    });
  }

  public onNameClick(record: any): void {
    this.showFlyoutForRecord(record);
  }

  public closeFlyout() {
    this.addinClientService.closeFlyout();
  }

  public showFlyoutForRecord(record: any) {
    this.rowHighlightedId = record.id;

    const flyoutArgs: AddinClientShowFlyoutArgs = {
      url: 'https://localhost:4200/flyout-detail',
      permalink: {
        label: 'View record',
        url: 'https://localhost:4200/flyout-detail/' + record.id
      },
      showIterator: true,
      iteratorPreviousDisabled: MyTileComponent.isFirstElementInArray(this.rowHighlightedId, this.records),
      iteratorNextDisabled: MyTileComponent.isLastElementInArray(this.rowHighlightedId, this.records),
      defaultWidth: 500,
      maxWidth: 800,
      minWidth: 200,
      context: {
        data: record
      }
    };

    this.addinClientService.showFlyout(flyoutArgs)
      .subscribe(() => {
        this.rowHighlightedId = '';
      });
  }

  public showFlyoutForNextRecord(currentRecordId: string) {
    const next: any = MyTileComponent.stepToItemInArray(this.records, currentRecordId, 1);
    this.showFlyoutForRecord(next);
  }

  public showFlyoutForPreviousRecord(currentRecordId: string) {
    const previous: any = MyTileComponent.stepToItemInArray(this.records, currentRecordId, -1);
    this.showFlyoutForRecord(previous);
  }

  private static isFirstElementInArray(id: any, array: any[]) {
    const element = array.find(x => x.id === id);
    if (array[0] === element) {
      return true;
    }
    return false;
  }

  private static isLastElementInArray(id: any, array: any[]) {
    const element = array.find(x => x.id === id);
    if (array[array.length - 1] === element) {
      return true;
    }
    return false;
  }

  private static stepToItemInArray(array: Array<any>, currentId: string, step: number) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === currentId) {
        return array[i + step];
      }
    }
  }
}
