import { Meta, StoryFn } from '@storybook/react';
import { Category } from '../../components/organisms/Category';

export default {
  title: 'Organisms/Category',
  component: Category,
} as Meta;

const Template: StoryFn = (args) => <Category {...args} />;

export const Default = Template.bind({});
Default.args = {};
