import { Meta, StoryFn } from '@storybook/react';
import { TwitterIcon, IProps } from '../../components/atoms/TwitterIcon';

export default {
  title: 'Atoms/TwitterIcon',
  component: TwitterIcon,
} as Meta;

const Template: StoryFn<IProps> = (args) => <TwitterIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-6 h-6',
};
