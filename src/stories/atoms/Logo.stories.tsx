import { Meta, StoryFn } from '@storybook/react';
import { Logo } from '../../components/atoms/Logo';

export default {
  title: 'Atoms/Logo',
  component: Logo,
} as Meta;

const Template: StoryFn = (args) => <Logo {...args} />;

export const Default = Template.bind({});
