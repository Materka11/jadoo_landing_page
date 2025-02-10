import { Meta, StoryFn } from '@storybook/react';
import { Testimonials } from '../../components/organisms/Testimonials';

export default {
  title: 'Organisms/Testimonials',
  component: Testimonials,
} as Meta;

const Template: StoryFn = (args) => <Testimonials {...args} />;

export const Default = Template.bind({});
Default.args = {};
