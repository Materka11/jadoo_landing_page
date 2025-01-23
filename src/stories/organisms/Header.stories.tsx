import { Meta, StoryFn } from '@storybook/react';
import { Header } from '../../components/organisms/Header';

export default {
  title: 'Organisms/Header',
  component: Header,
} as Meta;

const Template: StoryFn = (args) => <Header {...args} />;

export const Default = Template.bind({});
