import { Meta, StoryFn } from '@storybook/react';
import { List, IProps } from '../../components/molecules/List';
import { ChooseDestinationIcon } from '../../components/atoms/ChooseDestinationIcon';
import { PaymentIcon } from '../../components/atoms/PaymentIcon';
import { ReachAirportIcon } from '../../components/atoms/ReachAirportIcon';

export default {
  title: 'Molecules/List',
  component: List,
} as Meta;

const Template: StoryFn<IProps> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      Icon: ChooseDestinationIcon,
      label: 'Choose Destination',
      description: 'Pick a destination that suits your travel plans.',
    },
    {
      Icon: PaymentIcon,
      label: 'Make Payment',
      description: 'Complete your booking with our secure payment system.',
    },
    {
      Icon: ReachAirportIcon,
      label: 'Reach Airport on Selected Date',
      description: 'Arrive at the airport on your selected date and time.',
    },
  ],
};
