import { Meta, StoryFn } from '@storybook/react';
import {
  MicWithRectangleIcon,
  IProps,
} from '../../components/atoms/MicWithRectangleIcon';

export default {
  title: 'Atoms/MicWithRectangleIcon',
  component: MicWithRectangleIcon,
} as Meta;

const Template: StoryFn<IProps> = (args) => <MicWithRectangleIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-6 h-6',
};
