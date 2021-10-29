import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {UserCard} from '@shared/components/user-card';
import {SharedModule} from '@shared/shared.module';

export default {
  title: 'Components/UI/UserCard',
  component: UserCard,
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
    }),
  ],
} as Meta;

const Template: Story<UserCard> = (args: UserCard) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  user: {
    username: 'Darrell Steward',
    maxValue: 7000,
    points: 4250,
  },
  mobile: false,
};

export const Mobile = Template.bind({});
Mobile.args = {
  user: {
    username: 'Darrell Steward',
    maxValue: 7000,
    points: 4250,
  },
  mobile: true,
};
