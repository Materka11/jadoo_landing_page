import { Meta, StoryFn } from '@storybook/react';
import { FacebookIcon, IProps } from '../../components/atoms/FacebookIcon';

export default {
  title: 'Atoms/FacebookIcon',
  component: FacebookIcon,
} as Meta;

const Template: StoryFn<IProps> = (args) => <FacebookIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-6 h-6',
};
