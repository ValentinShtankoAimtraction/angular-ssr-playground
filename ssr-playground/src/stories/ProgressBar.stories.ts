import {Meta, Story} from '@storybook/angular';
import {ProgressBar} from '@shared/components';

export default {
  title: 'Components/UI/Progress Bar',
  component: ProgressBar,
} as Meta;

const Template: Story<ProgressBar> = (args: ProgressBar) => ({
  props: args,
});

export const Full = Template.bind({});
Full.args = {
  value: 100,
  maxValue: 100,
  separated: true,
  slices: 242,
};

export const Half = Template.bind({});
Half.args = {
  value: 50,
  maxValue: 100,
  separated: true,
  slices: 10,
};
