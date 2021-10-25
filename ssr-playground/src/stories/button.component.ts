import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'storybook-button',
  template: `
    <button
      type="button"
      (click)="onClick.emit($event)"
      [ngClass]="classes"
    >
      {{ label }}
    </button>`,
  styleUrls: ['./button.scss'],
})
export default class ButtonComponent {
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

  /**
   * outline property
   *
   */
  @Input()
  outline = false;

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    const disabled = this.disabled ? 'storybook-button--disabled' : '';
    const outline = this.outline ? 'storybook-button--outline' : '';
    return ['storybook-button', `storybook-button--${this.size}`, mode, disabled, outline];
  }
}
