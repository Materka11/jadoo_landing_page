import { Meta, StoryFn } from '@storybook/react';
import { SendIcon, IProps } from '../../components/atoms/SendIcon';

export default {
  title: 'Atoms/SendIcon',
  component: SendIcon,
} as Meta;

const Template: StoryFn<IProps> = (args) => <SendIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-6 h-6',
};
