import { ElementType } from 'react';

export interface ICategoryCard {
  Icon: ElementType;
  title: string;
  description: string;
}

export const CategoryCard = ({ Icon, description, title }: ICategoryCard) => {
  return (
    <section className="before:bg-sunset-orange relative flex h-[314px] w-[267px] flex-col items-center justify-around rounded-[2rem] bg-white transition-all duration-300 ease-in-out transform-3d before:absolute before:bottom-0 before:left-0 before:block before:h-[100px] before:w-[100px] before:rounded-tl-4xl before:rounded-br-xl before:opacity-0 before:transition-all before:duration-300 hover:shadow-lg hover:before:-translate-x-1/2 hover:before:translate-y-1/2 hover:before:-translate-z-px hover:before:opacity-100">
      <Icon className="h-24 w-24" />
      <section className="flex max-w-[180px] flex-col items-center gap-4 text-center">
        <h4 className="text-royal-navy font-opensans text-xl font-[600]">
          {title}
        </h4>
        <p className="text-gray-600">{description}</p>
      </section>
    </section>
  );
};
