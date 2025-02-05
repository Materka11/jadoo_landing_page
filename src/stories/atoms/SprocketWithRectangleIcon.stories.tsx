import { Meta, StoryFn } from '@storybook/react';
import {
  SprocketWithRectangleIcon,
  IProps,
} from '../../components/atoms/SprocketWithRectangleIcon';

export default {
  title: 'Atoms/SprocketWithRectangleIcon',
  component: SprocketWithRectangleIcon,
} as Meta;

const Template: StoryFn<IProps> = (args) => (
  <SprocketWithRectangleIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'w-6 h-6',
};
