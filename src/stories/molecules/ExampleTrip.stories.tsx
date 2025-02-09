import { Meta, StoryFn } from '@storybook/react';
import { ExampleTrip } from '../../components/molecules/ExampleTrip';

export default {
  title: 'Molecules/ExampleTrip',
  component: ExampleTrip,
} as Meta;

const Template: StoryFn = (args) => <ExampleTrip {...args} />;

export const Default = Template.bind({});
Default.args = {};
