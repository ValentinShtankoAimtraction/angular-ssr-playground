import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule, ProgressBarModule, UserCardModule} from './components';

export const UI_MODULES = [ButtonModule, ProgressBarModule, UserCardModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...UI_MODULES],
  exports: [CommonModule, ...UI_MODULES],
})
export class SharedModule {
}
