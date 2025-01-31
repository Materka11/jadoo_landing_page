import { Meta, StoryFn } from '@storybook/react';
import { HamburgerIcon, IProps } from '../../components/atoms/HamburgerIcon';

export default {
  title: 'Atoms/HamburgerIcon',
  component: HamburgerIcon,
} as Meta;

const Template: StoryFn<IProps> = (args) => <HamburgerIcon {...args} />;

export const Default = Template.bind({});

Default.args = {};
