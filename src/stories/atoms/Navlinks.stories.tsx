import { Meta, StoryFn } from '@storybook/react';
import { Navlinks, IProps } from '../../components/atoms/Navlinks';

export default {
  title: 'Atoms/Navlinks',
  component: Navlinks,
} as Meta;

const Template: StoryFn<IProps> = (args) => <Navlinks {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Company',
  links: [
    { label: 'About', url: '/' },
    { label: 'Careers', url: '/' },
    { label: 'Mobile', url: '/' },
  ],
};
