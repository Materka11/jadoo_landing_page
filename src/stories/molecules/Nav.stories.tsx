import { Meta, StoryFn } from '@storybook/react';
import { Nav, IProps } from '../../components/molecules/Nav';

export default {
  title: 'Molecules/Nav',
  component: Nav,
} as Meta;

const Template: StoryFn<IProps> = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/' },
  ],
};
