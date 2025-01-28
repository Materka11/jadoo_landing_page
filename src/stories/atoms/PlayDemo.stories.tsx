import { Meta, StoryFn } from '@storybook/react';
import PlayDemo from '../../components/atoms/PlayDemo';

export default {
  title: 'Atoms/PlayDemo',
  component: PlayDemo,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn = (args) => <PlayDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};
