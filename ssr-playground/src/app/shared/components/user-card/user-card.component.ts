import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

export interface User {
  username: string;
  points: number;
  maxValue: number;
}

@Component({
  selector: 'ui-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCard implements OnInit {
  @Input()
  user: User;

  @Input()
  mobile: boolean;

  constructor() {
    this.user = {
      username: '',
      points: 0,
      maxValue: 0,
    };
    this.mobile = false;
  }

  public get classes(): string[] {
    const mobile = this.mobile ? 'ui-user-card--mobile' : '';
    return ['ui-user-card', mobile].filter((x) => !!x);
  }

  ngOnInit(): void {
  }
}
