import { Meta, StoryFn } from '@storybook/react';
import TextRectangle from '../../components/atoms/TextRectangle';

export default {
  title: 'Atoms/TextRectangle',
  component: TextRectangle,
} as Meta;

const Template: StoryFn = () => <TextRectangle />;

export const Default = Template.bind({});
