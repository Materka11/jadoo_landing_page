import { Meta, StoryFn } from '@storybook/react';
import MainContent from '../../components/organisms/MainContent';

export default {
  title: 'Organisms/MainContent',
  component: MainContent,
} as Meta;

const Template: StoryFn = () => <MainContent />;

export const Default = Template.bind({});
