import { Meta, StoryFn } from '@storybook/react';
import {
  PlaneWithRectangleIcon,
  IProps,
} from '../../components/atoms/PlaneWithRectangleIcon';

export default {
  title: 'Atoms/PlaneWithRectangleIcon',
  component: PlaneWithRectangleIcon,
} as Meta;

const Template: StoryFn<IProps> = (args) => (
  <PlaneWithRectangleIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'w-6 h-6',
};
