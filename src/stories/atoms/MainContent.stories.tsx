import type { Meta, StoryFn } from '@storybook/react';
import { MainContentImage } from '../../components/atoms/MainContentImage';

export default {
  title: 'atoms/MainContentImage',
  component: MainContentImage,
} as Meta;

const Template: StoryFn = () => <MainContentImage />;

export const Default = Template.bind({});
