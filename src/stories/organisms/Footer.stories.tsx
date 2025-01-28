import { Meta, StoryFn } from '@storybook/react';
import { Footer } from '../../components/organisms/Footer';

export default {
  title: 'Organisms/Footer',
  component: Footer,
} as Meta;

const Template: StoryFn = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
