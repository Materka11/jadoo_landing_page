import { Meta, StoryFn } from '@storybook/react';
import { GooglePlayIcon, IProps } from '../../components/atoms/GooglePlayIcon';

export default {
  title: 'Atoms/GooglePlayIcon',
  component: GooglePlayIcon,
} as Meta;

const Template: StoryFn<IProps> = (args) => <GooglePlayIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-6 h-6',
};
