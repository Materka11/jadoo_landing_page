import { Meta, StoryFn } from '@storybook/react';
import { TopSellingText } from '../../components/atoms/TopSellingText';

export default {
  title: 'Atoms/TopSellingText',
  component: TopSellingText,
} as Meta;

const Template: StoryFn = () => <TopSellingText />;

export const Default = Template.bind({});
