import { Meta, StoryFn } from '@storybook/react';
import TopSelling from '../../components/organisms/TopSelling';

export default {
  title: 'Organisms/TopSelling',
  component: TopSelling,
} as Meta;

const Template: StoryFn = () => <TopSelling />;

export const Default = Template.bind({});
