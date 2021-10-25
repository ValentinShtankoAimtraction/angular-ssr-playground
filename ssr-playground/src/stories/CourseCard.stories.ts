import {CourseCardComponent} from "./components/course-card/course-card.component";
import {Meta, Story} from "@storybook/angular/types-6-0";

export default {
  title: 'Course Card',
  component: CourseCardComponent,
} as Meta;

const Template: Story<CourseCardComponent> = (args: CourseCardComponent) => ({
  props: args,
});

export const CourseCard = Template.bind({});
CourseCard.args = {};
