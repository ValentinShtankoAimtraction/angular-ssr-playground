import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

export const MAX_SLICES = 100;

@Component({
  selector: 'ui-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBar {
  @Input()
  value: number = 0;

  @Input()
  maxValue: number = 0;

  get progress(): number {
    if (!this.value || !this.maxValue) {
      return 0;
    }
    return (this.value / this.maxValue) * 100;
  }

  @Input()
  separated = false;

  _slices: Array<null> = [];
  /**
   * count of slices (limit: 100)
   *
   */
  @Input()
  set slices(slices: number) {
    if (slices >= MAX_SLICES) {
      slices = MAX_SLICES;
    }
    this._slices = Array(slices - 1).fill(0);
  }
}
