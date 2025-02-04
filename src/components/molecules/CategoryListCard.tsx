import { CategoryCard, ICategoryCard } from '../atoms/CategoryCard';

export interface IProps {
  cards: ICategoryCard[];
}

export const CategoryListCard = ({ cards }: IProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-5 lg:flex-row">
      {cards?.map((card) => <CategoryCard key={card?.title} {...card} />)}
    </div>
  );
};
