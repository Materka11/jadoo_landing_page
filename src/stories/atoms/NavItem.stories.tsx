import { Meta, StoryFn } from '@storybook/react';
import { NavItem } from '../../components/atoms/NavItem';

export default {
  title: 'Atoms/NavItem',
  component: NavItem,
} as Meta;

const Template: StoryFn<typeof NavItem> = (args) => <NavItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Home',
  link: '/',
};
