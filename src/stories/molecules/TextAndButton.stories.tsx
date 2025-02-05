import { Meta, StoryFn } from '@storybook/react';
import { TextAndButtons } from '../../components/molecules/TextAndButtons';

export default {
  title: 'Molecules/TextAndButtons',
  component: TextAndButtons,
} as Meta;

const Template: StoryFn = () => <TextAndButtons />;

export const Default = Template.bind({});
