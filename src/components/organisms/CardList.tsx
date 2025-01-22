import { Card } from '../molecules/Card';

export interface IProps {
  cards: {
    title: string;
    description: string;
    buttonText: string;
    onButtonClick: () => void;
  }[];
}

export const CardList = ({ cards }: IProps) => {
  return (
    <div>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
          onButtonClick={card.onButtonClick}
        />
      ))}
    </div>
  );
};
