import { Meta, StoryFn } from '@storybook/react';
import { EasyAndFast } from '../../components/organisms/EasyAndFast';

export default {
  title: 'Organisms/EasyAndFast',
  component: EasyAndFast,
} as Meta;

const Template: StoryFn = (args) => <EasyAndFast {...args} />;

export const Default = Template.bind({});
Default.args = {};
