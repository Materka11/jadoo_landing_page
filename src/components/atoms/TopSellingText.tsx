import { useTranslation } from 'react-i18next';
import { Headers } from './Headers';

export const TopSellingText = () => {
  const { t } = useTranslation();
  return (
    <Headers
      sectionStyles="text-center"
      label={t('top_selling')}
      labelStyles="font-popins text-blueGray text-lg font-semibold"
      sublabel={t('top_destinations')}
      sublabelStyles="font-volkhov text-navyBlue text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold mb-16 md:mb-24 lg:mb-8 xl:mb-8 2xl:mb-8 "
    />
  );
};
