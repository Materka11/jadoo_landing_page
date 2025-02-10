import { Meta, StoryFn } from '@storybook/react';
import {
  ReachAirportIcon,
  IProps,
} from '../../components/atoms/ReachAirportIcon';

export default {
  title: 'Atoms/ReachAirportIcon',
  component: ReachAirportIcon,
} as Meta;

const Template: StoryFn<IProps> = (args) => <ReachAirportIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-6 h-6',
};
