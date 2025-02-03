import { Headers } from '../atoms/Headers';
import { CategoryCard } from '../atoms/CategoryCard';
import { PlaneWithRectangleIcon } from '../atoms/PlaneWithRectangleIcon';

export const Category = () => {
  return (
    <section>
      <Headers
        label="Category"
        sublabel="We Offer Best Services"
        labelStyles="text-sm lg:text-lg text-gray-600 font-[600] uppercase"
        sublabelStyles="text-3xl lg:text-5xl text-navyblue font-bold font-volkhov"
        sectionStyles="gap-1 lg:gap-2 text-center"
      />
      <CategoryCard
        Icon={PlaneWithRectangleIcon}
        title="Best Flights"
        description="Engrossed listening. Park gate sell they west hard for the."
      />
    </section>
  );
};
