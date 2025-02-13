import { VerticalSlider } from '../molecules/VerticalSlider';
import { Headers } from '../atoms/Headers';

export const Testimonials = () => {
  return (
    <section className="flex justify-between">
      <Headers
        label={'Testimonials'}
        sublabel={'What People Say Abut Us.'}
        labelStyles={'font-[600] text-lg text-text-color'}
        sublabelStyles={'font-bold text-5xl text-deepblue font-volkhov'}
        sectionStyles="max-w-[500px] gap-4"
      />
      <VerticalSlider />
    </section>
  );
};
