import { Headers } from '../atoms/Headers';
import { CategoryCard } from '../atoms/CategoryCard';
import { PlaneWithRectangleIcon } from '../atoms/PlaneWithRectangleIcon';
import Bg1 from '../../assets/image/Bg1.webp';

export const Category = () => {
  return (
    <section className="relative">
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
      <img
        src={Bg1}
        alt="bacground image"
        className="absolute top-0 -right-20 z-0"
      />
    </section>
  );
};
