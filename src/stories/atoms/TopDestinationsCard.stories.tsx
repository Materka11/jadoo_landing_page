import { Meta, StoryFn } from '@storybook/react';
import {
  ITopDestinationsCardProps,
  TopDestinationsCard,
} from '../../components/atoms/TopDestinationsCard';

export default {
  title: 'Components/TopDestinationsCard',
  component: TopDestinationsCard,
  argTypes: {
    id: { control: 'number' },
    url: { control: 'text' },
    location: { control: 'text' },
    price: { control: 'text' },
    duration: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<ITopDestinationsCardProps> = (args) => (
  <TopDestinationsCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: 1,
  url: 'src/assets/image/rome.webp',
  location: 'Rome, Italy',
  price: '$11,4k',
  duration: '10',
};
