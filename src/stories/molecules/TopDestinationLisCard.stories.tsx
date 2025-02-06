import { Meta, StoryFn } from '@storybook/react';
import {
  IDestinationsProps,
  TopDestinationListCard,
} from '../../components/molecules/TopDestinationListCard';
import { destinations } from '../../data/destiantions';

export default {
  title: 'Components/TopDestiantionListCard',
  component: TopDestinationListCard,
} as Meta;

const Template: StoryFn<IDestinationsProps> = (args) => (
  <TopDestinationListCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  destinations,
};
