import {Meta, Story} from '@storybook/angular';
import {ProgressBar} from '@shared/components';

export default {
  title: 'Components/UI/Progress Bar',
  component: ProgressBar,
} as Meta;

const Template: Story<ProgressBar> = (args: ProgressBar) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  value: 24,
  maxValue: 100,
  separated: true,
  slices: 9,
  border: true,
};

export const ALotSlices = Template.bind({});
ALotSlices.args = {
  value: 12,
  maxValue: 33,
  separated: true,
  slices: 33,
  border: true,
};

export const Small = Template.bind({});
Small.args = {
  value: 33,
  maxValue: 100,
  size: 'small',
};
