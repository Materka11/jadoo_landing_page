import { Meta, StoryFn } from '@storybook/react';
import { HeartIcon, IProps } from '../../components/atoms/HeartIcon';

export default {
  title: 'Atoms/HeartIcon',
  component: HeartIcon,
} as Meta;

const Template: StoryFn<IProps> = (args) => <HeartIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-6 h-6',
};
