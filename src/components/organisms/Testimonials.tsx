import { VerticalSlider } from '../molecules/VerticalSlider';
import { Headers } from '../atoms/Headers';
import { useTranslation } from 'react-i18next';

export const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-0">
      <Headers
        label={t('testimonials')}
        sublabel={t('what_people_say')}
        labelStyles={'font-[600] text-lg text-text-color'}
        sublabelStyles={'font-bold text-5xl text-deepblue font-volkhov'}
        sectionStyles="max-w-[500px] gap-4"
      />
      <VerticalSlider />
    </section>
  );
};
