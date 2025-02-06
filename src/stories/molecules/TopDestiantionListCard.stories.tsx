import { Meta, StoryFn } from '@storybook/react';
import {
  IDestinationsProps,
  TopDestinationListCard,
} from '../../components/molecules/TopDestinationListCard';
import { destinations } from '../../data/destinations';

export default {
  title: 'Components/TopSellingListCard',
  component: TopDestinationListCard,
} as Meta;

const Template: StoryFn<IDestinationsProps> = (args) => (
  <TopDestinationListCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  destinations,
};
