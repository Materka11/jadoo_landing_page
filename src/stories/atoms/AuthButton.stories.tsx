import { Meta, StoryFn } from '@storybook/react';
import { AuthButton, IProps } from '../../components/atoms/AuthButton';

export default {
  title: 'Atoms/AuthButton',
  component: AuthButton,
} as Meta;

const Template: StoryFn<IProps> = (args) => <AuthButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Sign in',
  // eslint-disable-next-line no-console
  action: () => console.log('Sign in'),
  isBorder: false,
};

export const Border = Template.bind({});

Border.args = {
  label: 'Sign up',
  // eslint-disable-next-line no-console
  action: () => console.log('Sign up'),
  isBorder: true,
};
