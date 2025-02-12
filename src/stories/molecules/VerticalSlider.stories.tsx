import { Meta, StoryFn } from '@storybook/react';
import { VerticalSlider } from '../../components/molecules/VerticalSlider';

export default {
  title: 'Molecules/VerticalSlider',
  component: VerticalSlider,
} as Meta;

const Template: StoryFn = () => <VerticalSlider />;

export const Default = Template.bind({});
