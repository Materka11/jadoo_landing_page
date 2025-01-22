import { Meta, StoryFn } from '@storybook/react';
import { CardList, IProps } from '../../components/organisms/CardList';

export default {
  title: 'Organisms/CardList',
  component: CardList,
} as Meta;

const Template: StoryFn<IProps> = (args) => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  cards: [
    {
      title: 'Card 1',
      description: 'This is the first card',
      buttonText: 'Click Me',
      onButtonClick: () => alert('Card 1 button clicked'),
    },
    {
      title: 'Card 2',
      description: 'This is the second card',
      buttonText: 'Click Me',
      onButtonClick: () => alert('Card 2 button clicked'),
    },
    {
      title: 'Card 3',
      description: 'This is the third card',
      buttonText: 'Click Me',
      onButtonClick: () => alert('Card 3 button clicked'),
    },
  ],
};
