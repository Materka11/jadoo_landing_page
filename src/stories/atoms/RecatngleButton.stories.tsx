import { Meta, StoryFn } from '@storybook/react';
import {
  RectangleButton,
  ButtonProps,
} from '../../components/atoms/RectangleButton';

export default {
  title: 'Atoms/RectangleButton',
  component: RectangleButton,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <RectangleButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Find out more',
  color: '#F1A501',
  href: '/find-out-more',
};
