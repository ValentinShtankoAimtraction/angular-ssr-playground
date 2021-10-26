import {Story, Meta} from '@storybook/angular';
import {Button} from '@shared/components';

export default {
  title: 'Components/Forms/Button',
  component: Button,
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  outline: true,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
  label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Button',
};
