import { Meta, StoryFn } from '@storybook/react';
import {
  PlaneImage,
  IPlaneImageProps,
} from '../../components/atoms/PlaneImage';

export default {
  title: 'Components/PlaneImage',
  component: PlaneImage,
  argTypes: {
    className: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<IPlaneImageProps> = (args) => <PlaneImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-32 h-32',
};
