import {moduleMetadata, Story, Meta} from '@storybook/angular';
import {CommonModule} from '@angular/common';

import {Button} from '@shared/components';
import Header from './header.component';
import Page from './page.component';

import * as HeaderStories from './Header.stories';

export default {
  title: 'Pages/Page',
  component: Page,
  decorators: [
    moduleMetadata({
      declarations: [Button, Header],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<Page> = (args: Page) => ({
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/angular/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
