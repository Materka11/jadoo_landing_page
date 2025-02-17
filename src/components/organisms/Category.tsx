import { useTranslation } from 'react-i18next';
import { Headers } from '../atoms/Headers';
import { ICategoryCard } from '../atoms/CategoryCard';
import { PlaneWithRectangleIcon } from '../atoms/PlaneWithRectangleIcon';
import Bg1 from '../../assets/image/Bg1.webp';
import { CategoryListCard } from '../molecules/CategoryListCard';
import { SatelliteWithRectangleIcon } from '../atoms/SatelliteWithRectangleIcon';
import { MicWithRectangleIcon } from '../atoms/MicWithRectangleIcon';
import { SprocketWithRectangleIcon } from '../atoms/SprocketWithRectangleIcon';

export const Category = () => {
  const { t } = useTranslation();

  const CARDS: ICategoryCard[] = [
    {
      Icon: SatelliteWithRectangleIcon,
      title: t('calculated_weather'),
      description: t('calculated_weather_description'),
    },
    {
      Icon: PlaneWithRectangleIcon,
      title: t('best_flights'),
      description: t('best_flights_description'),
    },
    {
      Icon: MicWithRectangleIcon,
      title: t('local_events'),
      description: t('local_events_description'),
    },
    {
      Icon: SprocketWithRectangleIcon,
      title: t('customization'),
      description: t('customization_description'),
    },
  ];

  return (
    <section className="relative my-28 flex flex-col gap-16">
      <Headers
        label={t('category')}
        sublabel={t('we_offer_best_services')}
        labelStyles="text-sm lg:text-lg text-gray-600 font-[600] uppercase"
        sublabelStyles="text-3xl lg:text-5xl text-navyblue font-bold font-volkhov"
        sectionStyles="gap-1 lg:gap-2 text-center"
      />
      <CategoryListCard cards={CARDS} />
      <img
        src={Bg1}
        alt="background image"
        className="absolute top-0 -right-20 z-0"
      />
    </section>
  );
};
