import { Headers } from '../atoms/Headers';
import { ICategoryCard } from '../atoms/CategoryCard';
import { PlaneWithRectangleIcon } from '../atoms/PlaneWithRectangleIcon';
import Bg1 from '../../assets/image/Bg1.webp';
import { CategoryListCard } from '../molecules/CategoryListCard';
import { SatelliteWithRectangleIcon } from '../atoms/SatelliteWithRectangleIcon';
import { MicWithRectangleIcon } from '../atoms/MicWithRectangleIcon';
import { SprocketWithRectangleIcon } from '../atoms/SprocketWithRectangleIcon';

export const Category = () => {
  const CARDS: ICategoryCard[] = [
    {
      Icon: SatelliteWithRectangleIcon,
      title: 'Calculated Weather',
      description:
        'Built Wicket longer admire do barton vanity itself do in it.',
    },
    {
      Icon: PlaneWithRectangleIcon,
      title: 'Best Flights',
      description:
        'Engrossed listening. Park gate sell they west hard for the.',
    },
    {
      Icon: MicWithRectangleIcon,
      title: 'Local Events',
      description:
        'Barton vanity itself do in it. Preferd to men it engrossed listening. ',
    },
    {
      Icon: SprocketWithRectangleIcon,
      title: 'Customization',
      description:
        'We deliver outsourced aviation services for military customers',
    },
  ];

  return (
    <section className="relative my-28 flex flex-col gap-16">
      <Headers
        label="Category"
        sublabel="We Offer Best Services"
        labelStyles="text-sm lg:text-lg text-gray-600 font-[600] uppercase"
        sublabelStyles="text-3xl lg:text-5xl text-navyblue font-bold font-volkhov"
        sectionStyles="gap-1 lg:gap-2 text-center"
      />
      <CategoryListCard cards={CARDS} />
      <img
        src={Bg1}
        alt="bacground image"
        className="absolute top-0 -right-20 z-0"
      />
    </section>
  );
};
