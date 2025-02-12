import { Meta, StoryFn } from '@storybook/react';
import { EmailIcon, IProps } from '../../components/atoms/EmailIcon';

export default {
  title: 'Atoms/EmailIcon',
  component: EmailIcon,
} as Meta;

const Template: StoryFn<IProps> = (args) => <EmailIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-6 h-6',
};
