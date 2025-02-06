import { Meta, StoryFn } from '@storybook/react';
import { LeafIcon, IProps } from '../../components/atoms/LeafIcon';

export default {
  title: 'Atoms/LeafIcon',
  component: LeafIcon,
} as Meta;

const Template: StoryFn<IProps> = (args) => <LeafIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-6 h-6',
};
