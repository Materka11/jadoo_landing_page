import { Meta, StoryFn } from '@storybook/react';
import { BuildingIcon, IProps } from '../../components/atoms/BuildingIcon';

export default {
  title: 'Atoms/BuildingIcon',
  component: BuildingIcon,
} as Meta;

const Template: StoryFn<IProps> = (args) => <BuildingIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-6 h-6',
};
