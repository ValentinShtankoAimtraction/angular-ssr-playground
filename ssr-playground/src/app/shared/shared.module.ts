import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule, ProgressBarModule} from './components';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ButtonModule, ProgressBarModule],
})
export class SharedModule {
}
