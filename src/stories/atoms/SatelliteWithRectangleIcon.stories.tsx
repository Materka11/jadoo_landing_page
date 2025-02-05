import { Meta, StoryFn } from '@storybook/react';
import {
  SatelliteWithRectangleIcon,
  IProps,
} from '../../components/atoms/SatelliteWithRectangleIcon';

export default {
  title: 'Atoms/SatelliteWithRectangleIcon',
  component: SatelliteWithRectangleIcon,
} as Meta;

const Template: StoryFn<IProps> = (args) => (
  <SatelliteWithRectangleIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'w-6 h-6',
};
