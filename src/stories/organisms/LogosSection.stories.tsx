import type { Meta, StoryFn } from '@storybook/react';
import { LogosSection } from '../../components/organisms/LogosSection';

export default {
  title: 'Organisms/LogosSection',
  component: LogosSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn = () => <LogosSection />;

export const Default = Template.bind({});
