import { CardList } from '../organisms/CardList';

export const HomeTemplate = () => {
  const cards = [
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
  ];

  return <CardList cards={cards} />;
};
