import { Meta, StoryFn } from '@storybook/react';
import { AppleIcon, IProps } from '../../components/atoms/AppleIcon';

export default {
  title: 'Atoms/AppleIcon',
  component: AppleIcon,
} as Meta;

const Template: StoryFn<IProps> = (args) => <AppleIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-6 h-6',
};
