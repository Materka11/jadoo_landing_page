import { Meta, StoryFn } from '@storybook/react';
import { InstagramIcon, IProps } from '../../components/atoms/InstagramIcon';

export default {
  title: 'Atoms/InstagramIcon',
  component: InstagramIcon,
} as Meta;

const Template: StoryFn<IProps> = (args) => <InstagramIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-6 h-6',
};
