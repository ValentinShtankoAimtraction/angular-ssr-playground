import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class Button {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Approve';

  /**
   * disabled property
   *
   * @required
   */
  @Input()
  disabled = false;

  private _outline = false;
  /**
   * outline property
   *
   */
  @Input()
  set outline(outline: boolean) {
    this._outline = outline;
  }

  get outline(): boolean {
    return this._outline;
  }

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'ui-button--primary' : 'ui-button--secondary';
    const disabled = this.disabled ? 'ui-button--disabled' : '';
    const outline = this.outline ? 'ui-button--outline' : '';
    return ['ui-button', `ui-button--${this.size}`, mode, disabled, outline];
  }
}
