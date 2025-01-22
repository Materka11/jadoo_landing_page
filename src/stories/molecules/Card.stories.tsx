import { Meta, StoryFn } from '@storybook/react';
import { Card, IProps } from '../../components/molecules/Card';

export default {
  title: 'Molecules/Card',
  component: Card,
} as Meta;

const Template: StoryFn<IProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  description: 'This is a description of the card.',
  buttonText: 'Click Me',
  onButtonClick: () => alert('Card button clicked'),
};
