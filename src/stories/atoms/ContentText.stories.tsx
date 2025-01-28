import { Meta, StoryFn } from '@storybook/react';
import ContentText from '../../components/atoms/ContentText';

export default {
  title: 'Atoms/ContentText',
  component: ContentText,
} as Meta;

const Template: StoryFn = () => <ContentText />;

export const Default = Template.bind({});
Default.args = {};
