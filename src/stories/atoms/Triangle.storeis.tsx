import { Meta, StoryFn } from '@storybook/react';
import { Triangle } from '../../components/atoms/Triangle';

export default {
  title: 'Atoms/Triangle',
  component: Triangle,
} as Meta;

const Template: StoryFn = () => <Triangle />;

export const Default = Template.bind({});
