import { Meta, StoryFn } from '@storybook/react';
import { MapIcon, IProps } from '../../components/atoms/MapIcon';

export default {
  title: 'Atoms/MapIcon',
  component: MapIcon,
} as Meta;

const Template: StoryFn<IProps> = (args) => <MapIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-6 h-6',
};
