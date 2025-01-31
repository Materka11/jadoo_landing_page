import { CardList } from '../organisms/CardList';
import { Footer } from '../organisms/Footer';
import { Header } from '../organisms/Header';

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

  return (
    <div className="flex h-full min-h-screen w-full max-w-[1440px] flex-col justify-between p-6 lg:p-0 lg:px-6 lg:py-6 xl:px-32 xl:py-12">
      <Header />
      <section>
        <CardList cards={cards} />
      </section>
      <Footer />
    </div>
  );
};
