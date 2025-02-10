import { Meta, StoryFn } from '@storybook/react';
import {
  ChooseDestinationIcon,
  IProps,
} from '../../components/atoms/ChooseDestinationIcon';

export default {
  title: 'Atoms/ChooseDestinationIcon',
  component: ChooseDestinationIcon,
} as Meta;

const Template: StoryFn<IProps> = (args) => <ChooseDestinationIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-6 h-6',
};
