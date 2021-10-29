import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserCard} from './user-card.component';
import {ButtonModule, ProgressBarModule} from '@shared/components';

@NgModule({
  declarations: [UserCard],
  imports: [CommonModule, ButtonModule, ProgressBarModule],
  exports: [UserCard],
})
export class UserCardModule {
}
